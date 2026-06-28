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
    <nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.9)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20" />
          <div>
            <div className="text-lg font-semibold uppercase tracking-[0.24em] text-slate-100">
              Asres Yayeh
            </div>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="group text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-300"
                activeClass="text-cyan-300"
              >
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-cyan-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/90 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300 md:hidden"
        >
          {isOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-6 py-5 backdrop-blur-xl">
          <ul className="space-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
