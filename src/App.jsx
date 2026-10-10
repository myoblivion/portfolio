import { useEffect, useRef, useState } from "react";
import {
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin,
  FiArrowUpRight, FiX, FiTerminal, FiStar,
} from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import profileImage from "./assets/profile.png";

import geniusosPlatformShot from "./assets/sites/geniusos-platform.png";
import vintageLetterShot from "./assets/sites/vintage-letter-co.png";
import SealedCo from "./assets/sites/sealed.png";
import crownHoldemShot from "./assets/sites/crown-holdem.png";
import stingrayPaymentsShot from "./assets/sites/stingray-city-payments.png";
import theorekaShot from "./assets/sites/theoreka.png";
import telaTropikaShot from "./assets/sites/tela_tropika.png";
import ckDiazShot from "./assets/sites/ck_diaz.png";
import spinAsiaShot from "./assets/sites/spin_asia.png";
import logo from "./assets/logo_francelee.png";


const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Work" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const SUBTITLE = "I design and build the systems that keep fast products running.";
 
const WORKS = [
  { url: "http://telatropika.com/", title: "Tela Tropika", description: "Textile and fabric storefront with a clean catalog experience, easy product browsing, and a responsive layout built for online shoppers.", tech: ["React", "Vercel", "Responsive UI"], shot: telaTropikaShot },
  { url: "https://ck-d-iaz.vercel.app/", title: "CK Diaz", description: "Polished, fast-loading brand website with modern layout systems, smooth interactions, and a presentation built to make a strong first impression.", tech: ["React", "Vercel", "Responsive UI"], shot: ckDiazShot },
  { url: "https://spin-asia-textile.vercel.app/", title: "Spin Asia Textile", description: "Corporate website for a textile manufacturer, showcasing products, capabilities, and company story with a clear, professional design.", tech: ["React", "Vercel", "Responsive UI"], shot: spinAsiaShot },
  { url: "https://app.theoreka.com/login", title: "Theoreka", description: "AI-powered systematic review platform that helps researchers screen studies, analyze papers, and streamline evidence synthesis.", tech: ["React", "Python", "Firebase", "AI"], shot: theorekaShot },
  { url: "https://geniusos.co/", title: "geniusOS Platform", description: "Complex system architecture and full-stack implementation with scalable delivery and modern UI execution.", tech: ["React", "Node.js", "AWS"], shot: geniusosPlatformShot },
  { url: "https://sealed-co.vercel.app/", title: "Sealed Co", description: "Digital letter creation platform with customizable vintage designs, personalized stationery, and an immersive writing experience.", tech: ["WordPress", "PHP", "Gutenberg"], shot: SealedCo },
  { url: "https://crownholdem.com/", title: "Crown Holdem", description: "High-performance gaming portal with refined layout systems and fast-loading interface patterns.", tech: ["PHP", "MySQL", "React"], shot: crownHoldemShot },
  { url: "https://stingraycitypayment.com/", title: "Stingray City Payments", description: "Secure payment gateway integration for travel booking with practical API workflows and dependable UX.", tech: ["Laravel", "API Integration"], shot: stingrayPaymentsShot },
  { url: "https://vintageletter.co/", title: "Vintage Letter Co.", description: "Digital letter creation platform with customizable vintage designs, personalized stationery, and an immersive writing experience.", tech: ["WordPress", "PHP", "Gutenberg"], shot: vintageLetterShot },
];

const SKILLS = [
  { name: "Frontend development", tech: "React, React Native, Vue, JavaScript, TypeScript", note: "UI systems, responsive motion, component architecture" },
  { name: "Backend architecture", tech: "Node.js, PHP, Laravel, Python", note: "APIs, business logic, automation, structured services" },
  { name: "Cloud and DevOps", tech: "AWS, DigitalOcean, CI/CD", note: "Deployment pipelines, environments, reliability" },
  { name: "AI integration", tech: "Ollama, OpenAI API, automation bots", note: "LLM workflows, task automation, smart tooling" },
  { name: "Database design", tech: "MySQL, PostgreSQL, MongoDB", note: "Schema design, querying, performance, data integrity" },
  { name: "CMS and e-commerce", tech: "WordPress, Gutenberg, WooCommerce", note: "Conversion-focused builds, editor-friendly delivery" },
];

const STACK_A = ["React", "Node.js", "TypeScript", "Laravel", "AWS", "Python", "PostgreSQL", "Vue"];
const STACK_B = ["WordPress", "Ollama", "DigitalOcean", "MongoDB", "React Native", "OpenAI API", "MySQL", "CI/CD"];

const EXPERIENCE = [
  { role: "Senior Freelance Engineer", company: "Self-Employed", date: "Sep 2024 — Present" },
  { role: "Full-Stack Developer", company: "Black Spot Studio PH", date: "Jan 2022 — Aug 2024" },
  { role: "Web Developer", company: "Freelance, Manila", date: "Jul 2020 — Feb 2021" },
];

const STATS = [
  { to: 5, plus: true, label: "Years building", note: "Web, mobile, cloud and AI tooling" },
  { to: 9, plus: false, label: "Live projects", note: "Shipped and running in production" },
  { to: 6, plus: false, label: "Five-star reviews", note: "Verified on Upwork" },
];

