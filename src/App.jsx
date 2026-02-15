import React, { createContext, useContext, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVPreview from './components/CVPreview';
import TTSWelcome from './components/TTSWelcome';
import { portfolioData } from './data/portfolioData';

// Create context for CV preview
const CVPreviewContext = createContext();

export const useCVPreview = () => useContext(CVPreviewContext);

function App() {
  const [showCVPreview, setShowCVPreview] = useState(false);

  const openCVPreview = () => {
    if (portfolioData.cv) {
      setShowCVPreview(true);
    }
  };

  const closeCVPreview = () => {
    setShowCVPreview(false);
  };

  return (
    <CVPreviewContext.Provider value={{ openCVPreview, closeCVPreview }}>
      <div className="min-h-screen bg-background font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <CVPreview 
          cvUrl={portfolioData.cv} 
          isOpen={showCVPreview} 
          onClose={closeCVPreview} 
        />
        <TTSWelcome />
        <Analytics />
      </div>
    </CVPreviewContext.Provider>
  );
}

export default App;
