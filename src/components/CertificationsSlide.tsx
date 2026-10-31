import React from 'react';
import { CircularStamp } from './CircularStamp';
import { CheckCircle2, Layers, ExternalLink } from 'lucide-react';

interface CertItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: string;
  credentialUrl: string;
  accentBorder: string;
  accentGlow: string;
  cardGradient: string;
  iconBadge: string;
  accentText: string;
}

// Ribbon Medal Icon matching the reference design top-left
const RibbonAwardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
  </svg>
);

export const CertificationsSlide: React.FC = () => {
  const certs: CertItem[] = [
    {
      id: 'tcs',
      name: 'Career Edge – Young Professional',
      issuer: 'Tata Consultancy Services (TCS iON)',
      year: '2025',
      category: 'Professional & Business Soft Skills',
      credentialUrl: 'https://lnkd.in/p/dCQhTKdX',
      accentBorder: 'border-purple-500/50 hover:border-purple-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(168,85,247,0.18)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.32)]',
      cardGradient: 'from-[#1c1335]/95 via-[#131b2e]/95 to-[#0d1627]/98',
      iconBadge: 'from-indigo-500 via-purple-600 to-purple-700',
      accentText: 'text-purple-400',
    },
    {
      id: 'google',
      name: 'Gen AI Academy',
      issuer: 'Google Cloud Skills Boost',
      year: '2025',
      category: 'Generative AI & LLM Systems',
      credentialUrl: 'https://lnkd.in/p/dMVm5EEK',
      accentBorder: 'border-amber-500/50 hover:border-amber-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(245,158,11,0.18)] hover:shadow-[0_8px_35px_rgba(245,158,11,0.32)]',
      cardGradient: 'from-[#2a1a0e]/95 via-[#161d2d]/95 to-[#0d1627]/98',
      iconBadge: 'from-amber-400 via-amber-500 to-orange-500',
      accentText: 'text-amber-400',
    },
    {
      id: 'aws',
      name: 'AWS Data Analytics_FSP',
      issuer: 'FutureSkills Prime (NASSCOM)',
      year: '2025',
      category: 'AWS Cloud & Data Analytics (Gold - 100%)',
      credentialUrl: 'https://lnkd.in/p/dYyKqJHc',
      accentBorder: 'border-sky-500/50 hover:border-sky-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(14,165,233,0.18)] hover:shadow-[0_8px_35px_rgba(14,165,233,0.35)]',
      cardGradient: 'from-[#0e2744]/95 via-[#102033]/95 to-[#0d1627]/98',
      iconBadge: 'from-sky-400 via-cyan-500 to-blue-500',
      accentText: 'text-sky-400',
    },
    {
      id: 'samsung',
      name: 'Samsung Galaxy AI Treasure Hunt',
      issuer: 'Samsung India & Unstop',
      year: '2025',
      category: 'Gamified AI & Problem Solving',
      credentialUrl: 'https://lnkd.in/dAfn_aB7',
      accentBorder: 'border-fuchsia-500/50 hover:border-fuchsia-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(217,70,239,0.18)] hover:shadow-[0_8px_35px_rgba(217,70,239,0.32)]',
      cardGradient: 'from-[#291338]/95 via-[#141b2f]/95 to-[#0d1627]/98',
      iconBadge: 'from-purple-500 via-fuchsia-500 to-pink-500',
      accentText: 'text-fuchsia-400',
    },
    {
      id: 'tata',
      name: 'Data Visualisation: Empowering Business Insights',
      issuer: 'Tata Group',
      year: '2024',
      category: 'Business Analytics & Data Dashboards',
      credentialUrl: 'https://lnkd.in/p/db2P8anz',
      accentBorder: 'border-blue-500/50 hover:border-blue-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(59,130,246,0.18)] hover:shadow-[0_8px_35px_rgba(59,130,246,0.35)]',
      cardGradient: 'from-[#0e2144]/95 via-[#111f35]/95 to-[#0d1627]/98',
      iconBadge: 'from-blue-400 via-blue-500 to-indigo-600',
      accentText: 'text-blue-400',
    },
    {
      id: 'ncat',
      name: 'All India NCAT Aptitude Test',
      issuer: 'Naukri Campus',
      year: '2025',
      category: 'National Competitive Aptitude & Analytics',
      credentialUrl: 'https://lnkd.in/p/dMVm5EEK',
      accentBorder: 'border-teal-500/50 hover:border-teal-400',
      accentGlow: 'shadow-[0_4px_24px_rgba(20,184,166,0.18)] hover:shadow-[0_8px_35px_rgba(20,184,166,0.35)]',
      cardGradient: 'from-[#0a2c2c]/95 via-[#0e2130]/95 to-[#0d1627]/98',
      iconBadge: 'from-emerald-400 via-teal-500 to-cyan-600',
      accentText: 'text-teal-400',
    },
  ];

  return (
    <section 
      id="slide-7" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#172944] text-white flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 select-none"
    >
      {/* Background Watermark Stamp */}
      <div className="absolute -top-16 -right-16 pointer-events-none opacity-20">
        <CircularStamp size={340} color="#ffffff" opacity={0.3} text="certifications • verified credentials • " />
      </div>
      <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-20">
        <CircularStamp size={320} color="#ffffff" opacity={0.25} text="certifications • verified credentials • " />
      </div>

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-between space-y-6 sm:space-y-8">
        
        {/* Top Header: CERTIFICATIONS and partner tags */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-b border-white/10 pb-5">
          <div>
            <h2 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider text-white uppercase leading-none">
              CERTIFICATIONS
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-sans mt-1">
              Verified industry credentials from AWS, Google Cloud, Samsung & TCS
            </p>
          </div>

          {/* Top Brand / Issuer Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-white/90">
            <div className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 font-mono text-xs font-bold tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              Google Cloud
            </div>
            <div className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 font-mono text-xs font-bold tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></span>
              TCS iON
            </div>
            <div className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 font-mono text-xs font-bold tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
              AWS / NASSCOM
            </div>
          </div>
        </div>

        {/* Center: 6 Modern Glassmorphism Certification Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {certs.map((cert) => (
            <div 
              key={cert.id}
              className={`relative overflow-hidden rounded-[22px] p-5 sm:p-6 bg-gradient-to-b ${cert.cardGradient} backdrop-blur-xl border ${cert.accentBorder} ${cert.accentGlow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group min-h-[200px]`}
            >
              {/* Subtle top edge glow highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              <div>
                {/* Card Top Row: Award Icon on Left & Year + Direct Redirect Link on Right */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.iconBadge} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <RibbonAwardIcon className="w-5 h-5 text-white drop-shadow-sm" />
                  </div>

                  {/* Top-Right: Year Badge & Direct Redirect Icon */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-300 font-bold bg-[#0a1220]/80 px-2.5 py-1 rounded-full border border-white/10 shadow-inner">
                      {cert.year}
                    </span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-400/50 transition-all duration-200 hover:scale-110 flex items-center justify-center group/btn"
                        title="Verify / View Certificate"
                        aria-label={`Verify ${cert.name}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-300 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Certification Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-cyan-100 transition-colors leading-snug line-clamp-2">
                  {cert.name}
                </h3>

                {/* Organization / Issuer in Cyan */}
                <p className="text-xs sm:text-[13px] font-mono text-cyan-400 font-medium mt-1 mb-2 tracking-tight">
                  {cert.issuer}
                </p>
              </div>

              {/* Bottom Section with Divider */}
              <div>
                <div className="w-full h-[1px] bg-white/[0.08] my-3.5" />

                <div className="flex items-center justify-between text-xs text-white/80">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <Layers className={`w-3.5 h-3.5 ${cert.accentText} shrink-0`} />
                    <span className="text-[11px] sm:text-xs text-slate-300 truncate font-sans font-normal">
                      {cert.category}
                    </span>
                  </div>

                  {/* Green Verified Check Icon */}
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Organizations Ticker */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-1 text-xs font-mono text-white/70">
          <span>TCS iON</span>
          <span>•</span>
          <span>FutureSkills Prime (NASSCOM)</span>
          <span>•</span>
          <span>Google Cloud Skills Boost</span>
          <span>•</span>
          <span>Tata Group</span>
          <span>•</span>
          <span>Samsung India</span>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSlide;
