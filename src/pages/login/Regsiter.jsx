// src/pages/login/Regsiter.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import axios from "axios";

// ✅ Component name matches the file name
export const Regsiter = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://taara-backend.onrender.com/auth/register",
        formData
      );
      if (res.data) {
        window.location.replace("/login");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="backImg">
          <img src={back} alt="Register Background" />
          <div className="text">
            <h3>Register</h3>
            <h1>My account</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username *</label>
          <input
            id="username"
            type="text"
            required
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
          />

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
            autoComplete="new-password"
          />

          <button type="submit" className="button">
            Register
          </button>

          <p className="text-center" style={{ marginTop: "10px" }}>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Back to Login
            </Link>
          </p>

          {error && <span style={{ color: "red" }}>Something went wrong</span>}
        </form>
      </div>
    </section>
  );
};
