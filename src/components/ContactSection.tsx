import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("AI Engineering Consultation / Inquiry");
  const [formMessage, setFormMessage] = useState("");

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formSubject)}&body=${encodeURIComponent(
      `From: ${formName} (${formEmail})\n\n${formMessage}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-[#080B12] relative border-t border-slate-800/80" data-reveal="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 font-mono text-xs mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>DIRECT ACCESS & COMMISSIONING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Available for Senior AI Systems Engineering opportunities, high-scale RAG architecture consulting, and foundational software engineering leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Credentials & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 hover:border-emerald-400 transition-all block group shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">FASTEST RESPONSE</div>
                    <div className="text-base font-bold text-slate-100">Direct WhatsApp</div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <p className="text-xs text-slate-400 mt-3 font-sans">
                Initiate an immediate conversation on WhatsApp. Typically responds within 30 minutes.
              </p>
            </a>

            {/* Email Contact Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">DIRECT EMAIL</div>
                  <div className="text-sm font-bold text-slate-100 font-mono">{PERSONAL_INFO.email}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/40">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">TELEPHONE / MOBILE</div>
                  <div className="text-sm font-bold text-slate-100 font-mono">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
                title="Copy phone to clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Profile Card */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between transition-colors block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 text-slate-300 border border-slate-800">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">GITHUB REPOSITORIES</div>
                  <div className="text-sm font-bold text-slate-100 font-mono">tgracempire-ship-it</div>
                </div>
              </div>

              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Lagos, Nigeria &bull; Worldwide Remote Available</span>
            </div>

          </div>

          {/* Right Column: Interactive Direct Email Composer Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#0A0E18] border border-slate-800/90 shadow-xl">
              
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>COMPOSE DIRECT INQUIRY</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-6">
                Send an Architecture Inquiry
              </h3>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">SUBJECT</label>
                  <input
                    type="text"
                    required
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">MESSAGE / PROJECT BRIEF</label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your technical challenge, hiring role, or AI system requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-500 outline-none transition-colors font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry to Adebusola</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
