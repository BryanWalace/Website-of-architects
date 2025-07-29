import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import logoFooter from '../assets/images/logo-digital-project-white.png';
import iconAddress from '../assets/icons/location.svg';
import iconPhone from '../assets/icons/phone.svg';
import iconEmail from '../assets/icons/email.svg';
import iconFacebook from '../assets/icons/facebook.svg';
import iconTwitter from '../assets/icons/twitter.svg';
import iconLinkedin from '../assets/icons/LinkedIn.svg';
import iconPinterest from '../assets/icons/pinterest.svg';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src={logoFooter} alt="Digital Project Logo" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Information</h3>
          <ul className="footer-links">
            <li><Link to="/">Main</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Contacts</h3>
          <ul className="footer-contact-info">
            <li>
              <img src={iconAddress} alt="Address" className="contact-icon" />
              <span>1234 Sample Street<br/>Austin, Texas 78704</span>
            </li>
            <li>
              <img src={iconPhone} alt="Phone" className="contact-icon" />
              <span>512.333.2222</span>
            </li>
            <li>
              <img src={iconEmail} alt="Email" className="contact-icon" />
              <span>sampleemail@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={iconFacebook} alt="Facebook" /></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src={iconTwitter} alt="Twitter" /></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src={iconLinkedin} alt="LinkedIn" /></a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><img src={iconPinterest} alt="Pinterest" /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;