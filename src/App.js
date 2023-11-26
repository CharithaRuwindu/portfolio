import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {

  return (
    <Router>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
    </Router>
  );
}

export default App;
