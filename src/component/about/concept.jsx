import React from "react";

const Concept = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          About Us :: The Concept
        </h1>

        {/* Understanding Problem */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Understanding the Problem
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Parents dream that their children grow up successful, wealthy,
            respected and secure. The ideal expectation is that the
            materialistic success of a child grows continuously with age.
          </p>
        </div>

        {/* Health Problems */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Physical Health
            </h3>
            <p className="text-gray-700">
              Even nursery students are using spectacles. Obesity and asthma
              are increasing among children.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-red-500 mb-2">
              Mental Health
            </h3>
            <p className="text-gray-700">
              Students are facing stress, depression and anxiety. Many schools
              now require counsellors more than teachers.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Family Relationships
            </h3>
            <p className="text-gray-700">
              Family bonds are weakening. Parents and children struggle to
              maintain healthy relationships.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-purple-600 mb-2">
              Social Reputation
            </h3>
            <p className="text-gray-700">
              Crime and unethical behavior are rising even among educated and
              wealthy individuals.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">
              Spiritual Wellbeing
            </h3>
            <p className="text-gray-700">
              As spirituality decreases, stress and dissatisfaction increase in
              life.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              Patriotism
            </h3>
            <p className="text-gray-700">
              While individuals become richer, the nation often loses the
              spirit of collective responsibility.
            </p>
          </div>

        </div>

        {/* Caution */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded">
          <h3 className="text-xl font-bold text-yellow-700 mb-2">
            A Word of Caution
          </h3>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>TTT is NOT against academic preparation.</li>
            <li>TTT does NOT say ambition is wrong.</li>
            <li>TTT believes materialistic success is important.</li>
          </ul>

          <p className="mt-4 text-green-700 font-semibold">
            TTT simply believes that materialistic success is only a part of
            life — not the whole life.
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            The Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Without */}
            <div className="bg-red-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Materialistic Success WITHOUT
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>• Good Physical Health</li>
                <li>• Sound Mental Health</li>
                <li>• Healthy Relationships</li>
                <li>• Happiness & Contentment</li>
                <li>• Spiritual Balance</li>
                <li>• Patriotism</li>
                <li>• Holistic Growth</li>
              </ul>
            </div>

            {/* With */}
            <div className="bg-green-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Materialistic Success WITH
              </h3>

              <ul className="space-y-2 text-gray-700">
                <li>• Great Physical Health</li>
                <li>• Strong Mental Makeup</li>
                <li>• Spiritual Awakening</li>
                <li>• Happiness & Contentment</li>
                <li>• Love & Respect for Family</li>
                <li>• Patriotism</li>
                <li>• Holistic Development</li>
              </ul>
            </div>

          </div>
        </div>

        {/* What If Section */}
        <div className="bg-gray-100 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Common Questions Parents Ask
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>WHAT IF my child suffers from depression?</li>
            <li>WHAT IF success leads to mental illness?</li>
            <li>WHAT IF my child loses family relationships?</li>
            <li>WHAT IF I cannot give enough time to my kids?</li>
            <li>WHAT IF my child faces life challenges alone?</li>
          </ul>
        </div>

        {/* I CAN Section */}
        <div className="bg-green-100 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            TTT Replaces WHAT IF with I CAN
          </h2>

          <ul className="space-y-3 text-gray-800 text-lg">
            <li>I CAN raise a happy and successful child.</li>
            <li>I CAN help my child build a secure future.</li>
            <li>I CAN maintain strong family relationships.</li>
            <li>I CAN excel in my profession while raising healthy kids.</li>
            <li>I CAN ensure my children feel proud of me.</li>
          </ul>

          <p className="mt-6 text-xl font-bold text-gray-900">
            I CAN DO IT ALL WITH THE HELP OF TTT 🙂
          </p>
        </div>

      </div>
    </section>
  );
};

export default Concept;