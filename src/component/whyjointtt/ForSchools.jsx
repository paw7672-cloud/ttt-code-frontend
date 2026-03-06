import React from "react";
import { School, Users, Target } from "lucide-react";

const challenges = [
  "A student remains in school for limited time while most of his time is spent with family.",
  "A major part of a student's personality is shaped by family, society, friends and relatives.",
  "When a student performs badly, the school is often blamed even if the real reason lies elsewhere.",
  "This negatively impacts the brand value of the school.",
  "Schools are already overburdened and cannot cover every dimension of personality development.",
  "As a result, schools get blamed for problems they did not create."
];

const solutions = [
  "Students",
  "Parents",
  "Schools and Educational Institutions"
];

const ForSchools = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Why Join TTT?
        </h1>

        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-12">
          For Schools and Educational Institutions
        </h2>

        {/* Intro Section */}
        <div className="bg-white p-10 rounded-xl shadow-lg mb-16">

          <div className="flex items-center gap-3 mb-4">
            <School className="text-blue-600" size={30} />
            <h3 className="text-2xl font-bold text-gray-800">
              TTT: The True Buddy of Schools
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            TTT cares deeply for educational institutions, their management and teachers.
            We understand that many schools are doing excellent work but still face
            challenges which sometimes affect their reputation and brand value.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            This is where <strong>TTT</strong> comes in as a trusted partner to support
            schools in shaping students for a better future.
          </p>

        </div>

        {/* Challenges Section */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          The Challenge before Schools
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex gap-4"
            >

              <Target className="text-red-500 mt-1" size={24} />

              <p className="text-gray-700">{item}</p>

            </div>
          ))}

        </div>

        {/* Solution Section */}
        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-10 rounded-xl">

          <h3 className="text-3xl font-bold text-yellow-600 mb-6">
            The Solution
          </h3>

          <p className="text-gray-700 mb-6">
            TTT provides a one-stop solution with its unique programs designed
            to create a win-win situation for:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">

            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center font-semibold"
              >
                <Users className="mx-auto mb-3 text-yellow-500" size={26} />
                {item}
              </div>
            ))}

          </div>

          <p className="text-gray-700 leading-relaxed">
            TTT works as a <strong>True Buddy</strong> for schools by 
            <strong> complementing</strong> and <strong>supplementing</strong>
            their efforts in preparing students for the future through
            innovative programs called <strong>TTT CUP</strong>.
          </p>
          <p>The result will be holistic development of students 
            who will conquer the world and will build the brand value of the school and educational institutions.
            
          </p>


        </div>

      </div>

    </div>
  );
};

export default ForSchools;