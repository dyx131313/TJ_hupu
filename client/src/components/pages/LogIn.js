import React, { useState } from "react";
import LoginTable from "../modules/LoginTable";
import "./LogIn.css";

const LogIn = (props) => {
  return (
    <>
      <div className="loginAll">
        <div className="logindisplay-container">
          <div className="logintable-container">
            <LoginTable handleLogin={props.handleLogin} />
          </div>
          <div className="logo-container">
            <img
              src="https://img1.qunarzz.com/travel/d6/1809/6c/39617891be657fb5.jpg"
              alt="logo"
              className="logo"
            />
          </div>
        </div>
      </div>
      <div className="square">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="circle">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default LogIn;
