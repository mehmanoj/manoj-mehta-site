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

export type CaseStudy = {
  title: string;
  outcome: string;
  summary: string;
  bullets: string[];
};

export type BlogPost = {
  title: string;
  category: string;
  summary: string;
};

export type TestimonialTheme = {
  quote: string;
  role: string;
};

export type ContactLink = {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
};

export const impactMetrics: Metric[] = [
  { value: '20+', label: 'Years building enterprise frontend platforms' },
  { value: '4', label: 'Named fintech clients across analytics-heavy work' },
  { value: '30%', label: 'Lower UI effort through AI-assisted workflows' },
  { value: '20%', label: 'Page-load improvement on production web apps' },
];

export const achievements: string[] = [
  'Delivered data-intensive UI solutions for Capital Group, Franklin Templeton, Empower, and Citigroup using Recharts and D3.js.',
  'Built AI-powered user interfaces, including chat-driven workflows and copilot-style experiences, for enterprise support and product use cases.',
  'Translated business requirements and Figma designs into scalable, production-ready interfaces aligned with usability, accessibility, and business goals.',
  'Built configurable dashboard and analytics interfaces using reusable visualization patterns for varied reporting workflows.',
  'Contributed reusable component libraries, internal documentation, and cross-team knowledge sharing to improve consistency across distributed teams.',
  'Reduced UI development effort by roughly 30% through AI-assisted development workflows, automated code generation, and reusable patterns.',
];

export const experienceBullets: string[] = [
  'Translate business requirements into production-quality SaaS interfaces built with React, Next.js, TypeScript, and modular frontend architecture.',
  'Design chat-driven workflows, AI-powered user interfaces, and analytics experiences that help users make faster decisions with less friction.',
  'Build interactive dashboards with Recharts and D3.js for financial services and other data-intensive enterprise contexts.',
  'Partner with stakeholders, product teams, and engineers to define scalable frontend and platform solutions aligned to business objectives.',
  'Own feature delivery from design handoff through implementation, performance optimization, documentation, and rollout.',
  'Use AI-assisted workflows such as Slingshot and GitHub Copilot to accelerate delivery while maintaining quality and consistency.',
];

export const platforms: TextItem[] = [
  {
    title: 'AI product UI engineering',
    body: 'Designed and built chat-driven workflows, copilot-style interfaces, and decision-support experiences for enterprise product use cases.',
  },
  {
    title: 'Financial analytics dashboards',
    body: 'Built data visualization layers with Recharts and D3.js that helped business users interpret complex information faster and more confidently.',
  },
  {
    title: 'Configurable frontend systems',
    body: 'Created reusable visualization and component patterns that supported different business workflows, reporting needs, and feature teams.',
  },
  {
    title: 'Design-to-code delivery',
    body: 'Translated Figma and product designs into production-ready interfaces with strong attention to usability, accessibility, and performance.',
  },
];

