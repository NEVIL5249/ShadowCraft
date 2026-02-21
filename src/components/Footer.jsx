import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onOpenContact }) => {
  return (
    <footer className="bg-white py-20 border-t border-slate-200 overflow-hidden relative">
      <div className="absolute inset-0 blueprint-bg opacity-5 pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">architecture</span>
              </div>
              <span className="font-bold text-lg leading-none uppercase tracking-widest text-slate-900">ShadowCraft</span>
            </div>
            <p className="text-slate-500 font-serif italic text-base max-w-sm mb-8">
              A premium design framework for multi-layered interface depth and structural volumetric fidelity.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={onOpenContact}
                className="bg-slate-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">Coordinates</h5>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <li><a target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-2 group" href="https://github.com/NEVIL5249">GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a></li>
              <li><a target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-2 group" href="https://www.linkedin.com/in/nevilgadhia">LinkedIn <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a></li>
              <li><a target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-2 group" href="https://www.nevilgadhia.in">Website <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-900">Protocols</h5>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <li><Link className="hover:text-slate-900 transition-colors" to="/legal#terms">Terms</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" to="/legal#privacy">Privacy</Link></li>
              <li><Link className="hover:text-slate-900 transition-colors" to="/legal#security">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-mono text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-8">
            <span>© 2026 ShadowCraft</span>
            <span className="hidden md:inline">v1.0.0_BETA</span>
          </div>
          <div className="flex items-center gap-8">
            <span>Designer: @nevil5249</span>
            <span className="text-slate-300">Lat: 22.3 | Long: 70.8</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
