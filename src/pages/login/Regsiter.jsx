import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

export const Regsiter = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Password validation checks
  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid = Object.values(passwordChecks).every(Boolean);

  // Handle file selection with preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }
      // Validate file size (max 2MB)
      if (selectedFile.size > 2 * 1024 * 1024) {
        toast.error("Image size should be less than 2MB");
        return;
      }

      setFile(selectedFile);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    // Validate password before submission
    if (!isPasswordValid) {
      toast.error("Please meet all password requirements");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://taara-backend.onrender.com/auth/register",
        {
          username,
          email,
          password,
        }
      );
      if (res.data) {
        // Save profile picture to localStorage if uploaded
        if (previewImage) {
          localStorage.setItem(`profilePic_${email}`, previewImage);
        }

        toast.success("Registered Successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
      toast.error("Something went wrong. Please try again.", {
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
            <h2>Create an Account</h2>

            {/* Profile Picture Upload */}
            <div className="form-group" style={{ textAlign: "center" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>
                Profile Picture 
              </label>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={
                    previewImage ||
                    "https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
                  }
                  alt="Profile Preview"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #f01b89",
                  }}
                />
                <label
                  htmlFor="profilePicInput"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <IoIosAddCircleOutline
                    style={{ fontSize: "2rem", color: "#f01b89" }}
                  />
                </label>
                <input
                  type="file"
                  id="profilePicInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
              {file && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#0472f8",
                    marginTop: "5px",
                  }}
                >
                  ✓ Image selected
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Password Requirements */}
              {password && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "10px",
                    background: "#f8f9fa",
                    borderRadius: "5px",
                    fontSize: "0.85rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: "#333",
                    }}
                  >
                    Password must contain:
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <span
                      style={{
                        color: passwordChecks.length ? "#28a745" : "#dc3545",
                      }}
                    >
                      {passwordChecks.length ? "✅" : "❌"} At least 8
                      characters
                    </span>
                    <span
                      style={{
                        color: passwordChecks.uppercase
                          ? "#28a745"
                          : "#dc3545",
                      }}
                    >
                      {passwordChecks.uppercase ? "✅" : "❌"} One uppercase
                      letter (A-Z)
                    </span>
                    <span
                      style={{
                        color: passwordChecks.lowercase
                          ? "#28a745"
                          : "#dc3545",
                      }}
                    >
                      {passwordChecks.lowercase ? "✅" : "❌"} One lowercase
                      letter (a-z)
                    </span>
                    <span
                      style={{
                        color: passwordChecks.number ? "#28a745" : "#dc3545",
                      }}
                    >
                      {passwordChecks.number ? "✅" : "❌"} One number (0-9)
                    </span>
                    <span
                      style={{
                        color: passwordChecks.special ? "#28a745" : "#dc3545",
                      }}
                    >
                      {passwordChecks.special ? "✅" : "❌"} One special
                      character (@#$%^&*)
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="button"
              disabled={loading || (password && !isPasswordValid)}
              style={{
                opacity: loading || (password && !isPasswordValid) ? 0.6 : 1,
                cursor:
                  loading || (password && !isPasswordValid)
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              {loading ? "Registering..." : "Register"}
            </button>
            <p className="register-link">
              Already have an account? <Link to="/login">Back to Login</Link>
            </p>
          </form>

          {error && <span style={{ color: "red" }}>Something went wrong</span>}
        </div>
      </section>
    </>
  );
};