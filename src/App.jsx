const stats = [
  {
    value: '35%',
    text: 'Reduction in release coordination time through Module Federation micro-frontend architecture',
  },
  {
    value: '25%',
    text: 'Reduction in feature development time through reusable UI libraries and shared platform frameworks',
  },
  {
    value: '20%',
    text: 'Improvement in high-traffic commerce performance through bundle optimization and rendering enhancements',
  },
  {
    value: '30%',
    text: 'Increase in deployment velocity through CI/CD automation and release workflow modernization',
  },
];

const experienceBullets = [
  'Architect and deliver enterprise-scale front-end and platform systems using React, TypeScript, micro-frontends, and cloud-native engineering practices.',
  'Provide technical leadership across multiple engineering teams, guiding architecture decisions, platform standards, and developer experience improvements.',
  'Lead technical direction across telecom, financial services, retail, and healthcare engagements, partnering closely with product, design, backend, QA, and DevOps teams.',
  'Design reusable UI frameworks, shared component libraries, and platform patterns that improve developer experience, consistency, and speed of delivery across teams.',
  'Define scalable integration patterns for REST and GraphQL services, including Backend-for-Frontend (BFF) architectures supporting complex enterprise product experiences.',
  'Implement CI/CD pipelines, release guardrails, and modern DevOps workflows to support reliable, secure, and automated delivery.',
  'Mentor engineers, review architecture, and drive best practices in performance optimization, maintainability, and platform scalability.',
];

const platforms = [
  {
    title: 'Micro-Frontend Platform',
    body: 'Architected a Module Federation based micro-frontend architecture enabling 6+ teams to independently develop and deploy front-end applications, significantly improving release coordination and team autonomy.',
  },
  {
    title: 'Developer Experience Platform',
    body: 'Designed reusable UI component libraries, shared engineering workflows, and platform patterns adopted across multiple enterprise applications, improving developer productivity and reducing feature delivery time.',
  },
  {
    title: 'UI Architecture Frameworks',
    body: 'Established scalable React and TypeScript architecture standards, reusable design patterns, and performance optimization strategies used across enterprise-scale applications.',
  },
  {
    title: 'Analytics & Visualization Platforms',
    body: 'Built complex analytics interfaces including M.E.L.T and Exposure UI for financial portfolio analysis supporting large datasets, advanced workflows, and high-performance visualization experiences.',
  },
];

const projects = [
  {
    title: 'Capital Group',
    subtitle: 'Investment Analytics Platform',
    body: 'Designed and built UI platforms including M.E.L.T and Exposure UI for portfolio analytics and risk analysis, delivering high-performance visualization interfaces and reusable front-end patterns for complex financial workflows.',
  },
  {
    title: 'Albertsons',
    subtitle: 'Retail Digital Platform',
    body: 'Architected a micro-frontend retail platform integrated with GraphQL BFF services to enable scalable front-end deployments across distributed teams and improve modularity across product areas.',
  },
  {
    title: 'Verizon',
    subtitle: 'Digital Commerce Platform Modernization',
    body: 'Led modernization of Verizon’s digital sales platform into a micro-frontend architecture using React, Next.js, and TypeScript, while building product configurator and checkout experiences and improving performance by ~20%.',
  },
  {
    title: 'GMR / AMCN',
    subtitle: 'AI-Enabled Digital Platform',
    body: 'Built an enterprise CMS-driven digital platform using ASP.NET MVC, Kentico CMS, and Tailwind CSS, with reusable UI components, page templates, and AI-assisted development workflows for faster feature delivery.',
  },
];

const skills = [
  {
    title: 'Developer Experience & Platform',
    body: 'Reusable component libraries, shared front-end frameworks, platform patterns, AI-assisted engineering workflows, developer enablement',
  },
  {
    title: 'APIs & Integrations',
    body: 'REST, GraphQL, OpenAI APIs, BFF patterns, enterprise API integrations',
  },
  {
    title: 'Front-End',
    body: 'React, Next.js, TypeScript, JavaScript (ESM), Redux, Micro-Frontends',
  },
  {
    title: 'Cloud & DevOps',
    body: 'AWS, Azure, CI/CD pipelines, release automation',
  },
  {
    title: 'Testing',
    body: 'Jest, Cypress, Playwright, Cucumber',
  },
  {
    title: 'Programming',
    body: 'TypeScript, JavaScript, Python',
  },
];

const contactChips = [
  {
    href: 'mailto:meh.manoj@gmail.com',
    icon: 'fa-solid fa-envelope',
    label: 'meh.manoj@gmail.com',
  },
  {
    href: 'tel:+19496915115',
    icon: 'fa-solid fa-phone',
    label: '949-691-5115',
  },
  {
    href: 'https://linkedin.com/in/manoj-mehta-4486302',
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/mehmanoj',
    icon: 'fa-brands fa-github',
    label: 'GitHub',
    external: true,
  },
];

