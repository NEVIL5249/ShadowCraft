import { Link } from 'react-router-dom';
import ShadowCard from './ShadowCard';
import { shadows } from '../data/shadows';

const ShadowGrid = () => {
  return (
    <section className="py-32 bg-[#fcfcfc]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="flex flex-col items-start relative max-w-2xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 border border-slate-400"></span> 
              Library Index
            </div>
            <h2 className="text-4xl font-light uppercase tracking-tight text-slate-900 mb-6">Shadow Preview Grid</h2>
            <p className="font-serif text-lg text-slate-500 max-w-2xl italic border-l-2 border-slate-100 pl-6 py-2">
              A curated selection of technical shadows, measured for optimal execution time and visual clarity across modern display surfaces.
            </p>
          </div>
          <Link to="/library" className="bg-slate-900 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all mb-2 flex items-center gap-2 group whitespace-nowrap">
            Explore All 
            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12 relative">
          <div className="md:col-span-7">
            <ShadowCard shadow={shadows[0]} corner="top-left" padding="p-12" />
          </div>
          <div className="md:col-span-5 md:mt-32">
            <ShadowCard shadow={shadows[1]} corner="top-right" padding="p-10" />
          </div>
          <div className="md:col-start-2 md:col-span-4">
            <ShadowCard shadow={shadows[2]} variant="glass" corner="bottom-left" padding="p-10" />
          </div>
          <div className="md:col-span-6">
            <ShadowCard shadow={shadows[3]} variant="blueprint" corner="bottom-right" padding="p-16" />
          </div>
        </div>
        <div className="flex justify-center mt-22">
                    <a className="text-xs font-bold uppercase tracking-[0.2em] border-b border-slate-900 pb-1" href="/library">View All</a>

        </div>
      </div>
    </section>
  );
};

export default ShadowGrid;
