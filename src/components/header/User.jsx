import React, { useContext, useState, useEffect, useRef } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { HiUser, HiCog, HiQuestionMarkCircle } from "react-icons/hi";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const User = () => {
  const { user, dispatch } = useContext(Context);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setProfileOpen(false);
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const PublicFlo = "https://taara-backend.onrender.com/images/";

  return (
    <>
      <div className="profile" ref={profileRef}>
        {user ? (
          <>
            <div className="image" onClick={() => setProfileOpen(!profileOpen)}>
              <img
                src="https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
                alt="Profile"
              />
              <button>Account</button>
            </div>
            
            <div className={`openProfile ${profileOpen ? 'show' : ''}`}>
              <Link to={"/account"}>
                <div className="box">
                  <div className="image">
                    <img
                      src="https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
                      alt="Profile"
                    />
                  </div>
                  <div className="text">
                    <h4>{user.username}</h4>
                    <p>View Profile</p>
                  </div>
                </div>
              </Link>
              
              <Link to="/create">
                <div className="box">
                  <RiImageAddLine className="icon" />
                  <h4>Create Post</h4>
                </div>
              </Link>
              
              <Link to="/account">
                <div className="box">
                  <IoSettingsOutline className="icon" />
                  <h4>My Account</h4>
                </div>
              </Link>
              
              <div className="box">
                <GrHelp className="icon" />
                <h4>Help & Support</h4>
              </div>
              
              <div className="box" onClick={handleLogout}>
                <BiLogOut className="icon" />
                <h4>Log Out</h4>
              </div>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">
              <HiUser />
              Sign In
            </button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </>
  );
};
