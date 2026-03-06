import React from "react";

const ttt = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-16">

      <div className="max-w-[1200px] mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-14">
          How TTT is Different
        </h1>

        <p className="text-center text-lg text-gray-600 mb-12 max-w-[900px] mx-auto">
          The following parameters make TTT unique and truly one of its kind
          on the planet.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Infinite Programs */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Choose from INFINITE Programs
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Yes, you heard it right! There is actually no limit to the
              programs that TTT offers you.
              At TTT, you can choose your program from an infinite number
              of options.
            </p>

            <p className="mt-3 text-gray-700">
              These unique programs are called <b>TTT CUPs</b>.
            </p>

            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">
              Learn More
            </button>
          </div>

          {/* Customized Programs */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              We Give You What You Want
            </h2>

            <p className="text-gray-700 leading-relaxed">
              We don’t offer one same course to everyone. Instead, you
              design your own program based on your needs and goals.
            </p>

            <p className="mt-3 text-gray-700">
              With TTT, you are not part of a crowd where thousands follow
              the same course. You may be doing a program that only YOU
              are doing on the entire planet.
            </p>
          </div>

          {/* Integration Concept */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Concept of Integration
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Learning becomes powerful when everyone participates.
              TTT programs integrate parents, grandparents, relatives,
              and teachers into the learning journey.
            </p>

            <p className="mt-3 text-gray-700">
              This makes the learning process productive, meaningful,
              and enjoyable.
            </p>
          </div>

          {/* TTT MAP */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              TTT MAP
            </h2>

            <p className="text-gray-700 leading-relaxed">
              TTT performs a detailed analysis of your personality
              called <b>TTT MAP (Mindful Analysis of Personality)</b>.
            </p>

            <p className="mt-3 text-gray-700">
              Based on this analysis, our experts design a customized
              TTT CUP that addresses your unique challenges and goals.
            </p>
          </div>

        </div>

        {/* ABCDL Model Section */}
        <div className="mt-20 bg-white p-10 rounded-xl shadow-lg">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            ABCDL Model
          </h2>

          <p className="text-gray-700 text-center max-w-[900px] mx-auto mb-10">
            TTT believes every student is unique and at different stages
            of growth. Our ABCDL Model helps design programs according
            to your current situation and future goals.
          </p>

          <div className="grid md:grid-cols-5 gap-6 text-center">

            <div className="bg-yellow-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">A</h3>
              <p className="text-gray-700 text-sm">
                Aim / Aspiration
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">B</h3>
              <p className="text-gray-700 text-sm">
                Background
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">C</h3>
              <p className="text-gray-700 text-sm">
                Class
              </p>
            </div>

            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">D</h3>
              <p className="text-gray-700 text-sm">
                Duration
              </p>
            </div>

            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">L</h3>
              <p className="text-gray-700 text-sm">
                Location
              </p>
            </div>

          </div>

          <p className="text-center mt-10 text-gray-700">
            You have complete freedom and flexibility to choose these
            variables according to your needs.
          </p>

        </div>

      </div>

    </section>
  );
};

export default ttt;