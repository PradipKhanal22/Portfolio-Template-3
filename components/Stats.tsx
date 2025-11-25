import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "100%", label: "Code Quality" }
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-cyanMint mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-400 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;