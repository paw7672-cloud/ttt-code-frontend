import React from "react";
import { Target, Lightbulb, Settings } from "lucide-react";
import TttImage from "../tttDifferent/tttImage";

const cards = [
  {
    title: "MISSION",
    text: "Welcome to the world of TTT ! Or if we may say, the world as seen by TTT. It's a world that is full of success, happiness and love of your loved ones.",
    color: "red",
    icon: Target,
    link: "/aboutus-vision",
  },
  {
    title: "VISION",
    text: "The current system focuses on just one aspect: the Academic Success so that we can have good money.",
    color: "blue",
    icon: Lightbulb,
    link: "/aboutus-vision",
  },
  {
    title: "CONCEPT",
    text: 'The Mission of the TTT is to conquer this challenge by making you and every student "top the Real Exam".',
    color: "green",
    icon: Settings,
    link: "/aboutus-concept",
  },
];

const colors = {
  red: {
    border: "border-red-500",
    text: "text-red-500",
    bg: "bg-red-500",
  },
  blue: {
    border: "border-blue-500",
    text: "text-blue-500",
    bg: "bg-blue-500",
  },
  green: {
    border: "border-green-500",
    text: "text-green-500",
    bg: "bg-green-500",
  },
};

 function ThreeSection() {
  return (
    <div className="bg-white px-6 py-6  ">

      {/* ===== CARDS SECTION ===== */}
<div className="bg-gradient-to-r from-[#FFD42A] to-[#FFC107] px-4 py-4 "> 
      <div className="max-w-6xl mx-auto  flex flex-col md:flex-row gap-8">

        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
            <a
              key={i}
              href={card.link}
              className={`group flex-1 bg-white p-12 rounded-[35px] border-2 ${colors[card.color].border}
              text-center shadow-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >

              {/* ICON */}
              <div className="relative w-[120px] h-[120px] mx-auto mb-8 [perspective:1000px]">

                <div
                  className="relative w-full h-full transition-transform duration-500
                  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >

                  {/* FRONT */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-gray-200 bg-white [backface-visibility:hidden]">
                    <Icon className={`w-12 h-12 ${colors[card.color].text}`} />
                  </div>

                  {/* BACK */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-full ${colors[card.color].bg} text-white [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                </div>

                {/* STEM */}
                <div
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-[10px] h-[16px] ${colors[card.color].bg} rounded-b-md`}
                ></div>

              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-extrabold mb-4">
                OUR <span className={colors[card.color].text}>{card.title}</span>
              </h2>

              {/* TEXT */}
              <p className="text-gray-600 leading-relaxed">
                {card.text}
              </p>

            </a>
          );
        })}
</div>
      </div>


      {/* ===== TTT IMAGE SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto mt-4">
        <TttImage />
      </section>

    </div>
  );
}
export default ThreeSection;