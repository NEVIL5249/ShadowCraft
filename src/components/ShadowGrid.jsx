import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ShadowCard from './ShadowCard';
import { shadows } from '../data/shadows';

const ShadowGrid = () => {
  return (
    <section className="py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 lg:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-4">
              Explore the library
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Handcrafted elevations for cards, modals, inputs, and hero surfaces—ready to copy into your design system.
            </p>
          </div>
          <Link to="/library" className="btn-primary shrink-0">
            View all shadows
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          <div className="md:col-span-7">
            <ShadowCard shadow={shadows[0]} corner="none" padding="p-8 md:p-10" />
          </div>
          <div className="md:col-span-5 md:mt-10">
            <ShadowCard shadow={shadows[1]} corner="none" padding="p-8 md:p-10" />
          </div>
          <div className="md:col-span-5">
            <ShadowCard shadow={shadows[2]} variant="glass" corner="none" padding="p-8 md:p-10" />
          </div>
          <div className="md:col-span-7">
            <ShadowCard shadow={shadows[3]} corner="none" padding="p-8 md:p-12" />
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/library"
            className="text-sm font-medium text-ink border-b border-ink/20 pb-0.5 hover:border-ink transition-colors"
          >
            Browse the full catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShadowGrid;
