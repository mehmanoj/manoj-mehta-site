import { useEffect, useMemo, useState } from 'react';
import {
  achievements,
  blogPosts,
  caseStudies,
  contactLinks,
  impactMetrics,
  platforms,
  projects,
  skills,
  testimonialThemes,
} from './data/resumeData';

type Route = '/' | '/articles/' | '/projects/' | '/uses/' | string;

type DetailItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
  bullets: string[];
};

type ProjectItem = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  impact: string;
  body: string[];
  bullets: string[];
  tags: string[];
};

const navItems = [
  { href: '/', label: 'About' },
  { href: '/articles/', label: 'Articles' },
  { href: '/projects/', label: 'Projects' },
  { href: '/uses/', label: 'Uses' },
] as const;

const workExperience = [
  {
    date: '2018 — Present',
    role: 'Front-End Architect',
    company: 'Publicis Sapient',
    body:
      'Lead technical architecture and hands-on frontend delivery for large-scale enterprise platforms across telecommunications, retail, and AI-powered collaboration use cases.',
    bullets: [
      'Modernized legacy systems into React and TypeScript micro-frontend platforms, enabling independent deployments across 6+ teams.',
      'Architected digital commerce workflows with React, Next.js, and GraphQL supporting $10M+ in annual transaction volume.',
      'Standardized CI/CD, testing, and reusable UI patterns to improve deployment speed, delivery consistency, and developer productivity.',
    ],
  },
  {
    date: '2011 — 2018',
    role: 'Senior UI Engineer',
    company: 'Publicis Sapient',
    body:
      'Led frontend development for financial services and enterprise platforms, building scalable single-page applications with strong focus on usability, accessibility, and maintainability.',
    bullets: [
      'Developed accessible component patterns and design systems that improved consistency across applications.',
      'Introduced CI/CD and testing practices that reduced regressions and strengthened release confidence.',
      'Contributed to backend integrations in Java and SQL when product delivery required full-stack collaboration.',
    ],
  },
  {
    date: '2005 — 2011',
    role: 'Consultant',
    company: 'Fidelity International',
    body:
      'Built financial applications, dashboards, and data visualization tools that helped stakeholders interpret business data and make clearer decisions.',
    bullets: [
      'Translated business requirements into scalable technical solutions across enterprise systems.',
      'Delivered data-rich applications with emphasis on clarity, usability, and decision support.',
      'Built a strong base in Java, SQL, and enterprise product delivery.',
    ],
  },
];

const articleDetails: DetailItem[] = [
  {
    slug: 'ai-first-ux-engineering',
    title: 'How AI-first UX engineering changes the prototype-to-product loop',
    category: 'AI + Product Delivery',
    summary:
      'A practical framework for reducing ambiguity with working demos, prompt systems, and AI-assisted implementation.',
    body: [
      'The most valuable change AI brings to product teams is not raw code generation. It is compression of the feedback loop between idea, implementation, and validation. When design concepts become believable working demos early, teams can react to product behavior instead of debating abstractions.',
      'That shift matters most in enterprise environments where multiple stakeholders shape requirements. AI-assisted workflows make it easier to move from Figma, notes, and backlog items into something interactive enough to test the real user journey.',
      'The strongest results come when these tools are turned into repeatable systems. Prompt patterns, reusable front-end primitives, and prototype conventions become leverage for the team instead of isolated individual wins.',
    ],
    bullets: [
      'Use AI to shorten the concept-to-demo cycle, not to bypass product thinking.',
      'Anchor feedback around working interfaces instead of static documents.',
      'Turn successful prompt patterns into shared delivery workflows.',
    ],
  },
  {
    slug: 'figma-to-credible-demo',
    title: 'From Figma to credible product demo: what enterprise teams actually need',
    category: 'Design to Code',
    summary:
      'Why fidelity, interaction quality, and implementation realism matter when prototypes are used to shape decisions.',
    body: [
      'A prototype only influences direction when stakeholders believe it. That means it needs enough visual fidelity, interaction logic, and technical realism to feel close to a shippable experience.',
      'The best prototype work lives between design craft and engineering rigor. It respects spacing, states, and motion while also reflecting how data, component structure, and system behavior will really work.',
      'For enterprise teams, credibility is often the difference between a prototype being treated as inspiration and being treated as a genuine decision-making tool.',
    ],
    bullets: [
      'Preserve design intent while making realistic engineering tradeoffs visible.',
      'Focus on flows, state changes, and user decision points rather than only visuals.',
      'Build prototypes that can evolve into implementation rather than being thrown away.',
    ],
  },
  {
    slug: 'designing-intelligent-support-experiences',
    title: 'Designing support experiences that feel intelligent, not scripted',
    category: 'Intelligent Interfaces',
    summary:
      'Patterns for AI-assisted troubleshooting and guidance that reduce friction without creating robotic experiences.',
    body: [
      'Users do not want an AI layer for its own sake. They want clarity, faster resolution, and less effort. Support interfaces feel intelligent when they help users move forward with context-sensitive guidance instead of generic scripted responses.',
      'That requires mapping where friction actually occurs, then designing assistance around decision points, next-best actions, and understandable explanations.',
      'The most effective support experiences combine strong interaction design with believable automation. The interface should make users feel more capable, not more dependent.',
    ],
    bullets: [
      'Model assistance around real workflow friction points.',
      'Design for clarity, next actions, and user confidence.',
      'Use AI to reduce manual digging, not to add conversational overhead.',
    ],
  },
];

