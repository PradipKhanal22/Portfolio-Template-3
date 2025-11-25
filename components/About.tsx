import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';
import { Code, Globe, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-heading font-bold mb-4 dark:text-white">
            Beyond the <span className="text-neonBlue">Code</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* Main Bio - Large Square */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 row-span-2 glass-panel p-8 rounded-3xl flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Passionate Full Stack Developer</h3>
              <p className="text-gray-400 leading-relaxed">
                I bridge the gap between design and technology. With a deep understanding of modern frameworks and a keen eye for aesthetics, I build applications that are not just functional, but delightful to use. I specialize in the React ecosystem, Node.js, and cloud architectures.
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-2 relative overflow-hidden rounded-3xl group"
          >
            <img 
              src="/me2.jpg" 
              alt="Profile" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <p className="text-white font-bold">Based in</p>
              <p className="text-neonBlue">Kawasoti, Nawalpur, Nepal</p>
            </div>
          </motion.div>

          {/* Stat Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-6 rounded-3xl flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors"
          >
            <div className="text-4xl font-bold text-electricPink mb-2 group-hover:scale-110 transition-transform">2+</div>
            <p className="text-sm text-gray-400">Years Experience</p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="glass-panel p-6 rounded-3xl flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-colors"
           >
            <div className="text-4xl font-bold text-cyanMint mb-2 group-hover:scale-110 transition-transform">50+</div>
            <p className="text-sm text-gray-400">Projects Done</p>
          </motion.div>

          {/* Tech Stack Mini */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-2 glass-panel p-6 rounded-3xl flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Favorite Stack</p>
              <div className="flex gap-4">
                {[Code, Globe, Coffee].map((Icon, i) => (
                  <div key={i} className="p-2 bg-white/10 rounded-lg text-white">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-neonBlue">Committed</p>
            </div>
          </motion.div>

          {/* Availability */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="col-span-1 md:col-span-2 glass-panel p-6 rounded-3xl flex items-center gap-4 bg-gradient-to-r from-neonBlue/20 to-transparent border border-neonBlue/30"
           >
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
              <div className="w-3 h-3 bg-green-500 rounded-full relative" />
            </div>
            <p className="text-white font-medium">Available for Freelance & Consulting</p>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;