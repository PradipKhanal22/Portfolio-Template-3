import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Facebook, Download } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none" />
      
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-neonBlue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purpleGlow/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-electricPink/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neonBlue/30 bg-neonBlue/10 text-neonBlue text-xs font-semibold tracking-wide backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse" />
            OPEN TO NEW OPPORTUNITIES
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-[0.9] text-gray-900 dark:text-white tracking-tighter">
            Pradip <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-purpleGlow to-electricPink animate-gradient-x">
              Khanal
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed font-light">
            A passionate web developer specializing in crafting beautiful, functional digital experiences. I transform creative ideas into stunning, responsive websites that deliver exceptional user experiences and drive business growth.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-4 rounded-full bg-white dark:bg-white/10 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-white/10 hover:border-neonBlue transition-all shadow-lg hover:shadow-[0_0_30px_rgba(79,140,255,0.3)] overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/20 to-purpleGlow/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="px-8 py-4 rounded-full text-gray-600 dark:text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-2">
              <Download size={18} /> Resume
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
            <a href="https://github.com/PradipKhanal22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pradip-khanal-92a97333a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/pradip.khanal.7528" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neonBlue transition-colors transform hover:scale-110">
              <Facebook size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Abstract Shapes */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-dashed border-white/10 rounded-full"
            />
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute inset-10 border border-dashed border-white/10 rounded-full"
            />
            
            {/* Main Card */}
            <div className="absolute inset-12 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-grid-pattern opacity-20" />
               <img 
                 src="/me.jpg" 
                 alt="Pradip Khanal" 
                 className="w-full h-full object-cover relative z-0"
               />
            </div>

            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 p-4 glass-panel rounded-xl shadow-lg border-l-4 border-neonBlue"
            >
              <p className="text-xs text-gray-400 mb-1">Current Status</p>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> Online
              </p>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-4 p-4 glass-panel rounded-xl shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-electricPink/20 flex items-center justify-center text-electricPink">
                <span role="img" aria-label="handshake" className="text-xl">🤝</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">15+</p>
                <p className="text-sm font-bold text-white">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;