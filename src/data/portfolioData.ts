export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'rag-ai' | 'whatsapp-ai' | 'edge-ai' | 'saas' | 'landing-page' | 'multimodal' | 'extensions-mobile' | 'media-studio';
  categoryLabel: string;
  tags: string[];
  description: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  impact: string;
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
  };
  featured: boolean;
  image?: string;
  codeSnippet?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; note: string }[];
}

export const PERSONAL_INFO = {
  name: "Adebusola Tomiwa",
  handle: "tgracempire-ship-it",
  title: "AI Systems Engineer & Full-Stack Architect",
  academicOrigin: "B.Sc. (Ed) — Obafemi Awolowo University (OAU)",
  location: "Lagos, Nigeria",
  status: "Available for Senior AI / Full-Stack Roles & High-Impact Consulting",
  email: "adebusolatomiwa2017@gmail.com",
  phone: "+234 805 264 6511",
  whatsappUrl: "https://wa.me/2348052646511?text=Hello%20Adebusola,%20I%20reviewed%20your%20AI%20Engineering%20and%20Web%20portfolio!",
  githubUrl: "https://github.com/tgracempire-ship-it",
  summary: "AI Systems Engineer and Full-Stack Architect building production RAG systems, WhatsApp autonomous agents, multimodal media pipelines, and high-conversion web products.",
  coreValues: [
    { title: "Systems Thinking", desc: "Turning complex product requirements into dependable AI workflows, services, and user experiences." },
    { title: "Autonomous Conversational AI", desc: "Engineering WhatsApp and web customer care agents that parse intents, manage multi-turn state, and log leads." },
    { title: "Full-Stack Craft & Velocity", desc: "Building responsive, accessible web portals, high-conversion landing pages, and cloud-native microservices." }
  ],
  stats: [
    { label: "Production AI & Web Systems", value: "20+", sub: "Shipped & Active in Production" },
    { label: "Audio & Transcripts Vectorized", value: "500+ hrs", sub: "Multi-Speaker ChromaDB RAG" },
    { label: "WhatsApp AI Availability", value: "24/7", sub: "Gemini AI + Baileys Service" },
    { label: "Offline Edge Capability", value: "100%", sub: "Zero-Internet Desktop Lab" }
  ]
};

