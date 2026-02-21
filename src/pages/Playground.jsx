import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Playground = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(20);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#000000');
  const [opacity, setOpacity] = useState(0.1);
  const [copied, setCopied] = useState(false);

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const shadowStr = `${x}px ${y}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;
  const cssValue = `box-shadow: ${shadowStr};`;
  const tailwindValue = `shadow-[${x}px_${y}px_${blur}px_${spread}px_${hexToRgba(color, opacity).replace(/\s+/g, '')}]`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-12 pb-24 blueprint-bg min-height-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Construction View</div>
              <h2 className="text-4xl font-light uppercase tracking-tight text-slate-900 mb-6">Shadow Playground</h2>
              <p className="font-serif text-lg text-slate-500 italic border-l-2 border-slate-100 pl-6 py-2">
                Real-time architectural shadow generator. Adjust the parameters to find the perfect volumetric depth for your interface.
              </p>
            </div>

            <div className="space-y-8 bg-white p-8 border border-slate-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  <span>X Offset</span>
                  <span className="font-mono text-slate-900">{x}px</span>
                </div>
                <input type="range" min="-100" max="100" value={x} onChange={(e) => setX(parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  <span>Y Offset</span>
                  <span className="font-mono text-slate-900">{y}px</span>
                </div>
                <input type="range" min="-100" max="100" value={y} onChange={(e) => setY(parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  <span>Blur Radius</span>
                  <span className="font-mono text-slate-900">{blur}px</span>
                </div>
                <input type="range" min="0" max="200" value={blur} onChange={(e) => setBlur(parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  <span>Spread Radius</span>
                  <span className="font-mono text-slate-900">{spread}px</span>
                </div>
                <input type="range" min="-50" max="50" value={spread} onChange={(e) => setSpread(parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Shadow Color</div>
                  <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 border border-slate-200 p-1 cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    <span>Opacity</span>
                    <span className="font-mono text-slate-900">{opacity}</span>
                  </div>
                  <input type="range" min="0" max="1" step="0.01" value={opacity} onChange={(e) => setOpacity(parseFloat(e.target.value))} className="w-full accent-blueprint-accent" />
                </div>
              </div>
            </div>
          </div>

          <div className="sticky top-32 space-y-12">
            <div className="aspect-square bg-slate-50 border border-slate-200 flex items-center justify-center p-20 relative">
              <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-300">PREVIEW_V1</div>
              <div 
                className="w-full h-full bg-white transition-all duration-75"
                style={{ boxShadow: shadowStr }}
              ></div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-none relative">
                 <div className="text-[10px] text-slate-500 font-mono mb-4 uppercase">CSS Output</div>
                 <code className="text-white font-mono text-sm block overflow-x-auto whitespace-nowrap pb-2">
                   {cssValue}
                 </code>
                 <button 
                  onClick={() => copyToClipboard(cssValue)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors"
                 >
                   {copied ? <Check size={16} /> : <Copy size={16} />}
                 </button>
              </div>

              <div className="bg-slate-100 p-6 rounded-none relative">
                 <div className="text-[10px] text-slate-500 font-mono mb-4 uppercase">Tailwind Utility</div>
                 <code className="text-slate-900 font-mono text-sm block overflow-x-auto whitespace-nowrap pb-2">
                   {tailwindValue}
                 </code>
                 <button 
                  onClick={() => copyToClipboard(tailwindValue)}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                 >
                   {copied ? <Check size={16} /> : <Copy size={16} />}
                 </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Playground;
