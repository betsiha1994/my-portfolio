import React from "react";

const EducationPage = () => {
  return (
    <section
      id="education"
      className="relative w-full min-h-screen overflow-hidden py-20 px-6"
    >
      <div className="absolute inset-0 bg-slate-950/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_22%)] pointer-events-none"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-blue-300 shadow-sm shadow-blue-500/10">
            Education
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Academic journey and focus areas
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-gray-300 text-lg leading-relaxed">
            A strong academic foundation in engineering and full-stack
            development shapes how I approach every project.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl shadow-slate-950/40">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/75 p-8 shadow-inner shadow-slate-950/20">
              <h3 className="text-3xl font-semibold text-white mb-3">
                Computer Engineer
              </h3>
              <p className="text-blue-300 text-xl font-medium mb-6">
                Bahir Dar University
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-400">
                <span className="rounded-full border border-blue-400/20 bg-slate-900/70 px-4 py-2">
                  Bahir Dar, Ethiopia
                </span>
                <span className="rounded-full border border-blue-400/20 bg-slate-900/70 px-4 py-2">
                  2020 - 2024
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Studied software engineering fundamentals with a strong emphasis
                on web development, database systems, and scalable application
                design. Collaborated on hands-on projects and built real-world
                solutions throughout the degree program.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Software Engineering",
                  description:
                    "Building robust, scalable applications with clean architecture.",
                },
                {
                  title: "Web Development",
                  description:
                    "Crafting responsive, accessible user interfaces with modern stacks.",
                },
                {
                  title: "Database Systems",
                  description:
                    "Designing efficient data models and reliable storage solutions.",
                },
                {
                  title: "System Architecture",
                  description:
                    "Planning strong structures for performance and maintainability.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center shadow-xl shadow-slate-950/20 transition duration-300 hover:border-blue-400/50 hover:bg-slate-900/80"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
