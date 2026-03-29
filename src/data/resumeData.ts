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
  { value: '20+', label: 'Years building web platforms' },
  { value: '30%', label: 'UI effort reduced via AI workflows' },
  { value: '20%', label: 'Page-load improvement on key platforms' },
  { value: '0→1', label: 'Prototype-to-product execution' },
];

export const achievements: string[] = [
  'Built user-centric web platforms across financial services, retail, telecom, healthcare, and enterprise support environments.',
  'Reduced UI development effort by ~30% through AI-assisted workflows, automated code generation, and reusable engineering patterns.',
  'Improved performance of production web applications by ~20% through front-end optimization, modular architecture, and delivery discipline.',
  'Built reusable component systems and front-end foundations that accelerated prototyping, consistency, and cross-team delivery.',
  'Presented high-fidelity interactive prototypes to stakeholders to clarify product direction and turn abstract concepts into working software.',
  'Bridged design and engineering through Figma-to-code implementation, rapid prototyping, and hands-on architecture leadership.',
];

export const experienceBullets: string[] = [
  'Translate ambiguous product ideas into production-grade experiences with React, TypeScript, Next.js, and modern front-end architecture.',
  'Prototype copilots, workflow automation patterns, and AI-assisted interfaces that reduce friction and improve user decision-making.',
  'Partner tightly with product managers and designers to move from concept to validated UX through working demos instead of static discussion.',
  'Build reusable design systems, component libraries, and architecture patterns that scale across teams and channels.',
  'Lead hands-on engineering across UX architecture, accessibility, testing, performance, and developer enablement.',
  'Accelerate delivery through AI-first workflows including Slingshot, GitHub Copilot, Figma-to-code, and prompt-driven engineering tools.',
];

export const platforms: TextItem[] = [
  {
    title: 'AI-first UX engineering workflows',
    body: 'Built repeatable workflows combining Figma-to-code, Jira-integrated development, custom AI skills, and rapid prototype loops.',
  },
  {
    title: 'Reusable front-end systems',
    body: 'Designed component libraries and scalable UI patterns that improved consistency and shortened the path from idea to release.',
  },
  {
    title: 'Enterprise-grade product interfaces',
    body: 'Delivered data-rich and workflow-heavy user interfaces with strong attention to usability, performance, and maintainability.',
  },
  {
    title: 'Copilot-style support experiences',
    body: 'Explored agentic and assistive UX patterns to automate troubleshooting, reduce support friction, and improve task completion.',
  },
];

export const projects: Project[] = [
  {
    title: 'AI-First UX Engineering Initiative',
    subtitle: 'Publicis Sapient · Current focus',
    body: 'Leading AI-first development approaches that use Slingshot, automation, and prototype-led delivery to accelerate UI work and validate product ideas faster.',
  },
  {
    title: 'Enterprise Support Copilot Concepts',
    subtitle: 'AI-assisted user workflows',
    body: 'Prototyped copilot-style interfaces and automated troubleshooting flows that improved user efficiency and reduced dependence on static documentation.',
  },
  {
    title: 'Modular Web Platforms',
    subtitle: 'Fortune 500 delivery across industries',
    body: 'Architected scalable web applications and reusable front-end frameworks supporting high-traffic environments and multi-team delivery.',
  },
  {
    title: 'Financial Analytics & Visualization',
    subtitle: 'Consulting and platform delivery',
    body: 'Built dashboards and data-visualization experiences that made complex information easier to interpret and act on for business stakeholders.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI-assisted UX delivery',
    outcome: 'Faster prototyping and ~30% lower UI effort',
    summary:
      'Introduced an AI-first workflow that combined prompt-driven development, design-to-code acceleration, and reusable implementation patterns.',
    bullets: [
      'Used Slingshot, GitHub Copilot, and Figma-to-code workflows to shorten iteration cycles.',
      'Built working demos early so product and design teams could validate concepts with less ambiguity.',
      'Turned repeatable prompts and workflows into team-level leverage instead of one-off experimentation.',
    ],
  },
  {
    title: 'Support workflow modernization',
    outcome: 'Lower user friction and better self-service',
    summary:
      'Designed AI-driven troubleshooting and copilot-style support experiences that helped users resolve issues with less manual digging.',
    bullets: [
      'Mapped friction points in support journeys and translated them into assistive interface concepts.',
      'Simulated automated guidance and response flows to validate how intelligent UX could improve efficiency.',
      'Presented prototypes to stakeholders to shape product direction through concrete interaction models.',
    ],
  },
  {
    title: 'Enterprise front-end architecture',
    outcome: '~20% performance gains on key web experiences',
    summary:
      'Led architecture and implementation for modular applications where scalability, usability, and maintainability all mattered at once.',
    bullets: [
      'Standardized front-end patterns across teams to improve consistency and reduce delivery overhead.',
      'Optimized performance and interaction quality for high-traffic digital products.',
      'Bridged design intent and engineering execution with high-fidelity implementations.',
    ],
  },
];

export const testimonialThemes: TestimonialTheme[] = [
  {
    quote:
      'Known for turning vague product ideas into working experiences quickly, which helps teams align faster and make better roadmap decisions.',
    role: 'Representative product/design feedback theme',
  },
  {
    quote:
      'Brings architecture depth without losing the craft of implementation—strong at connecting design, engineering, and delivery.',
    role: 'Representative engineering leadership feedback theme',
  },
  {
    quote:
      'Especially effective in early-stage UX exploration where prototypes need to be both believable and technically grounded.',
    role: 'Representative stakeholder feedback theme',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How AI-first UX engineering changes the prototype-to-product loop',
    category: 'AI + Product Delivery',
    summary: 'A practical view on using copilots, prompt systems, and working demos to reduce ambiguity and accelerate UX validation.',
  },
  {
    title: 'From Figma to credible product demo: what enterprise teams actually need',
    category: 'Design to Code',
    summary: 'Lessons from translating interaction ideas into high-fidelity implementations that product teams can react to immediately.',
  },
  {
    title: 'Designing support experiences that feel intelligent, not scripted',
    category: 'Intelligent Interfaces',
    summary: 'Patterns for building AI-assisted guidance, troubleshooting flows, and copilot-like interactions that genuinely reduce user friction.',
  },
];

export const skills: TextItem[] = [
  {
    title: 'Frontend & UX engineering',
    body: 'React, TypeScript, Next.js, Redux, Micro-Frontends, design systems, component libraries',
  },
  {
    title: 'AI & intelligent interfaces',
    body: 'LLMs, copilot-style interfaces, AI-assisted workflows, prompt engineering, Slingshot, GitHub Copilot',
  },
  {
    title: 'Prototyping & experimentation',
    body: 'Vite, Next.js, interaction design implementation, Figma to code, usability iteration, working demos',
  },
  {
    title: 'Testing & quality',
    body: 'Jest, React Testing Library, Cypress',
  },
  {
    title: 'Cloud, devops & delivery',
    body: 'AWS, Azure, GCP, GitHub Actions, Jenkins',
  },
  {
    title: 'Accessibility & performance',
    body: 'Mantine, Chakra UI, Ant Design, Shadcn/UI, WAVE, AudioEye, Lighthouse, Core Web Vitals',
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
