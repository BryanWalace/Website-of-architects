import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import { projects } from '../data/projectData'; 

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">Our</p>
          <h1 className="section-title">Projects</h1>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <div className="project-list-item" key={project.id}>
              <div className="project-list-image">
                <img src={project.mainImage} alt={project.title} />
              </div>
              <div className="project-list-info">
                <h2 className="project-list-title">{project.title}</h2>
                <p className="project-list-description">{project.description}</p>
                <Link to={`/projects/${project.id}`} className="view-more-link">
                  VIEW MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pagination-controls">
          <span className="page-info"><strong>01</strong> / 05</span>
          <button className="nav-button">&larr;</button>
          <button className="nav-button">&rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;