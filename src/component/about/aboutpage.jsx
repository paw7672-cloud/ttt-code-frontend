import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* INTRODUCTION */}
      <section id="introduction">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Introduction
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Hello! We are <strong>The True Topper</strong>, and people lovingly
        call us <strong>TTT</strong>.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        TTT is a movement which aims to harness the true potential of every
        human being with a particular focus on students.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        TTT is a movement that aims to provide students with the required
        skill set which will not only ensure their academic and materialistic
        excellence but will also ensure their all-round development in such
        a way that they can truly enjoy their materialistic success.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        TTT achieves this through different sessions, workshops, and
        activities which are delivered to you through our unique concept
        of <strong>TTT CUP</strong>.
      </p>

  
      </section>

      {/* VISION */}
      <section id="vision">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Vision
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our vision is to create a strong foundation for future leaders
          through innovation, knowledge, and practical learning that empowers
          students to achieve excellence in life.
        </p>
      </section>

      {/* MISSION */}
      <section id="mission">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Mission
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to provide students with the right mindset,
          knowledge, and life skills so they can achieve success while
          maintaining balance and happiness in life.
        </p>
      </section>

    </div>
  );
};


export default AboutPage;