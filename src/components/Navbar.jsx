import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400">Asres Yayeh</div>

        <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-blue-400 font-medium cursor-pointer transition duration-300 text-sm tracking-wide"
                activeClass="text-blue-400 border-b-2 border-blue-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-2xl text-blue-400" />
          ) : (
            <FaBars className="text-2xl text-blue-400" />
          )}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-gray-800 shadow-lg px-6 pb-4 space-y-4 border-t border-gray-700">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="block text-gray-300 hover:text-blue-400 font-medium cursor-pointer py-2 transition duration-300 uppercase text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
