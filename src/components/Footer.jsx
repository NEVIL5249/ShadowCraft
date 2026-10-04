import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ onOpenContact }) => {
  return (
    <footer className="bg-white py-16 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-ink text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">architecture</span>
              </div>
              <span className="font-semibold text-base tracking-tight text-ink">ShadowCraft</span>
            </div>
            <p className="text-muted text-[15px] leading-relaxed max-w-sm mb-7">
              A premium Tailwind CSS library for multi-layer interface shadows—built for product teams who care about depth.
            </p>
            <button
              onClick={onOpenContact}
              className="btn-primary !px-5 !py-2.5 !text-sm"
            >
              Contact
            </button>
          </div>

          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-ink">Connect</h5>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" href="https://github.com/NEVIL5249">
                  GitHub
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" href="https://www.linkedin.com/in/nevilgadhia">
                  LinkedIn
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors" href="https://www.nevilgadhia.in">
                  Website
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-ink">Legal</h5>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link className="hover:text-ink transition-colors" to="/legal#terms">Terms</Link></li>
              <li><Link className="hover:text-ink transition-colors" to="/legal#privacy">Privacy</Link></li>
              <li><Link className="hover:text-ink transition-colors" to="/legal#security">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <span>© 2026 ShadowCraft</span>
          <span>Built by @nevil5249</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
