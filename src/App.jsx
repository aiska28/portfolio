import { useState, useEffect } from 'react'
import { profile, projects, skills } from './data.js'

const links = [
  ['about', 'About'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact']
]

function Header() {
  return (
    <header className="nav">
      <a className="brand" href="#top">Aiska Oca Amalia</a>
      <nav aria-label="Main">
        {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div>
        <p className="eyebrow">Available for internship</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#projects">See my projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
        <ul className="stats">
          <li><b>{projects.length}</b><span>Projects</span></li>
          <li><b>3.79</b><span>GPA / 4.00</span></li>
          <li><b>3</b><span>Team projects</span></li>
        </ul>
      </div>
      <div className="photo"><img src={profile.photo} alt={`Portrait of ${profile.name}`} width="360" height="360" /></div>
    </section>
  )
}

function About() {
  return (
    <section className="wrap section" id="about">
      <div className="about-card">
        <div>
          <p className="eyebrow">About</p>
          <h2>Between design and code</h2>
          <p>I am a Business Information Systems student at Politeknik Negeri Malang. I plan a screen in Figma, test the flow in a prototype, then build it as working pages, so the finished product matches the design.</p>
        </div>
        <dl className="edu">
          <dt>Politeknik Negeri Malang</dt>
          <dd>Business Information Systems</dd>
          <dd>2024 – present · GPA 3.79 / 4.00</dd>
        </dl>
      </div>
    </section>
  )
}

function ProjectCard({ p, i }) {
  return (
    <article
      className={`card reveal ${p.featured ? 'feat' : ''}`}
      style={{ '--tint': `var(--${p.tint})`, '--d': `${(i % 3) * 100}ms` }}
    >
      <figure className="shot"><img src={p.img} alt={`Screenshot of ${p.title}`} loading="lazy" /></figure>
      <div className="body">
        <p className="meta">{p.meta}</p>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <p className="role-l"><b>My role</b> {p.role}</p>
        <ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="wrap section" id="projects">
      <p className="eyebrow">Selected work</p>
      <h2>Projects</h2>
      <div className="grid">{projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}</div>
    </section>
  )
}

function Skills() {
  return (
    <section className="wrap section" id="skills">
      <p className="eyebrow">Toolbox</p>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map(s => (
          <div className="skill" key={s.title} style={{ '--tint': `var(--${s.tint})` }}>
            <h3>{s.title}</h3>
            <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function CopyButton({ text, label }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1800) } catch { /* ignore */ }
  }
  return <button className="btn small" type="button" onClick={copy}>{done ? 'Copied' : label}</button>
}

function Contact() {
  return (
    <section className="wrap section" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s work together</h2>
        <p>I am open to internships in UI/UX design and front-end development. Write to me and I will reply.</p>
        <div className="contact-list">
          <div><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a><CopyButton text={profile.email} label="Copy email" /></div>
          <div><span>Phone</span><b>{profile.phone}</b><CopyButton text={profile.phone} label="Copy number" /></div>
          <div><span>GitHub</span><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/aiska28</a></div>
          <div><span>LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/aiska-oca-amalia</a></div>
          <div><span>Location</span><b>{profile.location}</b></div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    els.forEach(e => io.observe(e))
    return () => io.disconnect()
  }, [])
  
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header />
      <main>
        <Hero /><About /><Projects /><Skills /><Contact />
      </main>
      <footer className="foot">© 2026 {profile.name} · Business Information Systems, Politeknik Negeri Malang</footer>
    </>
  )
}
