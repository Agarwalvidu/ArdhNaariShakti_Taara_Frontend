import React, { useEffect, useState } from "react"
import logo from "../../assets/images/logo.png"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link, NavLink } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header")
      if (header) {
        header.classList.toggle("active", window.scrollY > 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Ardh Naari Shakti Tara" />
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
                      onClick={(e) => {
                        // Add error handling for external link
                        try {
                          // The link will open in new tab, but we can show a message
                          console.log('Opening TaaraBot...');
                        } catch (error) {
                          e.preventDefault();
                          alert('TaaraBot is temporarily unavailable. Please try again later.');
                        }
                      }}
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
          
          <div className="account">
            <User />
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="logo">
              <img src={logo} alt="Ardh Naari Shakti Tara" height="40" />
            </div>
            <button 
              className="mobile-nav-close"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <HiX />
            </button>
          </div>
          
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  {link.text === "taarabot" ? (
                    <a
                      href={link.url}
                      onClick={(e) => {
                        closeMobileMenu();
                        // Add error handling for external link
                        try {
                          console.log('Opening TaaraBot...');
                        } catch (error) {
                          e.preventDefault();
                          alert('TaaraBot is temporarily unavailable. Please try again later.');
                        }
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <NavLink
                      to={link.url}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        isActive ? "active" : ""
                      }
                    >
                      {link.text}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
