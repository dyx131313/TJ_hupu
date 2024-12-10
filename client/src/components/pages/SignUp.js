import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignUpTable from "../modules/SignUpTable";
import "./SignUp.css";
const SignUp = (props) => {
  return (
    <>
      <div className="signupAll">
        <div className="signupdisplay-container">
          <div className="signuptable-container">
            <SignUpTable handleSignUp={props.handleSignUp} />
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

export default SignUp;
