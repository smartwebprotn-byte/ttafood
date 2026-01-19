
import React from 'react';
import { CATEGORIES } from '../constants';

interface CategoryGridProps {
  onCategorySelect: (id: string) => void;
  selectedCategoryId: string | null;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect, selectedCategoryId }) => {
  return (
    <div className="sticky top-[74px] z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 py-4 px-3 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.06)] transition-all duration-300">
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-4 pb-2 px-1 sm:px-0 mx-auto max-w-7xl">
        {/* Mobile grid with 2x4 layout for all 8 items */}
        <div className="col-span-4 grid grid-cols-4 gap-2 md:hidden">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="flex flex-col items-center group transition-all active:scale-95"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-1 shadow-sm transition-all duration-500 relative overflow-hidden ${isActive
                    ? 'bg-[#0EA5E9] scale-105 shadow-lg shadow-blue-200'
                    : 'bg-[#0EA5E9]/10 group-hover:bg-[#0EA5E9] group-hover:shadow-md'
                  }`}>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent animate-pulse"></div>
                )}
                <i className={`fa-solid ${cat.icon} text-base transition-all duration-500 ${isActive ? 'text-white rotate-0' : 'text-[#0EA5E9] group-hover:text-white group-hover:rotate-12'
                  }`}></i>
              </div>
              <span className={`text-center text-[8px] font-black leading-tight transition-all duration-300 uppercase tracking-[0.05em] ${isActive ? 'text-[#0EA5E9]' : 'text-gray-400 group-hover:text-gray-900'
                }`}>
                {cat.label}
              </span>
              </button>
            );
          })}
        </div>
        {/* Desktop horizontal scroll for all categories */}
        <div className="hidden md:flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide px-4 sm:px-0 mx-auto max-w-7xl col-span-8">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategorySelect(cat.id)}
                className="flex flex-col items-center group transition-all active:scale-95 flex-shrink-0 snap-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-2 shadow-sm transition-all duration-500 relative overflow-hidden ${isActive
                    ? 'bg-[#0EA5E9] scale-110 shadow-lg shadow-blue-200'
                    : 'bg-[#0EA5E9]/10 group-hover:bg-[#0EA5E9] group-hover:shadow-md'
                  }`}>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent animate-pulse"></div>
                )}
                <i className={`fa-solid ${cat.icon} text-base sm:text-lg transition-all duration-500 ${isActive ? 'text-white rotate-0' : 'text-[#0EA5E9] group-hover:text-white group-hover:rotate-12'
                  }`}></i>
              </div>
              <span className={`text-center text-[8px] sm:text-[9px] font-black leading-tight max-w-[60px] sm:max-w-[80px] transition-all duration-300 uppercase tracking-[0.05em] sm:tracking-[0.1em] ${isActive ? 'text-[#0EA5E9] translate-y-0.5' : 'text-gray-400 group-hover:text-gray-900'
                }`}>
                {cat.label}
              </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
