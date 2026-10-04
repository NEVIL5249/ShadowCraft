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
      description: 'Add ShadowCraft to your project with a single npm command.',
      code: 'npm install @nevil5249/shadowcraft',
      titleLabel: 'Terminal'
    },
    {
      step: '02',
      title: 'Configure Tailwind plugin',
      description: 'Wire the plugin into Tailwind so shadow utilities are available in your classes.',
      codeBlocks: [
        {
          label: 'Tailwind v4 (Recommended)',
          titleLabel: 'index.css (Tailwind v4)',
          code: '@import "tailwindcss";\n@plugin "@nevil5249/shadowcraft";',
        },
        {
          label: 'Tailwind v3 (Legacy support)',
          titleLabel: 'tailwind.config.js (Tailwind v3)',
          code: 'module.exports = {\n  plugins: [\n    require(\'@nevil5249/shadowcraft\')\n  ],\n}',
        }
      ]
    },
    {
      step: '03',
      title: 'Apply volumetric shadows',
      description: 'Start using any curated shadow class in your components immediately.',
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
      titleLabel: 'Component.jsx'
    }
  ],
  nextjs: [
    {
      step: '01',
      title: 'Install the package',
      description: 'Add ShadowCraft to your Next.js application.',
      code: 'npm install @nevil5249/shadowcraft',
      titleLabel: 'Terminal'
    },
    {
      step: '02',
      title: 'Configure Tailwind',
      description: 'Add the plugin to your Tailwind setup for Next.js.',
      codeBlocks: [
        {
          label: 'Tailwind v4 (Recommended)',
          titleLabel: 'index.css (Tailwind v4)',
          code: '@import "tailwindcss";\n@plugin "@nevil5249/shadowcraft";',
        },
        {
          label: 'Tailwind v3 (Legacy support)',
          titleLabel: 'tailwind.config.js (Tailwind v3)',
          code: 'module.exports = {\n  plugins: [\n    require(\'@nevil5249/shadowcraft\')\n  ],\n}',
        }
      ]
    },
    {
      step: '03',
      title: 'Use classes globally',
      description: 'Shadow utilities are available in both server and client components.',
      code: `export default function Page() {
  return (
    <main className="min-h-screen p-24">
      <div
        className="shd-floating-modal bg-white 
                   border border-slate-200"
      >
        Engineered precision in Next.js
      </div>
    </main>
  );
}`,
      titleLabel: 'app/page.tsx'
    }
  ],
  html: [
    {
      step: '01',
      title: 'Install dependency',
      description: 'Fetch the package via npm for your static project.',
      code: 'npm install @nevil5249/shadowcraft',
      titleLabel: 'Terminal'
    },
    {
      step: '02',
      title: 'Update Tailwind config',
      description: 'Add the plugin so multi-layer shadow utilities are generated.',
      codeBlocks: [
        {
          label: 'Tailwind v4 (Recommended)',
          titleLabel: 'index.css (Tailwind v4)',
          code: '@import "tailwindcss";\n@plugin "@nevil5249/shadowcraft";',
        },
        {
          label: 'Tailwind v3 (Legacy support)',
          titleLabel: 'tailwind.config.js (Tailwind v3)',
          code: 'module.exports = {\n  plugins: [\n    require(\'@nevil5249/shadowcraft\')\n  ],\n}',
        }
      ]
    },
    {
      step: '03',
      title: 'Use in HTML',
      description: 'Apply ShadowCraft classes directly in your markup.',
      code: `<!DOCTYPE html>
<html>
<head>
  <link href="./output.css" rel="stylesheet">
</head>
<body class="bg-slate-50 p-12">
  <div class="shd-glass-panel bg-white/80 p-8">
    <h1 
      class="font-sans text-2xl font-bold"
    >
      Pure HTML Integration
    </h1>
  </div>
</body>
</html>`,
      titleLabel: 'index.html'
    }
  ]
};

const Docs = () => {
  const [activeTab, setActiveTab] = useState('react');

  return (
    <div className="pt-14 pb-28 min-h-screen bg-surface">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
            Documentation
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Get started with ShadowCraft
          </h1>
          <p className="text-[16px] text-muted leading-relaxed max-w-2xl">
            Install the package, add the Tailwind plugin, and start using production-ready volumetric shadows in minutes.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mb-12 p-6 md:p-7 bg-white border border-line rounded-2xl">
          <h3 className="w-full text-xs font-semibold uppercase tracking-[0.14em] text-[#9ca3af] border-b border-line pb-4 mb-1">
            Prerequisites
          </h3>
          <div className="flex items-center gap-3 text-sm text-ink-soft">
            <Terminal size={16} className="text-muted" />
            <span>Node.js v16+</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-soft">
            <Layers size={16} className="text-muted" />
            <span>Tailwind CSS v3 or v4</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-soft">
            <Box size={16} className="text-muted" />
            <span>npm / yarn / pnpm</span>
          </div>
        </div>

        <div className="mb-10 border-b border-line">
          <div className="flex overflow-x-auto">
            {FRAMEWORKS.map((fw) => (
              <button
                key={fw.id}
                onClick={() => setActiveTab(fw.id)}
                className={`px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === fw.id
                    ? 'border-b-2 border-ink text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {fw.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-14">
          {CONTENT[activeTab].map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 lg:gap-12">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#9ca3af] pt-0.5">{item.step}</span>
                  <div>
                    <h3 className="text-base font-semibold text-ink tracking-tight mb-2">{item.title}</h3>
                    <p className="text-[15px] text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                {item.codeBlocks ? (
                  <div className="flex flex-col gap-5">
                    {item.codeBlocks.map((block, i) => (
                      <div key={i}>
                        {block.label && (
                          <div className="text-sm font-medium text-ink-soft mb-2">
                            {block.label}
                          </div>
                        )}
                        <CodeBlock
                          code={block.code}
                          title={block.titleLabel}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <CodeBlock
                    code={item.code}
                    title={item.titleLabel}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-6 border-t border-line flex flex-col md:flex-row justify-between items-center text-xs text-muted gap-3">
          <span>@nevil5249/shadowcraft</span>
          <span>Available on npm</span>
        </div>
      </div>
    </div>
  );
};

export default Docs;
