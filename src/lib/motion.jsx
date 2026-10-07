import { motion, useReducedMotion } from 'motion/react';

export const easeOut = [0.16, 1, 0.3, 1];
export const easeOutSoft = [0.22, 1, 0.36, 1];

export const springSoft = { type: 'spring', stiffness: 140, damping: 20, mass: 0.9 };
export const springPop = { type: 'spring', stiffness: 280, damping: 22, mass: 0.75 };

export const viewOnce = { once: true, margin: '-12% 0px -8% 0px', amount: 0.25 };
export const viewLoose = { once: true, margin: '-6% 0px', amount: 0.15 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springPop,
  },
};

export const slideMask = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

function motionTag(Tag) {
  if (typeof Tag === 'string' && motion[Tag]) return motion[Tag];
  if (typeof Tag === 'function' || typeof Tag === 'object') {
    return motion.create(Tag);
  }
  return motion.div;
}

/** Section header / block that reveals on scroll */
export function Reveal({
  children,
  className,
  as: Tag = 'div',
  variants = fadeUp,
  delay = 0,
  viewport = viewOnce,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = motionTag(Tag);

  if (reduce) {
    const Static = typeof Tag === 'string' ? Tag : 'div';
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  const delayed =
    delay > 0
      ? {
          hidden: variants.hidden,
          visible: {
            ...variants.visible,
            transition: {
              ...(variants.visible?.transition || { duration: 0.7, ease: easeOut }),
              delay,
            },
          },
        }
      : variants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={delayed}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container for children with variants */
export function Stagger({
  children,
  className,
  as: Tag = 'div',
  staggerChildren = 0.1,
  delayChildren = 0,
  viewport = viewOnce,
  ...props
}) {
  const reduce = useReducedMotion();
  const MotionTag = motionTag(Tag);

  if (reduce) {
    const Static = typeof Tag === 'string' ? Tag : 'div';
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(staggerChildren, delayChildren)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

/** Word-by-word masked reveal — modern editorial feel */
export function RevealWords({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.045,
  as: Tag = 'span',
}) {
  const reduce = useReducedMotion();
  const words = String(text).split(' ');

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={viewOnce}
        variants={stagger(staggerChildren, delay)}
        aria-hidden="true"
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0">
            <motion.span className="inline-block will-change-transform" variants={slideMask}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/** Hero entrance (above the fold — animate on mount) */
export function HeroReveal({
  children,
  className,
  delay = 0,
  y = 22,
  ...props
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
