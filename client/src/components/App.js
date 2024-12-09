import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

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
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };

  return (
    <>
      <NavBar handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
      <div className="App-container">
        <Routes>
          <Route
            path="/"
            element={
              // <Skeleton
              //   path="/"
              //   handleLogin={handleLogin}
              //   handleLogout={handleLogout}
              //   userId={userId}
              // />
              <Feed userId={userId} />
            }
          />
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
