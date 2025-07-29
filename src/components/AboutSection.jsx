import React from 'react';
import './AboutSection.css';
import Button from './common/Button';

import aboutImg1 from '../assets/images/about-1.png';
import aboutImg2 from '../assets/images/about-2.png';
import aboutImg3 from '../assets/images/about-3.png';


function AboutSection() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-images-grid">
          <img src={aboutImg1} alt="Architectural detail 1" className="about-img-1" />
          <img src={aboutImg2} alt="Architectural detail 2" className="about-img-2" />
          <img src={aboutImg3} alt="Architectural detail 3" className="about-img-3" />
        </div>

        <div className="about-text-content">
          <h2 className="about-title">About</h2>
          <p className="about-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Button text="Read More →" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;