import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">TJ hupu</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        <Link to="/Space" className="NavBar-link">
          Space
        </Link>
        <Link to="/SignUp" className="NavBar-link">
          Sign Up
        </Link>
        <Link to="/LogIn" className="NavBar-link">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
