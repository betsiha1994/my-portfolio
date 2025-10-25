import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ITIL Service and Request Management System",
    description:
      "Full-stack ITIL service and request management system with React frontend, Node.js backend, and MongoDB database.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/betsiha1994/itil-backend",
    demo: "https://itil-system-demo.com",
  },
  {
    title: "Food Delivery Platform",
    description:
      "Full-stack food delivery platform with real-time updates and user authentication.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/betsiha1994/restaurant-backend",
    demo: "https://restaurant-ordering-system-demo.com",
  },
  {
    title: "SMS API Integration Service",
    description:
      "SMS API integration service for sending and receiving SMS messages.",
    tech: ["React", "Node.js", "Express", "Twilio API"],
    github: "https://github.com/betsiha1994/sms-api-backend",
    demo: "https://sms-api-service-demo.com",
  },
];

const Projects = () => {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent MERN stack projects that showcase my skills
          in building full-stack applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col justify-between hover:border-blue-400 transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition duration-300 text-sm"
                >
                  <FaGithub /> Code
                </a>
                {/* <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition duration-300 text-sm"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 text-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
