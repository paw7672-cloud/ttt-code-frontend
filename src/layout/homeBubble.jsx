import React, { useState } from "react";

const HomeBubbles = () => {
  const [visibleBubbles, setVisibleBubbles] = useState({
    left: true,
    right: true,
  });

  const [activeModal, setActiveModal] = useState(null);
const bubbleStyles = `
@keyframes floatSmooth {
  0%   { transform: translate(0px, 0px); }
  25%  { transform: translate(30px, -40px); }
  50%  { transform: translate(-20px, -20px); }
  75%  { transform: translate(25px, 30px); }
  100% { transform: translate(0px, 0px); }
}

.bubble-style {
  background: rgba(255,255,255,0.08);
  border: 2px solid rgba(255,255,255,0.7);

  box-shadow: 0 12px 35px rgba(0,0,0,0.15);

  backdrop-filter: none;
  transition: all 0.4s ease;
}

.bubble-style:hover {
  transform: scale(1.08);
}

.bubble-container:hover .close-btn {
  opacity: 1;
}

@keyframes modalPop {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
`;

  const removeBubble = (side) => {
    setVisibleBubbles((prev) => ({
      ...prev,
      [side]: false,
    }));
  };

  return (
    <>
      {/* LEFT BUBBLE */}
      {visibleBubbles.left && (
        <div className="bubble-container absolute top-[20%] left-[5%] z-30">
          <div
            onClick={() => setActiveModal("left")}
            className="relative w-[250px] h-[250px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 animate-[floatSmooth_10s_infinite_ease-in-out] bubble-style"
          >
            <h1 className="text-xl font-bold text-yellow-400 text-center">
           Schools and Educational Institutions! Don’t Miss This 
            </h1>

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble("left");
              }}
              className="close-btn absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* RIGHT BUBBLE */}
      {visibleBubbles.right && (
        <div className="bubble-container absolute top-[30%] right-[5%] z-30">
          <div
            onClick={() => setActiveModal("right")}
            className="relative w-[250px] h-[250px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 animate-[floatSmooth_14s_infinite_ease-in-out] bubble-style"
          >
            <h1 className="text-xl font-bold text-yellow-400 text-center">
            Choose from UNLIMITED number of Programs! 
            </h1>

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble("right");
              }}
              className="close-btn absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
          <div
            className="bg-white rounded-2xl p-8 w-[90%] max-w-[600px] text-center shadow-2xl relative"
            style={{ animation: "modalPop 0.3s ease" }}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* LEFT MODAL CONTENT */}
           {activeModal === "left" && (
  <>
    <h2 className="text-3xl font-bold mb-6 text-yellow-500">
      Program Information
    </h2>

    <div className="text-left text-gray-700 space-y-4 max-h-[60vh] overflow-y-auto pr-2">

      <p className="leading-relaxed">
        <strong>The True Buddy of Schools and Educational Institutions</strong>
      </p>

      <p className="leading-relaxed">
        Yes, TTT cares for educational institutions, their management and teachers.
        We understand that many schools are doing excellent work but sometimes
        face difficult situations that affect the brand value of the institution.
        This is where TTT becomes a strong support system.
      </p>

      <p className="font-semibold text-gray-900">
        The Challenge before Schools and Educational Institutions
      </p>

      <p>✔ A student stays in school for limited hours while most of the time is spent at home.</p>

      <p>✔ A large part of the student's personality is shaped by family, society, friends and relatives.</p>

      <p>✔ When a student performs poorly academically or behaviorally, schools are often blamed.</p>

      <p>✔ This negatively affects the reputation and brand value of the institution.</p>

      <p>✔ Schools are already overburdened and cannot always address all personality dimensions like social, emotional, psychological, physical, mental and spiritual growth.</p>

      <p>✔ As a result, schools are sometimes blamed for issues beyond their control.</p>

      <p className="font-semibold text-gray-900">
        The Solution
      </p>

      <p>
        TTT offers a one-stop solution through its unique programs that create
        a win-win situation for:
      </p>

      <p>✔ Students</p>
      <p>✔ Parents</p>
      <p>✔ Schools and Educational Institutions</p>

      <p>
        TTT acts as a strong buddy for schools by complementing and
        supplementing their efforts in preparing students for the future
        through its innovative program structure known as <strong>TTT CUP</strong>.
      </p>

      <p className="font-semibold text-gray-900">Program Highlights</p>

      <p>✔ Professional Training Programs</p>
      <p>✔ Practical Learning Approach</p>
      <p>✔ Expert Trainers & Mentors</p>
      <p>✔ Industry Relevant Skills</p>
      <p>✔ Continuous Learning Support</p>

      <div className="pt-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg">
          Learn More
        </button>
      </div>

    </div>
  </>
)}

            {/* RIGHT MODAL CONTENT */}
            {activeModal === "right" && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-yellow-500">
              Choose from UNLIMITED number of Programs! 
                </h2>

                <p className="text-gray-600 mb-4">
                  TTT programs focus on practical learning and real world
                  integration instead of traditional classroom methods.
                </p>

                <ul className="text-left text-gray-700 space-y-2 mt-4">
                  <li>✔ Choose from Infinite Programs</li>
                  <li>✔ Unique Program Structure</li>
                  <li>✔ Concept of Integration</li>
                  <li>✔ TTT MAP Learning Model</li>
                  <li>✔ ABCDL Framework</li>
                  <li>✔ Post Program Support</li>
                  <li>✔ Detailed Feedback</li>
                </ul>

                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg">
                  Explore Programs
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <style>{bubbleStyles}</style>
    </>
  );
};

export default HomeBubbles;