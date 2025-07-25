import React, { useContext } from "react"
import logo from "../../assets/images/logo.png"
import "./header.css"
import { User } from "./User"
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
                  <a href={link.url} style={{ color: 'white', fontWeight: 'bold',transition: 'font-size 0.3s' }} onMouseOver={e => e.target.style.color = 'black'} onMouseOut={e => e.target.style.color = 'white'} onMouseEnter={e => e.target.style.fontSize = '1.1em'}  // Increasing font size on mouse enter
                  onMouseLeave={e => e.target.style.fontSize = '1em'} target="_blank" rel="noopener noreferrer">{link.text}</a>
                ) : (
                  <Link to={link.url} style={{ color: 'white', fontWeight: 'bold',transition: 'font-size 0.3s' }} onMouseOver={e => e.target.style.color = 'black'} onMouseOut={e => e.target.style.color = 'white'} onMouseEnter={e => e.target.style.fontSize = '1.1em'}  // Increasing font size on mouse enter
                  onMouseLeave={e => e.target.style.fontSize = '1em'} >{link.text}</Link>
                )}
              </li>
              ))}
            </ul>
          </nav>
          <div className='account flexCenter'>
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
