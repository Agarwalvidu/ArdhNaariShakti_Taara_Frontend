import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./contact.css"; // Optional: if you want to style separately

export const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We would love to hear from you!</p>

      {/* Contact Info */}
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

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};