import { useEffect, useRef, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDatabase,
  FiFolder,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCpu,
  FiCloud,
  FiLayout,
  FiMenu,
  FiX,
  FiTerminal,
  FiArrowRight,
  FiArrowDown,
  FiExternalLink,
  FiStar,
  FiRadio,
  FiCheckCircle,
  FiCode,
} from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import profileImage from "./assets/profile.png";

import geniusosPlatformShot from "./assets/sites/geniusos-platform.png";
import vintageLetterShot from "./assets/sites/vintage-letter-co.png";
import crownHoldemShot from "./assets/sites/crown-holdem.png";
import stingrayPaymentsShot from "./assets/sites/stingray-city-payments.png";
import cryptoxShot from "./assets/sites/cryptox-platform.png";
import theorekaShot from "./assets/sites/theoreka.png";

/* ----------------------------------------------------------------------
   This build is a "level select" scroll experience: six full-viewport
   stages, snapped one at a time, each with its own accent wash. Scroll
   (or use the side rail / arrow keys) to move between stages, the way
   you'd move between levels in a HUD-driven game menu.

   PERF NOTE: scroll position, cursor position, and the typewriter tick
   used to live in React state, which meant every mousemove/scroll frame
   re-rendered the *entire* app tree (nav, all six stages, terminal,
   etc). They now write directly to the DOM through refs, so React only
   re-renders when something structurally meaningful changes (menu open,
   active section, terminal state). Reveal-on-scroll now fires once per
   element instead of toggling in/out on every pass.
   ---------------------------------------------------------------------- */

const STAGES = [
  { id: "home", label: "Home", sheet: "01", accent: "#7dffc4" },
  { id: "about", label: "About", sheet: "02", accent: "#7dffc4" },
  { id: "skills", label: "Skills", sheet: "03", accent: "#5cd4ff" },
  { id: "works", label: "Works", sheet: "04", accent: "#ff5c8a" },
  { id: "reviews", label: "Reviews", sheet: "05", accent: "#ffd166" },
  { id: "socials", label: "Socials", sheet: "06", accent: "#7dffc4" },
];



const HERO_SUBTITLE = "I design and build the systems that keep fast products running.";

const PORTFOLIO_ITEMS = [
  {
    fig: "01",
    url: "https://crypto-trading-platform-puce-two.vercel.app/",
    title: "CryptoX Exchange",
    description:
      "Institutional-grade crypto trading platform with a live market terminal, real-time order books, and secure custody onboarding for fast-moving traders.",
    tech: ["React", "Node.js", "WebSockets", "Trading Engine"],
    screenshot: cryptoxShot,
  },
  {
    fig: "02",
    url: "https://app.theoreka.com/login",
    title: "Theoreka",
    description:
      "Full-stack platform with a secure login and authenticated app experience, built for reliable day-to-day use.",
    tech: ["React", "Node.js", "Auth"],
    screenshot: theorekaShot,
  },
  {
    fig: "03",
    url: "https://geniusos.co/",
    title: "geniusOS Platform",
    description:
      "Complex system architecture and full-stack implementation with scalable delivery and modern UI execution.",
    tech: ["React", "Node.js", "AWS"],
    screenshot: geniusosPlatformShot,
  },
  {
    fig: "04",
    url: "https://vintageletter.co/",
    title: "Vintage Letter Co.",
    description:
      "E-commerce platform with integrated AI chatbot capabilities and a polished content-first shopping experience.",
    tech: ["WordPress", "PHP", "Gutenberg"],
    screenshot: vintageLetterShot,
  },
  {
    fig: "05",
    url: "https://crownholdem.com/",
    title: "Crown Holdem",
    description:
      "High-performance gaming portal with refined layout systems and fast-loading interface patterns.",
    tech: ["PHP", "MySQL", "React"],
    screenshot: crownHoldemShot,
  },
  {
    fig: "06",
    url: "https://stingraycitypayment.com/",
    title: "Stingray City Payments",
    description:
      "Secure payment gateway integration for travel booking with practical API workflows and dependable UX.",
    tech: ["Laravel", "API Integration"],
    screenshot: stingrayPaymentsShot,
  },
];

const SKILLS = [
  {
    tag: "MOD-01",
    name: "Frontend Development",
    icon: <FaReact />,
    tech: "React, React Native, Vue, JavaScript, TypeScript",
    accent: "UI systems, responsive motion, component architecture",
  },
  {
    tag: "MOD-02",
    name: "Backend Architecture",
    icon: <FaNodeJs />,
    tech: "Node.js, PHP, Laravel, Python",
    accent: "APIs, business logic, automation, structured services",
  },
  {
    tag: "MOD-03",
    name: "Cloud & DevOps",
    icon: <FiCloud />,
    tech: "AWS, DigitalOcean, CI/CD",
    accent: "Deployment pipelines, environments, reliability",
  },
  {
    tag: "MOD-04",
    name: "AI Integration",
    icon: <FiCpu />,
    tech: "Ollama, OpenAI API, automation bots",
    accent: "LLM workflows, task automation, smart tooling",
  },
  {
    tag: "MOD-05",
    name: "Database Design",
    icon: <FiDatabase />,
    tech: "MySQL, PostgreSQL, MongoDB",
    accent: "Schema design, querying, performance, data integrity",
  },
  {
    tag: "MOD-06",
    name: "CMS & E-commerce",
    icon: <FaWordpress />,
    tech: "WordPress, Gutenberg, WooCommerce",
    accent: "Conversion-focused builds, editor-friendly delivery",
  },
];

/* Condensed service record — folded into the Dossier stage since the
   brief calls for exactly six stages. Newest first, like a rank ladder. */
const SERVICE_RECORD = [
  { rev: "III", role: "Senior Freelance Engineer", date: "Sep 2024 — Present", company: "Self-Employed" },
  { rev: "II", role: "Full-Stack Developer", date: "Jan 2022 — Aug 2024", company: "Black Spot Studio PH" },
  { rev: "I", role: "Web Developer", date: "Jul 2020 — Feb 2021", company: "Freelance · Manila" },
];

const REVIEWS = [
  {
    title: "Database Connect Wordpress Error Need Fix now",
    text: "France is truly exceptional! He operates at an impressive speed and possesses extensive knowledge of WordPress. I value his communication skills and professionalism so much. I will certainly consider hiring...",
    date: "Sep 12, 2024",
    rating: 5,
    author: "Marvin B.",
    source: "Upwork",
    badges: ["Clear Communicator", "Professional"],
  },
  {
    title: "UI Developer for UI Layout Issue Fix",
    text: "I reached out to France to help with some web development and to fix a few bugs on my site. I was genuinely impressed by the quality and punctuality of his work. He really got what I wanted and delivered brilliantly on the task. I'd definitely collaborate with him again in a heartbeat.",
    date: "Oct 12, 2023",
    rating: 5,
    author: "Lizel N.",
    source: "Upwork",
    badges: ["Committed to Quality", "Reliable", "Collaborative"],
  },
  {
    title: "Wordpress developer needed URGENTLY!",
    text: "Really pleased with the work with France. He developed a 5-page landing page that nicely met our needs. The AI-generated images were of good quality and the overall content and design were well-thought-out. He's a professional and worked efficiently. A solid choice for web design projects.",
    date: "Jan 23, 2024",
    rating: 5,
    author: "Shane",
    source: "Upwork",
    badges: ["Professional", "Committed to Quality"],
  },
  {
    title: "Development of comprehensive Readme",
    text: "Great to work with. Helped us in our work and delivered on time!",
    date: "Apr 5, 2024",
    rating: 5,
    author: "Lee V.",
    source: "Upwork",
    badges: ["Collaborative", "Reliable"],
  },
  {
    title: "Resize RTSP Live Video Camera Feed",
    text: "Great experience! Very responsive!",
    date: "Jun 7, 2024",
    rating: 5,
    author: "Anthony J.",
    source: "Upwork",
    badges: ["Clear Communicator"],
  },
  {
    title: "Custom Programming Services",
    text: "France is an honest and dedicated programmer. He is capable and has shown out-of-the-box thinking and workarounds more than once when we have obstacles. I recommend using his services.",
    date: "Apr 22, 2025",
    rating: 5,
    author: "Mohammed A.",
    source: "Upwork",
    badges: [],
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/myoblivion",
    label: "GitHub",
    detail: "Source & side projects",
    icon: <FiGithub />,
  },
  {
    href: "https://www.upwork.com/freelancers/~018deafe68b8dec6a4",
    label: "Upwork",
    detail: "Hire / see verified work history",
    icon: <AiOutlineLink />,
  },
  {
    href: "https://www.linkedin.com/in/france-lee-0747781b1/",
    label: "LinkedIn",
    detail: "Career & network",
    icon: <FiLinkedin />,
  },
];

