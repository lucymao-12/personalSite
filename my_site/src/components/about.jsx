import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import { Container, Row, Col } from "react-bootstrap";
import "@fontsource/rubik";
function Home() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animation, setAnimation] = useState("");
  const greetHeaderName = "greeting " + animation;

  const greetingString = Array.from("There's still so much to learn"); //TODO
  //TODO: adding projects after
  const containerStyle = {
    backgroundColor: isHovered || isPressed ? "black" : "#d8e3e1",
    transition: "background-color 0.3s",
  };
  const headingStyle = {
    color: isHovered || isPressed ? "#d8e3e1" : "black",
    transition: "color 0.3s",
    cursor: "pointer",
  };
  function handleClick() {
    setIsPressed(true);
    const i = Math.round(Math.random());
    if (i) {
      setTimeout(() => {
        setAnimation("shoot-up");
      }, 1000);
    } else {
      setTimeout(() => {
        setAnimation("shoot-down");
      }, 1000);
    }
  }
  function handleHover() {
    setIsHovered(true);
  }
  function handleAway() {
    setIsHovered(false);
  }
  return (
    <div
      className={isPressed ? "greet-expanded" : "greet-container"}
      style={containerStyle}
    >
      <h1
        className={greetHeaderName}
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseLeave={handleAway}
        style={headingStyle}
      >
        There's plenty still to learn
      </h1>
    </div>
  );
}

export default Home;
