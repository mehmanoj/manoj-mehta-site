import { contactLinks, impactMetrics } from '../data/resumeData';
import { workExperience } from '../data/siteContent';
import { siteSettings } from '../data/siteVersions';
import { Timeline } from '../components/common/Timeline';

export function AboutPage() {
  return (
    <div className="page-stack">
      <section className="about-hero">
        <div className="about-copy">
          <h1>{siteSettings.aboutTitle}</h1>
          {siteSettings.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
            <a className="resume-link" href={siteSettings.resumeFiles.pdf} target="_blank" rel="noreferrer" download="Manoj_Mehta_Resume.pdf">
              Download résumé PDF
            </a>
            <a className="resume-link" href={siteSettings.resumeFiles.docx} target="_blank" rel="noreferrer" download="Manoj_Mehta_Resume.docx">
              Download résumé DOCX
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

      <section className="section-blockless section-full-width">
        <h2>Work Experience</h2>
        <Timeline items={workExperience} />
      </section>
    </div>
  );
}
