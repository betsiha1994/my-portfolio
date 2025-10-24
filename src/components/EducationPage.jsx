// import React from "react";

// const EducationPage = () => {
//   return (
//     <div id="education" className="min-h-screen bg-gray-100 py-16 px-6">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-green-600 mb-12">
//           Education
//         </h1>

//         <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//           <h2 className="text-2xl font-semibold">
//             B.Sc. in Computer Engineering
//           </h2>
//           <p className="text-gray-600">
//             Bahir Dar University | 2014 - 2018 E.C. / 2021 - 2025 G.C.
//           </p>

//           <p className="mt-3 text-gray-700 font-semibold">
//             Core & Specialized Courses:
//           </p>
//           <ul className="list-disc list-inside mt-2 text-gray-700">
//             <li>Data Structures and Algorithms - CoEng2101</li>
//             <li>Database Systems - CoEng2102</li>
//             <li>Operating Systems - CoEng2103</li>
//             <li>Computer Networks - CoEng2104</li>
//             <li>Object-Oriented Programming - CoEng3101</li>
//             <li>Software Engineering - CoEng3102</li>
//             <li>Web Development - CoEng3103</li>
//             <li>Artificial Intelligence (AI) - CoEng5131</li>
//             <li>Robotics - CoEng4101</li>
//             <li>Computer Graphics - CoEng4102</li>
//             <li>Embedded Systems - CoEng4103</li>
//             <li>Capstone Project - CoEng4999</li>
//           </ul>
//         </div>

//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-semibold">High School Diploma</h2>
//           <p className="text-gray-600">
//             Agut Secondary and Preparatory School | 2010 - 2013 E.C. / 2017 -
//             2020 G.C.
//           </p>
//           <p className="mt-3 text-gray-700">
//             Excelled in computer science and mathematics, participated in coding
//             clubs, and developed an early passion for technology and
//             problem-solving.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationPage;

import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My educational background that shapes my journey as a developer
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Computer Engineering Student
            </h3>
            <p className="text-blue-400 text-xl font-semibold mb-4">
              Bahir Dar University
            </p>

            <div className="flex justify-center gap-8 mb-6">
              <div className="text-gray-300">
                <span></span>
              </div>
              <div className="text-gray-300">
                <span>Bahir Dar, Ethiopia</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my degree in Computer Engineering, focusing on
              software development, web technologies, and building scalable
              applications. My academic journey has provided me with a strong
              foundation in computer science principles while allowing me to
              specialize in full-stack web development.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="max-w-2xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Academic Focus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">
                Software Engineering
              </h4>
              <p className="text-gray-400 text-sm">
                Building robust and scalable applications
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">Web Development</h4>
              <p className="text-gray-400 text-sm">
                Modern full-stack development practices
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">
                Database Systems
              </h4>
              <p className="text-gray-400 text-sm">
                Data modeling and management
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
              <h4 className="text-white font-semibold mb-2">
                System Architecture
              </h4>
              <p className="text-gray-400 text-sm">
                Designing efficient software solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
