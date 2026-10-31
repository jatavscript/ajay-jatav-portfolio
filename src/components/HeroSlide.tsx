import React from 'react';
import KineticGrid from './ui/kinetic-grid';
import { 
  ButterflyDoodle, 
  SparkleStar, 
  CassetteTape, 
  VinylRecord, 
  ClapperBoard, 
  HeadphonesSticker,
  HandDrawnArrow 
} from './Doodles';

export const HeroSlide: React.FC = () => {
  return (
    <section 
      id="slide-1" 
      className="relative w-full overflow-hidden"
    >
      <KineticGrid className="min-h-screen text-white flex flex-col justify-center items-center px-4 pt-24 sm:pt-28 pb-8 sm:pb-12 select-none">

      {/* Floating Sparkles & Doodles */}
      <div className="absolute top-20 left-[22%] opacity-80 animate-pulse pointer-events-none">
        <SparkleStar className="w-5 h-5" color="#ffffff" />
      </div>
      <div className="absolute top-28 right-[24%] opacity-70 pointer-events-none">
        <SparkleStar className="w-4 h-4" color="#ffffff" />
      </div>
      <div className="absolute top-48 left-10 opacity-80 animate-float pointer-events-none">
        <ButterflyDoodle className="w-8 h-8" color="#ffffff" />
      </div>
      <div className="absolute top-36 right-14 opacity-75 animate-float-delayed pointer-events-none">
        <ButterflyDoodle className="w-7 h-7" color="#ffffff" />
      </div>
      <div className="absolute bottom-28 left-20 opacity-70 pointer-events-none">
        <SparkleStar className="w-6 h-6" color="#ffffff" />
      </div>

      {/* Four Corner Stickers */}
      {/* 1. Top Left: Cassette Tape */}
      <div className="absolute top-16 sm:top-20 left-6 sm:left-14 lg:left-24 z-20 animate-float">
        <div className="relative group cursor-pointer">
          <CassetteTape className="w-24 sm:w-32 md:w-36 h-auto shadow-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
          <span className="absolute -top-5 right-2 text-2xl font-serif text-white/90 animate-bounce">♪</span>
          <span className="absolute -top-3 right-8 text-xl font-serif text-white/80">♫</span>
        </div>
      </div>

      {/* 2. Top Right: Headphones */}
      <div className="absolute top-16 sm:top-20 right-6 sm:right-14 lg:right-24 z-20 animate-float-delayed">
        <div className="relative hover:scale-110 transition-transform duration-300">
          <HeadphonesSticker className="w-20 sm:w-28 md:w-32 h-auto drop-shadow-2xl rotate-12" />
        </div>
      </div>

      {/* 3. Bottom Left: Vinyl Record */}
      <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-14 lg:left-24 z-20 animate-spin-slow">
        <VinylRecord className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-2xl" />
      </div>

      {/* 4. Bottom Right: Clapperboard */}
      <div className="absolute bottom-8 sm:bottom-12 right-6 sm:right-14 lg:right-24 z-20 hover:scale-105 transition-transform duration-300">
        <ClapperBoard className="w-24 sm:w-32 md:w-36 h-auto rotate-6 hover:rotate-0 transition-transform duration-300 shadow-2xl" />
      </div>

      {/* Slide Main Container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto z-10">
        
        {/* Giant "Ajay Jatav" Title */}
        <div className="relative z-0 text-center mb-[-40px] sm:mb-[-70px] md:mb-[-90px]">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[10.5rem] font-extrabold tracking-tight text-white drop-shadow-2xl leading-none select-none whitespace-nowrap">
            Ajay Jatav
          </h1>
        </div>

        {/* Central Creator Visual Area */}
        <div className="relative z-10 flex items-center justify-center">
          
          {/* ARROWS AND TAGS POINTING TO AJAY */}
          {/* Top Left: web developer */}
          <div className="absolute top-[22%] -left-28 sm:-left-36 md:-left-44 z-30 hidden sm:flex items-center gap-1.5 animate-float">
            <span className="font-handwriting text-2xl md:text-3xl text-white font-bold tracking-wide drop-shadow">
              web developer
            </span>
            <HandDrawnArrow direction="left-to-right" className="w-12 md:w-16 h-6" color="#ffffff" />
          </div>

          {/* Mid Left: agentic AI builder */}
          <div className="absolute top-[48%] -left-28 sm:-left-36 md:-left-48 z-30 hidden sm:flex items-center gap-1.5 animate-float-delayed">
            <span className="font-handwriting text-2xl md:text-3xl text-white font-bold tracking-wide drop-shadow">
              agentic AI builder
            </span>
            <HandDrawnArrow direction="left-to-right" className="w-12 md:w-16 h-6" color="#ffffff" />
          </div>

          {/* Top Right: hackathon winner */}
          <div className="absolute top-[22%] -right-24 sm:-right-32 md:-right-44 z-30 hidden sm:flex items-center gap-1.5 animate-float-delayed">
            <HandDrawnArrow direction="right-to-left" className="w-12 md:w-16 h-6" color="#ffffff" />
            <span className="font-handwriting text-2xl md:text-3xl text-white font-bold tracking-wide drop-shadow">
              hackathon winner 🏆
            </span>
          </div>

          {/* Mid Right: full stack engineer */}
          <div className="absolute top-[48%] -right-32 sm:-right-40 md:-right-52 z-30 hidden sm:flex items-center gap-1.5 animate-float">
            <HandDrawnArrow direction="right-to-left" className="w-12 md:w-16 h-6" color="#ffffff" />
            <span className="font-handwriting text-2xl md:text-3xl text-white font-bold tracking-wide drop-shadow">
              full stack engineer
            </span>
          </div>

          {/* Cutout Photo of Ajay Jatav */}
          <div className="relative w-64 sm:w-80 md:w-[22rem] max-w-full group">
            <img 
              src="/images/ajay_hero.png" 
              alt="Ajay Jatav — Portfolio Hero" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>

        {/* Mobile Tags Row for small screens */}
        <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-4 z-20">
          <span className="font-handwriting text-lg text-white bg-white/10 px-3 py-0.5 rounded-full border border-white/20">✦ web developer</span>
          <span className="font-handwriting text-lg text-white bg-white/10 px-3 py-0.5 rounded-full border border-white/20">✦ agentic AI builder</span>
          <span className="font-handwriting text-lg text-white bg-white/10 px-3 py-0.5 rounded-full border border-white/20">✦ hackathon winner</span>
          <span className="font-handwriting text-lg text-white bg-white/10 px-3 py-0.5 rounded-full border border-white/20">✦ full stack engineer</span>
        </div>

      </div>
      </KineticGrid>
    </section>
  );
};
export default HeroSlide;
