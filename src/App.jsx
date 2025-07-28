import React from 'react';
import { Element } from 'react-scroll';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeProjectsSection from './components/HomeProjectsSection';
import GallerySection from './components/GallerySection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Element name="home_section">
          <HomeProjectsSection />
        </Element>
        <Element name="gallery_section">
          <GallerySection />
        </Element>
        <Element name="projects_section">
          <HomeProjectsSection />
        </Element>
        <Element name="certifications_section">
          <CertificationsSection />
        </Element>
        <Element name="contact_section">
          <ContactSection />
        </Element>
      </main>

      <Footer />
    </div>
  );
}

export default App;