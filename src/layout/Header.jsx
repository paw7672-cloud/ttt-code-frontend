import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import tttbaba from "../assets/tttbaba.jpeg"
import { useEffect } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOlympiadClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("olympiad-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("olympiad-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  // About us Section part yar 




  
useEffect(() => {
  if (!window.googleTranslateLoaded) {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,bn,ta,te,gu,mr,pa,ur",
        },
        "google_translate_element"
      );
    };

    document.body.appendChild(script);
    window.googleTranslateLoaded = true;
  }
}, []);



  const navLinks = [
    { name: "Home", path: "/" },

    {
      name: "About Us",
      dropdown: [ 
        { name: "Introduction", path: "/aboutus-introduction" },
        { name: "Vision and Mission", path: "/aboutus-vision" },
        { name: "The Concept", path: "/aboutus-concept" },
        { name: "Team TTT!", path: "/aboutus/team" },
        { name: "Advisory Board", path: "/aboutus/advisory" },
      ],
    },



  { name: " How TTT is different ", path: "/howdifferent" },


  {
  name: "Our Courses",
  dropdown: [
    { name: "We Don’t Offer Courses!", path: "/courses" },
    { name: "Various Modules", path: "/courses-modules" },
  { name: "Design Your Unique TTT CUP", path: "/design-cup" },
   { name: "Our Popular Programs", path: "our-programs" }
  ],
},
    
  
   {
  name: "Why Join TTT?",
  dropdown: [
    { name: "For Students", path: "/why/students" },
    { name: "For Schools and Educational Institutions", path: "/why/schools" },
    { name: "For Corporates", path: "/why/corporates" },
    { name: "For Parents and Grandparents", path: "/why/parents" },
    { name: "For Govt Offices, Institutes and Academies", path: "/why/govt" },
    { name: "For NGOs, Trusts, Social Clubs etc", path: "/why/ngos" },
  ],
},
    { name: "Scholarships", path: "/scholarships" },
  {
  name: "Don’t Miss This",
  dropdown: [
    { name: "Offers / Attractions", path: "/dont-miss/offers" },
    { name: "Get your free Sim Sim Mantra", path: "/dont-miss/sim-sim" },
  ],
},
{
  name: "The Bond of Trust",
  dropdown: [
    { name: "Experts and Teachers", path: "/bond/experts" },
    { name: "Toppers & Aspirants (Students)", path: "/bond/students" },
    { name: "Parents, Grand Parents & Great Grand Parents", path: "/bond/parents" },
    { name: "Aam Aadmi", path: "/bond/aam-aadmi" },
  ],
},
{
  name: "Gallery",
  dropdown: [
    { name: "Pictures", path: "/gallery/pictures" },
    { name: "Videos", path: "/gallery/videos" },
    { name: "TTT in Media", path: "/gallery/media" },
  ],
},
 {
  name: "Some Important Lists For You",
  dropdown: [
    {
      name: "List of imp schools and coaching institutions in your city",
      path: "/lists/schools",
    },
    {
      name: "List of Must Read Books",
      path: "/lists/books",
    },
    {
      name: "List of Important Exams",
      subDropdown: [
        { name: "Scholarship Exams", path: "/lists/exams/scholarship" },
        { name: "Exams for School Admissions", path: "/lists/exams/admissions" },
        {
          name: "Co-curricular & Extra-curricular Activities",
          path: "/lists/exams/activities",
        },
        {
          name: "Sports Related Tournaments",
          path: "/lists/exams/sports",
        },
      ],
    },
    {
      name: "Other Important Courses",
      path: "/lists/courses",
    },
  ],
},

  {
    name: "Connect with Us",
    dropdown: [
      { name: "Our Contact Details", path: "/connect/contact" },
      {
        name: "Feedback",
        submenu: [
          { name: "Student", path: "/connect/feedback/student" },
          { name: "Parent", path: "/connect/feedback/parent" },
          { name: "School", path: "/connect/feedback/school" },
          { name: "Others", path: "/connect/feedback/others" },
        ],
      },
      { name: "Queries & Questions", path: "/connect/queries" },
    ],
  },
{
  name: "I Want to Be Rich",
  dropdown: [
    { name: "Become a TTT Buddy", path: "/rich/buddy" },
    { name: "Advertise with Us", path: "/rich/advertise" },
    { name: "Become a Part of Team TTT", path: "/rich/team" },
    { name: "Collaborate with Us", path: "/rich/collaborate" },
    { name: "Refer and Earn", path: "/rich/refer" },
  ],
},
{ name: "Help Others", path: "/help-others" },
{ name: "Fun and Entertainment", path: "/fun" },
{ name: "TTT Merchandise", path: "/merchandise" },

  ];

