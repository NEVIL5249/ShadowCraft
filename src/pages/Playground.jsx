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
    <div className="pt-14 pb-24 min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
            Playground
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Build custom shadows
          </h1>
          <p className="text-[16px] text-muted leading-relaxed">
            Compose multi-layer volumetric shadows in real time, then copy CSS or Tailwind values into your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-line rounded-2xl p-5 sm:p-6">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2.5 text-ink">
                  <Layers size={18} />
                  <h3 className="text-sm font-semibold tracking-tight">Layers</h3>
                </div>
                <button
                  onClick={addLayer}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors"
                >
                  <Plus size={15} /> Add layer
                </button>
              </div>

              <div className="space-y-2">
                <AnimatePresence initial={false}>
                  {layers.map((layer, idx) => (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, height: 0, scale: 0.98 }}
                      animate={{ opacity: 1, height: 'auto', scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveIndex(idx)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border-2 transition-all ${
                          activeIndex === idx
                            ? 'bg-[#f6f6f5] border-[#b0b0b0]'
                            : 'bg-white border-[#e8e8e6] hover:border-[#d4d4d4] text-muted'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono ${activeIndex === idx ? 'text-ink' : 'text-[#9ca3af]'}`}>
                            L{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className={`text-sm font-medium ${activeIndex === idx ? 'text-ink' : ''}`}>
                            {layer.inset ? 'Inset shadow' : 'Shadow'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-line" style={{ backgroundColor: layer.color }} />
                          {layers.length > 1 && (
                            <div
                              role="button"
                              tabIndex={0}
                              onClick={(e) => removeLayer(e, idx)}
                              className="text-[#9ca3af] hover:text-red-500 transition-colors p-1"
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

            <div className="bg-white border border-line rounded-2xl p-5 sm:p-7">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-line">
                <h3 className="text-sm font-semibold tracking-tight text-ink">
                  Editing layer {String(activeIndex + 1).padStart(2, '0')}
                </h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeLayer.inset}
                    onChange={(e) => updateLayer('inset', e.target.checked)}
                    className="w-4 h-4 accent-ink"
                  />
                  <span className="text-xs font-medium text-muted">Inset</span>
                </label>
              </div>

              <div className="space-y-7">
                {[
                  { key: 'x', label: 'X offset', min: -100, max: 100, value: activeLayer.x, unit: 'px', parse: parseInt },
                  { key: 'y', label: 'Y offset', min: -100, max: 100, value: activeLayer.y, unit: 'px', parse: parseInt },
                  { key: 'blur', label: 'Blur radius', min: 0, max: 200, value: activeLayer.blur, unit: 'px', parse: parseInt },
                  { key: 'spread', label: 'Spread radius', min: -50, max: 50, value: activeLayer.spread, unit: 'px', parse: parseInt },
                ].map((control) => (
                  <div key={control.key} className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-medium text-muted">
                      <span>{control.label}</span>
                      <span className="font-mono text-ink">{control.value}{control.unit}</span>
                    </div>
                    <input
                      type="range"
                      min={control.min}
                      max={control.max}
                      value={control.value}
                      onChange={(e) => updateLayer(control.key, control.parse(e.target.value))}
                      className="w-full accent-ink"
                    />
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-muted">Shadow color</div>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={activeLayer.color}
                        onChange={(e) => updateLayer('color', e.target.value)}
                        className="w-11 h-11 rounded-lg border border-line p-1 cursor-pointer bg-white"
                      />
                      <span className="font-mono text-sm text-ink-soft uppercase">{activeLayer.color}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-medium text-muted">
                      <span>Opacity</span>
                      <span className="font-mono text-ink">{Math.round(activeLayer.opacity * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={activeLayer.opacity}
                      onChange={(e) => updateLayer('opacity', parseFloat(e.target.value))}
                      className="w-full accent-ink mt-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-28 space-y-5">
            <div className="aspect-square bg-[#f6f6f5] border border-line rounded-2xl flex items-center justify-center p-14 sm:p-16 relative overflow-hidden">
              <div className="absolute top-4 left-4 text-[11px] font-medium text-[#9ca3af]">Live preview</div>
              <div
                className="w-full h-full bg-white rounded-xl transition-shadow duration-200 ease-out"
                style={{ boxShadow: styleShadowStr }}
              />
            </div>

            <div className="bg-ink rounded-2xl p-5 relative">
              <div className="text-[11px] text-[#9ca3af] font-medium tracking-wide mb-3">Raw CSS</div>
              <pre className="text-neutral-300 font-mono text-[13px] overflow-x-auto whitespace-pre-wrap leading-relaxed pr-8">
                <code>{cssValue}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(cssValue, 'css')}
                className="absolute top-4 right-4 p-2 text-[#9ca3af] hover:text-white transition-colors"
                aria-label="Copy CSS"
              >
                {copiedCSS ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            <div className="bg-white border border-line rounded-2xl p-5 relative">
              <div className="text-[11px] text-[#9ca3af] font-medium tracking-wide mb-3">Tailwind value</div>
              <pre className="text-ink font-mono text-[13px] overflow-x-auto whitespace-pre-wrap break-all leading-relaxed pr-8">
                <code>{tailwindValue}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(tailwindValue, 'tw')}
                className="absolute top-4 right-4 p-2 text-[#9ca3af] hover:text-ink transition-colors"
                aria-label="Copy Tailwind"
              >
                {copiedTW ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
