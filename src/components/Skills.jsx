import React from "react";
import { Link } from "react-scroll";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6"; // Added Laravel icon support
import { SiMongodb, SiExpress, SiPostgresql } from "react-icons/si";

const Skills = () => {
  const fullStackSkills = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-16 h-16" />,
      level: "Advanced",
      description:
        "NoSQL database design, aggregation pipelines, and schema modeling",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-16 h-16" />,
      level: "Advanced",
      description:
        "Relational database architecture, optimization, and complex queries",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-16 h-16" />,
      level: "Advanced",
      description:
        "RESTful APIs, custom middleware orchestrations, and backend security",
    },
    {
      name: "React",
      icon: <FaReact className="w-16 h-16" />,
      level: "Expert",
      description:
        "Components, custom hooks, state management, and DOM optimization",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-16 h-16" />,
      level: "Advanced",
      description:
        "Scalable backend systems, asynchronous runtime patterns, and API building",
    },
    {
      name: "Laravel",
      icon: <FaLaravel className="w-16 h-16" />,
      level: "Advanced",
      description:
        "MVC architecture, Eloquent ORM relationships, migrations, and secure robust service tools",
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
        return "w-full";
      case "Advanced":
        return "w-5/6"; // Cleaned standard fraction compatibility
      case "Intermediate":
        return "w-1/2";
      default:
        return "w-1/3";
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen overflow-hidden py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="absolute inset-0 bg-slate-950/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_22%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-blue-300 shadow-sm shadow-blue-500/10">
            Skills
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Full Stack Skills & Tools
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-300 text-lg leading-relaxed">
            Modern backend, frontend, and database expertise for building
            complete web applications with confidence.
          </p>
        </div>

        {/* Re-scaled grid map to allow 6 balanced layout tracks natively */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-6 mb-16">
          {fullStackSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 shadow-inner shadow-blue-500/10 transition duration-300 group-hover:bg-blue-500/20">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {skill.name}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-sm font-semibold ${getLevelColor(
                      skill.level,
                    )}`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                  <div
                    className={`h-2 rounded-full bg-blue-500 transition-all duration-500 ${getLevelBar(
                      skill.level,
                    )}`}
                  ></div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 relative z-10">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <p className="text-gray-300 mb-6">
              Ready to bring a polished full-stack project to life? I can help
              you build the frontend, backend, and database layers with modern
              practices and thoughtful architecture.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-600"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
