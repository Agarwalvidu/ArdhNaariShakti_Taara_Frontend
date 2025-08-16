import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css"; // assuming styles are here

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://taara-backend.onrender.com/auth/forgot-password",
        { email }
      );

      if (response.status === 200) {
        setSubmitted(true);
        toast.success("Reset link sent. Check your email.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Reset link error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
    }
  };

  return (
    <section className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {!submitted ? (
          <>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
              />
            </div>
            <button className="button" type="submit">
              Send Reset Link
            </button>
          </>
        ) : (
          <p className="success-message">We’ve sent a reset link to your email.</p>
        )}
      </form>
    </section>
  );
};
export default ForgotPassword;