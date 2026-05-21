import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchAllUsers,
  sendCertificateEmail,
  sendAllCertificates,
  downloadAllCertificates,
  uploadExcel,
} from "../redux/thunks/adminThunks";

import {
  fetchExams,
  createExam,
} from "../redux/thunks/examThunk";

import { downloadCertificate } from "../redux/thunks/certificateThunks";

import { useNavigate } from "react-router-dom";

import {
  FaDownload,
  FaEnvelope,
  FaUsers,
  FaBook,
  FaAward,
  FaPlus,
} from "react-icons/fa";

const AdminDashboard = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // =========================================
  // REDUX STATE
  // =========================================

  const { users, loading, error } = useSelector(
    (state) => state.admin
  );

  const { exams } = useSelector(
    (state) => state.exam
  );

  const { user } = useSelector(
    (state) => state.auth
  );

  // =========================================
  // EXAM MODAL STATE
  // =========================================

  const [showExamForm, setShowExamForm] = useState(false);

  const [examData, setExamData] = useState({

    subject: "",
    description: "",
    examDate: "",
    resultDate: "",
    marks: "",
    status: "Open",
    icon: "📘",
    color: "cyan",

  });

  // =========================================
  // FETCH DATA
  // =========================================

  useEffect(() => {

    if (!user || user.role !== "admin") {

      navigate("/login");

    } else {

      dispatch(fetchAllUsers());

      dispatch(fetchExams());

    }

  }, [user, dispatch, navigate]);

  // =========================================
  // DOWNLOAD CERTIFICATE
  // =========================================

  const handleDownload = (name) => {

    dispatch(downloadCertificate(name));

  };

  // =========================================
  // SEND EMAIL
  // =========================================

  const handleEmail = (name, email) => {

    dispatch(sendCertificateEmail({ name, email }));

  };

  // =========================================
  // EXCEL UPLOAD
  // =========================================

  const handleExcelUpload = (e) => {

    const file = e.target.files[0];

    dispatch(uploadExcel(file)).then(() => {

      dispatch(fetchAllUsers());

    });

  };

  // =========================================
  // EXAM INPUT CHANGE
  // =========================================

  const handleExamChange = (e) => {

    setExamData({

      ...examData,
      [e.target.name]: e.target.value,

    });

  };

  // =========================================
  // CREATE EXAM
  // =========================================

  const handleCreateExam = () => {

    dispatch(createExam(examData)).then(() => {

      dispatch(fetchExams());

      setShowExamForm(false);

      setExamData({

        subject: "",
        description: "",
        examDate: "",
        resultDate: "",
        marks: "",
        status: "Open",
        icon: "📘",
        color: "cyan",

      });

    });

  };

  // =========================================
  // TOTAL COUNTS
  // =========================================

  const totalStudents = users.length;

  const totalExams = exams.length;

  const passedStudents = users.filter(
    (u) => u.resultStatus === "Passed"
  ).length;

  // =========================================
  // LOADING
  // =========================================

  if (!user) return null;

  return (

    <div className="min-h-screen bg-[#020617] text-white">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <div className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold">

              Admin Dashboard

            </h1>

            <p className="text-gray-400 mt-2">

              Manage students, exams & certificates

            </p>

          </div>

          <div className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-5 py-2 rounded-full font-semibold">

            Admin Panel

          </div>

        </div>

      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* =========================================
            STATS
        ========================================= */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* USERS */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">

            <FaUsers className="text-5xl text-cyan-400 mb-5" />

            <p className="text-gray-400">
              Total Students
            </p>

            <h1 className="text-5xl font-bold mt-3">

              {totalStudents}

            </h1>

          </div>

          {/* EXAMS */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">

            <FaBook className="text-5xl text-yellow-400 mb-5" />

            <p className="text-gray-400">
              Olympiad Exams
            </p>

            <h1 className="text-5xl font-bold mt-3">

              {totalExams}

            </h1>

          </div>

          {/* PASSED */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">

            <FaAward className="text-5xl text-green-400 mb-5" />

            <p className="text-gray-400">
              Passed Students
            </p>

            <h1 className="text-5xl font-bold mt-3">

              {passedStudents}

            </h1>

          </div>

        </div>

        {/* =========================================
            EXCEL UPLOAD
        ========================================= */}

        <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <h2 className="text-3xl font-bold mb-5">

            Upload Student Excel

          </h2>

          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleExcelUpload}
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 w-full md:w-auto"
          />

        </div>

        {/* =========================================
            ACTION BUTTONS
        ========================================= */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* SEND */}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold">

              Send Certificates

            </h2>

            <p className="mt-3 text-cyan-100">

              Send certificates to all students instantly.

            </p>

            <button
              onClick={() => dispatch(sendAllCertificates())}
              className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >

              Send All Emails

            </button>

          </div>

          {/* DOWNLOAD */}

          <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold">

              Download Certificates

            </h2>

            <p className="mt-3 text-pink-100">

              Download all generated certificates instantly.

            </p>

            <button
              onClick={() =>
                dispatch(downloadAllCertificates())
              }
              className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >

              <FaDownload />

              Download All

            </button>

          </div>

        </div>

        {/* =========================================
            EXAM HEADER
        ========================================= */}

        <div className="flex justify-between items-center mt-14 mb-8">

          <div>

            <h1 className="text-4xl font-bold">

              Olympiad Exams

            </h1>

            <p className="text-gray-400 mt-2">

              Manage upcoming exams

            </p>

          </div>

          {/* CREATE BUTTON */}

          <button
            onClick={() => setShowExamForm(true)}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl shadow-lg flex items-center gap-3 transition-all duration-300"
          >

            <FaPlus />

            Create Exam

          </button>

        </div>

        {/* =========================================
            EXAM MODAL
        ========================================= */}

        {showExamForm && (

          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 w-full max-w-2xl shadow-2xl">

              <h1 className="text-4xl font-bold mb-8">

                Create Upcoming Exam

              </h1>

              {/* FORM */}

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={examData.subject}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  name="icon"
                  placeholder="Icon Emoji"
                  value={examData.icon}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={examData.description}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none md:col-span-2"
                />

                <input
                  type="text"
                  name="examDate"
                  placeholder="Exam Date"
                  value={examData.examDate}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  name="resultDate"
                  placeholder="Result Date"
                  value={examData.resultDate}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none"
                />

                <input
                  type="number"
                  name="marks"
                  placeholder="Marks"
                  value={examData.marks}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none"
                />

                <select
                  name="color"
                  value={examData.color}
                  onChange={handleExamChange}
                  className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 outline-none"
                >

                  <option value="cyan">
                    Cyan
                  </option>

                  <option value="pink">
                    Pink
                  </option>

                  <option value="yellow">
                    Yellow
                  </option>

                  <option value="green">
                    Green
                  </option>

                </select>

              </div>

              {/* BUTTONS */}

              <div className="flex gap-5 mt-10">

                <button
                  onClick={handleCreateExam}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl shadow-lg w-full transition-all duration-300"
                >

                  Create Exam

                </button>

                <button
                  onClick={() =>
                    setShowExamForm(false)
                  }
                  className="bg-red-500 hover:bg-red-400 text-white font-bold px-8 py-4 rounded-2xl shadow-lg w-full transition-all duration-300"
                >

                  Cancel

                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  );

};

export default AdminDashboard;