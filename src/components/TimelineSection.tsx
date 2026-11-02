import React from 'react';
import { Milestone, GraduationCap, Building2, Terminal, ArrowRight } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#090D18] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs mb-3">
            <Milestone className="w-3.5 h-3.5 text-cyan-400" />
            <span>EVOLUTION & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            The Engineer's Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            From formal training at Obafemi Awolowo University to architecting resilient, production-ready AI systems.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#080B12] border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>

              {/* Event Content Card */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40">
                    {event.year}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {event.institution}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mt-1">
                  {event.title}
                </h3>

                <div className="text-xs font-mono text-amber-400 mt-0.5">
                  {event.role}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {event.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
