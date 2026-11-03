import React from 'react';
import { ArrowDownRight, ArrowUpRight, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenPoster: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenPoster }) => {
  return (
    <section className="editorial-hero" data-reveal="hero">
      <div className="editorial-hero__wash" aria-hidden="true" />
      <div className="editorial-wrap editorial-hero__inner">
        <div className="editorial-hero__topline">
          <span>Portfolio / 2026</span>
          <span>AI systems · product engineering · Lagos</span>
        </div>

        <div className="editorial-hero__grid">
          <div className="editorial-hero__copy">
            <p className="editorial-label">Adebusola Tomiwa</p>
            <h1>Ideas into <em>useful</em> systems.</h1>
            <p className="editorial-lede">AI systems engineer and full-stack architect building thoughtful products across agents, retrieval, media, and the web.</p>
            <div className="editorial-actions">
              <a className="editorial-button editorial-button--dark" href="#projects">Explore selected work <ArrowDownRight size={16} /></a>
              <button className="editorial-text-button" onClick={onOpenPoster} type="button">Open executive dossier <FileText size={15} /></button>
            </div>
            <div className="editorial-contact-line">
              <span>Currently open to senior AI / full-stack roles</span>
              <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email} <ArrowUpRight size={13} /></a>
            </div>
          </div>

          <div className="editorial-portrait-column">
            <div className="editorial-portrait-frame">
              <img
                src="/images/profile-generated.png"
                alt="Adebusola Tomiwa"
                loading="eager"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/images/avatar.jpg";
                }}
              />
              <div className="editorial-portrait-caption"><span>01 / portrait</span><span>{PERSONAL_INFO.location}</span></div>
            </div>
            <p className="editorial-side-note">Production-minded. Curious about the space between people and machines.</p>
          </div>
        </div>

        <div className="editorial-stats" aria-label="Portfolio highlights">
          {PERSONAL_INFO.stats.map((stat) => <div className="editorial-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>

        <div className="editorial-hero__tools">
          <button onClick={onOpenTerminal} type="button">Open engineering notes <ExternalLink size={14} /></button>
        </div>
      </div>
    </section>
  );
};
