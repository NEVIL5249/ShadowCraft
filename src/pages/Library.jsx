import React, { useState, useMemo, useEffect } from 'react';
import { shadows } from '../data/shadows';
import ShadowCard from '../components/ShadowCard';
import { Search, Filter, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  'ALL', 'BUTTON', 'ELEVATION', 'INSET', 'GLASS', 'FLOATING', 'AMBIENT',
  'STRUCTURAL', 'CRISP', 'DIFFUSED', 'BLUEPRINT', 'VOLUMETRIC',
  'GEOMETRIC', 'MICRO', 'COLORFUL', 'NEUMORPHISM', 'MATERIAL',
  'DIRECTIONAL', 'GLOW', 'DARK MODE', 'SKEUOMORPHIC', 'CINEMATIC'
];

const ITEMS_PER_PAGE = 9;

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredShadows = useMemo(() => {
    return shadows.filter((shadow) => {
      const matchesSearch = shadow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            shadow.usage.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'ALL' || shadow.category.toUpperCase() === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchQuery, activeCategory]);

  const visibleShadows = filteredShadows.slice(0, visibleCount);
  const hasMore = visibleCount < filteredShadows.length;
  const remainingCount = filteredShadows.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredShadows.length));
  };

  return (
    <div className="pt-14 pb-28 min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-line pb-10">
          <div className="max-w-2xl">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#9ca3af] mb-4">
              Shadow library
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">
              Browse every elevation
            </h1>
            <p className="text-[16px] text-muted leading-relaxed max-w-xl">
              A curated set of production-ready multi-layer shadows for cards, modals, inputs, and modern product UI.
            </p>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-ink transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search shadows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-line rounded-xl py-3.5 pl-12 pr-10 text-sm text-ink placeholder:text-[#9ca3af] focus:outline-none focus:border-[#b0b0b0] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-ink"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap border-2 ${
                  activeCategory === cat
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-muted border-[#e8e8e6] hover:border-[#d4d4d4] hover:text-ink'
                }`}
                style={
                  activeCategory === cat
                    ? {
                        boxShadow:
                          'inset 0 2px 4px rgba(255,255,255,0.22), inset 0 -1px 2px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.2)',
                      }
                    : undefined
                }
              >
                {cat === 'ALL' ? 'All' : cat.charAt(0) + cat.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="library-grid" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {filteredShadows.length > 0 ? (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleShadows.map((shadow, index) => (
                  <motion.div
                    key={shadow.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className="h-full"
                  >
                    <ShadowCard shadow={shadow} padding="p-6 md:p-8" corner="none" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMore && (
              <div className="mt-14 flex flex-col items-center">
                <button onClick={handleLoadMore} className="btn-primary rounded-xl">
                  <Plus size={16} />
                  Load more
                  <span className="text-white/60 font-normal">
                    ({remainingCount})
                  </span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-28 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-white text-center px-6">
            <div className="mb-4 text-muted">
              <Filter size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-ink tracking-tight">No matching shadows</h3>
            <p className="text-muted text-sm mt-2">Try adjusting your filters or search query.</p>
            <button
              onClick={() => { setActiveCategory('ALL'); setSearchQuery(''); }}
              className="btn-secondary rounded-xl mt-8"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="border-t border-line pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted gap-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>{shadows.length} total</span>
            <span>Filter: {activeCategory === 'ALL' ? 'All' : activeCategory}</span>
            <span>Showing {visibleShadows.length} of {filteredShadows.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
