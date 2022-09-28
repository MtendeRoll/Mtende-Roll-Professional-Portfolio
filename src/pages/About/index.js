import React from "react";
import "./style.css";
import pic from "./mtende-bio-pic.jpg";

function About(props) {
  return (
    <section className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-body">
        <img className="about-img" src={pic} alt="Mtende Roll smiling with a red headwrap and grey long sleeve shirt" style={{ height: "40%" }}></img>
        <p className="about-text">
          Born and raised in South Africa to Malawian parents, Mtende Roll has been living, working and organizing in North Carolina since the end of 2016. She went back to school to finish her Bachelors of Science in Economics at the illustrious North Carolina Agricultural and Technical State University in 2020 and has completed a Fullstack Development Bootcamp at UNC Chapel Hill in 2022.
          <br />
          Mtende enjoys creating, building and improving everything she interacts with, from Websites and programs to organisations and communities. She thrives in areas where there is growth and attainable goals.
        </p>
      </div>
    </section>
  );
}

export default About;