export const projects: Project[] = [
  {
    title: 'AI Product UI Engineering',
    subtitle: 'Current project · GMR Platform',
    body: 'Built AI-powered user interfaces, chat-driven workflows, and interactive analytics dashboards while partnering with stakeholders to shape enterprise support experiences.',
  },
  {
    title: 'Financial Analytics Dashboards',
    subtitle: 'Capital Group, Franklin Templeton, Empower, Citigroup',
    body: 'Delivered scalable dashboard and analytics interfaces with Recharts and D3.js for financial services clients working with complex data and reporting workflows.',
  },
  {
    title: 'Configurable Enterprise UI Systems',
    subtitle: 'Reusable patterns across business workflows',
    body: 'Created configurable dashboards, component libraries, and design systems that improved consistency, maintainability, and delivery speed across teams.',
  },
  {
    title: 'AI-Assisted Development Workflows',
    subtitle: 'Slingshot + GitHub Copilot',
    body: 'Introduced AI-assisted delivery patterns that reduced UI effort, accelerated build cycles, and improved the speed of design-to-implementation handoff.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI-powered support experiences',
    outcome: '~30% lower UI effort and faster concept-to-delivery cycles',
    summary:
      'Shaped enterprise support journeys with AI-powered interfaces, chat-driven workflows, and copilot-style experiences that reduced friction and clarified next actions.',
    bullets: [
      'Partnered with stakeholders to identify workflow friction and convert it into concrete technical solutions.',
      'Built chat-based experiences and analytics views that made troubleshooting and decision support easier to navigate.',
      'Used Slingshot and automated code-generation patterns to accelerate frontend delivery without sacrificing quality.',
    ],
  },
  {
    title: 'Financial dashboards and visualization',
    outcome: 'Faster data-driven decisions in analytics-heavy interfaces',
    summary:
      'Delivered dashboards and visualization layers using Recharts and D3.js for financial services clients where clarity, interaction design, and reporting workflows all mattered.',
    bullets: [
      'Built scalable dashboard interfaces across Capital Group, Franklin Templeton, Empower, and Citigroup engagements.',
      'Used reusable visualization patterns to support different business workflows and reporting needs.',
      'Focused on making complex financial information easier to interpret and act on.',
    ],
  },
  {
    title: 'Enterprise frontend architecture',
    outcome: '~20% performance gains on key web experiences',
    summary:
      'Led architecture and delivery for modular enterprise applications, translating product and design intent into production-ready interfaces and scalable frontend systems.',
    bullets: [
      'Gathered requirements and translated workflows into technical specifications aligned with business objectives.',
      'Built scalable design systems and reusable component libraries for maintainable multi-team delivery.',
      'Optimized application performance while preserving usability, accessibility, and consistency.',
    ],
  },
];

export const testimonialThemes: TestimonialTheme[] = [
  {
    quote:
      'Known for connecting business requirements to production-ready frontend solutions without losing speed or implementation quality.',
    role: 'Representative stakeholder feedback theme',
  },
  {
    quote:
      'Brings strong architecture judgment while staying close to the details of interaction quality, accessibility, and implementation.',
    role: 'Representative engineering leadership feedback theme',
  },
  {
    quote:
      'Particularly effective in analytics-heavy and AI-assisted experiences where clarity, workflow design, and delivery discipline all matter.',
    role: 'Representative product/design feedback theme',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Designing chat-driven workflows for enterprise products',
    category: 'AI + Product Delivery',
    summary:
      'Patterns for creating AI-powered user interfaces that reduce friction and help users move through complex tasks with confidence.',
  },
  {
    title: 'What makes a dashboard useful in financial services',
    category: 'Data Visualization',
    summary:
      'A practical view on building analytics interfaces that balance clarity, hierarchy, configurability, and decision support.',
  },
  {
    title: 'From Figma to production-ready enterprise UI',
    category: 'Design to Code',
    summary:
      'Lessons from translating product and UX designs into scalable interfaces that meet business, usability, and performance requirements.',
  },
];

export const skills: TextItem[] = [
  {
    title: 'Frontend engineering',
    body: 'React, Next.js, TypeScript, JavaScript, Redux, Micro-Frontends, component libraries, design systems',
  },
  {
    title: 'Styling and UI systems',
    body: 'Tailwind CSS, CSS Modules, Mantine, Chakra UI, Ant Design, Shadcn/UI',
  },
  {
    title: 'Data visualization',
    body: 'Recharts, D3.js, Chart.js, interactive dashboards, reusable visualization patterns',
  },
  {
    title: 'AI-powered UI and workflows',
    body: 'LLMs, copilot-style interfaces, AI-assisted workflows, prompt engineering, Sapient Slingshot, GitHub Copilot',
  },
  {
    title: 'Testing and quality',
    body: 'Jest, React Testing Library, Cypress, accessibility validation, responsive design',
  },
  {
    title: 'Cloud, APIs, and delivery',
    body: 'REST, GraphQL, Java, SQL, AWS, Azure, GCP, GitHub Actions, Jenkins',
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
