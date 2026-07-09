import { useEffect, useRef, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiDatabase,
  FiFolder,
  FiSend,
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
  FiExternalLink,
  FiStar,
  FiRadio,
  FiCheckCircle,
} from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import profileImage from "./assets/profile.png";

import playsafe88Shot from "./assets/sites/playsafe88.png";
import geniusosPlatformShot from "./assets/sites/geniusos-platform.png";
import vintageLetterShot from "./assets/sites/vintage-letter-co.png";
import crownHoldemShot from "./assets/sites/crown-holdem.png";
import stingrayPaymentsShot from "./assets/sites/stingray-city-payments.png";
import dartOfRositaShot from "./assets/sites/d-art-of-rosita.png";
import cryptoxShot from "./assets/sites/cryptox-platform.png";

import "./main.scss";

/* Each nav entry is a stage in the profile the visitor moves through,
   the way a HUD menu numbers the screens in a run. Order carries the
   sequence, so the number is a real index, not decoration. */
const NAV_ITEMS = [
  { id: "home", label: "Intro", sheet: "01" },
  { id: "about", label: "Dossier", sheet: "02" },
  { id: "skills", label: "Loadout", sheet: "03" },
  { id: "portfolio", label: "Missions", sheet: "04" },
  { id: "experience", label: "Record", sheet: "05" },
  { id: "reviews", label: "Intel", sheet: "06" },
  { id: "contact", label: "Comms", sheet: "07" },
];

/* Attribute readout used in the hero — a compact summary of where the
   deeper skill cards below go into detail. */
const ATTRIBUTES = [
  { label: "Frontend", value: 92 },
  { label: "Backend", value: 90 },
  { label: "Cloud / DevOps", value: 85 },
  { label: "AI Integration", value: 80 },
];

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
    url: "#",
    title: "D' Art of Rosita",
    description:
      "Dynamic web application featuring responsive modern styling and robust backend integration for seamless data management.",
    tech: ["React", "Vite", "SCSS", "Supabase"],
    screenshot: dartOfRositaShot,
  },
  {
    fig: "03",
    url: "http://playsafe88.com/",
    title: "Playsafe88",
    description:
      "Custom high-performance casino forum and community platform built for speed, clarity, and stable user flows.",
    tech: ["React", "Python", "Performance"],
    screenshot: playsafe88Shot,
  },
  {
    fig: "04",
    url: "#",
    title: "FeedScrapper AI",
    description:
      "Automated content migration tool utilizing local LLM workflows for structured parsing and transformation.",
    tech: ["React", "Python", "Ollama AI"],
    screenshot: null,
  },
  {
    fig: "05",
    url: "https://geniusos.co/",
    title: "geniusOS Platform",
    description:
      "Complex system architecture and full-stack implementation with scalable delivery and modern UI execution.",
    tech: ["React", "Node.js", "AWS"],
    screenshot: geniusosPlatformShot,
  },
  {
    fig: "06",
    url: "https://t.me/vip_reward_bot",
    title: "VIP Rewards Telegram Bot",
    description:
      "Automated referral logic and persistent data handling deployed on DigitalOcean for reliable user automation.",
    tech: ["Node.js", "Telegram API", "MongoDB"],
    screenshot: null,
  },
  {
    fig: "07",
    url: "https://vintageletter.co/",
    title: "Vintage Letter Co.",
    description:
      "E-commerce platform with integrated AI chatbot capabilities and a polished content-first shopping experience.",
    tech: ["WordPress", "PHP", "Gutenberg"],
    screenshot: vintageLetterShot,
  },
  {
    fig: "08",
    url: "https://crownholdem.com/",
    title: "Crown Holdem",
    description:
      "High-performance gaming portal with refined layout systems and fast-loading interface patterns.",
    tech: ["PHP", "MySQL", "React"],
    screenshot: crownHoldemShot,
  },
  {
    fig: "09",
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
    level: 92,
  },
  {
    tag: "MOD-02",
    name: "Backend Architecture",
    icon: <FaNodeJs />,
    tech: "Node.js, PHP, Laravel, Python",
    accent: "APIs, business logic, automation, structured services",
    level: 90,
  },
  {
    tag: "MOD-03",
    name: "Cloud & DevOps",
    icon: <FiCloud />,
    tech: "AWS, DigitalOcean, CI/CD",
    accent: "Deployment pipelines, environments, reliability",
    level: 85,
  },
  {
    tag: "MOD-04",
    name: "AI Integration",
    icon: <FiCpu />,
    tech: "Ollama, OpenAI API, automation bots",
    accent: "LLM workflows, task automation, smart tooling",
    level: 80,
  },
  {
    tag: "MOD-05",
    name: "Database Design",
    icon: <FiDatabase />,
    tech: "MySQL, PostgreSQL, MongoDB",
    accent: "Schema design, querying, performance, data integrity",
    level: 88,
  },
  {
    tag: "MOD-06",
    name: "CMS & E-commerce",
    icon: <FaWordpress />,
    tech: "WordPress, Gutenberg, WooCommerce",
    accent: "Conversion-focused builds, editor-friendly delivery",
    level: 84,
  },
];

