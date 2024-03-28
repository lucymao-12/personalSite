import React from "react";
import ProjectImage from "./project_image";
import cya from "../images/cya.png";
import dcgan from "../images/dcgan.png";
import hlg from "../images/higher_lower.png";
import arrow from "../images/down-arrow-56.png";
import marvel from "../images/marvel-db.png";
import { Container, Row, Col } from "react-bootstrap";
function Projects() {
  return (
    <div
      className="projects"
      id="projects"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ paddingBottom: "3rem", color: "#d8e3e1" }}>Projects</h1>
      <p className="project-desc" style={{ color: "#d8e3e1" }}>
        Here are some of my projects! Most of these are from school, but I have
        also started on many personal projects as well that will hopefully fill
        this space one day.
      </p>
      <hr></hr>

      <div
        className="proj-images"
        style={{
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "100%",
        }}
      >
        <div className="project-title no-bullet proj1">
          Choose your own adventure multipage web app
          <p className="project-desc">
            This was made with node.js, express, mongodb backend. React, html,
            css frontend... you know the works. It has persistent player data
            and I am currently working on the authentication for the individual
            users and adding more content.
          </p>
          <p className="project-desc">
            Inspiration is from the my love of writing and I wanted to
            incorporate some of that in my projects
          </p>
          <ProjectImage src={cya} alt="Choose your own advent"></ProjectImage>
          <img src={arrow} alt="down arrow" className="down-arrow"></img>
        </div>
        <div className="project-title no-bullet proj2">
          <a href="https://colab.research.google.com/drive/1Ng6VGvuvdf8DkaEa_3UJY28uJKozqVyi?usp=sharing">
            DCGAN Paper Reproduction
          </a>
          <p className="project-desc">
            Showed the effects of walking through latent space, vector
            arithmetic with latent vectors, and the visualized the learned
            filters of the model.
          </p>
          <ProjectImage
            src={dcgan}
            alt="screenshot of the final pass of training on my DCGAN"
          ></ProjectImage>
          <img src={arrow} alt="down arrow" className="down-arrow"></img>
        </div>
        <div className="project-title no-bullet proj3">
          <a href="https://github.com/lucymao-12/higher-lower">
            Spotify Higher or Lower
          </a>
          <p className="project-desc">
            Used Node, React, Spotify API to recreate the Google search higher
            or lower game.
          </p>
          <ProjectImage
            src={hlg}
            alt="Screenshot from spotify higher or lower personal projects"
          ></ProjectImage>
          <img src={arrow} alt="down arrow" className="down-arrow"></img>
        </div>
        <div className="project-title no-bullet proj4">
          <a href="https://www.youtube.com/watch?v=O6SQ9Y4FxXY">
            Databse Visualization
          </a>
          <p className="project-desc">
            This was actually one of this first projects I ever tackled in my CS
            career. It touched on software design, OOP principles, Java and the
            JavaFX framework. The database interaction allowed me understand
            simple querying as well.
          </p>
          <ProjectImage
            src={marvel}
            alt="Screen shot from marvel database visualization software"
          ></ProjectImage>
          <img src={arrow} alt="down arrow" className="down-arrow"></img>
        </div>
      </div>
    </div>
  );
}
export default Projects;
