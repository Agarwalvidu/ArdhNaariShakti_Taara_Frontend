import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import logo from "../../assets/images/logo.png"
import "./footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Taara Logo" />
              <h3>Taara</h3>
            </div>
            <p className="footer-description">
              Empowering women through technology, innovation, and community support. 
              Join us in creating a brighter future for all.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <BsFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <RiInstagramFill />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <AiFillTwitterCircle />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <AiFillLinkedin />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/shelter">Shelter</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/help">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>hello@taara.org</span>
              </div>
              <div className="contact-item">
                <MdPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Taara. All rights reserved.</p>
            <p>Designed & Developed by Team Taara</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
