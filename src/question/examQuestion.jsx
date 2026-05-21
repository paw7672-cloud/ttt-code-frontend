import { useState, useEffect } from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

const ExamQuestion = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const exam = location.state;

  // =========================================
  // QUESTIONS
  // =========================================

  const questions = [

    {
      id: 1,
      question: "What is SI unit of Force?",
      options: [
        "Newton",
        "Joule",
        "Watt",
        "Pascal",
      ],
    },

    {
      id: 2,
      question: "Who discovered Gravity?",
      options: [
        "Newton",
        "Einstein",
        "Tesla",
        "Galileo",
      ],
    },

    {
      id: 3,
      question: "Speed of light is?",
      options: [
        "3 × 10⁸ m/s",
        "5 × 10⁶ m/s",
        "9 × 10⁵ m/s",
        "1 × 10⁴ m/s",
      ],
    },

    {
      id: 4,
      question: "Which planet is nearest to Sun?",
      options: [
        "Mercury",
        "Earth",
        "Mars",
        "Venus",
      ],
    },

    {
      id: 5,
      question: "What is H2O?",
      options: [
        "Water",
        "Hydrogen",
        "Oxygen",
        "Salt",
      ],
    },

    {
      id: 6,
      question: "What is SI unit of Power?",
      options: [
        "Watt",
        "Newton",
        "Joule",
        "Volt",
      ],
    },

    {
      id: 7,
      question: "Who invented Bulb?",
      options: [
        "Edison",
        "Newton",
        "Tesla",
        "Einstein",
      ],
    },

    {
      id: 8,
      question: "Earth is ___ planet from Sun?",
      options: [
        "3rd",
        "2nd",
        "4th",
        "5th",
      ],
    },

    {
      id: 9,
      question: "Which gas do plants absorb?",
      options: [
        "CO2",
        "Oxygen",
        "Nitrogen",
        "Hydrogen",
      ],
    },

    {
      id: 10,
      question: "Which is largest planet?",
      options: [
        "Jupiter",
        "Earth",
        "Mars",
        "Venus",
      ],
    },

  ];

  // =========================================
  // STATES
  // =========================================

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [timeLeft, setTimeLeft] =
    useState(120);

  const [startExam, setStartExam] =
    useState(false);

  // =========================================
  // TIMER
  // =========================================

  useEffect(() => {

    if (!startExam) return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [startExam]);

  // =========================================
  // HANDLE ANSWER
  // =========================================

  const handleAnswer = (
    questionId,
    option
  ) => {

    if (!startExam) return;

    setSelectedAnswers({

      ...selectedAnswers,

      [questionId]: option,

    });

  };

  // =========================================
  // START EXAM
  // =========================================

  const handleStartExam = () => {

    setStartExam(true);

  };

  // =========================================
  // SUBMIT EXAM
  // =========================================

  const handleSubmitExam = () => {

    navigate("/dashboard");

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white p-10">

      {/* HEADER */}

      <div className="text-center mb-14">

        <div className="text-8xl mb-6">

          {exam?.icon}

        </div>

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

          {exam?.subject} Exam

        </h1>

        <p className="text-gray-400 text-xl mt-5 max-w-3xl mx-auto">

          {exam?.description}

        </p>

        {/* TIMER */}

        <div className="mt-8">

          <h2 className="text-5xl font-bold text-red-400">

            ⏰ {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, "0")}

          </h2>

        </div>

        {/* START BUTTON */}

        {!startExam && (

          <button
            onClick={handleStartExam}
            className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 px-12 py-5 rounded-3xl text-black text-2xl font-bold shadow-2xl transition-all duration-300"
          >

            Start Exam

          </button>

        )}

      </div>

      {/* QUESTIONS */}

      <div className="space-y-8 max-w-5xl mx-auto">

        {questions.map((q, index) => (

          <div
            key={q.id}
            className={`bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl shadow-2xl

            ${!startExam ? "opacity-50" : ""}
          `}
          >

            {/* QUESTION */}

            <h2 className="text-3xl font-bold mb-8 leading-relaxed">

              Q{index + 1}. {q.question}

            </h2>

            {/* OPTIONS */}

            <div className="grid gap-5">

              {q.options.map((option, i) => (

                <button
                  key={i}

                  disabled={!startExam}

                  onClick={() =>
                    handleAnswer(q.id, option)
                  }

                  className={`p-5 rounded-2xl text-left text-lg font-semibold border transition-all duration-300

                  ${
                    selectedAnswers[q.id] === option
                      ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]"
                      : "bg-[#0f172a] border-white/10 hover:bg-cyan-500 hover:text-black"
                  }

                  ${
                    !startExam
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }
                `}
                >

                  {option}

                </button>

              ))}

            </div>

          </div>

        ))}

      </div>

      {/* SUBMIT BUTTON */}

      <div className="flex justify-center mt-16">

        <button
          onClick={handleSubmitExam}
          className="bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-105 px-16 py-5 rounded-3xl text-black text-2xl font-extrabold shadow-2xl transition-all duration-300"
        >

          Submit Exam

        </button>

      </div>

    </div>

  );

};

export default ExamQuestion;