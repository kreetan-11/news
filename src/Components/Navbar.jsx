import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Slider from './Slider';
import Religion from './Religion';
import Technology from './Technology';
import Business from './Business';
import Politics from './Politics';
import Features from './Features';
import Interviews from './Interviews';
import Health from './Health';
import './Style/navbar.css';
import Notfound from './Notfound';
import Detail from './Detail';
function Navbar() {
  
    const [isActive, setActive] = useState("false");
  
    const handleToggle = () => {
      setActive(!isActive);
    };
  return (
      <>
  
 
  <nav className="navbar">
    <div className="brand-title">
      <a href>News-Online</a></div>
    <a href="#" className="toggle-button" onClick={handleToggle}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </a>
    <div className= {`navbar-links ${!isActive ? "active" : ""}`} id="nav-links">
    <ul >
        <li className="nav__item">
            
        <Link to="/" className="nav__link" > Home </Link>

        </li>
        <li className="nav__item">
        <Link to="/Health" className="nav__link" > Health </Link>
        </li>
        <li className="nav__item">
        <Link to="/Religion" className="nav__link" > Religion</Link>
        </li>
        <li className="nav__item">
        <Link to="/Technology" className="nav__link" > Technology </Link>
        </li>
        <li className="nav__item">
        <Link to="/Business" className="nav__link" > Business </Link>
        </li>
        <li className="nav__item">
        <Link to="/Politics" className="nav__link" > Politics </Link>
        </li>
        <li className="nav__item">
        <Link to="/Features" className="nav__link" > Features</Link>
        </li>
        <li className="nav__item">
        <Link to="/Interviews" className="nav__link" > Interviews </Link>
        </li>
        
      </ul>
    </div>
  </nav>
  <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/Health" element={< Health />} />
        <Route path="/Religion" element={<Religion />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Interviews" element={<Interviews />} />
        <Route path="/Detail" element={<Detail />} />

        <Route path="*" element={<Notfound/>} />
      </Routes>
</>
  );
}

export default Navbar;
