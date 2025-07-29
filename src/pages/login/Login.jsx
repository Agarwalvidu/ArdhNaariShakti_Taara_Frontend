import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://taara-backend.onrender.com/auth/login",
        formData
      );
      if (res.data) {
        // Optional: Store token or user info
        navigate("/");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="backImg">
          <img src={back} alt="Login Background" />
          <div className="text">
            <h3>Login</h3>
            <h1>My account</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <label htmlFor="password">Password *</label>
          <input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          <button type="submit" className="button">
            Login
          </button>

          <p className="text-center" style={{ marginTop: "10px" }}>
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Create Account
            </Link>
          </p>

          {error && <span style={{ color: "red" }}>Invalid email or password</span>}
        </form>
      </div>
    </section>
  );
};

export default Login;
