import React from 'react';

const Legal = () => {
  return (
    <div className="pt-12 pb-32 min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-12">
          <span className="h-[1px] w-8 bg-blueprint-accent"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">Protocol Docs</span>
        </div>
        
        <h1 className="text-4xl font-light tracking-tight text-slate-900 uppercase italic font-serif mb-16">
          Legal <span className="text-slate-400 not-italic font-sans font-bold">Frameworks</span>
        </h1>

        <div className="space-y-20">
          <section id="terms">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-900 border-b border-slate-100 pb-4 mb-8">01 // Terms of Service</h2>
            <div className="font-serif text-slate-600 leading-relaxed italic space-y-4">
              <p>By accessing ShadowCraft, you agree to technical adherence with our interface standards. All shadows generated are structurally optimized for visual integrity.</p>
              <p>The software is provided "as is", designed for high-precision interface development within the volumetric framework specified in our documentation.</p>
            </div>
          </section>

          <section id="privacy">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-900 border-b border-slate-100 pb-4 mb-8">02 // Privacy Policy</h2>
            <div className="font-serif text-slate-600 leading-relaxed italic space-y-4">
              <p>We do not collect personal data. Your architectural definitions and shadow configurations are handled locally within your browser's execution context.</p>
              <p>Anonymous telemetry may be recorded to optimize the volumetric algorithm and improve system performance v4.0.1.</p>
            </div>
          </section>

          <section id="security">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-900 border-b border-slate-100 pb-4 mb-8">03 // Security</h2>
            <div className="font-serif text-slate-600 leading-relaxed italic space-y-4">
              <p>Our framework maintains strict structural integrity. We ensure that exported CSS and Tailwind classes are sanitized and optimized for production environments.</p>
              <p>Access protocols are encrypted via standard interface security layers, ensuring your design systems remain protected.</p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          <span>Status: Public_Domain</span>
          <span>Last_Update: 2026.02.21</span>
        </div>
      </div>
    </div>
  );
};

export default Legal;
