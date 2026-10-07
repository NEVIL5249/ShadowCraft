import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Reveal,
  RevealWords,
  Stagger,
  fadeUp,
  fadeUpSoft,
  easeOut,
  viewOnce,
} from '../lib/motion';

const ctaShadow = `
  inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4),
  0px 0.7409732186279143px 0.7409732186279143px -0.75px rgba(0, 0, 0, 0.33),
  0px 2.0178668455264415px 2.0178668455264415px -1.5px rgba(0, 0, 0, 0.32),
  0px 4.430505261661892px 4.430505261661892px -2.25px rgba(0, 0, 0, 0.3),
  0px 9.834710084098335px 9.834710084098335px -3px rgba(0, 0, 0, 0.25),
  0px 25px 25px -3.75px rgba(0, 0, 0, 0.11),
  0px 0px 0px 1px rgb(130, 130, 130)
`;

const CTA = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.08), transparent 55%)',
        }}
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewOnce}
        transition={{ duration: 1.1, ease: easeOut }}
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-5 text-white">
          <RevealWords text="Ship interfaces with real depth" />
        </h2>

        <Reveal variants={fadeUpSoft} delay={0.08}>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Install ShadowCraft, pick a shadow, and give every surface the polish of a premium product UI.
          </p>
        </Reveal>

        <Stagger
          staggerChildren={0.1}
          delayChildren={0.12}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.div variants={fadeUp} whileHover={reduce ? undefined : { y: -3 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              to="/library"
              className="inline-flex items-center justify-center gap-2 bg-white text-ink px-7 py-3.5 text-sm font-medium tracking-wide rounded-lg w-full sm:w-auto transition-colors duration-300 hover:bg-neutral-100"
              style={{ boxShadow: ctaShadow }}
            >
              Start free
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} whileHover={reduce ? undefined : { y: -3 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium tracking-wide rounded-lg w-full sm:w-auto transition-colors duration-300 hover:bg-white/5 hover:border-white/35"
            >
              Read the docs
            </Link>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
};

export default CTA;
