import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import ShadowCard from './ShadowCard';
import { shadows } from '../data/shadows';
import {
  Reveal,
  RevealWords,
  Stagger,
  fadeUp,
  fadeUpSoft,
  scaleIn,
  viewLoose,
} from '../lib/motion';

const ShadowGrid = () => {
  const reduce = useReducedMotion();

  const cards = [
    { shadow: shadows[0], span: 'md:col-span-7', padding: 'p-8 md:p-10', offset: '' },
    { shadow: shadows[1], span: 'md:col-span-5 md:mt-10', padding: 'p-8 md:p-10', offset: '' },
    { shadow: shadows[2], span: 'md:col-span-5', padding: 'p-8 md:p-10', variant: 'glass', offset: '' },
    { shadow: shadows[3], span: 'md:col-span-7', padding: 'p-8 md:p-12', offset: '' },
  ];

  return (
    <section className="py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 lg:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
              <RevealWords text="Explore the library" />
            </h2>
            <Reveal variants={fadeUpSoft} delay={0.06}>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Handcrafted elevations for cards, modals, inputs, and hero surfaces—ready to copy into your design system.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link to="/library" className="btn-primary shrink-0">
                View all shadows
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </Reveal>
        </div>

        <Stagger
          staggerChildren={0.1}
          delayChildren={0.05}
          viewport={viewLoose}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.shadow.id || card.shadow.name}
              variants={scaleIn}
              className={card.span}
              whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
            >
              <ShadowCard
                shadow={card.shadow}
                variant={card.variant}
                corner="none"
                padding={card.padding}
              />
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.08} className="flex justify-center mt-12">
          <Link
            to="/library"
            className="text-sm font-medium text-ink border-b border-ink/20 pb-0.5 hover:border-ink transition-colors"
          >
            Browse the full catalog
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ShadowGrid;
