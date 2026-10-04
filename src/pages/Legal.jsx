import React from 'react';

const Legal = () => {
  return (
    <div className="pt-14 pb-28 min-h-screen bg-surface">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
          Legal
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-12">
          Terms & policies
        </h1>

        <div className="space-y-14">
          <section id="terms">
            <h2 className="text-sm font-semibold tracking-tight text-ink border-b border-line pb-3 mb-5">
              Terms of Service
            </h2>
            <div className="text-[15px] text-muted leading-relaxed space-y-4">
              <p>By accessing ShadowCraft, you agree to use the library in accordance with these terms. Shadows and utilities are provided for building modern interfaces.</p>
              <p>The software is provided “as is”, intended for high-quality interface development as described in our documentation.</p>
            </div>
          </section>

          <section id="privacy">
            <h2 className="text-sm font-semibold tracking-tight text-ink border-b border-line pb-3 mb-5">
              Privacy Policy
            </h2>
            <div className="text-[15px] text-muted leading-relaxed space-y-4">
              <p>We do not collect personal data. Shadow configurations and playground settings remain local in your browser.</p>
              <p>Anonymous usage signals may be used only to improve product quality and documentation.</p>
            </div>
          </section>

          <section id="security">
            <h2 className="text-sm font-semibold tracking-tight text-ink border-b border-line pb-3 mb-5">
              Security
            </h2>
            <div className="text-[15px] text-muted leading-relaxed space-y-4">
              <p>Exported CSS and Tailwind classes are intended for production use and should be reviewed as part of your normal release process.</p>
              <p>Report security concerns through the contact options available on this site.</p>
            </div>
          </section>
        </div>

        <div className="mt-20 pt-6 border-t border-line flex items-center justify-between text-xs text-muted">
          <span>ShadowCraft</span>
          <span>Updated 2026</span>
        </div>
      </div>
    </div>
  );
};

export default Legal;
