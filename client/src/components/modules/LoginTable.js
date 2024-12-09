import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginTable.css";

const LoginTable = () => {
  const [formData, setFormData] = useState({
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
    // 处理登录逻辑
    console.log("Form submitted:", formData);
  };

  return (
    <div className="loginAll">
        <div className="LoginTable-container">
        <h2>登录</h2>
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
          <button type="submit" className="LoginTable-button">
            登录
          </button>
        </form>
        <p>
          还没有账户? <Link to="/SignUp">注册</Link>
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

export default LoginTable;