return (
  <header className="sticky top-0 z-50  shadow-md px-3 py-1 bg-gradient-to-r from-[#FFD42A] to-[#FFC107]">
<div className=" fixedw-full bg-gradient-to-r from-[#FFD42A] to-[#FFC107] py-0 px-0">
 
 <div className="max-w-[550px] mx-auto flex flex-col md:flex-row items-center gap-3">

<form
  onSubmit={(e) => {
    e.preventDefault();
    const query = e.target.websiteSearch.value.trim();

    if (!query) return;

    navigate(`/search?q=${query}`);
  }}
  className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full"
>
  <img
    src={tttbaba}
    alt="Search"
    className="w-5 h-5 mr-2 opacity-70"
  />

  <input
    type="text"
    name="websiteSearch"
    placeholder="Search our website..."
    className="w-full outline-none bg-transparent text-sm"
  />
</form>

  {/* WEBSITE SEARCH */}
  


  {/* GOOGLE SEARCH */}
<form
  onSubmit={(e) => {
    e.preventDefault();

    const query = e.target.googleSearch.value.trim();
    if (!query) return;

    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  }}
  className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full"
>
  <img
    src="/google-icon.png"
    alt="Google"
    className="w-5 h-5 mr-2 opacity-70"
  />

  <input
    type="text"
    name="googleSearch"
    placeholder="Search on Google..."
    className="w-full outline-none bg-transparent text-sm"
  />
</form>

 
<div className="relative">

  {/* SMALL LANGUAGE BUTTON */}
<button
  onClick={() => setShowLang(!showLang)}
  className="flex items-center gap-2 px-4 py-1.5 rounded-full
  bg-white text-gray-700 text-xs font-medium
  border border-gray-300
  shadow-sm hover:bg-blue-500 hover:text-white
  hover:border-blue-500 hover:shadow-md
  transition-all duration-300"
>
 Select Language
</button>

  {/* LANGUAGE DROPDOWN */}
<div
  className={`absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-3 z-50 w-[200px] ${
    showLang ? "block" : "hidden"
  }`}
>
  <div id="google_translate_element"></div>
</div>
</div>


</div>
</div>





      <div className="max-w-[1600px] mx-auto flex justify-between items-center">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center group -mt-12">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 md:h-28 lg:h-32 w-auto object-contain drop-shadow-xl hover:scale-105 transition-all duration-300"
          />
        </div>
      </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm font-medium text-gray-900">

          {navLinks.map((link, index) => (

            link.dropdown ? (
              <div key={index} className="relative group">

                <span className="cursor-pointer transition hover:text-black">
                  {link.name}
                </span>

                {/* Stable Dropdown */}
              <div
  className="absolute left-0 top-full mt-3
  bg-gradient-to-br from-[#FFD42A] to-[#FFC107]
  shadow-2xl rounded-2xl py-4 w-72 z-50
  border border-yellow-600/40
  opacity-0 invisible translate-y-3
  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
  transition-all duration-300"
>
  {link.dropdown.map((item, i) => (

    <div key={i} className="relative group/sub">

      {/* NORMAL LINK */}
      {!item.submenu ? (
        <NavLink
          to={item.path}
          className="block px-5 py-2 rounded-lg
          text-gray-900 font-medium
          hover:bg-white hover:text-black
          hover:shadow-md
          transition-all duration-200"
        >
          {item.name}
        </NavLink>
      ) : (
        <div className="px-5 py-2 rounded-lg text-gray-900 font-medium hover:bg-white hover:text-black cursor-pointer flex justify-between">
          {item.name} →
        </div>
      )}

      {/* SUBMENU */}
      {item.submenu && (
        <div
          className="absolute left-full top-0 ml-2
          bg-white shadow-xl rounded-xl py-2 w-60
          opacity-0 invisible translate-x-3
          group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0
          transition-all duration-200"
        >
          {item.submenu.map((sub, j) => (
            <NavLink
              key={j}
              to={sub.path}
              className="block px-4 py-2 text-gray-800 hover:bg-yellow-100"
            >
              {sub.name}
            </NavLink>
          ))}
        </div>
      )}

    </div>

  ))}
</div>


  
                  

              </div>
            ) : link.name === "Olympiad" ? (
              <a
                key={index}
                href="#"
                onClick={handleOlympiadClick}
                className="transition hover:text-black"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-black ${
                    isActive ? "text-black underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            )

          ))}

        </nav>

        {/* BUTTONS */}
        <div className="hidden lg:flex gap-4 items-center">

          <NavLink to="/login">
            <div className="flex items-center bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="mr-2">LOGIN</span>
              <FaUser />
            </div>
          </NavLink>

          <NavLink to="/ieeo-registration">
            <div className="flex items-center bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="mr-2">SIGNUP</span>
              <FaUserPlus />
            </div>
          </NavLink>

        </div>

        {/* MOBILE ICON */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-yellow-300 mt-4 rounded-lg p-6 space-y-4 text-lg font-semibold text-gray-900">

          {navLinks.map((link, index) => (

            link.dropdown ? (
              <div key={index}>
                <div className="font-bold">{link.name}</div>

                <div className="pl-4 mt-2 space-y-2">
                  {link.dropdown.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-black"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : link.name === "Olympiad" ? (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  handleOlympiadClick(e);
                  setMenuOpen(false);
                }}
                className="block hover:text-black"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-black"
              >
                {link.name}
              </NavLink>
            )

          ))}

        </div>
      )}

    </header>
  );
};

export default Header;