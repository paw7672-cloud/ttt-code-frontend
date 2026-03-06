import React from "react";
import { HelpCircle } from "lucide-react";

const questions = [
"Do you feel anxious about your future?",
"Do you feel demotivated and no sense of purpose at times?",
"Do you feel that you are being made to run a mad rat race?",
"Do you feel that there is no objective and scientific way of analysing your abilities and talent?",
"Don't you feel that many times your perspective is not understood properly?",
"Do you also feel difficulty in understanding the perspective of your parents?"
];

const ForStudents = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Why Join TTT?
        </h1>

        <h2 className="text-2xl text-center font-semibold text-yellow-600 mb-12">
          For Students
        </h2>

        {/* Intro */}
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          We would like to ask a few questions to all the hardworking students
          who are the future of this great nation.
        </p>

        {/* Question Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl
              hover:-translate-y-1 transition duration-300 flex gap-4 items-start"
            >

              <div className="text-yellow-500">
                <HelpCircle size={26} />
              </div>

              <p className="text-gray-700 text-lg">
                {question}
              </p>

            </div>
          ))}

        </div>

        {/* Solution Section */}
        <div className="mt-16 bg-yellow-50 border-l-8 border-yellow-400 p-10 rounded-xl">

          <p className="text-gray-700 text-lg leading-relaxed">
            If the answer to these questions is a <strong>"YES"</strong>, then you
            must take corrective steps as early as possible.
          </p>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            And <strong>TTT</strong> will help you in decision making regarding
            how to take the right steps for your future.
          </p>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white
          px-8 py-3 rounded-lg shadow-lg transition text-lg font-semibold">
            I Want To Know More
          </button>

        </div>

      </div>

    </div>
  );
};

export default ForStudents;