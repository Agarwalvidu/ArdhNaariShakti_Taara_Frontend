import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "active" : ""}`}>
      <div className='scontainer flex'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' width='100px' />
          </Link>
        </div>

        <nav>
          <ul>
            {nav.map((link) => (
              <li key={link.id}>
                {link.text === "taarabot" ? (
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`nav-link ${scrolled ? "scrolled" : ""}`}
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link
                    to={link.url}
                    className={`nav-link ${scrolled ? "scrolled" : ""}`}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className='account'>
          <Link to='/login' className='account-btn'>
            Account
          </Link>
          
        </div>
      </div>
    </header>
  );
};
