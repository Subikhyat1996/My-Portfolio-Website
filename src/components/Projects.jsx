import React from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text mb-12">
            My Recent <span className="text-accent">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 + index * 0.15}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
