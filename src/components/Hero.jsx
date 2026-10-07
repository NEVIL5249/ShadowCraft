import React, { useState } from 'react';
import { Copy, Check, ArrowRight, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { easeOut, springPop, HeroReveal } from '../lib/motion';

const presets = [
  {
    id: 'subtle',
    label: 'Subtle',
    shadow:
      '0 1px 2px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.03)',
  },
  {
    id: 'soft',
    label: 'Soft',
    shadow:
      '0 2px 4px rgba(0,0,0,0.03), 0 6px 14px rgba(0,0,0,0.05), 0 14px 28px rgba(0,0,0,0.05)',
  },
  {
    id: 'deep',
    label: 'Deep',
    shadow:
      '0 1px 2px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.06), 0 12px 24px rgba(0,0,0,0.08), 0 24px 40px rgba(0,0,0,0.06)',
  },
  {
    id: 'glass',
    label: 'Glass',
    shadow:
      'inset 0 1px 0 rgba(255,255,255,0.65), 0 0 0 1px rgba(0,0,0,0.05), 0 8px 20px rgba(0,0,0,0.06)',
  },
  {
    id: 'floating',
    label: 'Floating',
    shadow: `
      inset 0 1px #ffffff59,
      0 0 0 1px rgba(17, 17, 17, 0.06),
      0 0.75px 0.75px -0.75px rgba(0, 0, 0, 0.14),
      0 2px 2px -1.5px rgba(0, 0, 0, 0.12),
      0 4.5px 4.5px -2.25px rgba(0, 0, 0, 0.10),
      0 10px 14px -3px rgba(0, 0, 0, 0.09),
      0 24px 40px -10px rgba(0, 0, 0, 0.14),
      0 10px 24px -10px rgba(17, 17, 17, 0.16)
    `,
  },
  {
    id: 'inset',
    label: 'Inset',
    shadow:
      'inset 0 2px 4px rgba(0,0,0,0.06), inset 0 4px 10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.5)',
  },
];

const RevenueCard = ({ shadow, className = '' }) => (
  <div
    className={`rounded-2xl bg-white p-4 sm:p-5 lg:p-6 ${className}`}
    style={{ boxShadow: shadow }}
  >
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <p className="text-xs sm:text-[13px] font-medium text-[#6b7280]">Total Revenue</p>
      <button
        type="button"
        className="text-[#9ca3af] hover:text-[#6b7280] transition-colors"
        aria-label="More options"
      >
        <MoreHorizontal size={16} />
      </button>
    </div>

    <p className="text-[1.75rem] sm:text-[2rem] lg:text-[2.15rem] font-semibold tracking-tight text-[#111111] leading-none mb-3 sm:mb-4">
      $12,480
    </p>

    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#ecfdf5] px-2.5 py-1 text-[11px] sm:text-[12px] font-medium text-[#059669]">
      <ArrowUpRight size={12} strokeWidth={2.5} />
      <span className="sm:hidden">+12.4%</span>
      <span className="hidden sm:inline">12.4% vs last month</span>
    </div>
  </div>
);

const HeroHeadline = () => {
  const reduce = useReducedMotion();
  const line1 = ['Make', 'every', 'surface'];
  const line2 = ['feel', 'finished.'];

  if (reduce) {
    return (
      <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight leading-[1.08] mb-5">
        <span className="text-ink">Make every surface </span>
        <span className="text-[#828282]">feel finished.</span>
      </h1>
    );
  }

  return (
    <h1
      className="text-[2.6rem] sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight leading-[1.08] mb-5"
      aria-label="Make every surface feel finished."
    >
      <motion.span
        className="block"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } },
        }}
        aria-hidden="true"
      >
        {line1.map((word) => (
          <span key={word} className="inline-block overflow-hidden mr-[0.28em] align-bottom">
            <motion.span
              className="inline-block text-ink"
              variants={{
                hidden: { y: '110%' },
                visible: { y: '0%', transition: { duration: 0.7, ease: easeOut } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
      <motion.span
        className="block"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.055, delayChildren: 0.32 } },
        }}
        aria-hidden="true"
      >
        {line2.map((word) => (
          <span key={word} className="inline-block overflow-hidden mr-[0.28em] align-bottom last:mr-0">
            <motion.span
              className="inline-block text-[#828282]"
              variants={{
                hidden: { y: '110%' },
                visible: { y: '0%', transition: { duration: 0.7, ease: easeOut } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </h1>
  );
};

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState('subtle');
  const installCmd = 'npm install @nevil5249/shadowcraft';
  const active = presets.find((p) => p.id === activePreset) || presets[0];
  const reduce = useReducedMotion();

  const copyCommand = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative border-b border-line overflow-hidden hero-noise">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Left copy */}
          <div className="max-w-[34rem] lg:pt-4">
            <HeroReveal delay={0}>
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-5">
                Tailwind CSS shadow library
              </p>
            </HeroReveal>

            <HeroHeadline />

            <HeroReveal delay={0.42}>
              <p className="text-[16px] sm:text-[17px] text-[#6b7280] leading-relaxed mb-8 max-w-[28rem]">
                A curated Tailwind CSS shadow library for adding realistic, multi-layered depth to cards, inputs, modals, and modern interfaces.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.52}>
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                  <Link to="/library" className="btn-primary rounded-xl">
                    Explore library
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                  <Link to="/docs" className="btn-secondary rounded-xl">
                    Documentation
                  </Link>
                </motion.div>
              </div>
            </HeroReveal>

            <HeroReveal delay={0.62}>
              <button
                onClick={copyCommand}
                className="group inline-flex items-center gap-3 w-full sm:w-auto max-w-full rounded-xl border border-[#e7e7e5] bg-[#f3f3f1] px-4 py-3 text-left transition-colors hover:bg-[#efefed]"
              >
                <span className="font-mono text-[12px] sm:text-[13px] text-[#4b5563] truncate">{installCmd}</span>
                <span className="shrink-0 text-[#9ca3af] group-hover:text-ink transition-colors">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'check' : 'copy'}
                      initial={reduce ? false : { opacity: 0, scale: 0.6, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, scale: 0.6, y: -4 }}
                      transition={springPop}
                      className="inline-flex"
                    >
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
            </HeroReveal>
          </div>

          {/* Right demo */}
          <HeroReveal delay={0.18} y={28} className="w-full">
            <motion.div
              className="rounded-[22px] sm:rounded-[28px] bg-[#f6f6f5] border border-[#e4e4e2] p-3 sm:p-5 lg:p-6 overflow-hidden"
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: easeOut, delay: 0.22 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                <motion.div
                  className="rounded-2xl bg-[#f6f6f5] p-1 sm:p-2 lg:p-3"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: easeOut, delay: 0.35 }}
                >
                  <div className="mb-3 sm:mb-4">
                    <p className="text-sm sm:text-[15px] font-semibold text-ink leading-none mb-1">Before</p>
                    <p className="text-[12px] text-[#9ca3af]">No shadows</p>
                  </div>
                  <RevenueCard shadow="none" />
                </motion.div>

                <motion.div
                  className="rounded-2xl bg-[#f6f6f5] p-1 sm:p-2 lg:p-3"
                  initial={reduce ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: easeOut, delay: 0.45 }}
                >
                  <div className="mb-3 sm:mb-4">
                    <p className="text-sm sm:text-[15px] font-semibold text-ink leading-none mb-1">After</p>
                    <p className="text-[12px] text-[#9ca3af]">With ShadowCraft</p>
                  </div>
                  <motion.div layout={!reduce}>
                    <RevenueCard shadow={active.shadow} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Small devices: tabbing */}
            <motion.div
              className="mt-3 sm:mt-4 lg:hidden overflow-x-auto scrollbar-minimal"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.55 }}
            >
              <div className="inline-flex min-w-full sm:min-w-0 sm:flex sm:flex-wrap gap-1.5 p-1 rounded-xl bg-[#f3f3f1] border border-line">
                {presets.map((preset) => {
                  const isActive = preset.id === activePreset;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setActivePreset(preset.id)}
                      className={`shrink-0 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-ink text-white'
                          : 'bg-transparent text-muted hover:text-ink hover:bg-white/70'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Big devices: shadow preview buttons */}
            <motion.div
              className="mt-4 hidden lg:grid grid-cols-6 gap-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.55 } },
              }}
            >
              {presets.map((preset) => {
                const isActive = preset.id === activePreset;
                return (
                  <motion.button
                    key={preset.id}
                    type="button"
                    onClick={() => setActivePreset(preset.id)}
                    variants={{
                      hidden: { opacity: 0, y: 12, scale: 0.96 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.5, ease: easeOut },
                      },
                    }}
                    whileHover={reduce ? undefined : { y: -3 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    className={`rounded-2xl bg-[#f6f6f5] p-3 text-left transition-colors duration-200 ${
                      isActive
                        ? 'border-2 border-[#b0b0b0]'
                        : 'border-2 border-[#e8e8e6] hover:border-[#d4d4d4]'
                    }`}
                  >
                    <div
                      className="h-11 rounded-xl mb-2.5"
                      style={{
                        boxShadow: preset.shadow,
                        background:
                          preset.id === 'glass'
                            ? 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,245,245,0.85))'
                            : '#ffffff',
                      }}
                    />
                    <span className="block text-xs font-medium text-[#4b5563] truncate">
                      {preset.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