function App() {
  return (
    <>
      <header className="hero">
        <div className="container hero-shell">
          <nav className="nav">
            <div className="brand-block">
              <div className="brand">
                <img src="/profile.png" alt="Manoj Mehta" />
              </div>

              <div className="brand-contact">
                {contactChips.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="contact-chip"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <i className={item.icon} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#objective">Objective</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <p className="eyebrow">Senior Front-End Architect • Principal UI Platform Engineer • Developer Experience</p>
            <h1>Manoj Mehta</h1>
            <p className="hero-tagline">
              Architecting scalable UI platforms, micro-frontend ecosystems, and developer experience tooling for large enterprise engineering organizations.
            </p>
            <p className="hero-copy">
              Senior Front-End Architect and platform engineering leader with ~20 years of experience designing and delivering enterprise-scale digital platforms across financial services, telecom, retail, and healthcare. Specialized in React/TypeScript ecosystems, micro-frontend architectures, GraphQL integrations, and developer platform engineering that enable large engineering organizations to build and ship faster.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#contact">Get in touch</a>
              <a className="button secondary" href="/Manoj_Mehta_Resume3.pdf" download>Download PDF</a>
              <a className="button secondary" href="/Manoj_Mehta_Resume3.docx" download>Download DOCX</a>
            </div>

            <ul className="highlights">
              <li>20+ years designing enterprise-scale platforms across financial services, telecom, retail, and healthcare</li>
              <li>Module Federation micro-frontend architecture enabling 6+ teams to deploy independently</li>
              <li>Developer experience, GraphQL integration patterns, and platform engineering leadership</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section container two-col">
          <div>
            <p className="section-label">About</p>
            <h2>Building scalable front-end platforms and stronger developer experience.</h2>
          </div>
          <div>
            <p>
              I help organizations modernize digital platforms by combining strong front-end architecture with platform thinking, reusable engineering patterns, and developer-first workflows. My work focuses on making teams faster, systems more scalable, and product experiences more extensible.
            </p>
            <p>
              I partner closely with product, engineering, UX, QA, and DevOps teams to deliver enterprise-grade platforms, GraphQL and REST integration patterns, reusable component libraries, and AI-assisted development workflows that improve productivity and release velocity.
            </p>
          </div>
        </section>

        <section id="objective" className="section section-alt">
          <div className="container objective-card">
            <div>
              <p className="section-label">Career Objective</p>
              <h2>What I’m looking to build next</h2>
            </div>
            <div>
              <p>
                I am looking to apply my experience in a senior architect or principal individual contributor role focused on building scalable front-end platforms, strengthening developer experience, and enabling engineering organizations to move faster through reusable systems, platform standards, and modern delivery practices.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.value + stat.text}>
                <h3>{stat.value}</h3>
                <p>{stat.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <p className="section-label">Experience</p>
          <h2>Professional experience</h2>

          <article className="timeline-item">
            <div className="timeline-meta">
              <h3>Publicis Sapient</h3>
              <p>Senior Front-End Technical Architect</p>
              <span>Aug 2011 – Present</span>
            </div>
            <div className="timeline-content">
              <ul>
                {experienceBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="section section-alt">
          <div className="container">
            <p className="section-label">Platforms built</p>
            <h2>Platform and architecture impact</h2>

            <div className="project-grid">
              {platforms.map((platform) => (
                <article className="project-card" key={platform.title}>
                  <h3>{platform.title}</h3>
                  <p>{platform.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">Selected projects</p>
            <h2>Representative client work</h2>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <p className="section-label">Skills</p>
            <h2>Technical strengths</h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.title}>
                  <h3>{skill.title}</h3>
                  <p>{skill.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container two-col">
          <div>
            <p className="section-label">Education</p>
            <h2>Academic background</h2>
          </div>
          <div>
            <p>MCA — Computer Applications — IGNOU</p>
            <p>B.Sc. Mathematics &amp; Economics — Kurukshetra University</p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-card">
            <div>
              <p className="section-label">Contact</p>
              <h2>Let’s build scalable platforms and better developer experiences.</h2>
              <p>
                Available for senior architect, principal individual contributor, developer experience, front-end architecture, and platform modernization opportunities.
              </p>
            </div>
            <div className="contact-details">
              <a href="mailto:meh.manoj@gmail.com">meh.manoj@gmail.com</a>
              <a href="tel:+19496915115">949-691-5115</a>
              <p>Irvine, California</p>
              <p>U.S. Permanent Resident</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
