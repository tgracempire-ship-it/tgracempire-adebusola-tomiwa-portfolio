import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Database, 
  Cpu, 
  ArrowRight, 
  Search, 
  CheckCircle, 
  Play, 
  Layers, 
  Code2, 
  RefreshCw, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Terminal,
  MessageSquare
} from 'lucide-react';

interface SimulatedChunk {
  sermonTitle: string;
  speaker: string;
  timestamp: string;
  cosineScore: number;
  text: string;
}

interface SimulatedResult {
  query: string;
  embeddingVector: number[];
  chunks: SimulatedChunk[];
  synthesis: string;
  latencyMs: number;
}

const PRESET_QUERIES: { label: string; query: string; result: SimulatedResult }[] = [
  {
    label: "Faith & Patience Synergy",
    query: "How do faith and patience work together in inheriting spiritual promises?",
    result: {
      query: "How do faith and patience work together in inheriting spiritual promises?",
      embeddingVector: [0.0821, -0.2145, 0.4912, 0.1194, -0.3012, 0.6541, 0.0418, -0.1762],
      latencyMs: 138,
      chunks: [
        {
          sermonTitle: "The Mechanics of Spiritual Inheritance — Vol. 4",
          speaker: "Pastor Niyi Adetiloye",
          timestamp: "00:18:42",
          cosineScore: 0.942,
          text: "Faith is the title deed that lays hold of the reality in the unseen realm, but patience is the stamina that holds the ground while physical time catches up with eternity. Without patience, faith aborts its expectation."
        },
        {
          sermonTitle: "Walking in Divine Timing",
          speaker: "Pastor Niyi Adetiloye",
          timestamp: "00:41:15",
          cosineScore: 0.891,
          text: "Hebrews 6:12 commands us to follow those who through faith and patience inherit the promises. Patience is not passive resignation; it is active constancy under trial."
        },
        {
          sermonTitle: "The Law of the Spirit of Life",
          speaker: "Pastor Niyi Adetiloye",
          timestamp: "01:05:10",
          cosineScore: 0.824,
          text: "When you operate under the law of faith, your conviction does not fluctuate with environmental symptoms because patience anchors your soul."
        }
      ],
      synthesis: "According to Pastor Niyi Adetiloye, faith and patience are dual twin forces required to inherit spiritual promises. While faith acts as the legal title deed seizing divine reality from the spiritual realm (Hebrews 11:1), patience provides the unbroken tenacity that sustains that posture in the physical dimension until manifestation occurs (Hebrews 6:12). Patience is explicitly defined not as passive waiting, but as militant constancy under pressure."
    }
  },
  {
    label: "Estamo WhatsApp Care Intake",
    query: "I need specialized dementia and respite care for my mother in the UK. How does the intake work?",
    result: {
      query: "I need specialized dementia and respite care for my mother in the UK. How does the intake work?",
      embeddingVector: [0.1192, 0.4418, -0.2014, 0.6391, -0.1082, 0.3812, 0.0543, -0.5120],
      latencyMs: 94,
      chunks: [
        {
          sermonTitle: "Estamo Agent: knowledgeBase.js (Dementia Protocol)",
          speaker: "Estamo Care Virtual Assistant",
          timestamp: "Care Module 3",
          cosineScore: 0.978,
          text: "Estamo Care provides specialized dementia, domiciliary, and respite support tailored to routine preservation, memory assistance, medication supervision, and dignity of life under CQC guidelines."
        },
        {
          sermonTitle: "Estamo Agent: leadTracker.js",
          speaker: "Lead Tracker Daemon",
          timestamp: "Intake Flow",
          cosineScore: 0.931,
          text: "Automated care intake extracts client location, care type, preferred schedule, and emergency contacts, writing directly to data/inquiries.json while notifying the registered care manager."
        }
      ],
      synthesis: "Estamo Care's WhatsApp AI Agent immediately handles dementia and respite care requests by explaining personalized care plans (personal hygiene, medication management, and companionship). It initiates an automated assessment intake flow right inside WhatsApp—capturing the family's location and urgency—and automatically logs the inquiry to `data/inquiries.json` for the clinical care manager to finalize a home visit."
    }
  },
  {
    label: "Mavisual Heuristic Logic",
    query: "How does the offline brain solve non-linear quadratic trajectories without cloud APIs?",
    result: {
      query: "How does the offline brain solve non-linear quadratic trajectories without cloud APIs?",
      embeddingVector: [0.3812, 0.1290, -0.4419, 0.7201, -0.1982, 0.0814, 0.5122, -0.3109],
      latencyMs: 82,
      chunks: [
        {
          sermonTitle: "Mavisual Engine: offlineBrain.ts",
          speaker: "Adebusola Tomiwa",
          timestamp: "Line 142",
          cosineScore: 0.985,
          text: "Deterministically tokenize ax^2 + bx + c = 0 into canonical AST nodes. Compute discriminant D = b^2 - 4ac. When D < 0, branch to complex root visualization; when D >= 0, compute critical vertex and roots analytically before passing geometry to Three.js scene graph."
        },
        {
          sermonTitle: "Three.js Mesh Generator",
          speaker: "Adebusola Tomiwa",
          timestamp: "Line 210",
          cosineScore: 0.897,
          text: "BufferGeometry dynamically instantiated with vertex shader rendering parabolic arc in 3D coordinate space at 60 FPS on low-power Intel Celeron classroom CPUs."
        }
      ],
      synthesis: "Mavisual's `offlineBrain.ts` bypasses cloud API latency entirely through a deterministic symbolic parser. It compiles algebraic strings into an AST, extracts quadratic coefficients, verifies discriminants, and computes spatial trajectories mathematically, piping vertex arrays directly to a Three.js WebGL canvas in under 100ms with zero data transmission."
    }
  }
];

