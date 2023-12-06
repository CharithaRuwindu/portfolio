import React, { useState } from "react";
import "./css/navbar.css";
import { Link } from "react-scroll";

function Navbar() {

  const [activeTab, setActiveTab] = useState(0);

  const handleNav = (index) => {
    setActiveTab(index);
  }

  return (
    <div className="App">
      <header className="App_header">
        <div className="navbar_container">
          <ul>
            <li className={`navbtn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleNav(0)}>
              <Link to="/about" smooth={true} duration={800}>About</Link>
            </li>
            <li className={`navbtn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleNav(1)}>
            <Link to="/education" smooth={true} duration={800}>Education</Link>
            </li>
            <li className={`navbtn ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleNav(2)}>
              Skills
            </li>
            <li className={`navbtn ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleNav(3)}>
              Projects
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
