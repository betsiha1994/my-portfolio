import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using the MERN stack. From database design to frontend implementation, I deliver complete, scalable solutions.",
      features: [
        "MongoDB Database Design",
        "Express.js REST APIs",
        "React Frontend",
        "Node.js Backend",
      ],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Frontend Development",
      description:
        "Creating responsive, interactive user interfaces with modern frameworks. I focus on performance, accessibility, and seamless user experiences.",
      features: [
        "React & Next.js",
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
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I provide comprehensive web development services using modern
            technologies. Each project is built with attention to detail,
            performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-400 transition duration-300">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-400"
                  >
                    <i className="fas fa-check text-blue-400 text-sm mr-3"></i>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <i className="fas fa-handshake text-blue-400 text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm committed to
              delivering high-quality solutions that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
              >
                Get In Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            My Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Planning",
                desc: "Requirement analysis & project planning",
              },

              {
                step: "02",
                title: "Development",
                desc: "Agile development with regular updates",
              },
              {
                step: "03",
                title: "Deployment",
                desc: "Testing, deployment & maintenance",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{process.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-400 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
