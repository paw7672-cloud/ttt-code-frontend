import React from "react";
import { Building2, Brain, TrendingUp } from "lucide-react";

const ForCorporates = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Why Join TTT?
        </h1>

        <h2 className="text-2xl text-center font-semibold text-purple-600 mb-12">
          For Corporates
        </h2>

        {/* INTRO CARD */}
        <div className="bg-white p-10 rounded-xl shadow-lg mb-16">

          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-purple-600" size={30} />
            <h3 className="text-2xl font-bold text-gray-800">
              Strength of a Corporate
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            The strength of any corporate, company or organisation lies in the
            quality of its human resource. The quality of human resources
            depends greatly on the mental health, happiness and stability of
            employees.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            Employees perform better when they are mentally healthy, living a
            happy life, and when their family life is balanced without constant
            worries about the future of their children.
          </p>

        </div>

        {/* IMPACT SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">

            <Brain className="text-red-500 mb-4" size={28} />

            <h3 className="text-xl font-bold mb-3">
              When Things Go Wrong
            </h3>

            <p className="text-gray-700">
              If these important aspects of life are disturbed, it directly
              affects the mental health of employees. This reduces their
              productivity and ultimately impacts the growth and reputation of
              the company.
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">

            <TrendingUp className="text-green-500 mb-4" size={28} />

            <h3 className="text-xl font-bold mb-3">
              Investing in Wellbeing
            </h3>

            <p className="text-gray-700">
              Corporates must invest in the wellbeing, mental health and
              happiness of employees to ensure higher productivity and a
              positive working environment.
            </p>

          </div>

        </div>

        {/* QUESTIONS */}
        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-10 rounded-xl mb-16">

          <h3 className="text-2xl font-bold text-yellow-600 mb-4">
            You Might Be Wondering
          </h3>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• How will you do it?</li>
            <li>• How will you manage the extra cost involved?</li>
            <li>• From where will you get trained manpower?</li>
          </ul>

        </div>

        {/* SOLUTION */}
        <div className="bg-white shadow-lg rounded-xl p-10 text-center">

          <h3 className="text-3xl font-bold text-purple-600 mb-4">
            The TTT Solution
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            You don’t need to worry about these challenges. TTT will take care
            of these factors for you.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Simply connect with <strong>TTT</strong> and leave the rest to us.
            We will help create a healthier, happier and more productive
            workforce for your organisation.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg shadow-lg transition text-lg font-semibold">
              Contact TTT
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ForCorporates;