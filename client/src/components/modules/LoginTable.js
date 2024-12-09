import React, { useState } from "react";
import { post } from "../../utilities";
import { useNavigate, Link } from "react-router-dom";
import "./LoginTable.css";

const LoginTable = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fronted login", formData);
    // 处理登录逻辑
    post("/api/login", formData)
      .then((response) => {
        console.log("User logged in:", response);
        // 重定向到主页
        navigate("/");
      })
      .catch((err) => {
        console.error("Error logging in:", err);
        alert("登录失败，请检查您的邮箱和密码");
      });
  };

  return (
    <div className="login-container">
      <h2>用户登录</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">
          登录
        </button>
      </form>
      <p>
        还没有账户? <Link to="/signup">注册</Link>
      </p>
    </div>
  );
};

export default LoginTable;