/* Service record, newest first — the same convention as a rank
   ladder: the top row holds the current clearance tier. */
const EXPERIENCE = [
  {
    rev: "III",
    role: "Senior Freelance Engineer",
    date: "Sep 2024 — Present",
    company: "Self-Employed · Global Marketplaces",
    bullets: [
      "Architecting full-stack web and mobile applications for international clients.",
      "Developing and deploying custom AI solutions, scraping tools, and containerized APIs.",
      "Managing end-to-end cloud deployments on AWS and DigitalOcean.",
    ],
  },
  {
    rev: "II",
    role: "Full-Stack Developer",
    date: "Jan 2022 — Aug 2024",
    company: "Black Spot Studio PH · Full-time",
    bullets: [
      "Led backend development for an AI CCTV system with facial and license plate recognition.",
      "Engineered e-commerce solutions with secure, multi-layered payment gateway integrations.",
      "Maintained and scaled high-traffic client infrastructure.",
    ],
  },
  {
    rev: "I",
    role: "Web Developer",
    date: "Jul 2020 — Feb 2021",
    company: "Freelance · Manila",
    bullets: [
      "Built responsive, high-converting platforms using custom WordPress/PHP theme development.",
      "Implemented SEO strategies and technical analytics integrations.",
    ],
  },
];

const REVIEWS = [
  {
    title: "Database Connect Wordpress Error Need Fix now",
    text: "France is truly exceptional! He operates at an impressive speed and possesses extensive knowledge of WordPress. I value his communication skills and professionalism so much. I will certainly consider hiring...",
    date: "Sep 12, 2024",
    rating: 5,
    badges: ["Clear Communicator", "Professional"],
  },
  {
    title: "UI Developer for UI Layout Issue Fix",
    text: "I reached out to France to help with some web development and to fix a few bugs on my site. I was genuinely impressed by the quality and punctuality of his work. He really got what I wanted and delivered brilliantly on the task. I'd definitely collaborate with him again in a heartbeat.",
    date: "Oct 12, 2023",
    rating: 5,
    badges: ["Committed to Quality", "Reliable", "Collaborative"],
  },
  {
    title: "Wordpress developer needed URGENTLY!",
    text: "Really pleased with the work with France. He developed a 5-page landing page that nicely met our needs. The AI-generated images were of good quality and the overall content and design were well-thought-out. He's a professional and worked efficiently. A solid choice for web design projects.",
    date: "Jan 23, 2024",
    rating: 5,
    badges: ["Professional", "Committed to Quality"],
  },
  {
    title: "Development of comprehensive Readme",
    text: "Great to work with. Helped us in our work and delivered on time!",
    date: "Apr 5, 2024",
    rating: 5,
    badges: ["Collaborative", "Reliable"],
  },
  {
    title: "Resize RTSP Live Video Camera Feed",
    text: "Great experience! Very responsive!",
    date: "Jun 7, 2024",
    rating: 5,
    badges: ["Clear Communicator"],
  },
  {
    title: "Custom Programming Services",
    text: "France is an honest and dedicated programmer. He is capable and has shown out-of-the-box thinking and workarounds more than once when we have obstacles. I recommend using his services.",
    date: "Apr 22, 2025",
    rating: 5,
    badges: [],
  },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/myoblivion", label: "GitHub", icon: <FiGithub /> },
  { href: "https://www.upwork.com/freelancers/~018deafe68b8dec6a4", label: "Upwork", icon: <AiOutlineLink /> },
  { href: "https://www.linkedin.com/in/france-lee-0747781b1/", label: "LinkedIn", icon: <FiLinkedin /> },
];

