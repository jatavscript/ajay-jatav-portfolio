import { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlide from '@/components/HeroSlide';
import AboutSlide from '@/components/AboutSlide';
import EducationSlide from '@/components/EducationSlide';
import SkillsSlide from '@/components/SkillsSlide';
import ProjectsSlide from '@/components/ProjectsSlide';
import HackathonsSlide from '@/components/HackathonsSlide';
import CertificationsSlide from '@/components/CertificationsSlide';
import ExperienceSlide from '@/components/ExperienceSlide';
import ContactSlide from '@/components/ContactSlide';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const urlParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const slideParam = urlParams.get('slide');
  const modeParam = urlParams.get('mode');

  const [viewMode, setViewMode] = useState<'scroll' | 'deck'>(
    modeParam === 'deck' || slideParam !== null ? 'deck' : 'scroll'
  );
  const [currentSlide, setCurrentSlide] = useState<number>(
    slideParam ? parseInt(slideParam, 10) : 0
  );
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const slides = [
    { id: 'portfolio', title: 'Portfolio', component: <HeroSlide /> },
    { id: 'about', title: 'About me', component: <AboutSlide /> },
    { id: 'education', title: 'Education Background', component: <EducationSlide /> },
    { id: 'skills', title: 'Skills & Expertise', component: <SkillsSlide /> },
    { id: 'projects', title: 'Previous Projects', component: <ProjectsSlide /> },
    { id: 'hackathons', title: 'Hackathons & Wins', component: <HackathonsSlide /> },
    { id: 'certifications', title: 'Certifications', component: <CertificationsSlide /> },
    { id: 'experience', title: 'Working Experience', component: <ExperienceSlide /> },
    { id: 'contact', title: "Let's Work Together", component: <ContactSlide /> },
  ];

  const totalSlides = slides.length;

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index);
    if (viewMode === 'scroll') {
      const element = document.getElementById(`slide-${index + 1}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Keyboard navigation for slide deck mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'deck') {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
          handleNextSlide();
        } else if (e.key === 'ArrowLeft') {
          handlePrevSlide();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, handleNextSlide, handlePrevSlide]);

  return (
    <div className="min-h-screen bg-[#161618] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Navbar */}
      <Navbar 
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onSelectSlide={handleSelectSlide}
      />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {viewMode === 'scroll' ? (
          /* Continuous Scroll: All 10 slides stacked with alternating navy and white sections */
          <div className="w-full flex flex-col">
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                className="w-full relative"
              >
                {slide.component}
              </div>
            ))}
          </div>
        ) : (
          /* Slide Deck Mode: 1 Slide at a time with Prev/Next controls and fullscreen feel */
          <div className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden">
            {/* Active Slide */}
            <div className="w-full h-full animate-in fade-in duration-300">
              {slides[currentSlide].component}
            </div>

            {/* Left Nav Arrow */}
            {currentSlide > 0 && (
              <button
                onClick={handlePrevSlide}
                className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white items-center justify-center shadow-2xl border border-white/20 transition-all hover:scale-110"
                title="Previous Slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Nav Arrow */}
            {currentSlide < totalSlides - 1 && (
              <button
                onClick={handleNextSlide}
                className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white items-center justify-center shadow-2xl border border-white/20 transition-all hover:scale-110"
                title="Next Slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Bottom Slide Indicator Dots */}
            <div className="fixed bottom-6 inset-x-0 z-30 flex justify-center items-center gap-2">
              <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 flex items-center gap-2 shadow-xl">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentSlide === i ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                    title={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
