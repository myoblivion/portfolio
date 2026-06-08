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
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import profileImage from "./assets/profile.png";
import "./main.scss";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const PORTFOLIO_ITEMS = [
  {
    url: "http://playsafe88.com/",
    title: "Playsafe88",
    description:
      "Custom high-performance casino forum and community platform built for speed, clarity, and stable user flows.",
    tech: ["React", "Python", "Performance"],
  },
  {
    url: "#",
    title: "FeedScrapper AI",
    description:
      "Automated content migration tool utilizing local LLM workflows for structured parsing and transformation.",
    tech: ["React", "Python", "Ollama AI"],
  },
  {
    url: "https://geniusos.co/",
    title: "geniusOS Platform",
    description:
      "Complex system architecture and full-stack implementation with scalable delivery and modern UI execution.",
    tech: ["React", "Node.js", "AWS"],
  },
  {
    url: "https://t.me/vip_reward_bot",
    title: "VIP Rewards Telegram Bot",
    description:
      "Automated referral logic and persistent data handling deployed on DigitalOcean for reliable user automation.",
    tech: ["Node.js", "Telegram API", "MongoDB"],
  },
  {
    url: "https://vintageletter.co/",
    title: "Vintage Letter Co.",
    description:
      "E-commerce platform with integrated AI chatbot capabilities and a polished content-first shopping experience.",
    tech: ["WordPress", "PHP", "Gutenberg"],
  },
  {
    url: "https://crownholdem.com/",
    title: "Crown Holdem",
    description:
      "High-performance gaming portal with refined layout systems and fast-loading interface patterns.",
    tech: ["PHP", "MySQL", "React"],
  },
  {
    url: "https://stingraycitypayment.com/",
    title: "Stingray City Payments",
    description:
      "Secure payment gateway integration for travel booking with practical API workflows and dependable UX.",
    tech: ["Laravel", "API Integration"],
  },
];

const SKILLS = [
  {
    name: "Frontend Development",
    icon: <FaReact />,
    tech: "React, React Native, Vue, JavaScript, TypeScript",
    accent: "UI systems, responsive motion, component architecture",
  },
  {
    name: "Backend Architecture",
    icon: <FaNodeJs />,
    tech: "Node.js, PHP, Laravel, Python",
    accent: "APIs, business logic, automation, structured services",
  },
  {
    name: "Cloud & DevOps",
    icon: <FiCloud />,
    tech: "AWS, DigitalOcean, CI/CD",
    accent: "Deployment pipelines, environments, reliability",
  },
  {
    name: "AI Integration",
    icon: <FiCpu />,
    tech: "Ollama, OpenAI API, automation bots",
    accent: "LLM workflows, task automation, smart tooling",
  },
  {
    name: "Database Design",
    icon: <FiDatabase />,
    tech: "MySQL, PostgreSQL, MongoDB",
    accent: "Schema design, querying, performance, data integrity",
  },
  {
    name: "CMS & E-commerce",
    icon: <FaWordpress />,
    tech: "WordPress, Gutenberg, WooCommerce",
    accent: "Conversion-focused builds, editor-friendly delivery",
  },
];

