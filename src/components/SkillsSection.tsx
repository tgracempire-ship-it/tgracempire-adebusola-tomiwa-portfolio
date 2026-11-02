import React from 'react';
import { Brain, Server, Layers, Cpu, CheckCircle, Video } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Artificial Intelligence & Autonomous Agents":
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case "Backend & Systems Engineering":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Frontend, Web Portals & 3D Interactive UI":
        return <Layers className="w-5 h-5 text-purple-400" />;
      case "Multimodal Media, YouTube Automation & Mobile":
        return <Video className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const techBadges = [
    "Python 3.12", "FastAPI", "ChromaDB", "Google Gemini 2.5", "@google/genai", 
    "OpenAI Whisper", "React 19", "TypeScript", "Three.js", "Electron 42", 
    "Chrome MV3", "Capacitor Mobile", "Android Kotlin", "Docker", "PostgreSQL", 
    "Sequelize ORM", "FFmpeg", "YouTube Data API v3", "Tailwind CSS v4"
  ];

  return (
    <section id="skills" className="py-24 bg-[#080B12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMPETENCY MATRIX & ARCHITECTURE TOOLCHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Full-Spectrum Engineering Competence
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Spanning low-level Kotlin notification services, high-performance vector retrieval microservices, and interactive 3D WebGL interfaces.
          </p>
        </div>

        {/* Tech Stack Marquee / Pill Grid */}
        <div className="mb-14 p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">
            PRIMARY PRODUCTION TOOLCHAIN
          </div>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/70 to-[#0A0E18] border border-slate-800/90 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 mt-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
