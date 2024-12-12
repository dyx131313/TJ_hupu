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
            <SignUpTable handleLSignUp={props.handleSignUp} />
          </div>
        </div>
      </div>
      {/* <div className="square">
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
      </div> */}
    </>
  );
};

export default SignUp;
