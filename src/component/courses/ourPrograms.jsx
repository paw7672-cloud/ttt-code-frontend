import React from "react";
import { BookOpen, Scale, Smartphone, HeartHandshake, Brain, Clock } from "lucide-react";

const programs = [
  {
    title: "Financial Literacy",
    icon: BookOpen,
  },
  {
    title: "Legal Literacy",
    icon: Scale,
  },
  {
    title: "Screen Deaddiction Club",
    icon: Smartphone,
  },
  {
    title: "Life Lessons from Ramayan & Mahabharat",
    icon: HeartHandshake,
  },
  {
    title: "Stress Management",
    icon: Brain,
  },
  {
    title: "Time Management",
    icon: Clock,
  },
];

const OurPrograms = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Our Popular Programs
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          If you are new to the world of TTT, you may first explore some of the
          most popular TTT CUP programs loved by many students.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md p-8 
                hover:shadow-2xl hover:-translate-y-2 transition duration-300
                border-t-4 border-yellow-400"
              >
                <div className="flex items-center gap-4 mb-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                    {program.title}
                  </h3>

                </div>

                <p className="text-gray-600 text-sm">
                  Explore this powerful TTT CUP program designed to help you
                  grow, develop life skills and achieve success.
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default OurPrograms;