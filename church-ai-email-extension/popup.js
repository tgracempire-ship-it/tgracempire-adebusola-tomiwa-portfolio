// ChurchAI Outreach Popup Logic

document.addEventListener('DOMContentLoaded', () => {
  const churchNameInput = document.getElementById('churchName');
  const pastorNameInput = document.getElementById('pastorName');
  const recipientEmailInput = document.getElementById('recipientEmail');
  const templateSelect = document.getElementById('templateSelect');
  const currencySelect = document.getElementById('currencySelect');
  const subjectPreview = document.getElementById('subjectPreview');
  const bodyPreview = document.getElementById('bodyPreview');
  const copyBtn = document.getElementById('copyBtn');
  const gmailBtn = document.getElementById('gmailBtn');
  const mailtoBtn = document.getElementById('mailtoBtn');
  const waBtn = document.getElementById('waBtn');
  const scanBtn = document.getElementById('scanBtn');
  const scanStatus = document.getElementById('scanStatus');
  const emailError = document.getElementById('emailError');
  const valBadge = document.getElementById('emailValidationBadge');

  // Initial defaults
  churchNameInput.value = "Grace Community Church";
  pastorNameInput.value = "Pastor David";

  // Validate Email
  function validateEmail(email) {
    if (!email.trim()) {
      emailError.textContent = "";
      recipientEmailInput.classList.remove('error-border');
      valBadge.textContent = "Optional";
      valBadge.style.color = "#64748b";
      return true;
    }
    const trimmed = email.trim();
    if (trimmed.includes('@gamil.com') || trimmed.includes('@yaho.com') || trimmed.includes('@hotmial.com')) {
      emailError.textContent = "Typo detected: Did you mean @gmail.com?";
      recipientEmailInput.classList.add('error-border');
      valBadge.textContent = "Typo";
      valBadge.style.color = "#ef4444";
      return false;
    }
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!regex.test(trimmed)) {
      emailError.textContent = "Invalid format: Check address syntax";
      recipientEmailInput.classList.add('error-border');
      valBadge.textContent = "Invalid";
      valBadge.style.color = "#ef4444";
      return false;
    }
    emailError.textContent = "";
    recipientEmailInput.classList.remove('error-border');
    valBadge.textContent = "Valid ✓";
    valBadge.style.color = "#10b981";
    return true;
  }

  // Pricing matrix
  function getPricing(curr) {
    switch (curr) {
      case 'NGN':
        return {
          setup: '₦150,000 one-time onboarding (includes indexing 50 sermons)',
          monthly: '₦15,000/month for cloud AI hosting & continuous updates'
        };
      case 'GBP':
        return {
          setup: '£245 one-time onboarding (includes indexing 50 sermons)',
          monthly: '£15/month for cloud AI hosting & continuous updates'
        };
      default:
        return {
          setup: '$295 one-time onboarding (includes indexing 50 sermons)',
          monthly: '$19/month for cloud AI hosting & continuous updates'
        };
    }
  }

  // Generate proposal text
  function updateProposal() {
    const church = churchNameInput.value.trim() || "Your Church";
    const pastor = pastorNameInput.value.trim() || "Pastor";
    const tmpl = templateSelect.value;
    const curr = currencySelect.value;
    const pricing = getPricing(curr);
    const demoUrl = "https://pastor-niyi-ai.onrender.com";

    let subject = "";
    let body = "";

    if (tmpl === 'senior-pastor') {
      subject = `Question for ${pastor} regarding ${church}'s sermon archive`;
      body = `Dear ${pastor},

Grace and peace to you and the family of ${church}.

I am reaching out because I deeply respect the teaching ministry and spiritual wisdom God has placed upon your pulpit.

Every single week, your members and seekers face life-altering questions at 2:00 AM — about marriage, doubt, bereavement, prayer, and divine purpose. As a pastor, you cannot personally be awake or available 24/7 to answer thousands of people.

However, across your hundreds of Sunday sermons and midweek teachings, you have ALREADY preached the answers to almost every single one of those questions.

What if your congregation had a 24/7 Interactive Sermon Study Companion right on your church website or WhatsApp?
- A member types: "What did Pastor preach about trusting God when losing a job?"
- In 2 seconds, the companion answers in YOUR voice and doctrine.
- Most importantly: it provides the EXACT video timestamp linking directly to the YouTube sermon where you said it.

I have already built and deployed this exact production system for other ministries. You can test a live working demo on your phone right now:
👉 Live Demo: ${demoUrl} (Test asking it any theological question)

How it works for ${church}:
1. You share your YouTube sermon channel or audio links.
2. We index your teachings into a secure, private assistant dedicated solely to your ministry.
3. We install a discreet, beautiful button on your website or WhatsApp.

To make this completely risk-free for your ministry:
- Onboarding is accessible to churches of all sizes (${pricing.setup}, with ${pricing.monthly}).
- I will personally build a 100% FREE 1-sermon prototype using one of your recent messages so you and your executive team can test it first before deciding anything.

Would you be open to me putting together a quick 3-minute video showing your own sermon answering questions?

With warm regards in Christ,

Adebusola Tomiwa
AI Systems Engineer & Full-Stack Architect
Lagos, Nigeria | WhatsApp: +234 813 330 3907
Case Study: https://github.com/tgracempire-ship-it/tgracempire-adebusola-tomiwa-portfolio`;
    } else if (tmpl === 'media-director') {
      subject = `Idea for ${church}'s digital ministry & YouTube archive`;
      body = `Hi ${church} Media & Tech Team,

I've been following the media output and sermon recordings at ${church} — congratulations on the excellent production standards!

I'm reaching out with a practical technical enhancement for your church website and YouTube channel:

Most church YouTube libraries have 100+ videos that get very few views once Sunday passes. Valuable teaching sits idle in the archive because members cannot easily search *inside* 45-minute video files for specific topics.

I build custom AI Sermon Search & Study Companions for churches:
- Members or seekers type a question on your website or WhatsApp.
- The assistant answers purely using ${pastor}'s teachings.
- It automatically links the exact YouTube timestamp (e.g. 18:24) so viewers jump straight into your channel's video.

You can test a live, production-deployed proof of concept right here:
👉 Live System: ${demoUrl}

Key Technical Highlights:
- Embeds with a single <script> tag on WordPress, Webflow, Squarespace, or custom React/Next.js sites.
- Zero server management for your team (fully managed cloud deployment).
- Strict doctrinal guardrails (it only answers from verified church sermon transcripts, zero hallucinations).
- Transparent, church-friendly pricing: ${pricing.setup} + ${pricing.monthly}.

I would love to set up a quick 1-sermon proof-of-concept for ${church} at zero cost so you can preview it internally with your leadership.

Could I send over a quick 2-minute demo link this week?

Best regards,

Adebusola Tomiwa
AI Systems Engineer & Full-Stack Architect
WhatsApp: +234 813 330 3907`;
    } else if (tmpl === 'quick-hook') {
      subject = `Quick question regarding ${pastor}'s sermons`;
      body = `Dear ${pastor},

I built an interactive study companion for church sermon archives that lets congregants ask questions and get answers grounded 100% in your sermons, complete with exact YouTube timestamps.

You can test a live working version here:
👉 ${demoUrl}

I would love to set up a free 1-sermon trial for ${church} so you can test it with your team. Is this something you would be open to seeing?

Blessings,

Adebusola Tomiwa
AI Systems Engineer
WhatsApp: +234 813 330 3907`;
    } else {
      // WhatsApp
      subject = `Ministry AI Companion Inquiry`;
      body = `Hello ${pastor} / ${church} team! 👋

Grace and peace to you. I'm Adebusola Tomiwa, an AI Systems Engineer from Nigeria.

I build 24/7 Interactive Sermon Study Companions for ministries that allow church members to ask spiritual questions anytime and receive answers directly from your pastor's teachings, with exact video timestamps to your YouTube sermons.

You can test a live working ministry assistant here on your phone:
👉 https://pastor-niyi-ai.onrender.com

I would love to prepare a 100% free test prototype using one of your church's recent sermons so you can see how it works for your congregation. 

Would you like me to share a quick 2-minute preview? God bless your ministry!`;
    }

    subjectPreview.textContent = subject;
    bodyPreview.value = body;
  }

  // Scan current page
  scanBtn.addEventListener('click', () => {
    scanStatus.textContent = "Scanning page...";
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || !tabs[0] || !tabs[0].id) {
        scanStatus.textContent = "Could not access tab.";
        return;
      }

      chrome.tabs.sendMessage(tabs[0].id, { action: "extractChurchData" }, (response) => {
        if (chrome.runtime.lastError || !response) {
          scanStatus.textContent = "No data found or page protected.";
          return;
        }

        if (response.guessedName && response.guessedName.length > 2) {
          churchNameInput.value = response.guessedName;
        }

        if (response.emails && response.emails.length > 0) {
          const firstEmail = response.emails[0];
          recipientEmailInput.value = firstEmail;
          validateEmail(firstEmail);
          scanStatus.textContent = `Found ${response.emails.length} email(s): ${firstEmail}`;
        } else {
          scanStatus.textContent = `Scanned page. No email detected.`;
        }
        updateProposal();
      });
    });
  });

  // Event listeners for inputs
  churchNameInput.addEventListener('input', updateProposal);
  pastorNameInput.addEventListener('input', updateProposal);
  templateSelect.addEventListener('change', updateProposal);
  currencySelect.addEventListener('change', updateProposal);
  recipientEmailInput.addEventListener('input', (e) => {
    validateEmail(e.target.value);
  });

  // Copy button
  copyBtn.addEventListener('click', () => {
    const fullText = `Subject: ${subjectPreview.textContent}\n\n${bodyPreview.value}`;
    navigator.clipboard.writeText(fullText).then(() => {
      const orig = copyBtn.textContent;
      copyBtn.textContent = "✓ Copied!";
      setTimeout(() => { copyBtn.textContent = orig; }, 2000);
    });
  });

  // Open in Gmail Web
  gmailBtn.addEventListener('click', () => {
    const to = recipientEmailInput.value.trim();
    if (to && !validateEmail(to)) {
      alert("Please fix the recipient email address first.");
      return;
    }
    const su = encodeURIComponent(subjectPreview.textContent);
    const body = encodeURIComponent(bodyPreview.value);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${su}&body=${body}`;
    window.open(gmailUrl, '_blank');
  });

  // Desktop Mailto
  mailtoBtn.addEventListener('click', () => {
    const to = recipientEmailInput.value.trim();
    if (to && !validateEmail(to)) {
      alert("Please fix the recipient email address first.");
      return;
    }
    const su = encodeURIComponent(subjectPreview.textContent);
    const body = encodeURIComponent(bodyPreview.value);
    const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${su}&body=${body}`;
    window.location.href = mailtoUrl;
  });

  // WhatsApp
  waBtn.addEventListener('click', () => {
    const text = encodeURIComponent(bodyPreview.value);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  });

  // Initial update
  updateProposal();
});
