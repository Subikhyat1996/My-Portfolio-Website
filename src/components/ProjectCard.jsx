import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-surface rounded-2xl shadow-lg overflow-hidden border border-border flex flex-col h-full"
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(158, 127, 255, 0.4)" }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-text mb-3">{project.title}</h3>
        <p className="text-textSecondary text-base mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start gap-4 mt-auto">
          {project.liveLink && (
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2 bg-primary text-white rounded-xl hover:bg-accent transition-colors duration-300 text-sm font-medium"
            >
              Live Demo
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 bg-background text-textSecondary rounded-xl border border-border hover:border-primary hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              GitHub
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 3c-.52-1.33-2.06-2.8-4.3-2.8A5.44 5.44 0 0012 5.47C10.27 2.8 8.73 1.33 8.21 0c-.09.34-.17.67-.25 1-.14.4-.24.78-.3 1.18-.06.4-.09.78-.09 1.18A5.44 5.44 0 004 4.77a5.44 5.44 0 00-1.5 3.23c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
