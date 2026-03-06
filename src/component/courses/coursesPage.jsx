import React from "react";

const Courses = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 lg:px-20">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center 
        text-gray-800 mb-10 tracking-wide">
          We Don’t Offer Courses!
        </h1>

        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Yes, you heard it right. We don’t offer those conventional courses that
          a number of platforms are providing in the market.
        </p>

        {/* WHY SECTION */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16 
        hover:shadow-2xl transition duration-300 border border-gray-100">

          <h2 className="text-3xl font-bold text-red-500 mb-6">
            Why?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The most disturbing feature of such courses is that they are designed
            in a manner which suits those platforms only and not the students.
            The same course is offered to a number of students and obviously
            such a course can’t do justice with all the students.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Quite often such courses make students dependent on platforms
            instead of empowering them and building their own capabilities.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Most pre-designed courses are:
          </h3>

          <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Boring</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Generalist</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Too mechanical</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Lack holistic vision</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Peripheral in approach</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Not responding to specific requirements</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">• Make students dependent</li>
          </ul>

        </div>

        {/* TTT CUP SECTION */}
        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-10 rounded-xl mb-16 
        shadow-lg hover:shadow-xl transition">

          <h2 className="text-3xl font-bold text-yellow-600 mb-6">
            So how is TTT helping students?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            TTT offers <strong>TTT CUPs (Customised Unique Programs)</strong>.
            These are unique programs designed by YOU with guidance from Team TTT.
          </p>

          <p className="text-gray-700 leading-relaxed">
            These programs are based on your specific requirements, strengths,
            weaknesses, aspirations, goals and challenges.
          </p>

        </div>

        {/* ADVANTAGES */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-4 text-green-600">
              Advantages of TTT CUP
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Focus only on things that matter</li>
              <li>✔ No time wasted on irrelevant topics</li>
              <li>✔ Personalized learning journey</li>
              <li>✔ Easy course correction</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-4 text-blue-600">
              Why One Course Cannot Fit All
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>• Everyone has different strengths</li>
              <li>• Different weaknesses</li>
              <li>• Different challenges</li>
              <li>• Different opportunities</li>
              <li>• Different aspirations</li>
            </ul>
          </div>

        </div>

        {/* DATABASE SECTION */}
        <div className="bg-white shadow-xl rounded-xl p-10 hover:shadow-2xl transition">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            How TTT Designs Your Program
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            TTT has a large database of modules that cover multiple aspects of
            personality development and growth.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-gray-700">

            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Health & Fitness</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Stress Management</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Time Management</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Financial Literacy</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Communication Skills</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Body Language</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Soft Skills</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Spiritual Growth</div>
            <div className="bg-gray-100 p-4 rounded-lg hover:bg-yellow-100 transition">Academic Excellence</div>

          </div>

          <p className="text-gray-700 mt-8 leading-relaxed">
            Based on the <strong>TTT MAP (Mindful Analysis of Personality)</strong>,
            our experts design a unique TTT CUP specifically for you.
          </p>

        </div>

        {/* FINAL MESSAGE */}
        <div className="text-center mt-20">

          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Drink the Wisdom from your TTT CUP
          </h2>

          <p className="text-gray-700 text-lg">
            And see the magic happening in your life 🙂
          </p>

        </div>

      </div>

    </div>
  );
};

export default Courses;