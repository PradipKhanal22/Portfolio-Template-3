import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';
import { Layout, Smartphone, Server, Cpu } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, pixel-perfect user interfaces with React, Next.js, and Tailwind CSS.",
    icon: Layout,
    color: "text-neonBlue"
  },
  {
    title: "Mobile Apps",
    description: "Creating cross-platform mobile experiences using React Native and Expo.",
    icon: Smartphone,
    color: "text-electricPink"
  },
  {
    title: "Backend Systems",
    description: "Designing scalable APIs and database architectures with Node.js, PostgreSQL, and GraphQL.",
    icon: Server,
    color: "text-purpleGlow"
  },
  {
    title: "AI Integration",
    description: "Leveraging LLMs like Gemini to add intelligent features and automation to web apps.",
    icon: Cpu,
    color: "text-cyanMint"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
            My <span className="text-purpleGlow">Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
            Specialized technical solutions tailored to your business needs.
          </motion.p>
        </motion.div>

        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={containerVariants}
           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:from-${service.color.split('-')[1]}/10 transition-colors`} />
              
              <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;