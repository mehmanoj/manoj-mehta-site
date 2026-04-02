import { useEffect, useMemo, useState } from 'react';
import { getActiveSiteVersion } from './data/siteVersions';
import type { DetailItem, ProjectItem } from './data/contentTypes';

type ThemeMode = 'dark' | 'light';
type Route = '/' | '/articles/' | '/projects/' | '/uses/' | string;

const navItems = [
  { href: '/', label: 'About' },
  { href: '/articles/', label: 'Articles' },
  { href: '/projects/', label: 'Projects' },
  { href: '/uses/', label: 'Uses' },
] as const;

const siteContent = getActiveSiteVersion();
const {
  heroHeading,
  heroIntro,
  workExperience,
  articleDetails,
  projectDetails,
  usesSections,
  articlesHeading,
  articlesIntro,
  projectsHeading,
  projectsIntro,
  usesHeading,
  usesIntro,
  resumePdf,
  label: siteVersionLabel,
  data: { impactMetrics, caseStudies, testimonialThemes, skills },
} = siteContent;

function getPath(): Route {
  const path = window.location.pathname;
  if (path === '/articles' || path === '/articles/') return '/articles/';
  if (path === '/projects' || path === '/projects/') return '/projects/';
  if (path === '/uses' || path === '/uses/') return '/uses/';
  if (path === '/' || path === '') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function App() {
  const [path, setPath] = useState<Route>(() => getPath());
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[data-route="true"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || anchor.target === '_blank' || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      event.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState({}, '', href);
        setPath(getPath());
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const activeArticle = useMemo(
    () => articleDetails.find((item) => path === `/articles/${item.slug}/`),
    [path],
  );

  const activeProject = useMemo(
    () => projectDetails.find((item) => path === `/projects/${item.slug}/`),
    [path],
  );

  const renderPage = () => {
    if (activeArticle) {
      return <ArticleDetailPage item={activeArticle} />;
    }

    if (activeProject) {
      return <ProjectDetailPage item={activeProject} />;
    }

    switch (path) {
      case '/articles/':
        return <ArticlesPage />;
      case '/projects/':
        return <ProjectsPage />;
      case '/uses/':
        return <UsesPage />;
      case '/':
        return <AboutPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="site-chrome" data-theme={theme}>
      <div className="site-frame">
        <header className="site-header">
          <a className="avatar-link" href="/" data-route="true" aria-label="Go to About page">
            <img src="/profile.png" alt="Manoj Mehta" />
          </a>

          <nav className="nav-pill" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = path === item.href || (item.href !== '/' && path.startsWith(item.href));
              return (
                <a key={item.href} href={item.href} data-route="true" className={isActive ? 'active' : ''}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <svg className="theme-icon theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="theme-icon theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4V2.75M17.657 6.343l.884-.884M20 12h1.25M17.657 17.657l.884.884M12 20v1.25M6.343 17.657l-.884.884M4 12H2.75M6.343 6.343l-.884-.884" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3.75" strokeWidth="1.5" />
            </svg>
          </button>
        </header>

        <main>{renderPage()}</main>

        <footer className="site-footer">
          <div className="footer-links-row">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} data-route="true">
                {item.label}
              </a>
            ))}
          </div>
          <p>© 2026 Manoj Mehta. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-stack">
      <section className="about-hero">
        <div className="about-copy">
          <h1>{heroHeading}</h1>
          {heroIntro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <section className="section-blockless">
            <div className="section-title-row">
              <h2>Work Experience</h2>
              <span className="version-badge">{siteVersionLabel} version</span>
            </div>
            <div className="timeline-list">
              {workExperience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="timeline-row">
                  <div className="timeline-rail" aria-hidden="true" />
                  <div className="timeline-content">
                    <p className="timeline-date">{item.date}</p>
                    <h3>{item.role}</h3>
                    <p className="company-name">{item.company}</p>
                    <p>{item.body}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="about-side">
          <div className="hero-photo-card">
            <img src="/profile.png" alt="Portrait of Manoj Mehta" />
          </div>

          <div className="contact-panel">
            <a href="https://github.com/mehmanoj" target="_blank" rel="noreferrer">
              Follow on GitHub
            </a>
            <a href="https://linkedin.com/in/manoj-mehta-4486302" target="_blank" rel="noreferrer">
              Follow on LinkedIn
            </a>
            <a href="mailto:meh.manoj@gmail.com">meh.manoj@gmail.com</a>
            <a className="resume-link" href={resumePdf} download="Manoj_Mehta_Resume.pdf">
              Download résumé PDF
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

function ArticlesPage() {
  return (
    <div className="narrow-page">
      <section className="listing-hero">
        <h1>{articlesHeading}</h1>
        <p>{articlesIntro}</p>
      </section>

      <div className="article-listing">
        {articleDetails.map((item) => (
          <article key={item.slug} className="listing-row">
            <div className="listing-date">{item.category}</div>
            <div className="listing-content">
              <h2>
                <a href={`/articles/${item.slug}/`} data-route="true">
                  {item.title}
                </a>
              </h2>
              <p>{item.summary}</p>
              <a className="inline-link" href={`/articles/${item.slug}/`} data-route="true">
                Read article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="narrow-page">
      <section className="listing-hero projects-hero">
        <h1>{projectsHeading}</h1>
        <p>{projectsIntro}</p>
      </section>

      <div className="card-grid">
        {projectDetails.map((item) => (
          <article key={item.slug} className="project-tile">
            <img className="tile-image" src={`/project-${item.slug}.png`} alt={item.title} />
            <h2>
              <a href={`/projects/${item.slug}/`} data-route="true">
                {item.title}
              </a>
            </h2>
            <p className="tile-kicker">{item.subtitle}</p>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="inline-link" href={`/projects/${item.slug}/`} data-route="true">
              Open project →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function UsesPage() {
  return (
    <div className="narrow-page">
      <section className="listing-hero">
        <h1>{usesHeading}</h1>
        <p>{usesIntro}</p>
      </section>

      <div className="uses-list">
        {usesSections.map((section) => (
          <section key={section.title} className="uses-card">
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className="uses-card">
          <h2>Representative feedback themes</h2>
          <ul>
            {testimonialThemes.map((item) => (
              <li key={item.quote}>
                <strong>{item.role}:</strong> {item.quote}
              </li>
            ))}
          </ul>
        </section>

        <section className="uses-card">
          <h2>Selected capabilities</h2>
          <ul>
            {skills.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function ArticleDetailPage({ item }: { item: DetailItem }) {
  return (
    <div className="detail-page">
      <a className="back-link" href="/articles/" data-route="true">
        ← Back to articles
      </a>
      <p className="detail-kicker">{item.category}</p>
      <h1>{item.title}</h1>
      <p className="detail-summary">{item.summary}</p>
      <div className="detail-body">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="detail-section">
        <h2>Key ideas</h2>
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function ProjectDetailPage({ item }: { item: ProjectItem }) {
  const matchingCaseStudy = caseStudies.find((study) => item.title.toLowerCase().includes(study.title.split(' ')[0].toLowerCase()));

  return (
    <div className="detail-page">
      <a className="back-link" href="/projects/" data-route="true">
        ← Back to projects
      </a>
      <p className="detail-kicker">{item.subtitle}</p>
      <h1>{item.title}</h1>
      <p className="detail-summary">{item.summary}</p>

      <section className="impact-banner">
        <strong>Impact</strong>
        <p>{item.impact}</p>
      </section>

      <div className="detail-body">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="detail-section">
        <h2>Highlights</h2>
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Stack / themes</h2>
        <div className="tag-row big-gap">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      {matchingCaseStudy ? (
        <section className="detail-section">
          <h2>Related case-study framing</h2>
          <p>{matchingCaseStudy.summary}</p>
          <ul>
            {matchingCaseStudy.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="detail-page">
      <p className="detail-kicker">404</p>
      <h1>Page not found.</h1>
      <p className="detail-summary">The route you opened does not exist in this portfolio build.</p>
      <a className="inline-link" href="/" data-route="true">
        Return to About →
      </a>
    </div>
  );
}

export default App;
