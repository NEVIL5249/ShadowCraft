import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install @nevil5249/shadowcraft";

  const copyCommand = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-11 pb-16 border-b border-slate-200 blueprint-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="h-[1px] w-12 bg-slate-400"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">System v4.0.1</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-slate-900 leading-[0.9] mb-8">
              Precision <br/>
              <span className="italic font-serif font-normal text-slate-500">Volumetric</span> <br/>
              Interface Shadows.
            </h1>
            <p className="font-serif text-xl text-slate-600 leading-relaxed mb-8 max-w-xl italic">
              A technical framework for multi-layered CSS shadows designed with mathematical precision and structural integrity.
            </p>
            <div className="flex gap-4">
              <Link to="/library" className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-800 hover:shadow-ui-button-hover transition-all">
                Explore Shadows
              </Link>
              <Link to="/docs" className="border border-slate-200 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-50 hover:shadow-ui-nav transition-all">
                Read Docs
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-slate-900 z-20"></div>
            <div className="bg-white border border-slate-200 p-8 relative overflow-hidden shadow-ui-terminal group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-500">
              <div className="absolute inset-0 blueprint-bg opacity-5 pointer-events-none"></div>
              <div className="relative z-10 space-y-6">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">01 // Installation</div>
                  <h3 className="text-2xl font-light uppercase tracking-tight text-slate-900">Get Started in Seconds</h3>
                </div>
                
                <div className="bg-slate-900 p-6 rounded-none relative">
                   <div className="flex justify-between items-start mb-4">
                     <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                       <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                     </div>
                     <button 
                       onClick={copyCommand}
                       className="text-slate-500 hover:text-white transition-colors p-1"
                       aria-label="Copy Command"
                     >
                       {copied ? <Check size={14} className="text-blueprint-accent" /> : <Copy size={14} />}
                     </button>
                   </div>
                   <code className="text-white font-mono text-sm block">
                     <span className="text-blueprint-accent mr-2">$</span>
                     {installCmd}
                   </code>
                   <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-600">sh_v4.0</div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                  <span>Pkg_Manager: NPM</span>
                  <span>Size: 12.4KB</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-4 right-8 text-[10px] font-mono text-slate-300 pointer-events-none hidden lg:block">
        X: 102.40 | Y: 88.12 | Z: AUTO
      </div>
    </section>
  );
};

export default Hero;
