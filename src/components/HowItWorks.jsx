import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Install once',
    story: 'Add the plugin and unlock every curated elevation in your Tailwind setup.',
    artifact: (
      <code className="font-mono text-[12px] sm:text-[13px] text-ink-soft">
        npm i @nevil5249/shadowcraft
      </code>
    ),
  },
  {
    step: '02',
    title: 'Choose the depth',
    story: 'Browse the library, compare elevations, and find the shadow that fits the surface.',
    artifact: (
      <div className="flex items-end gap-2 h-10">
        <div
          className="w-8 h-6 rounded-md bg-white"
          style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.04)' }}
        />
        <div
          className="w-8 h-8 rounded-md bg-white"
          style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.08)' }}
        />
        <div
          className="w-8 h-10 rounded-md bg-white"
          style={{
            boxShadow:
              '0 2px 4px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.06), 0 20px 32px rgba(0,0,0,0.08)',
          }}
        />
      </div>
    ),
  },
  {
    step: '03',
    title: 'Ship finished UI',
    story: 'Copy the class, CSS, or Tailwind value—and your interface already feels intentional.',
    artifact: (
      <code className="font-mono text-[12px] sm:text-[13px] text-ink-soft">
        className="shd-floating-modal"
      </code>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <div className="max-w-xl">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-3">
              Up and running in minutes
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              A short path from empty project to finished depth—no custom shadow system required.
            </p>
          </div>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/20 pb-0.5 hover:border-ink transition-colors self-start lg:self-auto"
          >
            Read the docs
            <ArrowRight size={15} />
          </Link>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8"
        >
          {/* Journey line — through badge centers (h-10 → top 20px) */}
          <div
            className="hidden lg:block absolute top-5 h-px bg-line z-0"
            style={{ left: 20, right: 'calc(33.333% - 20px)' }}
            aria-hidden="true"
          />

          {steps.map((item, index) => (
            <motion.li
              key={item.step}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-5 lg:mb-6">
                <span
                  className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white text-xs font-semibold tracking-wide"
                  style={{
                    boxShadow:
                      'rgba(255, 255, 255, 0.4) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.33) 0px 0.740973px 0.740973px -0.75px, rgba(0, 0, 0, 0.32) 0px 2.01787px 2.01787px -1.5px, rgba(0, 0, 0, 0.3) 0px 4.43051px 4.43051px -2.25px, rgba(0, 0, 0, 0.25) 0px 9.83471px 9.83471px -3px, rgba(0, 0, 0, 0.11) 0px 25px 25px -3.75px, rgb(130, 130, 130) 0px 0px 0px 1px',
                  }}
                >
                  {item.step}
                </span>
                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <span className="lg:hidden flex-1 h-px bg-line" aria-hidden="true" />
                )}
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-ink mb-2">
                {item.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-5 max-w-sm">
                {item.story}
              </p>

              <div className="inline-flex items-center min-h-12 rounded-xl bg-[#f6f6f5] border border-line px-4 py-3">
                {item.artifact}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default HowItWorks;
