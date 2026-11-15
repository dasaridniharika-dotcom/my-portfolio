"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react"

const projects = [
  {
    number: "01",
    title: "Webhook Delivery Engine",
    category: "BACKEND · EVENT PROCESSING",
    description:
      "A reliable FastAPI service for real-time event notifications, with background processing, scheduled retries, HMAC-SHA256 verification, and SQLite delivery logs.",
    stack: ["Python", "FastAPI", "React.js", "SQLite", "HMAC-SHA256"],
    features: ["Background delivery processing", "Automatic retries after 30 seconds, 5 minutes, and 30 minutes", "HMAC-SHA256 signature verification", "SQLite delivery history and logs"],
    image: "/projects/crop-sense.png",
    alt: "Illustrative dark dashboard showing an event pipeline, endpoint delivery, and retry paths",
    repository: "",
    liveDemo: "",
  },
  {
    number: "02",
    title: "Personal Portfolio Website",
    category: "FRONTEND · PERSONAL WEBSITE",
    description:
      "A responsive personal website designed to bring academic background, technical skills, projects, certifications, and career interests together.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive desktop and mobile layouts", "Interactive elements using JavaScript", "Project showcase and organized academic information", "Modern user interface"],
    image: "/projects/research-assistant.png",
    alt: "Conceptual desktop and mobile portfolio mockups, not an application screenshot",
    repository: "",
    liveDemo: "",
  },
  {
    number: "03",
    title: "Calculator Application",
    category: "FRONTEND · INTERACTION",
    description:
      "A clean, responsive calculator built with HTML, CSS, and JavaScript for performing everyday arithmetic through a straightforward interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: ["Basic arithmetic operations", "Interactive calculator buttons", "Dynamic result display", "Responsive user interface"],
    image: "/projects/calculator.png",
    alt: "Illustrative dark calculator interface with numeric keys and operator buttons",
    repository: "",
    liveDemo: "",
  },
]

const skillGroups = [
  { name: "Programming languages", items: "C · C++ · JavaScript · Python" },
  { name: "Frameworks", items: "React.js · FastAPI · Django · Django REST Framework" },
  { name: "Databases", items: "MySQL · PostgreSQL · SQLite" },
  { name: "Developer tools", items: "Git · GitHub · VS Code · Figma · Cisco Packet Tracer" },
  { name: "Core subjects", items: "Data Structures & Algorithms · DBMS · Computer Networks · Object-Oriented Programming" },
  { name: "Soft skills", items: "Problem-Solving · Time Management · Teamwork · Collaboration" },
]

const certifications = [
  { title: "Python Fundamentals", issuer: "Infosys Springboard", date: "July 2026" },
  { title: "Introduction to Data Science", issuer: "Infosys Springboard", date: "March 2026" },
  { title: "C++ Programming", issuer: "Saylor Academy", date: "January 2026" },
]

