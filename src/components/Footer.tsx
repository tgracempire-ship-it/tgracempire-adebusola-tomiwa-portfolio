import React from 'react';
import { ArrowUp, Mail, MessageSquare, Terminal, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-800/60 flex items-center justify-center font-mono font-bold text-cyan-400">
              AT
            </div>
            <div>
              <div className="text-sm font-bold text-slate-200">Adebusola Tomiwa</div>
              <div className="text-xs text-slate-500 font-mono">AI Systems Engineer &bull; Full-Stack Architect</div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#rag-simulator" className="hover:text-cyan-400 transition-colors">RAG Simulator</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
            <button onClick={onOpenTerminal} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-400" />
              CLI Shell
            </button>
          </div>

          {/* Right Action: Scroll Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-mono"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Adebusola Tomiwa. All rights reserved.
          </p>

          <p className="italic text-[11px] text-slate-600">
            &ldquo;From ambitious ideas to dependable systems.&rdquo;
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400/80">
            <span>Commit:</span>
            <code className="text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-900">
              tgracempire-ship-it#prod
            </code>
          </div>
        </div>

      </div>
    </footer>
  );
};
