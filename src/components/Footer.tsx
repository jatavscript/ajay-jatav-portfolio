import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ChevronRight, ExternalLink, Heart } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import resumePdf from '@/assets/resume_aj-SDE.pdf';
import avatarLogo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About Me', id: 'slide-2' },
    { label: 'Education', id: 'slide-3' },
    { label: 'Skills', id: 'slide-4' },
    { label: 'Projects', id: 'slide-5' },
    { label: 'Hackathons', id: 'slide-6' },
    { label: 'Certifications', id: 'slide-7' },
  ];

  const otherLinks = [
    { label: 'Experience', id: 'slide-8', isExternal: false },
    { label: 'Contact', id: 'slide-9', isExternal: false },
    { label: 'Resume', url: resumePdf, isExternal: true },
    { label: 'Hire Me', id: 'slide-9', isExternal: false, isHireMe: true },
  ];

  return (
    <footer className="w-full bg-[#f8fafc] text-slate-700 border-t border-slate-200 select-none">
      {/* Shared Responsive Container System: max-width 1400px with clamp padding */}
      <div 
        className="w-full mx-auto pt-12 pb-6 sm:pb-8"
        style={{
          maxWidth: '1400px',
          paddingInline: 'clamp(24px, 5vw, 80px)',
        }}
      >
        
        {/* Upper Content: Balanced 4-Column CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 xl:gap-10 pb-10 border-b border-slate-200">
          
          {/* Column 1: Identity & Bio */}
          <div className="flex flex-col space-y-3.5">
            
            {/* Identity Badge with 3D Cartoon Avatar Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200/90 bg-[#0a1e38] shadow-sm shrink-0">
                <img 
                  src={avatarLogo} 
                  alt="Ajay Jatav" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-snug">
                  Ajay Jatav
                </span>
                <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-500">
                  Full-Stack & Agentic AI Developer
                </span>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed pt-0.5">
              MCA student, full-stack developer, and hackathon enthusiast passionate about building impactful, user-centric and AI-powered solutions.
            </p>

            {/* Social Media Handle Tiles */}
            <div className="flex items-center gap-2 pt-1.5">
              {/* GitHub */}
              <a
                href="https://github.com/jatavscript"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                title="GitHub"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ajay-jatav-9219ba271"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mr_ajay._.07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-pink-600 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                title="Instagram"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              {/* Mail */}
              <a
                href="mailto:ajayjatav6282@gmail.com"
                className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-600 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                title="Email Ajay"
                aria-label="Email"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-1.5">
            <div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 tracking-wide">
                Quick Links
              </h4>
              <div className="w-7 h-1 bg-blue-500 rounded-full mt-1 mb-3.5" />
            </div>

            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all text-left font-medium cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Other Links */}
          <div className="flex flex-col space-y-1.5">
            <div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 tracking-wide">
                Other Links
              </h4>
              <div className="w-7 h-1 bg-blue-500 rounded-full mt-1 mb-3.5" />
            </div>

            <div className="flex flex-col space-y-2">
              {otherLinks.map((link, idx) => {
                if (link.isExternal && link.url) {
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-medium group"
                      title="Open Resume (PDF)"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </a>
                  );
                }

                return (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(link.id!)}
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all text-left font-medium cursor-pointer group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500 transition-colors shrink-0" />
                    <span>{link.label}</span>
                    {link.isHireMe && (
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 4: Get in Touch (Extended to use full available space on right side) */}
          <div className="flex flex-col space-y-1.5 w-full">
            <div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900 tracking-wide">
                Get in Touch
              </h4>
              <div className="w-7 h-1 bg-blue-500 rounded-full mt-1 mb-3.5" />
            </div>

            <div className="flex flex-col space-y-3 pt-0.5 w-full">
              {/* Email */}
              <a
                href="mailto:ajayjatav6282@gmail.com"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors group font-medium w-full"
              >
                <div className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center shrink-0 text-slate-500 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-sans break-all">ajayjatav6282@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917984122719"
                className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors group font-medium w-full"
              >
                <div className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center shrink-0 text-slate-500 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-sans">+91 7984122719</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 font-medium w-full">
                <div className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center shrink-0 text-slate-500 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <span className="font-sans">Vadodara, Gujarat, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright on Left & Built With + Back to Top on Right sharing identical boundaries */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-sans text-slate-500">
          
          {/* Left: Copyright */}
          <div>
            © 2026 Ajay Jatav. All rights reserved.
          </div>

          {/* Right: Built with & Back to Top aligned to the exact right boundary */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 font-medium">
              <span>Built with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
              <span>using React & Tailwind CSS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-semibold transition-all shadow-xs cursor-pointer group text-xs sm:text-sm"
              title="Scroll to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-slate-500 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
