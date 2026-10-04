import React, { useEffect } from 'react';
import { X, Mail, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div
        className="fixed inset-0 bg-ink/40 backdrop-blur-md transition-opacity duration-500 ease-out"
        onClick={onClose}
      />

      <div
        className="relative bg-white border border-line w-full max-w-lg overflow-hidden rounded-2xl"
        style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.16), 0 8px 20px rgba(0,0,0,0.06)' }}
      >
        <div className="relative z-10 p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted mb-2">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-ink">
                Get in touch
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-surface text-muted hover:text-ink transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3 flex-grow">
            <a
              href="mailto:nevilgadhia@gmail.com"
              className="group flex items-center justify-between p-5 rounded-xl border border-line hover:border-neutral-300 transition-all bg-surface/60 hover:bg-white hover:shadow-ui-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-line group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted mb-0.5">Email</p>
                  <p className="font-mono text-sm text-ink">nevilgadhia@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-muted group-hover:text-ink transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/nevilgadhia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-line hover:border-neutral-300 transition-all bg-surface/60 hover:bg-white hover:shadow-ui-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-line group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted mb-0.5">LinkedIn</p>
                  <p className="font-mono text-sm text-ink">nevilgadhia</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-muted group-hover:text-ink transition-all" />
            </a>

            <a
              href="https://twitter.com/nevil5249"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-line hover:border-neutral-300 transition-all bg-surface/60 hover:bg-white hover:shadow-ui-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white border border-line group-hover:bg-ink group-hover:text-white group-hover:border-ink transition-all">
                  <Twitter size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted mb-0.5">Twitter</p>
                  <p className="font-mono text-sm text-ink">@nevil5249</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-muted group-hover:text-ink transition-all" />
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-line flex items-center justify-between text-xs text-muted">
            <span>Usually replies within 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