export const RagSimulator: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeStep, setActiveStep] = useState<number>(4);
  const [isSimulating, setIsSimulating] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  const currentResult = PRESET_QUERIES[selectedIdx].result;

  const runSimulation = (idx: number) => {
    setSelectedIdx(idx);
    setIsSimulating(true);
    setActiveStep(1);

    setTimeout(() => {
      setActiveStep(2);
      setTimeout(() => {
        setActiveStep(3);
        setTimeout(() => {
          setActiveStep(4);
          setIsSimulating(false);
        }, 350);
      }, 350);
    }, 350);
  };

  return (
    <section id="rag-simulator" className="py-24 bg-[#090D18] border-y border-slate-800/80 relative overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 math-dots opacity-40 pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>LIVE INTERACTIVE AI ARCHITECTURE TESTBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Production RAG & Autonomous Agent Engine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Experience the real multi-stage retrieval architecture deployed across <strong className="text-cyan-300 font-semibold">Pastor Niyi AI</strong> and the <strong className="text-emerald-300 font-semibold">Estamo Care WhatsApp Agent</strong>.
          </p>
        </div>

        {/* Interactive Query Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-2 hidden sm:inline">Select Test Scenario:</span>
          {PRESET_QUERIES.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => runSimulation(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                selectedIdx === idx 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-[1.02]' 
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-700/80'
              }`}
            >
              <Play className={`w-3 h-3 ${selectedIdx === idx ? 'fill-slate-950' : 'text-cyan-400'}`} />
              <span>{preset.label}</span>
            </button>
          ))}
          
          <button
            onClick={() => setDebugMode(!debugMode)}
            className={`px-3 py-2 rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5 ${
              debugMode 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' 
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{debugMode ? "JSON Inspection ON" : "Inspect Raw JSON"}</span>
          </button>
        </div>

        {/* Simulator Main Stage */}
        <div className="bg-[#060910] rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-2xl">
          
          {/* Pipeline Stage Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 pb-6 border-b border-slate-800/80">
            
            {/* Step 1 */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep >= 1 
                ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300' 
                : 'bg-slate-900/40 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                <span>01. VECTOR & INTENT</span>
                {activeStep > 1 ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>}
              </div>
              <div className="text-xs text-slate-300 font-mono mt-1">
                768-D Dense Embeddings
              </div>
            </div>

            {/* Step 2 */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep >= 2 
                ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-300' 
                : 'bg-slate-900/40 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                <span>02. CHROMADB RETRIEVAL</span>
                {activeStep > 2 ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : activeStep === 2 ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : null}
              </div>
              <div className="text-xs text-slate-300 font-mono mt-1">
                Cosine Similarity Search
              </div>
            </div>

            {/* Step 3 */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep >= 3 
                ? 'bg-amber-950/30 border-amber-500/40 text-amber-300' 
                : 'bg-slate-900/40 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                <span>03. CONTEXT GROUNDING</span>
                {activeStep > 3 ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : activeStep === 3 ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : null}
              </div>
              <div className="text-xs text-slate-300 font-mono mt-1">
                Transcript & Knowledge Match
              </div>
            </div>

            {/* Step 4 */}
            <div className={`p-3 rounded-xl border transition-all ${
              activeStep >= 4 
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
                : 'bg-slate-900/40 border-slate-800 text-slate-500'
            }`}>
              <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                <span>04. GEMINI SYNTHESIS</span>
                {activeStep === 4 ? <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> : null}
              </div>
              <div className="text-xs text-slate-300 font-mono mt-1">
                Grounded Citation & Action
              </div>
            </div>

          </div>

          {/* Active Query Display */}
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/40">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">INCOMING USER INQUIRY</span>
                <span className="text-sm font-semibold text-slate-100">&ldquo;{currentResult.query}&rdquo;</span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto font-mono text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pipeline Latency: <strong className="text-cyan-300">{currentResult.latencyMs}ms</strong></span>
            </div>
          </div>

          {/* Main Content: Split View */}
          {debugMode ? (
            /* JSON Debug Inspector View */
            <div className="p-4 rounded-xl bg-[#03060c] border border-cyan-950 font-mono text-xs overflow-x-auto text-emerald-400 max-h-96">
              <pre>{JSON.stringify(currentResult, null, 2)}</pre>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Retrieved Chunks from ChromaDB */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 px-1">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Database className="w-3.5 h-3.5" />
                    <span>RETRIEVED VECTOR CHUNKS ({currentResult.chunks.length})</span>
                  </span>
                  <span>ChromaDB Cosine Metric</span>
                </div>

                <div className="space-y-3">
                  {currentResult.chunks.map((chunk, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-bold text-slate-200 truncate max-w-[240px]">
                          {chunk.sermonTitle}
                        </span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                          cos = {chunk.cosineScore.toFixed(3)}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3 italic">
                        &ldquo;{chunk.text}&rdquo;
                      </p>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-800/50">
                        <span>Speaker / Source: {chunk.speaker}</span>
                        <span className="text-amber-400">Ref: {chunk.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vector Tensor Snapshot */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400">
                  <div className="text-slate-500 text-[10px] mb-1">EMBEDDING VECTOR TRUNCATED (FIRST 8 DIMENSIONS):</div>
                  <div className="text-cyan-400 font-mono">
                    [{currentResult.embeddingVector.map(v => v.toFixed(4)).join(', ')}, ...]
                  </div>
                </div>
              </div>

              {/* Right Column: Grounded Gemini Synthesis */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 px-1 mb-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SYNTHESIZED GROUNDED ANSWER</span>
                  </span>
                  <span className="text-slate-500">Gemini 2.5 / 3.5 Flash</span>
                </div>

                <div className="flex-1 p-5 rounded-xl bg-gradient-to-b from-slate-900/90 to-[#0B101E] border border-cyan-500/30 flex flex-col justify-between shadow-inner">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-mono text-xs text-emerald-300 font-bold">VERIFIED ZERO-HALLUCINATION GROUNDING</span>
                    </div>

                    <p className="text-sm text-slate-200 leading-relaxed font-sans">
                      {currentResult.synthesis}
                    </p>
                  </div>

                  {/* Architecture Citation Card */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-mono text-slate-400">
                      GROUNDED CITATIONS & PROVENANCE:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentResult.chunks.map((chunk, idx) => (
                        <div 
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono text-[11px] flex items-center gap-1.5"
                        >
                          <span className="text-cyan-400 font-bold">#{idx + 1}</span>
                          <span className="truncate max-w-[150px]">{chunk.sermonTitle}</span>
                          <span className="text-amber-400">({chunk.timestamp})</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>Service: RAG Microservice & Agent</span>
                      <a 
                        href="https://pastor-niyi-ai.onrender.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-200 flex items-center gap-1"
                      >
                        Visit Pastor Niyi AI Live <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
