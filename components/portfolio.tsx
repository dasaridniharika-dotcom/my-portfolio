"use client"

import { useEffect, useRef, useState } from "react"
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
  { number: "01", title: "Nexora AI", subtitle: "AI-Powered Customer Support & Business Operations Platform.", category: "AI & BUSINESS OPERATIONS", description: "AI-powered customer support and business operations platform with AI-assisted workflows, workspace management and team collaboration.", stack: ["Python", "FastAPI", "React.js", "Switch", "Mattermost", "AI Agents"], features: ["AI-assisted workflows", "Workspace management", "Team collaboration"], image: "/projects/nexora-ai.png", alt: "Illustrative AI business operations dashboard with workflow automation and team collaboration", repository: "", liveDemo: "" },
  { number: "02", title: "Webhook Delivery Engine", subtitle: "Reliable Event-Driven Webhook Processing System.", category: "BACKEND · EVENT PROCESSING", description: "Reliable event-driven webhook processing system with background processing, automatic retries, HMAC-SHA256 signatures and SQLite delivery logs.", stack: ["Python", "FastAPI", "React.js", "SQLite", "HMAC-SHA256"], features: ["Background processing", "Automatic retries", "HMAC-SHA256 signatures", "SQLite delivery logs"], image: "/projects/webhook-engine.png", alt: "Illustrative webhook monitoring dashboard with API requests, event delivery and retry statuses", repository: "", liveDemo: "" },
  { number: "03", title: "StudyFlow AI", subtitle: "AI-Powered Student Study Planning Platform.", category: "AI · STUDENT TOOLS", description: "Student study planning platform designed to organize uploaded syllabi, create topic checklists and generate structured study plans.", stack: ["JavaScript", "HTML", "CSS", "Supabase"], features: ["Syllabus organization", "Topic checklists", "Structured study plans"], image: "/projects/studyflow-ai.png", alt: "Illustrative student dashboard for syllabus organization and study planning", repository: "", liveDemo: "" },
  { number: "04", title: "Soothely – Student Companion", subtitle: "AI-Powered Emotional Support & Personal Growth Companion.", category: "AI · WELLBEING", description: "AI-powered emotional support and personal growth companion designed for students.", stack: ["TypeScript"], features: ["Emotional support", "Personal growth companion"], image: "/projects/soothely.png", alt: "Illustrative student companion application with a calming supportive interface", repository: "", liveDemo: "" },
  { number: "05", title: "Personal Portfolio Website", subtitle: "Personal Profile and Skills Showcase.", category: "FRONTEND · PERSONAL WEBSITE", description: "Responsive personal website showcasing academic background, technical skills, projects and certifications.", stack: ["HTML", "CSS", "JavaScript"], features: ["Responsive personal website", "Academic background and skills", "Projects and certifications"], image: "/projects/portfolio-preview.png", alt: "Illustrative desktop and mobile portfolio website mockup", repository: "", liveDemo: "" },
  { number: "06", title: "Calculator Application", subtitle: "Interactive Calculator Using Web Technologies.", category: "FRONTEND · INTERACTION", description: "Interactive calculator application built using HTML, CSS and JavaScript.", stack: ["HTML", "CSS", "JavaScript"], features: ["Interactive calculator", "HTML, CSS and JavaScript"], image: "/projects/calculator-app.png", alt: "Illustrative calculator interface with numeric buttons and arithmetic operators", repository: "", liveDemo: "" },
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
        <a className="nav-contact" href="/Niharika-Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>View CV <ArrowUpRight size={14} /></a>
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
          <a className="text-link" href="/Niharika-Resume.pdf" target="_blank" rel="noreferrer" data-magnetic>View my CV <ArrowUpRight size={15} /></a>
        </div>
        <div className="hero-meta">
          <span><span className="status-dot" /> OPEN TO INTERNSHIPS & COLLABORATION</span>
          <span>BASED IN PHAGWARA, INDIA</span>
        </div>
      </motion.div>
      <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        <motion.div className="portrait-frame" whileHover={{ rotate: 360, scale: 1.04 }} transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}>
          <Image src="/image.jpg" alt="Portrait of Dasari Niharika" fill priority sizes="(max-width: 720px) 80vw, 40vw" className="hero-portrait" />
        </motion.div>
        <div className="portrait-caption"><span>FIG. 01</span><span>CURIOUS BY NATURE</span><span>© 2026</span></div>
        <div className="portrait-stamp" aria-hidden="true">GOOD<br />THINGS<br /><i>TAKE</i><br />THOUGHT.</div>
      </motion.div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><ArrowDown size={17} /><span>SCROLL TO DISCOVER</span></a>
    </section>
  )
}

