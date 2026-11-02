import React from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0B0F1A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-cyan-400 mt-1">
              {project.subtitle}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
              {project.description}
            </p>
          </div>

          {/* Project Screenshot / Media if available */}
          {project.image && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-64 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain max-h-60"
              />
            </div>
          )}

          {/* Architecture Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-400 tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>SYSTEM ARCHITECTURE & TECHNICAL BLUEPRINT</span>
            </h4>
            <div className="space-y-2">
              {project.architecture.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">{m.label}</div>
                <div className="text-base sm:text-lg font-mono font-bold text-cyan-300 mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Code Snippet Preview (if provided) */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{project.codeSnippet.title}</span>
                </span>
                <span>{project.codeSnippet.language}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#05070e] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* Real World Impact */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/20">
            <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1">
              PRODUCTION IMPACT & SCALE
            </div>
            <p className="text-xs sm:text-sm text-slate-200">
              {project.impact}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 font-mono text-xs border border-slate-700">
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
              >
                <span>Launch Live Endpoint</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-all flex items-center gap-1.5 border border-slate-700"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
