import React, { useState } from 'react';
import { CircularStamp } from './CircularStamp';
import { GraduationCap, Laptop, BookOpen, Award, Sparkles } from 'lucide-react';
import educationAvatar from '@/assets/edu.png';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  badgeBorder: string;
  badgeText: string;
  badgeBg: string;
  active?: boolean;
  hasBuildingIcon?: boolean;
}

const educationData: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (M.C.A)',
    institution: 'Parul University, Vadodara',
    period: '2025 – Present',
    description: 'Pursuing MCA with a focus on advanced computing, distributed systems, and agentic AI architectures.',
    icon: GraduationCap,
    iconColor: 'text-purple-300',
    iconBg: 'bg-purple-500/20 border-purple-400/35 shadow-[0_0_15px_rgba(168,85,247,0.25)]',
    badgeBorder: 'border-purple-400/50',
    badgeText: 'text-purple-200',
    badgeBg: 'bg-purple-500/20 shadow-[0_0_12px_rgba(168,85,247,0.2)]',
    active: true,
    hasBuildingIcon: true,
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (B.C.A)',
    institution: 'Parul University, Vadodara',
    period: '2022 – 2025',
    description: 'Completed BCA with a focus on Data Structures, Web Development, PHP, Java, and Database Systems.',
    icon: Laptop,
    iconColor: 'text-blue-300',
    iconBg: 'bg-blue-500/20 border-blue-400/35 shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    badgeBorder: 'border-blue-400/40',
    badgeText: 'text-blue-200',
    badgeBg: 'bg-blue-500/15',
    hasBuildingIcon: true,
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Certificate (H.S.C)',
    institution: 'Don Bosco High School, Vadodara',
    period: 'March 2022',
    description: 'Commerce Stream',
    icon: BookOpen,
    iconColor: 'text-amber-300',
    iconBg: 'bg-amber-500/20 border-amber-400/35 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
    badgeBorder: 'border-amber-400/40',
    badgeText: 'text-amber-200',
    badgeBg: 'bg-amber-500/15',
    hasBuildingIcon: false,
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (S.S.C)',
    institution: 'Yanshy High School, Vadodara',
    period: 'March 2021',
    icon: Award,
    iconColor: 'text-cyan-300',
    iconBg: 'bg-cyan-500/20 border-cyan-400/35 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
    badgeBorder: 'border-cyan-400/40',
    badgeText: 'text-cyan-200',
    badgeBg: 'bg-cyan-500/15',
    hasBuildingIcon: false,
  },
];

const UniversityBuildingWatermark: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 56 48" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.25" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <path d="M28 6 L18 14 L38 14 Z" />
    <path d="M20 14 L20 38 L36 38 L36 14" />
    <rect x="23" y="18" width="3" height="4" rx="0.5" />
    <rect x="30" y="18" width="3" height="4" rx="0.5" />
    <rect x="23" y="25" width="3" height="4" rx="0.5" />
    <rect x="30" y="25" width="3" height="4" rx="0.5" />
    <rect x="25" y="32" width="6" height="6" rx="0.5" />
    <path d="M8 20 L18 20 L18 38 L8 38 Z" />
    <rect x="11" y="24" width="3" height="4" rx="0.5" />
    <rect x="11" y="30" width="3" height="4" rx="0.5" />
    <path d="M38 20 L48 20 L48 38 L38 38 Z" />
    <rect x="42" y="24" width="3" height="4" rx="0.5" />
    <rect x="42" y="30" width="3" height="4" rx="0.5" />
    <line x1="4" y1="38" x2="52" y2="38" />
  </svg>
);

