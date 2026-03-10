import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import tttbaba from "../assets/tttbaba.jpeg";

const SubjectCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ieeo-payment", {
      state: { classRange: "6-12" },
    });
  };

  return (
    <div
      id="olympiad-section"
      className="min-h-[10vh] bg-gradient-to-r from-[#FFD42A] to-[#FFC107] 
      py-8 sm:py-8 lg:py-8 px-4 sm:px-6"
    >

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-16 lg:mb-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-extrabold text-gray-900 mb-4 tracking-wide drop-shadow-lg"
        >
          Olympiad ++
        </h1>

        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl 
          font-bold text-gray-800 opacity-90"
        >
          International Ethical Entrepreneurship Olympiad++
        </h2>

        <div className="w-24 sm:w-32 lg:w-40 h-1 bg-black mx-auto mt-6 rounded-full"></div>
      </div>

      {/* CENTER CARD CONTAINER */}
      <div className="flex justify-center items-center">

        {/* CARD */}
        <div
          className="relative group cursor-pointer 
          bg-white/40 backdrop-blur-2xl 
          border border-white/40 
          rounded-3xl sm:rounded-[40px]
          shadow-2xl 
          p-8 sm:p-12 lg:p-16 
          text-center 
          transition-all duration-500 
          hover:-translate-y-4 
          hover:shadow-yellow-500/40 
          hover:bg-white/60 
          active:scale-95 
          w-full max-w-md sm:max-w-xl
          lg:h-[600px] flex flex-col justify-center"
        >

          {/* Premium Badge */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 
            bg-gradient-to-r from-black to-gray-800 
            text-yellow-400 px-6 py-2 
            rounded-full text-xs sm:text-sm font-bold shadow-lg"
          >
            IEEO++
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6 text-yellow-600 mt-6">
            <FaLaptopCode size={60} />
          </div>

          {/* Title */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl 
            font-extrabold text-gray-900 mb-4"
          >
            Entrepreneurship Olympiad++
          </h2>

          {/* Description */}
          <p
            className="text-sm sm:text-base md:text-xl 
            text-gray-900 mb-10 leading-relaxed"
          >
            Participate in the International Ethical Entrepreneurship Olympiad++
            from anywhere in the world through our secure online platform.
          </p>

          {/* Bottom Line */}
          <div
            className="w-20 h-1 bg-yellow-500 mx-auto 
            rounded-full group-hover:w-32 transition-all duration-500 mb-6"
          ></div>

          {/* REGISTER BUTTON (ADDED) */}
          <div className="flex justify-center">
            <button
              onClick={handleClick}
              className="px-8 py-3 text-lg font-bold text-black 
              bg-gradient-to-r from-[#FFD42A] to-[#FFC107] 
              rounded-full shadow-lg 
              hover:scale-105 hover:shadow-xl 
              transition-all duration-300"
            >
              Register Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SubjectCards;