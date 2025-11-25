import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-darkBg">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="space-y-0">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;