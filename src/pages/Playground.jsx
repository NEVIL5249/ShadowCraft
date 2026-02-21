import React, { useState } from 'react';
import { Copy, Check, Plus, Trash2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Playground = () => {
  const defaultLayer = { x: 0, y: 10, blur: 20, spread: 0, color: '#000000', opacity: 0.1, inset: false };
  const [layers, setLayers] = useState([{ ...defaultLayer, id: Date.now() }]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedTW, setCopiedTW] = useState(false);

  const activeLayer = layers[activeIndex] || layers[0];

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const updateLayer = (key, value) => {
    const newLayers = [...layers];
    newLayers[activeIndex] = { ...newLayers[activeIndex], [key]: value };
    setLayers(newLayers);
  };

  const addLayer = () => {
    const newLayer = { ...defaultLayer, y: defaultLayer.y + layers.length * 5, id: Date.now() };
    setLayers([...layers, newLayer]);
    setActiveIndex(layers.length);
  };

  const removeLayer = (e, index) => {
    e.stopPropagation();
    if (layers.length === 1) return;
    const newLayers = layers.filter((_, i) => i !== index);
    setLayers(newLayers);
    if (activeIndex >= newLayers.length) {
      setActiveIndex(newLayers.length - 1);
    } else if (activeIndex > index) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const generateShadowString = (layer) => {
    const { x, y, blur, spread, color, opacity, inset } = layer;
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${hexToRgba(color, opacity)}`;
  };

  const combinedShadowStr = layers.map(generateShadowString).join(',\n  ');
  const styleShadowStr = layers.map(generateShadowString).join(', ');

  const cssValue = `box-shadow:\n  ${combinedShadowStr};`;

  const tailwindCombined = layers.map(layer => {
    const { x, y, blur, spread, color, opacity, inset } = layer;
    return `${inset ? 'inset_' : ''}${x}px_${y}px_${blur}px_${spread}px_${hexToRgba(color, opacity).replace(/\s+/g, '')}`;
  }).join(',_');
  const tailwindValue = `shadow-[${tailwindCombined}]`;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'css') {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } else {
      setCopiedTW(true);
      setTimeout(() => setCopiedTW(false), 2000);
    }
  };

  return (
    <div className="pt-12 pb-24 blueprint-bg min-height-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-blueprint-accent"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">Construction View</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-slate-900 mb-6">Shadow Playground</h2>
          <p className="font-serif text-lg text-slate-500 italic border-l-2 border-slate-200 pl-6 py-2 max-w-2xl">
            Real-time architectural shadow generator with multi-layer volumetric compositing. Adjust parameters to engineer identical physical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Layers Panel */}
            <div className="bg-slate-50 border border-slate-200 p-6 shadow-ui-card">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3 text-slate-900">
                  <Layers size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Volumetric Layers</h3>
                </div>
                <button 
                  onClick={addLayer}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blueprint-accent hover:text-slate-900 transition-colors"
                >
                  <Plus size={14} /> Add Layer
                </button>
              </div>

              <div className="space-y-2">
                <AnimatePresence initial={false}>
                  {layers.map((layer, idx) => (
                    <motion.div 
                      key={layer.id}
                      initial={{ opacity: 0, height: 0, scale: 0.95 }}
                      animate={{ opacity: 1, height: 'auto', scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveIndex(idx)}
                        className={`w-full flex items-center justify-between p-4 border transition-all ${
                          activeIndex === idx 
                            ? 'bg-white border-slate-900 shadow-ui-nav z-10 relative' 
                            : 'bg-white/50 border-slate-200 hover:border-slate-400 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`text-[10px] font-mono tracking-wider ${activeIndex === idx ? 'text-blueprint-accent' : 'text-slate-400'}`}>
                            L{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-sm font-medium">
                            {layer.inset ? 'Inset ' : ''}Shadow
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-4 h-4 rounded-full border border-slate-200 shadow-sm" style={{ backgroundColor: layer.color }}></div>
                          {layers.length > 1 && (
                            <div 
                              role="button"
                              tabIndex={0}
                              onClick={(e) => removeLayer(e, idx)}
                              className="text-slate-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={14} />
                            </div>
                          )}
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Active Layer Controls */}
            <div className="bg-white p-8 border border-slate-200 shadow-ui-card">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">
                  Editing Layer {String(activeIndex + 1).padStart(2, '0')}
                </h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={activeLayer.inset} 
                    onChange={(e) => updateLayer('inset', e.target.checked)}
                    className="w-4 h-4 accent-slate-900"
                  />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Inset</span>
                </label>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    <span>X Offset</span>
                    <span className="font-mono text-slate-900">{activeLayer.x}px</span>
                  </div>
                  <input type="range" min="-100" max="100" value={activeLayer.x} onChange={(e) => updateLayer('x', parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    <span>Y Offset</span>
                    <span className="font-mono text-slate-900">{activeLayer.y}px</span>
                  </div>
                  <input type="range" min="-100" max="100" value={activeLayer.y} onChange={(e) => updateLayer('y', parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    <span>Blur Radius</span>
                    <span className="font-mono text-slate-900">{activeLayer.blur}px</span>
                  </div>
                  <input type="range" min="0" max="200" value={activeLayer.blur} onChange={(e) => updateLayer('blur', parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    <span>Spread Radius</span>
                    <span className="font-mono text-slate-900">{activeLayer.spread}px</span>
                  </div>
                  <input type="range" min="-50" max="50" value={activeLayer.spread} onChange={(e) => updateLayer('spread', parseInt(e.target.value))} className="w-full accent-blueprint-accent" />
                </div>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Shadow Color</div>
                    <div className="flex items-center gap-4">
                      <input type="color" value={activeLayer.color} onChange={(e) => updateLayer('color', e.target.value)} className="w-12 h-12 border border-slate-200 p-1 cursor-pointer" />
                      <span className="font-mono text-sm text-slate-600 uppercase">{activeLayer.color}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                      <span>Opacity</span>
                      <span className="font-mono text-slate-900">{Math.round(activeLayer.opacity * 100)}%</span>
                    </div>
                    <input type="range" min="0" max="1" step="0.01" value={activeLayer.opacity} onChange={(e) => updateLayer('opacity', parseFloat(e.target.value))} className="w-full accent-blueprint-accent mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview & Code Column */}
          <div className="lg:col-span-5 sticky top-32 space-y-8">
            <div className="aspect-square bg-slate-50 border border-slate-200 flex items-center justify-center p-20 relative overflow-hidden shadow-ui-card">
              <div className="absolute inset-0 blueprint-bg opacity-[0.03] pointer-events-none"></div>
              <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-400">LIVE_PREVIEW</div>
              <div 
                className="w-full h-full bg-white transition-shadow duration-200 ease-out"
                style={{ boxShadow: styleShadowStr }}
              ></div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-900 p-6 rounded-none relative shadow-ui-terminal">
                 <div className="text-[9px] text-blueprint-accent font-bold tracking-widest mb-4 uppercase">Raw CSS Generation</div>
                 <pre className="text-slate-300 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap leading-relaxed pb-4">
                   <code>{cssValue}</code>
                 </pre>
                 <button 
                  onClick={() => copyToClipboard(cssValue, 'css')}
                  className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
                  aria-label="Copy CSS"
                 >
                   {copiedCSS ? <Check size={16} className="text-blueprint-accent" /> : <Copy size={16} />}
                 </button>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-none relative">
                 <div className="text-[9px] text-slate-400 font-bold tracking-widest mb-4 uppercase">Tailwind Arbitration</div>
                 <pre className="text-slate-900 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap break-all leading-relaxed pb-4">
                   <code>{tailwindValue}</code>
                 </pre>
                 <button 
                  onClick={() => copyToClipboard(tailwindValue, 'tw')}
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                  aria-label="Copy Tailwind"
                 >
                   {copiedTW ? <Check size={16} className="text-blueprint-accent" /> : <Copy size={16} />}
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
