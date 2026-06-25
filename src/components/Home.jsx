import React from "react";
import { Link } from "react-scroll";
import { FaBolt } from "react-icons/fa";
import backgroundImage from "../assets/image1.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-code-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/40 to-slate-950/80"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr] items-center">
          <div className="space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-slate-900/60 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-blue-300 shadow-sm shadow-blue-500/10">
              <FaBolt className="h-4 w-4" /> Full Stack Developer
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.1] text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text drop-shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                I build memorable digital products with beautiful interactions.
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-300/90">
                Asres Yayeh
              </h2>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200/80 sm:mx-0">
                I create elegant, responsive applications using modern web
                tools. My focus is on clean design, smooth performance, and
                user-first experiences that delight every time.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:bg-blue-600"
              >
                Explore My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center rounded-full border border-blue-400/60 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-blue-200 transition duration-300 hover:border-blue-300 hover:bg-blue-500/15 hover:text-white"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="h-full rounded-[30px] bg-slate-900/90 p-8 text-white">
              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-lg font-semibold text-white">Plan</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Scope the project, map requirements, and choose the best
                    approach.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-lg font-semibold text-white">Build</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Develop a polished, responsive product with clean UX and
                    strong code.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-lg font-semibold text-white">Launch</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Deploy reliably, monitor performance, and iterate with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
