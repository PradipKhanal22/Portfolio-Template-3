import React from 'react';

const testimonials = [
  { name: "Sarah L.", role: "CEO, TechFlow", text: "Incredible attention to detail. The neon aesthetics completely transformed our brand identity." },
  { name: "Mark D.", role: "CTO, StartUp", text: "Delivered complex AI integration weeks ahead of schedule. Highly recommended!" },
  { name: "James K.", role: "Product Manager", text: "The glassmorphism UI feels so premium. Our users love the new dashboard." },
  { name: "Emily R.", role: "Founder, ArtSpace", text: "A true artist who codes. The animations are buttery smooth." },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-white dark:bg-transparent">
       <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white dark:from-darkBg to-transparent z-10" />
       <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white dark:from-darkBg to-transparent z-10" />
       
       <div className="mb-12 text-center">
         <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white">Client <span className="text-cyanMint">Stories</span></h2>
       </div>

      <div className="flex w-max animate-scroll gap-6">
        {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
          <div key={idx} className="w-[350px] glass-panel p-6 rounded-2xl flex-shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neonBlue to-purpleGlow" />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{item.name}</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm italic">"{item.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;