import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ExecutivePosterModal } from './components/ExecutivePosterModal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  return (
    <div className="editorial-theme relative min-h-screen font-sans">
      
      {/* Navigation */}
      <Navbar 
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero 
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenPoster={() => setIsPosterOpen(true)}
        />

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
