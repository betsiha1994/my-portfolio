import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Emergency Report and Public Service Coordination system",
    description:
      "Full-stack Emergency Report and Public Service Coordination system with React frontend, Node.js backend, and PostgreSQL database.",
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    github: null,
    demo: "https://bahirdarlinkweb.vercel.app/",
  },
  {
    title: "Food Delivery Platform",
    description:
      "Full-stack food delivery platform with real-time updates and user authentication.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    github: "https://github.com/Asresyayeh/restaurant-backend",
    demo: "https://restaurant-frontend-ochre.vercel.app/",
  },
  {
    title: "e-Kebele system",
    description:
      "An e-Kebele digital service for managing civil registrations, online requests, approvals, certificate generation, and citizen notifications.",

    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Asresyayeh/e-kebele-backend",
    demo: "https://e-kebele-git-main-yayehasres1221-9605s-projects.vercel.app/",
  },
  {
    title: "Recruitment Management System",
    description:
      "A full-stack recruitment management system with job posting, applicant tracking, and interview scheduling features.",

    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Asresyayeh/recruitment",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden py-20 px-6"
      id="projects"
    >
      <div className="absolute inset-0 bg-slate-950/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_22%)] pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.32em] text-blue-300 mb-6">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Highlighted Projects
          </h2>
          <p className="mx-auto text-gray-300 text-lg max-w-3xl leading-relaxed">
            A selection of recent full-stack applications built with modern
            technologies, thoughtful architecture, and polished ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 inline-flex rounded-full bg-blue-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200 shadow-inner shadow-blue-500/10">
                  Featured
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-5 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-900/80 text-blue-200 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/10">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-950/80 px-4 py-2 text-sm text-blue-200 transition duration-300 hover:border-blue-400 hover:bg-blue-500/10"
                  >
                    <FaGithub /> Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-slate-900/80 px-4 py-2 text-sm text-gray-400">
                    Private Repo
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm text-white transition duration-300 hover:bg-blue-600"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/betsiha1994"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 text-sm"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
