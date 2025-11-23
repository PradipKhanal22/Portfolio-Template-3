import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} NeonGlass Portfolio. Built with React, Tailwind & Gemini.
        </p>
      </div>
    </footer>
  );
};

export default Footer;