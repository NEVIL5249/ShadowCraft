import React from 'react';
import { Layers, Zap, Code2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Reveal,
  RevealWords,
  Stagger,
  fadeUp,
  fadeUpSoft,
  popIn,
  springSoft,
} from '../lib/motion';

const iconShadow = `
  inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4),
  0px 0.7409732186279143px 0.7409732186279143px -0.75px rgba(0, 0, 0, 0.33),
  0px 2.0178668455264415px 2.0178668455264415px -1.5px rgba(0, 0, 0, 0.32),
  0px 4.430505261661892px 4.430505261661892px -2.25px rgba(0, 0, 0, 0.3),
  0px 9.834710084098335px 9.834710084098335px -3px rgba(0, 0, 0, 0.25),
  0px 25px 25px -3.75px rgba(0, 0, 0, 0.11),
  0px 0px 0px 1px rgb(130, 130, 130)
`;

const features = [
  {
    icon: Layers,
    title: 'Multi-layer depth',
    description:
      'Every shadow is a carefully stacked composite—soft contact, mid penumbra, and ambient falloff—so surfaces feel physical.',
  },
  {
    icon: Zap,
    title: 'Built for production',
    description:
      'Lightweight utilities tuned for modern rendering. Drop them into Tailwind and ship without fighting default shadows.',
  },
  {
    icon: Code2,
    title: 'Copy what you need',
    description:
      'Use class names, raw CSS, or Tailwind arbitrary values. Integrate in React, Next.js, or plain HTML in minutes.',
  },
];

const Features = () => {
  const reduce = useReducedMotion();

  return (
    <section className="py-24 lg:py-28 bg-white border-y border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
            <RevealWords text="Depth that feels intentional" />
          </h2>
          <Reveal variants={fadeUpSoft} delay={0.06}>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Stop guessing box-shadow values. ShadowCraft gives you a curated system for elevation, insets, and floating UI.
            </p>
          </Reveal>
        </div>

        <Stagger
          staggerChildren={0.12}
          delayChildren={0.04}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeUp} className="group">
                <motion.div
                  variants={popIn}
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white"
                  style={{ boxShadow: iconShadow }}
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -3, rotate: -3, transition: springSoft }
                  }
                >
                  <Icon size={20} strokeWidth={1.75} />
                </motion.div>
                <h3 className="text-lg font-semibold text-ink mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Features;