const REVIEWS = [
  { title: "Database Connect Wordpress Error Need Fix now", text: "France is truly exceptional! He operates at an impressive speed and possesses extensive knowledge of WordPress. I value his communication skills and professionalism so much. I will certainly consider hiring...", date: "Sep 12, 2024", author: "Marvin B.", badges: ["Clear Communicator", "Professional"] },
  { title: "UI Developer for UI Layout Issue Fix", text: "I reached out to France to help with some web development and to fix a few bugs on my site. I was genuinely impressed by the quality and punctuality of his work. He really got what I wanted and delivered brilliantly on the task. I'd definitely collaborate with him again in a heartbeat.", date: "Oct 12, 2023", author: "Lizel N.", badges: ["Committed to Quality", "Reliable", "Collaborative"] },
  { title: "Wordpress developer needed URGENTLY!", text: "Really pleased with the work with France. He developed a 5-page landing page that nicely met our needs. The AI-generated images were of good quality and the overall content and design were well-thought-out. He's a professional and worked efficiently. A solid choice for web design projects.", date: "Jan 23, 2024", author: "Shane", badges: ["Professional", "Committed to Quality"] },
  { title: "Development of comprehensive Readme", text: "Great to work with. Helped us in our work and delivered on time!", date: "Apr 5, 2024", author: "Lee V.", badges: ["Collaborative", "Reliable"] },
  { title: "Resize RTSP Live Video Camera Feed", text: "Great experience! Very responsive!", date: "Jun 7, 2024", author: "Anthony J.", badges: ["Clear Communicator"] },
  { title: "Custom Programming Services", text: "France is an honest and dedicated programmer. He is capable and has shown out-of-the-box thinking and workarounds more than once when we have obstacles. I recommend using his services.", date: "Apr 22, 2025", author: "Mohammed A.", badges: [] },
];

const SOCIALS = [
  { href: "https://github.com/myoblivion", label: "GitHub", detail: "Source and side projects", icon: <FiGithub /> },
  { href: "https://www.upwork.com/freelancers/~018deafe68b8dec6a4", label: "Upwork", detail: "Verified work history", icon: <AiOutlineLink /> },
  { href: "https://www.linkedin.com/in/france-lee-0747781b1/", label: "LinkedIn", detail: "Career and network", icon: <FiLinkedin /> },
];

const EMAIL = "francelee594@gmail.com";
const PHONE = "+63 915 427 9838";

const ABOUT_TEXT =
  "I'm a senior full-stack developer with over 5 years of experience engineering complex web applications, mobile platforms, and automated software. I wire AI tools like Ollama and Python into production, from polished Gutenberg themes to high-availability Telegram bots on DigitalOcean. Clean, scalable, maintainable code is the standard I hold every build to.";

/* ---------------- Terminal content ---------------- */
const pad = (s, n) => s + " ".repeat(Math.max(0, n - s.length));
const COMMANDS = {
  help: () => ["help        this list", "whoami      about me", "contact     email, phone, location", "skills      what I work with", "projects    live builds", "experience  work history", "socials     where to find me", "joke        mostly harmless", "clear       wipe the screen", "exit        close"],
  whoami: () => ["France Lee, senior full-stack developer", "Based in Cavite, Philippines", "5+ years shipping web, mobile, cloud and AI tooling", "Status: open to work"],
  contact: () => [`email     ${EMAIL}`, `phone     ${PHONE}`, "location  Cavite, Philippines"],
  skills: () => SKILLS.map((s) => `${pad(s.name, 24)}${s.tech}`),
  projects: () => WORKS.map((p) => `${p.title}: ${p.url}`),
  experience: () => EXPERIENCE.map((e) => `${pad(e.date, 22)}${e.role} @ ${e.company}`),
  socials: () => SOCIALS.map((s) => `${pad(s.label, 10)}${s.href}`),
  joke: () => [["Why do programmers prefer dark mode? Because light attracts bugs.", "I'd tell you a UDP joke, but you might not get it.", "There are 10 kinds of people: those who understand binary, and those who don't."][Math.floor(Math.random() * 3)]],
};

/* ---------------- Small components ---------------- */

function Preloader({ done }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v >= 100 ? 100 : v + Math.ceil(Math.random() * 6))), 40);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (n >= 100) {
      const t = setTimeout(done, 350);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [n, done]);
  return (
    <div className="pre" aria-hidden="true">
      <span className="pre-n">{Math.min(n, 100)}</span>
      <span className="pre-l">Loading portfolio</span>
    </div>
  );
}

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Manila", hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    f();
    const i = setInterval(f, 1000);
    return () => clearInterval(i);
  }, []);
  return <span className="clock">{t} in Cavite</span>;
}

function Nav() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className="nav">
      <button className="nav-brand" onClick={() => go("home")} aria-label="France Lee, back to top">
        <img src={logo} alt="France Lee" />
      </button>
      <ul>
        {NAV.map((n) => (
          <li key={n.id}>
            <button className={active === n.id ? "on" : ""} onClick={() => go(n.id)}>{n.label}</button>
          </li>
        ))}
      </ul>
      <button className="nav-cta" onClick={() => go("contact")}>Hire me</button>
    </nav>
  );
}

