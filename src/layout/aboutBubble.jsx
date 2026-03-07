import React, { useState } from "react";

const AboutBubble = () => {
  const [visibleBubbles, setVisibleBubbles] = useState({
    left: true,
    right: true,
  });

  const [activeModal, setActiveModal] = useState(null);

  const bubbleStyles = `
  @keyframes floatLeft {
    0% { transform: translate(0px,0px); }
    50% { transform: translate(30px,-40px); }
    100% { transform: translate(0px,0px); }
  }

  @keyframes floatRight {
    0% { transform: translate(0px,0px); }
    50% { transform: translate(-30px,35px); }
    100% { transform: translate(0px,0px); }
  }

  .bubble-style {
    background: rgba(255, 212, 42, 0.25);
    border: 2px solid #FFD42A;
    transition: all 0.4s ease;
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
        <div className="bubble-container absolute top-[25%] left-[6%] z-30">
          <div
            onClick={() => setActiveModal("left")}
            className="relative w-[260px] h-[260px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 animate-[floatLeft_14s_infinite_ease-in-out] bubble-style"
          >
            <h1 className="text-yellow-600 font-bold text-xl text-center px-6">
            Enroll for a Program that no one else on Earth has enrolled for
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
        <div className="bubble-container absolute top-[30%] right-[6%] z-30">
          <div
            onClick={() => setActiveModal("right")}
            className="relative w-[260px] h-[260px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 animate-[floatRight_16s_infinite_ease-in-out] bubble-style"
          >
            <h1 className="text-yellow-600 font-bold text-xl text-center px-6">
              Unlimited Programs
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
            className="bg-white rounded-2xl p-8 w-[90%] max-w-[650px] text-center shadow-2xl relative max-h-[80vh] overflow-y-auto"
            style={{ animation: "modalPop 0.3s ease" }}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* LEFT MODAL */}
            {activeModal === "left" && (
  <>
    <h2 className="text-3xl font-bold mb-6 text-yellow-500">
      When You Are Unique, Why Should Your Programs Be Ordinary?
    </h2>

    <div className="text-left text-gray-700 space-y-4 leading-relaxed">

      <p>
        We don't offer “one same course” designed by someone who doesn’t
        know anything about you and your requirements.
      </p>

      <p>
        At TTT, on the contrary, you learn from programs which are designed
        by you, for yourself, based completely on your requirements and
        needs.
      </p>

      <p>
        Of course, our experts are always there to guide and help you in
        designing these programs in the best possible way.
      </p>

      <p>
        You are no longer a part of the crowd where lakhs of students go
        through the same course.
      </p>

      <p>
        With TTT, there is a very high probability that you might be doing
        a unique program which only you are doing on the entire planet!
      </p>

      <p className="pt-2">
        For more details, please explore further.
      </p>

      <div className="pt-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg">
          Learn More
        </button>
      </div>

    </div>
  </>
)}
           

            {/* RIGHT MODAL */}
            {activeModal === "right" && (
              <>
                <h2 className="text-3xl font-bold mb-6 text-yellow-500">
                  Unlimited Programs
                </h2>

                <p className="text-gray-700 text-lg">
                  Yes, you heard it right! There is no limit to the
                  programs offered by TTT.
                </p>

                <p className="text-gray-700 mt-4">
                  You can choose your program from an infinite range
                  of learning programs known as TTT CUPs.
                </p>

                <p className="text-blue-900 font-semibold mt-6 text-xl">
                  Choose from unlimited possibilities.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <style>{bubbleStyles}</style>
    </>
  );
};

export default AboutBubble;