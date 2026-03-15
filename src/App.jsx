const impactMetrics = [
  { value: '20+', label: 'Years of experience' },
  { value: '6+', label: 'Teams enabled to deploy independently' },
  { value: '35%', label: 'Reduction in release coordination time' },
  { value: '30%', label: 'Increase in deployment velocity' },
];

const achievements = ['Architected front-end platforms supporting millions of users across telecom, financial services, retail, and healthcare organizations.', 'Enabled 6+ distributed engineering teams to independently build and deploy applications through a Module Federation micro-frontend architecture.', 'Created reusable UI component libraries and shared platform frameworks that reduced feature development time by ~25%.', 'Improved performance of high-traffic digital commerce platforms by ~20% through bundle optimization, code splitting, and rendering improvements.', 'Established CI/CD pipelines and automated release workflows that increased deployment velocity by ~30%.', 'Introduced AI-assisted engineering workflows improving developer productivity by ~15–20%.'];

const experienceBullets = ['Architect and deliver enterprise-scale front-end and platform systems using React, TypeScript, micro-frontends, and cloud-native engineering practices.', 'Provide technical leadership across multiple engineering teams, guiding architecture decisions, platform standards, and developer experience improvements.', 'Lead technical direction across telecom, financial services, retail, and healthcare engagements, partnering closely with product, design, backend, QA, and DevOps teams.', 'Design reusable UI frameworks, shared component libraries, and platform patterns that improve developer experience, consistency, and speed of delivery across teams.', 'Define scalable integration patterns for REST and GraphQL services, including Backend-for-Frontend (BFF) architectures supporting complex enterprise product experiences.', 'Implement CI/CD pipelines, release guardrails, and modern DevOps workflows to support reliable, secure, and automated delivery.', 'Mentor engineers, review architecture, and drive best practices in performance optimization, maintainability, and platform scalability.'];

const platforms = [
  {
    title: 'Micro-Frontend Platform',
    body: 'Architected a Module Federation-based micro-frontend architecture enabling 6+ teams to independently develop and deploy front-end applications.',
  },
  {
    title: 'Developer Experience Platform',
    body: 'Designed reusable UI component libraries, shared workflows, and platform patterns adopted across enterprise applications.',
  },
  {
    title: 'UI Architecture Frameworks',
    body: 'Established scalable React and TypeScript architecture standards, reusable design patterns, and performance optimization strategies.',
  },
  {
    title: 'Analytics & Visualization Platforms',
    body: 'Built complex analytics interfaces including M.E.L.T and Exposure UI for financial portfolio analysis and data-heavy workflows.',
  },
];

const projects = [
  {
    title: 'Capital Group',
    subtitle: 'Investment Analytics Platform',
    body: 'Designed and built UI platforms including M.E.L.T and Exposure UI for portfolio analytics and risk analysis, delivering reusable front-end patterns for complex financial workflows.',
  },
  {
    title: 'Albertsons',
    subtitle: 'Retail Digital Platform',
    body: 'Architected a micro-frontend retail platform integrated with GraphQL BFF services to enable scalable front-end deployments across distributed teams.',
  },
  {
    title: 'Verizon',
    subtitle: 'Digital Commerce Platform Modernization',
    body: 'Led modernization of Verizon’s digital sales platform into a micro-frontend architecture using React, Next.js, and TypeScript, improving performance by ~20%.',
  },
  {
    title: 'GMR / AMCN',
    subtitle: 'AI-Enabled Digital Platform',
    body: 'Built an enterprise CMS-driven digital platform using ASP.NET MVC, Kentico CMS, and Tailwind CSS with AI-assisted development workflows for faster feature delivery.',
  },
];

