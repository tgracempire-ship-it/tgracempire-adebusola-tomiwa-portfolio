import React, { useState } from 'react';
import { Sigma, ArrowRight, Sparkles, Binary, Compass, Network, Activity } from 'lucide-react';

export const MathFoundations: React.FC = () => {
  // Interactive Temperature Slider for Softmax demonstration
  const [temperature, setTemperature] = useState<number>(0.7);

  // Raw logits for 4 sample tokens: ["grace", "faith", "covenant", "salvation"]
  const rawLogits = [3.2, 2.8, 1.9, 1.2];
  const tokenLabels = ["grace", "faith", "covenant", "salvation"];

  // Compute Softmax with temperature: P_i = exp(z_i / T) / sum(exp(z_j / T))
  const expValues = rawLogits.map(z => Math.exp(z / Math.max(temperature, 0.1)));
  const sumExp = expValues.reduce((a, b) => a + b, 0);
  const probabilities = expValues.map(v => v / sumExp);

  return (
    <section id="math-foundations" className="py-24 bg-[#060910] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/40 text-amber-300 font-mono text-xs mb-3">
            <Sigma className="w-3.5 h-3.5 text-amber-400" />
            <span>THE MATHEMATICAL ADVANTAGE &bull; OBAFEMI AWOLAWO UNIVERSITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Rigorous Mathematics to Scalable AI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Most developers treat AI as an opaque black box. My training in pure and applied mathematics allows me to architect vector geometries, loss landscapes, and stochastic sampling mechanisms from first principles.
          </p>
        </div>

        {/* 4 Core Mathematical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center font-mono font-bold text-lg mb-4">
                &lang;u, v&rang;
              </div>
              <h3 className="text-base font-bold text-slate-100">
                Vector Spaces & Inner Products
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Formulating embedding spaces as high-dimensional Hilbert manifolds. Applying normalized cosine metrics (u &middot; v) / (||u|| &times; ||v||) for sub-second semantic retrieval in ChromaDB.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-cyan-400">
              Shipped in: Pastor Niyi AI
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 border border-amber-800/60 flex items-center justify-center font-mono font-bold text-lg mb-4">
                P(x)
              </div>
              <h3 className="text-base font-bold text-slate-100">
                Stochastic Modeling & Entropy
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Calibrating LLM generation through temperature-controlled categorical distributions and top-p nucleus sampling to balance factual grounding with creative fluency.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-amber-400">
              Shipped in: Healthity & Gemini Workflows
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/60 flex items-center justify-center font-mono font-bold text-lg mb-4">
                &nabla;L
              </div>
              <h3 className="text-base font-bold text-slate-100">
                Numerical Optimization
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Analyzing gradient descent dynamics, loss landscape convexity, and precision quantization decay (FP32 &rarr; INT8) to compress inference models onto low-resource edge targets.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-purple-400">
              Shipped in: Whisper Pipeline
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60 flex items-center justify-center font-mono font-bold text-lg mb-4">
                G(V,E)
              </div>
              <h3 className="text-base font-bold text-slate-100">
                Discrete Math & Graph Theory
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Deterministic AST parsing, directed acyclic graphs (DAGs), and symbolic knowledge graphs powering completely offline mathematical problem solvers on zero-data hardware.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[11px] text-emerald-400">
              Shipped in: Mavisual Engine
            </div>
          </div>

        </div>

        {/* Live Interactive Temperature & Softmax Explorer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0A0D17] border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-1">
                <Activity className="w-4 h-4" />
                <span>INTERACTIVE FORMULA: SOFTMAX TEMPERATURE ANNEALING</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Stochastic Sampling Mechanics: P(w_i) = exp(z_i / T) / &sum; exp(z_j / T)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Drag the temperature slider below to see how $T \to 0$ collapses the distribution into deterministic argmax (low hallucination, high precision), while $T \to 1.5$ flattens entropy.
              </p>
            </div>

            {/* Slider Control */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 min-w-[280px]">
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-slate-400">TEMPERATURE (T):</span>
                <span className="text-cyan-400 font-bold text-sm">{temperature.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.05"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>0.1 (Strict Truth)</span>
                <span>0.7 (RAG Balance)</span>
                <span>2.0 (High Entropy)</span>
              </div>
            </div>
          </div>

          {/* Dynamic Probability Distribution Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {tokenLabels.map((label, idx) => {
              const prob = probabilities[idx];
              const pct = (prob * 100).toFixed(1);

              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-300 font-bold">&ldquo;{label}&rdquo;</span>
                    <span className="text-cyan-400 font-bold">{pct}%</span>
                  </div>

                  {/* Visual Bar */}
                  <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden my-2">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-amber-400 transition-all duration-200 rounded-full"
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>

                  <div className="text-[10px] text-slate-500 font-mono mt-1 flex justify-between">
                    <span>Raw Logit: {rawLogits[idx]}</span>
                    <span>P = {prob.toFixed(3)}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
