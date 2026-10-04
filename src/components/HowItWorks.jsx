import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Install the plugin',
    detail: 'Add ShadowCraft to your project with a single npm command.',
  },
  {
    step: '02',
    title: 'Pick a shadow',
    detail: 'Browse curated elevations for cards, modals, inputs, and more.',
  },
  {
    step: '03',
    title: 'Drop it in',
    detail: 'Copy the class, CSS, or Tailwind value and ship polished depth.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-24 bg-surface border-b border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-3">
            Up and running in minutes
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Built for designers and engineers who want premium depth without a custom shadow system.
          </p>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((item) => (
            <motion.li
              key={item.step}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="rounded-2xl bg-white border border-line p-7 transition-shadow duration-300 hover:shadow-ui-soft"
            >
              <span className="font-mono text-xs font-medium tracking-widest text-muted mb-4 block">
                {item.step}
              </span>
              <h3 className="text-lg font-semibold text-ink mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">{item.detail}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default HowItWorks;
