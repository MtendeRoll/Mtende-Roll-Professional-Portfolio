import React from "react";
import "./style.css";
import pic from "./mtende-roll-resume.jpg";

function Resume() {
  return (
    <section className="mt-5 d-flex flex-column resume">
      <div className="text-center">
        <a href="https://drive.google.com/file/d/1bSc_8gTTTtbu2pwiPa61E3g3nyTbXoC0/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="mtende-resume">
          <div className="w-100 mt-3 text-center">
            <h1 id="resume-title">Download Mtende's Resume</h1>
          </div>

          <img className="my-5 mx-5 align-self-center" src={pic} alt="Mtende Roll smiling with a red headwrap and grey long sleeve shirt" style={{ height: "20%" }} id="resume-img"></img>
        </a>
      </div>
    </section>
  );
}

export default Resume;