const skills = [
  {
    title: 'Platform Engineering',
    body: 'Reusable component libraries, shared front-end frameworks, platform patterns, developer enablement',
  },
  {
    title: 'APIs & Integrations',
    body: 'REST, GraphQL, OpenAI APIs, BFF patterns, enterprise API integrations',
  },
  {
    title: 'Front-End Architecture',
    body: 'React, Next.js, TypeScript, JavaScript, Redux, Micro-Frontends',
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

const contactLinks = [
  { href: 'mailto:meh.manoj@gmail.com', label: 'meh.manoj@gmail.com' },
  { href: 'tel:+19496915115', label: '949-691-5115' },
  { href: 'https://linkedin.com/in/manoj-mehta-4486302', label: 'LinkedIn', external: true },
  { href: 'https://github.com/mehmanoj', label: 'GitHub', external: true },
];

const sectionLabelClass = 'text-xs font-semibold uppercase tracking-[0.18em] text-blue-600';
const sectionTitleClass = 'mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl';
const cardClass = 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm';

function App() {
  return (
    <div className='min-h-screen bg-transparent'>
      <main className='mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8'>
        <section className='overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]'>
          <div className='border-b border-slate-200 px-6 py-8 sm:px-8 lg:px-10'>
            <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
              <div className='max-w-3xl'>
                <p className='text-sm font-semibold tracking-[0.12em] text-blue-600 uppercase'>Senior Front-End Architect · Principal UI Platform Engineer</p>
                <h1 className='mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl'>Manoj Mehta</h1>
                <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg'>Architecting scalable UI platforms, micro-frontend ecosystems, and developer experience tooling for large enterprise engineering organizations.</p>

                <div className='mt-6 flex flex-wrap gap-3 text-sm text-slate-600'>
                  <span className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5'>Irvine, California</span>
                  <span className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5'>U.S. Permanent Resident</span>
                </div>
              </div>

              <div className='flex flex-col gap-3 lg:min-w-[250px]'>
                <a href='/Manoj_Mehta_Resume3.pdf' download className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700'>
                  Download PDF Resume
                </a>
                <a href='/Manoj_Mehta_Resume3.docx' download className='inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50'>
                  Download DOCX Resume
                </a>
                <a href='#contact' className='inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100'>
                  Contact
                </a>
              </div>
            </div>

            <div className='mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
              {impactMetrics.map((item) => (
                <div key={item.label} className='rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4'>
                  <div className='text-2xl font-bold tracking-tight text-slate-950'>{item.value}</div>
                  <div className='mt-1 text-sm leading-6 text-slate-600'>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='grid gap-0 lg:grid-cols-[1.25fr_0.75fr]'>
            <div className='border-b border-slate-200 px-6 py-8 sm:px-8 lg:border-r lg:border-b-0 lg:px-10'>
              <p className={sectionLabelClass}>Professional Summary</p>
              <p className='mt-4 text-[15px] leading-7 text-slate-700 sm:text-base'>Senior Front-End Architect and platform engineering leader with ~20 years of experience designing and delivering enterprise-scale digital platforms across financial services, telecom, retail, and healthcare. Specialized in React/TypeScript ecosystems, micro-frontend architectures, GraphQL integrations, and developer platform engineering that enable large engineering organizations to build and ship faster.</p>
              <p className='mt-4 text-[15px] leading-7 text-slate-700 sm:text-base'>Hands-on architect who enjoys solving complex UI architecture challenges while enabling strong developer experience through reusable platforms, component libraries, and scalable integration patterns. Looking to apply this experience in a senior architect or principal individual contributor role focused on building scalable front-end platforms and improving developer experience.</p>
            </div>

            <div className='px-6 py-8 sm:px-8 lg:px-8'>
              <p className={sectionLabelClass}>Contact</p>
              <div className='mt-4 space-y-3 text-sm text-slate-700'>
                {contactLinks.map((item) => (
                  <a key={item.label} href={item.href} className='block font-medium hover:text-blue-600' {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div className='mt-8'>
                <p className={sectionLabelClass}>Career Objective</p>
                <p className='mt-4 text-sm leading-7 text-slate-700'>Seeking senior architect or principal IC roles focused on front-end platforms, developer experience, scalable UI systems, and modern engineering delivery practices.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]'>
          <div className='space-y-8'>
            <section className={cardClass}>
              <p className={sectionLabelClass}>Selected Achievements</p>
              <h2 className={sectionTitleClass}>Architecture impact</h2>
              <ul className='mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-[15px]'>
                {achievements.map((item) => (
                  <li key={item} className='flex gap-3'>
                    <span className='mt-2 h-2 w-2 flex-none rounded-full bg-blue-600' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={cardClass} id='experience'>
              <p className={sectionLabelClass}>Professional Experience</p>
              <h2 className={sectionTitleClass}>Publicis Sapient</h2>
              <div className='mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between'>
                <p className='font-semibold text-slate-900'>Senior Front-End Technical Architect</p>
                <p className='text-slate-500'>Aug 2011 – Present</p>
              </div>

              <ul className='mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-[15px]'>
                {experienceBullets.map((item) => (
                  <li key={item} className='flex gap-3'>
                    <span className='mt-2 h-2 w-2 flex-none rounded-full bg-slate-400' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={cardClass} id='projects'>
              <p className={sectionLabelClass}>Selected Projects</p>
              <h2 className={sectionTitleClass}>Representative client work</h2>

              <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                {projects.map((project) => (
                  <article key={project.title} className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
                    <h3 className='text-base font-semibold text-slate-900'>{project.title}</h3>
                    <p className='mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600'>{project.subtitle}</p>
                    <p className='mt-3 text-sm leading-7 text-slate-700'>{project.body}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className='space-y-8'>
            <section className={cardClass}>
              <p className={sectionLabelClass}>Platforms Built</p>
              <h2 className={sectionTitleClass}>Platform leadership</h2>

              <div className='mt-6 space-y-5'>
                {platforms.map((platform) => (
                  <div key={platform.title}>
                    <h3 className='text-sm font-semibold text-slate-900'>{platform.title}</h3>
                    <p className='mt-2 text-sm leading-7 text-slate-700'>{platform.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={cardClass} id='skills'>
              <p className={sectionLabelClass}>Technical Skills</p>
              <h2 className={sectionTitleClass}>Core strengths</h2>

              <div className='mt-6 space-y-5'>
                {skills.map((skill) => (
                  <div key={skill.title}>
                    <h3 className='text-sm font-semibold text-slate-900'>{skill.title}</h3>
                    <p className='mt-2 text-sm leading-7 text-slate-700'>{skill.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={cardClass}>
              <p className={sectionLabelClass}>Education</p>
              <div className='mt-4 space-y-3 text-sm leading-7 text-slate-700'>
                <p>MCA — Computer Applications — IGNOU</p>
                <p>B.Sc. Mathematics &amp; Economics — Kurukshetra University</p>
              </div>
            </section>

            <section className={cardClass} id='contact'>
              <p className={sectionLabelClass}>Open To</p>
              <p className='mt-4 text-sm leading-7 text-slate-700'>Senior architect, principal individual contributor, front-end platform engineering, developer experience, and platform modernization opportunities.</p>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