const CONTACT_CHANNELS = [
  { href: "mailto:francelee594@gmail.com", label: "francelee594@gmail.com", icon: <FiMail /> },
  { href: "tel:+639154279838", label: "+63 915 427 9838", icon: <FiPhone /> },
];

const TICKER_ITEMS = [
  "STATUS: ONLINE",
  "FULL-STACK",
  "REACT",
  "NODE.JS",
  "AWS",
  "LARAVEL",
  "AI INTEGRATION",
  "OPEN TO WORK",
  "CAVITE, PH",
];

/* ----------------------------------------------------------------------
   Terminal content — derived from the same data used elsewhere on the
   site, so it never drifts out of sync with the rest of the page.
   ---------------------------------------------------------------------- */

const pad = (str, len) => (str.length >= len ? str : str + " ".repeat(len - str.length));

const HELP_LINES = [
  "available commands",
  `  ${pad("help", 12)}this list`,
  `  ${pad("whoami", 12)}about the developer`,
  `  ${pad("contact", 12)}email + phone + location`,
  `  ${pad("skills", 12)}what i work with`,
  `  ${pad("projects", 12)}live builds + links`,
  `  ${pad("experience", 12)}work history`,
  `  ${pad("socials", 12)}where to find me`,
  `  ${pad("joke", 12)}dev humor, mostly harmless`,
  `  ${pad("clear", 12)}wipe the screen`,
  `  ${pad("exit", 12)}close the terminal`,
];

const WHOAMI_LINES = [
  "France Lee — Senior Full-Stack Developer",
  "Based in Cavite, Philippines",
  "5+ years shipping web & mobile platforms, cloud infrastructure, and AI-assisted tooling",
  "Status: open to work",
];

const CONTACT_LINES = [
  `${pad("email", 10)}${CONTACT_CHANNELS[0].label}`,
  `${pad("phone", 10)}${CONTACT_CHANNELS[1].label}`,
  `${pad("location", 10)}Cavite, Philippines`,
];

const SKILLS_LINES = SKILLS.map((s) => `${pad(s.name, 26)}${s.tech}`);

const PROJECTS_LINES = PORTFOLIO_ITEMS.map(
  (p) => `${p.title} — ${p.url && p.url !== "#" ? p.url : "link coming soon"}`
);

const EXPERIENCE_LINES = SERVICE_RECORD.map(
  (e) => `${pad(e.date, 22)}${e.role} @ ${e.company}`
);

const SOCIALS_LINES = SOCIAL_LINKS.map((s) => `${pad(s.label, 10)}${s.href}`);

const JOKES = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "I'd tell you a UDP joke, but you might not get it.",
  "There are only 10 kinds of people: those who understand binary, and those who don't.",
  "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 127 little bugs in the code.",
];

function CountUp({ value, duration = 1200 }) {
  const [display, setDisplay] = useState(0);
  const spanRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={spanRef}>{display}</span>;
}

function useTiltHandlers(maxTilt = 8) {
  const onMouseMove = (event) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height - 0.5) * -maxTilt).toFixed(2);
    const rotateY = ((x / rect.width - 0.5) * maxTilt).toFixed(2);
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
  };
  const onMouseLeave = (event) => {
    event.currentTarget.style.transform = "";
  };
  return { onMouseMove, onMouseLeave };
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [booted, setBooted] = useState(false);
  const [flashLabel, setFlashLabel] = useState(null);
  const [flashKey, setFlashKey] = useState(0);

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [terminalInput, setTerminalInput] = useState("");

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const canvasRef = useRef(null);
  const prevSectionRef = useRef("home");
  const flashTimeoutRef = useRef(null);
  const terminalInputRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const tilt = useTiltHandlers();

  // Scroll/cursor/typewriter-driven visuals write straight to the DOM
  // through these refs instead of React state, so they never trigger a
  // full app re-render (the biggest single perf win over the previous
  // build, since those fired on every scroll/mousemove frame).
  const navShellRef = useRef(null);
  const progressBarRef = useRef(null);
  const pinnedPhotoRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const typewriterRef = useRef(null);

  const activeIndex = Math.max(0, STAGES.findIndex((item) => item.id === activeSection));
  const activeStage = STAGES[activeIndex];
  const railFillPercent = (activeIndex / (STAGES.length - 1)) * 100;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

