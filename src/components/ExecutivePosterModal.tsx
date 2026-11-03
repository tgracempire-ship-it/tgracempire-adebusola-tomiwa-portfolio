import React, { useRef } from 'react';
import { 
  X, 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  Cpu, 
  MessageSquare, 
  ExternalLink, 
  Sigma, 
  Layers, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface ExecutivePosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutivePosterModal: React.FC<ExecutivePosterModalProps> = ({ isOpen, onClose }) => {
  const posterRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="dossier-print-overlay fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 md:p-6 bg-[#17201d]/80 backdrop-blur-md overflow-y-auto">
      
      {/* Floating Action Controls */}
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2.5 print:hidden">
        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-full bg-[#17201d] hover:bg-[#c95f3d] text-[#f4f0e8] font-bold text-xs font-mono transition-all flex items-center gap-2 shadow-lg"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-[#f4f0e8] border border-[#17201d]/20 text-[#17201d] hover:text-[#c95f3d] hover:border-[#c95f3d] transition-colors"
          title="Close Poster View"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Poster Canvas (Magazine / Keynote Editorial Layout) */}
      <div 
        ref={posterRef}
        className="dossier-canvas relative w-full max-w-6xl my-4 sm:my-6 bg-[#f4f0e8] border border-[#17201d]/15 rounded-[2rem] shadow-2xl p-6 sm:p-10 md:p-14 text-[#17201d] overflow-hidden print:border-none print:p-0 print:shadow-none print:m-0 print:max-w-none print:bg-white print:text-slate-900"
      >
        {/* Editorial Top Border Tech Bar */}
        <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#17201d]/15 text-xs font-mono text-[#64716b] print:border-slate-300 print:text-slate-600">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#17201d] text-[#f4f0e8] border border-[#17201d] font-bold tracking-widest text-[10px] print:bg-slate-100 print:text-slate-900">
              DOSSIER // REF-2026.AI
            </span>
            <span>SPEC: AI SYSTEMS ARCHITECT</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#c95f3d] font-bold flex items-center gap-1.5 print:text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-[#c95f3d] print:hidden"></span>
              AVAILABLE FOR SELECTED BUILDS
            </span>
            <span className="hidden sm:inline text-[#64716b]">&bull;</span>
            <span className="hidden sm:inline">ORIGIN: OAU</span>
          </div>
        </div>

        {/* Poster Masthead & Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10 pb-10 border-b border-[#17201d]/15 print:border-slate-300">
          
          {/* Masthead Left: Big Typographic Impact */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3ddd1] border border-[#c95f3d]/35 text-[#c95f3d] text-xs font-mono font-bold print:border-amber-600 print:text-amber-800">
              <Layers className="w-3.5 h-3.5" />
              <span>PROFILE / AI SYSTEMS + WEB PRODUCTS</span>
            </div>

            <h1 className="dossier-title text-5xl sm:text-7xl font-normal tracking-tight text-[#17201d] leading-[.92] print:text-slate-950">
              ADEBUSOLA <br className="hidden sm:inline" />
              <span className="text-[#c95f3d] print:text-cyan-800">
                TOMIWA
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#52615b] font-mono leading-snug print:text-slate-700">
              AI systems engineer &bull; Full-stack architect
            </p>

            <p className="text-sm sm:text-base text-[#52615b] leading-relaxed max-w-2xl font-sans print:text-slate-600">
              I build useful systems where AI, product thinking, and dependable engineering meet—retrieval, autonomous agents, media workflows, and modern web products.
            </p>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-[#64716b] print:text-slate-700">
              <span className="flex items-center gap-1.5 text-[#17201d] font-semibold print:text-cyan-900">
                <Mail className="w-3.5 h-3.5 text-[#c95f3d]" />
                adebusolatomiwa2017@gmail.com
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5 text-[#17201d] font-semibold print:text-emerald-900">
                <Phone className="w-3.5 h-3.5 text-[#c95f3d]" />
                {PERSONAL_INFO.phone}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5 text-[#52615b] print:text-slate-800">
                <GithubIcon className="w-3.5 h-3.5" />
                tgracempire-ship-it
              </span>
            </div>
          </div>

          {/* Masthead Right: Editorial Tech Portrait Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-2.5 rounded-3xl bg-[#e3ddd1] border border-[#c95f3d]/50 shadow-xl print:border-slate-400 print:shadow-none">
              
              {/* Corner Tech Reticles */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#c95f3d]"></div>
              <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#c95f3d]"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#c95f3d]"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#c95f3d]"></div>

              {/* Portrait Image */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950">
                <img 
                  src="/images/profile-generated.png"
                  alt="Adebusola Tomiwa" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/avatar.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17201d]/75 via-transparent to-transparent print:hidden"></div>

                {/* Cyber Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#17201d]/80 backdrop-blur-md border border-[#f4f0e8]/30 text-[10px] font-mono text-[#f4f0e8] print:bg-white print:text-slate-900 print:border-slate-300">
                  <div className="flex items-center justify-between font-bold">
                    <span>EMBEDDING SPACE</span>
                    <span className="text-[#e7b08f]">PROFILE</span>
                  </div>
                  <div className="text-[9px] text-slate-400 truncate print:text-slate-600">
                    Lagos &bull; AI Systems
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Flagship Production Systems: High-Density Bento Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2 print:text-slate-800">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>CORE PRODUCTION SYSTEMS & ARCHITECTURAL HIGHLIGHTS</span>
            </h2>
            <span className="font-mono text-xs text-cyan-400 font-bold">20+ SHIPPED IN ACTIVE USE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Project 1: Estamo Care WhatsApp Agent */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors print:bg-slate-50 print:border-slate-300">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-mono font-bold text-[10px] uppercase">
                  WHATSAPP AI & AUTONOMOUS AGENTS
                </span>
                <span className="text-emerald-400 font-mono text-[11px] font-bold">24/7 LIVE</span>
              </div>
              <h3 className="text-base font-bold text-white print:text-slate-950">Estamo Care WhatsApp AI Agent</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Google Gemini AI &bull; Baileys &bull; Node.js &bull; Express &bull; Docker</p>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed print:text-slate-700">
                24/7 autonomous care inquiry management for UK domiciliary, dementia, and respite care. Features automated patient assessment booking, caregiver recruitment qualification, multi-turn state debouncing, and web QR code visualizer dashboard.
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-emerald-300 font-bold">Latency: &lt;1.5s AI Response</span>
                <span>Lead Logging: Active</span>
              </div>
            </div>

            {/* Project 2: Pastor Niyi AI */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors print:bg-slate-50 print:border-slate-300">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono font-bold text-[10px] uppercase">
                  RAG & RETRIEVAL ENGINES
                </span>
                <span className="text-cyan-400 font-mono text-[11px] font-bold">PRODUCTION</span>
              </div>
              <h3 className="text-base font-bold text-white print:text-slate-950">Pastor Niyi AI Conversational Service</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">FastAPI &bull; Chroma Vector DB &bull; Gemini 2.5 &bull; Docker &bull; Render</p>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed print:text-slate-700">
                Production theological RAG platform vectorizing 500+ hours of transcribed and speaker-diarized sermon audio. Delivers sub-second semantic search with exact YouTube timestamp citation and a single-tag embeddable floating JS chat widget.
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-cyan-300 font-bold">Retrieval: &lt;180ms ChromaDB</span>
                <span>500+ Audio Hours</span>
              </div>
            </div>

            {/* Project 3: FlowPilot Chrome MV3 Extension */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-amber-500/30 hover:border-amber-400/60 transition-colors print:bg-slate-50 print:border-slate-300">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800/60 font-mono font-bold text-[10px] uppercase">
                  CHROME EXTENSION & AI AUTOMATION
                </span>
                <span className="text-amber-400 font-mono text-[11px] font-bold">MANIFEST V3</span>
              </div>
              <h3 className="text-base font-bold text-white print:text-slate-950">FlowPilot — Google Flow Queue Extension</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Manifest V3 &bull; Side Panel API &bull; IndexedDB &bull; Batch Queues &bull; Pacing</p>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed print:text-slate-700">
                Dependency-free Chrome side panel extension turning repetitive prompt submission in Google Flow into an observable, resumable queue with local reference storage, exponential backoff, and ZIP asset packaging.
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-amber-300 font-bold">Zero Runtime Dependencies</span>
                <span>IndexedDB Local-First</span>
              </div>
            </div>

            {/* Project 4: Threads of Heritage & VOR YouTube Studio */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-purple-500/30 hover:border-purple-400/60 transition-colors print:bg-slate-50 print:border-slate-300">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60 font-mono font-bold text-[10px] uppercase">
                  MODERN WEB & MULTIMODAL STUDIO
                </span>
                <span className="text-purple-400 font-mono text-[11px] font-bold">ACTIVE SYSTEMS</span>
              </div>
              <h3 className="text-base font-bold text-white print:text-slate-950">Threads of Heritage & VOR YouTube Studio</h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">React 19 &bull; Tailwind v4 &bull; Python &bull; FFmpeg &bull; YouTube API v3</p>
              <p className="text-xs text-slate-300 mt-2.5 leading-relaxed print:text-slate-700">
                Artisan Yoruba Aso Oke bespoke loom customizer & WhatsApp commerce atelier alongside Voice of Revival (VOR) — an autonomous 10-masterclass video rendering & YouTube Data API v3 auto-publishing pipeline.
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-purple-300 font-bold">Full Multimodal Delivery</span>
                <span>Craft & Cloud Automation</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Quantitative Telemetry Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-300">
            <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 print:text-cyan-800">&lt; 180ms</div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5 print:text-slate-900">Vector Search Latency</div>
            <div className="text-[10px] text-slate-500 font-mono">ChromaDB Cosine Metric</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-300">
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 print:text-emerald-800">24/7</div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5 print:text-slate-900">WhatsApp AI Uptime</div>
            <div className="text-[10px] text-slate-500 font-mono">Estamo Care Agent</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-300">
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400 print:text-amber-800">500+ hrs</div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5 print:text-slate-900">Audio Vectorized</div>
            <div className="text-[10px] text-slate-500 font-mono">Whisper Diarized RAG</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 print:bg-slate-50 print:border-slate-300">
            <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400 print:text-cyan-800">100%</div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5 print:text-slate-900">Offline Edge Execution</div>
            <div className="text-[10px] text-slate-500 font-mono">Mavisual Heuristic Lab</div>
          </div>
        </div>

        {/* Poster Footer Strip */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 print:border-slate-300 print:text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} Adebusola Tomiwa &bull; Obafemi Awolowo University.
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span>&bull;</span>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-bold"
            >
              <span>github.com/tgracempire-ship-it</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
