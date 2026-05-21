// =========================================
// FILE: components/AlreadyRegisterd.jsx
// =========================================

import { useNavigate } from "react-router-dom";

const AlreadyRegisterd = ({ exams }) => {

  const navigate = useNavigate();

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {exams?.map((exam) => (

        <div
          key={exam._id}

          onClick={() =>
            navigate(`/exam-questions/${exam._id}`, {
              state: exam,
            })
          }

          className="group relative overflow-hidden bg-[#111827] border border-white/10 rounded-[35px] p-8 shadow-2xl hover:scale-105 hover:border-cyan-400/40 transition-all duration-500 cursor-pointer"
        >

          {/* =========================================
              GLOW EFFECT
          ========================================= */}

          <div className={`absolute top-0 right-0 w-52 h-52 bg-${exam.color}-500/20 blur-3xl rounded-full`}>
          </div>

          {/* =========================================
              CONTENT
          ========================================= */}

          <div className="relative z-10">

            {/* TOP */}

            <div className="flex justify-between items-start">

              {/* ICON */}

              <div className={`w-20 h-20 rounded-3xl bg-${exam.color}-500/20 flex items-center justify-center text-5xl shadow-lg`}>

                {exam.icon}

              </div>

              {/* STATUS */}

              <div className={`px-5 py-2 rounded-full text-sm font-bold
                ${
                  exam.status === "Open"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >

                {exam.status}

              </div>

            </div>

            {/* SUBJECT */}

            <h1 className="text-4xl font-extrabold text-white mt-8 group-hover:text-cyan-300 transition-all duration-300">

              {exam.subject}

            </h1>

            {/* DESCRIPTION */}

            <p className="text-gray-400 mt-4 text-lg leading-relaxed">

              {exam.description}

            </p>

            {/* =========================================
                DETAILS
            ========================================= */}

            <div className="mt-10 space-y-4">

              {/* EXAM DATE */}

              <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl">

                <p className="text-gray-400">
                  Exam Date
                </p>

                <p className="text-white font-bold">
                  {exam.examDate}
                </p>

              </div>

              {/* RESULT DATE */}

              <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl">

                <p className="text-gray-400">
                  Result Date
                </p>

                <p className="text-white font-bold">
                  {exam.resultDate}
                </p>

              </div>

              {/* MARKS */}

              <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl">

                <p className="text-gray-400">
                  Total Marks
                </p>

                <p className="text-cyan-400 text-2xl font-bold">

                  {exam.marks}

                </p>

              </div>

            </div>

            {/* =========================================
                START EXAM BUTTON
            ========================================= */}

            <button
              className={`mt-10 w-full py-5 rounded-2xl text-lg font-bold shadow-lg transition-all duration-300
                ${
                  exam.status === "Open"
                    ? "bg-cyan-500 hover:bg-cyan-400 hover:scale-105 active:scale-95 text-black shadow-cyan-500/30"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >

              {exam.status === "Open"
                ? `Start ${exam.subject} Exam`
                : "Registration Closed"}

            </button>

          </div>

        </div>

      ))}

    </div>

  );

};

export default AlreadyRegisterd;