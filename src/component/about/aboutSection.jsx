import React from "react";
import { FaRocket, FaBrain, FaGraduationCap } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";

import babaVideo from "../../assets/baba.jpeg.mp4";
import AboutBubble from "../../layout/aboutBubble";

const AboutSection = () => {
  return (
  
    
<div className="relative overflow-hidden">
  <AboutBubble />

<section className="relative bg-[#f7f7f7] py-16 md:py-24 lg:py-28 overflow-auto">


      {/* Top Yellow Curve */}
    

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 
                      flex flex-col lg:flex-row 
                      items-center gap-12 lg:gap-20">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div className="relative flex-1 
                        flex justify-center items-center 
                        min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]">

          {/* OUTER ROTATING CIRCLE */}
   

    
          {/* RESPONSIVE IMAGE */}
        <div className="relative w-full max-w-[750px] h-[680px] lg:h-[780px] 
         z-20 transition-all duration-500 hover:scale-105 hover:rotate-0">
<video
  src={babaVideo}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover rounded-2xl shadow-2xl"
></video>
          </div>

          {/* FLOATING ICONS */}
        
        
        </div>

        {/* ================= RIGHT TEXT SECTION ================= */}
        <div className="flex-1 text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         font-semibold mb-6 md:mb-8 font-serif">
            About The True Topper
          </h2>

          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed mb-6">
            Hello! We are The True Topper and people call us TTT.
            <span className="block mt-2 font-semibold text-gray-900">
              TTT is a movement which aims to harness the true potential of every human being with particular focus on students.
            </span>
          </p>

          <p className="text-base sm:text-xl   font-semibold text-gray-700 leading-relaxed mb-6">
            TTT provides students with the required skill set which will not only
            ensure their academic and materialistic excellence, but also ensure
            their all-round development so that they can truly enjoy their success.
          </p>

          <p className="text-base sm:text-xl  font-semibold  text-gray-700 leading-relaxed mb-10">
            TTT achieves this through different sessions, workshops, and activities
            delivered through our unique concept of{" "}
            <span className="font-bold text-gray-500">TTT CUP</span>.
          </p>

          <div className="flex flex-col sm:flex-row 
                          justify-center lg:justify-start 
                          items-center gap-6">

            <button className="bg-pink-500 hover:bg-pink-600 
                               text-white px-6 sm:px-8 py-3 
                               rounded-lg shadow-lg 
                               transition text-base sm:text-lg">
              Learn More About Us
            </button>

          </div>

        </div>
      </div>
    
    </section>
      </div>
  );
};

export default AboutSection;
