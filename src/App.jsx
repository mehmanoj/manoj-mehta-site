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

const experienceBullets = ['Architect and deliver enterprise-scale front-end and platform systems using React, TypeScript, micro-frontends, and cloud-native engineering practices.', 'Provide technical leadership across multiple engineering teams, guiding architecture decisions, platform standards, and developer experience improvements.', 'Lead technical direction across telecom, financial services, retail, and healthcare engagements, partnering closely with product, design, backend, QA, and DevOps teams.', 'Design reusable UI frameworks, shared component libraries, and platform patterns that improve developer experience, consistency, and speed of delivery across teams.', 'Define scalable integration patterns for REST and GraphQL services, including Backend-for-Frontend (BFF) architectures supporting complex enterprise product experiences.', 'Implement CI/CD pipelines, release guardrails, and modern DevOps workflows to support reliable, secure, and automated delivery.', 'Mentor engineers, review architecture, and drive best practices in performance optimization, maintainability, and platform scalability.'];

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

const sectionLabelClass = 'mb-4 text-[0.95rem] font-bold tracking-[0.01em] text-[#2563eb]';
const cardClass = 'rounded-[24px] border border-[rgba(37,99,235,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.98))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]';
const containerClass = 'mx-auto w-[min(calc(100%-2rem),1180px)]';

