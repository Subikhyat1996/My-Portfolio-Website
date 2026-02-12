import React from 'react';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text mb-12">
            My <span className="text-secondary">Skills</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {portfolioData.skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={0.1 + index * 0.08}>
              <div className="flex flex-col items-center p-6 bg-background rounded-2xl shadow-lg border border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-primary">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-text text-center">{skill.name}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