function TerminalButton({ open, onClick }) {
  return (
    <button className={`term-fab ${open ? "is-open" : ""}`} onClick={onClick} aria-label={open ? "Close terminal" : "Open terminal"} title="Press / to toggle">
      <FiTerminal />
      <span>{open ? "Close" : "Terminal"}</span>
      <kbd>/</kbd>
    </button>
  );
}

function Terminal({ onClose }) {
  const [hist, setHist] = useState([]);
  const [val, setVal] = useState("");
  const body = useRef(null);
  const input = useRef(null);
  useEffect(() => input.current?.focus(), []);
  useEffect(() => { if (body.current) body.current.scrollTop = body.current.scrollHeight; }, [hist]);
  const run = (e) => {
    e.preventDefault();
    const cmd = val.trim().split(/\s+/)[0].toLowerCase();
    setVal("");
    if (!cmd) return;
    if (cmd === "clear") return setHist([]);
    if (cmd === "exit") return onClose();
    const out = COMMANDS[cmd] ? COMMANDS[cmd]() : [`command not found: ${cmd}`, "type help to see commands"];
    setHist((h) => [...h, { cmd: val, out }]);
  };
  return (
    <div className="term" role="dialog" aria-label="Terminal">
      <div className="term-bar"><span>france@portfolio</span><button onClick={onClose} aria-label="Close terminal"><FiX /></button></div>
      <div className="term-body" ref={body} onClick={() => input.current?.focus()}>
        <div className="term-dim">Type help to see what you can ask.</div>
        {hist.map((h, i) => (
          <div key={i}>
            <div><b>$</b> {h.cmd}</div>
            {h.out.map((l, j) => <div className="term-out" key={j}>{l}</div>)}
          </div>
        ))}
        <form onSubmit={run} className="term-row">
          <b>$</b>
          <input ref={input} value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off" spellCheck="false" aria-label="Command" />
        </form>
      </div>
    </div>
  );
}

function Magnetic({ children, className = "", ...rest }) {
  const ref = useRef(null);
  const move = (e) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
  };
  return (
    <a ref={ref} className={`mag ${className}`} onMouseMove={move} onMouseLeave={() => (ref.current.style.transform = "")} {...rest}>
      {children}
    </a>
  );
}

function CountUp({ to }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const s = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - s) / 1400);
        el.textContent = Math.round((1 - Math.pow(1 - p, 4)) * to);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>0</span>;
}

