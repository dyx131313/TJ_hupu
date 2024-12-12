import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import logo from "../../public/logo.jpg"; //
import { get } from "../../utilities";
const NavBar = (props) => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        setUserId(user._id);
      }
    });
  });

  return (
    <nav className="NavBar-container">
      <img className="NavBar-logo" src={logo} alt="TJ hupu logo" />
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/create" className="NavBar-link">
          发布
        </Link>
        <Link to="/" className="NavBar-link">
          主页
        </Link>
        <Link to="/create" className="NavBar-link">
          发布
        </Link>
        <Link to={`/Space/${userId}`} className="NavBar-link">
          个人空间
        </Link>
        <Link to="/SignUp" className="NavBar-link">
          注册
        </Link>
        {props.userId ? (
          <Link to="/LogOut" className="NavBar-link">
            登出
          </Link>
        ) : (
          <Link to="/LogIn" className="NavBar-link">
            登录
          </Link>
        )}
        <div className="NavBar-title u-inlineBlock">TJ hupu</div>
      </div>
    </nav>
  );
};

export default NavBar;
