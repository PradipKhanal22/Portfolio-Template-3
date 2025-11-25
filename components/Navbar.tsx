import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 300;

      sections.forEach((section) => {
        if (section && 
            section.offsetTop <= scrollPosition && 
            (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-0 md:pt-6'}`}
      >
        <div className={`
          relative flex items-center justify-between px-6 transition-all duration-300
          ${scrolled 
            ? 'w-[95%] md:w-[800px] h-16 rounded-full glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-white/80 dark:bg-black/40' 
            : 'w-full max-w-7xl h-20 bg-transparent'
          }
        `}>
          
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold font-heading tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="text-neonBlue">PRA</span>
            <span className={`${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>DIP</span>
            <span className="text-electricPink">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-neonBlue'
                  }
                `}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-neonBlue to-purpleGlow rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
            
            <div className="w-px h-6 bg-gray-300 dark:bg-white/10 mx-2" />
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[75%] max-w-sm md:hidden bg-white dark:bg-gray-900 shadow-2xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-purpleGlow/5 to-electricPink/5" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-electricPink/10 rounded-full blur-3xl" />
              
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                  <div className="text-2xl font-bold font-heading tracking-tighter">
                    <span className="text-neonBlue">PRA</span>
                    <span className="text-gray-900 dark:text-white">DIP</span>
                    <span className="text-electricPink">.</span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <X size={24} className="text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto py-8 px-6">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollTo(item.id)}
                        className={`
                          w-full group relative px-6 py-4 rounded-2xl text-left transition-all duration-300 overflow-hidden
                          ${activeSection === item.id 
                            ? 'bg-gradient-to-r from-neonBlue to-purpleGlow text-white shadow-lg shadow-neonBlue/20' 
                            : 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold">{item.label}</span>
                          <motion.div
                            animate={{ x: activeSection === item.id ? 0 : -10, opacity: activeSection === item.id ? 1 : 0 }}
                            className="w-2 h-2 rounded-full bg-white"
                          />
                        </div>
                        
                        {/* Hover effect */}
                        {activeSection !== item.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 to-purpleGlow/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Theme</span>
                    <button 
                      onClick={toggleTheme}
                      className="relative p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all hover:scale-110"
                    >
                      <motion.div
                        initial={false}
                        animate={{ rotate: isDark ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isDark ? (
                          <Sun size={20} className="text-yellow-500" />
                        ) : (
                          <Moon size={20} className="text-indigo-600" />
                        )}
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;