const EXPERIENCE = [
  {
    role: "Senior Freelance Engineer",
    date: "Sep 2024 - Present",
    company: "Self-Employed · Global Marketplaces",
    bullets: [
      "Architecting full-stack web and mobile applications for international clients.",
      "Developing and deploying custom AI solutions, scraping tools, and containerized APIs.",
      "Managing end-to-end cloud deployments on AWS and DigitalOcean.",
    ],
  },
  {
    role: "Full-Stack Developer",
    date: "Jan 2022 - Aug 2024",
    company: "Black Spot Studio PH · Full-time",
    bullets: [
      "Led backend development for an AI CCTV system with facial and license plate recognition.",
      "Engineered e-commerce solutions with secure, multi-layered payment gateway integrations.",
      "Maintained and scaled high-traffic client infrastructure.",
    ],
  },
  {
    role: "Web Developer",
    date: "Jul 2020 - Feb 2021",
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
  {
    href: "https://github.com/myoblivion",
    label: "GitHub",
    icon: <FiGithub />,
  },
  {
    href: "https://www.upwork.com/freelancers/~018deafe68b8dec6a4",
    label: "Upwork",
    icon: <AiOutlineLink />,
  },
  {
    href: "https://www.linkedin.com/in/france-lee-0747781b1/",
    label: "LinkedIn",
    icon: <FiLinkedin />,
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

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
      if (window.innerWidth > 768) closeMenu();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    let rafId = 0;

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const navOffset = 140;
      let current = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY + navOffset >= top) {
          current = id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
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
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <nav ref={navRef} className={`nav-shell ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#home" onClick={() => handleNavClick("home")} aria-label="Go to home">
          <span className="brand-mark">&lt;</span>
          <span className="brand-text">France.dev</span>
          <span className="brand-mark">/&gt;</span>
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
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`menu-backdrop ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />

      <main>
        <section id="home" className="hero">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <FiTerminal />
              Senior Full-Stack Engineer · Available for selective projects
            </div>

            <h1>France Lee</h1>
            <h2>Designing refined digital systems with code, clarity, and speed.</h2>

            <p className="hero-description">
              I build premium web experiences, scalable platforms, AI-assisted workflows, and dependable backend
              systems with a strong focus on visual quality, maintainability, and performance.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="cta primary" onClick={() => handleNavClick("portfolio")}>
                <FiArrowRight />
                View Projects
              </a>
              <a href="#contact" className="cta secondary" onClick={() => handleNavClick("contact")}>
                <FiMail />
                Get In Touch
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <FiStar />
                <strong>5+ Years</strong>
                <span>Engineering modern products</span>
              </div>
              <div className="metric-card">
                <FiShield />
                <strong>Reliable Delivery</strong>
                <span>Stable, maintainable builds</span>
              </div>
              <div className="metric-card">
                <FiTrendingUp />
                <strong>High-Impact Work</strong>
                <span>Performance-driven execution</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="portrait-shell">
              <div className="portrait-ring" />
              <div className="portrait-glow" />
              <img src={profileImage} alt="France Lee" className="portrait-image" />

              <div className="floating-card floating-card-one">
                <FiBriefcase />
                <div>
                  <strong>Full-Stack Engineer</strong>
                  <span>Product, backend, UI</span>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <FiCheckCircle />
                <div>
                  <strong>Open for work</strong>
                  <span>Freelance or full-time</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-padding">
          <div className="section-header" data-reveal>
            <span className="section-kicker">01</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy glass-panel" data-reveal>
              <p>
                Hello! I&apos;m a senior full-stack developer with over 5 years of experience engineering complex web
                applications, mobile platforms, and automated software solutions.
              </p>
              <p>
                My expertise spans modern JavaScript frameworks, advanced PHP/Laravel ecosystems, and integrating AI
                tools like Ollama and Python scripts into production environments. Whether it&apos;s building polished
                Gutenberg themes or deploying high-availability Telegram bots to DigitalOcean, I focus on clean,
                scalable, and maintainable code.
              </p>

              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    className="social-button"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="about-sidebar" data-reveal>
              <div className="info-card glass-panel">
                <div className="info-title">Professional Snapshot</div>
                <ul>
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
                <div className="mini-card glass-panel">
                  <FiLayout />
                  <strong>Design-minded</strong>
                  <span>Clean systems and spacing</span>
                </div>
                <div className="mini-card glass-panel">
                  <FiCode />
                  <strong>Developer-first</strong>
                  <span>Readable, scalable code</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-padding">
          <div className="section-header" data-reveal>
            <span className="section-kicker">02</span>
            <h2>Technical Arsenal</h2>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skill, index) => (
              <article
                className="skill-card glass-panel"
                key={skill.name}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="skill-top">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-index">0{index + 1}</div>
                </div>
                <h3>{skill.name}</h3>
                <p className="skill-tech">{skill.tech}</p>
                <p className="skill-accent">{skill.accent}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section-padding">
          <div className="section-header" data-reveal>
            <span className="section-kicker">03</span>
            <h2>Featured Work</h2>
          </div>

          <div className="portfolio-grid">
            {PORTFOLIO_ITEMS.map((item, index) => {
              const isLink = item.url && item.url !== "#";
              const CardTag = isLink ? "a" : "article";

              return (
                <CardTag
                  key={item.title}
                  {...(isLink ? { href: item.url, target: "_blank", rel: "noreferrer noopener" } : {})}
                  className="project-card glass-panel"
                  data-reveal
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <div className="card-top">
                    <div className="card-badge">
                      <FiFolder />
                      <span>Selected Work</span>
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
                    <span>Open project</span>
                    <FiArrowRight />
                  </div>
                </CardTag>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section-padding">
          <div className="section-header" data-reveal>
            <span className="section-kicker">04</span>
            <h2>Professional Journey</h2>
          </div>

          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <div className="timeline-item" key={item.role} data-reveal>
                <div className="timeline-dot" />
                <div className="timeline-content glass-panel">
                  <div className="timeline-header">
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

        {/* --- NEW REVIEWS SECTION --- */}
        <section id="reviews" className="section-padding">
          <div className="section-header" data-reveal>
            <span className="section-kicker">05</span>
            <h2>Client Feedback</h2>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((review, index) => (
              <div
                className="review-card glass-panel"
                key={index}
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
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
                <p className="review-text">"{review.text}"</p>
                
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
          <div className="section-header" data-reveal>
            <span className="section-kicker">06</span>
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-container">
            <div className="contact-info glass-panel" data-reveal>
              <h3>Let&apos;s build something excellent together.</h3>
              <p>
                I&apos;m currently open for new opportunities, freelance projects, and serious collaborations where
                design quality and technical execution both matter.
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

            <form className="contact-form glass-panel" data-reveal onSubmit={(e) => e.preventDefault()}>
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
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="brand brand-footer">
            <span className="brand-mark">&lt;</span>
            <span className="brand-text">France.dev</span>
            <span className="brand-mark">/&gt;</span>
          </div>
          <p>Built with React & SCSS. Designed and developed by France Lee.</p>
          <p className="copyright">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;