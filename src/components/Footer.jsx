// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

import logoFooter from '../assets/images/logo-digital-project.png';
import iconAddress from '../assets/icons/location.svg';
import iconPhone from '../assets/icons/phone.svg';
import iconEmail from '../assets/icons/email.svg';
import iconFacebook from '../assets/icons/facebook.svg';
import iconTwitter from '../assets/icons/twitter.svg';
import iconLinkedin from '../assets/icons/linkedin.svg';
import iconPinterest from '../assets/icons/pinterest.svg';

function Footer() {
  return (
    <footer className="footer-fixed">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <img src={logoFooter} alt="Digital Project Logo" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Information</h3>
          <ul className="footer-links">
            <li><Link to="home_section" smooth={true} duration={500}>Main</Link></li>
            <li><Link to="gallery_section" smooth={true} duration={500}>Gallery</Link></li>
            <li><Link to="projects_section" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="certifications_section" smooth={true} duration={500}>Certifications</Link></li>
            <li><Link to="contact_section" smooth={true} duration={500}>Contacts</Link></li>
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
            <li><a href="https://facebook.com"><img src={iconFacebook} alt="Facebook" /></a></li>
            <li><a href="https://twitter.com"><img src={iconTwitter} alt="Twitter" /></a></li>
            <li><a href="https://linkedin.com"><img src={iconLinkedin} alt="LinkedIn" /></a></li>
            <li><a href="https://pinterest.com"><img src={iconPinterest} alt="Pinterest" /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;