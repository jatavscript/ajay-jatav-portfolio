import React, { useState } from 'react';
import { CircularStamp } from './CircularStamp';
import { Trophy, X, ExternalLink, Eye, CheckCircle, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface HackathonItem {
  id: string;
  title: string;
  projectName: string;
  award: string;
  date: string;
  badgeColor: string;
  summary: string;
  bullets: string[];
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  isNew?: boolean;
}

export const HackathonsSlide: React.FC = () => {
  const [selectedHack, setSelectedHack] = useState<HackathonItem | null>(null);

  const hackathons: HackathonItem[] = [
    {
      id: 'hackverse',
      title: 'HackVerse X Microsoft Hackathon',
      projectName: 'FARSIGHT — Railway Intelligence Platform',
      award: 'WINNER - 1ST PLACE 🏆',
      date: 'July 2026',
      badgeColor: 'bg-amber-400 text-neutral-900',
      summary: 'Won the HackVerse X Microsoft Hackathon by engineering an Agentic AI railway management platform with real-time congestion forecasting and autonomous digital twin agents.',
      bullets: [
        'AI-powered congestion prediction & real-time risk analysis',
        'Railway digital twin visualization with 3D status simulation',
        'Autonomous multi-agent simulation & proactive intervention recommendations'
      ],
      techStack: ['Agentic AI', 'Digital Twin', 'Python', 'React', 'FastAPI', 'Azure'],
      githubUrl: 'https://github.com/jatavscript/farsight',
      liveUrl: 'https://farsight-fawn.vercel.app/'
    },
    {
      id: 'roamverse',
      title: 'Odoo Hackathon',
      projectName: 'Roamverse — Multi-City Travel Planner',
      award: 'FEATURED HACKATHON INNOVATION 🚀',
      date: '2025',
      badgeColor: 'bg-purple-600 text-white',
      isNew: true,
      summary: 'An intelligent multi-city travel planning platform for creating interactive itineraries, managing travel budgets, and sharing travel experiences.',
      bullets: [
        'Interactive multi-city itinerary creator & real-time budget management',
        'Dynamic visual expense charts with Recharts & client-side persistence',
        'Fluid navigation with TanStack Router, ShadCN UI & Sonner notifications'
      ],
      techStack: ['React', 'TypeScript', 'Vite', 'TanStack Router', 'Tailwind CSS', 'ShadCN UI', 'Zustand', 'Recharts'],
      githubUrl: 'https://github.com/jatavscript/Roamverse-odoo-hackathon',
      liveUrl: 'https://roamingverse.netlify.app/'
    },
    {
      id: 'sih2025',
      title: 'Smart India Hackathon (SIH) 2025',
      projectName: 'Team TEA — Sikkim Monasteries Virtual Experience',
      award: 'INTERNAL ROUND WINNER (TOP 5 / 80+ TEAMS)',
      date: 'November 2025',
      badgeColor: 'bg-cyan-600 text-white',
      summary: 'Secured Top 5 position among 80+ teams at Vadodara Hackathon 6.0, earning official university nomination for SIH 2025.',
      bullets: [
        'AI-powered tourism & cultural preservation platform for Sikkim monasteries',
        '360° virtual tours & custom 3D monastery walkthroughs',
        'Gamified heritage quests & multilingual audio guides'
      ],
      techStack: ['React', 'Three.js / 360°', 'Node.js', 'AI Tour Guide', 'Tailwind CSS'],
      githubUrl: 'https://github.com/jatavscript/Team-TEA',
      liveUrl: 'https://team-tea.vercel.app/'
    },
    {
      id: 'aiml2',
      title: 'National-Level AI/ML Hackathon 2.0',
      projectName: 'Healthcare Buddy — AI Medical Assistant',
      award: 'TEAM LEADER (36-HR HACK)',
      date: 'March 2025',
      badgeColor: 'bg-blue-600 text-white',
      summary: 'Served as Team Leader, designing an AI-driven healthcare assistant for real-time health guidance and clinical workflows.',
      bullets: [
        'ML-based clinical insights & smart interaction flows',
        'Practical healthcare use cases developed during 36-hour intensive hackathon',
        'Led team of 4 engineers from ideation to final jury demo'
      ],
      techStack: ['Python', 'Machine Learning', 'NLP', 'FastAPI', 'React']
    }
  ];

  const featuredHack = hackathons[0];
  const otherHacks = hackathons.slice(1);

  return (
    <section 
      id="slide-6" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#f6f7fa] text-[#172944] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 select-none"
    >
      {/* Background Watermark Stamps */}
      <div className="absolute -top-16 -right-16 pointer-events-none opacity-15">
        <CircularStamp size={320} color="#172944" opacity={0.2} text="hackathons • innovation • code • " />
      </div>
      <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-15">
        <CircularStamp size={340} color="#172944" opacity={0.2} text="hackathons • innovation • code • " />
      </div>

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-purple-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col justify-between">
        
        {/* Main Headline */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>COMPETITIONS & RECOGNITION</span>
          </div>
          <h2 className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider text-[#172944] uppercase leading-none">
            HACKATHONS & WINS
          </h2>
          <p className="text-slate-600 text-sm font-sans mt-2 max-w-2xl">
            National hackathons, 1st place Microsoft winner, Odoo innovations, and Smart India Hackathon finalist projects.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Top Winner Feature Card (FARSIGHT) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#172944] via-[#13233b] to-[#0c182a] text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-700/60 flex flex-col justify-between space-y-5 relative overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-52 h-52 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-400 text-neutral-900 flex items-center gap-1 shadow-sm">
                  <Trophy className="w-3.5 h-3.5" /> 1ST PLACE WINNER
                </span>
                <span className="text-xs font-mono text-cyan-300">{featuredHack.date}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5">
                {featuredHack.title}
              </h3>
              
              <div className="text-xs sm:text-sm font-mono text-cyan-200 mb-3 font-semibold">
                {featuredHack.projectName}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {featuredHack.summary}
              </p>

              {/* Tech Stack Pills */}
              {featuredHack.techStack && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {featuredHack.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-cyan-200 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Bullets */}
              <div className="space-y-1.5 text-xs text-slate-200 pt-3 border-t border-white/10">
                {featuredHack.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
              <span className="text-xs text-slate-400 font-mono">Recognized by Microsoft</span>
              
              <div className="flex items-center gap-2 flex-wrap">
                {featuredHack.liveUrl && (
                  <a
                    href={featuredHack.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold text-xs shadow-sm transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {featuredHack.githubUrl && (
                  <a
                    href={featuredHack.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs transition-all"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                <button 
                  onClick={() => setSelectedHack(featuredHack)}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Inspect Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Other Hackathons (Roamverse, SIH 2025, AI/ML 2.0) */}
          <div className="lg:col-span-6 space-y-3.5">
            {otherHacks.map((hack) => (
              <div 
                key={hack.id}
                className={`bg-white p-4 sm:p-5 rounded-3xl border shadow-sm transition-all flex flex-col justify-between ${
                  hack.isNew 
                    ? 'border-purple-300/80 shadow-[0_4px_20px_rgba(147,51,234,0.08)] bg-gradient-to-br from-white via-white to-purple-50/40' 
                    : 'border-slate-200/90 hover:border-blue-400/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-1.5 gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono text-purple-700 font-bold uppercase tracking-wider bg-purple-100/80 px-2 py-0.5 rounded-md">
                        {hack.award}
                      </span>
                      {hack.isNew && (
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-md bg-amber-400 text-neutral-900 font-bold inline-flex items-center gap-0.5">
                          <Sparkles className="w-2.5 h-2.5" /> NEW
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                      {hack.date}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-[#172944] tracking-tight">
                    {hack.title}
                  </h4>

                  <div className="text-xs font-mono text-slate-700 font-semibold mb-1.5">
                    {hack.projectName}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {hack.summary}
                  </p>

                  {/* Tech stack chips */}
                  {hack.techStack && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {hack.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/70">
                          {tech}
                        </span>
                      ))}
                      {hack.techStack.length > 5 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                          +{hack.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Action Links */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {hack.liveUrl && (
                      <a
                        href={hack.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-xs transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {hack.githubUrl && (
                      <a
                        href={hack.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
                      >
                        <FaGithub className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button 
                    onClick={() => setSelectedHack(hack)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    title="View details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Hackathon Details Lightbox Modal */}
      {selectedHack && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedHack(null)}
        >
          <div 
            className="relative max-w-xl w-full bg-[#172944] rounded-3xl p-6 sm:p-8 border border-white/20 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                  {selectedHack.award}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {selectedHack.title}
                </h3>
                <p className="text-xs text-cyan-200 font-mono mt-0.5">{selectedHack.projectName} • {selectedHack.date}</p>
              </div>
              <button 
                onClick={() => setSelectedHack(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-5">
              {selectedHack.summary}
            </p>

            {/* Tech Stack */}
            {selectedHack.techStack && (
              <div className="mb-5">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Technologies Used:
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHack.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/10 text-white border border-white/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2.5 mb-6">
              <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
                Project Key Features & Achievements:
              </h5>
              {selectedHack.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-white/90">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Modal Action Links */}
            {(selectedHack.liveUrl || selectedHack.githubUrl) && (
              <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2.5">
                  {selectedHack.liveUrl && (
                    <a
                      href={selectedHack.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold text-xs shadow-sm transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedHack.githubUrl && (
                    <a
                      href={selectedHack.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs transition-all"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Hackathon Repository
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HackathonsSlide;
