import React from "react";
import ProjectImage from "./project_image";
import cya from "../images/cya.png";
import naive from "../images/nb_metrics.png";
import bert from "../images/bert_metrics.png";
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
      <h1>Projects</h1>
      <p className="project-desc">
        Here are some of my projects! Most of these are from school, but I have
        also started on many personal projects as well that will hopefully fill
        this space one day.
      </p>
      <hr></hr>

      <ul
        style={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li className="project-title no-bullet">
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
          <ProjectImage
            src={cya}
            alt="choose your own adventure web app"
          ></ProjectImage>
        </li>
        <li className="project-title no-bullet">
          <a href="https://colab.research.google.com/drive/1RmcNu-exn3mOe2kzZppeVq2_gExZwCEJ?usp=sharing">
            Bert and Naive Bayes Exploration for NLP
          </a>
          <p className="project-desc">
            This is a school prejct I did in my applied machine learning course.
            Took a pretrained BERT model and fine tuned it on a dataset from
            hugging face. I also implemented a naive bayes model from scratch
            and compared the difference between a deep learning model and a
            traditional machine learning model.
          </p>
          <Container fluid className="outer-container flex-nowrap" style={{backgroundColor: "white"}}>
            <Row className="justify-content-center align-items-center">
              <Col md={6} className="text-center" style={{marginLeft: "0.5rem"}}>
                <ProjectImage
                  src={naive}
                  alt="choose your own adventure web app"
                ></ProjectImage>
              </Col>
              <Col md={6} className="text-center">
                <ProjectImage
                  src={bert}
                  alt="choose your own adventure web app"
                ></ProjectImage>
              </Col>
            </Row>
          </Container>
        </li>
        <li className="project-title no-bullet">SOME STUFF HERE IDK</li>
      </ul>
    </div>
  );
}
export default Projects;
