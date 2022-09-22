/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="footer">
      <div>
        <div>
          <p>
            <a href="https://github.com/MtendeRoll" rel="noreferrer" target="_blank">
              <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/mtende-roll/">
              <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
            </a>
            <a href="mailto:rollmtende@gmail.com" rel="noreferrer" target="_blank">
              <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>

      <div>
        <div className="copyright">
          <p>
            <i className="fa fa-copyright" aria-hidden="true"></i> Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
