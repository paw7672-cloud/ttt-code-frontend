import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

const pages = [
  { name: "Home", path: "/" },

  { name: "Introduction", path: "/aboutus-introduction" },
  { name: "Vision and Mission", path: "/aboutus-vision" },
  { name: "The Concept", path: "/aboutus-concept" },

  { name: "Courses", path: "/courses" },
  { name: "Various Modules", path: "/courses-modules" },
  { name: "Design Cup", path: "/design-cup" },
  { name: "Our Programs", path: "/our-programs" },

  { name: "Scholarships", path: "/scholarships" },

  { name: "Students", path: "/why/students" },
  { name: "Schools", path: "/why/schools" },
  { name: "Corporates", path: "/why/corporates" },
  { name: "Parents", path: "/why/parents" },

  { name: "Gallery Pictures", path: "/gallery/pictures" },
  { name: "Gallery Videos", path: "/gallery/videos" },

  { name: "Contact Us", path: "/connect/contact" },

  { name: "Help Others", path: "/help-others" },
  { name: "Fun and Entertainment", path: "/fun" },

  { name: "TTT Merchandise", path: "/merchandise" }
];
const results = pages.filter((page) =>
  page.name.toLowerCase().includes(query.toLowerCase()) ||
  page.path.toLowerCase().includes(query.toLowerCase())
);
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h2>

      {results.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="space-y-3">

          {results.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="block p-4 border rounded-lg hover:bg-yellow-100"
            >
              {item.name}
            </NavLink>
          ))}

        </div>
      )}

    </div>
  );
};

export default SearchResults;