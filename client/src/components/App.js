import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; // 导入 useNavigate

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
import Create from "./pages/Create.js";
import LogOut from "./modules/LogOut.js";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const navigate = useNavigate(); // 使用 useNavigate

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  });

  const handleLogin = (formData) => {
    console.log("app login", formData);
    post("/api/login", formData)
      .then((response) => {
        console.log("User logged in:", response);
        // 重定向到主页
        navigate("/");
      })
      .catch((err) => {
        console.error("Error logging in:", err);
        alert("登录失败，请检查您的邮箱、用户名和密码");
      });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout")
      .then(() => {
        console.log("User logged out");
        // 重定向到登录页面
        navigate("/");
      })
      .catch((err) => {
        console.error("Error logging out:", err);
      });
  };
  const location = useLocation(); // 获取当前路径、
  const isSignUpPage = (location.pathname === "/SignUp" || location.pathname === "/LogIn");
  return (
    <div className="App">
      <NavBar userId={userId} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Feed userId={userId} />} />
        <Route path="/login" element={<LogIn handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/:id" element={<Space userId={userId} />} />
        <Route path="/detail/:id" element={<Detail userId={userId} />} />
        <Route path="/create" element={<Create userId={userId} />} />
        <Route path="/logout" element={<LogOut handleLogout={handleLogout} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
