import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "NutriCare FishOil",
    description: "A modern and conversion-focused product landing page designed for promoting Omega-3 Fish Oil supplements. Built with Laravel and Tailwind CSS, featuring product benefits, ingredients, customer testimonials, and optimized for SEO.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    tags: ["Laravel", "Tailwind CSS", "SEO", "Responsive"],
    link: "https://nutricarefishoil.com",
    github: "#"
  },
  {
    id: 2,
    title: "SmartHands Cleaning Services",
    description: "A complete service-based website for a professional cleaning company offering home, office, and commercial cleaning solutions. Includes service listings, pricing sections, and booking request system.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    tags: ["Laravel", "Tailwind CSS", "Booking System"],
    link: "https://smarthandscleaningservices.com",
    github: "#"
  },
  {
    id: 3,
    title: "OpenSky Travels",
    description: "A dynamic travel website for browsing and booking flights, rental cars, and holiday packages. Features search and filter functionality, package details, and user inquiry forms.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    tags: ["Laravel", "JavaScript", "Tailwind CSS"],
    link: "https://openskytravels.com",
    github: "#"
  },
  {
    id: 4,
    title: "Opera Educational Consulting",
    description: "A complete consultancy platform for students planning to study abroad in Australia, USA, Canada, and UK. Features programs, visa information, country guides, and appointment forms.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    tags: ["Laravel", "Tailwind CSS", "Forms"],
    link: "https://operaeducationalconsulting.com",
    github: "#"
  },
  {
    id: 5,
    title: "Chetana Electronics Store",
    description: "An eCommerce electronics website featuring product listings, categories, search & filter options, cart functionality, and admin-side product management for mobile phones and gadgets.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
    tags: ["Laravel", "Tailwind CSS", "SQL", "eCommerce"],
    link: "https://chetana.com",
    github: "#"
  },
  {
    id: 6,
    title: "LICT College Website",
    description: "A fully informational website for an academic institution including About, Programs, Admission Information, Notices, Events, Faculty Profiles, and Contact Details.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    tags: ["Laravel", "Tailwind CSS", "Educational"],
    link: "https://lict.edu.np",
    github: "#"
  },
  {
    id: 7,
    title: "Bubblebest Painting Services",
    description: "A professional painting service website for residential, commercial, and industrial needs. Features service categories, project galleries, pricing estimates, and booking system.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    tags: ["Laravel", "Tailwind CSS", "Portfolio"],
    link: "https://bubblebest.com",
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
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
              Selected <span className="text-electricPink">Works</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-lg">
              A curated selection of projects that demonstrate my technical expertise and design sensibilities.
            </motion.p>
          </div>
          <motion.a
            variants={itemVariants}
            href="https://github.com/PradipKhanal22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neonBlue font-medium hover:gap-3 transition-all"
          >
            View Github <ArrowUpRight size={20} />
          </motion.a>
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
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-black hover:bg-neonBlue hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {project.github !== "#" && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-black hover:bg-electricPink hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-neonBlue transition-colors">{project.title}</h3>
                     <div className="h-1 w-12 bg-electricPink rounded-full mt-2" />
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-200 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-white/10">
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