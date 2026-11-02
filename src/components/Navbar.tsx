import React, { useEffect, useState } from 'react';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps { onOpenTerminal: () => void; onOpenSimulator: () => void; onOpenPoster: () => void; }

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenSimulator, onOpenPoster }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll); }, []);
  const close = () => setOpen(false);
  return (
    <header className={`editorial-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="editorial-wrap editorial-nav__inner">
        <a className="editorial-brand" href="#"><span>AT</span><strong>Adebusola Tomiwa</strong></a>
        <nav className="editorial-nav__links" aria-label="Primary navigation">
          <a href="#projects">Work</a><a href="#skills">Capabilities</a><a href="#journey">About</a><a href="#contact">Contact</a>
        </nav>
        <div className="editorial-nav__actions">
          <button className="editorial-dossier" onClick={onOpenPoster} type="button"><FileText size={14} /> Dossier</button>
          <a className="editorial-connect" href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight size={14} /></a>
          <button className="editorial-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} type="button">{open ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {open && <div className="editorial-mobile-menu"><a href="#projects" onClick={close}>Work</a><a href="#skills" onClick={close}>Capabilities</a><a href="#journey" onClick={close}>About</a><a href="#contact" onClick={close}>Contact</a><button onClick={() => { close(); onOpenSimulator(); }} type="button">Try the RAG simulator</button><button onClick={() => { close(); onOpenTerminal(); }} type="button">Open terminal</button></div>}
    </header>
  );
};
