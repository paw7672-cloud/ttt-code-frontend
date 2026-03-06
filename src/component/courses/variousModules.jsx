import React from "react";

const modulesList = [
"Accountability",
"Anxiety: How to overcome",
"Anxiety: The concept and reasons",
"Aspiration Management",
"Assertiveness",
"Attitude",
"Ayurved",
"Becoming Responsible",
"Body language",
"Career: How to choose the right career",
"Change Management",
"Communication Skills",
"Conflict Resolution",
"Crisis Management",
"Decision Making skills",
"Emotional Intelligence",
"Emotional Resilience",
"English Speaking",
"Environmental Responsibility",
"Etiquettes & Good manners",
"Financial Literacy",
"Gardening",
"Generation Gap",
"Goals and Dreams",
"Habits",
"Health Management (Mental)",
"Health Management (Physical)",
"Human Relations",
"Innovation & Creativity",
"Interpersonal Relationships",
"Introspection",
"Leadership",
"Lifestyle management",
"Linguistic Management",
"Mind Mapping",
"Mobile phone addiction",
"Moral values & Ethics",
"Motivation",
"Naturopathy",
"Non Verbal Skills",
"Peer Pressure",
"Personality Development",
"Positive Thinking",
"Power of mind",
"Presentation Skills",
"Public Speaking Skills",
"Relationship Management",
"Responsibility",
"Screen Deaddiction",
"Self Confidence",
"Self Esteem",
"Self Development",
"Sleep Management",
"Social Responsibility",
"Spiritual Training Program",
"Stress: how to overcome",
"Subconscious Mind",
"Success Management",
"Table Etiquette",
"Time Management",
"Thought Management",
"Transformation to Responsibility",
"Video Games Deaddiction",
"Visualisations",
"Voice Modulation",
"Wellness",
"Work-Life Balance",
"Yog",
"Yog Nidra"
];

const VariousModules = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Our Courses :: Various Modules
        </h1>

        <p className="text-center text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
          Some of our popular modules are listed below. These modules help
          students develop personality, skills, mindset and life management.
        </p>

        {/* MODULE GRID */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {modulesList.map((module, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <p className="text-gray-700 font-medium">
                {module}
              </p>
            </div>
          ))}

        </div>

        {/* MESSAGE */}
        <div className="mt-16 bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-lg text-center">

          <h2 className="text-2xl font-bold text-yellow-600 mb-3">
            The List Doesn’t End Here!
          </h2>

          <p className="text-gray-700">
            Due to space limitations we have mentioned only a few modules.
            The list is endless. Team TTT is ready to design your
            <strong> TTT CUP (Customised Unique Program)</strong> based on
            any modules of your choice related to the Exam of Life.
          </p>

        </div>

      </div>

    </div>
  );
};

export default VariousModules;