import React from 'react';

import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';
import HomeProjectsSection from '../components/HomeProjectsSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <HomeProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;