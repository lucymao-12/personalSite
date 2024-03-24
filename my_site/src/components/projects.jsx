import React from "react";
import ProjectImage from "./project_image";
import cya from "../images/cya.png";
import dcgan from "../images/dcgan.png";
import hlg from "../images/higher_lower.png";
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
      <h1 style={{ paddingBottom: "3rem", color: "#d8e3e1"  }}>Projects</h1>
      <p className="project-desc" style={{color: "#d8e3e1"}}>
        Here are some of my projects! Most of these are from school, but I have
        also started on many personal projects as well that will hopefully fill
        this space one day.
      </p>
      <hr></hr>

      <div
        className="proj-images"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxHeight:"100%"
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
          <img style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          maxWidth: "100%",
        }}
            src={cya}
            alt="choose your own adventure web app"
          ></img>
        </div>
        <div className="project-title no-bullet proj2">
          <a href="https://colab.research.google.com/drive/1RmcNu-exn3mOe2kzZppeVq2_gExZwCEJ?usp=sharing">
            DCGAN LINK, UPDATE NEEDED
          </a>
          <p className="project-desc">DCGAN DESC</p>
          <ProjectImage 
            src={dcgan}
            alt="screenshot of the final pass of training on my DCGAN"
          ></ProjectImage>
        </div>
        <div className="project-title no-bullet proj3">
          <a></a>
          <p></p>
          <ProjectImage 
            src={hlg}
            alt="Screenshot from spotify higher or lower personal projects"
          ></ProjectImage>
        </div>
        <div className="project-title no-bullet proj4">
          <a></a>
          <p></p>
          <ProjectImage
            src={hlg}
            alt="Screenshot from spotify higher or lower personal projects"
          ></ProjectImage>
        </div>
      </div>
    </div>
  );
}
export default Projects;
