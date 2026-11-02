import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RagSimulator } from './components/RagSimulator';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ExecutivePosterModal } from './components/ExecutivePosterModal';
import confetti from 'canvas-confetti';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const handleOpenSimulator = () => {
    const el = document.getElementById('rag-simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00F0FF', '#F59E0B', '#10B981']
    });
  };

  return (
    <div className="editorial-theme relative min-h-screen font-sans">
      
      {/* Navigation */}
      <Navbar 
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenSimulator={handleOpenSimulator}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero 
          onOpenSimulator={handleOpenSimulator}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenPoster={() => setIsPosterOpen(true)}
        />

        <RagSimulator />

        <ProjectsSection />

        <SkillsSection />

        <TimelineSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenSimulator={handleOpenSimulator}
      />

      {/* Publication-Grade Executive Poster Modal (Magnific / Editorial View) */}
      <ExecutivePosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />

    </div>
  );
}

export default App;
