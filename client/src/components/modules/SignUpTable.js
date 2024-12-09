import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpTable.css";
import { post } from "../../utilities";

const SignUpTable = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fronted signup", formData);
    if (formData.password !== formData.confirmPassword) {
      alert("密码和确认密码不匹配");
      return;
    }
    // 处理注册逻辑
    post("/api/signup", formData)
      .then((user) => {
        console.log("User signed up:", user);
      })
      .catch((err) => {
        console.error("Error signing up:", err);
      });
  };

  return (
    <div className="signup-container">
      <h2>用户注册</h2>
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
          <label>密码</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "隐藏" : "显示"}
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>确认密码</label>
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "隐藏" : "显示"}
            </button>
          </div>
        </div>
        <button type="submit" className="signup-button">
          注册
        </button>
      </form>
      <p>
        已经拥有账户? <Link to="/login">登录</Link>
      </p>
    </div>
  );
};

export default SignUpTable;
