import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern full-stack technologies. From database design to frontend implementation, I deliver complete, scalable solutions.",
      features: [
        "Database architecture",
        "REST API development",
        "Frontend interfaces",
        "Backend systems",
      ],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Frontend Development",
      description:
        "Creating responsive, interactive user interfaces with modern frameworks. I focus on performance, accessibility, and seamless user experiences.",
      features: [
        "React",
        "Responsive Design",
        "State Management",
        "UI/UX Implementation",
      ],
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description:
        "Building robust server-side architectures, APIs, and database systems. I ensure security, scalability, and optimal performance for your applications.",
      features: [
        "RESTful APIs",
        "Authentication Systems",
        "Database Optimization",
        "Server Deployment",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full min-h-screen overflow-hidden py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="absolute inset-0 bg-slate-950/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_24%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.32em] text-blue-300 shadow-sm shadow-blue-500/10">
            Services
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-white leading-tight">
            What I build for modern web experiences.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-gray-300 text-lg leading-relaxed">
            I deliver polished, scalable web applications using modern tools and
            thoughtful engineering. Each service focuses on performance,
            accessibility, and intuitive user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/40"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-300 shadow-inner shadow-blue-500/10 transition duration-300 group-hover:bg-blue-500/20">
                <i className={`${service.icon} text-2xl`}></i>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 transition duration-300 group-hover:text-blue-300">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-400/15 text-blue-300 text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.32em] text-blue-300/80 mb-4">
              Let's collaborate
            </p>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Ready to start something impactful?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I love turning ideas into elegant, reliable applications. If
              you're ready to build a high-quality product, I’m here to help
              from planning through deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-600"
              >
                Get In Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center rounded-full border border-blue-400/60 bg-transparent px-8 py-3 text-blue-300 font-semibold transition duration-300 hover:bg-blue-500/10 hover:text-white"
              >
                View My Work
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              {
                step: "01",
                title: "Plan",
                desc: "Define goals, scope, and the best technical approach.",
              },
              {
                step: "02",
                title: "Build",
                desc: "Develop clean, responsive solutions with modern tools.",
              },
              {
                step: "03",
                title: "Launch",
                desc: "Deploy with confidence and support continuous improvement.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-300 font-semibold">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {process.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
