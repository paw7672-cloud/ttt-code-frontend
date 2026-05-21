import { useNavigate } from "react-router-dom";

const SubjectOlympiad = ({ exams }) => {

  const navigate = useNavigate();

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {exams?.map((exam) => (

        <div
          key={exam._id}
          className="relative overflow-hidden bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-500"
        >

          {/* GLOW */}

          <div className={`absolute top-0 right-0 w-40 h-40 bg-${exam.color}-500/20 blur-3xl rounded-full`}>
          </div>

          {/* CONTENT */}

          <div className="relative z-10">

            {/* ICON */}

            <div className={`w-16 h-16 rounded-2xl bg-${exam.color}-500/20 flex items-center justify-center text-4xl`}>

              {exam.icon}

            </div>

            {/* SUBJECT */}

            <h2 className="text-3xl font-bold text-white mt-6">

              {exam.subject}

            </h2>

            {/* DESCRIPTION */}

            <p className="text-gray-400 mt-3">

              {exam.description}

            </p>

            {/* DETAILS */}

            <div className="mt-8 space-y-3">

              <div className="flex justify-between">

                <p className="text-gray-400">
                  Exam Date
                </p>

                <p className="text-white font-bold">
                  {exam.examDate}
                </p>

              </div>

              <div className="flex justify-between">

                <p className="text-gray-400">
                  Result Date
                </p>

                <p className="text-white font-bold">
                  {exam.resultDate}
                </p>

              </div>

              <div className="flex justify-between">

                <p className="text-gray-400">
                  Marks
                </p>

                <p className="text-cyan-400 font-bold">
                  {exam.marks}
                </p>

              </div>

            </div>

            {/* BUTTON */}

            <button
              onClick={() =>
                navigate(`/register/${exam.subject}`)
              }
              className={`mt-8 w-full py-4 rounded-2xl font-bold transition-all duration-300
                ${
                  exam.status === "Open"
                    ? "bg-cyan-500 hover:bg-cyan-400 text-black"
                    : "bg-gray-700 text-gray-400"
                }`}
            >

              {exam.status === "Open"
                ? "Register Now"
                : "Registration Closed"}

            </button>

          </div>

        </div>

      ))}

    </div>

  );

};

export default SubjectOlympiad;