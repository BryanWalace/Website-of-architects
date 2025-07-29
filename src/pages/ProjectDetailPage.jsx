import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectData';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
  const { projectId } = useParams();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div className="project-not-found"><h1>Project not found!</h1></div>;
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">Sample</p>
          <h1 className="section-title">{project.title}</h1>
        </div>

        <img src={project.mainImage} alt={project.title} className="detail-main-image" />

        <div className="detail-content-grid">
          <img src={project.detailImage1} alt="Detail 1" className="detail-side-image" />
          <p className="detail-description">
            {project.description} <br/><br/> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="detail-images">        
            <img src={project.blueprintImage1} alt="Blueprint" className="blueprint-image" />
      </div>
    </div>
    </div>
  );
}

export default ProjectDetailPage;