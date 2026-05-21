import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";

import {
  FiEdit2,
  FiMail,
  FiPhone,
  FiBook,
  FiAward,
  FiCalendar,
} from "react-icons/fi";

// REDUX THUNKS
import { updateProfile } from "../redux/thunks/authThunk";

import { fetchExams } from "../redux/thunks/examThunk";

// COMPONENT
import SubjectOlympiad from "./subjectolympaid";
import AlreadyRegisterd from "./alreadyRegisterd";

const Dashboard = () => {

  const dispatch = useDispatch();

  // =========================================
  // REDUX STATE
  // =========================================

  const { user, loading } = useSelector(
    (state) => state.auth
  );

  const { exams } = useSelector(
    (state) => state.exam
  );

  // =========================================
  // LOCAL STATE
  // =========================================

  const [isEditing, setIsEditing] = useState(false);

  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({

    name: "",
    whatsapp: "",
    className: "",
    profilePic: "",

  });

  // =========================================
  // LOAD USER + FETCH EXAMS
  // =========================================

  useEffect(() => {

    if (user) {

      setFormData({

        name: user.name || "",
        whatsapp: user.whatsapp || "",
        className: user.className || "",
        profilePic: user.profilePic || "",

      });

      setPreviewImage(

        user.profilePic ||
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"

      );

    }

    // ✅ FETCH EXAMS
    dispatch(fetchExams());

  }, [user, dispatch]);

  // =========================================
  // LOADING
  // =========================================

  if (loading) {

    return (

      <div className="min-h-screen bg-[#0f172a] flex justify-center items-center">

        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin">
        </div>

      </div>

    );

  }

  // =========================================
  // NO USER
  // =========================================

  if (!user) {

    return <Navigate to="/login" />;

  }

  // =========================================
  // INPUT CHANGE
  // =========================================

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });

  };

  // =========================================
  // IMAGE CHANGE
  // =========================================

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl = URL.createObjectURL(file);

      setPreviewImage(imageUrl);

      setFormData({

        ...formData,
        profilePic: imageUrl,

      });

    }

  };

  // =========================================
  // SAVE PROFILE
  // =========================================

  const handleSave = () => {

    dispatch(

      updateProfile({

        id: user._id,
        formData,

      })

    );

    setIsEditing(false);

  };

  return (

    <div className="min-h-screen bg-[#020617] text-white">

      {/* =========================================
          TOP NAVBAR
      ========================================= */}

      <div className="w-full border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">

            Student Portal

          </h1>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 px-5 py-2 rounded-xl font-semibold shadow-lg shadow-cyan-500/30"
          >

            Edit Profile

          </button>

        </div>

      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8">

        {/* =========================================
            LEFT PROFILE CARD
        ========================================= */}

        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">

          <div className="flex flex-col items-center">

            {/* PROFILE IMAGE */}

            <div className="relative">

              <img
                src={
                  previewImage ||
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                }
                alt="profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-xl shadow-cyan-500/30"
              />

              {/* EDIT IMAGE */}

              <label className="absolute bottom-2 right-2 bg-cyan-500 p-3 rounded-full cursor-pointer hover:scale-110 transition-all">

                <FiEdit2 size={18} />

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImage}
                />

              </label>

            </div>

            {/* USER INFO */}

            <h2 className="text-3xl font-bold mt-6">

              {user?.name}

            </h2>

            <p className="text-gray-400 mt-2">

              {user?.email}

            </p>

            {/* ROLE */}

            <div className="mt-4 bg-cyan-500/20 border border-cyan-400/30 px-5 py-2 rounded-full text-cyan-300">

              {user?.role}

            </div>

          </div>

          {/* =========================================
              USER DETAILS
          ========================================= */}

          <div className="mt-10 space-y-5">

            {/* EMAIL */}

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">

              <FiMail className="text-cyan-400 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Email
                </p>

                <p className="font-semibold">
                  {user?.email}
                </p>

              </div>

            </div>

            {/* PHONE */}

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">

              <FiPhone className="text-green-400 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Whatsapp
                </p>

                <p className="font-semibold">
                  {user?.whatsapp}
                </p>

              </div>

            </div>

            {/* CLASS */}

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">

              <FiBook className="text-yellow-400 text-2xl" />

              <div>

                <p className="text-gray-400 text-sm">
                  Class
                </p>

                <p className="font-semibold">
                  {user?.className}
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================
            RIGHT CONTENT
        ========================================= */}

        <div className="lg:col-span-2 space-y-8">

          {/* WELCOME CARD */}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 shadow-2xl">

            <h1 className="text-5xl font-bold leading-tight">

              Welcome Back 👋

            </h1>

            <p className="mt-4 text-lg text-cyan-100">

              Manage your student profile, results and performance.

            </p>

          </div>

          {/* =========================================
              STATS
          ========================================= */}

          <div className="grid md:grid-cols-3 gap-6">

            {/* MARKS */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">

              <FiAward className="text-5xl text-yellow-400 mb-5" />

              <p className="text-gray-400">
                Marks
              </p>

              <h2 className="text-5xl font-bold mt-2">

                {user?.marks || 0}%

              </h2>

            </div>

            {/* RESULT */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">

              <FiAward className="text-5xl text-green-400 mb-5" />

              <p className="text-gray-400">
                Result
              </p>

              <h2 className="text-3xl font-bold mt-2">

                {user?.resultStatus || "Pending"}

              </h2>

            </div>

            {/* DATE */}

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:scale-105 transition-all duration-300">

              <FiCalendar className="text-5xl text-pink-400 mb-5" />

              <p className="text-gray-400">
                Exam Date
              </p>

              <h2 className="text-2xl font-bold mt-2">

                {user?.examDate || "Coming Soon"}

              </h2>

            </div>

          </div>

          {/* =========================================
              EDIT PROFILE FORM
          ========================================= */}

          {isEditing && (

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-2xl">

              <h2 className="text-3xl font-bold mb-8">

                Update Profile

              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Whatsapp Number"
                  className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  placeholder="Class Name"
                  className="bg-[#0f172a] border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400"
                />

              </div>

              {/* BUTTONS */}

              <div className="flex gap-5 mt-8">

                <button
                  onClick={handleSave}
                  className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-cyan-500/30 transition-all duration-300"
                >

                  Save Changes

                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-red-500 hover:bg-red-400 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-red-500/30 transition-all duration-300"
                >

                  Cancel

                </button>

              </div>

            </div>

          )}

        </div>
        

      </div>
      <div className="mt-16">

  {/* SECTION HEADER */}

  <div className="text-center mb-14">

    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">

      Already Registered Exams

    </h1>

    <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">

      Continue your registered olympiad exams and track your performance.

    </p>

  </div>

  {/* CARD CONTAINER */}

  <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-2xl shadow-2xl">

    <AlreadyRegisterd exams={exams} />

  </div>

</div>

      {/* =========================================
          UPCOMING EXAMS
      ========================================= */}

      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-center">

            Upcoming Olympiad Exams

          </h1>

          <p className="text-gray-400 text-center mt-4 text-lg">

            Register for upcoming olympiad exams

          </p>
       

        </div>

        {/* EXAM COMPONENT */}

        <SubjectOlympiad exams={exams} />

      </div>

    </div>

  );

};

