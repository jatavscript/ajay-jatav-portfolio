import React from 'react';

// Doodled Butterfly
export const ButterflyDoodle: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-6 h-6", 
  color = "currentColor" 
}) => (
  <svg 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M20 20C17 12 10 10 7 14C4 18 8 26 20 22C32 26 36 18 33 14C30 10 23 12 20 20Z" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M20 22C18 28 12 32 9 30C6 28 8 22 20 22C32 22 34 28 31 30C28 32 22 28 20 22Z" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path 
      d="M20 12V28M18 9L20 12L22 9" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
    />
  </svg>
);

// Sparkle Star Doodle
export const SparkleStar: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-5 h-5", 
  color = "currentColor" 
}) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path 
      d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" 
      fill={color} 
    />
  </svg>
);

// Hand-drawn arrow pointing to element
export const HandDrawnArrow: React.FC<{ 
  direction?: 'left-to-right' | 'right-to-left' | 'curve-down';
  className?: string;
  color?: string;
}> = ({ direction = 'left-to-right', className = "w-16 h-8", color = "#ffffff" }) => {
  if (direction === 'right-to-left') {
    return (
      <svg viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M65 8 C 45 6, 25 18, 8 20" stroke={color} strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" fill="none"/>
        <path d="M14 15 L 6 20 L 13 25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (direction === 'curve-down') {
    return (
      <svg viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M5 5 C 20 8, 38 18, 35 32" stroke={color} strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" fill="none"/>
        <path d="M28 27 L 35 34 L 40 27" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 70 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 20 C 25 18, 45 6, 62 8" stroke={color} strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" fill="none"/>
      <path d="M56 3 L 64 8 L 57 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Retro Cassette Tape Sticker
export const CassetteTape: React.FC<{ className?: string }> = ({ className = "w-28 h-20" }) => (
  <div className={`relative bg-gradient-to-br from-neutral-800 to-neutral-900 border-2 border-neutral-600 rounded-lg p-2.5 shadow-2xl flex flex-col justify-between select-none ${className}`}>
    <div className="flex justify-between items-center text-[9px] font-mono text-neutral-300 font-bold tracking-wider px-1">
      <span>SIDE A</span>
      <span className="bg-neutral-200 text-neutral-900 px-1 rounded-xs text-[8px] font-sans">THE 1975</span>
      <span>C-60</span>
    </div>
    
    {/* Cassette Center Window */}
    <div className="relative bg-neutral-200 rounded py-1 px-3 flex items-center justify-between shadow-inner my-1">
      {/* Reel Left */}
      <div className="w-5 h-5 rounded-full border-2 border-neutral-700 bg-neutral-900 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-neutral-200 flex items-center justify-center">
          <div className="w-1 h-1 bg-neutral-900 rounded-full"></div>
        </div>
      </div>
      {/* Center tape strip */}
      <div className="h-3 w-8 bg-neutral-800 rounded-sm flex items-center justify-center">
        <div className="h-1 w-6 bg-amber-900/80 rounded-full"></div>
      </div>
      {/* Reel Right */}
      <div className="w-5 h-5 rounded-full border-2 border-neutral-700 bg-neutral-900 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-neutral-200 flex items-center justify-center">
          <div className="w-1 h-1 bg-neutral-900 rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Bottom screws & details */}
    <div className="flex justify-between items-center px-1 text-[7px] text-neutral-400">
      <span>●</span>
      <span className="tracking-widest">STEREO HI-FI</span>
      <span>●</span>
    </div>
  </div>
);

// Vinyl Record Disc
export const VinylRecord: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <div className={`relative rounded-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-700 p-2 shadow-2xl flex items-center justify-center select-none ${className}`}>
    {/* Vinyl Grooves */}
    <div className="w-full h-full rounded-full border border-neutral-700/60 flex items-center justify-center">
      <div className="w-4/5 h-4/5 rounded-full border border-neutral-700/50 flex items-center justify-center">
        <div className="w-3/5 h-3/5 rounded-full border border-neutral-700/40 flex items-center justify-center">
          {/* Label center */}
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
  </div>
);

// Cinema Clapperboard Sticker
export const ClapperBoard: React.FC<{ className?: string }> = ({ className = "w-24 h-20" }) => (
  <div className={`relative bg-neutral-900 text-white rounded-md border-2 border-neutral-700 p-2 shadow-2xl flex flex-col justify-between font-mono select-none ${className}`}>
    {/* Top striped bar */}
    <div className="h-4 w-full bg-white rounded-sm overflow-hidden flex">
      <div className="w-3 h-full bg-neutral-950 -skew-x-12"></div>
      <div className="w-3 h-full bg-white -skew-x-12"></div>
      <div className="w-3 h-full bg-neutral-950 -skew-x-12"></div>
      <div className="w-3 h-full bg-white -skew-x-12"></div>
      <div className="w-3 h-full bg-neutral-950 -skew-x-12"></div>
      <div className="w-3 h-full bg-white -skew-x-12"></div>
      <div className="w-3 h-full bg-neutral-950 -skew-x-12"></div>
      <div className="w-3 h-full bg-white -skew-x-12"></div>
    </div>

    {/* Clapperboard Info */}
    <div className="grid grid-cols-2 gap-1 text-[8px] border-t border-neutral-700 pt-1 mt-1 font-bold text-neutral-300">
      <div>
        <span className="text-[6px] text-neutral-400 block">SCENE</span>
        <span>01</span>
      </div>
      <div>
        <span className="text-[6px] text-neutral-400 block">TAKE</span>
        <span>04</span>
      </div>
      <div className="col-span-2 border-t border-neutral-800 pt-0.5">
        <span className="text-[6px] text-neutral-400 block">PROD.</span>
        <span className="tracking-wider text-white">PORTFOLIO</span>
      </div>
    </div>
  </div>
);

// Headphones Graphic
export const HeadphonesSticker: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Headband */}
    <path 
      d="M20 55 C20 20, 80 20, 80 55" 
      stroke="#ffffff" 
      strokeWidth="7" 
      strokeLinecap="round" 
    />
    {/* Headband padding cushion */}
    <path 
      d="M32 32 C38 27, 62 27, 68 32" 
      stroke="#d1d5db" 
      strokeWidth="5" 
      strokeLinecap="round" 
    />
    {/* Left Earcup */}
    <rect x="14" y="50" width="14" height="26" rx="7" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    <rect x="18" y="55" width="6" height="16" rx="3" fill="#9ca3af" />
    {/* Right Earcup */}
    <rect x="72" y="50" width="14" height="26" rx="7" fill="#ffffff" stroke="#e5e7eb" strokeWidth="2" />
    <rect x="76" y="55" width="6" height="16" rx="3" fill="#9ca3af" />
  </svg>
);
