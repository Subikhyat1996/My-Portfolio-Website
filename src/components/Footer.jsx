import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          {portfolioData.contact.linkedin && (
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-textSecondary hover:text-primary transition-colors duration-300">
              <img src="https://img.icons8.com/ios-filled/30/A3A3A3/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:filter-none filter invert" />
            </a>
          )}
          {portfolioData.contact.github && (
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-textSecondary hover:text-primary transition-colors duration-300">
              <img src="https://img.icons8.com/ios-filled/30/A3A3A3/github.png" alt="GitHub" className="w-8 h-8 hover:filter-none filter invert" />
            </a>
          )}
          {portfolioData.contact.twitter && (
            <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-textSecondary hover:text-primary transition-colors duration-300">
              <img src="https://img.icons8.com/ios-filled/30/A3A3A3/twitterx.png" alt="Twitter" className="w-8 h-8 hover:filter-none filter invert" />
            </a>
          )}
        </div>
        <p className="text-textSecondary text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
        <p className="text-textSecondary text-xs mt-2">
          Designed and Built  <span className="text-accent">&hearts;</span> by subikhyat sourav
        </p>
      </div>
    </footer>
  );
};

export default Footer;
