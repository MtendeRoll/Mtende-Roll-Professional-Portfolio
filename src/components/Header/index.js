import React from "react";
import "./style.css";
import logo from "../../assets/logo/logo192.png";

// function that renders the Header component
function Header({ currentPage, handlePageChange }) {
  // list of categories to map over and render
  const categories = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <header className="header">
      <nav className="header-nav">
        <img src={logo} alt="animated outline of Mtende's Face" className="nav-logo" />
        <div className="nav-name">
          <a href="/"> Mtende Roll</a>
        </div>
        <div className="spacer"></div>
        <div className="nav-items mr-5">
          <ul>
            {categories.map((name) => {
              return (
                <li className={currentPage === name ? "pageActive" : ""}>
                  <a href={`#${name.toLowerCase()}-section`} onClick={() => handlePageChange(name)} className={currentPage === name ? "nav-items active" : "nav-items"}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
