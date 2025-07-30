import React from 'react';
import './HomeProjectsSection.css';
import { Link } from 'react-router-dom';
import Button from './common/Button';

import projectImg1 from '../assets/images/image-p1.png';
import projectImg2 from '../assets/images/image-p2.png';
import projectImg3 from '../assets/images/image-p3.png';
import projectImg4 from '../assets/images/image-p4.png';
import projectImg5 from '../assets/images/image-p5.png';

const projects = [
  { id: 'p1', image: projectImg1, title: 'Sample Project', year: '2018-2024' },
  { id: 'p2', image: projectImg2 },
  { id: 'p3', image: projectImg3 },
  { id: 'p4', image: projectImg4 },
  { id: 'p5', image: projectImg5 },
];

function HomeProjectsSection() {
  return (
    <section className="home-projects-section">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Our Projects</h2>
        </div>

        <div className="home-projects-grid">
          {projects.map(p => (
            <div key={p.id} className={`project-item ${p.id}`} style={{ backgroundImage: `url(${p.image})` }}>
              {p.title && (
                <div className="project-overlay">
                  <h3>{p.title}</h3>
                  <p>{p.year}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="see-more-container">
          <Link to="/projects">
            <Button text="See More →" variant="primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeProjectsSection;