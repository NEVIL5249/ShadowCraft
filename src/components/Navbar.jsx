import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-ui-nav">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center border border-slate-900">
            <span className="material-symbols-outlined text-[18px]">architecture</span>
          </div>
          <span className="text-lg font-bold tracking-tight uppercase">ShadowCraft</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Manifesto</Link>
          <Link to="/library" className="text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-slate-900 transition-colors">Library</Link>
          <Link to="/playground" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Playground</Link>
        </nav>
        <div className="flex items-center gap-6">
          <button className="text-xs font-bold uppercase tracking-widest border-b border-slate-900 pb-0.5">Contact</button>
          <button className="bg-slate-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
            Get Access
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
