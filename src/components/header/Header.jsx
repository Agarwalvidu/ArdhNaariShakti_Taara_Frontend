// src/components/common/Header.jsx

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "active" : ""}`}>
      <div className="scontainer flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" width="100px" />
          </Link>
        </div>

        <nav>
          <ul>
            {nav.map((link) => (
              <li key={link.id}>
                {link.text === "taarabot" ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link
                    to={link.url}
                    className={`nav-link ${
                      location.pathname === link.url ? "active" : ""
                    }`}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="account flexCenter">
          <User />
        </div>
      </div>
    </header>
  );
};
