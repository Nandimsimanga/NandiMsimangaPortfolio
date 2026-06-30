import './App.css'
import portraitImg from './assets/websitepic.jpg'
import {
  aboutMe,
  academicResults,
  careerInterests,
  highlights,
  leadership,
  links,
  projects,
  skillGroups,
} from './data/content'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <div className="page">
      <nav className="nav">
        <a href="#top" className="nav-brand">
          NANDI&nbsp;MSIMANGA
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero section--light">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          <span>
            Software Developer · BComp Graduate with Distinction
          </span>
        </div>

        <div className="hero-split">
          <div className="hero-content">
            <h1 className="hero-title">
              Nandi
              <br />
              Msimanga<span className="accent">.</span>
            </h1>
            <p className="hero-lead">
              Building practical software solutions through thoughtful engineering,
              cloud technologies, and AI integration.
            </p>
            <div className="hero-tags">
              <span className="hero-tag">Software Engineering</span>
              <span className="hero-tag hero-tag--filled">Cloud &amp; AI</span>
              <span className="hero-tag">Open to graduate roles</span>
            </div>
            <div className="hero-links">
              <a
                href={links.github}
                className="hero-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href={links.linkedin}
                className="hero-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img
              src={portraitImg}
              alt="Portrait of Nandi Msimanga"
              className="hero-portrait-img"
            />
          </div>
        </div>

        <span className="hero-scroll">↓ Scroll for more info</span>
      </section>

      <section id="about" className="about section--dark">
        <div className="about-grid">
          <div data-reveal className="section-label">
            (01) — About
          </div>
          <div>
            <p data-reveal className="about-headline">
              Graduate software developer focused on{' '}
              <em>real-world impact</em> through modern engineering.
            </p>
            <div className="about-copy">
              {aboutMe.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 32)}
                  data-reveal
                  className={index > 0 ? `delay-${Math.min(index, 3)}` : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section--light">
        <div data-reveal className="skills-header">
          <h2 className="skills-title">Skills</h2>
          <span className="section-label">
            (02) — Technologies
          </span>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.no} data-reveal className="skill-card">
              <div className="skill-card-header">
                <span className="skill-card-no">{group.no}</span>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="highlights" className="highlights section--dark">
        <div data-reveal className="section-header">
          <h2 className="section-title">Highlights</h2>
          <span className="section-label">(03) — Key credentials</span>
        </div>
        <div className="highlights-grid">
          {highlights.map((item) => (
            <article key={item.title} data-reveal className="highlight-card">
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects section--light">
        <div data-reveal className="section-header">
          <h2 className="section-title">Featured projects</h2>
          <span className="section-label">(04) — Selected work</span>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              data-reveal
              className={`project-card${project.featured ? ' project-card--featured' : ''}`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              <div className="project-header">
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.achievement && (
                    <span className="project-badge">{project.achievement}</span>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <h4 className="project-subheading">Features</h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-footer">
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

    

      <section id="academics" className="academics section--dark">
        <div data-reveal className="section-header">
          <h2 className="section-title">Academic achievements</h2>
          <span className="section-label">(05) — Module results</span>
        </div>
        <div className="academics-grid">
          {academicResults.map((result) => (
            <div key={result.module} data-reveal className="academic-card">
              <div className="academic-score">{result.score}%</div>
              <div className="academic-module">{result.module}</div>
              <div className="academic-bar">
                <span style={{ width: `${result.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="leadership" className="leadership section--light">
        <div className="leadership-grid">
          <div data-reveal className="section-label">
            (06) — Leadership
          </div>
          <div>
            <h2 data-reveal className="leadership-title">
              Collaboration, mentorship, and technical leadership.
            </h2>
            <ul className="leadership-list">
              {leadership.map((item) => (
                <li key={item} data-reveal>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="career" className="career section--dark">
        <div data-reveal className="section-header">
          <h2 className="section-title">Career interests</h2>
          <span className="section-label">(07) — Open to opportunities</span>
        </div>
        <p data-reveal className="career-intro">
          I am actively seeking roles where I can grow as an engineer while
          contributing to impactful software products.
        </p>
        <div className="career-tags">
          {careerInterests.map((interest) => (
            <span key={interest} data-reveal className="career-tag">
              {interest}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section--light">
        <span data-reveal className="section-label">
          (08) — Contact
        </span>
        <a data-reveal href={links.email} className="contact-email">
          {links.emailDisplay}
        </a>
        <div className="contact-links">
          <a
            data-reveal
            href={links.linkedin}
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="contact-footer">
          <span>© 2026 Nandi Msimanga</span>
          <span>Graduate Software Developer Portfolio</span>
        </div>
      </section>
    </div>
  )
}

export default App
