import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import DiagnosticsSection from '../DiagnosticsSection';
import AIOverview from '../AIOverview';

function Home() {
  return (
    <>
      <HeroSection />
      <DiagnosticsSection />
      <AIOverview />
      <Footer />
    </>
  );
}

export default Home;
