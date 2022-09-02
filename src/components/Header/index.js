import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo192.png";

// function that renders the Header component
function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <img src={logo} alt="animated outline of Mtende's Face" className="nav-logo" />
        <div className="nav-name">
          <Link to="/"> Mtende Roll</Link>
        </div>
        <div className="spacer"></div>
        <div className="nav-items mr-5">
          <ul>
            <li>
              <Link to="/react-portfolio">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="assets/resume/mtende_roll_resume.pdf" download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
