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
             The True Buddy of Schools and Educational Institutions
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
          Yes. TTT cares for the Educational institutions, their management and teachers as well. We understand that majority of you are really doing very good work but due to certain reasons, as discussed below, many times you encounter difficult situations which adversely impact the brand value of your school. 
          This is where the<strong>TTT</strong> comes into your lives.
          </p>


        </div>

        {/* Challenges Section */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
       
The Challenge before the Schools and Educational Institutions

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
         TTT comes here as the one-stop solution for these problems with its 
         unique Programs that would be a win-win situation for
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
<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition mt-12">

  <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
    TTT – A True Buddy for Schools
  </h3>

  <p className="text-gray-700 leading-relaxed text-center mb-6">
    TTT will act as the <strong>Buddy</strong> of the Schools and Educational
    Institutions that will
  </p>
<ul className="flex justify-center gap-6 mt-6 flex-wrap">

  <li className="px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold shadow-sm hover:scale-105 transition">
    Complement
  </li>

  <li className="px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold shadow-sm hover:scale-105 transition">
    Supplement
  </li>

</ul>
  
<p className="text-center text-lg text-gray-700 leading-relaxed mt-6 max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 shadow-sm">
  The efforts of the schools in preparing their students for the future
  with its unique programs which we term as{" "}
  <span className="font-bold text-purple-700 text-xl">TTT CUP</span>.
</p>

</div>
   <p className="text-center text-lg font-medium text-gray-700 mt-6 max-w-3xl mx-auto bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">
  The result will be <span className="font-semibold text-green-700">holistic development of students</span> 
  who will conquer the world and build the brand value of the schools and educational institutions.
</p>


        </div>

      </div>

    </div>
  );
};

export default ForSchools;