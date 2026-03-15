export type Metric = {
  value: string;
  label: string;
};

export type TextItem = {
  title: string;
  body: string;
};

export type Project = {
  title: string;
  subtitle: string;
  body: string;
};

export type ContactLink = {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
};

export const impactMetrics: Metric[] = [
  { value: '20+', label: 'Years of experience' },
  { value: '6+', label: 'Teams enabled to deploy independently' },
  { value: '35%', label: 'Reduction in release coordination time' },
  { value: '30%', label: 'Increase in deployment velocity' },
];

export const achievements: string[] = [
  'Architected front-end platforms supporting millions of users across telecom, financial services, retail, and healthcare organizations.',
  'Enabled 6+ distributed engineering teams to independently build and deploy applications through a Module Federation micro-frontend architecture.',
  'Created reusable UI component libraries and shared platform frameworks that reduced feature development time by ~25%.',
  'Improved performance of high-traffic digital commerce platforms by ~20% through bundle optimization, code splitting, and rendering improvements.',
  'Established CI/CD pipelines and automated release workflows that increased deployment velocity by ~30%.',
  'Introduced AI-assisted engineering workflows improving developer productivity by ~15–20%.',
];

export const experienceBullets: string[] = [
  'Architect and deliver enterprise-scale front-end and platform systems using React, TypeScript, micro-frontends, and cloud-native engineering practices.',
  'Provide technical leadership across multiple engineering teams, guiding architecture decisions, platform standards, and developer experience improvements.',
  'Lead technical direction across telecom, financial services, retail, and healthcare engagements, partnering closely with product, design, backend, QA, and DevOps teams.',
  'Design reusable UI frameworks, shared component libraries, and platform patterns that improve developer experience, consistency, and speed of delivery across teams.',
  'Define scalable integration patterns for REST and GraphQL services, including Backend-for-Frontend (BFF) architectures supporting complex enterprise product experiences.',
  'Implement CI/CD pipelines, release guardrails, and modern DevOps workflows to support reliable, secure, and automated delivery.',
  'Mentor engineers, review architecture, and drive best practices in performance optimization, maintainability, and platform scalability.',
];

export const platforms: TextItem[] = [
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

export const projects: Project[] = [
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

export const skills: TextItem[] = [
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

export const contactLinks: ContactLink[] = [
  {
    href: 'mailto:meh.manoj@gmail.com',
    label: 'meh.manoj@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
  {
    href: 'tel:+19496915115',
    label: '949-691-5115',
    icon: 'fa-solid fa-phone',
  },
  {
    href: 'https://linkedin.com/in/manoj-mehta-4486302',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    external: true,
  },
  {
    href: 'https://github.com/mehmanoj',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    external: true,
  },
];
