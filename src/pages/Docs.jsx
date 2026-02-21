import React, { useState } from 'react';
import CodeBlock from '../components/CodeBlock';
import { Layers, Terminal, Box } from 'lucide-react';

const FRAMEWORKS = [
  { id: 'react', name: 'React / Vite' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'html', name: 'HTML / Tailwind CLI' },
];

const CONTENT = {
  react: [
    {
      step: '01',
      title: 'Install the package',
      description: 'Run the following command in your terminal to install the underlying structural definitions.',
      code: 'npm install @nevil5249/shadowcraft',
      lang: 'bash',
      titleLabel: 'Terminal'
    },
    {
      step: '02',
      title: 'Configure Tailwind plugin',
      description: 'Add the plugin to your tailwind.config.js (or .ts) to expose the volumetric shadows to your utility classes.',
      code: `// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@nevil5249/shadowcraft')
  ],
}`,
      lang: 'javascript',
      titleLabel: 'tailwind.config.js'
    },
    {
      step: '03',
      title: 'Apply volumetric shadows',
      description: 'Start using any of the curated shadows in your components immediately.',
      code: `function Card() {
  return (
    <div className="shd-subtle-01 bg-white p-6 rounded-lg">
      <h3 className="text-xl font-bold">Structural Component</h3>
      <p className="text-slate-500">
        Notice the deeply engineered layers.
      </p>
    </div>
  );
}`,
      lang: 'jsx',
      titleLabel: 'Component.jsx'
    }
  ],
  nextjs: [
    {
      step: '01',
      title: 'Install the framework',
      description: 'Add the ShadowCraft architecture to your Next.js application.',
      code: 'npm install @nevil5249/shadowcraft',
      lang: 'bash',
      titleLabel: 'Terminal'
    },
    {
      step: '02',
      title: 'Configure Tailwind',
      description: 'Modify your Next.js tailwind.config.ts file to include the plugin.',
      code: `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@nevil5249/shadowcraft')
  ],
};

export default config;`,
      lang: 'typescript',
      titleLabel: 'tailwind.config.ts'
    },
    {
      step: '03',
      title: 'Utilize classes globally',
      description: 'The classes are globally available. Use them within your server or client components.',
      code: `export default function Page() {
  return (
    <main className="min-h-screen p-24">
      <div className="shd-floating-modal bg-white border border-slate-200">
        Engineered precision in Next.js
      </div>
    </main>
  );
}`,
      lang: 'tsx',
      titleLabel: 'app/page.tsx'
    }
  ],
  html: [
    {
      step: '01',
      title: 'Install dependency',
      description: 'Fetch the package via npm for your static project.',
      code: 'npm install @nevil5249/shadowcraft',
      lang: 'bash',
      titleLabel: 'Terminal'
    },
    {
      step: '02',
      title: 'Update Tailwind CLI config',
      description: 'Add the plugin required to generate the multi-layered CSS rules.',
      code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@nevil5249/shadowcraft')
  ],
}`,
      lang: 'javascript',
      titleLabel: 'tailwind.config.js'
    },
    {
      step: '03',
      title: 'Use in raw HTML',
      description: 'Build robust static interfaces utilizing the shadow utility pipeline.',
      code: `<!DOCTYPE html>
<html>
<head>
  <link href="./output.css" rel="stylesheet">
</head>
<body class="bg-slate-50 p-12">
  <div class="shd-glass-panel bg-white/80 p-8">
    <h1 class="font-sans text-2xl font-bold">Pure HTML Integration</h1>
  </div>
</body>
</html>`,
      lang: 'html',
      titleLabel: 'index.html'
    }
  ]
};

const Docs = () => {
  const [activeTab, setActiveTab] = useState('react');

  return (
    <div className="pt-12 pb-32 min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-blueprint-accent"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">Implementation Docs</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 uppercase italic font-serif mb-6">
            System <span className="text-slate-400 not-italic font-sans font-bold">Integration</span>
          </h1>
          <p className="text-slate-500 font-serif italic text-lg max-w-2xl">
            A comprehensive guide to wiring the ShadowCraft architecture into your frontend ecosystem. Engineered for a zero-friction developer experience via Tailwind CSS.
          </p>
        </div>

        {/* Requirements */}
        <div className="flex flex-wrap gap-8 mb-16 p-6 md:p-8 bg-slate-50 border border-slate-100">
          <h3 className="w-full text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 border-b border-slate-200 pb-4 mb-2">Prerequisites Ensure System Readiness</h3>
          <div className="flex items-center gap-4 text-sm font-mono text-slate-700">
            <Terminal size={16} className="text-blueprint-accent" />
            <span>Node.js v16+</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-slate-700">
            <Layers size={16} className="text-blueprint-accent" />
            <span>Tailwind CSS v3.0+</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-slate-700">
            <Box size={16} className="text-blueprint-accent" />
            <span>Package Manager (npm/yarn/pnpm)</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 border-b border-slate-200">
          <div className="flex overflow-x-auto hide-scrollbar">
            {FRAMEWORKS.map((fw) => (
              <button
                key={fw.id}
                onClick={() => setActiveTab(fw.id)}
                className={`px-8 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                  activeTab === fw.id
                    ? 'border-b-2 border-slate-900 text-slate-900'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {fw.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-16 animate-in fade-in duration-500">
          {CONTENT[activeTab].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 lg:gap-16">
              
              {/* Step indicator & Text */}
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-start gap-4">
                  <div className="text-slate-300 font-mono text-xl font-light flex gap-2">
                    [ <span className="text-slate-900 font-bold">{item.step}</span> ]
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[14px] font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 font-serif italic text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="md:w-2/3 mt-4 md:mt-0">
                <CodeBlock 
                  code={item.code} 
                  title={item.titleLabel} 
                />
              </div>

            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-32 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-widest gap-4">
          <span>Module: @nevil5249/shadowcraft</span>
          <span>Status: Public_Registry_Active</span>
        </div>

      </div>
    </div>
  );
};

export default Docs;
