import React, { useState, useRef, useEffect } from "react";
import "./css/navbar.css";
import { BiMenu } from "react-icons/bi";
import Education from "./Education";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function Navbar() {
  const [activeTab, setActiveTab] = useState(0);

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const handleNav = (index) => {
    setActiveTab(index);
  };

  const [holderClass, setholderClass] = useState('menu_holder');
  const handleHolder = () => {
    if (holderClass === 'menu_holder'){
      setholderClass('menu_holder_large');
    }
    else{
      setholderClass('menu_holder');
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(
              [aboutRef, educationRef, skillsRef, projectsRef].findIndex(
                (ref) => ref.current === entry.target
              )
            );
          }
        });
      },
      { threshold: 0.5 }
    );
   
    observer.observe(aboutRef.current);
    observer.observe(educationRef.current);
    observer.observe(skillsRef.current);
    observer.observe(projectsRef.current);
   
    return () => {
      observer.unobserve(aboutRef.current);
      observer.unobserve(educationRef.current);
      observer.unobserve(skillsRef.current);
      observer.unobserve(projectsRef.current);
    };
   }, []);
   
  return (
    <div className="App">
      <header className="App_header">
        <div className="navbar_container">
          <ul>
            <li
              className={`navbtn ${activeTab === 0 ? "active" : ""}`}
              onClick={() => { handleNav(0); aboutRef.current.scrollIntoView({ behavior: 'smooth' }); }}
            >
              About
            </li>
            <li
              className={`navbtn ${activeTab === 1 ? "active" : ""}`}
              onClick={() => { handleNav(1); educationRef.current.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Education
            </li>
            <li
              className={`navbtn ${activeTab === 2 ? "active" : ""}`}
              onClick={() => { handleNav(2); skillsRef.current.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Skills
            </li>
            <li
              className={`navbtn ${activeTab === 3 ? "active" : ""}`}
              onClick={() => { handleNav(3); projectsRef.current.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Projects
            </li>
          </ul>
        </div>
        <div className={holderClass}>
        <div className="menu_container">
            <BiMenu className="menu_icon" onClick={handleHolder}/>
        </div>
        <div className="menu_content">
          <ul>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
        </div>
        </div>
      </header>
      <About ref={aboutRef} />
      <Education ref={educationRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default Navbar;
