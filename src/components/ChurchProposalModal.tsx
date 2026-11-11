import React, { useState, useMemo } from 'react';
import { 
  X, 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ExternalLink, 
  MessageSquare, 
  DollarSign, 
  Church, 
  User, 
  AlertCircle, 
  Globe,
  Clock,
  Video,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChurchProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TemplateType = 'senior-pastor' | 'media-director' | 'quick-hook' | 'whatsapp';
type CurrencyType = 'USD' | 'NGN' | 'GBP';

export const ChurchProposalModal: React.FC<ChurchProposalModalProps> = ({ isOpen, onClose }) => {
  const [churchName, setChurchName] = useState('Grace Community Church');
  const [pastorName, setPastorName] = useState('Pastor David');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [template, setTemplate] = useState<TemplateType>('senior-pastor');
  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const [copied, setCopied] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Email validation regex (RFC 5322 simplified standard)
  const validateEmail = (email: string): boolean => {
    if (!email.trim()) {
      setEmailError(null);
      return true;
    }
    const trimmed = email.trim();
    // Common typo detector
    if (trimmed.includes('@gamil.com') || trimmed.includes('@yaho.com') || trimmed.includes('@hotmial.com')) {
      setEmailError('Tip: Check for email domain typo (e.g. @gmail.com)');
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) {
      setEmailError('Please enter a valid email address (e.g. pastor@church.org)');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleEmailChange = (val: string) => {
    setRecipientEmail(val);
    validateEmail(val);
  };

  // Pricing display per currency
  const pricingText = useMemo(() => {
    switch (currency) {
      case 'USD':
        return {
          starter: '$295 one-time onboarding (includes indexing 50 sermons)',
          monthly: '$19/month for cloud AI hosting & continuous updates',
          guarantee: '100% Free 1-Sermon Sample Test'
        };
      case 'NGN':
        return {
          starter: '₦150,000 one-time onboarding (includes indexing 50 sermons)',
          monthly: '₦15,000/month for cloud AI hosting & continuous updates',
          guarantee: '100% Free 1-Sermon Sample Test'
        };
      case 'GBP':
        return {
          starter: '£245 one-time onboarding (includes indexing 50 sermons)',
          monthly: '£15/month for cloud AI hosting & continuous updates',
          guarantee: '100% Free 1-Sermon Sample Test'
        };
    }
  }, [currency]);

  // Dynamic email subject & body generator
  const generatedProposal = useMemo(() => {
    const cleanChurch = churchName.trim() || 'Your Church';
    const cleanPastor = pastorName.trim() || 'Pastor';
    const demoUrl = 'https://pastor-niyi-ai.onrender.com';
    const portfolioUrl = 'https://github.com/tgracempire-ship-it/tgracempire-adebusola-tomiwa-portfolio';

    if (template === 'senior-pastor') {
      const subject = `Question for ${cleanPastor} regarding ${cleanChurch}'s sermon archive`;
      const body = `Dear ${cleanPastor},

Grace and peace to you and the family of ${cleanChurch}.

I am reaching out because I deeply respect the teaching ministry and spiritual wisdom God has placed upon your pulpit.

Every single week, your members and seekers face life-altering questions at 2:00 AM — about marriage, doubt, bereavement, prayer, and divine purpose. As a pastor, you cannot personally be awake or available 24/7 to answer thousands of people.

However, across your hundreds of Sunday sermons and midweek teachings, you have ALREADY preached the answers to almost every single one of those questions.

What if your congregation had a 24/7 Interactive Sermon Study Companion right on your church website or WhatsApp?
- A member types: "What did Pastor preach about trusting God when losing a job?"
- In 2 seconds, the companion answers in YOUR voice and doctrine.
- Most importantly: it provides the EXACT video timestamp linking directly to the YouTube sermon where you said it.

I have already built and deployed this exact production system for other ministries. You can test a live working demo on your phone right now:
👉 Live Demo: ${demoUrl} (Test asking it any theological question)

How it works for ${cleanChurch}:
1. You share your YouTube sermon channel or audio links.
2. We index your teachings into a secure, private assistant dedicated solely to your ministry.
3. We install a discreet, beautiful button on your website or WhatsApp.

To make this completely risk-free for your ministry:
- Onboarding is accessible to churches of all sizes (${pricingText.starter}, with ${pricingText.monthly}).
- I will personally build a 100% FREE 1-sermon prototype using one of your recent messages so you and your executive team can test it first before deciding anything.

Would you be open to me putting together a quick 3-minute video showing your own sermon answering questions?

With warm regards in Christ,

Adebusola Tomiwa
AI Systems Engineer & Full-Stack Architect
Lagos, Nigeria | WhatsApp: +234 813 330 3907
Portfolio & Systems: ${portfolioUrl}`;
      return { subject, body };
    }

    if (template === 'media-director') {
      const subject = `Idea for ${cleanChurch}'s digital ministry & YouTube archive`;
      const body = `Hi ${cleanChurch} Media & Tech Team,

I've been following the media output and sermon recordings at ${cleanChurch} — congratulations on the excellent production standards!

I'm reaching out with a practical technical enhancement for your church website and YouTube channel:

Most church YouTube libraries have 100+ videos that get very few views once Sunday passes. Valuable teaching sits idle in the archive because members cannot easily search *inside* 45-minute video files for specific topics.

I build custom AI Sermon Search & Study Companions for churches (often called RAG systems in tech, but for churches it's simply an "Interactive Sermon Assistant"):
- Members or seekers type a question on your website or WhatsApp.
- The assistant answers purely using ${cleanPastor}'s teachings.
- It automatically links the exact YouTube timestamp (e.g. 18:24) so viewers jump straight into your channel's video.

You can test a live, production-deployed proof of concept right here:
👉 Live System: ${demoUrl}

Key Technical Highlights:
- Embeds with a single <script> tag on WordPress, Webflow, Squarespace, or custom React/Next.js sites.
- Zero server management for your team (fully managed cloud deployment).
- Strict doctrinal guardrails (it only answers from verified church sermon transcripts, zero hallucinations).
- Transparent, church-friendly pricing: ${pricingText.starter} + ${pricingText.monthly}.

I would love to set up a quick 1-sermon proof-of-concept for ${cleanChurch} at zero cost so you can preview it internally with your leadership.

Could I send over a quick 2-minute demo link this week?

Best regards,

Adebusola Tomiwa
AI Systems Engineer & Full-Stack Architect
WhatsApp: +234 813 330 3907
GitHub / Case Study: ${portfolioUrl}`;
      return { subject, body };
    }

    if (template === 'quick-hook') {
      const subject = `Quick question regarding ${cleanPastor}'s sermons`;
      const body = `Dear ${cleanPastor},

I built an interactive study companion for church sermon archives that lets congregants ask questions and get answers grounded 100% in your sermons, complete with exact YouTube timestamps.

You can test a live working version here:
👉 ${demoUrl}

I would love to set up a free 1-sermon trial for ${cleanChurch} so you can test it with your team. Is this something you would be open to seeing?

Blessings,

Adebusola Tomiwa
AI Systems Engineer
WhatsApp: +234 813 330 3907`;
      return { subject, body };
    }

    // WhatsApp / Direct Message version
    const subject = `Ministry AI Companion Inquiry`;
    const body = `Hello ${cleanPastor} / ${cleanChurch} team! 👋

Grace and peace to you. I'm Adebusola Tomiwa, an AI Systems Engineer from Nigeria.

I build 24/7 Interactive Sermon Study Companions for ministries that allow church members to ask spiritual questions anytime and receive answers directly from your pastor's teachings, with exact video timestamps to your YouTube sermons.

You can test a live working ministry assistant here on your phone:
👉 https://pastor-niyi-ai.onrender.com

I would love to prepare a 100% free test prototype using one of your church's recent sermons so you can see how it works for your congregation. 

Would you like me to share a quick 2-minute preview? God bless your ministry!`;
    return { subject, body };
  }, [churchName, pastorName, template, pricingText]);

  if (!isOpen) return null;

  const handleCopy = () => {
    const fullText = `Subject: ${generatedProposal.subject}\n\n${generatedProposal.body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLaunchEmailClient = () => {
    const cleanTo = recipientEmail.trim();
    if (cleanTo && !validateEmail(cleanTo)) {
      alert("Please fix the recipient email address first.");
      return;
    }

    // Build verified mailto URL
    const target = cleanTo || '';
    const mailtoUrl = `mailto:${encodeURIComponent(target)}?subject=${encodeURIComponent(
      generatedProposal.subject
    )}&body=${encodeURIComponent(generatedProposal.body)}`;

    window.location.href = mailtoUrl;
  };

  const handleLaunchWhatsApp = () => {
    const waText = encodeURIComponent(generatedProposal.body);
    window.open(`https://wa.me/?text=${waText}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/85 backdrop-blur-xl overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl my-auto bg-[#0a0f1d] border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 via-[#0e1628] to-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Church className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider border border-cyan-800/50">
                  CHURCH OUTREACH SUITE
                </span>
                <span className="text-amber-400 text-xs font-mono font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  RAG PROPOSAL ENGINE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">
                Pastor & Ministry AI Proposal Generator
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Top Form Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Target Church Name */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1">
                <Church className="w-3.5 h-3.5 text-cyan-400" />
                Church / Ministry Name
              </label>
              <input 
                type="text" 
                value={churchName}
                onChange={(e) => setChurchName(e.target.value)}
                placeholder="e.g. Elevation Church"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>

            {/* Target Pastor Name */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                Pastor / Minister Name
              </label>
              <input 
                type="text" 
                value={pastorName}
                onChange={(e) => setPastorName(e.target.value)}
                placeholder="e.g. Pastor Steven"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>

            {/* Recipient Email with Validation */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                Recipient Email (Optional)
              </label>
              <input 
                type="email" 
                value={recipientEmail}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="pastor@church.org"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-slate-100 text-xs focus:outline-none font-mono ${
                  emailError ? 'border-red-500' : 'border-slate-700 focus:border-cyan-400'
                }`}
              />
              {emailError && (
                <div className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{emailError}</span>
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                Pricing Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyType)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="USD">USD ($ - Global / US)</option>
                <option value="NGN">NGN (₦ - Nigeria / Africa)</option>
                <option value="GBP">GBP (£ - UK / Europe)</option>
              </select>
            </div>

          </div>

          {/* Template Selection Tabs */}
          <div>
            <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <span>Select Outreach Strategy:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setTemplate('senior-pastor')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  template === 'senior-pastor'
                    ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-xs">Senior Pastor</div>
                <div className="text-[10px] opacity-75 mt-0.5">Sermon legacy & member care</div>
              </button>

              <button
                type="button"
                onClick={() => setTemplate('media-director')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  template === 'media-director'
                    ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-xs">Media / Tech Team</div>
                <div className="text-[10px] opacity-75 mt-0.5">YouTube search & embed widget</div>
              </button>

              <button
                type="button"
                onClick={() => setTemplate('quick-hook')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  template === 'quick-hook'
                    ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-xs">Quick 3-Sentence</div>
                <div className="text-[10px] opacity-75 mt-0.5">High-response busy inboxes</div>
              </button>

              <button
                type="button"
                onClick={() => setTemplate('whatsapp')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  template === 'whatsapp'
                    ? 'bg-emerald-950/60 border-emerald-400 text-emerald-300 shadow-md shadow-emerald-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-xs">WhatsApp / DM</div>
                <div className="text-[10px] opacity-75 mt-0.5">Direct chat outreach</div>
              </button>
            </div>
          </div>

          {/* Email Preview Canvas */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/90 space-y-3 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
              <div>
                <span className="text-slate-500">SUBJECT: </span>
                <span className="text-amber-300 font-bold">{generatedProposal.subject}</span>
              </div>
              <div className="text-slate-500">
                PROVEN PROPOSAL CONVERSION COPY
              </div>
            </div>

            <div className="whitespace-pre-wrap text-slate-200 leading-relaxed font-sans text-xs sm:text-sm max-h-64 overflow-y-auto pr-2">
              {generatedProposal.body}
            </div>
          </div>

          {/* Value Prop Proof Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2.5">
              <Video className="w-4 h-4 text-red-400" />
              <div>
                <div className="font-bold text-slate-200">Exact Timestamps</div>
                <div className="text-[10px] text-slate-400">Links straight to YouTube video</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="font-bold text-slate-200">Zero Hallucinations</div>
                <div className="text-[10px] text-slate-400">Strictly grounded in sermon text</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="font-bold text-slate-200">Free 1-Sermon Sample</div>
                <div className="text-[10px] text-slate-400">Pastors test before spending</div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Controls Footer */}
        <div className="p-5 border-t border-slate-800/80 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Live Case Study: <strong>Pastor Niyi AI</strong></span>
            <a 
              href="https://pastor-niyi-ai.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-0.5 ml-1"
            >
              <span>Test live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-bold transition-all flex items-center gap-2 border border-slate-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Proposal'}</span>
            </button>

            {/* Launch WhatsApp Button */}
            <button
              onClick={handleLaunchWhatsApp}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send WhatsApp</span>
            </button>

            {/* Launch Email Client Button */}
            <button
              onClick={handleLaunchEmailClient}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <Mail className="w-4 h-4" />
              <span>Launch Mail Client</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
