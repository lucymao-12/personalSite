import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition } from "react-transition-group";
import { Container, Row, Col } from "react-bootstrap";
import "@fontsource/rubik";
import Project from "./projects.jsx";
function Home() {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animation, setAnimation] = useState("");
  const [conAn, setConAn] = useState("");
  const [showProject, setShowProject] = useState(false);
  const [heightAfterAnimation, setHeightAfterAnimation] = useState("80vh");
  const [minHeight, setMinHeight] = useState("80vh");
  const greetHeaderName = "greeting " + animation;

  const greetingString = Array.from("There's still so much to learn"); //TODO
  //TODO: adding projects after
  const containerStyle = {
    backgroundColor: isHovered || isPressed ? "black" : "#d8e3e1",
    transition: "background-color 0.3s",
    height: conAn ? "100vh" : heightAfterAnimation,
    minHeight: `${minHeight}`,
    animation: `${conAn} 1s forwards`,
  };

  const handleAnimEnd = () => {
    setMinHeight("100vh");
    setHeightAfterAnimation("auto");
    setShowProject(true);
    setConAn("");
  };
  const headingStyle = {
    color: isHovered || isPressed ? "#d8e3e1" : "black",
    transition: "color 0.3s",
    cursor: "pointer",
  };
  function handleClick() {
    setConAn("grow");
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
      {showProject && <Project></Project>}
      {!showProject && (
        <h1
          className={greetHeaderName}
          onClick={handleClick}
          onMouseOver={handleHover}
          onMouseLeave={handleAway}
          style={headingStyle}
          onAnimationEnd={handleAnimEnd}
        >
          There's plenty still to learn
        </h1>
      )}
    </div>
  );
}

export default Home;
