import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.08), transparent 55%)',
        }}
      />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-5 text-white">
          Ship interfaces with real depth
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Install ShadowCraft, pick a shadow, and give every surface the polish of a premium product UI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/library"
            className="inline-flex items-center justify-center gap-2 bg-white text-ink px-7 py-3.5 text-sm font-medium tracking-wide rounded-lg w-full sm:w-auto transition-all duration-300 hover:bg-neutral-100"
            style={{
              boxShadow: `
                inset 0px 2px 4px 0px rgba(255, 255, 255, 0.4),
                0px 0.7409732186279143px 0.7409732186279143px -0.75px rgba(0, 0, 0, 0.33),
                0px 2.0178668455264415px 2.0178668455264415px -1.5px rgba(0, 0, 0, 0.32),
                0px 4.430505261661892px 4.430505261661892px -2.25px rgba(0, 0, 0, 0.3),
                0px 9.834710084098335px 9.834710084098335px -3px rgba(0, 0, 0, 0.25),
                0px 25px 25px -3.75px rgba(0, 0, 0, 0.11),
                0px 0px 0px 1px rgb(130, 130, 130)
              `,
            }}
          >
            Start free
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium tracking-wide rounded-lg w-full sm:w-auto transition-all duration-300 hover:bg-white/5 hover:border-white/35"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
