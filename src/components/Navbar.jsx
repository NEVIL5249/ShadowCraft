import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-ink' : 'text-muted hover:text-ink'
    }`;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-line bg-white/85 backdrop-blur-md shadow-ui-nav px-6 lg:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-white">
              <span className="material-symbols-outlined text-[18px]">architecture</span>
            </div>
            <span className="text-base font-semibold tracking-tight">ShadowCraft</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/library" className={linkClass}>Library</NavLink>
            <NavLink to="/playground" className={linkClass}>Playground</NavLink>
            <NavLink to="/docs" className={linkClass}>Docs</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="text-sm font-medium text-muted hover:text-ink transition-colors cursor-pointer"
            >
              Contact
            </button>
            <a
              href="https://www.npmjs.com/package/@nevil5249/shadowcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-2.5 !text-sm !rounded-xl"
            >
              Get the package
            </a>
          </div>

          <button
            className="md:hidden p-2 text-ink"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ink/25 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-xs bg-white shadow-ui-lift transition-transform duration-300 transform md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-20">
          <button
            className="absolute top-5 right-6 p-2 text-ink"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={22} />
          </button>

          <nav className="flex flex-col space-y-6 mt-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${isActive ? 'text-ink' : 'text-muted'} text-xl font-semibold tracking-tight`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/library"
              className={({ isActive }) => `${isActive ? 'text-ink' : 'text-muted'} text-xl font-semibold tracking-tight`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Library
            </NavLink>
            <NavLink
              to="/playground"
              className={({ isActive }) => `${isActive ? 'text-ink' : 'text-muted'} text-xl font-semibold tracking-tight`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Playground
            </NavLink>
            <NavLink
              to="/docs"
              className={({ isActive }) => `${isActive ? 'text-ink' : 'text-muted'} text-xl font-semibold tracking-tight`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </NavLink>
          </nav>

          <div className="mt-10 pt-8 border-t border-line flex flex-col space-y-4">
            <button
              onClick={() => { onOpenContact(); setIsMobileMenuOpen(false); }}
              className="text-sm font-medium text-muted hover:text-ink self-start text-left"
            >
              Contact
            </button>
            <a
              href="https://www.npmjs.com/package/@nevil5249/shadowcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center !rounded-xl"
            >
              Get the package
            </a>
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-line pt-8">
            <div className="w-8 h-8 rounded-lg bg-ink text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[16px]">architecture</span>
            </div>
            <div>
              <p className="font-semibold text-sm tracking-tight text-ink">ShadowCraft</p>
              <p className="text-xs text-muted">Premium shadow library</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