function About() {
  const aboutCards = [
    ["EDUCATION", "B.Tech CSE", "Lovely Professional University"],
    ["DEVELOPMENT", "Full Stack & Backend", "Building practical software"],
    ["EXPLORATION", "AI & Cloud", "Emerging technologies"],
    ["COMMUNITY", "AWS Builder", "Hackathons & collaboration"],
  ]
  return (
    <section className="about-section section-pad" id="about">
      <div className="section-label"><span>01</span><span className="section-label-line" /><span>A LITTLE ABOUT ME</span></div>
      <div className="about-premium-grid">
        <div className="about-visual">
          <div className="about-orbit" aria-hidden="true" />
          <motion.div className="about-portrait" whileHover={{ rotate: 360, scale: 1.04 }} transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}><Image src="/image.jpg" alt="Portrait of Dasari Niharika" fill sizes="(max-width: 700px) 70vw, 34vw" className="about-portrait-image" /></motion.div>
          <span className="about-badge about-badge-top">Computer Science Undergraduate</span>
          <span className="about-badge about-badge-bottom">AWS Builder Community</span>
        </div>
        <div className="about-copy">
          <h2>More Than Just Code — I&apos;m a <em>Builder, Learner &amp; Problem Solver.</em></h2>
          <p>Hi, I&apos;m Dasari Niharika, a Computer Science and Engineering student at Lovely Professional University, Punjab.</p>
          <p>I&apos;m passionate about transforming ideas into practical digital solutions. My interests include Full Stack Development, Backend Engineering, Artificial Intelligence and emerging technologies.</p>
          <p>I enjoy developing applications, exploring new technologies, participating in hackathons and solving real-world problems through programming.</p>
          <p>I&apos;m also an active AWS Builder community user, currently learning AWS cloud technologies, cloud computing fundamentals and cloud infrastructure. I&apos;m interested in understanding how modern applications are developed, deployed and scaled using cloud technologies.</p>
          <p>Beyond coding, I enjoy collaborating on technical projects, learning continuously and exploring innovative ideas.</p>
          <p>My goal is to become a skilled software engineer who builds meaningful, scalable and impactful technology solutions.</p>
          <div className="about-info-grid">{aboutCards.map(([label, title, subtitle]) => <article className="about-info-card" key={label}><span>{label}</span><strong>{title}</strong><small>{subtitle}</small></article>)}</div>
          <div className="exploring-panel"><span className="exploring-label">CURRENTLY EXPLORING</span><div>{["AWS Cloud Computing", "Backend Engineering", "AI-powered applications", "Full Stack Development"].map((item) => <span key={item}>{item}</span>)}</div></div>
          <a className="button button-dark about-cv-button" href="/Niharika-Resume.pdf" target="_blank" rel="noreferrer" data-magnetic>View My CV <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="about-footnote"><span>01 / THE SHORT VERSION</span><span>LEARNING BY MAKING, ALWAYS.</span></div>
    </section>
  )
}

