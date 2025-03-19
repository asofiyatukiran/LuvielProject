import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import DiagnosticsSection from '../DiagnosticsSection';
import BestProduct from '../BestProduct';
import AIOverview from '../AIOverview';

function Home() {
  return (
    <>
      <HeroSection />
      <DiagnosticsSection />
      <BestProduct />
      <AIOverview />
      <Footer />
    </>
  );
}

export default Home;