/* Rendered twice back-to-back and scrolled exactly 50%, this is the
   classic seamless-marquee trick — no JS animation loop required. */
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  /* Single scroll listener, throttled with one rAF, driving two cheap
     style reads. No layout-thrashing per-section measurement here —
     that job belongs to the IntersectionObserver below. */
  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const y = window.scrollY;
      setScrolled(y > 24);
      setScrollProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
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

  /* Active-section tracking via IntersectionObserver instead of a
     scroll-driven getBoundingClientRect loop — native, GPU-friendly,
     and doesn't run on every scroll frame. */
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="app">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      <div className="grain" aria-hidden="true" />

      <span className="hud-corner hc-tl" aria-hidden="true" />
      <span className="hud-corner hc-tr" aria-hidden="true" />
      <span className="hud-corner hc-bl" aria-hidden="true" />
      <span className="hud-corner hc-br" aria-hidden="true" />

      <nav className={`nav-shell ${scrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={() => handleNavClick("home")} aria-label="Go to home">
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
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
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
        <section id="home" className="hero hud-grid">
          <span className="hero-spine" aria-hidden="true">
            FULL-STACK ENGINEER — CLOUD — AI —
          </span>

          <div className="hero-inner">
            <div className="hero-copy" data-reveal>
              <div className="eyebrow">
                <FiTerminal />
                Operator Profile <span className="status-dot" /> Available for deployment
              </div>

              <h1 className="hero-title">FRANCE LEE</h1>
              <h2>I design and build the systems that keep fast products running.</h2>

              <p className="hero-description">
                Full-stack engineer with 5+ years shipping web and mobile platforms, cloud
                infrastructure, and AI-assisted tooling — from clean interfaces down to the APIs and
                databases underneath them.
              </p>

              <div className="hero-actions">
                <a href="#portfolio" className="cta primary" onClick={() => handleNavClick("portfolio")}>
                  View missions
                  <FiArrowRight />
                </a>
                <a href="#contact" className="cta secondary" onClick={() => handleNavClick("contact")}>
                  <FiRadio />
                  Open comms
                </a>
              </div>

              <div className="stat-bars">
                {ATTRIBUTES.map((attr) => (
                  <div className="stat-bar" key={attr.label}>
                    <span className="stat-bar-label">{attr.label}</span>
                    <span className="stat-bar-track">
                      <span className="stat-bar-fill" style={{ "--value": `${attr.value}%` }} />
                    </span>
                    <span className="stat-bar-value">{attr.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="pinned-photo">
                <img src={profileImage} alt="France Lee" className="portrait-image" />
                <span className="rank-ring" aria-hidden="true">
                  <span className="rank-ring-track" />
                  <span className="rank-label">LVL 05</span>
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
              <span className="ss-label">Stage</span>
              <span className="ss-value">01 / 07</span>
            </div>
          </div>
        </section>

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

        <section id="about" className="section-padding">
          <div className="section-header" data-reveal data-ghost="02">
            <span className="stage-tag">STAGE 02</span>
            <h2>Dossier</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy panel" data-reveal>
              <p>
                I&apos;m a senior full-stack developer with over 5 years of experience engineering
                complex web applications, mobile platforms, and automated software solutions.
              </p>
              <p>
                My work spans modern JavaScript frameworks, PHP/Laravel ecosystems, and wiring AI
                tools like Ollama and Python scripts into production environments — whether that&apos;s
                a polished Gutenberg theme or a high-availability Telegram bot running on
                DigitalOcean. Clean, scalable, maintainable code is the standard I hold every build to.
              </p>

              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener" className="social-button">
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="about-sidebar" data-reveal>
              <div className="file-card panel">
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
                <div className="mini-card panel">
                  <FiCode />
                  <strong>Developer-first</strong>
                  <span>Readable, scalable code</span>
                </div>
                <div className="mini-card panel">
                  <FiBriefcase />
                  <strong>Delivery-minded</strong>
                  <span>Ships on schedule</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding">
          <div className="section-header" data-reveal data-ghost="03">
            <span className="stage-tag">STAGE 03</span>
            <h2>Loadout</h2>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <article className="skill-card panel" key={skill.name} data-reveal>
                <div className="skill-top">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="mod-tag">{skill.tag}</span>
                </div>
                <h3>{skill.name}</h3>
                <p className="skill-tech">{skill.tech}</p>
                <p className="skill-accent">{skill.accent}</p>
                <span className="skill-meter">
                  <span className="skill-meter-fill" style={{ "--value": `${skill.level}%` }} />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section-padding">
          <div className="section-header" data-reveal data-ghost="04">
            <span className="stage-tag">STAGE 04</span>
            <h2>Missions</h2>
          </div>

          <div className="portfolio-grid">
            {PORTFOLIO_ITEMS.map((item) => {
              const isLink = item.url && item.url !== "#";
              const hasPreview = Boolean(item.screenshot);

              return (
                <a
                  key={item.title}
                  href={isLink ? item.url : undefined}
                  target={isLink ? "_blank" : undefined}
                  rel={isLink ? "noreferrer noopener" : undefined}
                  className={`project-card panel ${hasPreview ? "has-preview" : "no-preview"} ${isLink ? "" : "static"}`}
                  data-reveal
                >
                  <span className="mission-tag">Mission {item.fig}</span>

                  {hasPreview ? (
                    <div className="project-preview" aria-hidden="true">
                      <img src={item.screenshot} alt="" className="project-preview-image" />
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
                      <span>Launch mission</span>
                      <FiArrowRight />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section-padding">
          <div className="section-header" data-reveal data-ghost="05">
            <span className="stage-tag">STAGE 05</span>
            <h2>
              <FiBriefcase className="header-icon" /> Service Record
            </h2>
          </div>

          <div className="rev-log">
            {EXPERIENCE.map((item) => (
              <div className="rev-row panel" key={item.role} data-reveal>
                <div className="rev-letter">{item.rev}</div>
                <div className="rev-body">
                  <div className="rev-header">
                    <h3>{item.role}</h3>
                    <span className="date">{item.date}</span>
                  </div>
                  <span className="company">{item.company}</span>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" className="section-padding">
          <div className="section-header" data-reveal data-ghost="06">
            <span className="stage-tag">STAGE 06</span>
            <h2>Field Intel</h2>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((review, index) => (
              <div className="review-card panel" key={index} data-reveal>
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
        </section>

        <section id="contact" className="section-padding">
          <div className="section-header" data-reveal data-ghost="07">
            <span className="stage-tag">STAGE 07</span>
            <h2>Comms</h2>
          </div>

          <div className="contact-container">
            <div className="contact-info panel" data-reveal>
              <span className="clearance-stamp">
                <FiCheckCircle /> Clearance: open for new work
              </span>

              <h3>Let&apos;s build something reliable together.</h3>
              <p>
                Open for new opportunities, freelance projects, and collaborations where design
                quality and technical execution both matter.
              </p>

              <div className="info-items">
                <a href="mailto:francelee594@gmail.com" className="info-item">
                  <FiMail />
                  <span>francelee594@gmail.com</span>
                </a>
                <a href="tel:+639154279838" className="info-item">
                  <FiPhone />
                  <span>+63 915 427 9838</span>
                </a>
                <div className="info-item">
                  <FiMapPin />
                  <span>Cavite, Philippines</span>
                </div>
              </div>
            </div>

            <form className="contact-form panel" data-reveal onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project" rows="6" required />
              </div>

              <button type="submit" className="cta primary submit-btn">
                <FiSend />
                Transmit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="brand brand-footer">
            <span className="brand-box">FL</span>
            <span className="brand-text">France Lee</span>
          </div>
          <p>Built with React &amp; SCSS. Designed and developed by France Lee.</p>
          <p className="copyright">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;