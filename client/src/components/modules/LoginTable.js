import React, { useState } from "react";
import { post } from "../../utilities";
import { useNavigate, Link } from "react-router-dom";
import "./LogInTable.css";

const LoginTable = (props) => {
  const [formData, setFormData] = useState({
    emailOrName: "",
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
    // 处理登录逻辑
    props.handleLogin(formData);
  };

  return (
    <div className="loginAll">
    <div className="login-container">
      <h2>用户登录</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailOrName">邮箱或用户名</label>
          <input
            type="text"
            id="emailOrName"
            name="emailOrName"
            value={formData.emailOrName}
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
      <div>
        <img src="https://img1.qunarzz.com/travel/d6/1809/6c/39617891be657fb5.jpg" alt="logo" id = "PicTJ" />
      </div> 
        
      </div>
  );
};

export default LoginTable;
