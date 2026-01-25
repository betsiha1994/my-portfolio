import React from "react";
import { Link } from "react-scroll";
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
      {/* Code pattern overlay */}
      <div className="absolute inset-0 bg-code-pattern opacity-20"></div>

      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/35 to-gray-900/40"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white/95 via-white/90 to-blue-400/95 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              I'm a <span className="text-blue-400">Passionate</span> Full Stack
              Developer
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-blue-400/95 drop-shadow-[0_3px_15px_rgba(0,0,0,0.8)]">
              Asres Yayeh
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed text-gray-200/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] max-w-3xl mx-auto">
              Crafting digital experiences that blend cutting-edge technology
              with elegant design. I breathe life into ideas through code,
              transforming complex problems into seamless, user-centric
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-blue-500/90 hover:bg-blue-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition duration-300 cursor-pointer text-lg shadow-lg hover:shadow-xl"
              >
                Explore My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="border-2 border-blue-400/90 text-blue-400/90 hover:bg-blue-400/90 hover:text-white backdrop-blur-sm px-8 py-4 rounded-lg font-medium transition duration-300 cursor-pointer text-lg shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center border border-gray-700/50 hover:border-blue-400/80 transition duration-300">
            <i className="fas fa-bolt text-blue-400 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white/95">
              Fast & Scalable
            </h3>
            <p className="text-gray-300/90">
              Building performant applications that grow with your business
            </p>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center border border-gray-700/50 hover:border-blue-400/80 transition duration-300">
            <i className="fas fa-mobile-alt text-blue-400 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white/95">
              Responsive Design
            </h3>
            <p className="text-gray-300/90">
              Creating flawless experiences across all devices and platforms
            </p>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center border border-gray-700/50 hover:border-blue-400/80 transition duration-300">
            <i className="fas fa-rocket text-blue-400 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white/95">
              Modern Tech Stack
            </h3>
            <p className="text-gray-300/90">
              Leveraging the latest technologies for cutting-edge solutions
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <i className="fas fa-heart text-blue-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white/95 mb-4">
              Why I Love What I Do
            </h3>
            <p className="text-gray-200/90 text-lg max-w-4xl mx-auto leading-relaxed">
              "I'm passionate about turning complex challenges into elegant
              digital solutions. There's nothing more rewarding than seeing code
              come to life and create meaningful impact for users. Every line of
              code is an opportunity to build something amazing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
