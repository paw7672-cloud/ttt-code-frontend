import React from "react";
import { HelpCircle, HeartHandshake } from "lucide-react";

const worries = [
"WHAT IF my child inspite of being successful, ends up into mental illness?",
"WHAT IF my child inspite of being successful, has multiple life related issues?",
"WHAT IF my child having so many subordinates under him, can’t run smooth relations with family members?",
"WHAT IF my child becomes a criminal tomorrow?",
"WHAT IF my child starts hating me tomorrow?",
"WHAT IF my career screws up while raising a perfect child?",
"WHAT IF I am unable to devote sufficient time to my kids?",
"WHAT IF my child suffers from depression?",
"WHAT IF my child, God forbid, takes the extreme step?"
];

const solutions = [
"I CAN raise a happy and successful child.",
"I CAN contribute in gifting my child a happy & healthy life.",
"I CAN help my child in building a more secured and better future.",
"I CAN have a beautiful relationship with my kids.",
"I CAN excel in my profession and yet not hamper the health of my kids.",
"I CAN ensure that my kids feel proud of me."
];

const ForParents = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Why Join TTT?
        </h1>

        <h2 className="text-2xl text-center font-semibold text-pink-600 mb-12">
          For Parents and Grandparents
        </h2>

        {/* QUESTION INTRO */}
        <p className="text-center text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
          Do you suffer from any of the following questions?
        </p>

        {/* WHAT IF SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {worries.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex gap-4"
            >

              <HelpCircle className="text-red-500 mt-1" size={24} />

              <p className="text-gray-700">{item}</p>

            </div>
          ))}

        </div>

        {/* WORRY MESSAGE */}
        <div className="bg-yellow-50 border-l-8 border-yellow-400 p-10 rounded-xl mb-16">

          <p className="text-gray-700 text-lg leading-relaxed">
            The list is huge. These <strong>WHAT IFs</strong> are the major source
            of worry in the life of any parent.
          </p>

        </div>

        {/* SOLUTION TITLE */}
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          TTT aims to replace these WHAT IFs with I CANs
        </h3>

        {/* I CAN SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex gap-4"
            >

              <HeartHandshake className="text-green-500 mt-1" size={24} />

              <p className="text-gray-700 font-medium">{item}</p>

            </div>
          ))}

        </div>

        {/* FINAL MESSAGE */}
        <div className="bg-green-50 border-l-8 border-green-400 p-10 rounded-xl text-center">

          <h3 className="text-3xl font-bold text-green-600 mb-4">
            I CAN DO IT ALL WITH THE HELP OF TTT 🙂
          </h3>

          <p className="text-gray-700 text-lg">
            With the right guidance and programs, TTT helps parents create a
            happier, healthier and more successful future for their children.
          </p>

        </div>

      </div>

    </div>
  );
};

export default ForParents;