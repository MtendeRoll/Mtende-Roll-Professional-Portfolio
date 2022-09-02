import React from "react";
import "./style.css";
import pic from "./mtende-bio-pic.jpg";

function About(props) {
  return (
    <section className="mt-5 d-flex flex-column">
      <div className="w-100 mt-3 text-center">
        <h1 id="about-title">About Me</h1>
      </div>
      <div className="d-flex flex-md-nowrap flex-sm-wrap">
        <img className="my-5 mx-5 align-self-center" src={pic} alt="Mtende Roll smiling with a red headwrap and grey long sleeve shirt" style={{ height: "40%" }} id="about-img"></img>
        <p id="about-text">Born and raised in South Africa to Malawian parents, Mtende Roll has been living, working and organizing in North Carolina since the end of 2016. She went back to school to finish her Bachelors of Science in Economics at the illustrious North Carolina Agricultural and Technical State University in 2020. Mtende works as a trainer and organiser with the Racial Equity Institute, she is a small business owner and is in commercial and residential property investing. Outside of that, she is a doula in the efforts to advocate and support birthing people which came from learning about the inequities birthing people experience in hospitals, specifically Black women. Within Alamance County, Mtende has been active in various organisations from volunteering and being on the board of a couple of nonprofits.</p>
      </div>
    </section>
  );
}

export default About;
