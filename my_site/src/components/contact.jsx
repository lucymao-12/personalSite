import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useRef } from "react";

function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const handleMouseEnter = (email) => {
    setEmail(email);
    setShowEmail(true);
  };
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setShowEmail(false);
  };
  return (
    <footer id="contact" className="contact-container">
      <h2 style={{ paddingBottom: "3rem", fontWeight: "bold" }}>Contact Me!</h2>
      <Container fluid>
        <Row>
          <Col>
            <ul>
              <h4 style={{ paddingBottom: "1rem" }}>Professional Links</h4>
              <li className="no-bullet">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/lucy-mao/"
                >
                  LinkedIn
                </a>
              </li>
              <li className="no-bullet">
                <a className="link" href="https://github.com/lucymao-12">
                  {" "}
                  Github
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <h4 style={{ paddingBottom: "1rem" }}>Emails</h4>
              <li className="no-bullet">
                <a
                  className="link"
                  onMouseEnter={() => handleMouseEnter("lucymao12@gmail.com")}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  href="mailto:lucymao12@gmail.com"
                >
                  Personal
                </a>
              </li>
              <li className="no-bullet">
                <a
                  className="link"
                  onMouseEnter={() =>
                    handleMouseEnter("lucy.mao@mail.mcgill.ca")
                  }
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  href="mailto:lucy.mao@mail.mcgill.ca"
                >
                  Academic
                </a>
              </li>
            </ul>
            {showEmail && (
              <div
                style={{
                  position: "fixed",
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  backgroundColor: "white",
                  padding: "5px",
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.50)",
                  pointerEvents: "none", // This ensures the tooltip doesn't interfere with mouse events
                  transform: "translate(-50%, -50%)", // Centers the tooltip above the cursor
                }}
              >
                {email}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Contact;