export default Dashboard;

// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { downloadCertificate, emailCertificate } from "../redux/thunks/certificateThunks";
// import { useNavigate } from "react-router-dom";
// import {
//   FaDownload,
//   FaEnvelope,
//   FaUserGraduate,
//   FaBook,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
// } from "react-icons/fa";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { user } = useSelector((state) => state.auth);
//   const { loading, emailMessage, error } = useSelector(
//     (state) => state.certificate
//   );

//   const [profileImage, setProfileImage] = useState(null);

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   if (!user) return null;

//   // Profile Upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setProfileImage(URL.createObjectURL(file));
//     }
//   };

//   // Download Certificate
//   const handleDownload = () => {
//     dispatch(downloadCertificate(user.name));
//   };

//   // Email Certificate
//   const handleEmail = () => {
//     dispatch(
//       emailCertificate({
//         name: user.name,
//         email: user.email,
//       })
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] p-6 flex justify-center items-center">

//       <div className="w-full max-w-5xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">

//         {/* Header */}
//         <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 text-center">
//           <h1 className="text-4xl font-extrabold">
//             Student Dashboard 🎓
//           </h1>
//           <p className="mt-2 text-gray-300">
//             Manage your profile, exams & certificates
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 p-8">

//           {/* LEFT PROFILE CARD */}
//           <div className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center">