const projectDetails: ProjectItem[] = [
  {
    slug: 'ai-first-ux-engineering-initiative',
    title: 'AI-First UX Engineering Initiative',
    subtitle: 'Publicis Sapient · Current focus',
    summary:
      'Leading an AI-first approach to prototyping and UX delivery using Slingshot, Figma-to-code workflows, and reusable implementation patterns.',
    impact: 'Reduced UI development effort by about 30% and accelerated concept validation.',
    body: [
      'This initiative focused on moving beyond ad hoc experimentation and turning AI into a team-level delivery accelerator. The work combined prompt-driven development, custom skills, rapid prototyping, and design-to-code workflows.',
      'A central goal was making product conversations more concrete. Instead of relying on static discussion, working demos were used to validate interaction models and communicate system behavior clearly to stakeholders.',
      'The effort also created a foundation for repeatable delivery. Effective patterns could be reused across teams, reducing manual effort and helping ideas move faster from concept to implementation.',
    ],
    bullets: [
      'Introduced Slingshot and AI-assisted workflows into day-to-day UX engineering.',
      'Used Figma-to-code and structured prompt flows to shorten build cycles.',
      'Created reusable patterns that improved team productivity beyond a single project.',
    ],
    tags: ['AI workflows', 'UX prototyping', 'Slingshot', 'Figma to code'],
  },
  {
    slug: 'enterprise-support-copilot-concepts',
    title: 'Enterprise Support Copilot Concepts',
    subtitle: 'AI-assisted user workflows',
    summary:
      'Prototyped copilot-style support experiences and automated troubleshooting flows for enterprise users.',
    impact: 'Improved self-service direction and reduced reliance on static documentation.',
    body: [
      'The challenge was reducing user friction in support-heavy journeys where people had to search through documentation or rely on manual troubleshooting. Instead of treating support as static content, the work reframed it as an interactive guided experience.',
      'The prototypes simulated agentic and assistive workflows to show how context-aware help could guide users toward resolution. This helped stakeholders evaluate the product opportunity through believable interactions rather than abstract discussions.',
      'The outcome was a stronger articulation of how intelligent assistance could improve efficiency and user confidence without requiring a fully built AI product from day one.',
    ],
    bullets: [
      'Mapped support friction into guided interaction patterns.',
      'Used prototype-led storytelling to shape product direction.',
      'Explored assistive UX that made self-service more practical and efficient.',
    ],
    tags: ['Copilot UX', 'Support flows', 'LLMs', 'Enterprise UX'],
  },
  {
    slug: 'modular-web-platforms',
    title: 'Modular Web Platforms',
    subtitle: 'Architecture across industries',
    summary:
      'Architected scalable front-end systems and modular web applications for large, high-traffic environments.',
    impact: 'Improved maintainability, consistency, and performance across multi-team delivery.',
    body: [
      'Across enterprise engagements, the work centered on building front-end foundations that scale. That included modular architecture, shared patterns, and implementation discipline that supported multiple teams working on the same platform.',
      'These systems had to balance speed and quality. Reusable components, stronger testing practices, and performance-minded engineering helped teams move faster without increasing inconsistency or regressions.',
      'The result was a stronger delivery platform for UX execution: more reliable interfaces, faster iteration, and better alignment between design intent and production behavior.',
    ],
    bullets: [
      'Built reusable design systems and shared UI patterns.',
      'Improved performance and delivery quality in production environments.',
      'Enabled scalable front-end execution across complex enterprise teams.',
    ],
    tags: ['React', 'TypeScript', 'Design systems', 'Performance'],
  },
  {
    slug: 'financial-analytics-visualization',
    title: 'Financial Analytics & Visualization',
    subtitle: 'Consulting and data-rich product work',
    summary:
      'Built dashboards and visualization experiences that made complex data easier to interpret and act on.',
    impact: 'Supported clearer decision-making for stakeholders working with dense financial information.',
    body: [
      'This work focused on clarity. Financial interfaces often suffer when data density overwhelms usability, so the goal was to shape experiences that helped users interpret complex information more effectively.',
      'The solutions blended technical implementation with information design. Visualization patterns, application structure, and business context had to work together so that dashboards were useful rather than merely data-heavy.',
      'That foundation continues to inform later work on data-rich enterprise UX, especially in products where workflow efficiency and comprehension matter as much as visual polish.',
    ],
    bullets: [
      'Designed interfaces that improved data visibility and usability.',
      'Translated business requirements into scalable application behavior.',
      'Built a strong base in decision-support and data-rich UX.',
    ],
    tags: ['Dashboards', 'Visualization', 'Finance', 'Usability'],
  },
];