const experiences = [
  {
    date: "AUG 2026",
    title: "Personality Development Session",
    copy: "Guided 100+ students from Classes V–X in self-introduction and effective body language.",
  },
  {
    date: "JUL 2026",
    title: "Community Development Programme",
    copy: "Led educational and practice sessions for more than 100 school students.",
  },
  {
    date: "MAR 2026",
    title: "NSS Volunteer",
    copy: "Collaborated with 100+ volunteers during a community-focused NSS camp.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  )
}

function Navigation({ light, onThemeToggle }: { light: boolean; onThemeToggle: () => void }) {
  const [open, setOpen] = useState(false)
  const links = [
    ["About", "#about"],
    ["Skills", "#background"],
    ["Projects", "#work"],
    ["Education", "#background"],
    ["Certifications", "#certifications"],
    ["Activities", "#activities"],
    ["Contact", "#contact"],
  ]

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Niharika, back to top">DN<span>.</span></a>
      <button className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav id="main-navigation" className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {links.map(([label, href]) => <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${light ? "dark" : "light"} theme`} title={`Switch to ${light ? "dark" : "light"} theme`}>
          {light ? <Moon size={15} /> : <Sun size={15} />}
        </button>
        <a className="nav-contact" href="/Niharika-Resume.pdf" download="Niharika-Resume.pdf" onClick={() => setOpen(false)}>Download résumé <ArrowDown size={14} /></a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
        <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE UNDERGRADUATE <span className="eyebrow-divider">/</span> DEVELOPER
        </p>
        <h1>Making the<br />complex feel <em>simple.</em></h1>
        <p className="hero-intro">Hi, I&apos;m Niharika — a developer who likes building useful things, asking better questions, and getting the details right.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
          <a className="text-link" href="/Niharika-Resume.pdf" download="Niharika-Resume.pdf">Download résumé <ArrowDown size={15} /></a>
        </div>
        <div className="hero-meta">
          <span><span className="status-dot" /> OPEN TO INTERNSHIPS & COLLABORATION</span>
          <span>BASED IN PHAGWARA, INDIA</span>
        </div>
      </motion.div>
      <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <div className="portrait-frame">
          <Image src="/image.jpg" alt="Portrait of Dasari Niharika" fill priority sizes="(max-width: 720px) 80vw, 40vw" className="hero-portrait" />
        </div>
        <div className="portrait-caption"><span>FIG. 01</span><span>CURIOUS BY NATURE</span><span>© 2026</span></div>
        <div className="portrait-stamp" aria-hidden="true">GOOD<br />THINGS<br /><i>TAKE</i><br />THOUGHT.</div>
      </motion.div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><ArrowDown size={17} /><span>SCROLL TO DISCOVER</span></a>
    </section>
  )
}

function About() {
  return (
    <section className="about-section section-pad" id="about">
      <div className="about-heading">
        <SectionLabel index="01">A LITTLE ABOUT ME</SectionLabel>
        <h2>Curiosity is a<br />pretty good <em>compass.</em></h2>
      </div>
      <div className="about-body">
        <p className="about-lede">I&apos;m a Computer Science and Engineering student at Lovely Professional University, Punjab, passionate about full-stack development, backend engineering, and artificial intelligence.</p>
        <div className="about-detail">
          <p>I enjoy developing practical software, taking part in technical and community activities, and exploring emerging technologies. I&apos;m also an active AWS Builder community user, currently learning cloud fundamentals and infrastructure.</p>
          <p>I&apos;m continuously growing my technical knowledge, with a goal of building innovative, scalable, and meaningful software for real-world needs.</p>
          <a className="text-link" href="/Niharika-Resume.pdf" download="Niharika-Resume.pdf">Download my résumé <ArrowDown size={15} /></a>
        </div>
      </div>
      <div className="about-footnote"><span>01 / THE SHORT VERSION</span><span>LEARNING BY MAKING, ALWAYS.</span></div>
    </section>
  )
}

function Work() {
  return (
    <section className="work-section section-pad" id="work">
      <div className="section-topline">
        <div><SectionLabel index="02">SELECTED WORK</SectionLabel><h2>Small ideas,<br /><em>real momentum.</em></h2></div>
        <p className="section-aside">A few things I&apos;ve made, learned from, and would happily make better.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.article className="project-card" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.06 }}>
            <div className="project-image-link">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 720px) 100vw, 40vw" className="project-image" />
              <span className="illustration-label">ILLUSTRATIVE MOCKUP</span>
            </div>
            <div className="project-info">
              <div className="project-overline"><span>{project.number}</span><span>{project.category}</span></div>
              <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight className="project-arrow" size={20} aria-hidden="true" /></div>
              <p>{project.description}</p>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <details className="project-details">
                <summary>View project details <ArrowDownRight size={14} /></summary>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="project-links">
                  {project.repository ? <a href={project.repository} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={13} /></a> : <span>Repository link to be added</span>}
                  {project.liveDemo ? <a href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} /></a> : <span>Live demo link to be added</span>}
                </div>
              </details>
            </div>
          </motion.article>
        ))}
      </div>
      <a className="all-projects-link" href="https://github.com/dasaridniharika-dotcom" target="_blank" rel="noreferrer">More experiments on GitHub <ArrowUpRight size={16} /></a>
    </section>
  )
}

function Background() {
  return (
    <section className="background-section section-pad" id="background">
      <div className="section-topline">
        <div><SectionLabel index="03">THE FOUNDATIONS</SectionLabel><h2>In progress,<br /><em>on purpose.</em></h2></div>
        <p className="section-aside">A solid foundation is never finished. Here&apos;s what I&apos;m building on.</p>
      </div>
      <div className="background-grid">
        <div className="skills-panel">
          <div className="panel-label"><Code2 size={16} /><span>MY TOOLKIT</span></div>
          {skillGroups.map((group, index) => <div className="skill-row" key={group.name}><span className="skill-index">0{index + 1}</span><div><h3>{group.name}</h3><p>{group.items}</p></div></div>)}
          <p className="skills-note">Always learning something new.</p>
        </div>
        <div className="education-panel" id="education">
          <div className="panel-label"><span className="education-star">✳</span><span>EDUCATION</span></div>
          <div className="education-entry"><span className="education-date">AUG 2025 — PRESENT · EXPECTED 2029</span><h3>Bachelor of Technology, Computer Science & Engineering</h3><p>Lovely Professional University <span>·</span> Phagwara, Punjab</p><div className="education-score"><span>CGPA</span><strong>7.4</strong></div></div>
          <div className="education-entry"><span className="education-date">JUN 2023 — MAR 2025</span><h3>Intermediate, MPC</h3><p>Narayana Junior College <span>·</span> Tirupati, Andhra Pradesh</p><div className="education-score"><span>CLASS XII</span><strong>98.4%</strong></div></div>
          <div className="education-entry"><span className="education-date">JUN 2022 — MAR 2023</span><h3>Class X</h3><p>Oll High School <span>·</span> Palamaner, Andhra Pradesh</p><div className="education-score"><span>CLASS X</span><strong>92.5%</strong></div></div>
        </div>
      </div>
    </section>
  )
}

function Beyond() {
  return (
    <section className="beyond-section section-pad" id="activities">
      <div className="beyond-head"><SectionLabel index="04">BEYOND THE SCREEN</SectionLabel><h2>People are part<br />of the <em>process.</em></h2></div>
      <div className="activity-list">
        {experiences.map((item) => <article className="activity-row" key={item.title}><span className="activity-date">{item.date}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowUpRight size={17} aria-hidden="true" /></article>)}
      </div>
      <div className="certifications-block" id="certifications">
        <div className="panel-label"><span className="certificate-mark">✳</span><span>CERTIFICATIONS</span></div>
        <div className="certification-grid">
          {certifications.map((certificate) => <article className="certification-card" key={certificate.title}>
            <span className="mini-label">{certificate.date.toUpperCase()}</span>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
            <span className="certificate-link-pending">Certificate link to be added</span>
          </article>)}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-top">
        <SectionLabel index="05">HAVE SOMETHING IN MIND?</SectionLabel>
        <p>Good conversations<br />make <em>good work.</em></p>
        <a className="contact-email" href="mailto:dasaridniharika@gmail.com">Let&apos;s talk <ArrowUpRight size={22} /></a>
        <p className="contact-note">Have an idea or opportunity? Let&apos;s connect and build something meaningful together.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-links">
          <a href="mailto:dasaridniharika@gmail.com"><Mail size={16} /><span>dasaridniharika@gmail.com</span><ArrowUpRight size={13} /></a>
          <a href="https://github.com/dasaridniharika-dotcom" target="_blank" rel="noreferrer"><Github size={16} /><span>GitHub</span><ArrowUpRight size={13} /></a>
          <a href="https://www.linkedin.com/in/d-niharika-235504382" target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LinkedIn</span><ArrowUpRight size={13} /></a>
        </div>
        <form className="contact-form" action="mailto:dasaridniharika@gmail.com" method="get" encType="text/plain">
          <label>Name<input name="name" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="body" rows={4} required /></label>
          <button className="button button-dark" type="submit">Open email to send <ArrowUpRight size={15} /></button>
          <p className="form-note">This form opens your email app with the message details — it does not submit to a server.</p>
        </form>
      </div>
      <div className="footer-bar"><a className="wordmark" href="#top">DN<span>.</span></a><span>DASARI NIHARIKA · 2026</span><div className="footer-socials"><a href="https://github.com/dasaridniharika-dotcom" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://www.linkedin.com/in/d-niharika-235504382" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:dasaridniharika@gmail.com" aria-label="Email"><Mail size={17} /></a></div><a className="back-to-top" href="#top">BACK TO TOP <ArrowRight size={14} /></a></div>
    </footer>
  )
}

export default function Portfolio() {
  const [light, setLight] = useState(false)
  return <main className={light ? "portfolio light-theme" : "portfolio"}><Navigation light={light} onThemeToggle={() => setLight(!light)} /><Hero /><About /><Work /><Background /><Beyond /><Contact /></main>
}
