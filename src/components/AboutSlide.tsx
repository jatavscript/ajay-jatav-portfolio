import React from 'react';
import { ButterflyDoodle } from './Doodles';
import { CircularStamp } from './CircularStamp';
import { Code } from 'lucide-react';
import avatar3D from '@/assets/Friendly 3D Developer Avatar with Code Laptop.png';

export const AboutSlide: React.FC = () => {
  return (
    <section 
      id="slide-2" 
      className="relative w-full min-h-[72vh] lg:min-h-[78vh] bg-[#f6f7fa] text-[#172944] flex items-center justify-center overflow-hidden px-6 py-20 sm:py-24 lg:py-28 select-none"
    >
      {/* Background Watermark Circular Stamps */}
      <div className="absolute -top-16 -left-16 pointer-events-none opacity-15">
        <CircularStamp size={320} color="#172944" opacity={0.2} text="code with passion • build with purpose • " />
      </div>
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-15">
        <CircularStamp size={340} color="#172944" opacity={0.2} text="code with passion • build with purpose • " />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: 3D Developer Avatar (replaces card) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
            <img 
              src={avatar3D} 
              alt="Ajay Jatav 3D Developer Avatar" 
              className="w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(23,41,68,0.22)] rounded-3xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Side: Headline and Story */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left lg:pl-6">
          
          {/* Butterfly Doodle on top of heading */}
          <div className="mb-2 text-[#172944] animate-float">
            <ButterflyDoodle className="w-8 h-8" color="#172944" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#172944] mb-6 sm:mb-7 leading-tight">
            About me
          </h2>

          {/* Paragraphs from Ajay's Resume */}
          <div className="space-y-5 sm:space-y-6 text-[#2c3e55] text-base sm:text-lg lg:text-[1.18rem] font-normal leading-relaxed max-w-xl">
            <p>
              I am very excited about getting work experiences. I look forward to using what I've learned in university in real-life situations, learning from experienced professionals, and making valuable contributions to the projects I'll work on.
            </p>
            <p>
              This opportunity is an important step in my personal and professional growth, and I am dedicated to making the most of it. Dedicated to mastering modern web development, agentic AI architectures, and solving challenging engineering problems.
            </p>
          </div>

          {/* Signature & Quick Badge */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <span className="font-handwriting text-3xl sm:text-4xl font-bold text-[#172944]">
              Ajay Jatav ✨
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-[#172944] text-xs font-bold font-mono">
              <Code className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Stack & Agentic AI</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default AboutSlide;
