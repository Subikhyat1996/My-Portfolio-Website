import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const getLanguageIcon = (language) => {
    const icons = {
      JavaScript: '', TypeScript: '', Python: '', Java: '',
      HTML: '', CSS: '', React: '', Vue: '', Angular: '',
      Node: '', PHP: '', Ruby: '', Go: '', Rust: '',
      'C++': '', 'C#': '', Swift: '', Kotlin: '', Dart: '',
      Shell: '', default: ''
    };
    return icons[language] || icons.default;
  };

  return (
    <motion.div
      className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-border/50 hover:border-primary/50 flex flex-col h-full transition-all duration-500"
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(158, 127, 255, 0.3)", y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none z-10"></div>
      
      <div className={`relative overflow-hidden p-8 bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`pattern-${project.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="text-6xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
            {getLanguageIcon(project.tags[0])}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${project.isPrivate ? 'bg-red-500/30 text-white border border-red-300/50' : 'bg-green-500/30 text-white border border-green-300/50'}`}>
            {project.isPrivate ? ' Private' : ' Public'}
          </div>
        </div>

        <div className="relative z-10">
          <code className="text-white/90 text-sm font-mono bg-black/20 px-3 py-1 rounded backdrop-blur-sm">{project.repoName}</code>
        </div>

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">{project.title}</h3>
        <p className="text-textSecondary text-sm mb-4 flex-grow leading-relaxed line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300">{tag}</span>
          ))}
        </div>
        
        {!project.isPrivate && (project.stars > 0 || project.forks > 0) && (
          <div className="flex items-center gap-4 text-sm text-textSecondary mb-5 pb-5 border-b border-border/50">
            {project.stars > 0 && (
              <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="font-semibold">{project.stars}</span>
              </div>
            )}
            {project.forks > 0 && (
              <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>
                <span className="font-semibold">{project.forks}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3 mt-auto">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 text-sm font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              Live
            </a>
          )}
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-background/80 backdrop-blur-sm text-text rounded-xl border-2 border-border hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Code
            </a>
          ) : (
            <button disabled className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/50 text-gray-500 rounded-xl border-2 border-gray-700/50 cursor-not-allowed text-sm font-semibold" title="Private repository - not accessible">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              Private
            </button>
          )}
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
