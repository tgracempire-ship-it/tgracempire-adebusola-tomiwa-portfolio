import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight, Church, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenChurchProposal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChurchProposal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedForm, setCopiedForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("AI Engineering Consultation / Inquiry");
  const [formMessage, setFormMessage] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

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

  const validateSenderEmail = (email: string) => {
    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError("Please enter your email address");
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) {
      setEmailError("Please check your email address format (e.g. name@domain.com)");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateSenderEmail(formEmail)) {
      return;
    }
    const cleanTo = PERSONAL_INFO.email.trim();
    const cleanSub = formSubject.trim();
    const cleanBody = `From: ${formName.trim()} <${formEmail.trim()}>\n\n${formMessage.trim()}`;
    const mailtoUrl = `mailto:${encodeURIComponent(cleanTo)}?subject=${encodeURIComponent(cleanSub)}&body=${encodeURIComponent(cleanBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyForm = () => {
    const cleanBody = `To: ${PERSONAL_INFO.email}\nSubject: ${formSubject}\nFrom: ${formName} (${formEmail})\n\nMessage:\n${formMessage}`;
    navigator.clipboard.writeText(cleanBody);
    setCopiedForm(true);
    setTimeout(() => setCopiedForm(false), 2500);
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

        {/* Special Church Outreach Proposal Callout Card */}
        {onOpenChurchProposal && (
          <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-[#0d1c33] via-[#091528] to-[#071020] border border-cyan-500/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                <Church className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-700/50 text-[10px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-1.5">
                  PASTORS & CHURCH LEADERSHIP
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Looking for a 24/7 AI Sermon Assistant for Your Ministry?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Turn your church sermon archive into an interactive study companion with exact YouTube timestamps — just like <em>Pastor Niyi AI</em>. Includes customized outreach templates & church-friendly pricing.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenChurchProposal}
              className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25 flex-shrink-0"
            >
              <Church className="w-4 h-4" />
              <span>Launch Church Proposal Hub</span>
            </button>
          </div>
        )}

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
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                  <span>COMPOSE DIRECT INQUIRY</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyForm}
                  className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  title="Copy details if your mail app doesn't open"
                >
                  {copiedForm ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedForm ? "Copied" : "Copy Form Data"}</span>
                </button>
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
                      onChange={(e) => {
                        setFormEmail(e.target.value);
                        if (emailError) validateSenderEmail(e.target.value);
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-slate-100 text-sm outline-none transition-colors ${
                        emailError ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      }`}
                    />
                    {emailError && (
                      <div className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{emailError}</span>
                      </div>
                    )}
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

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch in Mail Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyForm}
                    className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-700"
                  >
                    {copiedForm ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                    <span>{copiedForm ? "Copied to Clipboard!" : "Copy as Plain Text"}</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
