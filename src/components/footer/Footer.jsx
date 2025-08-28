import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import logo from "../../assets/images/logo.png"
import "./footer.css"
import { useNavigate, Link } from 'react-router-dom';

function QuickLinks() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <ul className="footer-links">
      <li onClick={() => handleClick('/')}>Home</li>
      <li onClick={() => handleClick('/jobs')}>Jobs</li>
      <li onClick={() => handleClick('/blogs')}>Blog</li>
      <li onClick={() => handleClick('/shelter')}>Shelter</li>
    </ul>
  );
}
export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
              <a href="https://www.instagram.com/agarwal.vidu?igsh=MWI4d3Jvb2locmVvcQ==" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill />
              </a>
              <a href="https://x.com/Vidushit143?t=QhDahpmDpE9ZuLXw0MujSA&s=08" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/vidushi-agarwal-8958-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>

            </div>
          </div>

         {/* Quick Links */}
<div className="footer-section">
  <h4>Quick Links</h4>
  <QuickLinks />
</div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link to="/about" onClick={handleScrollToTop}>About Us</Link></li>
              <li><Link to="/contact" onClick={handleScrollToTop}>Contact</Link></li>
              <li><Link to="/privacy" onClick={handleScrollToTop}>Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={handleScrollToTop}>Terms of Service</Link></li>
              <li><Link to="/help" onClick={handleScrollToTop}>Help Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="info">
              <div className="item">
                <MdEmail className="contact-icon" />
                <a href="mailto:hello@taara.org">hello@taara.org</a>
              </div>
              <div className="item">
                <MdPhone className="contact-icon" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
               <div className="item">
      <MdLocationOn className="contact-icon" />
      <a
        href="https://www.google.com/maps/search/?api=1&query=123+Innovation+Street,+Tech+City,+TC+12345"
        target="_blank"
        rel="noopener noreferrer"
      >
        123 Innovation Street, Tech City, TC 12345
      </a>

            </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Taara. All rights reserved.</p>
            <p>Designed & Developed by Team Taara</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
