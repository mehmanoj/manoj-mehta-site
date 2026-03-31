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
  { value: '20+', label: 'Years in frontend engineering and architecture' },
  { value: '30%', label: 'Lower UI effort through AI-assisted workflows' },
  { value: '20%', label: 'Performance improvement on production web apps' },
  { value: '4', label: 'Named fintech clients across analytics-heavy delivery' },
];

export const achievements: string[] = [
  'Built scalable enterprise web applications, AI-powered interfaces, and data-intensive dashboards across financial services and other large-scale industries.',
  'Reduced UI development effort by about 30% by driving adoption of AI-assisted workflows, automated code-generation approaches, and reusable engineering patterns.',
  'Delivered data-intensive UI solutions for Capital Group, Franklin Templeton, Empower, and Citigroup using Recharts and D3.js.',
  'Improved web application performance by about 20% through frontend optimization, scalable architecture, and maintainable delivery practices.',
  'Translated business requirements and Figma designs into production-ready interfaces aligned with usability, accessibility, and business goals.',
  'Built configurable dashboard experiences, component libraries, and design systems that supported consistency across distributed teams.',
];

export const experienceBullets: string[] = [
  'Build React, Next.js, and TypeScript interfaces for enterprise-grade products with strong performance, accessibility, and delivery discipline.',
  'Design AI-powered, chat-driven workflows and dashboard experiences that help users analyze data and make faster decisions.',
  'Partner with business stakeholders, product teams, and engineers to translate requirements into scalable frontend and platform solutions.',
  'Use Recharts, D3.js, and reusable visualization patterns to support analytics-heavy workflows and configurable reporting experiences.',
  'Lead hands-on engineering across architecture, design-to-code implementation, testing, performance, and component-system development.',
  'Accelerate delivery through AI-assisted workflows including Sapient Slingshot, GitHub Copilot, and repeatable engineering patterns.',
];

export const platforms: TextItem[] = [
  {
    title: 'AI product UI engineering',
    body: 'Design and build chat-driven workflows, copilot-style interactions, and analytics-heavy interfaces that support enterprise decision-making.',
  },
  {
    title: 'Financial analytics and dashboards',
    body: 'Build Recharts and D3.js visualization layers, configurable dashboards, and data-rich workflows for financial services clients.',
  },
  {
    title: 'Scalable frontend systems',
    body: 'Develop component libraries, design systems, and modular frontend architecture that improve consistency and team velocity.',
  },
  {
    title: 'Business-to-technical translation',
    body: 'Work closely with stakeholders to turn requirements, workflows, and Figma designs into production-ready web applications.',
  },
];

export const projects: Project[] = [
  {
    title: 'AI Product UI Engineering',
    subtitle: 'Publicis Sapient · Current project',
    body: 'Building AI-powered interfaces, chat-driven workflows, and analytics dashboards that reduce friction and improve decision-making for enterprise support use cases.',
  },
  {
    title: 'Frontend Architecture for Enterprise Platforms',
    subtitle: 'Fortune 500 product delivery',
    body: 'Leading modular frontend architecture, reusable component systems, and cross-team delivery patterns for large-scale enterprise platforms.',
  },
  {
    title: 'Financial Analytics & Visualization',
    subtitle: 'Capital Group, Franklin Templeton, Empower, Citigroup',
    body: 'Delivered scalable dashboards and analytics interfaces using Recharts and D3.js to make complex financial data easier to interpret and act on.',
  },
  {
    title: 'Design-to-Code Delivery',
    subtitle: 'Figma to production-ready UI',
    body: 'Translate product and UX designs into scalable, accessible interfaces aligned with business requirements and modern frontend standards.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI-assisted delivery acceleration',
    outcome: 'About 30% lower UI effort and faster delivery cycles',
    summary:
      'Introduced AI-assisted workflows that combined Sapient Slingshot, automated code-generation approaches, and reusable implementation patterns.',
    bullets: [
      'Used repeatable AI workflows to reduce manual frontend effort and speed up implementation.',
      'Built working solutions early so stakeholders could validate flows through concrete interfaces.',
      'Turned experimentation into practical delivery leverage for ongoing enterprise work.',
    ],
  },
  {
    title: 'AI-powered support experiences',
    outcome: 'Improved user efficiency and less reliance on manual troubleshooting',
    summary:
      'Designed chat-driven workflows and copilot-style experiences that made enterprise support journeys more intuitive and efficient.',
    bullets: [
      'Mapped workflow friction into assistive UI patterns and intelligent interaction models.',
      'Combined business needs, interaction design, and technical feasibility in working demos.',
      'Helped shape product direction through stakeholder-ready interactive solutions.',
    ],
  },
  {
    title: 'Financial dashboards and configurable analytics',
    outcome: 'Clearer decision support for analytics-heavy workflows',
    summary:
      'Built data-intensive dashboards and visualization layers using Recharts and D3.js for financial services and enterprise platforms.',
    bullets: [
      'Designed reusable visualization patterns for different reporting and workflow needs.',
      'Focused on clarity, interaction quality, and faster access to business insights.',
      'Connected analytics UX with scalable frontend architecture and maintainable delivery.',
    ],
  },
];

export const testimonialThemes: TestimonialTheme[] = [
  {
    quote:
      'Known for turning complex requirements into production-ready interfaces that balance business goals, engineering quality, and user experience.',
    role: 'Representative stakeholder feedback theme',
  },
  {
    quote:
      'Brings architecture depth, strong frontend craft, and the ability to move from Figma or abstract requirements into scalable working software.',
    role: 'Representative product and engineering feedback theme',
  },
  {
    quote:
      'Especially effective on analytics-heavy and workflow-heavy products where UI quality, system thinking, and delivery speed all matter.',
    role: 'Representative delivery leadership feedback theme',
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Building AI-powered interfaces that feel useful in enterprise products',
    category: 'AI + Product Delivery',
    summary: 'Practical lessons from designing chat-driven workflows and assistive UX that reduce friction instead of adding noise.',
  },
  {
    title: 'What makes financial dashboards actually useful',
    category: 'Analytics UX',
    summary: 'A frontend perspective on configurable analytics, visual hierarchy, and decision-support design for data-heavy products.',
  },
  {
    title: 'Translating business requirements and Figma designs into scalable frontend systems',
    category: 'Frontend Architecture',
    summary: 'How strong component systems and design-to-code discipline help enterprise teams ship faster without losing quality.',
  },
];

export const skills: TextItem[] = [
  {
    title: 'Frontend engineering',
    body: 'React, Next.js, TypeScript, JavaScript, Redux, Micro-Frontends, Component Libraries',
  },
  {
    title: 'Styling and UI systems',
    body: 'Tailwind CSS, CSS Modules, Mantine, Chakra UI, Ant Design, Shadcn/UI, Design Systems',
  },
  {
    title: 'Data visualization',
    body: 'Recharts, D3.js, Chart.js, Interactive Dashboards',
  },
  {
    title: 'AI-assisted development',
    body: 'LLMs, AI-assisted workflows, Copilot-style interfaces, prompt engineering, Sapient Slingshot, GitHub Copilot',
  },
  {
    title: 'Testing and quality',
    body: 'Jest, React Testing Library, Cypress',
  },
  {
    title: 'Performance, accessibility, and delivery',
    body: 'Lighthouse, SpeedCurve, Core Web Vitals, WAVE, AudioEye, Responsive Design, AWS, Azure, GCP, GitHub Actions, Jenkins, REST, GraphQL, Java, SQL',
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
    icon: 'fa-brands fa-linkedin-in',
    external: true,
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    external: true,
  },
];
