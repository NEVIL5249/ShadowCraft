import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ShadowCard = ({ shadow, variant = 'default', corner = 'top-left', padding = 'p-10' }) => {
  const [copiedType, setCopiedType] = useState(null);

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

  return (
    <div className={`group relative ${padding} ${variant === 'glass' ? 'bg-slate-100/30' : 'bg-white'} border border-slate-200 transition-all hover:border-slate-300 overflow-hidden`}>
      {variant === 'blueprint' && <div className="absolute inset-0 blueprint-bg opacity-10 pointer-events-none"></div>}
      {corner !== 'none' && (
        <div className={`absolute w-4 h-4 border-slate-900 opacity-0 group-hover:opacity-100 transition-all ${getCornerClass()}`}></div>
      )}
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">{shadow.id}. {shadow.name}</h3>
            <div className={`flex gap-4 text-[10px] font-mono ${variant === 'glass' ? 'text-blueprint-accent' : 'text-slate-400'}`}>
              <span>L: {shadow.layers || '00'}</span>
              <span>T: {shadow.time || '0.00MS'}</span>
              {shadow.id === '03' && <span className="font-bold">OPTIMIZED</span>}
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => copyToClipboard(shadow.className, 'tailwind')}
              className="px-2 py-1 border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:border-blueprint-accent hover:text-blueprint-accent relative"
              title="Copy Tailwind Class"
            >
              <span className="text-[10px] font-bold">Tailwind</span>
              {copiedType === 'tailwind' && <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] bg-slate-900 text-white px-2 py-1 rounded">Copied!</span>}
            </button>
            <button 
              onClick={() => copyToClipboard(shadow.css, 'css')}
              className="px-2 py-1 border border-slate-100 opacity-0 group-hover:opacity-100 transition-all hover:border-blueprint-accent hover:text-blueprint-accent relative"
              title="Copy raw CSS"
            >
              <span className="text-[10px] font-bold">CSS</span>
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
        </div>
        
        <div className={`${shadow.id === '04' ? 'py-20' : 'py-16'} flex items-center justify-center`} style={{    background: "#f7f7f7a8", border: "1px solid #dedede"}}>
          <div className={`transition-all ${shadow.id === '01' ? 'w-40 h-40' : shadow.id === '02' ? 'w-32 h-32' : shadow.id === '03' ? 'w-28 h-28' : 'w-48 h-32'} ${variant === 'glass' ? 'bg-white/60 backdrop-blur-md border border-white/40' : 'bg-white border border-slate-50'} ${shadow.className}`}></div>
        </div>

        <div className={`mt-10 ${shadow.id === '04' ? 'flex items-center gap-4' : 'flex justify-between items-end'} ${shadow.id === '02' ? 'border-t border-slate-100 pt-6' : ''}`}>
          {shadow.id === '04' && <span className="h-[1px] flex-1 bg-slate-100"></span>}
          <div className="font-mono text-[9px] text-slate-400 space-y-1 uppercase">
            <div className="flex gap-2"><span>{shadow.id === '03' ? 'CLASS' : 'Class'}:</span> <span className="text-slate-900">{shadow.id === '03' ? '' : '.'}{shadow.id === '02' ? 'shd-inset-premium' : shadow.className}</span></div>
            {shadow.id !== '02' && <div className="flex gap-2"><span>{shadow.id === '03' ? 'Z-INDEX' : 'Usage'}:</span> <span className="text-slate-900">{shadow.id === '03' ? '50' : shadow.usage}</span></div>}
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            {shadow.id === '04' ? 'Structural Depth Analysis' : `REF: ${shadow.ref}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadowCard;
