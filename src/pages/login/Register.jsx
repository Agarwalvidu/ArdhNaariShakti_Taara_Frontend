import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import axios from "axios";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("https://taara-backend.onrender.com/auth/register", {
        username,
        email,
        password,
      });
      if (res.data) {
        window.location.replace("/login");
      }
    } catch (error) {
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />

          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <label htmlFor="password">Password *</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        
        </form>

        

        {error && <span style={{ color: "red" }}>Something went wrong</span>}
      </div>
    </section>
  );
};
