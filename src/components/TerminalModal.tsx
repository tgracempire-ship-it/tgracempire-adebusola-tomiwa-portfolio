import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSimulator: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onOpenSimulator }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "init",
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">Adebusola Tomiwa AI Systems Terminal v2.6.4 [Production]</p>
          <p className="text-slate-400">Type <span className="text-amber-300 font-bold">help</span> to list available commands or <span className="text-cyan-300 font-bold">rag</span> to inspect vector architecture.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    let response: React.ReactNode = null;

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <div><span className="text-amber-300 font-mono">whoami</span> — Profile & academic origin</div>
              <div><span className="text-amber-300 font-mono">skills</span> — Full competency breakdown</div>
              <div><span className="text-amber-300 font-mono">projects</span> — List production systems</div>
              <div><span className="text-amber-300 font-mono">rag</span> — Inspect vector retrieval pipeline</div>
              <div><span className="text-amber-300 font-mono">philosophy</span> — Engineering principles</div>
              <div><span className="text-amber-300 font-mono">contact</span> — Email, WhatsApp, GitHub</div>
              <div><span className="text-amber-300 font-mono">resume</span> — View CV credentials</div>
              <div><span className="text-amber-300 font-mono">clear</span> — Wipe screen buffer</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div className="text-slate-300 space-y-1">
            <p><strong className="text-white">Name:</strong> {PERSONAL_INFO.name}</p>
            <p><strong className="text-white">Title:</strong> {PERSONAL_INFO.title}</p>
            <p><strong className="text-white">Background:</strong> {PERSONAL_INFO.academicOrigin}</p>
            <p><strong className="text-white">Location:</strong> {PERSONAL_INFO.location}</p>
            <p className="text-slate-400 text-xs mt-2">{PERSONAL_INFO.summary}</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-slate-300 space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">Core Capabilities:</p>
            <p>&bull; <strong className="text-slate-100">AI / RAG:</strong> ChromaDB, FastAPI, Gemini 2.5 SDK, Whisper, Context Injection, Diarization</p>
            <p>&bull; <strong className="text-slate-100">Math:</strong> Linear Algebra, Inner Products, Probability Distributions, Numerical Optimization</p>
            <p>&bull; <strong className="text-slate-100">Systems:</strong> Docker, Node.js, Express, Sequelize ORM, PostgreSQL Neon, Kotlin Android Services</p>
            <p>&bull; <strong className="text-slate-100">Frontend:</strong> React 19, TypeScript, Three.js WebGL, Electron 42, Tailwind CSS v4</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-slate-300 space-y-1.5 text-xs">
            <p className="text-cyan-400 font-bold">Shipped Production Systems:</p>
            {PROJECTS.map((p, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{i + 1}. <strong className="text-slate-100">{p.title}</strong> — {p.subtitle}</span>
                <span className="text-cyan-300 font-mono text-[11px]">[{p.categoryLabel}]</span>
              </div>
            ))}
          </div>
        );
        break;

      case "rag":
        response = (
          <div className="text-slate-300 space-y-2 text-xs">
            <p className="text-cyan-400 font-bold">Pastor Niyi AI RAG Architecture:</p>
            <p>1. <span className="text-slate-400">Audio Ingestion:</span> 500+ hours processed via Whisper with speaker separation & YouTube timestamp matching.</p>
            <p>2. <span className="text-slate-400">Vector Embeddings:</span> Chunks mapped to 768-D dense manifold in ChromaDB.</p>
            <p>3. <span className="text-slate-400">Semantic Search:</span> Normalized cosine similarity retrieval under 180ms.</p>
            <p>4. <span className="text-slate-400">Grounded Synthesis:</span> Streaming generation via Google Gemini 2.5 Flash.</p>
            <button
              onClick={() => {
                onClose();
                onOpenSimulator();
              }}
              className="mt-2 px-3 py-1 bg-cyan-500 text-slate-950 font-bold rounded text-[11px] flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Launch GUI RAG Simulator
            </button>
          </div>
        );
        break;

      case "philosophy":
        response = (
          <div className="text-slate-300 space-y-1.5 text-xs">
            <p className="text-amber-300 font-bold">Engineering Philosophy:</p>
            <p>&ldquo;Never treat AI models as magical black boxes. Understand the loss gradient, the vector space, and the hardware constraints. Build systems that are deterministic where precision matters, and generative where creativity adds value.&rdquo;</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-slate-300 space-y-1 text-xs">
            <p><strong className="text-white">Email:</strong> {PERSONAL_INFO.email}</p>
            <p><strong className="text-white">Phone / WhatsApp:</strong> {PERSONAL_INFO.phone}</p>
            <p><strong className="text-white">GitHub:</strong> {PERSONAL_INFO.githubUrl}</p>
          </div>
        );
        break;

      case "resume":
        response = (
          <div className="text-slate-300 text-xs">
            <p className="text-cyan-400 font-bold">Adebusola Tomiwa — Academic & Professional Credentials</p>
            <p className="mt-1">B.Sc. (Ed), Obafemi Awolowo University.</p>
            <p className="text-slate-400 mt-2">To download or inspect full documentation, use the Contact section or email adebusolatomiwa2017@gmail.com.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        response = (
          <div className="text-rose-400 text-xs">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber-300 font-bold">help</span> for valid options.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#070A12] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs text-slate-400 ml-2">tomiwa@ai-engine:~$</span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen / Logs */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs scrollbar-thin scrollbar-thumb-slate-800">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-slate-500">&gt;</span>
                <span className="font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 border-t border-slate-800">
          <span className="text-cyan-400 font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'rag', 'projects', 'whoami'..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 text-xs font-mono"
          />
          <button type="submit" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
