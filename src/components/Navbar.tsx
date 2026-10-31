import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import avatarLogo from '@/assets/logo.png';

interface NavbarProps {
  onSelectSlide: (index: number) => void;
  viewMode?: 'scroll' | 'deck';
  setViewMode?: (mode: 'scroll' | 'deck') => void;
  currentSlide?: number;
  totalSlides?: number;
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectSlide,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Me', index: 1 },
    { name: 'Education', index: 2 },
    { name: 'Skills', index: 3 },
    { name: 'Projects', index: 4 },
    { name: 'Hackathons', index: 5 },
    { name: 'Certifications', index: 6 },
    { name: 'Experience', index: 7 },
    { name: 'Contact', index: 8 },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-full px-5 py-2.5 transition-all duration-300 flex items-center justify-between ${scrolled
          ? 'bg-[#fcfaf7]/95 backdrop-blur-md border border-stone-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.18)] text-slate-900'
          : 'bg-[#fdfbf7]/90 backdrop-blur-md border border-stone-200/70 shadow-[0_6px_25px_rgba(0,0,0,0.12)] text-slate-900'
        }`}>

        {/* Brand / Ajay Jatav with 3D Cartoon Avatar Logo */}
        <div
          onClick={() => onSelectSlide(0)}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-full overflow-hidden border border-stone-300/80 shadow-sm shrink-0 group-hover:border-slate-500 transition-all bg-stone-100">
            <img 
              src={avatarLogo} 
              alt="Ajay Jatav" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors">
              Ajay Jatav
            </span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase font-mono hidden sm:inline">
              Full-Stack & Agentic AI
            </span>
          </div>
        </div>

        {/* Center: Sections navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onSelectSlide(item.index)}
              className="text-slate-600 hover:text-slate-950 font-medium transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Quick jump to contact: Hire Me */}
          <button
            onClick={() => onSelectSlide(8)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#161618] text-white hover:bg-slate-800 transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Hire Me</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-stone-200/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-6xl mx-auto bg-[#fdfbf7]/98 backdrop-blur-xl border border-stone-200/90 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-800">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  onSelectSlide(item.index);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-stone-200/50 transition-colors cursor-pointer"
              >
                {String(item.index).padStart(2, '0')}. {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
