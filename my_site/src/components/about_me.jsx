import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Info() {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Container
      id="about"
      className="justify-content-center"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <Col className="text-container">
        {isReadMore ? (
          <p className="about" style={{ textAlign: "justify" }}>
            Hi! My name is Lucy and I'm currently a thrid year student studying
            Computer Sciencce at Mcgill University. I'm an only child and second
            generation immigrant to my Chinese born parents. They both study
            Software engineering so you can see how I found my interest in this
            field...
            <span
              onClick={toggleReadMore}
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "Inter",
                fontSize: "2rem",
              }}
            >
              Read more
            </span>
          </p>
        ) : (
          <p className="about" style={{ textAlign: "justify" }}>
            Hi! My name is Lucy and I'm currently a thrid year student studying
            Computer Sciencce at Mcgill University. I'm an only child and second
            generation immigrant to my Chinese born parents. They both study
            Software engineering so you can see how I found my interest in this
            field. I have a vested interest in the intersection of machine
            learning and human cognition and my focus in my studies lie in how
            through teaching computers how to learn we can understand our own
            ability to think better. Keep scrolling to learn more about me and
            what I've been up to!
            <br />
            <span
              onClick={toggleReadMore}
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "Inter",
                fontSize: "2rem",
              }}
            >
              Read less
            </span>
          </p>
        )}
      </Col>
    </Container>
  );
}

export default Info;
