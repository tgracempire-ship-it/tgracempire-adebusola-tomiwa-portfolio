import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Database, 
  ShieldCheck, 
  FileText,
  Boxes,
  MessageSquare,
  Globe
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : activeCategory === 'media-studio'
    ? PROJECTS.filter(p => p.category === 'media-studio' || p.category === 'multimodal')
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: `All Systems (${PROJECTS.length})` },
    { id: 'rag-ai', label: `RAG & Vector AI (${PROJECTS.filter(p => p.category === 'rag-ai').length})` },
    { id: 'whatsapp-ai', label: `WhatsApp AI Agents (${PROJECTS.filter(p => p.category === 'whatsapp-ai').length})` },
    { id: 'landing-page', label: `Web & E-Commerce (${PROJECTS.filter(p => p.category === 'landing-page').length})` },
    { id: 'extensions-mobile', label: `Extensions & Mobile (${PROJECTS.filter(p => p.category === 'extensions-mobile').length})` },
    { id: 'media-studio', label: `YouTube & Media AI (${PROJECTS.filter(p => p.category === 'media-studio' || p.category === 'multimodal').length})` },
    { id: 'edge-ai', label: `Edge AI & 3D Labs (${PROJECTS.filter(p => p.category === 'edge-ai').length})` },
    { id: 'saas', label: `SaaS & Education (${PROJECTS.filter(p => p.category === 'saas').length})` },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0b1018] relative" data-reveal="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="editorial-kicker inline-flex items-center gap-2 mb-4">
              <Boxes className="w-3.5 h-3.5" />
              <span>PRODUCTION PORTFOLIO &bull; AI, WHATSAPP BOTS & WEB SYSTEMS</span>
            </div>
            <h2 className="editorial-display text-4xl sm:text-6xl font-extrabold text-slate-100 max-w-3xl">
              Selected systems, built for the real world.
            </h2>
            <p className="editorial-copy text-sm sm:text-base mt-4">
              From autonomous WhatsApp care agents for UK healthcare providers and 500+ hour vector retrieval backends, to high-conversion modern landing pages, Next.js streaming sanctuaries, and offline school ERPs.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-mono text-xs text-slate-400">Total Systems Deployed:</span>
            <div className="font-mono text-2xl font-bold text-cyan-400">{PROJECTS.length} Shipped</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all ${
                activeCategory === c.id
                  ? 'bg-cyan-400 text-slate-950 font-bold'
                  : 'bg-transparent hover:bg-slate-900 text-slate-300 border border-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                data-reveal="item"
                className={`rounded-none bg-[#111722] border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                  isFeatured 
                    ? 'border-cyan-400/60 shadow-xl shadow-cyan-950/20' 
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                {/* Optional Project Media Banner if present */}
                {project.image && (
                  <div className="h-44 overflow-hidden border-b border-slate-800/80 bg-slate-950 relative group-hover:opacity-95 transition-opacity">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E18] via-transparent to-transparent"></div>
                  </div>
                )}

                {/* Card Top Area */}
                <div className="p-6">
                  
                  {/* Top Bar: Badge & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase bg-slate-950 text-cyan-400 border border-slate-800">
                      {project.categoryLabel}
                    </span>

                    {project.category === 'whatsapp-ai' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <MessageSquare className="w-3.5 h-3.5" />
                        24/7 LIVE
                      </span>
                    ) : project.links?.demo ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        LIVE
                      </span>
                    ) : null}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Bullets Preview */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                    {project.architecture.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400 font-mono">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metric Chips */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                        <div className="text-[9px] font-mono text-slate-500 uppercase">{m.label}</div>
                        <div className="text-xs font-mono font-bold text-cyan-300 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/70 text-slate-300">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-200 flex items-center gap-1 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-slate-100 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-cyan-400 hover:text-cyan-200 transition-colors"
                        title="Live Production Service"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
