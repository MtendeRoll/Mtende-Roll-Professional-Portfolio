import React from "react";
import "./style.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// function that renders the Portfolio component
function Portfolio() {
  // object that contains the information for each project card
  const projects = [
    {
      name: "Sip Happens",
      src: require("../../assets/project_large/sip-happens.gif"),
      description: "Full stack wine and food pairing application made by a team of four with Express.js, Sequelize and Handlebars",
      gitHub: "https://github.com/nmsiegel1/Sip-Happens",
      deployedApp: "https://sip-happens-unc.herokuapp.com/",
    },
    {
      name: "Weather Watch",
      src: require("../../assets/project_large/weather-watch.gif"),
      description: "A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
      gitHub: "https://github.com/MtendeRoll/weatherWatch",
      deployedApp: "https://mtenderoll.github.io/weatherWatch//",
    },
    {
      name: "Workout Zen",
      src: require("../../assets/project_large/workout-zen.gif"),
      description: "An application to help someone learn how to exercise in a low-stress environment.",
      gitHub: "https://github.com/amklenk/Workout-Zen",
      deployedApp: "https://amklenk.github.io/Workout-Zen/",
    },
  ];

  return (
    <section className="mx-5 mt-5 text-center">
      <div className="row">
        <header className="ml-2 mt-4 mb-3 col-md-12 portfolio-header">
          <h3>Mtende's Portfolio</h3>
        </header>
      </div>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-md-center justify-content-sm-center container">
        {projects.map((projects) => (
          <Card className="card mb-5 mx-10 col-sm-12 col-md-10 col-lg-5 port-card v-md-100" key={projects.name}>
            <Card.Title className="mb-1 mt-2 portfolio-title">{projects.name}</Card.Title>
            <Card.Body className="portfolio-text">
              <Card.Text>{projects.description}</Card.Text>
              <a href={projects.gitHub} target="_blank" rel="noopener noreferrer">
                <Button className="mx-3 portfolio-btn">GitHub Repo</Button>
              </a>
              <a href={projects.deployedApp} target="_blank" rel="noopener noreferrer">
                <Button className="portfolio-btn">Deployed application</Button>
              </a>
            </Card.Body>
            <Card.Img src={projects.src} className="card-image mb-2" />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
