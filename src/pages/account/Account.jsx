import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";        // <-- Added Link import
import "./account.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";

export const Account = () => {
  const { user, dispatch } = useContext(Context);

  // Initialize state with user data so inputs are controlled
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [succ, setSucc] = useState(false);

  const PublicFlo = "https://taara-backend.onrender.com/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;

      try {
        await axios.post("https://taara-backend.onrender.com/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(
        "https://taara-backend.onrender.com/users/" + user._id,
        updateUser
      );
      setSucc(true);
      dispatch({ type: "UPDATE_SUCC", payload: res.data });
      // No need to reload page, instead update user context or notify success
      // window.location.reload();
    } catch (error) {
      dispatch({ type: "UPDATE_FAILED" });
    }
  };

  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : user.profilePic
                      ? PublicFlo + user.profilePic
                      : "https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
                  }
                  alt="Profile"
                />
                <label htmlFor="inputfile">
                  <IoIosAddCircleOutline className="icon" />
                </label>
                <input
                  type="file"
                  id="inputfile"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                  accept="image/*"
                />
              </div>
            </div>
            <form className="right" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-center">
                Already have an account? <Link to="/login" className="link">Back to Login</Link>
              </p>
              <button className="button" type="submit">
                Update
              </button>
              {succ && <span style={{ color: "green", marginLeft: "10px" }}>Profile is Updated</span>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
