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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 ease-out"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white border border-slate-200 w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="absolute inset-0 blueprint-bg opacity-5 pointer-events-none"></div>
        <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-slate-900 z-20"></div>
        
        <div className="relative z-10 p-8 h-full flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-blueprint-accent"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">Contact Portal</span>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-slate-900 uppercase italic font-serif">
                Reach <span className="text-slate-400 not-italic font-sans font-bold">Out</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all border border-transparent hover:border-slate-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6 flex-grow">
            <a 
              href="mailto:nevilgadhia@gmail.com" 
              className="group flex items-center justify-between p-6 border border-slate-100 hover:border-slate-900 transition-all bg-slate-50/50 hover:bg-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Email</p>
                  <p className="font-mono text-sm text-slate-900 uppercase">nevilgadhia@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-900 transition-all" />
            </a>

            <a 
              href="https://www.linkedin.com/in/nevilgadhia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-slate-100 hover:border-slate-900 transition-all bg-slate-50/50 hover:bg-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">LinkedIn</p>
                  <p className="font-mono text-sm text-slate-900 uppercase">nevilgadhia</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-900 transition-all" />
            </a>

            <a 
              href="https://twitter.com/nevil5249" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 border border-slate-100 hover:border-slate-900 transition-all bg-slate-50/50 hover:bg-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Twitter size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Twitter</p>
                  <p className="font-mono text-sm text-slate-900 uppercase">@nevil5249</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-900 transition-all" />
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between text-[9px] font-mono text-slate-300 uppercase tracking-widest">
            <span>Lat: 22.3039 | Long: 70.8022</span>
            <span>Est_Response: 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
