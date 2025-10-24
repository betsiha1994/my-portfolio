import React from "react";
import { Link } from "react-scroll";
import profileImage from "../assets/image.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              I'm a <span className="text-blue-400">Passionate</span> MERN Stack
              Developer
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
              Asres Yayeh
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Crafting digital experiences that blend cutting-edge technology
              with elegant design. I breathe life into ideas through code,
              transforming complex problems into seamless, user-centric
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer"
              >
                Explore My Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300 cursor-pointer"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full flex items-center justify-center border-4 border-blue-400">
                <img
                  src={profileImage}
                  alt="Asres Yayeh"
                  className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-blue-400"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
                <div className="text-center">
                  <p className="font-bold text-white">Full-Stack</p>
                  <p className="text-blue-400 text-sm">MERN Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-400 transition duration-300">
            <i className="fas fa-bolt text-blue-400 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white">Fast & Scalable</h3>
            <p className="text-gray-400">
              Building performant applications that grow with your business
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-400 transition duration-300">
            <i className="fas fa-mobile-alt text-blue-400 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white">Responsive Design</h3>
            <p className="text-gray-400">
              Creating flawless experiences across all devices and platforms
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center border border-gray-700 hover:border-blue-400 transition duration-300">
            <i className="fas fa-rocket text-blue-400 text-3xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white">Modern Tech Stack</h3>
            <p className="text-gray-400">
              Leveraging the latest technologies for cutting-edge solutions
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <i className="fas fa-heart text-blue-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-4">
              Why I Love What I Do
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
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
