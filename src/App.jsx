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
  FiTool,
  FiLock,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { DiPhotoshop } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import logo from "./assets/transparent.png";
import profileImage from "./assets/profile.png";
import "./main.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const portfolioItems = [
    {
      url: "https://geniusos.co/",
      title: "geniusOS",
      description: "Full-stack development with WordPress",
      tech: "WordPress",
    },
    {
      url: "https://vintageletter.co/",
      title: "Vintage Letter Co.",
      description: "E-commerce & AI Chatbot implementation",
      tech: "WordPress",
    },
    {
      url: "https://crownholdem.com/",
      title: "Crown Holdem",
      description: "Gaming platform development",
      tech: "WordPress",
    },
    {
      url: "http://igaminglink.com/",
      title: "iGaming Link",
      description: "iGaming industry portal development",
      tech: "WordPress",
    },
    {
      url: "https://stingraycitypayment.com/",
      title: "Stingray City Cayman Islands",
      description: "Payment gateway integration & development",
      tech: "WordPress",
    },
    {
      url: "https://myoblivion.github.io/space-tour-fem/",
      title: "Space Tour",
      description: "Interactive space tourism website",
      tech: "React",
    },
  ];
  return (
    <div className="app">
      <nav ref={navRef}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul
          className={`menu-items ${isMenuOpen ? "active" : ""}`}
          ref={menuRef}
        >
          {[
            "home",
            "about",
            "skills",
            "portfolio",
            "experience",
            "contact",
          ].map((item) => (
            <li key={item} onClick={closeMenu}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`menu-backdrop ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>France Lee</h1>
          <h2>Full Stack Developer</h2>
          <p>Turning ideas into exceptional digital experiences</p>
          <a href="#portfolio" className="cta">
            View My Work
          </a>
        </div>
        <img src={profileImage} alt="France Lee" className="profile-image" />
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm a full-stack developer with 5+ years of experience in
            creating web applications, software, and mobile apps. I specialized
            in modern JavaScript frameworks and cloud infrastructure. Passionate
            about building scalable solutions and optimizing user experiences.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/myoblivion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/france-lee-0747781b1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:francelee594@gmail.com">
              <FiMail />
            </a>
          </div>
          <a href="#contact" className="cta">
            Contact Me
          </a>
        </div>
        <div className="personal-info">
          <h3>Personal Details</h3>
          <ul>
            <li>
              <span>Name:</span> France Lee
            </li>
            <li>
              <span>Date of Birth:</span> 6 March 1999
            </li>
            <li>
              <span>Address:</span> Cavite, Philippines
            </li>
            <li>
              <span>Email:</span> francelee594@gmail.com
            </li>
            <li>
              <span>Phone:</span> +63 915 - 427- 9838
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {/* Additional Categories */}
          <div className="skill-card">
            <FiCode /> Software Development
          </div>
          <div className="skill-card">
            <FaGitAlt /> Version Control
          </div>
          <div className="skill-card">
            <FiServer /> Web Hosting
          </div>
          <div className="skill-card">
            <FiCode /> Web Development
          </div>
          <div className="skill-card">
            <DiPhotoshop />
            Web Design
          </div>
          <div className="skill-card">
            <FiDatabase /> Database Management
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Featured Projects</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <a
              href={item.url}
              key={index}
              className="portfolio-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-header">
                <FiFolder className="folder-icon" />
                <div className="tech-badge">{item.tech}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Professional Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <FiBriefcase className="timeline-icon" />
              <h3>Freelance Full Stack Developer</h3>
              <span className="date">Sep 2024 - Present</span>
            </div>
            <div className="timeline-content">
              <div className="company">Self-Employed · Remote</div>
              <ul>
                <li>
                  <FiCode /> Developed full-stack solutions using React,
                  Node.js, and AWS infrastructure
                </li>
                <li>
                  <FiServer /> Implemented CI/CD pipelines and cloud
                  architecture optimization
                </li>
                <li>
                  <FiDatabase /> Created custom WordPress plugins/themes and
                  AI-integrated applications
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <FiBriefcase className="timeline-icon" />
              <h3>Full-stack Developer</h3>
              <span className="date">Jan 2022 - Aug 2024</span>
            </div>
            <div className="timeline-content">
              <div className="company">geniusOS · Full-time · On-site</div>
              <ul>
                <li>
                  <FiCpu /> Led development of AI CCTV system with
                  facial/license plate recognition
                </li>
                <li>
                  <FiPackage /> Integrated payment gateways and e-commerce
                  solutions
                </li>
                <li>
                  <FiCloud /> Deployed scalable cloud infrastructure on AWS
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <FiBriefcase className="timeline-icon" />
              <h3>Web Developer</h3>
              <span className="date">Jul 2020 - Feb 2021</span>
            </div>
            <div className="timeline-content">
              <div className="company">Freelance · Manila</div>
              <ul>
                <li>
                  <FiLayout /> Built responsive WordPress sites with custom
                  theme development
                </li>
                <li>
                  <FiTool /> Implemented SEO strategies and Google Analytics
                  integration
                </li>
                <li>
                  <FiLock /> Configured SSL certificates and security protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <FiMail />
              <div>
                <h3>Email</h3>
                <a href="mailto:francelee594@gmail.com">
                  francelee594@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <FiPhone />
              <div>
                <h3>Call Me</h3>
                <a href="tel:+639154279838">+63 915 - 427- 9838</a>
              </div>
            </div>
            <div className="contact-info-item">
              <FiLinkedin />
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/france-lee-0747781b1/">
                  linkedin.com/in/france-lee
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <FiMapPin />
              <div>
                <h3>Location</h3>
                <p>Cavite, Philippines</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Your message" required />
            </div>
            <button type="submit" className="cta">
              <FiSend />
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer id="footer">
        <div className="top-border" />
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/myoblivion" className="social-icon">
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/france-lee-0747781b1/"
              className="social-icon"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:francelee594@gmail.com" className="social-icon">
              <FiMail />
            </a>
          </div>
          <div className="footer-info">
            <p>
              Handcrafted with <span className="heart">♥</span> by France Lee
            </p>
            <p>© 2025 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
