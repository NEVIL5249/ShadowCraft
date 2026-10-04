import React, { useState } from 'react';
import { Copy, Check, ArrowRight, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState('subtle');
  const installCmd = 'npm install @nevil5249/shadowcraft';
  const active = presets.find((p) => p.id === activePreset) || presets[0];

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
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[34rem] lg:pt-4"
          >
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-5">
              Tailwind CSS shadow library
            </p>

            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.35rem] font-semibold tracking-tight leading-[1.08] mb-5">
              <span className="text-ink">Make every surface </span>
              <span className="text-[#828282]">feel finished.</span>
            </h1>

            <p className="text-[16px] sm:text-[17px] text-[#6b7280] leading-relaxed mb-8 max-w-[28rem]">
              A curated Tailwind CSS shadow library for adding realistic, multi-layered depth to cards, inputs, modals, and modern interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <Link to="/library" className="btn-primary rounded-xl">
                Explore library
                <ArrowRight size={16} />
              </Link>
              <Link to="/docs" className="btn-secondary rounded-xl">
                Documentation
              </Link>
            </div>

            <button
              onClick={copyCommand}
              className="group inline-flex items-center gap-3 w-full sm:w-auto max-w-full rounded-xl border border-[#e7e7e5] bg-[#f3f3f1] px-4 py-3 text-left transition-colors hover:bg-[#efefed]"
            >
              <span className="font-mono text-[12px] sm:text-[13px] text-[#4b5563] truncate">{installCmd}</span>
              <span className="shrink-0 text-[#9ca3af] group-hover:text-ink transition-colors">
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </span>
            </button>
          </motion.div>

          {/* Right demo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="rounded-[22px] sm:rounded-[28px] bg-[#f6f6f5] border border-[#e4e4e2] p-3 sm:p-5 lg:p-6 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
                <div className="rounded-2xl bg-[#f6f6f5] p-1 sm:p-2 lg:p-3">
                  <div className="mb-3 sm:mb-4">
                    <p className="text-sm sm:text-[15px] font-semibold text-ink leading-none mb-1">Before</p>
                    <p className="text-[12px] text-[#9ca3af]">No shadows</p>
                  </div>
                  <RevenueCard shadow="none" />
                </div>

                <div className="rounded-2xl bg-[#f6f6f5] p-1 sm:p-2 lg:p-3">
                  <div className="mb-3 sm:mb-4">
                    <p className="text-sm sm:text-[15px] font-semibold text-ink leading-none mb-1">After</p>
                    <p className="text-[12px] text-[#9ca3af]">With ShadowCraft</p>
                  </div>
                  <RevenueCard shadow={active.shadow} />
                </div>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 overflow-x-auto scrollbar-minimal">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
