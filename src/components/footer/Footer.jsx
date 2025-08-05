import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillHeart } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { HiMail, HiPhone, HiLocationMarker, HiHeart } from "react-icons/hi"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <img src={logo} alt="Ardh Naari Shakti Tara" className="footer-logo" />
            <h3>Ardh Naari Shakti Tara</h3>
            <p>Empowering and supporting the transgender community through comprehensive resources and inclusive services.</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/shelter">Shelter</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><a href="https://console.dialogflow.com/api-client/demo/embedded/9ceb4ad7-b3a7-49eb-b8e1-9b72a12e79cb" target="_blank" rel="noopener noreferrer">Taara Bot</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><a href="#help">Help & Support</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <div className="contact-item">
              <HiMail className="contact-icon" />
              <span>support@taara.org</span>
            </div>
            <div className="contact-item">
              <HiPhone className="contact-icon" />
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <HiLocationMarker className="contact-icon" />
              <span>Delhi, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            © {currentYear} Ardh Naari Shakti Tara. All rights reserved. 
            Made with <HiHeart className="heart-icon" /> by Team Taara
          </p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              <BsFacebook className="social-icon" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <RiInstagramFill className="social-icon" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <AiFillTwitterCircle className="social-icon" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <AiFillLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
