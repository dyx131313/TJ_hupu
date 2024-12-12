import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"; // 导入 useNavigate 和 useLocation

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
  const [username, setUsername] = useState(undefined);
  const [cur_user, setCur_user] = useState(undefined);
  const navigate = useNavigate(); // 使用 useNavigate
  const location = useLocation(); // 使用 useLocation

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // 用户已登录，更新 userId 状态
        setCur_user(user);
        setUserId(user._id);
      }
    });
  }, [location]); // 依赖项数组包含 location，表示在 location 变化时触发

  const handleLogin = (formData) => {
    console.log("app login", formData);
    post("/api/login", formData)
      .then((response) => {
        // 更新 userId 状态
        setUserId(response.userId);
        setCur_user(response.user);
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
    setCur_user(undefined);
    post("/api/logout")
      .then(() => {
        console.log("User logged out");
        // 重定向到登录页面
        navigate("/login");
      })
      .catch((err) => {
        console.error("Error logging out:", err);
      });
  };

  return (
    <div className="App">
      <NavBar userId={userId} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Feed userId={userId} />} />
        <Route path="/login" element={<LogIn handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Space/:userId" element={<Space />} />
        <Route path="/detail/:postId" element={<Detail user={cur_user} />} />
        <Route path="/create" element={<Create userId={userId} />} />
        <Route path="/logout" element={<LogOut handleLogout={handleLogout} />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
