import React from 'react';

const CTA = () => {
  return (
    <section className="py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-[0.03]"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-none">
          Begin Your <br/>
          <span className="italic font-serif">Construction</span>.
        </h2>
        <p className="font-serif text-xl text-slate-400 max-w-2xl mx-auto mb-12 italic">
          Implement professional-grade depth in your UI within minutes. Join thousands of design engineers building better web software.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-white text-slate-900 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-slate-100 transition-all w-full sm:w-auto">
            Start Project Free
          </button>
          <a className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white pb-1" href="#">Technical Manual</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