export const PROJECTS: Project[] = [
  /* 1. Pastor Niyi AI */
  {
    id: "pastor-niyi-ai",
    title: "Pastor Niyi AI",
    subtitle: "Production RAG Sermon Study Assistant & Microservice",
    category: "rag-ai",
    categoryLabel: "RAG & Conversational AI",
    featured: true,
    tags: ["FastAPI", "ChromaDB", "Google Gemini 2.5", "Docker", "Render", "Vector Embeddings", "Embeddable JS"],
    description: "A high-performance theological conversational RAG assistant capable of semantic question answering over hundreds of hours of sermon audio and transcripts. Features an embeddable floating widget that integrates into any website with a single <script> tag.",
    architecture: [
      "Speech-to-Text pipeline with automated speaker splitting and YouTube timestamp matching",
      "Persistent Chroma Vector DB storing domain-curated semantic chunk embeddings",
      "FastAPI backend with streaming synthesis via Google Gemini API",
      "Standalone vanilla JS floating client widget with responsive full-screen mobile drawer",
      "Render Cloud Blueprint deployment with automated Google Drive dataset synchronization"
    ],
    metrics: [
      { label: "Audio Indexed", value: "500+ Hours" },
      { label: "Response Latency", value: "~1.2s" },
      { label: "Deployment", value: "Render Docker Blueprint" }
    ],
    impact: "Democratized instant semantic discovery across a decade of theological lectures for thousands of congregants globally.",
    links: {
      demo: "https://pastor-niyi-ai.onrender.com",
      github: "https://github.com/tgracempire-ship-it/pastor-niyi-ai"
    },
    codeSnippet: {
      title: "vector_rag_retrieval.py",
      language: "python",
      code: `async def query_sermon_rag(question: str, top_k: int = 5):\n    query_embedding = get_gemini_embedding(question)\n    results = chroma_collection.query(\n        query_embeddings=[query_embedding],\n        n_results=top_k,\n        include=['documents', 'metadatas', 'distances']\n    )\n    context_blocks = format_theological_context(results)\n    response = await gemini_client.generate_content(\n        model="gemini-2.5-flash",\n        contents=build_grounded_prompt(question, context_blocks)\n    )\n    return {"answer": response.text, "citations": results['metadatas'][0]}`
    }
  },

  /* 2. Estamo Care WhatsApp AI Chatbot */
  {
    id: "estamo-whatsapp-bot",
    title: "Estamo Care WhatsApp AI Agent",
    subtitle: "24/7 Autonomous Customer Care & Caregiver Recruitment WhatsApp Agent",
    category: "whatsapp-ai",
    categoryLabel: "WhatsApp AI & Agentic Bots",
    featured: true,
    image: "images/projects/ai_bot_flyer.jpg",
    tags: ["WhatsApp Bot", "Google Gemini AI", "Baileys", "Node.js", "Express", "Docker", "Lead Tracking", "PM2"],
    description: "An intelligent, 24/7 conversational customer care agent deployed on WhatsApp for Estamo Care (UK). Powered by Google Gemini and @whiskeysockets/baileys, it handles patient care inquiries (dementia, domiciliary, respite), auto-schedules assessments, qualifies job-seeking nurses and caregivers, debounces rapid messages, logs leads, and offers a browser QR visualizer dashboard.",
    architecture: [
      "WhatsApp Web socket integration using @whiskeysockets/baileys with automated session resumption in auth_info/",
      "Google Gemini AI multi-turn conversational agent with domain knowledge injection from knowledgeBase.js",
      "Message debounce & grouping buffer (groups rapid multi-bubble user messages into coherent prompts)",
      "Automated lead capture tracking: structured logging of client care needs and CV applications to data/inquiries.json",
      "Browser QR Code visualizer (/qr dashboard) and health check endpoint for uptime monitoring",
      "Containerized deployment with Docker Compose and PM2 process management"
    ],
    metrics: [
      { label: "Uptime", value: "24/7 Always Active" },
      { label: "AI Engine", value: "Gemini 3.5 / Flash" },
      { label: "Features", value: "Intake & Recruitment" }
    ],
    impact: "Automated 80% of repetitive incoming UK patient care inquiries and recruitment screening around the clock with zero human lag.",
    codeSnippet: {
      title: "gemini_whatsapp_orchestrator.js",
      language: "javascript",
      code: `// Multi-turn context memory with message debouncing\nasync function handleIncomingWhatsAppMessage(contactJid, messageText) {\n  const session = getOrCreateSession(contactJid);\n  session.buffer.push(messageText);\n  \n  clearTimeout(session.debounceTimer);\n  session.debounceTimer = setTimeout(async () => {\n    const fullPrompt = session.buffer.join(" ");\n    session.buffer = [];\n    \n    const aiResponse = await geminiChat.sendMessage(fullPrompt);\n    await whatsappClient.sendMessage(contactJid, { text: aiResponse.text });\n    \n    // Detect client care bookings or caregiver applications\n    logCapturedLeadsIfPresent(contactJid, fullPrompt, aiResponse.text);\n  }, 1800);\n}`
    }
  },

  /* 3. Mavisual Learning Lab */
  {
    id: "mavisual",
    title: "Mavisual Learning Lab",
    subtitle: "Offline-First Interactive 3D Math & Science Intelligence Engine",
    category: "edge-ai",
    categoryLabel: "Edge AI & 3D Web",
    featured: true,
    tags: ["React 19", "Three.js", "Tailwind v4", "@google/genai", "Electron 42", "Vite 6", "Offline Brain"],
    description: "An interactive 3D mathematics and science laboratory engineered specifically for Nigerian secondary schools with spotty or zero internet. Incorporates an intelligent offline heuristic engine (`offlineBrain.ts`) for instant problem solving, with automatic fallback to Gemini GenAI when connectivity is detected.",
    architecture: [
      "Three.js 3D WebGL engine for real-time spatial geometry, vectors, and physics simulations",
      "Offline Heuristic Brain: Rule-based symbolic solver and knowledge graph for zero-data environments",
      "Hybrid Gemini Cloud Escalation: Auto-connects to @google/genai for complex exploratory questions",
      "Electron 42 runtime with portable single-binary NSIS packaging for Windows classrooms"
    ],
    metrics: [
      { label: "Offline Coverage", value: "100% Core Math/Physics" },
      { label: "Packaging", value: "Portable .exe" },
      { label: "Graphics", value: "60 FPS Three.js WebGL" }
    ],
    impact: "Used by educators to teach complex 3D geometry, algebraic surfaces, and optics without recurring subscription or data costs.",
    codeSnippet: {
      title: "offlineBrain.ts (Heuristic Solver Engine)",
      language: "typescript",
      code: `export class OfflineMathBrain {\n  solveSymbolicEquation(eq: string): SolutionTrace {\n    const canonical = this.normalizeAlgebraicTokens(eq);\n    if (this.isQuadratic(canonical)) {\n      const { a, b, c } = this.extractCoefficients(canonical);\n      const discriminant = Math.pow(b, 2) - 4 * a * c;\n      return this.renderStepByStepQuadratic(a, b, c, discriminant);\n    }\n    return this.searchCurriculumKnowledgeGraph(canonical);\n  }\n}`
    }
  },

  /* 4. TDCL Online Church Platform */
  {
    id: "tdcl-online-church",
    title: "TDCL Online Church Platform",
    subtitle: "Next.js 15 Streaming Sanctuary, Media Portal & Community Web App",
    category: "landing-page",
    categoryLabel: "Modern Web & Media Portal",
    featured: true,
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Canvas Confetti", "Lucide Icons", "Vercel"],
    description: "A full-featured digital sanctuary and media portal built on the Next.js 15 App Router and React 19. Offers livestream broadcasting, interactive sermon note-taking, responsive event schedules, digital giving integration, and interactive attendee celebration interactions.",
    architecture: [
      "Next.js 15 App Router architecture with optimized server-side rendering (SSR) and dynamic metadata",
      "Interactive attendee celebration system with dynamic canvas-confetti particle physics",
      "Modern dark/light responsive layout with micro-interactions and audio-visual streaming integration",
      "Automated Vercel edge deployment with instant cache revalidation"
    ],
    metrics: [
      { label: "Framework", value: "Next.js 15 + React 19" },
      { label: "Performance", value: "100% Core Web Vitals" },
      { label: "Media Hub", value: "Live & On-Demand" }
    ],
    impact: "Serves hundreds of remote congregants with seamless worship streaming, digital notes, and giving."
  },

  /* 6. Estamo Care Corporate Web Platform */
  {
    id: "estamo-care-web",
    title: "Estamo Care Healthcare Platform",
    subtitle: "High-Conversion UK Domiciliary, Dementia & Nursing Web Portal",
    category: "landing-page",
    categoryLabel: "Healthcare Web Platform",
    featured: true,
    tags: ["HTML5", "CSS3", "PHP Backend", "JavaScript", "CQC Compliant", "Caregiver Recruitment"],
    description: "The complete public web portal for Estamo Care, a leading UK healthcare and domiciliary agency. Features a multi-page client intake funnel, detailed service descriptions (Dementia, Elderly Companionship, Live-in Care), worker recruitment portal with CV attachment processors, and responsive contact maps.",
    architecture: [
      "Multi-page responsive architecture (services.html, careers.html, contact.html, index.html)",
      "PHP backend handlers for processing client care assessments and job candidate CV uploads",
      "CQC-aligned accessibility standards, trust badges, and emergency escalation workflows"
    ],
    metrics: [
      { label: "Services", value: "Full UK Care Spectrum" },
      { label: "Application Flow", value: "Automated CV Intake" },
      { label: "Design", value: "Modern Healthcare UI" }
    ],
    impact: "Drives prospective patient admissions and carer recruitment for Estamo Care's UK operations."
  },

  /* 7. Christ the Greatest Foundation */
  {
    id: "christ-greatest-foundation",
    title: "Christ the Greatest Foundation",
    subtitle: "Humanitarian & Non-Profit Community Outreach Landing Page",
    category: "landing-page",
    categoryLabel: "High-Impact NGO Landing Page",
    featured: false,
    image: "images/projects/ctg_logo.png",
    tags: ["React", "Vite", "Tailwind CSS", "Oxlint", "Lucide Icons", "Non-Profit", "Vercel"],
    description: "A responsive, high-empathy web application and landing page for Christ the Greatest Foundation. Showcases humanitarian outreach initiatives, community development, educational sponsorships, and interactive donation contribution flows.",
    architecture: [
      "Vite + React single-page application built with modern component architecture and Oxlint linter",
      "Mobile-optimized donation funnel, volunteer registration modal, and interactive photo gallery",
      "High-contrast accessible color scheme ensuring clarity across low-end mobile screens"
    ],
    metrics: [
      { label: "Tooling", value: "Vite + Oxlint" },
      { label: "Accessibility", value: "High-Contrast UI" }
    ],
    impact: "Amplifies humanitarian awareness and donor engagement across underprivileged communities."
  },

  /* 8. Platform School Storekeeper */
  {
    id: "platform-school-storekeeper",
    title: "Platform School Storekeeper Desk",
    subtitle: "Offline-First Institutional Inventory & Uniform Dispensing System",
    category: "saas",
    categoryLabel: "Inventory & School Logistics",
    featured: false,
    tags: ["Offline-First PWA", "JavaScript", "Android APK", "Inventory Flow", "Manifest", "CSS3"],
    description: "A purpose-built inventory management system engineered for educational storekeepers. Tracks inputs received from suppliers vs. outputs dispensed to students (uniforms by size, textbooks, stationery) with automatic balance calculations and native Android APK distribution.",
    architecture: [
      "Deterministic stock ledger tracking cumulative inputs (+) vs. outputs (-) with real-time balance formula",
      "Per-item flow strips with 1-click Quick Input and Quick Output modal dialogs",
      "Packaged as a standalone offline PWA and compiled into an Android native APK (Platform_School_Storekeeper_v2.0.apk)"
    ],
    metrics: [
      { label: "Offline Status", value: "100% Offline Active" },
      { label: "Distribution", value: "Web PWA + Android APK" },
      { label: "Reconciliation", value: "Zero Stock Drift" }
    ],
    impact: "Eliminated inventory discrepancies and chaotic uniform sizing queues across academic terms."
  },

  /* 9. Sylva Living Green (3D UI) */
  {
    id: "sylva-3d-ui",
    title: "Sylva Living Green 3D Portal",
    subtitle: "Interactive 3D WebGL Environmental & Spatial Experience",
    category: "edge-ai",
    categoryLabel: "3D WebGL & Creative Tech",
    featured: false,
    tags: ["React", "Three.js", "@designcodeio/threeui", "TypeScript", "Vite", "3D Web"],
    description: "A 3D interactive web portal incorporating real-time WebGL rendering, spatial physics, and dynamic lighting. Developed using React and `@designcodeio/threeui` to explore sustainable design and modern environmental aesthetics in three dimensions.",
    architecture: [
      "Three.js spatial scene graph with dynamic directional lighting and shadows",
      "Declarative 3D component integration using @designcodeio/threeui",
      "Fluid orbital camera controls optimized for 60 FPS rendering in the browser"
    ],
    metrics: [
      { label: "Rendering", value: "60 FPS WebGL" },
      { label: "Framework", value: "Three.js + React" }
    ],
    impact: "Demonstrates creative engineering capabilities in WebGL and spatial interactive web applications."
  },

  /* 10. BEnty Engineering Showcase */
  {
    id: "benty-engineering",
    title: "BEnty Structural Engineering Portfolio",
    subtitle: "Civil & Structural Engineering Project Showcase & Inquiry Portal",
    category: "landing-page",
    categoryLabel: "Professional Engineering Portfolio",
    featured: false,
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "FormSubmit", "Responsive UI"],
    description: "A tailored digital portfolio designed for Ebenezer, a senior civil and structural engineer. Highlights heavy construction projects, structural drafting, site quality assurance, and a zero-backend form integration routing inquiries directly to email.",
    architecture: [
      "Vite + React TypeScript architecture styled in Teal (#0F3E4D) and Gold (#EFA526)",
      "Zero-backend contact pipeline utilizing FormSubmit for direct email dispatch without server overhead",
      "Mobile-first responsive project showcase optimized for corporate clients and hiring managers"
    ],
    metrics: [
      { label: "Palette", value: "Teal & Gold Industrial" },
      { label: "Routing", value: "Zero-Backend FormSubmit" }
    ],
    impact: "Elevated executive presence for structural project bidding and engineering consultancy."
  },

  /* 11. Oren College Comprehensive Portal */
  {
    id: "oren-college-web",
    title: "Oren College Web Portal",
    subtitle: "Educational Institution Portal, Academic Calendar & Digital Library",
    category: "landing-page",
    categoryLabel: "Educational Institution Portal",
    featured: false,
    image: "images/projects/oren_school_logo.webp",
    tags: ["HTML5", "CSS3", "JavaScript", "Digital Library", "Academic Roster", "School Portal"],
    description: "The primary digital presence for Oren College, integrating student academic session schedules, class structures, admissions inquiries, and a curated digital library for secondary school pupils.",
    architecture: [
      "Comprehensive multi-page school architecture (about-us, academic-session, class-structure, digital-library)",
      "Integrated student bio-data roster processing and automated digital book catalogue",
      "High-speed, lightweight static architecture delivering instantaneous page loads"
    ],
    metrics: [
      { label: "Pages", value: "Full Campus Spectrum" },
      { label: "Library", value: "Integrated Digital Hub" }
    ],
    impact: "Serves hundreds of parents and students with vital academic session dates, curriculum, and admissions."
  },

  /* 12. School Management Database System & SaaS ERP */
  {
    id: "school-saas-erp",
    title: "Enterprise School Management SaaS",
    subtitle: "High-Scale Multi-Tenant Academic & ERP Database Platform",
    category: "saas",
    categoryLabel: "Enterprise Systems & SaaS",
    featured: true,
    tags: ["React Vite", "TypeScript", "Node.js", "Express", "Sequelize ORM", "PostgreSQL Neon", "Docker"],
    description: "A comprehensive cloud ERP architected for educational institutions across Africa. Features a detailed 65-page technical specification, student lifecycle tracking, multi-term grade computations, and financial fee auditing.",
    architecture: [
      "Multi-tenant PostgreSQL database hosted on Neon Cloud with Sequelize ORM abstraction",
      "Role-Based Access Control (RBAC) covering Principals, Teachers, Bursars, and Guardians",
      "Deterministic grading engine computing cumulative averages, percentiles, and automated report cards",
      "Containerized deployment architecture configured with Docker Compose"
    ],
    metrics: [
      { label: "Spec Depth", value: "65-Page PRD Blueprint" },
      { label: "Data Integrity", value: "ACID Compliant" },
      { label: "Tenants", value: "Multi-Campus Ready" }
    ],
    impact: "Eliminated weeks of manual paper report card generation and tuition reconciliation errors for growing secondary institutions."
  },

  /* 13. Healthity AI Portal */
  {
    id: "healthity-ai",
    title: "Healthity Portal",
    subtitle: "Generative AI Preventive Healthcare & Screening Platform",
    category: "rag-ai",
    categoryLabel: "HealthTech AI",
    featured: false,
    tags: ["Google AI Studio", "Server-Side Gemini API", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "A preventative health platform integrating server-side Gemini intelligence to conduct initial health risk screenings, personalized wellness plans, vaccination schedules, and corporate wellness diagnostics.",
    architecture: [
      "Server-side Gemini 1.5/2.0 API integration with strict medical hallucination guardrails",
      "Interactive multi-stage risk assessment questionnaire with real-time feedback",
      "Structured JSON schema validation for patient wellness summaries"
    ],
    metrics: [
      { label: "Capabilities", value: "Server-Side Gemini API" },
      { label: "Safety", value: "Strict Clinical Triage Guardrails" }
    ],
    impact: "Streamlines patient triage and preventive screening before consultation with medical professionals."
  },

  /* 14. Autonomous Video Production Studio */
  {
    id: "autonomous-video-pipeline",
    title: "Autonomous Video & Speech AI Pipeline",
    subtitle: "Full-Stack Media Automation with Whisper & Dynamic ASS Subtitles",
    category: "multimodal",
    categoryLabel: "Multimodal Video & Speech AI",
    featured: false,
    tags: ["Python", "OpenAI Whisper", "FFmpeg", "Advanced SubStation Alpha", "MoviePy", "Audio Mastering"],
    description: "An automated end-to-end studio pipeline that ingests long-form sermons and lectures, extracts viral key moments, performs speaker-diarized transcription with Whisper, aligns dynamic word-level kinetic typography, and masters audio to -14 LUFS standards.",
    architecture: [
      "Acoustic feature extraction and Whisper transcription with timestamp alignment",
      "Dynamic .ass subtitle generator with balanced kinetic emphasis and color overlays",
      "FFmpeg hardware-accelerated video slice, crop, and portrait (9:16) reel generation",
      "Broadcast loudness normalization complying with YouTube and TikTok standards"
    ],
    metrics: [
      { label: "Time Saved", value: "95% vs Manual Editing" },
      { label: "Audio Target", value: "-14 to -16 LUFS" },
      { label: "Framerate", value: "60 FPS Lossless" }
    ],
    impact: "Powers automated production of high-engagement educational and spiritual short-form video reels."
  },

  /* 15. Inner City Children Initiative (ICCI) */
  {
    id: "icci-ngo-portal",
    title: "Inner City Children Initiative (ICCI)",
    subtitle: "Modern Responsive Web Platform for Underserved Slum Communities",
    category: "landing-page",
    categoryLabel: "Web Engineering & Social Impact",
    featured: false,
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Vercel", "Accessibility WCAG"],
    description: "A high-performance, accessible web application for an NGO operating across Lagos waterfront communities and inner-city settlements. Includes donor conversion funnels, volunteer onboarding, and interactive program galleries.",
    architecture: [
      "Mobile-first responsive architecture with custom swipeable lightboxes and dark mode",
      "WCAG-compliant contrast ratios and semantic keyboard navigation",
      "Integrated donation routing and donor reporting"
    ],
    metrics: [
      { label: "Accessibility", value: "100% WCAG AA" },
      { label: "Performance", value: "98 Lighthouse Score" }
    ],
    impact: "Mobilized donor resources and volunteer coordinators across multiple community outreaches in Lagos."
  },

  /* 16. FlowPilot Chrome Side Panel Extension */
  {
    id: "flowpilot-extension",
    title: "FlowPilot — Google Flow Automation Extension",
    subtitle: "Manifest V3 Side Panel Prompt Batch Queue & Asset Library",
    category: "extensions-mobile",
    categoryLabel: "Chrome Extension & AI Queue",
    featured: true,
    tags: ["Chrome Extension", "Manifest V3", "Google Flow", "Side Panel API", "IndexedDB", "Async Batch Queue", "Pacing & Backoff"],
    description: "An unofficial, dependency-free Chrome Manifest V3 side panel extension engineered for generative media creators using Google Flow. Features bulk CSV/JSON prompt queuing, local reference asset storage in IndexedDB, sequential chaining, randomized pacing, exponential backoff, and ZIP packaging of generated assets.",
    architecture: [
      "Dependency-free Chrome Manifest V3 architecture with zero external runtime libraries for clean security auditing",
      "Chrome Side Panel API integration operating alongside Google Flow in real-time without context switching",
      "Local reference-asset library powered by browser IndexedDB for rapid prompt attachments",
      "Resilient queue state machine supporting start, pause, resume, randomized pacing, and exponential backoff",
      "Structured output naming, Chrome Downloads subfolder routing, and automated batch ZIP packaging"
    ],
    metrics: [
      { label: "Platform", value: "Chrome MV3 Side Panel" },
      { label: "Storage", value: "IndexedDB Local-First" },
      { label: "Queue Control", value: "CSV / JSON Batch Engine" }
    ],
    impact: "Replaces repetitive manual prompt copying with an observable, automated queue for long generative video and image runs.",
    codeSnippet: {
      title: "flowpilot_queue_adapter.js",
      language: "javascript",
      code: `// Resilient batch queuing with exponential backoff and pacing\nclass FlowPilotQueueAdapter {\n  async processBatch(promptItems) {\n    for (const item of promptItems) {\n      if (this.isPaused) await this.waitForResume();\n      await this.injectPromptIntoFlowDom(item.prompt, item.settings);\n      await this.awaitJobCompletionOrTimeout(item.timeoutMs);\n      await this.randomizedPacingDelay(1500, 3500);\n    }\n  }\n}`
    }
  },

  /* 17. The Designate Church (TDCI) Discipleship App */
  {
    id: "tdci-discipleship-app",
    title: "The Designate Church Discipleship App",
    subtitle: "Android Native Mobile App & Cloud Backend on Render",
    category: "extensions-mobile",
    categoryLabel: "Mobile App & Cloud API",
    featured: true,
    tags: ["Capacitor", "Android Native", "Node.js", "PostgreSQL Neon", "Render", "Offline-First", "Local Ledger"],
    description: "A private, mobile-first discipleship practice ledger and goal tracking application for The Designate Church (TDCI), Lagos. Features daily prayer timers, monthly discipleship targets published from an admin cloud API, offline-first local storage with automatic sync queueing, and private reflection journals.",
    architecture: [
      "Cross-platform mobile architecture packaged for native Android via Capacitor (Build Tools 36)",
      "Node.js and PostgreSQL cloud REST API deployed on Render with admin-authenticated monthly target publishing",
      "Local-first optimistic persistence with automatic offline action queuing and background sync reconciliation",
      "Integrated multi-hour prayer session stopwatch with ambient timer controls and scripture tracking",
      "Private member activity ledger with zero cross-member data leakage or shame mechanics"
    ],
    metrics: [
      { label: "Platform", value: "Android APK + Web PWA" },
      { label: "Cloud API", value: "Node.js + PostgreSQL Render" },
      { label: "Data Integrity", value: "Offline-First Sync Queue" }
    ],
    impact: "Enables hundreds of church members to track daily spiritual disciplines, Scripture reading, and multi-hour prayer sessions seamlessly offline and online."
  },

  /* 18. Threads of Heritage — Bespoke Yoruba Aso Oke Atelier */
  {
    id: "threads-of-heritage",
    title: "Threads of Heritage — Bespoke Aso Oke Atelier",
    subtitle: "React 19 + TypeScript + Tailwind v4 Artisan E-Commerce Portal",
    category: "landing-page",
    categoryLabel: "Luxury E-Commerce & Atelier",
    featured: true,
    tags: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Bespoke Loom Customizer", "Aso Ebi Estimator", "WhatsApp Commerce"],
    description: "A luxury digital atelier showcasing authentic narrow-loom Yoruba Aso Oke (Alaari, Sanyan, Etu) handwoven by master artisan Jesutofunmi. Features an interactive 3D loom customizer, curated bridal/groom commission lookbooks, bulk Aso Ebi fabric calculator, multi-currency display, and seamless WhatsApp order generation.",
    architecture: [
      "React 19 and Vite 6 architecture styled with modern Tailwind CSS v4 design tokens and editorial layout",
      "Interactive narrow-loom customizer allowing clients to configure warp, weft, metallic accents, and embroidery",
      "Bulk Aso Ebi pricing & yardage calculator with real-time multi-currency conversions (NGN / USD / GBP)",
      "Artisan storytelling module with embedded loom weaving video reels and heritage fabric guides",
      "Automated WhatsApp commission generator formatting selected garments, yardage, and event dates into structured orders"
    ],
    metrics: [
      { label: "Artisan Craft", value: "Authentic Alaari & Sanyan" },
      { label: "Framework", value: "React 19 + Tailwind v4" },
      { label: "Order Flow", value: "Structured WhatsApp Dispatch" }
    ],
    impact: "Connects local and diaspora couples directly with authentic Yoruba handloom weavers with instant commission estimates."
  },

  /* 19. Voice of Revival (VOR) YouTube Studio Automation Pipeline */
  {
    id: "vor-youtube-studio",
    title: "Voice of Revival (VOR) — YouTube Studio Pipeline",
    subtitle: "Autonomous 10-Masterclass Video Engine & YouTube Data API v3 Publisher",
    category: "media-studio",
    categoryLabel: "Multimodal Video & YouTube API",
    featured: true,
    tags: ["Python", "FFmpeg", "YouTube Data API v3", "Whisper", "Kinetic Typography", "Audio Normalization", "OAuth 2.0"],
    description: "A full-scale automated video production and publishing studio for Voice of Revival (VOR). Ingests archival sermons, cleans and aligns audio tracks, mixes ambient worship backgrounds with dynamic ducking, generates kinetic subtitle burn-ins with FFmpeg, and automatically uploads finished 1080p masterclasses and shorts via YouTube Data API v3.",
    architecture: [
      "Automated audio restoration pipeline with background hiss suppression and -14 LUFS loudness mastering",
      "Dynamic audio ducking engine blending speaker sermon tracks with ambient Nigerian worship piano",
      "Word-level kinetic typography subtitle generator burning styled ASS captions directly into video streams",
      "Batch video rendering engine producing 10 full Masterclasses and high-retention vertical Shorts",
      "YouTube Data API v3 automated publishing client with OAuth token refreshing and SEO metadata tagging"
    ],
    metrics: [
      { label: "Masterclasses", value: "10 Full Productions" },
      { label: "Distribution", value: "YouTube Data API v3" },
      { label: "Audio Target", value: "-14 LUFS Broadcast Standard" }
    ],
    impact: "Completely automated sermon catalog curation, video editing, subtitle generation, and scheduled YouTube distribution without manual video timeline editing."
  },

  /* 20. Tales by Fire (Ìjápá) — Generative Folklore Animation Studio */
  {
    id: "ijapa-folklore-studio",
    title: "Tales by Fire (Ìjápá) — Generative Animation Studio",
    subtitle: "Multi-Episode African Folklore Animated Series with Gemini Omni Flash",
    category: "media-studio",
    categoryLabel: "Generative Media & Storytelling",
    featured: false,
    tags: ["Gemini Omni Flash 1.1", "Midjourney / Flux", "Google Flow", "FFmpeg", "Cultural Storytelling", "Python"],
    description: "An end-to-end generative AI animation pipeline creating high-retention episodic African folklore videos centered on Ìjàpá the Tortoise ('The Feast in the Sky', 'The Talking Drum', 'The Drought'). Synchronizes character consistency across scene keyframes, automates video motion generation with Gemini Omni Flash via Google Flow queues, and compiles cinematic soundtracks.",
    architecture: [
      "Multi-stage narrative script & scene storyboard generator adhering to cultural Yoruba folklore arcs",
      "Keyframe character consistency pipeline using stylized image prompting (Midjourney v6.1 & Flux)",
      "Google Flow batch video queue automation powered by Gemini Omni Flash 1.1 (8-second video generations)",
      "FFmpeg audio-visual mastering combining atmospheric African percussions, talking drums, and voiceover",
      "Episode master rendering (1080p widescreen & 9:16 Shorts) ready for automated YouTube broadcast"
    ],
    metrics: [
      { label: "Episodes Mastered", value: "Episode 001 + Shorts" },
      { label: "Video Engine", value: "Gemini Omni Flash 1.1" },
      { label: "Cultural Heritage", value: "Yoruba Folklore Canon" }
    ],
    impact: "Revitalizing classical African oral storytelling through automated multimodal AI character and video generation."
  },

  /* 21. Physics Curriculum & Pedagogical Deck Compiler */
  {
    id: "physics-curriculum-engine",
    title: "Curriculum & Pedagogical Deck Compiler",
    subtitle: "Python-Powered Textbook & Syllabus to PowerPoint / Note Automation",
    category: "saas",
    categoryLabel: "Curriculum Engineering & Pedagogy",
    featured: false,
    tags: ["Python", "python-pptx", "python-docx", "Curriculum Mapping", "Mathematical Pedagogy", "OAU Foundations"],
    description: "A specialized pedagogical automation engine developed by Adebusola (combining his OAU Mathematics Education background with systems engineering). Ingests official educational manuals, aligns national curriculum topics across Weeks 01–10, repairs and normalizes scientific figures, and automatically synthesizes high-density PowerPoint lesson decks, assignment slides, and comprehensive notes.",
    architecture: [
      "Curriculum manual parser extracting learning objectives, instructional concepts, and formula definitions",
      "Scientific diagram repair module regenerating broken vectors and layout constraints",
      "Automated PPTX deck builder generating 15-slide lesson presentations with structured visual hierarchy",
      "Synchronized DOCX comprehensive notes compiler with weekly assignment problem sets",
      "Direct pedagogical alignment verified against West African secondary physics and STEM syllabi"
    ],
    metrics: [
      { label: "Weeks Aligned", value: "Full Term (Weeks 1–10)" },
      { label: "Outputs", value: "PPTX + DOCX + Assignments" },
      { label: "Pedagogic Basis", value: "OAU Mathematics Education" }
    ],
    impact: "Eliminates hundreds of hours of manual lesson preparation for STEM educators while maintaining strict academic accuracy."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Artificial Intelligence & Autonomous Agents",
    icon: "Brain",
    description: "Designing end-to-end vector search, WhatsApp AI agents, LLM orchestration, and deterministic domain reasoning.",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", level: 96, note: "Chunking, vector indexing, context injection" },
      { name: "WhatsApp Autonomous Agents (Baileys + Gemini)", level: 95, note: "Debouncing, state memory, lead capture, /qr dashboard" },
      { name: "Vector Databases (ChromaDB / Pinecone)", level: 92, note: "Cosine distance, HNSW indexing, persistence" },
      { name: "Google Gemini 2.5 / 3.5 Flash SDK", level: 95, note: "@google/genai, structured outputs, streaming" },
      { name: "Speech & Audio (Whisper / Edge-TTS)", level: 90, note: "Transcription, speaker diarization, alignment" }
    ]
  },
  {
    title: "Backend & Systems Engineering",
    icon: "Server",
    description: "Building resilient microservices, low-latency APIs, and native OS integrations.",
    skills: [
      { name: "Python / FastAPI", level: 95, note: "Async routes, Pydantic schemas, streaming SSE" },
      { name: "Node.js / Express / TypeScript", level: 94, note: "REST APIs, WhatsApp Web clients, middleware" },
      { name: "PostgreSQL & SQLite (Sequelize / ORMs)", level: 90, note: "Relational modeling, migrations, indexing" },
      { name: "Docker & Cloud Deployment", level: 88, note: "Multi-stage builds, Render blueprints, Cloud Run, PM2" },
      { name: "Android Native / Kotlin Services", level: 86, note: "Notification listeners, background services" }
    ]
  },
  {
    title: "Frontend, Web Portals & 3D Interactive UI",
    icon: "Layers",
    description: "Crafting fluid, high-conversion web portals, landing pages, and interactive 3D WebGL interfaces.",
    skills: [
      { name: "Next.js 15 & React 19", level: 95, note: "App router, server components, confetti micro-interactions" },
      { name: "TypeScript & Vite", level: 96, note: "Strict typing, generics, schema validation" },
      { name: "Tailwind CSS v4 & Modern Layouts", level: 98, note: "Custom tokens, responsive rhythm, fluid grids" },
      { name: "Three.js / WebGL", level: 88, note: "3D scene graphs, lighting, shaders, geometries" },
      { name: "High-Conversion Landing Pages", level: 95, note: "Funnel design, accessible forms, responsive typography" }
    ]
  },
  {
    title: "Multimodal Media, YouTube Automation & Mobile",
    icon: "Cpu",
    description: "Automating broadcast video rendering, YouTube distribution, Chrome extensions, and cross-platform mobile apps.",
    skills: [
      { name: "YouTube Data API v3 & Publishing", level: 94, note: "Automated batch uploads, OAuth token refresh, SEO metadata" },
      { name: "FFmpeg Mastering & Kinetic Typography", level: 92, note: "Dynamic audio ducking, -14 LUFS normalization, SRT/ASS subtitles" },
      { name: "Chrome Manifest V3 Extensions (FlowPilot)", level: 93, note: "Side Panel API, batch prompt queues, IndexedDB local storage" },
      { name: "Capacitor Android Native Engineering", level: 88, note: "Android Build Tools 36, APK packaging, offline sync queue" },
      { name: "Generative Video (Gemini Omni Flash 1.1)", level: 90, note: "Character consistency, scene prompts, folklore animation" }
    ]
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "2020 – 2023",
    title: "Education & Foundations",
    institution: "Obafemi Awolowo University (OAU)",
    role: "B.Sc. (Ed), Obafemi Awolowo University",
    description: "Built a strong analytical foundation and learned to translate complex ideas into clear, teachable systems."
  },
  {
    year: "2024 – 2025",
    title: "Full-Stack SaaS Architecture & Web Portals",
    institution: "Autonomous Engineering",
    role: "Full-Stack Software Engineer",
    description: "Architected enterprise educational ERP blueprints (School Management System), high-conversion web portals (Estamo Care, Christ the Greatest Foundation, BEnty), offline inventory storekeeper PWAs, and hardware-integrated library desktop kiosks."
  },
  {
    year: "2025 – 2026",
    title: "Production AI Engineering, WhatsApp Autonomous Agents & RAG",
    institution: "AI Systems Engineering",
    role: "Lead AI Systems Architect",
    description: "Engineered Pastor Niyi AI (FastAPI + ChromaDB + Gemini), deployed the 24/7 Estamo Care WhatsApp AI Customer Care & Recruitment Agent with Baileys, built Mavisual's offline-first learning platform, and launched the Next.js 15 TDCL streaming platform."
  }
];
