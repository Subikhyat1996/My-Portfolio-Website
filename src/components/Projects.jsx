import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const fetchGitHubRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${portfolioData.githubUsername}/repos?sort=updated&per_page=100`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      
      // Gradient colors for cards
      const gradients = [
        'from-purple-600 to-blue-600',
        'from-pink-600 to-purple-600',
        'from-blue-600 to-cyan-600',
        'from-green-600 to-teal-600',
        'from-orange-600 to-red-600',
        'from-indigo-600 to-purple-600',
        'from-teal-600 to-green-600',
        'from-red-600 to-pink-600',
        'from-yellow-600 to-orange-600',
        'from-cyan-600 to-blue-600'
      ];

      // Filter and transform repos into project format
      const projects = data
        .filter(repo => !repo.fork) // Remove forked repos
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .map((repo, index) => ({
          id: repo.id,
          title: repo.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          description: repo.description || 'No description available',
          gradient: gradients[index % gradients.length],
          tags: [
            repo.language || 'Code',
            repo.private ? '🔒 Private' : '🌐 Public',
            ...(repo.topics?.slice(0, 2) || [])
          ].filter(Boolean),
          liveLink: repo.homepage || null,
          githubLink: repo.private ? null : repo.html_url,
          isPrivate: repo.private,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.updated_at,
          repoName: repo.name
        }));
      
      setRepos(projects);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching GitHub repos:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background via-surface/30 to-background relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/20">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-primary font-bold text-lg">GIT REPO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-text mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Repositories</span>
            </h2>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto">
              Explore my open-source contributions and personal projects
            </p>
          </div>
          
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-8 h-8 text-primary animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background via-surface/30 to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/20">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-primary font-bold text-lg">GIT REPO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-text mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Repositories</span>
            </h2>
          </div>
          <div className="text-center">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md mx-auto">
              <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-400 mb-4">Error loading repositories: {error}</p>
              <button
                onClick={fetchGitHubRepos}
                className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-background via-surface/30 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/20 backdrop-blur-sm">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-primary font-bold text-lg tracking-wider">GIT REPO</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-text mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">Repositories</span>
            </h2>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto">
              Explore my open-source contributions and personal projects from GitHub
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 + index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {repos.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 text-textSecondary/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-textSecondary text-lg">No repositories found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
