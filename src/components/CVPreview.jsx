import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CVPreview = ({ cvUrl, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && cvUrl && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-10 bg-surface rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
              <h3 className="text-xl font-bold text-text">CV Preview</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-textSecondary hover:text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* PDF Container */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${cvUrl}#toolbar=0`}
                className="w-full h-full"
                title="CV Preview"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-background border-t border-border flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2 text-textSecondary hover:text-text transition-colors duration-200"
              >
                Close
              </button>
              <a
                href={cvUrl}
                download
                className="px-6 py-2 bg-primary text-white rounded-xl hover:bg-accent transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVPreview;
