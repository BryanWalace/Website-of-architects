import React from 'react';
import { Link } from 'react-scroll'; // Link do react-scroll
import './Header.css';

import logo from '../assets/images/logo-digital-project.png';

const navLinks = [
  { to: 'home_section', text: 'Main' },
  { to: 'gallery_section', text: 'Gallery' },
  { to: 'projects_section', text: 'Projects' },
  { to: 'certifications_section', text: 'Certifications' },
  { to: 'contact_section', text: 'Contacts' },
];

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="home_section" smooth={true} duration={500} className="header-logo-link">
          <img src={logo} alt="Digital Project Logo" className="header-logo" />
        </Link>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              activeClass="active"
              to={link.to}
              spy={true}          // rolagem para saber qual seção está na tela
              smooth={true}       // Animação de rolagem suave
              duration={500}      // Duração da animação
              offset={-80}        // Deslocamento para compensar a altura do header
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;