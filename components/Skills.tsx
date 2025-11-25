import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Box, Server, GitBranch, Github, Send } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML5', icon: Code, level: 95, category: 'Frontend' },
  { name: 'CSS', icon: Palette, level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Box, level: 92, category: 'Frontend' },
  { name: 'JavaScript', icon: Code, level: 88, category: 'Frontend' },
  { name: 'React', icon: Code, level: 90, category: 'Frontend' },
  { name: 'Laravel', icon: Server, level: 85, category: 'Backend' },
  { name: 'SQL', icon: Database, level: 87, category: 'Backend' },
  { name: 'SQLite', icon: Database, level: 85, category: 'Backend' },
  { name: 'Postman', icon: Send, level: 80, category: 'Tools' },
  { name: 'Git', icon: GitBranch, level: 88, category: 'Tools' },
  { name: 'GitHub', icon: Github, level: 88, category: 'Tools' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-4 dark:text-white">
            Technical <span className="text-neonBlue">Arsenal</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-neonBlue mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 rounded-2xl overflow-hidden transition-colors hover:border-neonBlue/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
                <div className="p-4 bg-white dark:bg-white/10 rounded-full shadow-sm text-neonBlue group-hover:text-electricPink transition-colors">
                  <skill.icon size={32} />
                </div>
                <h3 className="text-lg font-semibold dark:text-white group-hover:text-neonBlue transition-colors">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-neonBlue to-purpleGlow"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;