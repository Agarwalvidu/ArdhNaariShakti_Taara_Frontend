import React, { useContext, useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { dispatch, FetchData } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    dispatch({ type: "LOGINSTART" });

    try {
      const res = await axios.post("https://taara-backend.onrender.com/auth/login", {
        username,
        password,
      });

      dispatch({ type: "LOGINSUCC", payload: res.data });

      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => {
          navigate("/");
        },
      });
    } catch (err) {
      dispatch({ type: "LOGINFAILED" });
      setError("Login failed. Please check your username and password.");
      toast.error("Login failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <section className="login-container">
        <div className="login-image-container">
          <img src={back} alt="Decorative background" />
        </div>

        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login to Your Account</h2>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button className="button" type="submit" disabled={FetchData}>
              {FetchData ? "Logging in..." : "Log In"}
            </button>

            <p className="register-link">
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
        {/* <ToastContainer /> */}
      </section>
    </>
  );
};
