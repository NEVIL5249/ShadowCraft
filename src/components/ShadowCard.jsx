import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Code, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TailwindIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tailwind"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968m-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968" /></svg>
);

const CssIcon = ({ size = 18 }) => (
<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-css"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M8 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M11 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /><path d="M17 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" /></svg>);
const ShadowCard = ({ shadow, variant = 'default', corner = 'top-left', padding = 'p-10' }) => {
  const [copiedType, setCopiedType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const getCornerClass = () => {
    switch (corner) {
      case 'top-left': return '-top-[1px] -left-[1px] border-t border-l';
      case 'top-right': return '-top-[1px] -right-[1px] border-t border-r';
      case 'bottom-left': return '-bottom-[1px] -left-[1px] border-b border-l';
      case 'bottom-right': return '-bottom-[1px] -right-[1px] border-b border-r';
      default: return '';
    }
  };

  const getTailwindValue = (css) => {
    if (!css) return '';
    const cleanValue = css.replace('box-shadow: ', '').replace(';', '');
    // Replace spaces with underscores for Tailwind arbitrary values
    return `shadow-[${cleanValue.replace(/ /g, '_')}]`;
  };

  return (
    <div className="relative group h-full">
      {corner !== 'none' && (
        <div className={`absolute w-8 h-8 border-slate-900 z-20 ${getCornerClass()}`}></div>
      )}
      <div className={`relative h-full ${padding} ${variant === 'glass' ? 'bg-slate-100/30' : 'bg-white'} border border-slate-200 transition-all group-hover:border-slate-300`}>
        {variant === 'blueprint' && <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none"></div>}
        
        <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{shadow.id}. {shadow.name}</h3>
            <div className={`flex gap-4 text-[10px] font-mono ${variant === 'glass' ? 'text-blueprint-accent' : 'text-slate-400'}`}>
              <span>L: {shadow.layers || '00'}</span>
              <span>T: {shadow.time || '0.00MS'}</span>
              <span>C: {shadow.category || 'GENERAL'}</span>
              {/* {shadow.optimized && <span className="font-bold text-blueprint-accent">OPTIMIZED</span>} */}
            </div>
          </div>
          <div className="flex gap-2 relative" ref={menuRef}>
            {/* Desktop View: Separate Icons */}
            <div className="hidden lg:flex gap-2">
              <button 
                onClick={() => copyToClipboard(getTailwindValue(shadow.css), 'tailwind')}
                className="p-2 border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:border-blueprint-accent hover:text-blueprint-accent relative"
                title="Copy Tailwind Arbitrary Value"
              >
                <TailwindIcon size={16} />
                {copiedType === 'tailwind' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] bg-slate-900 text-white px-2 py-1 rounded">Copied!</span>}
              </button>
              <button 
                onClick={() => copyToClipboard(shadow.css, 'css')}
                className="p-2 border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:border-blueprint-accent hover:text-blueprint-accent relative"
                title="Copy raw CSS"
              >
                <CssIcon size={16} />
                {copiedType === 'css' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] bg-slate-900 text-white px-2 py-1 rounded">Copied!</span>}
              </button>
              <button 
                onClick={() => copyToClipboard(shadow.className, 'class')}
                className="p-2 border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:border-blueprint-accent hover:text-blueprint-accent relative"
                title="Copy Class Name"
              >
                {copiedType === 'class' ? <Check size={16} /> : <Copy size={16} />}
                {copiedType === 'class' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] bg-slate-900 text-white px-2 py-1 rounded">Copied!</span>}
              </button>
            </div>

            {/* Mobile View: Single Dropdown */}
            <div className="flex lg:hidden relative">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex items-center gap-2 p-2 px-3 border transition-all duration-200 ${isMenuOpen ? 'border-slate-900 bg-slate-900 text-white shadow-lg' : 'border-slate-200 bg-white text-slate-900'}`}
              >
                <Copy size={14} className={isMenuOpen ? 'text-white' : 'text-slate-500'} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Copy</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] z-[100] py-1 origin-top-right overflow-hidden"
                  >
                    <button 
                      onClick={() => { copyToClipboard(getTailwindValue(shadow.css), 'tailwind'); setTimeout(() => setIsMenuOpen(false), 600); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-0 group/item"
                    >
                      <div className={`p-2 border border-slate-100 group-hover/item:border-blueprint-accent transition-colors ${copiedType === 'tailwind' ? 'text-green-500 border-green-100 bg-green-50' : 'text-slate-400'}`}>
                        {copiedType === 'tailwind' ? <Check size={14} /> : <TailwindIcon size={14} />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${copiedType === 'tailwind' ? 'text-green-600' : 'text-slate-900'}`}>Tailwind CSS</span>
                        <span className="text-[8px] font-mono text-slate-400 uppercase">Arbitrary Value</span>
                      </div>
                    </button>

                    <button 
                      onClick={() => { copyToClipboard(shadow.css, 'css'); setTimeout(() => setIsMenuOpen(false), 600); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-0 group/item"
                    >
                      <div className={`p-2 border border-slate-100 group-hover/item:border-blueprint-accent transition-colors ${copiedType === 'css' ? 'text-green-500 border-green-100 bg-green-50' : 'text-slate-400'}`}>
                        {copiedType === 'css' ? <Check size={14} /> : <CssIcon size={14} />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${copiedType === 'css' ? 'text-green-600' : 'text-slate-900'}`}>Raw CSS</span>
                        <span className="text-[8px] font-mono text-slate-400 uppercase">box-shadow property</span>
                      </div>
                    </button>

                    <button 
                      onClick={() => { copyToClipboard(shadow.className, 'class'); setTimeout(() => setIsMenuOpen(false), 600); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-0 group/item"
                    >
                      <div className={`p-2 border border-slate-100 group-hover/item:border-blueprint-accent transition-colors ${copiedType === 'class' ? 'text-green-500 border-green-100 bg-green-50' : 'text-slate-400'}`}>
                        {copiedType === 'class' ? <Check size={14} /> : <Copy size={14} />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${copiedType === 'class' ? 'text-green-600' : 'text-slate-900'}`}>Class Name</span>
                        <span className="text-[8px] font-mono text-slate-400 uppercase">Framework Utility</span>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        <div className="py-12 md:py-20 flex items-center justify-center bg-slate-50 border border-slate-100/50">
          <div 
            className={`w-36 h-36 md:w-48 md:h-48 transition-all ${variant === 'glass' ? 'bg-white/60 backdrop-blur-md border border-white/40' : 'bg-white border border-slate-50/50'}`}
            style={{ 
              boxShadow: (shadow.css || '').replace('box-shadow: ', '').replace(';', '') 
            }}
          ></div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="font-mono text-[9px] text-slate-400 space-y-1 uppercase">
            <div className="flex gap-2"><span>CLASS:</span> <span className="text-slate-900">.{shadow.className}</span></div>
            <div className="flex gap-2"><span>USAGE:</span> <span className="text-slate-900">{shadow.usage}</span></div>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            REF: {shadow.ref}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShadowCard;
