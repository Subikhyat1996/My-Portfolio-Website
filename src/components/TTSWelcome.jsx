import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const TTSWelcome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Check if user has already heard the welcome message
    const played = localStorage.getItem('tts-welcome-played');
    if (played) {
      setShowPrompt(false);
    }
  }, []);

  const speak = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(portfolioData.welcomeScript);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        setIsPlaying(false);
        setHasPlayed(true);
        localStorage.setItem('tts-welcome-played', 'true');
        setTimeout(() => setShowPrompt(false), 2000);
      };
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const dismiss = () => {
    stopSpeech();
    setShowPrompt(false);
    localStorage.setItem('tts-welcome-played', 'true');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-primary to-accent p-6 rounded-2xl shadow-2xl max-w-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-2">
                {hasPlayed ? 'Thanks for listening!' : 'Welcome! 👋'}
              </h3>
              <p className="text-white/90 text-sm mb-4">
                {hasPlayed
                  ? 'Hope you enjoyed the introduction!'
                  : 'Would you like to hear about my work?'}
              </p>
              <div className="flex gap-2">
                {!hasPlayed && (
                  <button
                    onClick={isPlaying ? stopSpeech : speak}
                    className="flex-1 bg-white text-primary font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    {isPlaying ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Stop
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Play
                      </>
                    )}
                  </button>
                )}
                <button
                  onClick={dismiss}
                  className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
                >
                  {hasPlayed ? 'Close' : 'Skip'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TTSWelcome;
