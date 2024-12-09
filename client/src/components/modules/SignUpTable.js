import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpTable.css";
const SignUpTable = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 处理注册逻辑
    console.log("Form submitted:", formData);
  };

  return (
    <div className="signupAll">
        <div className="signup-container">
        <div>
        <h2>用户注册</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="signup-button">
            注册
          </button>
        </form>
        <p>
          已经拥有账户? <Link to="/LogIn">登录</Link>
        </p>
        <div class="square">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="circle">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
        <img src="https://img1.qunarzz.com/travel/d6/1809/6c/39617891be657fb5.jpg" alt="logo" id = "PicTJ" />
      </div>
    </div>
  );
};

export default SignUpTable;
