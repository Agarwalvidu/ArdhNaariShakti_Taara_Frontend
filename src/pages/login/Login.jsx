import React, { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import back from "../../assets/images/my-account.jpg";
import { Context } from "../../context/Context";
import axios from "axios";

export const Login = () => {
  const userRef = useRef();
  const passRef = useRef();
  const { dispatch, FetchData } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" }); // use consistent action type naming
    try {
      const res = await axios.post("https://taara-backend.onrender.com/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      // Redirect after successful login
      window.location.replace("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      // Optionally handle error UI here
    }
  };

  return (
    <>
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
            <span>Username *</span>
            <input type="text" required ref={userRef} />
            <span>Password *</span>
            <input type="password" required ref={passRef} />

            <button className="button" type="submit" disabled={FetchData}>
              Log in
            </button>

            <p className="text-center">
              Not a member?{" "}
              <Link to="/register" className="link">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};
