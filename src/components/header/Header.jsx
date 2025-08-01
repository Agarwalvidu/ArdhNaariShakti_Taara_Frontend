import React, { useEffect } from "react"
import logo from "../../assets/images/logo.png"
import "./header.css"
import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"
import { useState } from "react"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to="/"> {/* Wrap the logo with Link */}
              <img src={logo} alt="logo" width="100px" />
            </Link>
          </div>

          <nav className="navLinks">
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  {link.text === "taarabot" ? (
                    <a href={link.url} style={{ color: 'white', fontWeight: 'bold', transition: 'font-size 0.3s' }} onMouseOver={e => e.target.style.color = 'black'} onMouseOut={e => e.target.style.color = 'white'} onMouseEnter={e => e.target.style.fontSize = '1.1em'}  // Increasing font size on mouse enter
                      onMouseLeave={e => e.target.style.fontSize = '1em'} target="_blank" rel="noopener noreferrer">{link.text}</a>
                  ) : (
                    <Link to={link.url} style={{ color: 'white', fontWeight: 'bold', transition: 'font-size 0.3s' }} onMouseOver={e => e.target.style.color = 'black'} onMouseOut={e => e.target.style.color = 'white'} onMouseEnter={e => e.target.style.fontSize = '1.1em'}  // Increasing font size on mouse enter
                      onMouseLeave={e => e.target.style.fontSize = '1em'} >{link.text}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className='account desktopAccount'>
            <User />
          </div>

          <div className="mobileWrapper">     
          <div className="mobileMenuBtn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Hamburger meny logic */}
          <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              {nav.map((link) => (
                <li key={link.id} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                  {link.text === "taarabot" ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer"> {link.text} </a>
                  ) : (
                    <Link to={link.url} > {link.text} </Link>
                  )}
                </li>
              ))}
            </ul>
            <hr />
            <div className="account mobileAccount">
              <User />
            </div>
          </div>
          </div> 
        </div>
      </div>
    </header>
  )
}
