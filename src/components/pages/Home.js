import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import DiagnosticsSection from '../DiagnosticsSection';
import BestProduct from '../BestProduct';
import ProductRange from '../ProductRange';
import ChatAISections from '../ChatAISections';

function Home() {
  return (
    <>
      <HeroSection />
      <DiagnosticsSection />
      <BestProduct />
      <ProductRange />
      <ChatAISections />
      <Footer />
    </>
  );
}

export default Home;
