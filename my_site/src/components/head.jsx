import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <BrowserRouter>
              <Link to="/">Home</Link>
            </BrowserRouter>
          </li>
          <li>
            <BrowserRouter>
              <Link to="/about">About</Link>
            </BrowserRouter>
          </li>
          <li>
            <BrowserRouter>
              <Link to="/contact">Contact</Link>
            </BrowserRouter>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
