// =========================================
// FILE: question/ExamQuestion.jsx
// =========================================

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

const ExamQuestion = () => {

  const location = useLocation();

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

  ];

  // =========================================
  // STATES
  // =========================================

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [timeLeft, setTimeLeft] =
    useState(10);

  const [submitted, setSubmitted] =
    useState(false);

  // =========================================
  // CURRENT QUESTION
  // =========================================

  const question =
    questions[currentQuestion];

  // =========================================
  // TIMER
  // =========================================

  useEffect(() => {

    if (submitted) return;

    if (timeLeft === 0) {

      handleNext();

      return;

    }

    const timer = setInterval(() => {

      setTimeLeft((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft]);

  // =========================================
  // HANDLE ANSWER
  // =========================================

  const handleAnswer = (option) => {

    setSelectedAnswers({

      ...selectedAnswers,

      [question.id]: option,

    });

  };

  // =========================================
  // NEXT QUESTION
  // =========================================

  const handleNext = () => {

    if (
      currentQuestion <
      questions.length - 1
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

      setTimeLeft(10);

    } else {

      handleSubmit();

    }

  };

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = () => {

    setSubmitted(true);

    alert("Exam Submitted ✅");

  };

  // =========================================
  // SUBMITTED PAGE
  // =========================================

  if (submitted) {

    return (

      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">

        <div className="bg-white/5 border border-white/10 p-16 rounded-[40px] text-center backdrop-blur-2xl shadow-2xl">

          <h1 className="text-6xl font-extrabold text-green-400">

            Exam Submitted ✅

          </h1>

          <p className="text-gray-400 text-xl mt-5">

            Your answers have been saved successfully.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#111827] text-white p-10">

      {/* HEADER */}

      <div className="text-center mb-14">

        <div className="text-8xl mb-5">

          {exam?.icon}

        </div>

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

          {exam?.subject} Exam

        </h1>

      </div>

      {/* TIMER */}

      <div className="flex justify-center mb-10">

        <div className={`px-10 py-5 rounded-3xl text-3xl font-extrabold shadow-2xl
          
          ${
            timeLeft <= 3
              ? "bg-red-500 text-white animate-pulse"
              : "bg-cyan-500 text-black"
          }`}
        >

          ⏳ {timeLeft}s

        </div>

      </div>

      {/* QUESTION CARD */}

      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl shadow-2xl">

        {/* QUESTION */}

        <h2 className="text-4xl font-bold leading-relaxed mb-10">

          Q{currentQuestion + 1}.
          {" "}
          {question.question}

        </h2>

        {/* OPTIONS */}

        <div className="grid gap-6">

          {question.options.map((option, index) => (

            <button
              key={index}

              onClick={() =>
                handleAnswer(option)
              }

              className={`p-6 rounded-3xl text-left text-xl font-semibold border transition-all duration-300

                ${
                  selectedAnswers[
                    question.id
                  ] === option
                    ? "bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/30 scale-[1.02]"
                    : "bg-[#0f172a] border-white/10 hover:bg-cyan-500 hover:text-black"
                }
              `}
            >

              {option}

            </button>

          ))}

        </div>

        {/* NEXT BUTTON */}

        <div className="flex justify-end mt-10">

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 px-12 py-5 rounded-3xl text-black text-xl font-extrabold shadow-2xl transition-all duration-300"
          >

            {currentQuestion ===
            questions.length - 1
              ? "Submit Exam"
              : "Next Question"}

          </button>

        </div>

      </div>

    </div>

  );

};

export default ExamQuestion;