import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

import logo from '../assets/images/logo-digital-project.png';

const navLinks = [
  { to: '/', text: 'Main' },
  { to: '/gallery', text: 'Gallery' },
  { to: '/projects', text: 'Projects' },
  { to: '/certifications', text: 'Certifications' },
  { to: '/contact', text: 'Contacts' },
];

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <img src={logo} alt="Digital Project Logo" className="header-logo" />
        </Link>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.text}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;