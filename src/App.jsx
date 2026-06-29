import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import Reviews from './components/Reviews';
import QuoteCalculator from './components/QuoteCalculator';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <BeforeAfter />
        <Services />
        <WorkGallery />
        <Reviews />
        <QuoteCalculator />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