function Marquee({ items, dir = 1, speed = 0.7 }) {
  const track = useRef(null);
  useEffect(() => {
    let x = 0, raf = 0, last = window.scrollY, vel = 0;
    const loop = () => {
      const y = window.scrollY;
      vel += (Math.min(Math.abs(y - last), 40) - vel) * 0.1;
      last = y;
      const el = track.current;
      if (el) {
        x += dir * (speed + vel * 0.25);
        const w = el.scrollWidth / 2;
        if (x > 0) x -= w;
        if (x < -w) x += w;
        el.style.transform = `translate3d(${x}px,0,0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [dir, speed]);
  const row = [...items, ...items];
  return (
    <div className="mq" aria-hidden="true">
      <div className="mq-track" ref={track}>
        {row.concat(row).map((t, i) => <span key={i}>{t}<i /></span>)}
      </div>
    </div>
  );
}

/* ---------------- Sections ---------------- */

function Hero({ ready }) {
  const letters = useRef([]);
  const sub = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    let mx = -9999, my = -9999, raf = 0;
    const apply = () => {
      raf = 0;
      letters.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
        el.style.fontVariationSettings = `"wght" ${Math.round(900 - Math.min(d / 420, 1) * 400)}`;
      });
    };
    const move = (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(apply); };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);
  useEffect(() => {
    if (!ready) return undefined;
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      if (sub.current) sub.current.textContent = SUBTITLE.slice(0, i);
      if (i >= SUBTITLE.length) clearInterval(t);
    }, 24);
    return () => clearInterval(t);
  }, [ready]);

  let k = 0;
  const word = (w) => (
    <span className="hw" aria-hidden="true">
      {w.split("").map((c) => {
        const idx = k++;
        return (
          <span className="hl" key={idx}>
            <span ref={(el) => (letters.current[idx] = el)} style={{ animationDelay: `${0.1 + idx * 0.06}s` }}>{c}</span>
          </span>
        );
      })}
    </span>
  );

  return (
    <section id="home" className={`hero ${ready ? "go" : ""}`}>
      <div className="hero-top">
        <span className="avail"><i /> Open to work</span>
        <Clock />
      </div>

      <div className="hero-main">
        <div className="hero-left">
          <h1 aria-label="France Lee">{word("France")}{word("Lee")}</h1>
          <p className="hero-sub" aria-label={SUBTITLE}><span ref={sub} aria-hidden="true" /><em className="caret" /></p>
          <p className="hero-desc">Full-stack engineer with 5+ years shipping web and mobile platforms, cloud infrastructure, and AI-assisted tooling, from clean interfaces down to the APIs and databases underneath.</p>
          <div className="hero-cta">
            <Magnetic className="btn solid" href="#works" onClick={(e) => { e.preventDefault(); document.getElementById("works").scrollIntoView({ behavior: "smooth" }); }}>See the work</Magnetic>
            <Magnetic className="btn line" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); }}>Start a project</Magnetic>
          </div>
        </div>

        <div className="portrait">
          <img src={profileImage} alt="France Lee" />
          <svg className="badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
            <text><textPath href="#circ">5+ years shipping · 5+ years shipping · </textPath></text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function About() {
  const p = useRef(null);
  const words = ABOUT_TEXT.split(" ");
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = p.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.2)));
      const spans = el.children;
      const n = spans.length;
      for (let i = 0; i < n; i++) {
        const v = Math.min(1, Math.max(0, prog * (n + 6) - i));
        spans[i].style.opacity = (0.16 + v * 0.84).toFixed(2);
      }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <section id="about" className="sec chalk">
      <h2 className="sec-title">About</h2>
      <p className="statement" ref={p}>{words.map((w, i) => <span key={i}>{w} </span>)}</p>

      <div className="stats">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-label">{s.label}</span>
            <div className="stat-num">
              <CountUp to={s.to} />
              {s.plus && <em>+</em>}
            </div>
            <p className="stat-note">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="exp">
        <h3>Where I've worked</h3>
        {EXPERIENCE.map((e) => (
          <div className="exp-row" key={e.role}>
            <span className="exp-date">{e.date}</span>
            <span className="exp-role">{e.role}</span>
            <span className="exp-co">{e.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const [open, setOpen] = useState(0);
  return (
    <section id="skills" className="sec chalk skills">
      <div className="skills-head">
        <h2 className="sec-title">Skills</h2>
        <p>Six areas I work in every week. Select one to see the tools behind it.</p>
      </div>
      <div className="skills-list">
        {SKILLS.map((s, i) => (
          <div key={s.name} className={`sk ${open === i ? "open" : ""}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span className="sk-name">{s.name}</span>
              <span className="sk-plus" aria-hidden="true" />
            </button>
            <div className="sk-body"><div><p className="sk-tech">{s.tech}</p><p>{s.note}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Works() {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(false);
  const prev = useRef(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;
    let raf = 0;
    const move = (e) => { pos.current.tx = e.clientX; pos.current.ty = e.clientY; };
    const loop = () => {
      const p = pos.current;
      const dx = p.tx - p.x;
      p.x += dx * 0.12; p.y += (p.ty - p.y) * 0.12;
      if (prev.current) prev.current.style.transform = `translate(${p.x + 36}px,${p.y - 130}px) rotate(${Math.max(-8, Math.min(8, dx * 0.05))}deg)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section id="works" className="sec ink">
      <h2 className="sec-title">Selected work</h2>
      <div className="wlist" onMouseLeave={() => setShown(false)}>
        {WORKS.map((w, i) => (
          <a key={w.title} className="wrow" href={w.url} target="_blank" rel="noreferrer noopener"
            onMouseEnter={() => { setActive(i); setShown(true); }}>
            <img className="wrow-img" src={w.shot} alt="" loading="lazy" decoding="async" />
            <span className="wrow-title">{w.title}</span>
            <span className="wrow-meta">
              <span className="wrow-desc">{w.description}</span>
              <span className="wrow-tech">{w.tech.join(", ")}</span>
            </span>
            <FiArrowUpRight className="wrow-go" />
          </a>
        ))}
      </div>
      <div ref={prev} className={`wprev ${shown ? "show" : ""}`} aria-hidden="true">
        {WORKS.map((w, i) => (
          <img key={w.title} src={w.shot} alt="" className={i === active ? "on" : ""} />
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const track = useRef(null);
  const drag = useRef({ on: false, x: 0, left: 0 });
  const down = (e) => { drag.current = { on: true, x: e.clientX, left: track.current.scrollLeft }; track.current.classList.add("drag"); };
  const move = (e) => { if (drag.current.on) track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x); };
  const up = () => { drag.current.on = false; track.current?.classList.remove("drag"); };
  return (
    <section id="reviews" className="sec mist">
      <h2 className="sec-title">What clients say</h2>
      <p className="sec-sub">Six verified Upwork reviews, all five stars. Drag to read.</p>
      <div className="rtrack" ref={track} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerLeave={up}>
        {REVIEWS.map((r, i) => (
          <article className={`rcard v${i % 3}`} key={r.title}>
            <div className="rhead">
              <div className="rstars" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((s) => <FiStar key={s} fill="currentColor" />)}</div>
              <span className="rsrc"><i /> Upwork</span>
            </div>
            <p className="rtext">{r.text}</p>
            <div className="rfoot">
              <strong>{r.author}</strong>
              <span>{r.title}</span>
              <small>{r.date}</small>
              {r.badges.length > 0 && <div className="rbadges">{r.badges.map((b) => <em key={b}>{b}</em>)}</div>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sec forest contact">
      <p className="contact-kicker">Available for new work</p>
      <h2 className="contact-big">Let's build something reliable.</h2>
      <Magnetic className="mail" href={`mailto:${EMAIL}`}><FiMail /> {EMAIL}</Magnetic>

      <div className="contact-grid">
        <div className="cal">
          <h3>Book a 30-minute call</h3>
          <div className="calendly-inline-widget" data-url="https://calendly.com/francelee594/30min?hide_gdpr_banner=1" />
        </div>
        <div className="contact-side">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" className="soc">
              <span className="soc-i">{s.icon}</span>
              <span><strong>{s.label}</strong><small>{s.detail}</small></span>
              <FiArrowUpRight />
            </a>
          ))}
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="soc"><span className="soc-i"><FiPhone /></span><span><strong>{PHONE}</strong><small>Call or message</small></span></a>
          <div className="soc static"><span className="soc-i"><FiMapPin /></span><span><strong>Cavite, Philippines</strong><small>Working with teams worldwide</small></span></div>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} France Lee. All rights reserved.</footer>
    </section>
  );
}

/* ---------------- App ---------------- */

function App() {
  const [ready, setReady] = useState(false);
  const [term, setTerm] = useState(false);
  const bar = useRef(null);

  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [ready]);

  useEffect(() => {
    let raf = 0;
    const upd = () => {
      raf = 0;
      const d = document.documentElement;
      const m = d.scrollHeight - d.clientHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${m > 0 ? window.scrollY / m : 0})`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(upd); };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") { e.preventDefault(); setTerm((t) => !t); }
      else if (e.key === "Escape") setTerm(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const s = document.createElement("script");
    s.id = "calendly-widget-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className={`app ${ready ? "ready" : ""}`}>
      <Preloader done={() => setReady(true)} />
      <div ref={bar} className="progress" />
      <Nav />
      {term && <Terminal onClose={() => setTerm(false)} />}
      <TerminalButton open={term} onClick={() => setTerm((t) => !t)} />
      <main>
        <Hero ready={ready} />
        <Marquee items={STACK_A} dir={-1} />
        <About />
        <Skills />
        <Marquee items={STACK_B} dir={1} />
        <Works />
        <Reviews />
        <Contact />
      </main>

      <style>{`
@import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Instrument+Sans:wght@400;500;600&display=swap");
:root{--forest:#16302b;--forest-2:#1f4a41;--teal:#1d5c4f;--ink:#0e1413;--chalk:#f4f1ea;--mist:#dce5d6;--flare:#e08a2e;--display:"Bricolage Grotesque",system-ui,sans-serif;--body:"Instrument Sans",system-ui,sans-serif;--pad:clamp(20px,5vw,72px)}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;background:var(--ink)}
body{font-family:var(--body);color:var(--ink);background:var(--chalk);-webkit-font-smoothing:antialiased;overflow-x:hidden}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
a{color:inherit;text-decoration:none}
ul{list-style:none}
:focus-visible{outline:3px solid var(--flare);outline-offset:3px}

/* load sequence */
.pre{position:fixed;inset:0;z-index:999;background:var(--ink);color:var(--chalk);display:flex;flex-direction:column;justify-content:flex-end;padding:var(--pad);transition:transform .9s cubic-bezier(.76,0,.24,1) .1s}
.ready .pre{transform:translateY(-100%)}
.pre-n{font-family:var(--display);font-weight:800;font-size:clamp(100px,26vw,380px);line-height:.8;letter-spacing:-.05em}
.pre-l{margin-top:18px;font-size:14px;opacity:.6}

.progress{position:fixed;top:0;left:0;right:0;height:3px;background:var(--flare);transform-origin:left;transform:scaleX(0);z-index:800}

/* nav */
.nav{position:absolute;top:0;left:0;right:0;z-index:700;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px var(--pad);color:var(--chalk);background:rgba(14,20,19,.78);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(244,241,234,.08)}
.nav-brand{display:flex;align-items:center;transition:transform .25s cubic-bezier(.2,.9,.3,1.2)}
.nav-brand img{display:block;height:38px;width:auto;object-fit:contain}
.nav-brand:hover{transform:scale(1.06)}
@media(max-width:520px){.nav-brand img{height:32px}}
.nav ul{display:flex;gap:6px}
.nav ul button{padding:8px 14px;border-radius:99px;font-size:14px;opacity:.65;transition:opacity .2s,background .2s,color .2s}
.nav ul button:hover{opacity:1}
.nav ul button.on{opacity:1;background:var(--chalk);color:var(--ink)}
.nav-cta{padding:9px 18px;border-radius:99px;font-size:14px;font-weight:600;border:1.5px solid rgba(244,241,234,.4);transition:background .25s,color .25s,border-color .25s}
.nav-cta:hover{background:var(--flare);border-color:var(--flare);color:var(--ink)}
@media(max-width:820px){.nav ul{display:none}}

/* terminal button (left, always visible) */
.term-fab{position:fixed;left:20px;bottom:20px;z-index:860;display:inline-flex;align-items:center;gap:10px;padding:12px 16px 12px 14px;border-radius:99px;background:var(--flare);color:var(--ink);font-weight:600;font-size:14px;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:transform .25s cubic-bezier(.2,.9,.3,1.2),background .25s}
.term-fab svg{font-size:18px}
.term-fab kbd{font:600 12px var(--body);border:1.5px solid rgba(14,20,19,.55);border-radius:6px;padding:0 7px;line-height:1.5}
.term-fab:hover{transform:translateY(-3px)}
.term-fab.is-open{background:var(--chalk)}
.term-fab:not(.is-open)::after{content:"";position:absolute;inset:0;border-radius:inherit;border:2px solid var(--flare);animation:fabping 2.4s ease-out infinite;pointer-events:none}
@keyframes fabping{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.35,1.7);opacity:0}}
@media(max-width:520px){.term-fab kbd{display:none}.term-fab{left:14px;bottom:14px}}

/* sections */
.sec{padding:clamp(90px,14vw,190px) var(--pad)}
.sec-title{font:700 clamp(40px,7vw,104px)/.95 var(--display);letter-spacing:-.04em;margin-bottom:clamp(36px,5vw,72px)}
.sec-sub{max-width:46ch;font-size:18px;line-height:1.5;margin:-40px 0 48px;opacity:.7}
.chalk{background:var(--chalk)}.ink{background:var(--ink);color:var(--chalk)}.mist{background:var(--mist)}.forest{background:var(--forest);color:var(--chalk)}

/* hero */
.hero{min-height:100vh;min-height:100svh;background:radial-gradient(60% 70% at 82% 45%,var(--forest-2) 0%,transparent 70%),var(--forest);color:var(--chalk);padding:92px var(--pad) 48px;display:flex;flex-direction:column;gap:24px;overflow:hidden}
.hero-top{display:flex;justify-content:space-between;align-items:center;font-size:14px;padding-top:18px}
.avail{display:inline-flex;align-items:center;gap:10px}
.avail i{width:9px;height:9px;border-radius:50%;background:#7dffb0;box-shadow:0 0 0 0 #7dffb0;animation:ping 2s infinite}
@keyframes ping{70%{box-shadow:0 0 0 10px transparent}100%{box-shadow:0 0 0 0 transparent}}
.clock{opacity:.75;font-variant-numeric:tabular-nums}

.hero-main{flex:1;display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,.65fr);gap:clamp(30px,5vw,80px);align-items:center}
.hero h1{font-family:var(--display);font-size:clamp(68px,11.5vw,190px);line-height:.86;letter-spacing:0;display:flex;flex-direction:column;margin-bottom:clamp(20px,3vw,36px)}
.hw{display:flex}
.hl{display:inline-block;overflow:hidden;padding:0 .04em .1em 0;margin:0 -.06em -.1em 0}
.hl span{display:inline-block;letter-spacing:0;font-variation-settings:"wght" 700;transform:translateY(110%);transition:font-variation-settings .35s ease-out}
.go .hl span{animation:rise 1s cubic-bezier(.2,.9,.2,1) both}
@keyframes rise{from{transform:translateY(110%)}to{transform:translateY(0)}}
.hero-sub{font:500 clamp(20px,2.3vw,32px)/1.2 var(--display);letter-spacing:-.02em;max-width:26ch;min-height:2.4em}
.caret{display:inline-block;width:3px;height:.9em;background:var(--flare);margin-left:4px;vertical-align:-.1em;animation:blink 1s steps(2) infinite}
@keyframes blink{50%{opacity:0}}
.hero-desc{max-width:52ch;line-height:1.65;opacity:.78;margin:14px 0 28px}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-block;padding:15px 26px;border-radius:99px;font-weight:600;font-size:15px;transition:background .25s,color .25s,border-color .25s}
.btn.solid{background:var(--chalk);color:var(--forest)}
.btn.solid:hover{background:var(--flare);color:var(--ink)}
.btn.line{border:1.5px solid rgba(244,241,234,.45)}
.btn.line:hover{border-color:var(--chalk);background:rgba(244,241,234,.08)}
.mag{display:inline-flex;transition:transform .35s cubic-bezier(.2,.9,.3,1.2),background .25s,color .25s,border-color .25s}

.portrait{position:relative;justify-self:end;width:min(100%,clamp(220px,28vw,420px))}
.portrait img{width:100%;aspect-ratio:4/5;object-fit:cover;object-position:center top;border-radius:999px 999px 24px 24px;display:block;background:var(--forest-2);box-shadow:0 30px 70px rgba(0,0,0,.35)}
.badge{position:absolute;left:-44px;bottom:12%;width:112px;height:112px;animation:spin 14s linear infinite;background:var(--flare);border-radius:50%;padding:4px}
.badge text{font:600 11px var(--body);fill:var(--ink);letter-spacing:.06em}
@keyframes spin{to{transform:rotate(360deg)}}
@media(max-width:860px){
  .hero-main{grid-template-columns:1fr;gap:28px}
  .portrait{order:-1;justify-self:start;width:170px}
  .badge{width:84px;height:84px;left:auto;right:-30px;bottom:6%}
  .hero h1{font-size:clamp(64px,19vw,120px)}
}

/* marquee */
.mq{overflow:hidden;background:var(--ink);color:var(--chalk);padding:20px 0;white-space:nowrap}
.mq-track{display:inline-flex;will-change:transform}
.mq span{display:inline-flex;align-items:center;gap:36px;padding-right:36px;font:600 clamp(26px,4vw,52px) var(--display);letter-spacing:-.03em}
.mq i{width:12px;height:12px;border-radius:50%;background:var(--flare)}

/* about */
.statement{font:600 clamp(26px,4.2vw,60px)/1.12 var(--display);letter-spacing:-.03em;max-width:24em}
.statement span{opacity:.16}

.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:clamp(56px,8vw,110px) 0}
.stat{display:flex;flex-direction:column;gap:20px;padding:28px;border-radius:26px;background:#fff;border:1px solid rgba(14,20,19,.08);transition:transform .4s cubic-bezier(.2,.9,.3,1.2),box-shadow .3s}
.stat:hover{transform:translateY(-6px);box-shadow:0 22px 50px rgba(14,20,19,.12)}
.stat-label{font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.6}
.stat-num{display:flex;align-items:flex-start;gap:4px;font:700 clamp(72px,9vw,132px)/.85 var(--display);letter-spacing:-.05em;color:var(--teal)}
.stat-num em{font-style:normal;color:var(--flare);font-size:.6em;line-height:1;margin-top:.04em;letter-spacing:0}
.stat-note{margin-top:auto;font-size:15px;line-height:1.5;opacity:.7;padding-top:18px;border-top:1px solid rgba(14,20,19,.12)}
.stat:first-child{background:var(--forest);color:var(--chalk);border-color:var(--forest)}
.stat:first-child .stat-num{color:var(--chalk)}
.stat:first-child .stat-note{border-top-color:rgba(244,241,234,.25)}
@media(max-width:860px){.stats{grid-template-columns:1fr}.stat{flex-direction:row;flex-wrap:wrap;align-items:flex-end;justify-content:space-between}.stat-label{width:100%}.stat-note{width:100%;margin-top:0}}

.exp h3{font:600 22px var(--display);margin-bottom:12px}
.exp-row{display:grid;grid-template-columns:220px 1fr auto;gap:20px;padding:22px 0;border-top:1px solid rgba(14,20,19,.18);align-items:baseline;transition:padding .3s}
.exp-row:last-child{border-bottom:1px solid rgba(14,20,19,.18)}
.exp-row:hover{padding-left:16px}
.exp-date{font-size:14px;opacity:.6}
.exp-role{font:600 clamp(20px,2.4vw,30px) var(--display);letter-spacing:-.02em}
.exp-co{opacity:.65}
@media(max-width:700px){.exp-row{grid-template-columns:1fr;gap:4px}}

/* skills */
.skills{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(30px,6vw,100px);padding-top:0}
.skills-head{position:sticky;top:110px;align-self:start;padding-top:40px}
.skills-head p{max-width:30ch;line-height:1.55;opacity:.7;font-size:17px}
.sk{border-top:1.5px solid var(--ink)}
.sk:last-child{border-bottom:1.5px solid var(--ink)}
.sk>button{width:100%;display:flex;justify-content:space-between;align-items:center;padding:24px 0;text-align:left}
.sk-name{font:700 clamp(26px,3.6vw,52px)/1 var(--display);letter-spacing:-.035em;transition:color .25s,transform .35s}
.sk:hover .sk-name,.sk.open .sk-name{color:var(--teal)}
.sk.open .sk-name{transform:translateX(10px)}
.sk-plus{position:relative;width:28px;height:28px;flex:none}
.sk-plus:before,.sk-plus:after{content:"";position:absolute;left:0;top:50%;width:100%;height:2.5px;background:currentColor;transition:transform .35s}
.sk-plus:after{transform:rotate(90deg)}
.sk.open .sk-plus:after{transform:rotate(0)}
.sk-body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s cubic-bezier(.2,.8,.2,1)}
.sk.open .sk-body{grid-template-rows:1fr}
.sk-body>div{overflow:hidden}
.sk-body p{padding:0 0 8px 10px;line-height:1.5;font-size:17px;opacity:.75}
.sk-body .sk-tech{font:600 20px var(--display);opacity:1;color:var(--teal)}
.sk-body>div>p:last-child{padding-bottom:26px}
@media(max-width:860px){.skills{grid-template-columns:1fr}.skills-head{position:static;padding-top:60px}}

/* works */
.ink .sec-title{color:var(--chalk)}
.wlist{border-top:1px solid rgba(244,241,234,.2)}
.wrow{position:relative;display:grid;grid-template-columns:1.25fr 1fr 40px;gap:28px;align-items:center;padding:30px 0;border-bottom:1px solid rgba(244,241,234,.2);transition:padding .4s cubic-bezier(.2,.8,.2,1),color .25s}
.wlist:hover .wrow{color:rgba(244,241,234,.28)}
.wlist .wrow:hover{color:var(--chalk);padding-left:28px}
.wrow-title{font:700 clamp(32px,5.6vw,84px)/.95 var(--display);letter-spacing:-.04em}
.wrow-meta{display:flex;flex-direction:column;gap:8px;font-size:14px;line-height:1.55}
.wrow-desc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.wrow-tech{color:var(--flare);font-weight:600}
.wlist:hover .wrow:not(:hover) .wrow-tech{color:inherit}
.wrow-go{font-size:30px;transition:transform .35s}
.wrow:hover .wrow-go{transform:translate(4px,-4px) rotate(0)}
.wrow-img{display:none}
.wprev{position:fixed;top:0;left:0;width:360px;height:240px;border-radius:14px;overflow:hidden;pointer-events:none;z-index:600;opacity:0;scale:.6;transition:opacity .25s,scale .4s cubic-bezier(.2,.9,.3,1.2);box-shadow:0 30px 70px rgba(0,0,0,.5)}
.wprev.show{opacity:1;scale:1}
.wprev img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;clip-path:inset(100% 0 0 0);transition:clip-path .5s cubic-bezier(.7,0,.2,1)}
.wprev img.on{clip-path:inset(0)}
@media(max-width:860px){
  .wprev{display:none}
  .wrow{grid-template-columns:1fr 32px;padding:26px 0}
  .wrow-img{display:block;grid-column:1/-1;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:10px}
  .wrow-meta{grid-column:1}
  .wlist:hover .wrow{color:inherit}
}

/* reviews */
.rtrack{display:flex;gap:18px;overflow-x:auto;margin:0 calc(var(--pad)*-1);padding:6px var(--pad) 30px;scroll-snap-type:x mandatory;scrollbar-width:none;align-items:stretch}
.rtrack::-webkit-scrollbar{display:none}
.rtrack.drag{scroll-snap-type:none;user-select:none}
.rcard{flex:none;scroll-snap-align:start;display:flex;flex-direction:column;justify-content:space-between;gap:30px;padding:30px;background:var(--chalk);transition:transform .4s cubic-bezier(.2,.9,.3,1.2)}
.rcard.v0{width:min(440px,84vw);border-radius:28px 28px 28px 4px}
.rcard.v1{width:min(380px,80vw);border-radius:4px 28px 28px 28px;background:var(--ink);color:var(--chalk)}
.rcard.v2{width:min(500px,86vw);border-radius:28px 4px 28px 28px;background:var(--forest);color:var(--chalk)}
.rstars{display:flex;gap:3px;color:var(--flare);font-size:17px}
.rtext{font:500 clamp(18px,1.7vw,23px)/1.4 var(--display);letter-spacing:-.015em}
.rfoot{display:flex;flex-direction:column;gap:3px;font-size:14px}
.rfoot strong{font-size:16px}
.rfoot span,.rfoot small{opacity:.65}
.rbadges{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.rbadges em{font-style:normal;font-size:12px;padding:5px 11px;border-radius:99px;border:1px solid currentColor;opacity:.8}

/* contact */
.contact{padding-bottom:36px}
.contact-kicker{font-size:16px;opacity:.75;margin-bottom:18px}
.contact-big{font:700 clamp(46px,10.5vw,170px)/.88 var(--display);letter-spacing:-.05em;max-width:9em;margin-bottom:46px}
.mail{display:inline-flex;align-items:center;gap:14px;padding:18px 32px;border-radius:99px;background:var(--chalk);color:var(--forest);font:600 clamp(16px,2.2vw,28px) var(--display);transition:background .25s,color .25s,transform .35s cubic-bezier(.2,.9,.3,1.2)}
.mail:hover{background:var(--flare);color:var(--ink)}
.contact-grid{display:grid;grid-template-columns:1.3fr .8fr;gap:22px;margin:clamp(60px,9vw,120px) 0 70px;align-items:start}
.cal{background:#fff;color:var(--ink);border-radius:26px;padding:26px}
.cal h3{font:700 24px var(--display);margin-bottom:14px;letter-spacing:-.02em}
.calendly-inline-widget{min-width:280px;height:660px;border-radius:12px;overflow:hidden}
.contact-side{display:flex;flex-direction:column;gap:12px}
.soc{display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center;padding:20px 22px;border-radius:20px;border:1.5px solid rgba(244,241,234,.28);transition:background .25s,color .25s,border-color .25s}
a.soc:hover{background:var(--chalk);color:var(--forest);border-color:var(--chalk)}
.soc-i{font-size:22px;display:grid}
.soc strong{display:block;font:600 18px var(--display)}
.soc small{opacity:.7;font-size:13px}
footer{padding-top:24px;border-top:1px solid rgba(244,241,234,.25);font-size:13px;opacity:.7}
@media(max-width:900px){.contact-grid{grid-template-columns:1fr}.calendly-inline-widget{height:720px}}

/* terminal window (sits above the button) */
.term{position:fixed;left:20px;bottom:80px;z-index:850;width:min(480px,calc(100vw - 40px));height:min(420px,62vh);display:flex;flex-direction:column;background:var(--ink);color:var(--chalk);border-radius:18px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5);font:13px/1.65 ui-monospace,Menlo,Consolas,monospace;animation:pop .3s cubic-bezier(.2,.9,.3,1.2)}
@keyframes pop{from{opacity:0;transform:translateY(16px) scale(.97)}}
.term-bar{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:var(--forest);font-weight:600}
.term-bar button{display:grid;font-size:17px}
.term-body{flex:1;overflow:auto;padding:14px 16px}
.term b{color:var(--flare)}
.term-dim{opacity:.55;margin-bottom:8px}
.term-out{white-space:pre-wrap;word-break:break-word;opacity:.88}
.term-row{display:flex;gap:8px}
.term-row input{flex:1;background:none;border:0;outline:0;color:inherit;font:inherit;caret-color:var(--flare)}
@media(max-width:520px){.term{left:14px;bottom:70px;width:calc(100vw - 28px)}}

@media(max-width:820px){.progress{height:2px}}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*:before,*:after{animation:none!important;transition-duration:.01ms!important}
  .hl span{transform:none}
  .pre{display:none}
  .statement span{opacity:1!important}
}
      `}</style>
    </div>
  );
}

export default App;