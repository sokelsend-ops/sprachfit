import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Shield Shape */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-md">
          <path 
            d="M50 5 L90 20 L90 50 C90 75 50 95 50 95 C50 95 10 75 10 50 L10 20 L50 5 Z" 
            fill="#1e3a8a" 
            stroke="#f97316" 
            strokeWidth="4"
          />
          {/* Decorative lines */}
          <path d="M20 30 L80 30" stroke="#f97316" strokeWidth="2" opacity="0.5" />
          <path d="M20 40 L80 40" stroke="#f97316" strokeWidth="2" opacity="0.5" />
        </svg>
        <span className="relative z-10 font-black text-white text-[10px] tracking-tighter text-center leading-none">
          SPRACH<br/>FIT
        </span>
      </div>
      <div className="mt-1 flex flex-col items-center">
        <span className="text-[8px] font-bold text-brand-blue tracking-[0.2em] uppercase leading-none">Zyad Khaled</span>
        <div className="h-0.5 w-full bg-brand-orange mt-0.5 rounded-full" />
      </div>
    </div>
  );
};
