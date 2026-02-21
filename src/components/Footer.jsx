import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 border border-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-[14px]">architecture</span>
              </div>
              <span className="font-bold text-sm uppercase tracking-widest">ShadowCraft</span>
            </div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Architectural UI Components © 2024</p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">Coordinates</h5>
              <ul className="space-y-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                <li><a className="hover:text-blueprint-accent transition-colors" href="#">GitHub</a></li>
                <li><a className="hover:text-blueprint-accent transition-colors" href="#">Twitter</a></li>
                <li><a className="hover:text-blueprint-accent transition-colors" href="#">Linear</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-900">Specs</h5>
              <ul className="space-y-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                <li><a className="hover:text-blueprint-accent transition-colors" href="#">Terms</a></li>
                <li><a className="hover:text-blueprint-accent transition-colors" href="#">Privacy</a></li>
                <li><a className="hover:text-blueprint-accent transition-colors" href="#">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-50 flex justify-between items-center text-[9px] font-mono text-slate-300">
          <span>SYS_OK_READY</span>
          <span>LAT: 37.7749 | LONG: -122.4194</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
