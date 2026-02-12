import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

// ==========================================
// EMAILJS CONFIGURATION
// Get your credentials from https://dashboard.emailjs.com/admin
// ==========================================
const EMAILJS_CONFIG = {
  serviceId: 'service_j0ynp1c',
  templateId: 'template_xb2rx5j',
  publicKey: 'Bq7C0JQjnS38V1t7p',
};
// ==========================================

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'loading', ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || 
        EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
      // Fallback to simulated submission for development
      console.warn('EmailJS is not configured. Using simulated submission.');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: portfolioData.contact.email,
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text mb-12">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.3} className="md:order-2">
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-2xl shadow-glow-primary border border-border">
              <div className="mb-6">
                <label htmlFor="name" className="block text-text text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-text text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-text text-lg font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 resize-y"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-center text-success">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-center text-error">Failed to send message. Please try again.</p>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="md:order-1 text-center md:text-left">
            <p className="text-lg text-textSecondary mb-6">
              Have a project in mind or just want to say hello? Feel free to reach out! I'm always open to new opportunities and collaborations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start text-text">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-primary transition-colors duration-200">
                  {portfolioData.contact.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-text">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href={`tel:${portfolioData.contact.phone}`} className="hover:text-primary transition-colors duration-200">
                  {portfolioData.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              {portfolioData.contact.linkedin && (
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text hover:text-primary transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/30/A3A3A3/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:filter-none filter invert" />
                </a>
              )}
              {portfolioData.contact.github && (
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text hover:text-primary transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/30/A3A3A3/github.png" alt="GitHub" className="w-8 h-8 hover:filter-none filter invert" />
                </a>
              )}
              {portfolioData.contact.twitter && (
                <a href={portfolioData.contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-text hover:text-primary transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/30/A3A3A3/twitterx.png" alt="Twitter" className="w-8 h-8 hover:filter-none filter invert" />
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
