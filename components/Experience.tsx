import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import { ExperienceItem } from '../types';

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechNova Corp",
    period: "2022 - Present",
    description: "Leading the migration to React 18, implementing Micro-frontends, and optimizing core web vitals by 40%."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Creative Studio",
    period: "2020 - 2022",
    description: "Built scalable APIs using Node.js and delivered 15+ interactive websites for high-profile clients."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/10">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purpleGlow/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-3xl font-heading font-bold mb-10 flex items-center gap-3 dark:text-white">
            <Briefcase className="text-neonBlue" /> Experience
          </h3>
          
          <div className="space-y-6">
            {experience.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="group relative pl-8 border-l border-white/10 hover:border-neonBlue transition-colors">
                <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-darkBg border border-neonBlue shadow-[0_0_8px_#4f8cff]" />
                <div className="glass-panel p-6 rounded-2xl transition-all duration-300 group-hover:translate-x-2">
                  <span className="text-xs text-neonBlue font-mono mb-2 block tracking-wider uppercase">{item.period}</span>
                  <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                  <p className="text-purpleGlow font-medium text-sm mb-4">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-3xl font-heading font-bold mb-10 flex items-center gap-3 dark:text-white">
            <GraduationCap className="text-electricPink" /> Education
          </h3>
          
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="group relative pl-8 border-l border-white/10 hover:border-electricPink transition-colors">
              <span className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-darkBg border border-electricPink shadow-[0_0_8px_#ff4f81]" />
              <div className="glass-panel p-6 rounded-2xl transition-all duration-300 group-hover:translate-x-2">
                <span className="text-xs text-electricPink font-mono mb-2 block tracking-wider uppercase">2016 - 2020</span>
                <h4 className="text-xl font-bold text-white mb-1">BS Computer Science</h4>
                <p className="text-gray-400 text-sm">University of Technology</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;