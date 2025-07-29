import React from 'react';
import './GalleryPage.css';

import galleryImg1 from '../assets/images/image-g1.png';
import galleryImg2 from '../assets/images/image-g2.png';
import galleryImg3 from '../assets/images/image-g3.png';
import galleryImg4 from '../assets/images/image-g4.png';
import galleryImg5 from '../assets/images/image-g5.png';
import galleryImg6 from '../assets/images/image-g6.png';
import galleryImg7 from '../assets/images/image-g7.png';
import galleryImg8 from '../assets/images/image-g8.png';
import galleryImg9 from '../assets/images/image-g9.png';  
import galleryImg10 from '../assets/images/image-g10.png';

const galleryImages = [
  { id: 'g1', image: galleryImg1, title: 'Gallery'},
  { id: 'g2', image: galleryImg2 },
  { id: 'g3', image: galleryImg3 },
  { id: 'g4', image: galleryImg4 },
  { id: 'g5', image: galleryImg5 },
  { id: 'g6', image: galleryImg6 },
  { id: 'g7', image: galleryImg7 },
  { id: 'g8', image: galleryImg8 },
  { id: 'g9', image: galleryImg9 },
  { id: 'g10', image: galleryImg10 },
];

function GalleryPage() {
  return (
    <div className="gallery-page">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">Photo</p>
          <h1 className="section-title">Gallery</h1>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
             <div className="gallery-item" key={item.id}>
              <img src={item.image} alt={`Gallery item ${item.id}`} />
            </div>
          ))}

        </div>

        <div className="pagination-controls">
          <span className="page-info">
            <strong>01</strong> / 05
          </span>
          <button className="nav-button">&larr;</button>
          <button className="nav-button">&rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;