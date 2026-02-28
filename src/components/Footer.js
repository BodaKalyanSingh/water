import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">💧 Ashwini Water Solutions</span>
          <p>Pure water for every home and business. Trusted across the region for quality, service, and reliability.</p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/brands">Our Brands</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+919177576617">+91 91775 76617</a>
          <a href="tel:+919177576617">+91 91775 76617</a>
          <a href="mailto:suman.guguloth06@gmail.com">suman.guguloth06@gmail.com</a>
          <span>Hanmakonda, Telangana</span>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <span>RO Water Purifiers</span>
          <span>UV Purification</span>
          <span>AMC & Maintenance</span>
          <span>Installation Support</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Ashwini Water Solutions. All rights reserved.</span>
          <span>Made with care for pure water</span>
        </div>
      </div>
    </footer>
  );
}
