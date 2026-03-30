import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Main Shield / Emblem Structure */}
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
          {/* Mortarboard (Graduation Cap) on top */}
          <path d="M100 10 L160 35 L100 60 L40 35 Z" fill="#1e3a8a" />
          <path d="M60 45 L60 65 C60 65 100 85 140 65 L140 45" fill="#1e3a8a" />
          <path d="M160 35 L160 60" stroke="#f97316" strokeWidth="2" fill="none" />
          <circle cx="160" cy="65" r="3" fill="#f97316" />

          {/* Brandenburg Gate (Simplified) */}
          <rect x="70" y="75" width="60" height="30" fill="#facc15" opacity="0.2" />
          <rect x="75" y="80" width="5" height="25" fill="#1e3a8a" />
          <rect x="85" y="80" width="5" height="25" fill="#1e3a8a" />
          <rect x="95" y="80" width="5" height="25" fill="#1e3a8a" />
          <rect x="105" y="80" width="5" height="25" fill="#1e3a8a" />
          <rect x="115" y="80" width="5" height="25" fill="#1e3a8a" />
          <rect x="125" y="80" width="5" height="25" fill="#1e3a8a" />
          <rect x="70" y="75" width="60" height="5" fill="#1e3a8a" />

          {/* Main Banner for "Sprachfit" */}
          <text x="100" y="135" textAnchor="middle" className="font-serif font-black text-3xl fill-red-700">Sprach</text>
          <text x="145" y="135" textAnchor="middle" className="font-serif font-black text-3xl fill-yellow-500">fit</text>

          {/* ZYAD KHALED Banner */}
          <path d="M40 145 L160 145 L170 165 L30 165 Z" fill="#1e3a8a" stroke="#f97316" strokeWidth="2" />
          <text x="100" y="159" textAnchor="middle" className="font-bold text-[10px] fill-white tracking-widest">★ ZYAD KHALED ★</text>

          {/* German Flag Shield at the bottom */}
          <path d="M60 170 L140 170 L100 195 Z" fill="none" stroke="#1e3a8a" strokeWidth="1" />
          <rect x="65" y="170" width="70" height="8" fill="black" />
          <rect x="65" y="178" width="70" height="8" fill="red" />
          <rect x="65" y="186" width="70" height="8" fill="#facc15" />
          
          {/* Laurel Wreaths (Simplified) */}
          <path d="M30 100 Q10 140 30 180" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M170 100 Q190 140 170 180" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
};
