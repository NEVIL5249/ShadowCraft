import React, { useState } from 'react';
import { Copy, Check, Plus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const getLayerGridClass = (count) => {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2 || count === 4) return 'grid-cols-1 sm:grid-cols-2';
  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
};

const ControlRow = ({ badge, label, value, display, min, max, step = 1, onChange, unit = 'px' }) => (
  <div className="flex items-center gap-2.5">
    <div className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] flex items-center justify-center text-[12px] font-semibold text-ink">
      {badge}
    </div>
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-16 sm:w-[4.5rem] shrink-0 h-9 rounded-lg border border-line bg-white px-2 text-sm font-mono text-ink focus:outline-none focus:border-[#b0b0b0]"
    />
    <div className="flex-1 min-w-0">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="playground-slider w-full"
      />
    </div>
    <div className="hidden sm:flex shrink-0 h-9 items-center rounded-full bg-[#f3f3f1] px-3 text-[11px] text-muted whitespace-nowrap">
      {display ?? `${value}${unit} ${label}`}
    </div>
  </div>
);

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

  const tailwindCombined = layers.map((layer) => {
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
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-3">
            Playground
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">
            Build custom shadows
          </h1>
          <p className="text-[15px] text-muted leading-relaxed">
            Compose multi-layer volumetric shadows in real time, then copy CSS or Tailwind into your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            {/* Layers */}
            <div className="bg-white border border-line rounded-2xl p-4 sm:p-5">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-ink">Layers</h3>
                  <p className="text-[12px] text-muted mt-0.5">{layers.length} active</p>
                </div>
                <button
                  onClick={addLayer}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-[#f6f6f5] px-3 py-2 text-xs font-medium text-ink hover:bg-[#efefed] transition-colors"
                >
                  <Plus size={14} /> Add layer
                </button>
              </div>

              <div className={`grid ${getLayerGridClass(layers.length)} gap-2.5`}>
                <AnimatePresence initial={false} mode="popLayout">
                  {layers.map((layer, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <motion.button
                        key={layer.id}
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-full text-left rounded-xl border px-3.5 py-3 transition-all ${
                          isActive
                            ? 'border-[#b0b0b0] bg-[#f6f6f5]'
                            : 'border-line bg-white hover:border-[#d4d4d4]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <p className={`text-sm font-medium ${isActive ? 'text-ink' : 'text-ink-soft'}`}>
                              Layer {idx + 1}
                            </p>
                            <p className="text-[11px] text-muted mt-0.5">
                              {layer.inset ? 'Inset' : 'Drop'} · {layer.blur}px blur
                            </p>
                          </div>
                          {layers.length > 1 && (
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={(e) => removeLayer(e, idx)}
                              className="text-[#b0b0b0] hover:text-red-500 transition-colors p-0.5"
                            >
                              <Trash2 size={13} />
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className="h-3.5 w-3.5 rounded-full border border-line"
                            style={{ backgroundColor: layer.color, opacity: Math.max(layer.opacity, 0.25) }}
                          />
                          <span className="font-mono text-[10px] text-muted truncate">
                            {layer.x},{layer.y} · {Math.round(layer.opacity * 100)}%
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Editor */}
            <div className="bg-white border border-line rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold tracking-tight text-ink">
                    Edit layer {activeIndex + 1}
                  </h3>
                  <p className="text-[12px] text-muted mt-0.5">Adjust depth parameters</p>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-[#f3f3f1] px-3 py-2">
                  <input
                    type="checkbox"
                    checked={activeLayer.inset}
                    onChange={(e) => updateLayer('inset', e.target.checked)}
                    className="w-3.5 h-3.5 accent-ink"
                  />
                  <span className="text-xs font-medium text-ink-soft">Inset</span>
                </label>
              </div>

              <div className="space-y-3">
                <ControlRow
                  badge="X"
                  label="offset"
                  value={activeLayer.x}
                  min={-100}
                  max={100}
                  onChange={(v) => updateLayer('x', v)}
                  display={`${activeLayer.x}px horizontal`}
                />
                <ControlRow
                  badge="Y"
                  label="offset"
                  value={activeLayer.y}
                  min={-100}
                  max={100}
                  onChange={(v) => updateLayer('y', v)}
                  display={`${activeLayer.y}px vertical`}
                />
                <ControlRow
                  badge="B"
                  label="blur"
                  value={activeLayer.blur}
                  min={0}
                  max={200}
                  onChange={(v) => updateLayer('blur', v)}
                  display={`${activeLayer.blur}px blur`}
                />
                <ControlRow
                  badge="S"
                  label="spread"
                  value={activeLayer.spread}
                  min={-50}
                  max={50}
                  onChange={(v) => updateLayer('spread', v)}
                  display={`${activeLayer.spread}px spread`}
                />

                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-[#f3f3f1] flex items-center justify-center text-[12px] font-semibold text-ink">
                    C
                  </div>
                  <input
                    type="text"
                    value={activeLayer.color}
                    onChange={(e) => updateLayer('color', e.target.value)}
                    className="w-24 sm:w-28 shrink-0 h-9 rounded-lg border border-line bg-white px-2.5 text-sm font-mono text-ink uppercase focus:outline-none focus:border-[#b0b0b0]"
                  />
                  <div className="flex-1 min-w-0">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={activeLayer.opacity}
                      onChange={(e) => updateLayer('opacity', parseFloat(e.target.value))}
                      className="playground-slider w-full"
                    />
                  </div>
                  <label className="hidden sm:inline-flex shrink-0 h-9 items-center gap-2 rounded-full bg-[#f3f3f1] pl-2 pr-3 cursor-pointer">
                    <input
                      type="color"
                      value={activeLayer.color}
                      onChange={(e) => updateLayer('color', e.target.value)}
                      className="h-5 w-5 rounded border border-line cursor-pointer bg-transparent"
                    />
                    <span className="text-[11px] text-muted">
                      {Math.round(activeLayer.opacity * 100)}% opacity
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Preview + export */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-[#f6f6f5] border border-line rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[11px] font-medium text-[#9ca3af]">Live preview</p>
                <p className="text-[11px] font-mono text-muted">{layers.length} layer{layers.length > 1 ? 's' : ''}</p>
              </div>
              <div className="aspect-[4/3] flex items-center justify-center">
                <div
                  className="w-[58%] max-w-[220px] aspect-square bg-white rounded-xl transition-shadow duration-200 ease-out"
                  style={{ boxShadow: styleShadowStr }}
                />
              </div>
            </div>

            <div className="bg-ink rounded-2xl p-4 relative">
              <div className="text-[11px] text-[#9ca3af] font-medium mb-2">CSS</div>
              <pre className="text-neutral-300 font-mono text-[12px] overflow-auto whitespace-pre-wrap leading-relaxed pr-8 max-h-28 scrollbar-minimal-dark">
                <code>{cssValue}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(cssValue, 'css')}
                className="absolute top-3.5 right-3.5 p-1.5 text-[#9ca3af] hover:text-white transition-colors"
                aria-label="Copy CSS"
              >
                {copiedCSS ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>

            <div className="bg-white border border-line rounded-2xl p-4 relative">
              <div className="text-[11px] text-[#9ca3af] font-medium mb-2">Tailwind</div>
              <pre className="text-ink font-mono text-[12px] overflow-auto whitespace-pre-wrap break-all leading-relaxed pr-8 max-h-24 scrollbar-minimal">
                <code>{tailwindValue}</code>
              </pre>
              <button
                onClick={() => copyToClipboard(tailwindValue, 'tw')}
                className="absolute top-3.5 right-3.5 p-1.5 text-[#9ca3af] hover:text-ink transition-colors"
                aria-label="Copy Tailwind"
              >
                {copiedTW ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
