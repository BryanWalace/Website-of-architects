import React from 'react';
import './HeroSection.css';
import Button from './common/Button';
import { Link } from 'react-router-dom';

import heroImage from '../assets/images/hero-building.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-text-column">
          <div className="hero-title-block">
            <p className="hero-subtitle">PROJECT</p>
            <h1 className="hero-title">Lorum</h1>
          </div>
          <div className="hero-controls">
            <button className="control-button">&larr;</button>
            <div className="pagination-numbers">
              <span>01</span> / <span>02</span>
            </div>
            <button className="control-button">&rarr;</button>
          </div>
        </div>

        <div className="hero-image-column">
          <img src={heroImage} alt="Modern architectural building" />
          <div className="view-project-button">
            <Link to="/projects">
              <Button text="View Project →" variant="secondary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;