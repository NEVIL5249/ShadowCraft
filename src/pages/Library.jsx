import React, { useState, useMemo, useEffect } from 'react';
import { shadows } from '../data/shadows';
import ShadowCard from '../components/ShadowCard';
import { Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  'ALL',  'ELEVATION', 'INSET', 'GLASS', 'FLOATING', 'AMBIENT', 
  'STRUCTURAL', 'CRISP', 'DIFFUSED', 'BLUEPRINT', 'VOLUMETRIC', 
  'GEOMETRIC', 'MICRO','COLORFUL'
];

const ITEMS_PER_PAGE = 9;

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredShadows = useMemo(() => {
    return shadows.filter((shadow) => {
      const matchesSearch = shadow.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            shadow.usage.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'ALL' || shadow.category.toUpperCase() === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Reset to first page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    
    // Scroll to the top of the grid with an offset for the sticky navbar
    const grid = document.getElementById('library-grid');
    if (grid) {
      const offset = 100; // Approximate height of navbar + some padding
      const y = grid.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalPages = Math.ceil(filteredShadows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedShadows = filteredShadows.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
      <div id="library-grid" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {filteredShadows.length > 0 ? (
          <>
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {paginatedShadows.map((shadow, index) => (
                  <motion.div 
                    key={shadow.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <ShadowCard shadow={shadow} padding="p-6 md:p-8" corner="none" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-between border-t border-slate-100 pt-8">
                <button 
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                    currentPage === 1 ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900'
                  }`}
                >
                  <ChevronLeft size={14} /> Previous
                </button>
                <div className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase">
                  Page {currentPage} of {totalPages}
                </div>
                <button 
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] border transition-all ${
                    currentPage === totalPages ? 'border-slate-100 text-slate-300 cursor-not-allowed' : 'border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900'
                  }`}
                >
                  Next <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
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
