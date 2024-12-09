import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // 导入 useLocation

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";

import "../utilities.css";

import "./App.css";

import { get, post } from "../utilities";

import NavBar from "./modules/NavBar.js";
import Space from "./pages/Space.js";
import Feed from "./pages/Feed.js";
import SignUp from "./pages/SignUp.js";
import LogIn from "./pages/LogIn.js";
import Detail from "./pages/Detail.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    // get("/api/whoami").then((user) => {
    //   if (user._id) {
    //     // they are registed in the database, and currently logged in.
    //     setUserId(user._id);
    //   }
    // });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };
  const location = useLocation(); // 获取当前路径、
  const isSignUpPage = location.pathname === "/SignUp";
  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <div className={`App-container ${isSignUpPage ? "signup-background" : ""}`}>
        <Routes>
          <Route path="/" element={<Feed userId={userId} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Space" element={<Space userId={userId} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Detail" element={<Detail userId={userId} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