//             <div className="flex justify-center mb-4">
//               <img
//                 src={
//                   profileImage ||
//                   "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                 }
//                 alt="profile"
//                 className="w-32 h-32 rounded-full border-4 border-yellow-400 object-cover shadow-md"
//               />
//             </div>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="mb-4 text-sm"
//             />

//             <h2 className="text-2xl font-bold text-gray-800">
//               {user.name}
//             </h2>

//             <p className="text-gray-500 mb-4">
//               {user.email}
//             </p>

//             <div className="space-y-3 text-left">

//               <div className="flex items-center gap-3 text-gray-700">
//                 <FaUserGraduate className="text-yellow-500" />
//                 <span>BCA Final Year</span>
//               </div>

//               <div className="flex items-center gap-3 text-gray-700">
//                 <FaBook className="text-blue-500" />
//                 <span>Full Stack Development</span>
//               </div>

//               <div className="flex items-center gap-3 text-gray-700">
//                 <FaPhone className="text-green-500" />
//                 <span>+91 9876543210</span>
//               </div>

//               <div className="flex items-center gap-3 text-gray-700">
//                 <FaMapMarkerAlt className="text-red-500" />
//                 <span>India</span>
//               </div>

//               <div className="flex items-center gap-3 text-gray-700">
//                 <FaCalendarAlt className="text-purple-500" />
//                 <span>Session: 2025</span>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="md:col-span-2 space-y-6">

//             {/* Exam Details */}
//             <div className="bg-gray-50 rounded-2xl shadow-lg p-6">

//               <h2 className="text-2xl font-bold mb-4 text-gray-800">
//                 Exam Details 📚
//               </h2>

//               <div className="grid sm:grid-cols-2 gap-4">

//                 <div className="bg-white p-4 rounded-xl shadow">
//                   <h3 className="font-bold text-lg text-gray-700">
//                     Course
//                   </h3>
//                   <p className="text-gray-500">
//                     MERN Stack Development
//                   </p>
//                 </div>

//                 <div className="bg-white p-4 rounded-xl shadow">
//                   <h3 className="font-bold text-lg text-gray-700">
//                     Exam Date
//                   </h3>
//                   <p className="text-gray-500">
//                     25 July 2025
//                   </p>
//                 </div>

//                 <div className="bg-white p-4 rounded-xl shadow">
//                   <h3 className="font-bold text-lg text-gray-700">
//                     Result Status
//                   </h3>
//                   <p className="text-green-600 font-semibold">
//                     Passed ✅
//                   </p>
//                 </div>

//                 <div className="bg-white p-4 rounded-xl shadow">
//                   <h3 className="font-bold text-lg text-gray-700">
//                     Marks
//                   </h3>
//                   <p className="text-blue-600 font-semibold">
//                     92%
//                   </p>
//                 </div>

//               </div>
//             </div>

//             {/* Certificate Actions */}
//             <div className="bg-gray-50 rounded-2xl shadow-lg p-6">

//               <h2 className="text-2xl font-bold mb-6 text-gray-800">
//                 Certificate Actions 🏆
//               </h2>

//               <div className="flex flex-wrap gap-5">

//                 <button
//                   onClick={handleDownload}
//                   disabled={loading}
//                   className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition duration-300 transform hover:scale-105"
//                 >
//                   <FaDownload />
//                   {loading ? "Downloading..." : "Download Certificate"}
//                 </button>

//                 <button
//                   onClick={handleEmail}
//                   disabled={loading}
//                   className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md transition duration-300 transform hover:scale-105"
//                 >
//                   <FaEnvelope />
//                   {loading ? "Sending..." : "Email Certificate"}
//                 </button>

//               </div>

//               {emailMessage && (
//                 <p className="text-green-600 mt-5 font-semibold">
//                   {emailMessage}
//                 </p>
//               )}

//               {error && (
//                 <p className="text-red-600 mt-5 font-semibold">
//                   {error}
//                 </p>
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;