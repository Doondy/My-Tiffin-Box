import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        {/* About Section */}
        <div className="footer-about">
          <h3>
            Tiffin<span>Box</span>
          </h3>
          <p>
            Homemade food made with love. Affordable, nutritious, and freshly delivered to your workplace or home every day.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/order">Order</Link></li> {/* Fixed link */}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@tiffinbox.in</p>
          <p>Phone: +91 9502261900</p>
          <p>Address: Sector-75, Eat Street, Bangalore, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TiffinBox — All Rights Reserved. By Chandolu Doondy Sai Krishna</p>
      </div>
    </footer>
  );
}