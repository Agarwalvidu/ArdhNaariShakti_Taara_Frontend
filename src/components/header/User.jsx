import React, { useContext, useState, useRef, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Context } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useClickOutside } from '../../hooks/useClickOutside';
import "./User.css";

export const User = ({ closeMobileMenu, profileOpen: propProfileOpen, setProfileOpen: propSetProfileOpen, toggleProfileOnly, showProfileOnly, isMobile }) => {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const [localProfileOpen, setLocalProfileOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");

  const currentProfileOpen = isMobile ? propProfileOpen : localProfileOpen;
  const currentSetProfileOpen = isMobile ? propSetProfileOpen : setLocalProfileOpen;

  const getProfilePicture = () => {
    if (!user) return "https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png";
    if (user.profilePic) {
      return user.profilePic;
    }
    const storedPic = localStorage.getItem(`profilePic_${user.email}`);
    if (storedPic) {
      return storedPic;
    }
    return "https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png";
  };

  useEffect(() => {
    if (user) {
      setProfilePicture(getProfilePicture());
    }
  }, [user]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key && e.key.startsWith('profilePic_') && user) {
        setProfilePicture(getProfilePicture());
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [user]);

  useEffect(() => {
    const handleProfileUpdate = () => {
      if (user) {
        setProfilePicture(getProfilePicture());
      }
    };
    window.addEventListener('profilePictureUpdated', handleProfileUpdate);
    return () => window.removeEventListener('profilePictureUpdated', handleProfileUpdate);
  }, [user]);

  useClickOutside(profileRef, () => {
    if (isMobile) {
      if (showProfileOnly) {
        toggleProfileOnly();
      }
    } else {
      currentSetProfileOpen(false);
    }
  });

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
    if (isMobile) {
      closeMobileMenu();
    }
    navigate('/');
  };

  return (
    <div className="profile" ref={profileRef}>
      {user ? (
        <>
          {!showProfileOnly && (
            <button
              className="profile-avatar-btn"
              onClick={() => {
                if (isMobile) {
                  toggleProfileOnly();
                } else {
                  currentSetProfileOpen(!currentProfileOpen);
                }
              }}
            >
              <img
                src={profilePicture}
                style={{ width: "45px", height: "45px" }}
                alt="Profile"
                className="profile-avatar-img"
              />
            </button>
          )}
          {currentProfileOpen && !isMobile && (
            <div className="profile-menu boxItems" onClick={e => e.stopPropagation()}>
              <Link to={"/account"} onClick={() => currentSetProfileOpen(false)} className="profile-header">
                <div className="profile-avatar-wrapper">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile-avatar-large"
                  />
                </div>
                <div className="profile-info">
                  <h4 className="profile-name">{user.username}</h4>
                  <label className="profile-location">India, Delhi</label>
                </div>
              </Link>
              
              <div className="profile-divider"></div>
              
              <button className="profile-menu-item" onClick={() => {navigate("/create"); currentSetProfileOpen(false);}}>
                <RiImageAddLine className="menu-icon" />
                <h4>Create Post</h4>
              </button>
              <button className="profile-menu-item" onClick={() => {navigate("/account"); currentSetProfileOpen(false);}}>
                <IoSettingsOutline className="menu-icon" />
                <h4>My Account</h4>
              </button>
              <button className="profile-menu-item" onClick={() => {navigate("/help"); currentSetProfileOpen(false);}}>
                <GrHelp className="menu-icon" />
                <h4>Help</h4>
              </button>
              <button className="profile-menu-item logout-item" onClick={() => {handleLogout(); currentSetProfileOpen(false);}}>
                <BiLogOut className="menu-icon" />
                <h4>Log Out</h4>
              </button>
            </div>
          )}
          {showProfileOnly && isMobile && (
            <div className="profile-menu boxItems mobile-profile" onClick={e => e.stopPropagation()}>
              <button className="close-profile-btn" onClick={toggleProfileOnly}>
                <FaTimes />
              </button>
              <Link to={"/account"} onClick={closeMobileMenu} className="profile-header">
                <div className="profile-avatar-wrapper">
                  <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile-avatar-large"
                  />
                </div>
                <div className="profile-info">
                  <h4 className="profile-name">{user.username}</h4>
                  <label className="profile-location">India, Delhi</label>
                </div>
              </Link>
              
              <div className="profile-divider"></div>
              
              <button className="profile-menu-item" onClick={() => {navigate("/create"); closeMobileMenu();}}>
                <RiImageAddLine className="menu-icon" />
                <h4>Create Post</h4>
              </button>
              <button className="profile-menu-item" onClick={() => {navigate("/account"); closeMobileMenu();}}>
                <IoSettingsOutline className="menu-icon" />
                <h4>My Account</h4>
              </button>
              <button className="profile-menu-item" onClick={() => {navigate("/help"); closeMobileMenu();}}>
                <GrHelp className="menu-icon" />
                <h4>Help</h4>
              </button>
              <button className="profile-menu-item logout-item" onClick={handleLogout}>
                <BiLogOut className="menu-icon" />
                <h4>Log Out</h4>
              </button>
            </div>
          )}
        </>
      ) : (
        <Link to="/login" onClick={closeMobileMenu}>
          <button className="login-btn">My Account</button>
        </Link>
      )}
    </div>
  );
};