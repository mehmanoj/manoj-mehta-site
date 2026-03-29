import { contactLinks, impactMetrics } from '../data/resumeData';
import { workExperience } from '../data/siteContent';
import { Timeline } from '../components/common/Timeline';

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="about-hero">
        <div className="about-copy">
          <h1>I build scalable UI platforms and front-end architecture that help enterprise teams move faster.</h1>
          <p>
            I’m a senior software engineer and hands-on frontend architect based in Irvine, with 20+ years of
            experience building scalable web platforms across telecommunications, financial services, retail,
            and Fortune 500 environments.
          </p>
          <p>
            My work centers on platform engineering: modernizing front-end stacks, shaping reusable UI systems,
            improving developer productivity, and building architecture that supports faster delivery without
            sacrificing performance, accessibility, or maintainability.
          </p>
          <p>
            Across my recent work, that has included React and TypeScript micro-frontend platforms, digital
            commerce systems, AI-powered collaboration experiences, stronger CI/CD pipelines, and testing and
            component-library foundations that make large teams more effective.
          </p>

          <section className="section-blockless">
            <h2>Work Experience</h2>
            <Timeline items={workExperience} />
          </section>
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
    </div>
  );
}
