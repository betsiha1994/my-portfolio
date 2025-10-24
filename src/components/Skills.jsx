import React from "react";
import { Link } from "react-scroll";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const mernSkills = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-16 h-16" />,
      level: "Advanced",
      description: "NoSQL database design, aggregation, and optimization",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-16 h-16" />,
      level: "Advanced",
      description: "RESTful APIs, middleware, and server architecture",
    },
    {
      name: "React",
      icon: <FaReact className="w-16 h-16" />,
      level: "Expert",
      description: "Components, hooks, state management, and performance",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-16 h-16" />,
      level: "Advanced",
      description: "Backend development, event loop, and package management",
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "text-green-400";
      case "Advanced":
        return "text-blue-400";
      case "Intermediate":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  const getLevelBar = (level) => {
    switch (level) {
      case "Expert":
        return "w-5/6";
      case "Advanced":
        return "w-2/3";
      case "Intermediate":
        return "w-1/2";
      default:
        return "w-1/3";
    }
  };

  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MERN Stack Skills
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Specialized expertise in the complete MERN stack ecosystem. From
            database design to frontend development, I master the technologies
            that power modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mernSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {skill.name}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-sm font-semibold ${getLevelColor(
                    skill.level
                  )}`}
                >
                  {skill.level}
                </span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div
                  className={`h-2 rounded-full bg-blue-500 transition-all duration-500 ${getLevelBar(
                    skill.level
                  )}`}
                ></div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why MERN Stack?
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The MERN stack enables me to build full-stack JavaScript
              applications with a unified language, ensuring consistency, faster
              development, and seamless integration between frontend and
              backend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "JavaScript Everywhere",
                desc: "Single language for full-stack development",
                icon: "fas fa-code",
              },
              {
                title: "High Performance",
                desc: "Fast rendering with React and efficient backend with Node.js",
                icon: "fas fa-bolt",
              },
              {
                title: "Scalable",
                desc: "MongoDB scales horizontally, perfect for growing applications",
                icon: "fas fa-expand",
              },
              {
                title: "Modern Ecosystem",
                desc: "Access to vast npm ecosystem and latest tools",
                icon: "fas fa-rocket",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-4">
                <i
                  className={`${feature.icon} text-blue-400 text-3xl mb-3`}
                ></i>
                <h4 className="text-white font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Ready to build something amazing with the MERN stack?
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Skills;
