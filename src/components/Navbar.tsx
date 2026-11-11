import React, { useEffect, useState } from 'react';
import { ArrowUpRight, FileText, Menu, X, Church } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps { 
  onOpenTerminal: () => void; 
  onOpenPoster: () => void; 
  onOpenChurchProposal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenPoster, onOpenChurchProposal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');
  const [scrollProgress, setScrollProgress] = useState(0);
  const links = [
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'journey', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const sections = links.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`editorial-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="editorial-scroll-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
      <div className="editorial-wrap editorial-nav__inner">
        <a className="editorial-brand" href="#"><span>AT</span><strong>Adebusola Tomiwa</strong></a>
        <nav className="editorial-nav__links" aria-label="Primary navigation">
          {links.map((link) => <a key={link.id} className={activeSection === link.id ? 'is-active' : ''} aria-current={activeSection === link.id ? 'page' : undefined} href={`#${link.id}`}>{link.label}</a>)}
        </nav>
        <div className="editorial-nav__actions">
          {onOpenChurchProposal && (
            <button className="editorial-dossier" style={{ borderColor: 'rgba(0, 240, 255, 0.4)', color: '#38bdf8' }} onClick={onOpenChurchProposal} type="button">
              <Church size={14} /> Church AI Proposal
            </button>
          )}
          <button className="editorial-dossier" onClick={onOpenPoster} type="button"><FileText size={14} /> Dossier</button>
          <a className="editorial-connect" href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight size={14} /></a>
          <button className="editorial-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} type="button">{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && (
        <div className="editorial-mobile-menu">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={close}>{link.label}</a>
          ))}
          {onOpenChurchProposal && (
            <button onClick={() => { close(); onOpenChurchProposal(); }} type="button" style={{ color: '#38bdf8' }}>
              <Church size={15} style={{ display: 'inline', marginRight: 6 }} /> Church AI Proposal Generator
            </button>
          )}
          <button onClick={() => { close(); onOpenTerminal(); }} type="button">Open engineering notes</button>
        </div>
      )}
    </header>
  );
};
