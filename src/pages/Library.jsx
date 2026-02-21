import React, { useState, useMemo } from 'react';
import { shadows } from '../data/shadows';
import ShadowCard from '../components/ShadowCard';
import { Search, Filter, X } from 'lucide-react';

const CATEGORIES = [
  'ALL',  'ELEVATION', 'INSET', 'GLASS', 'FLOATING', 'AMBIENT', 
  'STRUCTURAL', 'CRISP', 'DIFFUSED', 'BLUEPRINT', 'VOLUMETRIC', 
  'GEOMETRIC', 'MICRO','COLORFUL'
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredShadows = useMemo(() => {
    return shadows.filter((shadow) => {
      const matchesSearch = shadow.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            shadow.usage.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'ALL' || shadow.category.toUpperCase() === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-12 pb-32 min-h-screen bg-white">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-slate-100 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-[1px] w-8 bg-blueprint-accent"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blueprint-accent">Library Index</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-light tracking-tight text-slate-900 uppercase italic font-serif">
              The Shadow <span className="text-slate-400 not-italic font-sans font-bold">Protocols</span>
            </h1>
            <p className="mt-4 text-slate-500 font-serif italic text-lg lg:max-w-xl">
              A comprehensive repository of architectural depth definitions, benchmarked for visual integrity and performance.
            </p>
          </div>
          
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blueprint-accent transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search shadows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 py-4 pl-12 pr-4 text-sm font-mono focus:outline-none focus:border-blueprint-accent focus:bg-white transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${
                  activeCategory === cat 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {filteredShadows.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredShadows.map((shadow) => (
              <div key={shadow.id} className="h-full">
                <ShadowCard shadow={shadow} padding="p-6 md:p-8" />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center border border-dashed border-slate-200 text-center">
            <div className="text-blueprint-accent mb-4">
              <Filter size={48} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-light text-slate-900 uppercase tracking-widest">No matching protocols</h3>
            <p className="text-slate-400 font-mono text-xs mt-2 uppercase tracking-tight">Try adjusting your filters or search query</p>
            <button 
              onClick={() => {setActiveCategory('ALL'); setSearchQuery('');}}
              className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-blueprint-accent hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-600 uppercase tracking-widest gap-4">
          <div className="flex gap-8">
            <span>total_entries: {shadows.length}</span>
            <span>active_filter: {activeCategory}</span>
            <span>visible: {filteredShadows.length}</span>
          </div>
          <div>sys_status: optimized_ready</div>
        </div>
      </div>
    </div>
  );
};

export default Library;
