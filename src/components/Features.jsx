import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="py-24 border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-100 shadow-ui-card"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            }}
            className="p-8 group bg-white transition-all hover:shadow-ui-nav"
          >
            <div className="text-[10px] font-bold text-blueprint-accent mb-4 tracking-tighter">01 // LAYERED</div>
            <h4 className="text-xl font-medium mb-4 uppercase tracking-tight">Technical Depth</h4>
            <p className="font-serif text-slate-500 text-sm leading-relaxed italic">
              Move beyond single-line CSS properties. Every shadow is a composite of multiple layers calculated for physical accuracy.
            </p>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            }}
            className="p-8 group bg-white transition-all hover:shadow-ui-nav"
          >
            <div className="text-[10px] font-bold text-blueprint-accent mb-4 tracking-tighter">02 // PERFORMANCE</div>
            <h4 className="text-xl font-medium mb-4 uppercase tracking-tight">Runtime Analysis</h4>
            <p className="font-serif text-slate-500 text-sm leading-relaxed italic">
              Benchmarked on modern rendering engines to ensure 60fps interaction even with complex, multi-layered occlusion.
            </p>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            }}
            className="p-8 group bg-white transition-all hover:shadow-ui-nav"
          >
            <div className="text-[10px] font-bold text-blueprint-accent mb-4 tracking-tighter">03 // EXPORT</div>
            <h4 className="text-xl font-medium mb-4 uppercase tracking-tight">Atomic Design</h4>
            <p className="font-serif text-slate-500 text-sm leading-relaxed italic">
              Export directly as Tailwind configuration objects or raw CSS custom properties for seamless architectural integration.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