const goToStage = (id) => {
  setActiveSection(id);
  closeMenu();
  // Don't wait for the isMenuOpen effect to clear this — scrollIntoView
  // needs the body scrollable *now*, in this same tick.
  document.body.style.overflow = "";
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

  const goRelative = (delta) => {
    const nextIndex = Math.min(STAGES.length - 1, Math.max(0, activeIndex + delta));
    goToStage(STAGES[nextIndex].id);
  };

  /* Boot-up sequence */
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 900);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter on the hero subtitle — writes directly to the span via
     ref so it doesn't re-render the whole app once per character. */
  useEffect(() => {
    if (!booted) return undefined;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (typewriterRef.current) {
        typewriterRef.current.textContent = HERO_SUBTITLE.slice(0, i);
      }
      if (i >= HERO_SUBTITLE.length) clearInterval(interval);
    }, 22);
    return () => clearInterval(interval);
  }, [booted]);

  /* "Stage cleared" banner on every section change */
  useEffect(() => {
    if (prevSectionRef.current === activeSection) return;
    prevSectionRef.current = activeSection;
    const item = STAGES.find((nav) => nav.id === activeSection);
    if (!item) return;

    setFlashLabel(`${item.sheet} — ${item.label.toUpperCase()}`);
    setFlashKey((k) => k + 1);

    if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    flashTimeoutRef.current = setTimeout(() => setFlashLabel(null), 1500);
    return undefined;
  }, [activeSection]);

  useEffect(() => {
    return () => {
      if (flashTimeoutRef.current) clearTimeout(flashTimeoutRef.current);
    };
  }, []);

  /* Cursor glow reticle — position/opacity are written directly to the
     element via ref (rAF-throttled) instead of React state, so moving
     the mouse never re-renders the app. */
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    let rafId = 0;
    let pending = null;
    let revealed = false;

    const apply = () => {
      rafId = 0;
      const el = cursorGlowRef.current;
      if (!el || !pending) return;
      el.style.transform = `translate(${pending.x}px, ${pending.y}px)`;
      if (!revealed) {
        revealed = true;
        el.style.opacity = "1";
      }
    };

    const onMove = (event) => {
      pending = { x: event.clientX, y: event.clientY };
      if (!rafId) rafId = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* Ambient starfield */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let rafId;
    let isHidden = document.hidden;

    // PERF: fewer particles than the original build, and the canvas no
    // longer relies on mix-blend-mode (see CSS) which forced the
    // compositor to re-blend this layer against everything beneath it.
    const PARTICLE_COUNT = 42;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      a: Math.random() * 0.5 + 0.15,
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onVisibility = () => {
      isHidden = document.hidden;
    };
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    const draw = () => {
      // PERF: skip all canvas work while the tab is backgrounded.
      if (isHidden) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.globalAlpha = p.a;
        ctx.fillStyle = activeStage?.accent || "#7dffc4";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Scroll-driven visuals: progress bar fill, nav background, and the
     hero photo's parallax offset. All three write straight to the DOM
     via refs (rAF-throttled) instead of React state, avoiding a full
     app re-render on every scroll frame. */
  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const y = window.scrollY;
      const progress = max > 0 ? Math.min(1, y / max) : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
      if (navShellRef.current) {
        navShellRef.current.classList.toggle("scrolled", y > 24);
      }
      if (pinnedPhotoRef.current) {
        pinnedPhotoRef.current.style.transform = `translateY(${y * 0.06}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Keyboard "level" navigation — arrow / page keys move one stage,
     matching the one-section-per-scroll feel for keyboard users. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (isMenuOpen || terminalOpen) return;
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (["ArrowDown", "PageDown"].includes(event.key)) {
        event.preventDefault();
        goRelative(1);
      } else if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goRelative(-1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isMenuOpen, terminalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 860) closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* Active-stage tracking via IntersectionObserver */
  useEffect(() => {
    const sections = STAGES.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Reveal-on-scroll — ONE TIME ONLY: once an element has played its
     entrance animation it keeps the "is-visible" class and is
     unobserved, so scrolling back up/down past it never re-triggers
     the animation (and the observer has fewer targets to track over
     time, which is cheaper). */
  useEffect(() => {
    const revealTargets = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  /* Global "/" shortcut to open the terminal, Escape to close it —
     mirrors the shortcut hint shown on the trigger button. */
  useEffect(() => {
    const onKeyDown = (event) => {
      const tag = document.activeElement?.tagName;
      if (event.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        event.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (event.key === "Escape" && terminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [terminalOpen]);

  /* Focus the terminal input whenever the panel opens */
  useEffect(() => {
    if (terminalOpen && terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [terminalOpen]);

  /* Keep the terminal scrolled to the newest line */
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory, terminalOpen]);

  /* Load the Calendly embed script once, for the inline booking widget
     in the Socials section. Works fully on the free Calendly plan. */
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return undefined;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Left in place intentionally — Calendly's script is safe to persist
      // across re-renders and avoids re-fetching on remount.
    };
  }, []);

  const runTerminalCommand = (raw) => {
    const cmd = raw.trim();
    if (!cmd) {
      setTerminalHistory((h) => [...h, { type: "input", lines: [""] }]);
      return;
    }

    const key = cmd.split(/\s+/)[0].toLowerCase();
    let output = null;

    switch (key) {
      case "help":
        output = HELP_LINES;
        break;
      case "whoami":
        output = WHOAMI_LINES;
        break;
      case "contact":
        output = CONTACT_LINES;
        break;
      case "skills":
        output = SKILLS_LINES;
        break;
      case "projects":
        output = PROJECTS_LINES;
        break;
      case "experience":
        output = EXPERIENCE_LINES;
        break;
      case "socials":
        output = SOCIALS_LINES;
        break;
      case "joke":
        output = [JOKES[Math.floor(Math.random() * JOKES.length)]];
        break;
      case "clear":
        setTerminalHistory([]);
        return;
      case "exit":
        output = ["closing terminal..."];
        setTimeout(() => setTerminalOpen(false), 350);
        break;
      default:
        output = [`command not found: ${key}`, "type 'help' to see available commands."];
        break;
    }

    setTerminalHistory((h) => [
      ...h,
      { type: "input", lines: [cmd] },
      { type: "output", lines: output },
    ]);
  };

  const handleTerminalSubmit = (event) => {
    event.preventDefault();
    runTerminalCommand(terminalInput);
    setTerminalInput("");
  };

  return (
    <div className="app" style={{ "--stage-accent": activeStage?.accent || "#7dffc4" }}>
      {/* Boot-up HUD overlay */}
      <div className={`fx-loader ${booted ? "is-booted" : ""}`} aria-hidden="true">
        <div className="fx-loader-inner">
          <span className="fx-loader-bracket">[</span>
          <span className="fx-loader-text">INITIALIZING PROFILE</span>
          <span className="fx-loader-bracket">]</span>
          <div className="fx-loader-bar">
            <span className="fx-loader-bar-fill" />
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className="fx-starfield" aria-hidden="true" />

      <div
        ref={cursorGlowRef}
        className="fx-cursor-glow"
        aria-hidden="true"
        style={{ transform: "translate(-200px, -200px)", opacity: 0 }}
      />

      {flashLabel && (
        <div className="fx-levelup" key={flashKey} aria-hidden="true">
          <span className="fx-levelup-line" />
          <span className="fx-levelup-text">{flashLabel}</span>
          <span className="fx-levelup-line" />
        </div>
      )}

      <div ref={progressBarRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />

      <div className="grain" aria-hidden="true" />

      <span className="hud-corner hc-tl" aria-hidden="true" />
      <span className="hud-corner hc-tr" aria-hidden="true" />
      <span className="hud-corner hc-bl" aria-hidden="true" />
      <span className="hud-corner hc-br" aria-hidden="true" />

      {/* Side level-select rail */}
      <div className="fx-side-rail" aria-hidden="true">
        <span className="fx-rail-line">
          <span className="fx-rail-line-fill" style={{ height: `${railFillPercent}%` }} />
        </span>
        {STAGES.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`fx-rail-dot ${activeSection === item.id ? "active" : ""} ${
              idx < activeIndex ? "cleared" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              goToStage(item.id);
            }}
          >
            <span className="fx-rail-num">{item.sheet}</span>
            <span className="fx-rail-tip">{item.label}</span>
          </a>
        ))}
      </div>

      {/* Terminal trigger — bottom-left, opens the interactive panel */}
      <button
        type="button"
        className={`term-trigger ${terminalOpen ? "is-active" : ""}`}
        onClick={() => setTerminalOpen((prev) => !prev)}
        aria-label="Open interactive terminal"
        aria-expanded={terminalOpen}
      >
        <span className="term-trigger-dot" aria-hidden="true" />
        <FiTerminal />
        <span className="term-trigger-label">~ open terminal</span>
        <kbd className="term-trigger-key">/</kbd>
      </button>

      {terminalOpen && (
        <div className="term-window" role="dialog" aria-label="Interactive terminal">
          <div className="term-titlebar">
            <div className="term-dots" aria-hidden="true">
              <span className="term-dot dot-red" />
              <span className="term-dot dot-amber" />
              <span className="term-dot dot-green" />
            </div>
            <span className="term-title">france@portfolio: ~</span>
            <button
              type="button"
              className="term-close"
              onClick={() => setTerminalOpen(false)}
              aria-label="Close terminal"
            >
              <FiX />
            </button>
          </div>

          <div className="term-body" ref={terminalBodyRef}>
            <div className="term-line term-banner">FRANCE LEE shell v1.0 (web edition)</div>
            <div className="term-line term-dim">type 'help' to see what i can do.</div>

            {terminalHistory.map((entry, i) => (
              <div className={`term-block term-${entry.type}`} key={i}>
                {entry.lines.map((line, j) =>
                  entry.type === "input" ? (
                    <div className="term-line" key={j}>
                      <span className="term-prompt">france@portfolio:~$</span> {line}
                    </div>
                  ) : (
                    <div className="term-line term-output-line" key={j}>
                      {line}
                    </div>
                  )
                )}
              </div>
            ))}

            <form className="term-input-row" onSubmit={handleTerminalSubmit}>
              <span className="term-prompt">france@portfolio:~$</span>
              <input
                ref={terminalInputRef}
                className="term-input"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="Terminal command input"
              />
            </form>
          </div>
        </div>
      )}

      <nav ref={navShellRef} className="nav-shell">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goToStage("home");
          }}
          aria-label="Go to home"
        >
          <span className="brand-box">FL</span>
          <span className="brand-text">
            France Lee
            <span className="brand-status">
              <span className="status-dot" />
              Online · Open to work
            </span>
          </span>
        </a>

        <button
          ref={hamburgerRef}
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul ref={menuRef} id="site-navigation" className={`menu-items ${isMenuOpen ? "active" : ""}`}>
          {STAGES.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  goToStage(item.id);
                }}
                className={activeSection === item.id ? "active" : ""}
              >
                <span className="tab-num">{item.sheet}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`menu-backdrop ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />

      <main>
        {/* ================= STAGE 01 — HELLO ================= */}
        <section id="home" className="stage stage-hero" data-stage-accent={STAGES[0].accent}>
          <div className="stage-inner hero-inner">
            <div className="hero-copy fx-anim fx-anim-up" data-reveal>
              <div className="eyebrow">
                <FiTerminal />
                Operator Profile <span className="status-dot" /> Available for deployment
              </div>

              <p className="hero-wave">
                <span className="wave-emoji">👋</span> Hello there.
              </p>

              <h1 className="hero-title fx-glitch" data-text="FRANCE LEE">
                FRANCE LEE
              </h1>

              <h2 className="fx-typewriter" aria-label={HERO_SUBTITLE}>
                <span ref={typewriterRef} aria-hidden="true" />
                <span className="fx-caret" aria-hidden="true" />
              </h2>

              <p className="hero-description">
                Full-stack engineer with 5+ years shipping web and mobile platforms, cloud
                infrastructure, and AI-assisted tooling — from clean interfaces down to the APIs and
                databases underneath them.
              </p>

              <div className="hero-actions">
                <a
                  href="#works"
                  className="cta primary"
                  onClick={(e) => {
                    e.preventDefault();
                    goToStage("works");
                  }}
                >
                  View my work
                  <FiArrowRight />
                </a>
                <a
                  href="#socials"
                  className="cta secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    goToStage("socials");
                  }}
                >
                  <FiRadio />
                  Contact
                </a>
              </div>
            </div>

            <div className="hero-visual fx-anim fx-anim-right" data-reveal>
              <div ref={pinnedPhotoRef} className="pinned-photo">
                <img src={profileImage} alt="France Lee" className="portrait-image" />
                <span className="rank-ring" aria-hidden="true">
                  <span className="rank-ring-track" />
                  <span className="rank-label">5+ YRS</span>
                </span>
              </div>
              <div className="visual-tags">
                <span className="tech-pill">React</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">Laravel</span>
              </div>
            </div>
          </div>

          <div className="status-strip">
            <div className="ss-field">
              <span className="ss-label">Callsign</span>
              <span className="ss-value">France Lee</span>
            </div>
            <div className="ss-field">
              <span className="ss-label">Class</span>
              <span className="ss-value">Full-Stack / Cloud</span>
            </div>
            <div className="ss-field">
              <span className="ss-label">Base</span>
              <span className="ss-value">Cavite, PH</span>
            </div>
            <div className="ss-field">
              <span className="ss-label">Status</span>
              <span className="ss-value">Open to work</span>
            </div>
            <div className="ss-field ss-stage">
              <span className="ss-label">Section</span>
              <span className="ss-value">{String(activeIndex + 1).padStart(2, "0")} / 06</span>
            </div>
          </div>

          <button className="scroll-hint" onClick={() => goRelative(1)} aria-label="Scroll to next stage">
            <span>Scroll</span>
            <FiArrowDown />
          </button>
        </section>

        {/* ================= STAGE 02 — DOSSIER (ABOUT) ================= */}
        <section id="about" className="stage stage-padded" data-stage-accent={STAGES[1].accent}>
          <div className="stage-inner">
            <div className="section-header fx-anim fx-anim-stage" data-reveal data-ghost="02">
              <span className="stage-tag">STAGE 02</span>
              <h2>About me</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy panel fx-anim fx-anim-left" data-reveal>
                <p>
                  I&apos;m a senior full-stack developer with over 5 years of experience engineering
                  complex web applications, mobile platforms, and automated software solutions.
                </p>
                <p>
                  My work spans modern JavaScript frameworks, PHP/Laravel ecosystems, and wiring AI
                  tools like Ollama and Python scripts into production environments — whether
                  that&apos;s a polished Gutenberg theme or a high-availability Telegram bot running on
                  DigitalOcean. Clean, scalable, maintainable code is the standard I hold every build to.
                </p>

                <div className="rev-log rev-log-compact">
                  {SERVICE_RECORD.map((item) => (
                    <div className="rev-row" key={item.role}>
                      <div className="rev-letter">{item.rev}</div>
                      <div className="rev-body">
                        <div className="rev-header">
                          <h4>{item.role}</h4>
                          <span className="date">{item.date}</span>
                        </div>
                        <span className="company">{item.company}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-sidebar fx-anim fx-anim-right" data-reveal>
                <div className="file-card panel" {...tilt}>
                  <div className="file-title">
                    <FiLayout /> Operative File
                  </div>
                  <ul className="file-list">
                    <li>
                      <span className="label">Location</span>
                      <span>Cavite, Philippines</span>
                    </li>
                    <li>
                      <span className="label">Status</span>
                      <span>Open to Opportunities</span>
                    </li>
                    <li>
                      <span className="label">Email</span>
                      <span>francelee594@gmail.com</span>
                    </li>
                    <li>
                      <span className="label">Focus</span>
                      <span>Full-Stack / Cloud / AI</span>
                    </li>
                  </ul>
                </div>

                <div className="mini-grid">
                  <div className="mini-card panel" {...tilt}>
                    <FiCode />
                    <strong>Developer-first</strong>
                    <span>Readable, scalable code</span>
                  </div>
                  <div className="mini-card panel" {...tilt}>
                    <FiBriefcase />
                    <strong>Delivery-minded</strong>
                    <span>Ships on schedule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STAGE 03 — LOADOUT (SKILLS) ================= */}
        <section id="skills" className="stage stage-padded" data-stage-accent={STAGES[2].accent}>
          <div className="stage-inner">
            <div className="section-header fx-anim fx-anim-stage" data-reveal data-ghost="03">
              <span className="stage-tag">STAGE 03</span>
              <h2>Skills</h2>
            </div>

            <div className="ticker" aria-hidden="true">
              <div className="ticker-track">
                {[0, 1].map((rep) => (
                  <div className="ticker-set" key={rep}>
                    {TICKER_ITEMS.map((label) => (
                      <span className="ticker-item" key={`${rep}-${label}`}>
                        {label}
                        <span className="dot">•</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-grid">
              {SKILLS.map((skill, index) => (
                <article
                  className="skill-card panel fx-anim fx-anim-scale"
                  key={skill.name}
                  data-reveal
                  style={{ "--stagger": index }}
                  {...tilt}
                >
                  <div className="skill-top">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="mod-tag">{skill.tag}</span>
                  </div>
                  <h3>{skill.name}</h3>
                  <p className="skill-tech">{skill.tech}</p>
                  <p className="skill-accent">{skill.accent}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STAGE 04 — MISSIONS (WORKS) ================= */}
        <section id="works" className="stage stage-padded" data-stage-accent={STAGES[3].accent}>
          <div className="stage-inner">
            <div className="section-header fx-anim fx-anim-stage" data-reveal data-ghost="04">
              <span className="stage-tag">STAGE 04</span>
              <h2>Works</h2>
            </div>

            <div className="portfolio-grid">
              {PORTFOLIO_ITEMS.map((item, index) => {
                const isLink = item.url && item.url !== "#";
                const hasPreview = Boolean(item.screenshot);

                return (
                  <a
                    key={item.title}
                    href={isLink ? item.url : undefined}
                    target={isLink ? "_blank" : undefined}
                    rel={isLink ? "noreferrer noopener" : undefined}
                    className={`project-card panel fx-anim fx-anim-flip ${
                      hasPreview ? "has-preview" : "no-preview"
                    } ${isLink ? "" : "static"}`}
                    data-reveal
                    style={{ "--stagger": index % 3 }}
                    {...tilt}
                  >
                    <span className="mission-tag">Project {item.fig}</span>

                    {hasPreview ? (
                      <div className="project-preview" aria-hidden="true">
                        <img
                          src={item.screenshot}
                          alt=""
                          className="project-preview-image"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="project-preview-overlay" />
                      </div>
                    ) : null}

                    <div className="project-content">
                      <div className="card-top">
                        <div className="card-badge">
                          <FiFolder />
                          <span>Deployed</span>
                        </div>
                        <div className="card-link">{isLink ? <FiExternalLink /> : <FiCode />}</div>
                      </div>

                      <h3>{item.title}</h3>
                      <p>{item.description}</p>

                      <div className="tech-stack">
                        {item.tech.map((tech) => (
                          <span key={tech} className="tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-footer">
                        <span>Visit site</span>
                        <FiArrowRight />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= STAGE 05 — INTEL (REVIEWS) ================= */}
        <section id="reviews" className="stage stage-padded" data-stage-accent={STAGES[4].accent}>
          <div className="stage-inner">
            <div className="section-header fx-anim fx-anim-stage" data-reveal data-ghost="05">
              <span className="stage-tag">STAGE 05</span>
              <h2>Reviews</h2>
            </div>

            <div className="reviews-grid">
              {REVIEWS.map((review, index) => (
                <div
                  className="review-card panel fx-anim fx-anim-up"
                  key={review.title + index}
                  data-reveal
                  style={{ "--stagger": index % 3 }}
                  {...tilt}
                >
                  <div className="review-header">
                    <div className="review-stars">
                      {[...Array(review.rating)].map((_, idx) => (
                        <FiStar key={idx} className="star-icon" fill="currentColor" />
                      ))}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>

                  <h3 className="review-title">{review.title}</h3>
                  <p className="review-text">&ldquo;{review.text}&rdquo;</p>

                  <div className="review-author-row">
                    <span className="review-author">{review.author}</span>
                    <span className="review-source">via {review.source}</span>
                  </div>

                  {review.badges.length > 0 && (
                    <div className="review-badges">
                      {review.badges.map((badge) => (
                        <span key={badge} className="review-badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STAGE 06 — COMMS (SOCIALS) ================= */}
        <section id="socials" className="stage stage-padded stage-socials" data-stage-accent={STAGES[5].accent}>
          <div className="stage-inner">
            <div className="section-header fx-anim fx-anim-stage" data-reveal data-ghost="06">
              <span className="stage-tag">STAGE 06</span>
              <h2>Socials</h2>
            </div>

            <div className="socials-intro fx-anim fx-anim-up" data-reveal>
              <span className="clearance-stamp">
                <FiCheckCircle /> Available for new work
              </span>
              <h3>Let&apos;s build something reliable together.</h3>
              <p>
                Open for new opportunities, freelance projects, and collaborations where design
                quality and technical execution both matter. Pick a channel below.
              </p>
            </div>

            <div className="socials-grid">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-card panel fx-anim fx-anim-scale"
                  data-reveal
                  style={{ "--stagger": index }}
                  {...tilt}
                >
                  <span className="social-card-icon">{link.icon}</span>
                  <span className="social-card-label">{link.label}</span>
                  <span className="social-card-detail">{link.detail}</span>
                  <span className="social-card-go">
                    Connect <FiArrowRight />
                  </span>
                </a>
              ))}
            </div>

            <div className="calendly-panel panel fx-anim fx-anim-up" data-reveal>
              <div className="calendly-panel-header">
                <FiTerminal />
                <div>
                  <h3>Book a call</h3>
                  <p>Pick a time that works for you, no back-and-forth needed.</p>
                </div>
              </div>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/francelee594/30min?hide_gdpr_banner=1"
              />
            </div>

            <div className="contact-channels fx-anim fx-anim-up" data-reveal>
              {CONTACT_CHANNELS.map((c) => (
                <a key={c.label} href={c.href} className="contact-channel">
                  {c.icon}
                  <span>{c.label}</span>
                </a>
              ))}
              <div className="contact-channel is-static">
                <FiMapPin />
                <span>Cavite, Philippines</span>
              </div>
            </div>

            <footer className="footer-inline">
              <div className="brand brand-footer">
                <span className="brand-box">FL</span>
                <span className="brand-text">France Lee</span>
              </div>
              <p className="copyright">© {new Date().getFullYear()} France Lee. All rights reserved.</p>
            </footer>
          </div>
        </section>
      </main>

      <style>{`
        :root {
          --bg: #05070a;
          --bg-soft: #0a0e14;
          --mint: #7dffc4;
          --blue: #5cd4ff;
          --pink: #ff5c8a;
          --amber: #ffd166;
          --ink: #e8f6ee;
          --ink-dim: rgba(232, 246, 238, 0.62);
          --border: rgba(125, 255, 196, 0.22);
        }

        * { box-sizing: border-box; }

        html {
          background: var(--bg);
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: "Space Grotesk", "Inter", system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4 { margin: 0; font-family: "Space Grotesk", "Inter", sans-serif; letter-spacing: -0.01em; }
        p { margin: 0; line-height: 1.6; color: var(--ink-dim); }
        a { color: inherit; text-decoration: none; }
        ul { margin: 0; padding: 0; list-style: none; }
        button { font-family: inherit; cursor: pointer; }

        .app { position: relative; background: var(--bg); overflow-x: hidden; }

        .panel {
          background: linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.01));
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 26px;
          backdrop-filter: blur(4px);
        }

        .stage-tag {
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--stage-accent, var(--mint));
        }
        .section-header { display: flex; flex-direction: column; gap: 6px; margin-bottom: 34px; }
        .section-header h2 { font-size: clamp(28px, 4vw, 44px); }

        /* ---- Snap stages ---- */
        .stage {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .stage-padded { padding: 120px 6vw 60px; align-items: flex-start; }
        .stage-inner { width: 100%; max-width: 1200px; margin: 0 auto; }

        /* Per-stage tint wash, transitions as you scroll between them */
        .stage::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(circle at 15% 15%, color-mix(in srgb, var(--stage-accent, #7dffc4) 10%, transparent), transparent 55%);
          pointer-events: none;
        }

        /* ---- HUD chrome (loader / starfield / cursor / flash / grain) ---- */
        /* PERF: dropped mix-blend-mode — a fixed full-viewport blended
           canvas forces the compositor to re-blend against everything
           beneath it on every paint even when its own pixels haven't
           changed much. A flat, lower-opacity layer looks almost
           identical for a fraction of the compositing cost. */
        .fx-starfield { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.35; }

        .fx-loader {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          background: var(--bg);
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        .fx-loader.is-booted { opacity: 0; visibility: hidden; pointer-events: none; }
        .fx-loader-inner { display: flex; flex-direction: column; align-items: center; gap: 14px; letter-spacing: 0.35em; color: var(--mint); }
        .fx-loader-text { font-size: 13px; animation: fx-flicker 1.2s infinite; }
        .fx-loader-bracket { font-size: 18px; opacity: 0.6; }
        .fx-loader-bar { width: 180px; height: 3px; background: rgba(125,255,196,0.15); overflow: hidden; }
        .fx-loader-bar-fill { display: block; height: 100%; width: 40%; background: var(--mint); animation: fx-loader-scan 0.9s ease-in-out infinite; }
        @keyframes fx-loader-scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(350%); } }
        @keyframes fx-flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

        .fx-cursor-glow {
          position: fixed; top: 0; left: 0; width: 260px; height: 260px;
          margin-left: -130px; margin-top: -130px; border-radius: 50%;
          background: radial-gradient(circle, rgba(125,255,196,0.08) 0%, rgba(125,255,196,0) 70%);
          pointer-events: none; z-index: 5; transition: transform 0.08s linear, opacity 0.25s ease;
          will-change: transform;
        }

        .fx-levelup {
          position: fixed; top: 90px; left: 50%; transform: translate(-50%, -12px); z-index: 60;
          display: flex; align-items: center; gap: 14px; pointer-events: none;
          opacity: 0; animation: fx-levelup-pop 1.5s ease forwards;
        }
        .fx-levelup-line { width: 40px; height: 1px; background: rgba(125,255,196,0.6); }
        .fx-levelup-text { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--mint); white-space: nowrap; text-shadow: 0 0 12px rgba(125,255,196,0.5); }
        @keyframes fx-levelup-pop {
          0% { opacity: 0; transform: translate(-50%, -12px); }
          12% { opacity: 1; transform: translate(-50%, 0); }
          85% { opacity: 1; transform: translate(-50%, 0); }
          100% { opacity: 0; transform: translate(-50%, -8px); }
        }

        .scroll-progress { position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: var(--mint); transform-origin: left; z-index: 70; will-change: transform; }
        .grain { position: fixed; inset: 0; z-index: 1; pointer-events: none; opacity: 0.03; background-image: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 3px 3px; }

        .hud-corner { position: fixed; width: 26px; height: 26px; border: 1px solid rgba(125,255,196,0.35); z-index: 45; pointer-events: none; }
        .hc-tl { top: 14px; left: 14px; border-right: none; border-bottom: none; }
        .hc-tr { top: 14px; right: 14px; border-left: none; border-bottom: none; }
        .hc-bl { bottom: 14px; left: 14px; border-right: none; border-top: none; }
        .hc-br { bottom: 14px; right: 14px; border-left: none; border-top: none; }

        /* ---- Side rail ---- */
        .fx-side-rail { position: fixed; right: 26px; top: 50%; transform: translateY(-50%); z-index: 40; display: flex; flex-direction: column; align-items: center; gap: 26px; }
        @media (max-width: 860px) { .fx-side-rail { display: none; } }
        .fx-rail-line { position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; transform: translateX(-50%); background: rgba(125,255,196,0.15); }
        .fx-rail-line-fill { position: absolute; top: 0; left: 0; width: 100%; background: linear-gradient(180deg, var(--mint), rgba(125,255,196,0.4)); transition: height 0.4s ease; }
        .fx-rail-dot { position: relative; z-index: 1; width: 10px; height: 10px; border-radius: 50%; border: 1px solid rgba(125,255,196,0.4); background: var(--bg); display: flex; align-items: center; justify-content: center; transition: all 0.25s ease; }
        .fx-rail-dot.cleared { background: rgba(125,255,196,0.35); border-color: rgba(125,255,196,0.6); }
        .fx-rail-dot.active { background: var(--mint); box-shadow: 0 0 10px 2px rgba(125,255,196,0.6); transform: scale(1.3); }
        .fx-rail-tip {
          position: absolute; right: 20px; top: 50%; transform: translateY(-50%); white-space: nowrap;
          font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--mint);
          background: rgba(5,7,10,0.85); padding: 4px 8px; border: 1px solid rgba(125,255,196,0.25);
          opacity: 0; pointer-events: none; transition: opacity 0.2s ease;
        }
        .fx-rail-dot:hover .fx-rail-tip { opacity: 1; }

        /* ---- Terminal trigger + window ---- */
        .term-trigger {
          position: fixed; bottom: 24px; left: 24px; z-index: 55;
          display: flex; align-items: center; gap: 9px;
          background: rgba(10,14,20,0.9); border: 1px solid var(--border); border-radius: 999px;
          padding: 10px 16px; color: var(--ink); font-size: 12px; letter-spacing: 0.05em;
          backdrop-filter: blur(8px); transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .term-trigger:hover, .term-trigger.is-active { border-color: var(--mint); box-shadow: 0 0 20px rgba(125,255,196,0.18); transform: translateY(-2px); }
        .term-trigger svg { font-size: 15px; color: var(--mint); }
        .term-trigger-label { text-transform: lowercase; }
        .term-trigger-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--mint); box-shadow: 0 0 6px var(--mint); }
        .term-trigger-key {
          font-family: "Space Grotesk", monospace; font-size: 11px; color: var(--ink-dim);
          border: 1px solid var(--border); border-radius: 5px; padding: 1px 7px; margin-left: 2px;
        }
        @media (max-width: 640px) {
          .term-trigger-label { display: none; }
          .term-trigger { padding: 10px 12px; }
        }

        .term-window {
          position: fixed; bottom: 84px; left: 24px; z-index: 90;
          width: min(460px, calc(100vw - 40px)); height: min(440px, 70vh);
          display: flex; flex-direction: column; overflow: hidden;
          background: #0a0d11; border: 1px solid rgba(125,255,196,0.3); border-radius: 14px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 40px rgba(125,255,196,0.08);
          font-family: "Fira Code", "IBM Plex Mono", ui-monospace, Menlo, Consolas, monospace;
          animation: term-pop 0.22s cubic-bezier(0.16,0.84,0.44,1);
        }
        @keyframes term-pop { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .term-titlebar {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px;
          background: rgba(255,255,255,0.03); border-bottom: 1px solid rgba(125,255,196,0.15);
        }
        .term-dots { display: flex; gap: 7px; }
        .term-dot { width: 11px; height: 11px; border-radius: 50%; display: block; }
        .dot-red { background: #ff5f56; }
        .dot-amber { background: #ffbd2e; }
        .dot-green { background: #27c93f; }
        .term-title { flex: 1; text-align: center; font-size: 11.5px; color: var(--ink-dim); letter-spacing: 0.04em; }
        .term-close { background: none; border: none; color: var(--ink-dim); display: flex; align-items: center; font-size: 14px; padding: 2px; }
        .term-close:hover { color: var(--pink); }

        .term-body {
          flex: 1; overflow-y: auto; padding: 14px 16px 12px;
          font-size: 12.5px; line-height: 1.65; color: var(--ink);
        }
        .term-body::-webkit-scrollbar { width: 8px; }
        .term-body::-webkit-scrollbar-thumb { background: rgba(125,255,196,0.25); border-radius: 4px; }

        .term-line { white-space: pre-wrap; word-break: break-word; }
        .term-banner { color: var(--mint); font-weight: 600; }
        .term-dim { color: var(--ink-dim); margin-bottom: 8px; }
        .term-block { margin-bottom: 2px; }
        .term-block.term-output { margin-bottom: 10px; }
        .term-output-line { color: rgba(232,246,238,0.85); }
        .term-prompt { color: var(--mint); font-weight: 600; }

        .term-input-row { display: flex; align-items: center; gap: 8px; margin-top: 4px; }
        .term-input {
          flex: 1; background: none; border: none; outline: none; color: var(--ink);
          font-family: inherit; font-size: 12.5px; caret-color: var(--mint);
        }

        /* ---- Nav ---- */
        .nav-shell {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 6vw; transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .nav-shell.scrolled { background: rgba(5,7,10,0.82); backdrop-filter: blur(10px); padding: 14px 6vw; border-color: var(--border); }
        .brand { display: flex; align-items: center; gap: 12px; }
        .brand-box {
          display: flex; align-items: center; justify-content: center; width: 38px; height: 38px;
          border: 1px solid var(--mint); border-radius: 10px; font-weight: 700; color: var(--mint);
        }
        .brand-text { display: flex; flex-direction: column; font-weight: 600; }
        .brand-status { font-size: 11px; font-weight: 400; color: var(--ink-dim); display: flex; align-items: center; gap: 6px; }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--mint); box-shadow: 0 0 6px var(--mint); }

        .hamburger { display: none; background: none; border: 1px solid var(--border); color: var(--ink); width: 40px; height: 40px; border-radius: 10px; align-items: center; justify-content: center; font-size: 18px; }
        .menu-items { display: flex; align-items: center; gap: 28px; }
        .menu-items a { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--ink-dim); transition: color 0.2s ease; }
        .menu-items a.active, .menu-items a:hover { color: var(--mint); }
        .tab-num { font-size: 10px; color: rgba(125,255,196,0.5); }
        .menu-backdrop { display: none; }

        @media (max-width: 860px) {
          .hamburger { display: flex; }
          .menu-items {
            position: fixed; top: 0; right: 0; height: 100vh; width: min(78vw, 320px);
            background: rgba(5,7,10,0.97); flex-direction: column; align-items: flex-start;
            justify-content: center; gap: 24px; padding: 40px; transform: translateX(100%);
            transition: transform 0.3s ease; z-index: 55; border-left: 1px solid var(--border);
          }
          .menu-items.active { transform: translateX(0); }
          .menu-backdrop.active { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 48; }
        }

        /* ---- Hero ---- */
        .stage-hero { flex-direction: column; justify-content: center; padding: 100px 6vw 40px; gap: 0; }
        .hero-inner { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; }
        @media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; gap: 40px; } }

        .eyebrow { display: flex; align-items: center; gap: 10px; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--mint); margin-bottom: 18px; }
        .hero-wave { font-size: 18px; color: var(--ink-dim); margin-bottom: 6px; }
        .wave-emoji { display: inline-block; animation: fx-wave 2.4s ease-in-out infinite; transform-origin: 70% 70%; }
        @keyframes fx-wave { 0%, 60%, 100% { transform: rotate(0deg); } 10% { transform: rotate(14deg); } 20% { transform: rotate(-8deg); } 30% { transform: rotate(14deg); } 40% { transform: rotate(-4deg); } }

        .hero-title { font-size: clamp(48px, 9vw, 108px); font-weight: 800; line-height: 0.95; margin-bottom: 14px; }
        .fx-glitch { position: relative; }
        .fx-glitch::before, .fx-glitch::after { content: attr(data-text); position: absolute; left: 0; top: 0; width: 100%; overflow: hidden; clip-path: inset(0 0 0 0); }
        .fx-glitch::before { color: var(--pink); animation: fx-glitch-1 3.2s infinite linear; z-index: -1; }
        .fx-glitch::after { color: var(--blue); animation: fx-glitch-2 2.6s infinite linear; z-index: -1; }
        @keyframes fx-glitch-1 { 0%, 92%, 100% { clip-path: inset(0 0 0 0); transform: translate(0,0); opacity: 0; } 93% { clip-path: inset(10% 0 60% 0); transform: translate(-3px,1px); opacity: 0.7; } 95% { clip-path: inset(60% 0 5% 0); transform: translate(3px,-1px); opacity: 0.7; } 97% { clip-path: inset(30% 0 40% 0); transform: translate(-2px,0); opacity: 0.5; } }
        @keyframes fx-glitch-2 { 0%, 90%, 100% { clip-path: inset(0 0 0 0); transform: translate(0,0); opacity: 0; } 91% { clip-path: inset(70% 0 5% 0); transform: translate(2px,1px); opacity: 0.6; } 94% { clip-path: inset(5% 0 70% 0); transform: translate(-2px,-1px); opacity: 0.6; } 98% { clip-path: inset(40% 0 30% 0); transform: translate(2px,0); opacity: 0.4; } }

        .fx-typewriter { font-size: clamp(16px, 2vw, 20px); font-weight: 500; color: var(--ink); margin-bottom: 18px; min-height: 1.6em; }
        .fx-caret { display: inline-block; width: 2px; height: 1em; margin-left: 3px; vertical-align: -0.15em; background: currentColor; animation: fx-caret-blink 0.9s steps(2) infinite; }
        @keyframes fx-caret-blink { 0%, 50% { opacity: 1; } 50.01%, 100% { opacity: 0; } }

        .hero-description { max-width: 480px; margin-bottom: 30px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }
        .cta { display: inline-flex; align-items: center; gap: 8px; padding: 13px 22px; border-radius: 10px; font-size: 14px; font-weight: 600; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .cta.primary { background: var(--mint); color: #04120b; box-shadow: 0 0 0 rgba(125,255,196,0); }
        .cta.primary:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(125,255,196,0.25); }
        .cta.secondary { border: 1px solid var(--border); color: var(--ink); }
        .cta.secondary:hover { border-color: var(--mint); color: var(--mint); }

        .stat-bars { display: flex; flex-direction: column; gap: 12px; max-width: 380px; }
        .stat-bar { display: grid; grid-template-columns: 110px 1fr 34px; align-items: center; gap: 12px; font-size: 12px; }
        .stat-bar-label { color: var(--ink-dim); letter-spacing: 0.05em; }
        .stat-bar-track { height: 6px; background: rgba(125,255,196,0.12); border-radius: 4px; overflow: hidden; }
        .stat-bar-fill { display: block; height: 100%; width: var(--value); background: linear-gradient(90deg, var(--blue), var(--mint)); border-radius: 4px; transition: width 1.2s cubic-bezier(0.16,0.84,0.44,1); }
        .stat-bar-value { text-align: right; color: var(--mint); font-weight: 600; }

        .hero-visual { display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .pinned-photo { position: relative; width: min(320px, 80%); will-change: transform; }
        .portrait-image { width: 100%; border-radius: 20px; border: 1px solid var(--border); display: block; }
        .rank-ring { position: absolute; bottom: -14px; right: -14px; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; }
        .rank-ring-track { position: absolute; inset: 0; border-radius: 50%; border: 2px solid var(--mint); background: var(--bg); }
        .rank-label { position: relative; font-size: 10px; font-weight: 700; color: var(--mint); }
        .visual-tags { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
        .tech-pill { font-size: 11px; padding: 6px 12px; border-radius: 999px; border: 1px solid var(--border); color: var(--ink-dim); }

        .status-strip { display: flex; flex-wrap: wrap; gap: 26px; margin-top: 50px; padding-top: 22px; border-top: 1px solid var(--border); width: 100%; }
        .ss-field { display: flex; flex-direction: column; gap: 4px; }
        .ss-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(125,255,196,0.5); }
        .ss-value { font-size: 13px; font-weight: 600; }
        .ss-stage { margin-left: auto; }

        .scroll-hint {
          position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          background: none; border: none; color: var(--ink-dim); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          animation: fx-bounce 1.8s ease-in-out infinite;
        }
        @keyframes fx-bounce { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, 6px); } }

        /* ---- Ticker ---- */
        .ticker { overflow: hidden; margin-bottom: 34px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 12px 0; }
        .ticker-track { display: flex; width: max-content; animation: fx-ticker 24s linear infinite; will-change: transform; }
        .ticker-set { display: flex; }
        .ticker-item { display: flex; align-items: center; gap: 14px; padding: 0 18px; font-size: 12px; letter-spacing: 0.15em; color: var(--ink-dim); white-space: nowrap; }
        .ticker-item .dot { color: var(--mint); }
        @keyframes fx-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* ---- About ---- */
        .about-grid { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 30px; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
        .about-copy p { margin-bottom: 16px; }
        .rev-log-compact { margin-top: 20px; display: flex; flex-direction: column; gap: 14px; }
        .rev-row { display: flex; gap: 14px; align-items: flex-start; }
        .rev-letter { width: 30px; height: 30px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); border-radius: 8px; font-size: 12px; font-weight: 700; color: var(--mint); }
        .rev-header { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
        .rev-header h4 { font-size: 14px; }
        .rev-header .date { font-size: 11px; color: rgba(125,255,196,0.6); white-space: nowrap; }
        .rev-body .company { font-size: 12px; color: var(--ink-dim); }

        .about-sidebar { display: flex; flex-direction: column; gap: 18px; }
        .file-title { display: flex; align-items: center; gap: 8px; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mint); margin-bottom: 16px; }
        .file-list { display: flex; flex-direction: column; gap: 10px; }
        .file-list li { display: flex; justify-content: space-between; font-size: 13px; gap: 10px; border-bottom: 1px dashed rgba(125,255,196,0.12); padding-bottom: 8px; }
        .file-list .label { color: rgba(125,255,196,0.55); }
        .mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .mini-card { display: flex; flex-direction: column; gap: 8px; padding: 18px; font-size: 12px; }
        .mini-card svg { font-size: 20px; color: var(--mint); }

        /* ---- Skills ---- */
        /* PERF: content-visibility lets the browser skip layout/paint
           for card grids while they're off-screen, and contain-intrinsic-size
           reserves an estimated box so scroll position doesn't jump once
           the real content is measured. */
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-card { display: flex; flex-direction: column; gap: 10px; content-visibility: auto; contain-intrinsic-size: 0 260px; }
        .skill-top { display: flex; justify-content: space-between; align-items: center; }
        .skill-icon { font-size: 24px; color: var(--mint); }
        .mod-tag { font-size: 10px; color: rgba(125,255,196,0.5); letter-spacing: 0.15em; }
        .skill-card h3 { font-size: 17px; }
        .skill-tech { font-size: 12px; }
        .skill-accent { font-size: 12px; color: rgba(232,246,238,0.45); }

        /* ---- Works / portfolio ---- */
        .portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        @media (max-width: 900px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .portfolio-grid { grid-template-columns: 1fr; } }
        .project-card { display: flex; flex-direction: column; padding: 0; overflow: hidden; position: relative; content-visibility: auto; contain-intrinsic-size: 0 360px; }
        .mission-tag { position: absolute; top: 12px; left: 12px; z-index: 2; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; background: rgba(5,7,10,0.75); border: 1px solid var(--border); padding: 4px 10px; border-radius: 999px; color: var(--mint); }
        .project-preview { position: relative; height: 160px; overflow: hidden; }
        .project-preview-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .project-card:hover .project-preview-image { transform: scale(1.06); }
        .project-preview-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(5,7,10,0.9)); }
        .project-content { padding: 20px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .card-top { display: flex; justify-content: space-between; align-items: center; }
        .card-badge { display: flex; align-items: center; gap: 6px; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(125,255,196,0.6); }
        .card-link { color: var(--mint); }
        .project-content h3 { font-size: 16px; }
        .project-content p { font-size: 12.5px; }
        .tech-stack { display: flex; gap: 6px; flex-wrap: wrap; margin: 4px 0; }
        .project-footer { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--mint); margin-top: auto; }
        .no-preview .project-content { padding-top: 40px; }

        /* ---- Reviews ---- */
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        @media (max-width: 900px) { .reviews-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .reviews-grid { grid-template-columns: 1fr; } }
        .review-card { display: flex; flex-direction: column; gap: 10px; content-visibility: auto; contain-intrinsic-size: 0 280px; }
        .review-header { display: flex; justify-content: space-between; align-items: center; }
        .review-stars { display: flex; gap: 2px; color: var(--amber); font-size: 13px; }
        .review-date { font-size: 11px; color: var(--ink-dim); }
        .review-title { font-size: 14px; }
        .review-text { font-size: 12.5px; font-style: italic; }
        .review-author-row { display: flex; align-items: baseline; gap: 8px; padding-top: 2px; }
        .review-author { font-size: 12.5px; font-weight: 700; color: var(--ink); }
        .review-source { font-size: 11px; color: rgba(125,255,196,0.6); }
        .review-badges { display: flex; gap: 6px; flex-wrap: wrap; }
        .review-badge { font-size: 10px; padding: 4px 9px; border-radius: 999px; border: 1px solid var(--border); color: var(--mint); }

        /* ---- Socials ---- */
        .socials-intro { margin-bottom: 34px; max-width: 620px; }
        .clearance-stamp { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; color: var(--mint); border: 1px solid var(--border); padding: 6px 12px; border-radius: 999px; margin-bottom: 16px; }
        .socials-intro h3 { font-size: clamp(22px, 3vw, 30px); margin-bottom: 10px; }
        .socials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 34px; }
        @media (max-width: 900px) { .socials-grid { grid-template-columns: 1fr; } }
        .social-card { display: flex; flex-direction: column; gap: 10px; transition: border-color 0.2s ease; }
        .social-card:hover { border-color: var(--mint); }
        .social-card-icon { font-size: 26px; color: var(--mint); }
        .social-card-label { font-size: 18px; font-weight: 700; }
        .social-card-detail { font-size: 12px; color: var(--ink-dim); }
        .social-card-go { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--mint); margin-top: auto; }

        .calendly-panel { margin-bottom: 34px; padding: 22px; }
        .calendly-panel-header { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .calendly-panel-header svg { font-size: 20px; color: var(--mint); margin-top: 3px; }
        .calendly-panel-header h3 { font-size: 18px; margin-bottom: 4px; }
        .calendly-panel-header p { font-size: 13px; }
        .calendly-inline-widget {
          min-width: 280px;
          height: 660px;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          content-visibility: auto;
          contain-intrinsic-size: 0 660px;
        }
        @media (max-width: 600px) {
          .calendly-inline-widget { height: 720px; }
        }

        .contact-channels { display: flex; gap: 22px; flex-wrap: wrap; padding: 20px 0; border-top: 1px solid var(--border); }
        .contact-channel { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--ink-dim); }
        .contact-channel svg { color: var(--mint); }
        .contact-channel.is-static { cursor: default; }

        .footer-inline { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border); }
        .brand-footer { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; }
        .copyright { font-size: 12px; color: rgba(232,246,238,0.4); }

        /* ---- Reveal choreography — plays once, then stays visible ---- */
        [data-reveal].fx-anim-up { opacity: 0; transform: translateY(40px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,0.84,0.44,1); transition-delay: calc(var(--stagger, 0) * 90ms); }
        [data-reveal].fx-anim-up.is-visible { opacity: 1; transform: translateY(0); }

        [data-reveal].fx-anim-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,0.84,0.44,1); }
        [data-reveal].fx-anim-left.is-visible { opacity: 1; transform: translateX(0); }

        [data-reveal].fx-anim-right { opacity: 0; transform: translateX(50px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,0.84,0.44,1); }
        [data-reveal].fx-anim-right.is-visible { opacity: 1; transform: translateX(0); }

        [data-reveal].fx-anim-scale { opacity: 0; transform: scale(0.85); transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,0.84,0.44,1); transition-delay: calc(var(--stagger, 0) * 80ms); }
        [data-reveal].fx-anim-scale.is-visible { opacity: 1; transform: scale(1); }

        [data-reveal].fx-anim-flip { opacity: 0; transform: perspective(900px) rotateY(24deg) translateY(20px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,0.84,0.44,1); transition-delay: calc(var(--stagger, 0) * 90ms); }
        [data-reveal].fx-anim-flip.is-visible { opacity: 1; transform: perspective(900px) rotateY(0deg) translateY(0); }

        [data-reveal].fx-anim-stage { opacity: 0; transform: translateY(-16px); transition: opacity 0.6s ease, transform 0.6s ease; }
        [data-reveal].fx-anim-stage.is-visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 600px) {
          /* PERF: fixed decorative overlays cost the same GPU/compositing
             work on a weak mobile chip as on desktop, for the least
             visible payoff at small screen sizes. Cut them here. */
          .grain, .hud-corner, .fx-cursor-glow { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          [data-reveal] { opacity: 1 !important; transform: none !important; transition: none !important; }
          .fx-glitch::before, .fx-glitch::after, .wave-emoji, .fx-caret, .ticker-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export default App;