function Work() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const visibleProjects = projects
  return (
    <section className="work-section section-pad" id="work">
      <div className="section-topline">
        <div><SectionLabel index="02">SELECTED WORK</SectionLabel><h2>Small ideas,<br /><em>real momentum.</em></h2></div>
        <p className="section-aside">A selection of six projects across AI, backend systems and web development.</p>
      </div>
      <p className="project-count" aria-live="polite">Showing all {visibleProjects.length} projects</p>
      <div className="project-list">
        {visibleProjects.map((project, index) => (
          <motion.article className="project-card" key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }} variants={fadeUp} transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}>
            <button className="project-image-link" type="button" onClick={() => setSelectedProject(project)} aria-label={`View details for ${project.title}`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" className="project-image" />
              <span className="illustration-label">ILLUSTRATIVE PREVIEW</span>
            </button>
            <div className="project-info">
              <div className="project-overline"><span>{project.number}</span><span>{project.category}</span></div>
              <div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight className="project-arrow" size={20} aria-hidden="true" /></div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="project-card-actions"><button type="button" onClick={() => setSelectedProject(project)}>View Details <ArrowUpRight size={13} /></button>{project.repository ? <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`}><Github size={14} /> GitHub Repository</a> : <button type="button" className="link-placeholder" disabled title="Add a repository URL to enable this link"><Github size={14} /> GitHub Repository</button>}{project.liveDemo ? <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={13} /></a> : <button type="button" className="link-placeholder" disabled title="Add a live demo URL to enable this link">Live Demo <ArrowUpRight size={13} /></button>}</div>
            </div>
          </motion.article>
        ))}
      </div>
      {selectedProject && <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null) }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={19} /></button><div className="modal-image"><Image src={selectedProject.image} alt={selectedProject.alt} fill sizes="(max-width: 700px) 90vw, 720px" /></div><div className="modal-content"><span className="mini-label">{selectedProject.category}</span><h3 id="project-modal-title">{selectedProject.title}</h3><p className="project-subtitle">{selectedProject.subtitle}</p><p>{selectedProject.description}</p><h4>Features</h4><ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><h4>Technology</h4><div className="tag-list">{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links modal-links">{selectedProject.repository ? <a href={selectedProject.repository} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={13} /></a> : <span>Repository URL placeholder</span>}{selectedProject.liveDemo ? <a href={selectedProject.liveDemo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} /></a> : <span>Live demo URL placeholder</span>}</div></div></section></div>}
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

function CustomCursor() {
  const dotRef = useRef<HTMLSpanElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const touchDevice = window.matchMedia("(hover: none), (pointer: coarse)")
    if (reducedMotion.matches || touchDevice.matches) return

    let targetX = 0
    let targetY = 0
    let ringX = 0
    let ringY = 0
    let frame = 0
    let activeMagnetic: HTMLElement | null = null
    const animateRing = () => {
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(animateRing)
    }
    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
        dotRef.current.classList.add("is-visible")
      }
      ringRef.current?.classList.add("is-visible")
      const target = event.target instanceof Element ? event.target.closest("a, button, [role='button'], input, textarea") : null
      ringRef.current?.classList.toggle("is-hovering", Boolean(target))
      const magnetic = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-magnetic]") : null
      if (activeMagnetic && activeMagnetic !== magnetic) activeMagnetic.style.translate = ""
      activeMagnetic = magnetic
      if (magnetic) {
        const bounds = magnetic.getBoundingClientRect()
        magnetic.style.translate = `${(event.clientX - bounds.left - bounds.width / 2) * 0.12}px ${(event.clientY - bounds.top - bounds.height / 2) * 0.12}px`
      }
    }
    const onPointerLeave = () => {
      dotRef.current?.classList.remove("is-visible")
      ringRef.current?.classList.remove("is-visible", "is-hovering")
      if (activeMagnetic) activeMagnetic.style.translate = ""
      activeMagnetic = null
    }
    window.addEventListener("pointermove", onPointerMove)
    document.documentElement.addEventListener("pointerleave", onPointerLeave)
    frame = window.requestAnimationFrame(animateRing)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onPointerMove)
      document.documentElement.removeEventListener("pointerleave", onPointerLeave)
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => { element.style.translate = "" })
    }
  }, [])

  return <><span className="custom-cursor-dot" ref={dotRef} aria-hidden="true" /><span className="custom-cursor-ring" ref={ringRef} aria-hidden="true" /></>
}

export default function Portfolio() {
  const [light, setLight] = useState(false)
  return <main className={light ? "portfolio light-theme" : "portfolio"}><CustomCursor /><Navigation light={light} onThemeToggle={() => setLight(!light)} /><Hero /><About /><Work /><Background /><Beyond /><Contact /></main>
}
