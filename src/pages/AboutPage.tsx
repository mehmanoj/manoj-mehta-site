import { contactLinks, impactMetrics } from '../data/resumeData';
import { workExperience } from '../data/siteContent';
import { Timeline } from '../components/common/Timeline';

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="about-hero">
        <div className="about-copy">
          <h1>I build AI-powered interfaces, data-rich dashboards, and scalable frontend systems for enterprise products.</h1>
          <p>
            I’m a senior frontend engineer and hands-on architect based in Irvine, with 20+ years of experience
            building enterprise web applications across financial services and other large-scale industries.
          </p>
          <p>
            My recent work focuses on AI product UI engineering: chat-driven workflows, copilot-style experiences,
            configurable analytics dashboards, and modern frontend systems built with React, Next.js, and TypeScript.
          </p>
          <p>
            I partner closely with business stakeholders, product teams, designers, and engineers to translate
            requirements into production-ready interfaces that are scalable, accessible, and aligned with real
            business workflows.
          </p>
        </div>

        <aside className="about-side">
          <div className="hero-photo-card">
            <img src="/profile.png" alt="Portrait of Manoj Mehta" />
          </div>

          <div className="contact-panel">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}>
                {item.external && item.label === 'GitHub' ? 'Follow on GitHub' : item.external && item.label === 'LinkedIn' ? 'Follow on LinkedIn' : item.label}
              </a>
            ))}
            <a className="resume-link" href="/Manoj_Mehta_Resume.pdf" target="_blank" rel="noreferrer">
              Open résumé PDF
            </a>
          </div>

          <div className="metric-grid">
            {impactMetrics.map((item) => (
              <article key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="section-blockless full-width-section">
        <h2>Work Experience</h2>
        <Timeline items={workExperience} />
      </section>
    </div>
  );
}