export const EducationSlide: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section 
      id="slide-3" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#111c30] text-white flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 select-none"
    >
      {/* Background Watermark Stamp Bottom Left */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-15">
        <CircularStamp size={320} color="#ffffff" opacity={0.25} text="parul university • computer applications • " />
      </div>

      {/* Ambient Radial Lighting Effects */}
      <div className="absolute top-1/4 -left-20 w-[480px] h-[480px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Heading + 3D Avatar with Books */}
        <div className="lg:col-span-5 flex flex-col items-start justify-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-purple-500/15 border border-purple-400/30 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md mb-4">
            <GraduationCap className="w-4 h-4 text-purple-300" />
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-purple-200">
              ACADEMIC JOURNEY
            </span>
            <span className="text-purple-400/60">•</span>
            <Sparkles className="w-3 h-3 text-cyan-300" />
          </div>

          {/* Main Title */}
          <div className="relative mb-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Education <br />
              Background
            </h2>
            {/* Curved purple accent underline */}
            <svg className="w-28 sm:w-36 h-4 text-purple-400 mt-2" viewBox="0 0 120 18" fill="none">
              <path d="M5 14 Q60 2 115 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* 3D Developer Avatar + Stack of Books Graphic */}
          <div className="relative w-full max-w-lg mx-auto lg:mx-0 flex justify-center items-center group">
            {/* Subtle glow behind the character */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/25 via-blue-600/15 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-105 transition-transform duration-500" />
            
            <img 
              src={educationAvatar} 
              alt="Ajay Jatav 3D Developer Avatar with Education Books" 
              className="relative z-10 w-full max-w-[390px] sm:max-w-[450px] lg:max-w-[470px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.03] transition-all duration-500"
            />
          </div>

        </div>

        {/* Right Column: Glowing Timeline + Glassmorphism Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="relative pl-6 sm:pl-8 md:pl-10 space-y-3.5 sm:space-y-4">
            
            {/* Glowing Vertical Timeline Track */}
            <div className="absolute left-[7px] sm:left-[11px] md:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500/40 to-purple-500/20 shadow-[0_0_8px_rgba(56,189,248,0.4)]" />

            {educationData.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredCard === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  
                  {/* Timeline Milestone Node */}
                  <div className="absolute -left-[27px] sm:-left-[29px] md:-left-[33px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    {item.active ? (
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-cyan-400/50" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400 shadow-[0_0_14px_#38bdf8] border-2 border-[#111c30]" />
                      </div>
                    ) : (
                      <div 
                        className={`h-3 w-3 rounded-full border-2 border-[#111c30] transition-all duration-300 ${
                          isHovered 
                            ? 'bg-cyan-300 shadow-[0_0_12px_#38bdf8] scale-125' 
                            : 'bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.5)]'
                        }`} 
                      />
                    )}
                  </div>

                  {/* Glassmorphism Education Card */}
                  <div 
                    className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 transition-all duration-300 backdrop-blur-xl border ${
                      item.active
                        ? 'bg-gradient-to-r from-purple-500/15 via-[#132238]/85 to-[#132238]/70 border-purple-500/40 shadow-[0_8px_32px_rgba(168,85,247,0.18)] hover:border-purple-400/70 hover:shadow-[0_12px_40px_rgba(168,85,247,0.28)]'
                        : 'bg-[#132238]/65 hover:bg-[#182944]/85 border-white/10 hover:border-cyan-400/40 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(6,182,212,0.18)]'
                    } group-hover:-translate-y-0.5`}
                  >
                    
                    {/* Background University Building Watermark Icon */}
                    {item.hasBuildingIcon && (
                      <div className="absolute right-4 bottom-2.5 pointer-events-none text-white/[0.07] group-hover:text-cyan-400/15 transition-colors duration-300">
                        <UniversityBuildingWatermark className="w-16 h-14" />
                      </div>
                    )}

                    <div className="relative z-10 flex items-start gap-3.5 sm:gap-4">
                      
                      {/* Left Icon Badge */}
                      <div className={`shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0 pr-2">
                        
                        {/* Title & Date Pill Row */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-200 transition-colors tracking-tight">
                            {item.degree}
                          </h3>
                          
                          {/* Period Pill Badge */}
                          <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-mono font-medium border ${item.badgeBorder} ${item.badgeText} ${item.badgeBg}`}>
                            {item.period}
                          </span>
                        </div>

                        {/* Institution Name */}
                        <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1 font-sans">
                          {item.institution}
                        </p>

                        {/* Description (if provided) */}
                        {item.description && (
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans max-w-xl">
                            {item.description}
                          </p>
                        )}

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSlide;
