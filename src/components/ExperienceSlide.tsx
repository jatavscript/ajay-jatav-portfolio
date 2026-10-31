import React from 'react';
import { CircularStamp } from './CircularStamp';
import { ExternalLink, CheckCircle2, Globe, Building2, Calendar } from 'lucide-react';

interface ExperienceItem {
  duration: string;
  status?: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  websiteUrl?: string;
}

export const ExperienceSlide: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      duration: 'February 2026 – October 2026',
      status: 'Completed',
      role: 'Web Developer Intern',
      company: 'Parul University',
      description:
        'Developed and maintained responsive university web pages using HTML, CSS, JavaScript, WordPress, and plugins. Improved website functionality and implemented UI enhancements.',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Plugins', 'UI Enhancements'],
    },
    {
      duration: 'Project-Based',
      role: 'Freelance Web Developer',
      company: 'Advocate Website',
      description:
        'Designed and developed a professional advocate website using WordPress, Elementor, and plugins, focusing on responsive design and user-friendly navigation.',
      skills: ['WordPress', 'Elementor', 'Plugins', 'Responsive Design', 'Client Delivery'],
      websiteUrl: 'https://deveshkhandelwal.com/',
    },
  ];

  return (
    <section 
      id="slide-8" 
      className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#f6f7fa] text-[#172944] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 select-none"
    >
      {/* Background Watermark Circular Stamps */}
      <div className="absolute -top-16 -right-16 pointer-events-none opacity-15">
        <CircularStamp size={320} color="#172944" opacity={0.2} text="working experience • professional journey • " />
      </div>
      <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-15">
        <CircularStamp size={340} color="#172944" opacity={0.2} text="working experience • professional journey • " />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-between space-y-10 sm:space-y-12">
        
        {/* Main Headline */}
        <div>
          <h2 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider text-[#172944] uppercase leading-none">
            WORKING <br />
            EXPERIENCE
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-sans mt-2">
            Hands-on internship at Parul University and client-focused freelance web development.
          </p>
        </div>

        {/* 2 Columns Experience Grid with balanced spacing and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 p-6 sm:p-8 flex flex-col justify-between group overflow-hidden"
            >
              {/* Top Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Duration & Status / Website Link Pill Header */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.duration}</span>
                  </div>

                  {exp.status && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      {exp.status}
                    </span>
                  )}

                  {exp.websiteUrl && (
                    <a
                      href={exp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-semibold bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-300/80 transition-colors shadow-xs group/link"
                      title="Visit Live Website"
                    >
                      <Globe className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3 text-cyan-600 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Role / Position */}
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#172944] tracking-tight group-hover:text-blue-900 transition-colors">
                  {exp.role}
                </h3>

                {/* Company / Client */}
                <div className="flex items-center gap-1.5 font-mono text-sm text-cyan-700 font-semibold mt-1 mb-4">
                  <Building2 className="w-4 h-4 text-cyan-600" />
                  <span>{exp.company}</span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-[#38485c] leading-relaxed font-normal mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Bottom: Skills Tags & Live Link if available */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.websiteUrl && (
                  <div className="pt-1">
                    <a
                      href={exp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 hover:underline"
                    >
                      <span>deveshkhandelwal.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSlide;
