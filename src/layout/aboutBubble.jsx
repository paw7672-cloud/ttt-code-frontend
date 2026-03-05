import React, { useState } from "react";

const AboutBubble = () => {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState({
    1: true,
    2: true,
  });

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

      box-shadow: none !important;
      backdrop-filter: none !important;

      transition: all 0.4s ease;
    }

    .bubble-container:hover .close-btn {
      opacity: 1;
    }
  `;

  const toggleBubble = (id) => {
    setActive(active === id ? null : id);
  };

  const removeBubble = (id) => {
    setVisible((prev) => ({ ...prev, [id]: false }));
    if (active === id) setActive(null);
  };

  return (
    <>
      {visible[1] && (
        <div className="bubble-container absolute top-[25%] left-[6%] z-[999]">
          <div
            onClick={() => toggleBubble(1)}
            className={`${
              active === 1 ? "w-[420px] h-[420px]" : "w-[280px] h-[280px]"
            } relative rounded-full flex flex-col items-center justify-center
            cursor-pointer hover:scale-105
            animate-[floatLeft_14s_infinite_ease-in-out]
            bubble-style`}
          >
            <h1 className="text-yellow-500 font-bold text-xl text-center">
             Schools and Educational Institutions! Don’t Miss This 
            </h1>

            {active === 1 && (
              <p className="text-gray-800 mt-4 px-8 text-center">
               TTT: The True Buddy of Schools and Educational Institutions
Yes. TTT cares for the Educational institutions, their management and teachers as well. We understand that majority of you are really doing very good work but due to certain reasons, as discussed below, many times you encounter difficult situations which adversely impact the brand value of your school. This is where the TTT comes into your lives.

The Challenge before the Schools and Educational Institutions
•	A student remains in the school or an educational institution for limited time and majority of his time is spent at home with the family.
•	Major part of student’s personality gets shaped by the experiences which he/she has from the family members, society, friends and relatives. 
•	But, unfortunately, when a student performs badly, academically or otherwise, it is the school that is being blamed though the reason for that bad performance could be his family or society.  
•	This negatively impacts the brand value of the school. 
•	But the schools are helpless beyond a point because they are already overburdened. They can’t cover all the dimensions of the student’s personality: social, emotional, psychological, physical, mental, spiritual. 
•	So the unfortunate scenario is that the schools are being blamed and punished for the mistake which they have not committed. 

The Solution
TTT comes here as the one-stop solution for these problems with its unique Programs that would be a win-win situation for
•	Students
•	Parents
•	Schools and educational institutions
TTT will act as the Buddy of the Schools and educational institutions that will
o	complement
and
o	supplement 
the efforts of the schools in preparing their students for the future with its unique Programs which we term as 
              </p>
            )}
          </div>
        </div>
      )}

      {visible[2] && (
        <div className="bubble-container absolute top-[30%] right-[6%] z-[999]">
          <div
            onClick={() => toggleBubble(2)}
            className={`${
              active === 2 ? "w-[420px] h-[420px]" : "w-[300px] h-[300px]"
            } relative rounded-full flex flex-col items-center justify-center
            cursor-pointer hover:scale-105
            animate-[floatRight_16s_infinite_ease-in-out]
            bubble-style`}
          >
            <h1 className="text-yellow-500 font-bold text-xl text-center">
          Choose from UNLIMITED number of Programs! 
            </h1>

            {active === 2 && (
          <p className="text-2xl text-blue-900 mt-4 px-8 text-center">
                Yes, you heard it right! We are not joking. 
There is actually no limit to the Programs that TTT offers you.  At TTT, 
you can choose your program from an infinite choice of programs. We term these programs as TTT CUPs. 
              </p>
            )}
          </div>
                <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble(2);
              }}
              className="close-btn absolute top-5 right-5 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
        </div>
      )}

      <style>{bubbleStyles}</style>
    </>
  );
};

export default AboutBubble;