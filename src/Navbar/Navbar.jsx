import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    link: "Home",
    path: "/"
  },
  {
    link: "Features",
    path: "/features"
  },
  {
    link: "Pricing",
    path: "/pricing"
  },
  {
    link: "Blog",
    path: "/blog"
  },
];

function Navbar() {
  return (
    <div className="bg-blue-300 h-16">
      <div className="container mx-auto flex items-center justify-center space-x-10 text-center h-full">
        {/* Navigation Links */}
        {navLinks.map((ele, i) => (
          <Link
            key={i}
            to={ele.path}
            className="text-white text-lg font-medium hover:text-gray-300 transition"
          >
            {ele.link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
