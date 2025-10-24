import React from "react";
import { Link } from "react-scroll";

import profileImage from "../assets/image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <img
              src={profileImage}
              alt="Asres Yayeh"
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-blue-400"
            />
            <div className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700">
              <div className="text-center">
                <p className="font-bold text-white text-sm">MERN Stack</p>
                <p className="text-blue-400 text-xs">Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            About Me
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Hello! I'm{" "}
            <span className="text-blue-400 font-semibold">Asres Yayeh</span>, a
            passionate MERN Stack Developer dedicated to crafting exceptional
            digital experiences. I thrive on transforming complex ideas into
            clean, efficient, and scalable web applications that make a real
            impact.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            With expertise in the complete MERN stack (MongoDB, Express.js,
            React, Node.js), I build full-stack solutions that are not only
            technically robust but also user-centric. I'm constantly exploring
            new technologies and best practices to push the boundaries of what's
            possible in web development.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source
            projects, learning new frameworks, or sharing knowledge with the
            developer community. I believe in writing code that's not just
            functional, but also maintainable and elegant.
          </p>
          <div className="flex space-x-4">
            <Link
              to="contact"
              smooth={true}
              durattion={500}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
          <i className="fas fa-code text-blue-400 text-3xl mb-3"></i>
          <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
          <p className="text-gray-400">
            Writing maintainable and scalable code following best practices
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
          <i className="fas fa-lightbulb text-blue-400 text-3xl mb-3"></i>
          <h3 className="text-xl font-bold text-white mb-2">Problem Solver</h3>
          <p className="text-gray-400">
            Transforming complex challenges into elegant solutions
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
          <i className="fas fa-rocket text-blue-400 text-3xl mb-3"></i>
          <h3 className="text-xl font-bold text-white mb-2">Fast Learner</h3>
          <p className="text-gray-400">
            Quickly adapting to new technologies and methodologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
