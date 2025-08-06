import React from 'react';
import { Toaster } from 'react-hot-toast';
import MatrixBackground from './components/MatrixBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import ThreatSection from './components/ThreatCard';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <div id="threats">
          <ThreatSection />
        </div>
        <div id="stats">
          <StatsSection />
        </div>
        <PricingSection />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a1a',
            color: '#ffffff',
            border: '1px solid #00d4ff',
          },
          success: {
            iconTheme: {
              primary: '#00ff88',
              secondary: '#1a1a1a',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff0040',
              secondary: '#1a1a1a',
            },
          },
        }}
      />
    </div>
  );
}

export default App; 