import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ onSelect }) => {
  const info = ["Home", "About", "Projects"];

  return (
    <header style={{ position: "fixed", width: "100vw", top: 0, zIndex: 1000 }}>
      <Navbar bg="light" expand="xl" style={{ padding: "20px" }}>
        <Navbar.Brand className="name" style={{ fontSize: "3rem" }}>
          Lucy Mao
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="w-100 justify-content-around"
            style={{ paddingLeft: "10px" }}
          >
            {info.map((item) => (
              <Navbar.Text
                style={{ cursor: "pointer" }}
                className="link-no-style"
                key={item}
                onClick={() => onSelect(item)}
              >
                {item}
              </Navbar.Text>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
