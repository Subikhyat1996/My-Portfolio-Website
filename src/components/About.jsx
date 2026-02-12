import React from 'react';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text mb-12">
            About <span className="text-primary">Me</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal delay={0.3} className="md:w-1/3 flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-glow-primary border-4 border-primary">
              <img
                src="subi.png"
                alt="subikhyat sourav"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="md:w-2/3 text-center md:text-left">
            <p className="text-lg md:text-xl text-textSecondary leading-relaxed mb-6">
              {portfolioData.bio}
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-primary transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/50"
            >
              Let's Connect
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
