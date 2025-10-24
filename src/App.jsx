import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import EducationPage from "./components/EducationPage";
import Services from "./components/Services";
const App = () => {
  return (
    <>
      <Navbar />

      <Home />

      <About />
      <Services />
      <EducationPage />
      <Skills />
      <Projects />
      <Contacts />
      
    </>
  );
};

export default App;