function App() {
  return (
    <>
      <header className='px-0 pt-5 pb-10 sm:pt-4 sm:pb-8'>
        <div className={`${containerClass} rounded-[32px] border border-[rgba(37,99,235,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.56))] px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-[10px] sm:px-5 sm:py-4 lg:px-8 lg:pt-[1.1rem] lg:pb-10`}>
          <nav className='flex flex-col items-start justify-between gap-4 pt-1 pb-3 xl:flex-row xl:items-start'>
            <div className='flex flex-wrap items-center gap-4 max-sm:items-start'>
              <div className='h-[60px] w-[60px] flex-none overflow-hidden rounded-full border-2 border-[rgba(37,99,235,0.22)] bg-white shadow-[0_10px_22px_rgba(37,99,235,0.12)]'>
                <img src='/profile.png' alt='Manoj Mehta' className='h-full w-full object-cover' />
              </div>

              <div className='flex flex-wrap items-center gap-3 max-sm:w-full max-sm:gap-2.5'>
                {contactChips.map((item) => (
                  <a key={item.label} href={item.href} className='inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.12)] bg-[rgba(255,255,255,0.9)] px-4 py-3 text-[0.92rem] font-semibold text-[#12203a] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-[1px] hover:border-[rgba(37,99,235,0.2)] hover:text-[#2563eb] hover:shadow-[0_12px_22px_rgba(15,23,42,0.06)] max-sm:w-full' {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <i className={`${item.icon} text-[0.95rem] text-[#2563eb]`} aria-hidden='true' />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className='flex gap-x-8 gap-y-3 pt-0 text-base font-semibold text-[#12203a] xl:pt-2'>
              <a href='#about' className='hover:text-[#2563eb]'>
                About
              </a>
              <a href='#objective' className='hover:text-[#2563eb]'>
                Objective
              </a>
              <a href='#experience' className='hover:text-[#2563eb]'>
                Experience
              </a>
              <a href='#projects' className='hover:text-[#2563eb]'>
                Projects
              </a>
              <a href='#skills' className='hover:text-[#2563eb]'>
                Skills
              </a>
              <a href='#contact' className='hover:text-[#2563eb]'>
                Contact
              </a>
            </div>
          </nav>

          <div className='pt-6 sm:pt-7 lg:pt-9'>
            <p className='mb-3 text-sm font-bold tracking-[0.01em] text-[#2563eb]'>Senior Front-End Architect • Principal UI Platform Engineer • Developer Experience</p>

            <h1 className='mb-4 text-[clamp(2.8rem,13vw,4rem)] leading-[0.98] font-extrabold tracking-[-0.05em] text-[#12203a] md:text-[3.2rem] md:leading-[0.94]'>Manoj Mehta</h1>

            <p className='mb-3 max-w-[900px] text-[1.06rem] font-semibold text-[#5b6b83]'>Architecting scalable UI platforms, micro-frontend ecosystems, and developer experience tooling for large enterprise engineering organizations.</p>

            <p className='max-w-[940px] text-[1.18rem] text-[#5b6b83]'>Senior Front-End Architect and platform engineering leader with ~20 years of experience designing and delivering enterprise-scale digital platforms across financial services, telecom, retail, and healthcare. Specialized in React/TypeScript ecosystems, micro-frontend architectures, GraphQL integrations, and developer platform engineering that enable large engineering organizations to build and ship faster.</p>

            <div className='my-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
              <a className='inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#2563eb,#1d4ed8)] px-6 py-4 font-bold text-white shadow-[0_14px_26px_rgba(37,99,235,0.22)] transition hover:-translate-y-[1px]' href='#contact'>
                Get in touch
              </a>
              <a className='inline-flex items-center justify-center rounded-full border border-[rgba(37,99,235,0.14)] bg-[rgba(255,255,255,0.92)] px-6 py-4 font-bold text-[#12203a] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-[1px]' href='/Manoj_Mehta_Resume3.pdf' download>
                Download PDF
              </a>
              <a className='inline-flex items-center justify-center rounded-full border border-[rgba(37,99,235,0.14)] bg-[rgba(255,255,255,0.92)] px-6 py-4 font-bold text-[#12203a] shadow-[0_8px_18px_rgba(15,23,42,0.04)] transition hover:-translate-y-[1px]' href='/Manoj_Mehta_Resume3.docx' download>
                Download DOCX
              </a>
            </div>

            <ul className='grid max-w-[760px] gap-3 pl-5 text-[#5b6b83]'>
              <li>20+ years designing enterprise-scale platforms across financial services, telecom, retail, and healthcare</li>
              <li>Module Federation micro-frontend architecture enabling 6+ teams to deploy independently</li>
              <li>Developer experience, GraphQL integration patterns, and platform engineering leadership</li>
            </ul>
          </div>
        </div>
      </header>

      <main className='pb-12'>
        <section id='about' className={`${containerClass} grid gap-10 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-16`}>
          <div>
            <p className={sectionLabelClass}>About</p>
            <h2 className='mb-4 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:max-w-[18ch] md:text-[3rem] md:leading-[1.04]'>Building scalable front-end platforms and stronger developer experience.</h2>
          </div>
          <div className='space-y-5 text-[#5b6b83]'>
            <p>I help organizations modernize digital platforms by combining strong front-end architecture with platform thinking, reusable engineering patterns, and developer-first workflows. My work focuses on making teams faster, systems more scalable, and product experiences more extensible.</p>
            <p>I partner closely with product, engineering, UX, QA, and DevOps teams to deliver enterprise-grade platforms, GraphQL and REST integration patterns, reusable component libraries, and AI-assisted development workflows that improve productivity and release velocity.</p>
          </div>
        </section>

        <section id='objective' className='border-y border-[rgba(37,99,235,0.06)] bg-[rgba(255,255,255,0.42)] py-16 backdrop-blur-[6px]'>
          <div className={`${containerClass} ${cardClass} grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-16`}>
            <div>
              <p className={sectionLabelClass}>Career Objective</p>
              <h2 className='mb-4 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:max-w-[18ch] md:text-[3rem] md:leading-[1.04]'>What I’m looking to build next</h2>
            </div>
            <div className='text-[#5b6b83]'>
              <p>I am looking to apply my experience in a senior architect or principal individual contributor role focused on building scalable front-end platforms, strengthening developer experience, and enabling engineering organizations to move faster through reusable systems, platform standards, and modern delivery practices.</p>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className={`${containerClass} grid gap-5 sm:grid-cols-2 xl:grid-cols-4`}>
            {stats.map((stat) => (
              <article className={cardClass} key={stat.value + stat.text}>
                <h3 className='mb-2 text-[2rem] font-semibold text-[#0f9f6e]'>{stat.value}</h3>
                <p className='text-[#5b6b83]'>{stat.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='experience' className={`${containerClass} py-16`}>
          <p className={sectionLabelClass}>Experience</p>
          <h2 className='mb-6 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:text-[3rem] md:leading-[1.04]'>Professional experience</h2>

          <article className={`${cardClass} grid gap-7 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]`}>
            <div>
              <h3 className='mb-2 text-xl font-semibold text-[#12203a]'>Publicis Sapient</h3>
              <p className='mb-2 text-[#5b6b83]'>Senior Front-End Technical Architect</p>
              <span className='font-bold tracking-[0.01em] text-[#2563eb]'>Aug 2011 – Present</span>
            </div>

            <div className='text-[#5b6b83]'>
              <ul className='m-0 space-y-3 pl-5'>
                {experienceBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className='border-y border-[rgba(37,99,235,0.06)] bg-[rgba(255,255,255,0.42)] py-16 backdrop-blur-[6px]'>
          <div className={containerClass}>
            <p className={sectionLabelClass}>Platforms built</p>
            <h2 className='mb-6 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:text-[3rem] md:leading-[1.04]'>Platform and architecture impact</h2>

            <div className='grid gap-5 md:grid-cols-2'>
              {platforms.map((platform) => (
                <article className={cardClass} key={platform.title}>
                  <h3 className='mb-3 text-xl font-semibold text-[#12203a]'>{platform.title}</h3>
                  <p className='text-[#5b6b83]'>{platform.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='projects' className='py-16'>
          <div className={containerClass}>
            <p className={sectionLabelClass}>Selected projects</p>
            <h2 className='mb-6 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:text-[3rem] md:leading-[1.04]'>Representative client work</h2>

            <div className='grid gap-5 md:grid-cols-2'>
              {projects.map((project) => (
                <article className={cardClass} key={project.title}>
                  <h3 className='mb-2 text-xl font-semibold text-[#12203a]'>{project.title}</h3>
                  <p className='mb-3 text-sm font-bold tracking-[0.01em] text-[#2563eb]'>{project.subtitle}</p>
                  <p className='text-[#5b6b83]'>{project.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='skills' className='border-y border-[rgba(37,99,235,0.06)] bg-[rgba(255,255,255,0.42)] py-16 backdrop-blur-[6px]'>
          <div className={containerClass}>
            <p className={sectionLabelClass}>Skills</p>
            <h2 className='mb-6 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:text-[3rem] md:leading-[1.04]'>Technical strengths</h2>

            <div className='grid gap-5 md:grid-cols-2'>
              {skills.map((skill) => (
                <article className={cardClass} key={skill.title}>
                  <h3 className='mb-3 text-xl font-semibold text-[#12203a]'>{skill.title}</h3>
                  <p className='text-[#5b6b83]'>{skill.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${containerClass} grid gap-10 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-16`}>
          <div>
            <p className={sectionLabelClass}>Education</p>
            <h2 className='mb-4 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:max-w-[18ch] md:text-[3rem] md:leading-[1.04]'>Academic background</h2>
          </div>
          <div className='space-y-3 text-[#5b6b83]'>
            <p>MCA — Computer Applications — IGNOU</p>
            <p>B.Sc. Mathematics &amp; Economics — Kurukshetra University</p>
          </div>
        </section>

        <section id='contact' className='py-16'>
          <div className={`${containerClass} ${cardClass} grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]`}>
            <div>
              <p className={sectionLabelClass}>Contact</p>
              <h2 className='mb-4 text-[clamp(2rem,10vw,2.7rem)] leading-[1.08] font-bold tracking-[-0.04em] text-[#12203a] md:text-[3rem] md:leading-[1.04]'>Let’s build scalable platforms and better developer experiences.</h2>
              <p className='text-[#5b6b83]'>Available for senior architect, principal individual contributor, developer experience, front-end architecture, and platform modernization opportunities.</p>
            </div>

            <div className='grid content-start gap-3'>
              <a href='mailto:meh.manoj@gmail.com' className='text-base font-semibold text-[#12203a] hover:text-[#2563eb]'>
                meh.manoj@gmail.com
              </a>
              <a href='tel:+19496915115' className='text-base font-semibold text-[#12203a] hover:text-[#2563eb]'>
                949-691-5115
              </a>
              <p className='mb-0 text-[#5b6b83]'>Irvine, California</p>
              <p className='mb-0 text-[#5b6b83]'>U.S. Permanent Resident</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
