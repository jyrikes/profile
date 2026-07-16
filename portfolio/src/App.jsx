import { useEffect, useState } from 'react'
import { links, skills, industrialProjects, evidenceProjects, researchCases, publications } from './data.js'
import { ArrowIcon, ExternalIcon, GithubIcon, SectionHeading, ActionLinks } from './components.jsx'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="José Yrikes home">
          <span className="brand-mark">JY</span>
          <span className="brand-copy">
            <strong>José Yrikes</strong>
            <small>Software Developer</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Industrial work</a>
          <a href="#evidence" onClick={closeMenu}>Evidence</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="/profile/skills-game.html" target="_blank" rel="noreferrer">Skills Quest</a>
          <a href={links.orcid} target="_blank" rel="noreferrer">ORCID</a>
          <a className="nav-cta" href={links.resume} download="Jose_Yrikes_Detailed_English_CV.html">
            Download CV <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-content">
            <div className="availability"><span /> Open to remote freelance and contract work</div>
            <p className="hero-kicker">Software Developer · Computer Engineering Student · Brazil / Remote</p>
            <h1>
              I build software where
              <em> data, devices and intelligent systems </em>
              meet.
            </h1>
            <p className="hero-lead">
              Backend engineering, industrial systems, AI, computer vision and open-source developer tooling — supported by public code, published packages, technical reports and reproducible experiments.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#evidence">
                Review public evidence <ArrowIcon />
              </a>
              <a className="button button-secondary" href={links.github} target="_blank" rel="noreferrer">
                <GithubIcon /> GitHub
              </a>
              <a className="button button-secondary" href="/profile/skills-game.html" target="_blank" rel="noreferrer">
                🎮 Skills Quest <ArrowIcon />
              </a>
              <a className="button button-secondary resume-button" href={links.resume} download="Jose_Yrikes_Detailed_English_CV.html">
                Download detailed English CV <ArrowIcon />
              </a>
            </div>
            <div className="hero-links" aria-label="Professional links">
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={links.orcid} target="_blank" rel="noreferrer">ORCID</a>
              <a href={links.quantumPypi} target="_blank" rel="noreferrer">quantum-cq on PyPI</a>
              <a href={links.notebookuxPypi} target="_blank" rel="noreferrer">NotebookUX on PyPI</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Core profile">
            <div className="panel-terminal">
              <div className="terminal-header">
                <div><i /><i /><i /></div>
                <span>evidence.json</span>
              </div>
              <pre>{`{
  "role": "Software Developer",
  "degree": "Computer Engineering, 2026",
  "public_packages": 2,
  "industrial_cases": 3,
  "research": [
    "Computer vision",
    "Quantum software",
    "Applied machine learning"
  ],
  "status": "Open to collaborate"
}`}</pre>
            </div>
            <div className="panel-summary">
              <div><strong>2 packages</strong><span>published on PyPI</span></div>
              <div><strong>3 cases</strong><span>industrial systems</span></div>
              <div><strong>Research</strong><span>public + institutional</span></div>
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Portfolio evidence summary">
          <div><strong>Public code</strong><span>GitHub repositories and documentation</span></div>
          <div><strong>Published artifacts</strong><span>quantum-cq and NotebookUX on PyPI</span></div>
          <div><strong>Research outputs</strong><span>technical report, article and experiments</span></div>
          <div><strong>Industrial delivery</strong><span>sanitized interfaces and documented scope</span></div>
        </section>

        <section className="intro-section">
          <div className="intro-copy">
            <span className="index-label">01 / PROFILE</span>
            <h2>Systems-oriented engineering with evidence behind the claims.</h2>
          </div>
          <div className="intro-text">
            <p>
              I am completing a B.Sc. in Computer Engineering at UFRPE. My experience spans industrial software at Grupo Moura, computer-vision research at CIn-UFPE / Voxar Labs, applied data projects and independently maintained open-source Python packages.
            </p>
            <p>
              This portfolio separates public artifacts from confidential or institutional work. When source code cannot be disclosed, the scope is described at a safe technical level and clearly labeled.
            </p>
          </div>
        </section>

        <section className="work-section" id="work">
          <SectionHeading
            kicker="Selected industrial work"
            title="Engineering inside real production environments"
            description="These cases are based on documented internship activities. Proprietary source code, production datasets, credentials and internal infrastructure details are intentionally omitted."
          />

          <div className="industrial-list">
            {industrialProjects.map((project) => (
              <article className="industrial-card" key={project.title}>
                <button
                  type="button"
                  className="project-image"
                  onClick={() => setActiveImage(project)}
                  aria-label={`Open image for ${project.title}`}
                >
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span>View interface</span>
                </button>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <p>{project.eyebrow}</p>
                  </div>
                  <div className="evidence-status private-status">{project.status}</div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul>
                    {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <div className="tags">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <p className="image-note">{project.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="evidence-section" id="evidence">
          <SectionHeading
            kicker="Public evidence"
            title="Source code, deployed systems, packages and reproducible results"
            description="Each item links directly to an artifact that can be inspected independently."
          />
          <div className="evidence-grid">
            {evidenceProjects.map((project) => (
              <article className="evidence-card" key={project.title}>
                <div className="evidence-card-top">
                  <span>{project.index}</span>
                  <div className="evidence-status public-status">Public artifact</div>
                </div>
                <p className="public-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p className="evidence-description">{project.description}</p>
                <div className="evidence-list">
                  {project.evidence.map((item) => <span key={item}>✓ {item}</span>)}
                </div>
                <div className="metric-row">
                  {project.metrics.map((metric) => <span key={metric}>{metric}</span>)}
                </div>
                <ActionLinks actions={project.actions} />
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" id="research">
          <SectionHeading
            kicker="Models & research"
            title="What I implemented, evaluated and learned from models"
            description="Public experiments are linked to their code and results. Institutional research is identified separately to avoid implying ownership of private artifacts."
          />
          <div className="research-grid">
            {researchCases.map((item) => (
              <article className="research-card" key={item.title}>
                <div className="research-card-head">
                  <span>{item.label}</span>
                  <i />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <p className="research-note">{item.note}</p>
                <ActionLinks actions={item.actions} />
              </article>
            ))}
          </div>
        </section>

        <section className="publication-section" id="publications">
          <SectionHeading
            kicker="Articles & technical writing"
            title="Research outputs connected to working implementations"
          />
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-card" key={publication.title}>
                <div className="publication-number">0{index + 1}</div>
                <div className="publication-body">
                  <div className="publication-meta">
                    <span>{publication.type}</span>
                    <div className="evidence-status publication-status">{publication.status}</div>
                  </div>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                  <div className="metric-row publication-metrics">
                    {publication.details.map((detail) => <span key={detail}>{detail}</span>)}
                  </div>
                  <ActionLinks actions={publication.actions} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <SectionHeading kicker="Background" title="Experience across industry, research and open source" />
          <div className="experience-grid">
            <div className="timeline">
              <article>
                <span>2025</span>
                <div>
                  <p>Grupo Moura · Automation, Industry 4.0 & Digital</p>
                  <h3>Computer Engineering Intern</h3>
                  <small>Industrial analytics, measurement systems, device communication, monitoring architecture and process-oriented software engineering.</small>
                </div>
              </article>
              <article>
                <span>2022–2023</span>
                <div>
                  <p>CIn-UFPE / Voxar Labs</p>
                  <h3>AI and Computer Vision Research</h3>
                  <small>PPE detection, dataset-quality investigation, model evaluation, research reproduction and technical analysis.</small>
                  <ActionLinks actions={[["Official lab", links.voxar]]} />
                </div>
              </article>
              <article>
                <span>2022–2023</span>
                <div>
                  <p>UFRPE / FACEPE / ITEMM</p>
                  <h3>Data Analysis Extension Project</h3>
                  <small>Prototype for querying and analyzing measurements from experimental batteries using Flask, SQLite, Pandas and data visualizations.</small>
                  <ActionLinks actions={[["Public prototype", links.itemm]]} />
                </div>
              </article>
              <article>
                <span>Expected 2026</span>
                <div>
                  <p>UFRPE</p>
                  <h3>B.Sc. in Computer Engineering</h3>
                  <small>Software, data, networks, embedded systems, automation, computer architecture and applied research.</small>
                </div>
              </article>
            </div>

            <div className="skills-panel">
              <p className="skills-title">Technical toolkit</p>
              <div className="skill-cloud">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
              <div className="approach-box">
                <strong>How I work</strong>
                <p>Clear boundaries, maintainable code, reusable components, testing, documentation and pragmatic adaptation to unfamiliar domains.</p>
              </div>
              <div className="approach-box">
                <strong>Evidence policy</strong>
                <p>Public work links to source, releases or results. Confidential work is summarized without exposing protected code or data.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="index-label light">06 / CONTACT</span>
            <h2>Need a developer who can understand the system, not only the ticket?</h2>
            <p>I am available for remote freelance, contract, outsourcing and technical collaboration opportunities.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={links.email}>Start a conversation <ArrowIcon /></a>
            <a href={links.github} target="_blank" rel="noreferrer">Review my GitHub <ExternalIcon /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalIcon /></a>
            <a href={links.orcid} target="_blank" rel="noreferrer">Open ORCID record <ExternalIcon /></a>
            <a href={links.resume} download="Jose_Yrikes_Detailed_English_CV.html">Download detailed English CV <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">JY</span>
          <span className="brand-copy"><strong>José Yrikes</strong><small>Brazil / Remote</small></span>
        </div>
        <p>Software development · Industrial systems · AI · Quantum software</p>
        <span>© 2026 José Yrikes</span>
      </footer>

      {activeImage && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={activeImage.title} onClick={() => setActiveImage(null)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setActiveImage(null)} aria-label="Close image">×</button>
            <img src={activeImage.image} alt={activeImage.imageAlt} />
            <div>
              <strong>{activeImage.title}</strong>
              <span>{activeImage.note}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
