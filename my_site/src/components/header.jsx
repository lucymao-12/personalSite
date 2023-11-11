import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" style={{ paddingLeft: '10px', paddingRight: '10px' }}>Lucy Mao</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-around">
            <a href="#home" className="link-no-style">Home</a>
            <a href="#about" className="link-no-style">About</a>
            <a href="#contact" className="link-no-style">Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
