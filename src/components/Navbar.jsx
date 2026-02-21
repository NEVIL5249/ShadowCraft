import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeClass = "text-xs font-bold uppercase tracking-widest text-slate-900 transition-colors";
  const inactiveClass = "text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors";

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-ui-nav px-6 lg:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex h-8 w-8 items-center justify-center border border-slate-900">
              <span className="material-symbols-outlined text-[18px]">architecture</span>
            </div>
            <span className="text-lg font-bold tracking-tight uppercase">ShadowCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <NavLink to="/" end className={({ isActive }) => isActive ? activeClass : inactiveClass}>Home</NavLink>
            <NavLink to="/library" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Library</NavLink>
            <NavLink to="/playground" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Playground</NavLink>
            <NavLink to="/docs" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Docs</NavLink>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={onOpenContact}
              className="text-xs font-bold uppercase tracking-widest border-b cursor-pointer border-slate-900 pb-0.5"
            >
              Contact
            </button>
            <a 
              href="https://www.npmjs.com/package/@nevil5249/shadowcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-2 cursor-pointer text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              NPM Registry <span className="text-slate-400 text-[9px]">v1.0.1</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-slate-900/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Off-canvas Mobile Menu */}
      <div 
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-20">
          <button 
            className="absolute top-5 right-6 p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col space-y-8 mt-12">
            <NavLink 
              to="/" 
              end 
              className={({ isActive }) => `${isActive ? 'text-slate-900' : 'text-slate-400'} text-xl font-bold uppercase tracking-widest`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/library" 
              className={({ isActive }) => `${isActive ? 'text-slate-900' : 'text-slate-400'} text-xl font-bold uppercase tracking-widest`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Library
            </NavLink>
            <NavLink 
              to="/playground" 
              className={({ isActive }) => `${isActive ? 'text-slate-900' : 'text-slate-400'} text-xl font-bold uppercase tracking-widest`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Playground
            </NavLink>
            <NavLink 
              to="/docs" 
              className={({ isActive }) => `${isActive ? 'text-slate-900' : 'text-slate-400'} text-xl font-bold uppercase tracking-widest`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </NavLink>
          </nav>
          
          <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col space-y-6">
            <button 
              onClick={() => { onOpenContact(); setIsMobileMenuOpen(false); }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-slate-900 self-start text-left"
            >
              Contact
            </button>
            <a 
              href="https://www.npmjs.com/package/@nevil5249/shadowcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all w-full text-center"
            >
              View on NPM
            </a>
          </div>
          
          <div className="mt-auto flex items-center gap-3 border-t border-slate-50 pt-8">
            <div className="w-8 h-8 border border-slate-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">architecture</span>
            </div>
            <div>
              <p className="font-bold text-xs uppercase tracking-widest text-slate-900">ShadowCraft</p>
              <p className="text-[8px] font-mono text-slate-400 uppercase">System V4.0.1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
