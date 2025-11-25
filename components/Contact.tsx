import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Info */}
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold mb-6 dark:text-white">
              Let's Create <br />
              <span className="text-neonBlue">Something Amazing</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
              Have a project in mind? Looking for a consultant? Or just want to say hi? I'd love to hear from you.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "khanalpradip74@gmail.com", label: "Email" },
                { icon: MapPin, text: "Kawasoti-09, Nawalpur, Gandaki Province, Nepal", label: "Location" },
                { icon: Phone, text: "+977 9804453481", label: "Phone" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-neonBlue group-hover:text-neonBlue transition-all">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{item.label}</p>
                    <p className="font-medium dark:text-white">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div variants={itemVariants}>
            <form className="p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-gray-300">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all dark:text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium dark:text-gray-300">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all dark:text-white" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-gray-300">Subject</label>
                   <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all dark:text-white" placeholder="Project collaboration" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium dark:text-gray-300">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-neonBlue focus:ring-1 focus:ring-neonBlue outline-none transition-all dark:text-white resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-neonBlue to-purpleGlow text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(79,140,255,0.4)] transition-all transform hover:scale-[1.02]">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;