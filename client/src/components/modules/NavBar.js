import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import logo from "../../public/logo.jpg"; //
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <img className="NavBar-logo" src={logo} alt="TJ hupu logo" />
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          主页
        </Link>
        <Link to="/Space" className="NavBar-link">
          个人空间
        </Link>
        <Link to="/SignUp" className="NavBar-link">
          注册
        </Link>
        <Link to="/LogIn" className="NavBar-link">
          登录
        </Link>
        <div className="NavBar-title u-inlineBlock">TJ hupu</div>
      </div>
    </nav>
  );
};

export default NavBar;
