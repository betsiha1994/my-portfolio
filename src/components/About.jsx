import React from "react";
import { Link } from "react-scroll";

import profileImage from "../assets/image.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="absolute inset-0 bg-slate-950/95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_20%)] pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-slate-950/40">
          <div className="lg:flex lg:items-center lg:gap-10">
            <div className="lg:max-w-[380px] mx-auto lg:mx-0 flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Asres Yayeh"
                  className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-blue-400"
                />
                <div className="absolute -bottom-4 -right-4 bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700">
                  <div className="text-center">
                    <p className="font-bold text-white text-sm">Full Stack</p>
                    <p className="text-blue-400 text-xs">Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-300">
                About Me
              </h2>
              <p className="text-slate-200 mb-4 leading-relaxed">
                Hello! I'm{" "}
                <span className="text-blue-300 font-semibold">Asres Yayeh</span>
                , a passionate Full Stack Developer dedicated to crafting
                exceptional digital experiences. I thrive on turning complex
                ideas into clean, efficient, and scalable web applications.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                I build full-stack products using modern frameworks and
                dependable architecture. My work focuses on smooth user
                experiences, responsive interfaces, and practical business
                value.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Outside of coding, I enjoy contributing to open source,
                exploring new tools, and sharing knowledge with the developer
                community.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center justify-center rounded-full bg-blue-500/90 px-8 py-3 text-white font-semibold shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-600"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl p-6 text-center shadow-xl shadow-slate-950/30">
              <i className="fas fa-code text-blue-300 text-3xl mb-3"></i>
              <h3 className="text-xl font-semibold text-white mb-2">
                Clean Code
              </h3>
              <p className="text-slate-300">
                Writing maintainable, scalable code with clarity and
                consistency.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl p-6 text-center shadow-xl shadow-slate-950/30">
              <i className="fas fa-lightbulb text-blue-300 text-3xl mb-3"></i>
              <h3 className="text-xl font-semibold text-white mb-2">
                Problem Solver
              </h3>
              <p className="text-slate-300">
                Turning complex challenges into elegant and practical solutions.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl p-6 text-center shadow-xl shadow-slate-950/30">
              <i className="fas fa-rocket text-blue-300 text-3xl mb-3"></i>
              <h3 className="text-xl font-semibold text-white mb-2">
                Fast Learner
              </h3>
              <p className="text-slate-300">
                Adapting quickly to new frameworks, tools, and workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