const usesSections = [
  {
    title: 'Building',
    items: [
      'React and TypeScript for production interfaces and architecture work',
      'Next.js and Vite for rapid prototyping and modern front-end delivery',
      'Micro-frontends, design systems, and component libraries for scalable UI platforms',
    ],
  },
  {
    title: 'AI-assisted workflow',
    items: [
      'Sapient Slingshot for AI-first development and prototype acceleration',
      'GitHub Copilot for implementation support and faster iteration',
      'Prompt engineering patterns to turn repeatable workflows into team leverage',
    ],
  },
  {
    title: 'Quality, accessibility, and performance',
    items: [
      'Jest, React Testing Library, and Cypress for test coverage and confidence',
      'WAVE and AudioEye for accessibility validation',
      'Lighthouse and Core Web Vitals as part of performance optimization work',
    ],
  },
  {
    title: 'Delivery environment',
    items: [
      'GitHub Actions and Jenkins for CI/CD',
      'AWS, Azure, and GCP exposure across enterprise projects',
      'REST, GraphQL, Java, and SQL when front-end work needs deeper integration context',
    ],
  },
];

function getPath(): Route {
  const path = window.location.pathname;
  if (path === '/articles' || path === '/articles/') return '/articles/';
  if (path === '/projects' || path === '/projects/') return '/projects/';
  if (path === '/uses' || path === '/uses/') return '/uses/';
  if (path === '/' || path === '') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

function formatLink(href: string) {
  return href.replace(/\/$/, '') || '/';
}

function App() {
  const [path, setPath] = useState<Route>(() => getPath());

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
    <div className="site-chrome">
      <div className="site-frame">
        <header className="site-header">
          <a className="avatar-link" href="/" data-route="true" aria-label="Go to About page">
            <img src="/profile.png" alt="Manoj Mehta" />
          </a>

          <nav className="nav-pill" aria-label="Primary">
            {navItems.map((item) => {
              const isActive =
                path === item.href ||
                (item.href !== '/' && path.startsWith(item.href));
              return (
                <a key={item.href} href={item.href} data-route="true" className={isActive ? 'active' : ''}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="theme-dot" aria-hidden="true">
            ◔
          </div>
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

function ArticlesPage() {
  return (
    <div className="narrow-page">
      <section className="listing-hero">
        <h1>Thoughts on web development, digital experiences, and AI-assisted product work.</h1>
        <p>
          A focused collection of article topics aligned to my work in UX engineering, frontend
          architecture, intelligent interfaces, and design-to-code execution.
        </p>
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
        <h1>Projects, initiatives, and representative case-study work.</h1>
        <p>
          A selection of architecture, prototyping, intelligent-interface, and delivery work shaped by
          the experience on my résumé.
        </p>
      </section>

      <div className="card-grid">
        {projectDetails.map((item) => (
          <article key={item.slug} className="project-tile">
            <img
              className="tile-image"
              src={`/project-${item.slug}.png`}
              alt={item.title}
            />
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
        <h1>What I use to design, prototype, build, and ship.</h1>
        <p>
          This page mirrors the structure of the reference site, but the content is tailored to my current
          frontend, UX engineering, AI, and delivery stack.
        </p>
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
  const matchingCaseStudy = caseStudies.find((study) =>
    item.title.toLowerCase().includes(study.title.split(' ')[0].toLowerCase()),
  );

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
      <p className="detail-summary">
        The route you opened does not exist in this portfolio build.
      </p>
      <a className="inline-link" href="/" data-route="true">
        Return to About →
      </a>
    </div>
  );
}

export default App;
