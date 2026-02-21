export const shadows = [
  {
    id: "01",
    name: "Subtle Elevation",
    className: "shadow-layered-subtle",
    usage: "Surface Layering",
    ref: "ARCH-011",
    layers: 3,
    time: "0.02MS",
    css: "box-shadow: 0 1px 2px rgba(0,0,0,0.02), 0 2px 4px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02);"
  },
  {
    id: "02",
    name: "Deep Inset",
    className: "shadow-layered-deep-inset",
    usage: "Input Fields",
    ref: "INSET-882",
    layers: 4,
    time: "0.04MS",
    css: "box-shadow: inset 0 2px 4px rgba(0,0,0,0.04), inset 0 4px 8px rgba(0,0,0,0.04), inset 0 8px 16px rgba(0,0,0,0.04);"
  },
  {
    id: "03",
    name: "Glass Glow",
    className: "shadow-layered-glass",
    usage: "Premium Modals",
    ref: "GLASS-402",
    layers: 2,
    time: "0.01MS",
    css: "box-shadow: 0 4px 12px rgba(19, 91, 236, 0.08), 0 0 0 1px rgba(19, 91, 236, 0.05);"
  },
  {
    id: "04",
    name: "Floating Modal",
    className: "shadow-layered-floating",
    usage: "Dialog Overlays",
    ref: "FLOAT-991",
    layers: 8,
    time: "0.12MS",
    css: "box-shadow: 0 2px 4px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.03), 0 16px 32px rgba(0,0,0,0.04), 0 32px 64px rgba(0,0,0,0.05);"
  },
  {
    id: "05",
    name: "Atmospheric Depth",
    className: "shadow-[0_10px_20px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.1)]",
    usage: "Card Hover",
    ref: "ATMOS-001",
    layers: 3,
    time: "0.03MS",
    css: "box-shadow: 0 10px 20px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.04), 0 0 1px rgba(0,0,0,0.1);"
  },
  {
    id: "06",
    name: "Sharp Outline",
    className: "shadow-[0_1px_1px_rgba(0,0,0,0.1),0_2px_2px_rgba(0,0,0,0.1),0_4px_4px_rgba(0,0,0,0.1)]",
    usage: "Small UI Bits",
    ref: "SHARP-221",
    layers: 3,
    time: "0.02MS",
    css: "box-shadow: 0 1px 1px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1);"
  },
  // Adding more shadows to reach 50...
  ...Array.from({ length: 44 }, (_, i) => {
    const id = (i + 7).toString().padStart(2, '0');
    const opacity = (0.01 + (i * 0.002)).toFixed(3);
    const blur = (i + 1) * 2;
    return {
      id,
      name: `Volumetric Step ${id}`,
      className: `shadow-[0_${i+2}px_${blur}px_rgba(0,0,0,${opacity})]`,
      usage: "Generic Depth",
      ref: `STEP-${100 + i}`,
      layers: 1,
      time: "0.01MS",
      css: `box-shadow: 0 ${i+2}px ${blur}px rgba(0,0,0,${opacity});`
    };
  })
];
