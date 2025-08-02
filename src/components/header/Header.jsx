import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link, NavLink } from "react-router-dom";

export const Header = ({ theme, toggleTheme }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
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
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                ) : (
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {link.text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="account flexCenter">
          <User />

          {/* 🌙 Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: theme === "light" ? "#333" : "#fff",
              color: theme === "light" ? "#fff" : "#000",
              border: "2px solid",
              borderColor: theme === "light" ? "#333" : "#fff",
              borderRadius: "50%",
              padding: "8px 10px",
              cursor: "pointer",
              fontSize: "20px",
              marginLeft: "12px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
};
