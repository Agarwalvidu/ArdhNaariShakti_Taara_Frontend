import React, { useContext } from "react"
import logo from "../../assets/images/logo.png"
import "./header.css"
import { User } from "./User"
import { ThemeToggle } from "./ThemeToggle"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
  
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
          <Link to="/"> {/* Wrap the logo with Link */}
              <img src={logo} alt="logo" width="100px" />
            </Link>
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                {link.text === "taarabot" ? (
                  <a href={link.url} className="nav-link" target="_blank" rel="noopener noreferrer">{link.text}</a>
                ) : (
                  <Link to={link.url} className="nav-link">{link.text}</Link>
                )}
              </li>
              ))}
            </ul>
          </nav>
          <div className='account flexCenter'>
            <ThemeToggle />
            <User />
          </div>
        </div>
      </header>
    </>
  )
}
