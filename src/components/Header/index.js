import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/logo/logo192.png";

// function that renders the Header component
function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <nav className="navBar">
      <a href="/about" className="brand-name">
        <img src={logo} alt="logo of foot outline with the earth inside of it" className="navLogo" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          setIsMenuClicked(!isMenuClicked);
        }}
      ></button>
      <div className={isNavExpanded ? "menuNav expanded" : "menuNav"}>
        <div className={isMenuClicked ? "menu-icon-close" : "menu-icon-open"}>
          <ul>
            <a href="/react-portfolio">
              <li>About</li>
            </a>
            <a href="/portfolio">
              <li>Portfolio</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
            <a href="/resume">
              <li>Resume</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
