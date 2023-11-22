import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <Navbar bg="light" expand="xl" style={{padding: '20px'}}>
        <Navbar.Brand href="/" className="name" style={{fontSize: "3rem"}}>Lucy Mao</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-around" style={{paddingLeft: '10px'}}>
            <a href="#home" className="link-no-style">Home</a>
            <a href="#about" className="link-no-style">About</a>
            <a href="#projects" className="link-no-style">Projects</a>
            <a href="#contact" className="link-no-style">Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
