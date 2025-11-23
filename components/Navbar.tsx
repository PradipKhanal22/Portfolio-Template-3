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
  { id: 'projects', label: 'Work' },
  { id: 'services', label: 'Services' },
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
            <span className="text-neonBlue">DEV</span>
            <span className={`${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>FOLIO</span>
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-darkBg/98 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-2xl font-heading font-medium text-left ${
                    activeSection === item.id ? 'text-neonBlue' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;