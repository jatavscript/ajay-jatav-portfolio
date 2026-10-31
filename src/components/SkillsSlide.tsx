import React from 'react';
import { CircularStamp } from './CircularStamp';
import { 
  FaReact, 
  FaWordpress, 
  FaGitAlt, 
  FaDocker 
} from 'react-icons/fa';
import { 
  SiMysql, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiXampp 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Code2, Layers, Wrench, Globe } from 'lucide-react';

interface SkillItem {
  name: string;
  renderIcon: () => React.ReactNode;
}

// Brand-authentic SVG Icons matching the reference design
const PythonIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 drop-shadow-xs" fill="none">
    <path 
      d="M15.9 3 C11 3 11.3 5.1 11.3 5.1 L11.3 7.3 L16 7.3 L16 8 L9.4 8 C7.3 8 5.5 9.7 5.5 12.3 C5.5 15.3 7.1 16.5 7.1 16.5 L8.9 16.5 L8.9 14.1 C8.9 11.3 11.3 11.3 11.3 11.3 L16 11.3 C18.3 11.3 20.3 9.4 20.3 7.2 C20.3 4.4 18.3 3 15.9 3 Z M13.3 4.8 C13.9 4.8 14.4 5.3 14.4 5.9 C14.4 6.5 13.9 7 13.3 7 C12.7 7 12.2 6.5 12.2 5.9 C12.2 5.3 12.7 4.8 13.3 4.8 Z" 
      fill="#3776AB" 
    />
    <path 
      d="M16.1 29 C21 29 20.7 26.9 20.7 26.9 L20.7 24.7 L16 24.7 L16 24 L22.6 24 C24.7 24 26.5 22.3 26.5 19.7 C26.5 16.7 24.9 15.5 24.9 15.5 L23.1 15.5 L23.1 17.9 C23.1 20.7 20.7 20.7 20.7 20.7 L16 20.7 C13.7 20.7 11.7 22.6 11.7 24.8 C11.7 27.6 13.7 29 16.1 29 Z M18.7 27.2 C18.1 27.2 17.6 26.7 17.6 26.1 C17.6 25.5 18.1 25 18.7 25 C19.3 25 19.8 25.5 19.8 26.1 C19.8 26.7 19.3 27.2 18.7 27.2 Z" 
      fill="#FFD43B" 
    />
  </svg>
);

const JavaIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 drop-shadow-xs" fill="none">
    <path 
      d="M13 5 C11 7 13 9 11 11 M16 4 C14 6.5 16.5 8.5 14.5 11 M19 5 C17 7 19 9 17.5 11" 
      stroke="#EA2D2E" 
      strokeWidth="1.6" 
      strokeLinecap="round" 
    />
    <path 
      d="M8 14 C8 21 14 22 17 22 C20 22 22 20 22 14 Z" 
      fill="#EA2D2E" 
    />
    <path 
      d="M22 15 C24 15 25.5 16 25.5 17.5 C25.5 19 24 20 22 20" 
      stroke="#EA2D2E" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
    />
    <path 
      d="M6 24 C12 26 20 26 26 24" 
      stroke="#5382A1" 
      strokeWidth="2" 
      strokeLinecap="round" 
    />
    <path 
      d="M8 26.5 C13 28.5 19 28.5 24 26.5" 
      stroke="#5382A1" 
      strokeWidth="1.6" 
      strokeLinecap="round" 
    />
  </svg>
);

const Html5Icon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 drop-shadow-xs" fill="none">
    <path d="M5 3 L7.5 27 L16 29.5 L24.5 27 L27 3 Z" fill="#E44D26" />
    <path d="M16 5 L16 27.5 L22.8 25.5 L24.8 5 Z" fill="#F16529" />
    <path d="M10 8 L22 8 L21.5 12 L16 12 L16 15 L21.2 15 L20.5 22.5 L16 23.8 L11.5 22.5 L11.2 18.5 L14.2 18.5 L14.4 20.3 L16 20.7 L17.6 20.3 L17.8 17.5 L10.8 17.5 Z" fill="#FFFFFF" />
  </svg>
);

const Css3Icon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 drop-shadow-xs" fill="none">
    <path d="M5 3 L7.5 27 L16 29.5 L24.5 27 L27 3 Z" fill="#1572B6" />
    <path d="M16 5 L16 27.5 L22.8 25.5 L24.8 5 Z" fill="#33A9DC" />
    <path d="M10 8 L22 8 L21.5 12 L16 12 L16 14.5 L21.2 14.5 L20.5 22.5 L16 23.8 L11.5 22.5 L11.2 19 L14.2 19 L14.4 20.3 L16 20.7 L17.6 20.3 L17.8 17 L10.5 17 Z" fill="#FFFFFF" />
  </svg>
);

const GcpIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 drop-shadow-xs" fill="none">
    <path d="M16 8 C12.7 8 9.9 9.8 8.8 12.4 C6.1 12.7 4 15 4 17.8 C4 20.8 6.5 23.3 9.5 23.3 L22.5 23.3 C25.5 23.3 28 20.8 28 17.8 C28 14.8 25.5 12.3 22.5 12.3 C22 12.3 21.5 12.4 21 12.5 C20.2 9.9 18.3 8 16 8 Z" fill="#4285F4" />
    <path d="M16 8 C18.3 8 20.2 9.9 21 12.5 L16 16 Z" fill="#EA4335" />
    <path d="M21 12.5 C21.5 12.4 22 12.3 22.5 12.3 C25.5 12.3 28 14.8 28 17.8 L21 17.8 Z" fill="#FBBC05" />
    <path d="M9.5 23.3 L22.5 23.3 L16 16 Z" fill="#34A853" />
  </svg>
);

const JoomlaIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7 drop-shadow-xs" fill="none">
    <circle cx="11" cy="11" r="3.5" fill="#F44321" />
    <circle cx="21" cy="11" r="3.5" fill="#8BB838" />
    <circle cx="21" cy="21" r="3.5" fill="#0E86CA" />
    <circle cx="11" cy="21" r="3.5" fill="#E8A020" />
    <path d="M13.5 11 L18.5 11 M21 13.5 L21 18.5 M18.5 21 L13.5 21 M11 18.5 L11 13.5" stroke="#444" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SkillsSlide: React.FC = () => {
  // Category 1: Programming Languages & Databases
  const programmingLanguages: SkillItem[] = [
    {
      name: 'JavaScript',
      renderIcon: () => (
        <div className="w-7 h-7 rounded-md bg-[#F7DF1E] text-neutral-900 flex items-center justify-center font-extrabold text-xs shadow-xs font-mono">
          JS
        </div>
      ),
    },
    {
      name: 'PHP',
      renderIcon: () => (
        <div className="w-9 h-6 rounded-md bg-[#777BB4] text-white flex items-center justify-center font-extrabold text-[10px] shadow-xs font-mono">
          PHP
        </div>
      ),
    },
    {
      name: 'Python',
      renderIcon: () => <PythonIcon />,
    },
    {
      name: 'Java',
      renderIcon: () => <JavaIcon />,
    },
    {
      name: 'C',
      renderIcon: () => (
        <div className="w-7 h-7 rounded-full bg-[#00599C] text-white flex items-center justify-center font-bold text-xs shadow-xs font-sans">
          C
        </div>
      ),
    },
    {
      name: 'HTML',
      renderIcon: () => <Html5Icon />,
    },
    {
      name: 'CSS',
      renderIcon: () => <Css3Icon />,
    },
    {
      name: 'MySQL',
      renderIcon: () => (
        <SiMysql className="w-8 h-7 text-[#00758F] drop-shadow-xs" />
      ),
    },
  ];

  // Category 2: Frameworks & Libraries
  const frameworksLibraries: SkillItem[] = [
    {
      name: 'React',
      renderIcon: () => (
        <FaReact className="w-7 h-7 text-[#00D8FF] drop-shadow-xs" />
      ),
    },
    {
      name: 'Node.js',
      renderIcon: () => (
        <SiNodedotjs className="w-7 h-7 text-[#339933] drop-shadow-xs" />
      ),
    },
    {
      name: 'Tailwind',
      renderIcon: () => (
        <SiTailwindcss className="w-7 h-7 text-[#06B6D4] drop-shadow-xs" />
      ),
    },
    {
      name: 'Bootstrap',
      renderIcon: () => (
        <div className="w-7 h-7 rounded-md bg-[#7952B3] text-white flex items-center justify-center font-extrabold text-xs shadow-xs font-sans">
          B
        </div>
      ),
    },
  ];

  // Category 3: Tools & Platforms
  const toolsPlatforms: SkillItem[] = [
    {
      name: 'WordPress',
      renderIcon: () => (
        <FaWordpress className="w-7 h-7 text-[#21759B] drop-shadow-xs" />
      ),
    },
    {
      name: 'Joomla',
      renderIcon: () => <JoomlaIcon />,
    },
    {
      name: 'Git',
      renderIcon: () => (
        <FaGitAlt className="w-7 h-7 text-[#F05032] drop-shadow-xs" />
      ),
    },
    {
      name: 'Docker',
      renderIcon: () => (
        <FaDocker className="w-8 h-7 text-[#2496ED] drop-shadow-xs" />
      ),
    },
    {
      name: 'GCP',
      renderIcon: () => <GcpIcon />,
    },
    {
      name: 'VS Code',
      renderIcon: () => (
        <VscVscode className="w-7 h-7 text-[#007ACC] drop-shadow-xs" />
      ),
    },
    {
      name: 'XAMPP',
      renderIcon: () => (
        <SiXampp className="w-7 h-7 text-[#FB7A24] drop-shadow-xs" />
      ),
    },
  ];

  return (
    <section 
      id="slide-4" 
      className="relative w-full min-h-[88vh] lg:min-h-[92vh] bg-[#f8f9fd] text-[#0f172a] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-10 sm:py-14 select-none"
    >
      {/* Background Circular Watermark Stamp */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-10">
        <CircularStamp size={320} color="#172944" opacity={0.2} text="skills & technical expertise • " />
      </div>

      {/* Subtle purple ambient gradient glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Heading, Subtitle & Languages */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:pr-2">
          
          {/* Purple Code Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#6366f1] text-white flex items-center justify-center shadow-lg shadow-purple-500/25 mb-4">
            <Code2 className="w-6 h-6 stroke-[2.5]" />
          </div>

          {/* Large Heading */}
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#0f172a] leading-[1.05]">
              Skills & <br />
              Expertise
            </h2>
            {/* Curved purple accent underline */}
            <svg className="w-28 sm:w-32 h-3.5 text-[#8b5cf6] mt-1.5" viewBox="0 0 130 16" fill="none">
              <path d="M4 12 Q65 2 126 12" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base font-sans mt-4 max-w-xs leading-relaxed">
            A blend of programming, tools, and technologies to build real-world solutions.
          </p>

          {/* Subtle Divider */}
          <div className="w-full max-w-xs h-[1px] bg-slate-200/80 my-5" />

          {/* Communication & Languages Section */}
          <div className="w-full max-w-xs">
            <div className="flex items-center gap-1.5 text-[#7c3aed] text-xs font-mono font-bold tracking-wider uppercase mb-2.5">
              <Globe className="w-3.5 h-3.5" />
              <span>COMMUNICATION & LANGUAGES</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'English' },
                { name: 'Hindi' },
                { name: 'Gujarati' },
              ].map((item) => (
                <span 
                  key={item.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-200/80 hover:shadow-xs transition-shadow"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: 3 Compact Glassmorphism Cards */}
        <div className="lg:col-span-8 flex flex-col space-y-3.5 sm:space-y-4">
          
          {/* Card 1: Programming Languages & Databases */}
          <div className="relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(124,58,237,0.05),0_2px_8px_rgba(0,0,0,0.02)] border border-white/90 hover:shadow-[0_12px_36px_rgba(124,58,237,0.08)] transition-all duration-200">
            {/* Category Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-xs shadow-xs font-mono">
                &lt;/&gt;
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0f172a] tracking-tight">
                Programming Languages & Databases
              </h3>
            </div>

            {/* Icon Tiles Grid / Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {programmingLanguages.map((item) => (
                <div 
                  key={item.name}
                  className="flex flex-col items-center justify-center p-2 w-[66px] sm:w-[72px] h-[74px] sm:h-[80px] rounded-2xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-md hover:-translate-y-0.5 hover:border-purple-200 transition-all duration-200 group cursor-default"
                >
                  <div className="h-7 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {item.renderIcon()}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 mt-1 font-sans tracking-tight text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Frameworks & Libraries */}
          <div className="relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(124,58,237,0.05),0_2px_8px_rgba(0,0,0,0.02)] border border-white/90 hover:shadow-[0_12px_36px_rgba(124,58,237,0.08)] transition-all duration-200">
            {/* Category Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#7c3aed] flex items-center justify-center shadow-xs">
                <Layers className="w-4 h-4 stroke-[2.2]" />
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0f172a] tracking-tight">
                Frameworks & Libraries
              </h3>
            </div>

            {/* Icon Tiles Grid / Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {frameworksLibraries.map((item) => (
                <div 
                  key={item.name}
                  className="flex flex-col items-center justify-center p-2 w-[66px] sm:w-[72px] h-[74px] sm:h-[80px] rounded-2xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-md hover:-translate-y-0.5 hover:border-purple-200 transition-all duration-200 group cursor-default"
                >
                  <div className="h-7 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {item.renderIcon()}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 mt-1 font-sans tracking-tight text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Tools & Platforms */}
          <div className="relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(124,58,237,0.05),0_2px_8px_rgba(0,0,0,0.02)] border border-white/90 hover:shadow-[0_12px_36px_rgba(124,58,237,0.08)] transition-all duration-200">
            {/* Category Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-purple-100 text-[#7c3aed] flex items-center justify-center shadow-xs">
                <Wrench className="w-4 h-4 stroke-[2.2]" />
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#0f172a] tracking-tight">
                Tools & Platforms
              </h3>
            </div>

            {/* Icon Tiles Grid / Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {toolsPlatforms.map((item) => (
                <div 
                  key={item.name}
                  className="flex flex-col items-center justify-center p-2 w-[66px] sm:w-[72px] h-[74px] sm:h-[80px] rounded-2xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-md hover:-translate-y-0.5 hover:border-purple-200 transition-all duration-200 group cursor-default"
                >
                  <div className="h-7 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {item.renderIcon()}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 mt-1 font-sans tracking-tight text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSlide;
