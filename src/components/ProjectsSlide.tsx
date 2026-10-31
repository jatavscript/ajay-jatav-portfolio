import React, { useState } from 'react';
import { CircularStamp } from './CircularStamp';
import { X, Eye, CheckCircle, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  description: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectsSlide: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      id: 'healthmate',
      title: 'HealthMate.AI',
      subtitle: 'AI-Powered Post-Hospital Recovery Assistant',
      date: 'April 2025',
      tags: ['Agentic AI', 'ElevenLabs', 'Bolt Pro', 'Algorand / IPFS', 'React'],
      githubUrl: 'https://github.com/jatavscript/HealthMate.Ai',
      liveUrl: 'https://healthmatee-ai.netlify.app/',
      description: [
        'HealthMate.AI is an AI-powered post-hospital recovery assistant that helps patients track their recovery progress and receive personalized health recommendations.',
        'It enables seamless communication with caregivers through smart automated workflows and integrated voice assistance via ElevenLabs, Bolt Pro, and decentralized storage on Algorand/IPFS.'
      ],
      highlights: [
        'Personalized AI recovery tracking & symptom analysis',
        'Smart caregiver communication workflows',
        'Decentralized tamper-proof health records with IPFS'
      ]
    },
    {
      id: 'whatif',
      title: 'Internal Marks "What-If" Simulator',
      subtitle: 'Academic Performance Forecasting & Risk Detection Dashboard',
      date: 'Recent',
      tags: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'SQLite', 'ReportLab', 'OpenPyXL'],
      githubUrl: 'https://github.com/jatavscript/what-if-ostf',
      description: [
        'An interactive academic performance forecasting dashboard that helps MCA and engineering students simulate exam scores, predict grades and CGPA, identify backlog risks, and monitor attendance eligibility.',
        'Provides real-time what-if modeling with target grade calculation, multi-scenario comparisons, and automated performance analytics exports in PDF, Excel, and CSV formats.'
      ],
      highlights: [
        'Real-time marks simulation & target grade calculator',
        'Attendance risk detection & backlog vulnerability warnings',
        'Multi-scenario comparison with interactive Plotly & Matplotlib charts',
        'Automated PDF, Excel, and CSV comprehensive report exports'
      ]
    },
    {
      id: 'periodic',
      title: 'Interactive Periodic Table Web App',
      subtitle: 'CodeCircuit Hackathon — Shortlisted by Outlier',
      date: 'March 2025',
      tags: ['JavaScript', 'Modern CSS', 'Interactive UI', 'Science Tech'],
      githubUrl: 'https://github.com/jatavscript/Periodic-table',
      description: [
        'Developed a dynamic, interactive Periodic Table web app, merging chemistry science with modern responsive frontend design.',
        'Attended pre-hackathon architecture sessions by Outlier, which helped structure and optimize the idea, earning a shortlisting for freelance frontend opportunities.'
      ],
      highlights: [
        'Interactive element inspection & live property filters',
        'Modern animated design system',
        'Shortlisted by Outlier for engineering talent'
      ]
    }
  ];

  return (
    <section 
      id="slide-5" 
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#172944] text-white flex items-center justify-center overflow-hidden px-6 py-20 select-none"
    >
      {/* Background Watermark Stamp */}
      <div className="absolute -bottom-20 -left-20 pointer-events-none opacity-20">
        <CircularStamp size={340} color="#ffffff" opacity={0.3} text="featured projects • full stack & ai • " />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Project Info & Big Typography */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8 lg:space-y-10">
          
          <div className="space-y-6">
            {/* Project Subtitle */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Full-Stack & Intelligent Systems <br />
              <span className="text-cyan-400 font-mono text-xl sm:text-2xl">AI, Python & Modern Web</span>
            </h3>

            {/* Bullet descriptions */}
            <div className="space-y-3 text-white/85 text-sm sm:text-base leading-relaxed max-w-md">
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>HealthMate.AI:</strong> AI-powered post-hospital recovery assistant with ElevenLabs voice & Algorand/IPFS smart workflows.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>"What-If" Simulator:</strong> Academic forecasting engine predicting grades, CGPA, and backlog risks with Streamlit & Python.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Production architectures, interactive analytics, and responsive user experiences.</span>
              </p>
            </div>
          </div>

          {/* Giant Condensed Headline: PREVIOUS PROJECTS */}
          <div className="pt-2 lg:pt-6">
            <h2 className="font-condensed text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white leading-none font-extrabold uppercase">
              PREVIOUS <br />
              PROJECTS
            </h2>
          </div>

        </div>

        {/* Right Column: Interactive Project Cards Grid */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="bg-[#0f1d32] border border-white/15 rounded-2xl p-5 hover:border-cyan-400/50 hover:bg-[#13253f] transition-all cursor-pointer group shadow-xl"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                    {proj.date}
                  </span>
                  <h4 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-neutral-950 border border-cyan-500/30 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-cyan-300 transition-colors"
                      title="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                  <button className="p-1.5 rounded-full bg-white/10 text-white group-hover:bg-cyan-500 group-hover:text-neutral-900 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <p className="text-xs text-white/70 line-clamp-2 leading-relaxed mb-3">
                {proj.description[0]}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-white/90 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* View More Projects Link */}
          <div className="pt-2 flex justify-center sm:justify-start">
            <a
              href="https://github.com/jatavscript"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all duration-300 text-xs sm:text-sm font-mono font-medium shadow-lg hover:shadow-cyan-500/10"
            >
              <FaGithub className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>View more projects</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-[#172944] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  {selectedProject.date}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-white/70">{selectedProject.subtitle}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-white/85 leading-relaxed">
              {selectedProject.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-3">
                Key Engineering Deliverables:
              </h5>
              <div className="space-y-2 text-xs text-white/90">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-2">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Action Links (Live Demo & GitHub) */}
            {(selectedProject.liveUrl || selectedProject.githubUrl) && (
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-neutral-950 font-bold text-xs shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.45)] transition-all duration-200 group/live"
                    >
                      <ExternalLink className="w-3.5 h-3.5 group-hover/live:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs transition-all duration-200 hover:border-white/40 group/git"
                    >
                      <FaGithub className="w-3.5 h-3.5 group-hover/git:scale-110 transition-transform" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">
                  {selectedProject.liveUrl ? 'Live Application' : 'Source Code'}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default ProjectsSlide;
