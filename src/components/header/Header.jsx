import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {

   const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // New state for profile menu
  const [moreOpen, setMoreOpen] = useState(false); // Desktop "More" dropdown
  const [showProfileOnly, setShowProfileOnly] = useState(false); // New state for profile-only view
  const navRef = useRef();

  // Add a state for window width to detect mobile view
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileView = windowWidth <= 768; // Define mobile view breakpoint

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && (menuOpen || profileOpen || showProfileOnly || moreOpen)) {
        setMenuOpen(false);
        setProfileOpen(false);
        setShowProfileOnly(false);
        setMoreOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setProfileOpen(false);
        setShowProfileOnly(false);
        setMoreOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, profileOpen, showProfileOnly, moreOpen]);

  const closeMenu = () => { 
    setMenuOpen(false); 
    setProfileOpen(false);
    setShowProfileOnly(false);
  };

  const toggleProfileOnly = () => {
    setShowProfileOnly(!showProfileOnly);
    setMenuOpen(false); // Ensure main menu is closed when opening profile drawer
  };

  // Split links for desktop to declutter: keep primary, overflow under "More"
  const primaryDesktopLinks = nav.slice(0, 6);
  const overflowDesktopLinks = nav.slice(6);

  return (
    <header className="header">
      <div className="scontainer flex space-between">
        
        {/* Logo + Title */}
        <div className="logo-title">
          <Link to="/" onClick={closeMenu} className="flex">
            <img src={logo} alt="logo" width="80px" />
            <h1 className="project-title">ArdhNaariShakti Taara</h1>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <motion.div animate={{
            transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
          }} className="menu-icon" onClick={() => { 
          if (showProfileOnly) {
            setShowProfileOnly(false); // Close profile drawer
            setMenuOpen(true); // Open main menu
          } else {
            setMenuOpen(!menuOpen); // Toggle main menu
            setProfileOpen(false); // Close desktop profile if open
          }
          console.log('Menu Open:', !menuOpen, 'Profile Only:', showProfileOnly);
        }}>
          {menuOpen && !showProfileOnly ? <FaTimes /> : <FaBars />}
        </motion.div>

        {/* Navigation Menu (Animated for mobile) */}
        {!showProfileOnly && (
          isMobileView ? (
            <AnimatePresence>
              {menuOpen && (
                <motion.nav
                  ref={navRef}
                  className="nav-menu active"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.35 }}
                  style={{ position: "fixed", top: 0, right: 0, width: "100vw", height: "100vh", background: "#ffa9cb", zIndex: 10000, paddingTop: 70 }}
                >
                  <motion.ul
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } }
                    }}
                  >
                    {nav.map((link) => (
                      <motion.li
                      className="sli"
                        key={link.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.2 + (link.id / 10) }}
                      >
                        {link.text === "taarabot" ? (
                          <a
                            href={link.url}
                            className="nav-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                          >
                            {link.text}
                          </a>
                        ) : (
                          <NavLink
                            to={link.url}
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"
                            }
                            onClick={closeMenu}
                          >
                            {link.text}
                          </NavLink>
                        )}
                      </motion.li>
                    ))}
                    <motion.li
                      className="mobile-account"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <User closeMobileMenu={closeMenu} profileOpen={profileOpen} setProfileOpen={setProfileOpen} toggleProfileOnly={toggleProfileOnly} isMobile={isMobileView} />
                    </motion.li>
                  </motion.ul>
                </motion.nav>
              )}
            </AnimatePresence>
          ) : (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              ref={navRef}
              className={menuOpen ? "nav-menu active" : "nav-menu"}
            >
              <AnimatePresence>
                <motion.ul onMouseLeave={() => setMoreOpen(false)} role="menubar" aria-label="Primary">
                  <AnimatePresence>
                    {primaryDesktopLinks.map((link) => (
                      <motion.li
                      className=""
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2 + (link.id / 10),
                        }}
                        key={link.id}
                      >
                        {link.text === "taarabot" ? (
                          <a
                            href={link.url}
                            className="nav-link cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                          >
                            {link.text}
                          </a>
                        ) : (
                          <NavLink
                            to={link.url}
                            className={({ isActive }) =>
                              isActive ? "nav-link active" : "nav-link"
                            }
                            onClick={closeMenu}
                          >
                            {link.text}
                          </NavLink>
                        )}
                      </motion.li>
                    ))}
                  </AnimatePresence>
                  {overflowDesktopLinks.length > 0 && (
                    <li
                      className={`more ${moreOpen ? 'open' : ''}`}
                      onMouseEnter={() => setMoreOpen(true)}
                    >
                      <button
                        className="more-btn"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={moreOpen}
                        onClick={() => setMoreOpen((v) => !v)}
                        onKeyDown={(e) => {
                          if (e.key === 'ArrowDown') {
                            setMoreOpen(true);
                            const first = e.currentTarget.nextSibling?.querySelector('a,button,[tabindex="0"]');
                            if (first) {
                              e.preventDefault();
                              first.focus();
                            }
                          }
                        }}
                      >
                        More
                      </button>
                      {moreOpen && (
                        <ul className="more-menu" role="menu" aria-label="More">
                          {overflowDesktopLinks.map((link) => (
                            <li key={link.id} role="none">
                              {link.text === "taarabot" ? (
                                <a
                                  href={link.url}
                                  className="nav-link cta"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMenu}
                                  role="menuitem"
                                >
                                  {link.text}
                                </a>
                              ) : (
                                <NavLink
                                  to={link.url}
                                  className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                  }
                                  onClick={closeMenu}
                                  role="menuitem"
                                >
                                  {link.text}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )}
                  <li className="mobile-account">
                    <User closeMobileMenu={closeMenu} profileOpen={profileOpen} setProfileOpen={setProfileOpen} toggleProfileOnly={toggleProfileOnly} isMobile={isMobileView} />
                  </li>
                </motion.ul>
              </AnimatePresence>
            </motion.nav>
          )
        )}

        {/* Profile Drawer (Mobile Only) */}
        {isMobileView && (
          <div className={`profile-drawer ${showProfileOnly ? 'active' : ''}`} onClick={() => console.log('Clicked Profile Drawer Container')}>
            <User closeMobileMenu={closeMenu} profileOpen={profileOpen} setProfileOpen={setProfileOpen} toggleProfileOnly={toggleProfileOnly} showProfileOnly={showProfileOnly} isMobile={isMobileView} />
          </div>
        )}

        <div className="account flexCenter desktop-account">
          <User closeMobileMenu={closeMenu} isMobile={isMobileView} />
        </div>
      </div>
    </header>
  );
};
