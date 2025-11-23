import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Neon Finance Dashboard",
    description: "A real-time crypto tracking dashboard featuring complex data visualization with D3.js and WebSockets.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "SaaS application leveraging Gemini Pro Vision for generating architectural concepts from rough sketches.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Next.js", "Gemini API", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "E-Commerce Glass",
    description: "A fully functional e-commerce platform with a unique glassmorphism design system.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["TypeScript", "Redux", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-4 dark:text-white">
              Selected <span className="text-electricPink">Works</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-lg">
              A curated selection of projects that demonstrate my technical expertise and design sensibilities.
            </motion.p>
          </div>
          <motion.button variants={itemVariants} className="flex items-center gap-2 text-neonBlue font-medium hover:gap-3 transition-all">
            View Github <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-panel rounded-3xl overflow-hidden transition-all duration-300 hover:border-neonBlue/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={project.link} className="p-3 bg-white rounded-full text-black hover:bg-neonBlue hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="p-3 bg-white rounded-full text-black hover:bg-electricPink hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-neonBlue transition-colors">{project.title}</h3>
                     <div className="h-1 w-12 bg-electricPink rounded-full mt-2" />
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;