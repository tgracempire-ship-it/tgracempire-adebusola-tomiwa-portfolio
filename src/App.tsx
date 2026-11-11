import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ExecutivePosterModal } from './components/ExecutivePosterModal';
import { ChurchProposalModal } from './components/ChurchProposalModal';
import confetti from 'canvas-confetti';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [isChurchProposalOpen, setIsChurchProposalOpen] = useState(false);

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="editorial-theme relative min-h-screen font-sans">
      
      {/* Navigation */}
      <Navbar 
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
        onOpenChurchProposal={() => setIsChurchProposalOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero 
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenPoster={() => setIsPosterOpen(true)}
          onOpenChurchProposal={() => setIsChurchProposalOpen(true)}
        />

        <ProjectsSection />

        <SkillsSection />

        <TimelineSection />

        <ContactSection onOpenChurchProposal={() => setIsChurchProposalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Publication-Grade Executive Poster Modal (Magnific / Editorial View) */}
      <ExecutivePosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />

      {/* Church & Ministry AI Proposal Generator Modal */}
      <ChurchProposalModal
        isOpen={isChurchProposalOpen}
        onClose={() => setIsChurchProposalOpen(false)}
      />

    </div>
  );
}

export default App;
