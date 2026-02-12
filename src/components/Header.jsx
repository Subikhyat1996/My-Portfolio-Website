import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { useCVPreview } from '../App';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCVPreview } = useCVPreview();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const handleCVClick = () => {
    openCVPreview();
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300">
          {portfolioData.name.split(' ')[0]}<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-text text-lg hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          {portfolioData.cv && (
            <button
              onClick={handleCVClick}
              className="inline-flex items-center px-5 py-2 bg-primary text-white rounded-xl hover:bg-accent hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 text-sm font-medium cursor-pointer"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              View CV
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-md shadow-lg py-4 border-t border-border"
          >
            <ul className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-text text-lg hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {portfolioData.cv && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCVClick}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-accent hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 font-medium cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  View CV
                </button>
              </div>
            )}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
