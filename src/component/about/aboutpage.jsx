import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutPage = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("-", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

      {/* INTRODUCTION */}
    <section id="introduction" className="max-w-5xl mx-auto py-16 px-6">

  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
    Introduction
  </h1>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-gray-50 p-5 rounded-lg shadow-sm">
    Hello! We are <strong className="text-purple-600">The True Topper</strong>, 
    and people lovingly call us <strong className="text-purple-700">TTT</strong>.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    <span className="font-semibold text-indigo-600">TTT</span> is a movement 
    which aims to harness the <span className="font-semibold">true potential</span> 
    of every human being with a particular focus on students.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-md">
    TTT is a movement that aims to provide students with the required skill set 
    which will not only ensure their <span className="font-semibold text-indigo-700">
    academic and materialistic excellence</span> but will also ensure their 
    <span className="font-semibold"> all-round development</span> in such a way 
    that they can truly enjoy their materialistic success.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 shadow-sm">
    TTT achieves this through different sessions, workshops, and activities 
    which are delivered to you through our unique concept of 
    <span className="font-bold text-purple-700 text-xl"> TTT CUP</span>.
  </p>


    
  
      </section>

      {/* VISION */}
      <section id="vision" className="max-w-5xl mx-auto py-16 px-6">

  <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
    Vision
  </h1>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-gray-50 p-5 rounded-lg shadow-sm">
    <strong className="text-purple-600">About Us :: Vision and Mission</strong>
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold text-indigo-700">
    Our Vision
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Welcome to the world of <span className="font-semibold text-purple-600">TTT</span>! 
    Or if we may say, the world as seen by TTT.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-md">
    It’s a world that is full of success, happiness and love of your loved ones; 
    without any tension, stress and physical or mental ailments.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    It’s a world where you can live a balanced life and ensures 
    <span className="font-semibold text-indigo-600"> Holistic Development </span>
    of every person, with special emphasis on students.
  </p>

  <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-6">
    The Challenge
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    The current system focuses on just one aspect: 
    <span className="font-semibold"> Academic Success </span> 
    so that we can have good money.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-md">
    And it ignores other important aspects like Physical Health, Mental Health, 
    Family Health and Relationships, Social Admiration and Reputation, 
    Spiritual Wellbeing and Patriotic Health.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    All this results in the stress, chaos and misery that we see around us; 
    that often culminates into extreme cases of failed relations, loss of social 
    repute, depression and suicides.
  </p>

</section>

      {/* MISSION */}
    
<section id="mission" className="max-w-5xl mx-auto py-16 px-6">

  <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
    Mission
  </h1>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold text-indigo-700">
    Our Mission
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-md">
    The Mission of TTT is to conquer this challenge by making you and every
    student <span className="font-semibold text-indigo-700">“top the Real Exam”</span>.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    And the Real Exam is the <span className="font-semibold text-purple-600">“Exam of Life”!</span>
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    This will ensure not only <span className="font-semibold">Academic and
    Materialistic success</span> for everyone but also that everyone lives a
    happy and healthy life.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-green-50 border-l-4 border-green-500 p-5 rounded-md">
    TTT is also the <span className="font-semibold">Best Buddy of Schools</span>.
    We complement and supplement the efforts of schools thereby increasing
    their brand value.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    TTT aims at the <span className="font-semibold text-indigo-600">
    Holistic Development</span> of every student so that he/she lives not
    only an academically successful life but also a happy, contented,
    fun-filled and healthy life.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 shadow-sm">
    We achieve this through our unique <span className="font-bold text-purple-700">
    TTT CUPs</span>. These are life-changing programs designed according to
    the specific needs of each individual. In other words, everyone learns
    something unique in the world, created specifically for their personal
    needs and requirements.
  </p>

</section>
    </div>
  );
};


export default AboutPage;