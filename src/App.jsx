import { useState, useEffect, useRef } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiDatabase,
  FiServer,
  FiFolder,
  FiSend,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiCpu,
  FiPackage,
  FiCloud,
  FiLayout,
  FiMenu,
  FiX,
  FiTerminal,
} from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import profileImage from "./assets/profile.png";
import "./main.scss";

// Extracted static data to prevent unnecessary re-renders
const PORTFOLIO_ITEMS = [
  {
    url: "http://playsafe88.com/",
    title: "Playsafe88",
    description: "Custom high-performance casino forum and community platform.",
    tech: ["React", "Python"],
  },
  {
    url: "#",
    title: "FeedScrapper AI",
    description: "Automated content migration tool utilizing local LLMs for processing.",
    tech: ["React", "Python", "Ollama AI"],
  },
  {
    url: "https://geniusos.co/",
    title: "geniusOS Platform",
    description: "Complex system architecture and full-stack implementation.",
    tech: ["React", "Node.js", "AWS"],
  },
  {
    url: "https://t.me/vip_reward_bot",
    title: "VIP Rewards Telegram Bot",
    description: "Automated referral logic and database persistence on Digital Ocean.",
    tech: ["Node.js", "Telegram API", "MongoDB"],
  },
  {
    url: "https://vintageletter.co/",
    title: "Vintage Letter Co.",
    description: "E-commerce platform with integrated AI chatbot capabilities.",
    tech: ["WordPress", "PHP", "Gutenberg"],
  },
  {
    url: "https://crownholdem.com/",
    title: "Crown Holdem",
    description: "High-performance gaming platform portal.",
    tech: ["PHP", "MySQL", "React"],
  },
  {
    url: "https://stingraycitypayment.com/",
    title: "Stingray City Payments",
    description: "Secure payment gateway integration for travel booking.",
    tech: ["Laravel", "API Integration"],
  }
];

const SKILLS = [
  { name: "Frontend Development", icon: <FaReact />, tech: "React, React Native, Vue, JS/TS" },
  { name: "Backend Architecture", icon: <FaNodeJs />, tech: "Node.js, PHP, Laravel, Python" },
  { name: "Cloud & DevOps", icon: <FiCloud />, tech: "AWS, Digital Ocean, CI/CD" },
  { name: "AI Integration", icon: <FiCpu />, tech: "Ollama, OpenAI API, Automation bots" },
  { name: "Database Design", icon: <FiDatabase />, tech: "MySQL, PostgreSQL, MongoDB" },
  { name: "CMS & E-commerce", icon: <FaWordpress />, tech: "WordPress, Gutenberg, WooCommerce" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Lowered threshold for sticky nav
    };
    
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="app">
      <nav ref={navRef} className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <span>&lt;</span>France.dev <span>/&gt;</span>
        </div>
        
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`menu-items ${isMenuOpen ? "active" : ""}`} ref={menuRef}>
          {["home", "about", "skills", "portfolio", "experience", "contact"].map((item) => (
            <li key={item} onClick={closeMenu}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`menu-backdrop ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="code-badge">
              <FiTerminal /> System.out.println("Hello, World!");
            </div>
            <h1>France Lee</h1>
            <h2>Senior Full-Stack Engineer</h2>
            <p>Architecting scalable infrastructure, AI-integrated solutions, and exceptional digital experiences across the modern web.</p>
            <div className="hero-actions">
              <a href="#portfolio" className="cta primary">View Projects</a>
              <a href="#contact" className="cta secondary">Get in Touch</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-wrapper">
              <img src={profileImage} alt="France Lee" />
            </div>
          </div>
        </section>

        <section id="about" className="about section-padding">
          <div className="section-header">
            <h2>01. About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hello! I'm a senior full-stack developer with over 5 years of experience engineering robust web applications, mobile platforms, and automated software solutions. 
              </p>
              <p>
                My expertise spans modern JavaScript frameworks, advanced PHP/Laravel ecosystems, and integrating AI tools (like Ollama and Python scripts) into production environments. Whether it's building complex Gutenberg themes or deploying high-availability Telegram bots to Digital Ocean, I focus on writing clean, scalable, and maintainable code.
              </p>
              <div className="social-links">
                <a href="https://github.com/myoblivion" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
                <a href="https://www.upwork.com/freelancers/~018deafe68b8dec6a4" target="_blank" rel="noreferrer" aria-label="Upwork"><AiOutlineLink /></a>
                <a href="https://www.linkedin.com/in/france-lee-0747781b1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>
            <div className="about-details">
              <div className="detail-card">
                <ul>
                  <li><span className="label">Location:</span> Cavite, Philippines</li>
                  <li><span className="label">Status:</span> Open to Opportunities</li>
                  <li><span className="label">Email:</span> francelee594@gmail.com</li>
                  <li><span className="label">Focus:</span> Full-Stack / Cloud / AI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-padding">
          <div className="section-header">
            <h2>02. Technical Arsenal</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map((skill, index) => (
              <div className="skill-card" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <p>{skill.tech}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="portfolio section-padding">
          <div className="section-header">
            <h2>03. Featured Work</h2>
          </div>
          <div className="portfolio-grid">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <a href={item.url} key={index} className="project-card" target="_blank" rel="noreferrer">
                <div className="card-top">
                  <FiFolder className="folder-icon" />
                  <div className="project-links">
                    <FiCode />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tech-stack">
                  {item.tech.map((t, i) => (
                    <span key={i} className="tech-pill">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="experience section-padding">
          <div className="section-header">
            <h2>04. Professional Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Senior Freelance Engineer</h3>
                  <span className="date">Sep 2024 - Present</span>
                </div>
                <span className="company">Self-Employed · Global Marketplaces</span>
                <ul>
                  <li>Architecting full-stack web and mobile (React Native/Expo) applications for international clients.</li>
                  <li>Developing and deploying custom AI solutions, automated scraping tools (Python), and containerized APIs.</li>
                  <li>Managing end-to-end cloud deployments on AWS and Digital Ocean.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Full-Stack Developer</h3>
                  <span className="date">Jan 2022 - Aug 2024</span>
                </div>
                <span className="company">Black Spot Studio PH · Full-time</span>
                <ul>
                  <li>Led backend development for an AI CCTV system incorporating facial and license plate recognition.</li>
                  <li>Engineered robust e-commerce solutions with secure, multi-layered payment gateway integrations.</li>
                  <li>Maintained and scaled high-traffic client infrastructure.</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Web Developer</h3>
                  <span className="date">Jul 2020 - Feb 2021</span>
                </div>
                <span className="company">Freelance · Manila</span>
                <ul>
                  <li>Built responsive, high-converting platforms using custom WordPress/PHP theme development.</li>
                  <li>Implemented advanced SEO strategies and technical analytics integrations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-padding">
          <div className="section-header">
            <h2>05. Get In Touch</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's build something great together.</h3>
              <p>Currently open for new opportunities, freelance projects, or just a chat about code.</p>
              
              <div className="info-items">
                <a href="mailto:francelee594@gmail.com" className="info-item">
                  <FiMail /> francelee594@gmail.com
                </a>
                <a href="tel:+639154279838" className="info-item">
                  <FiPhone /> +63 915 427 9838
                </a>
                <div className="info-item">
                  <FiMapPin /> Cavite, Philippines
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="cta primary">
                <FiSend /> Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="logo-small">
            <span>&lt;</span>France.dev <span>/&gt;</span>
          </div>
          <p>Built with React & SCSS. Designed by France Lee.</p>
          <p className="copyright">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;