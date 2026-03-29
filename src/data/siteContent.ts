import type { DetailItem, ProjectItem, UsesSection, WorkExperienceItem } from '../types/site';

export const workExperience: WorkExperienceItem[] = [
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

export const articleDetails: DetailItem[] = [
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

export const projectDetails: ProjectItem[] = [
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
    image: '/project-ai-first-ux-engineering-initiative.png',
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
    image: '/project-enterprise-support-copilot-concepts.png',
  },
  {
    slug: 'modular-web-platforms',
    title: 'Modular Web Platforms',
    subtitle: 'Architecture across industries',
    summary:
      'Architected scalable front-end systems and modular web applications for large, high-traffic environments.',
    impact: 'Improved maintainability, consistency, and performance across multi-team delivery.',
    body: [
      'Across enterprise engagements, the work centered on building front-end foundations that scale. That included modular architecture, shared patterns, and implementation discipline that made complex environments easier to evolve.',
      'The practical value of modularity is not architecture for its own sake. It is enabling teams to work independently, ship with more confidence, and maintain consistency across products without unnecessary duplication.',
      'This work often sat at the intersection of system design and hands-on implementation: defining structures, building shared primitives, and ensuring the architecture held up under real delivery pressure.',
    ],
    bullets: [
      'Led React and TypeScript architecture for modular enterprise platforms.',
      'Balanced team autonomy with reusable standards and shared front-end systems.',
      'Improved delivery quality by aligning architecture with real team workflows.',
    ],
    tags: ['React', 'TypeScript', 'Micro-frontends', 'Component library', 'APIs'],
    image: '/project-modular-web-platforms.png',
  },
  {
    slug: 'financial-analytics-visualization',
    title: 'Financial Analytics & Visualization',
    subtitle: 'Consulting and data-rich product work',
    summary:
      'Built dashboards and visualization experiences that made complex data easier to interpret and act on.',
    impact: 'Made dense business information clearer for decision-makers and end users.',
    body: [
      'Earlier in my career, a significant amount of work involved financial applications and analytics-heavy interfaces. These products required translating dense business data into workflows and visuals that were easier for stakeholders to interpret.',
      'The strongest dashboard work is not about adding more charts. It is about deciding which information matters, how it should be grouped, and how interaction design can support decision-making instead of overwhelm it.',
      'That foundation in data-rich UX still shapes how I approach enterprise product design today: prioritize clarity, reduce unnecessary friction, and make complexity feel more understandable.',
    ],
    bullets: [
      'Built dashboards and business visualization tools in enterprise consulting contexts.',
      'Focused on clarity, hierarchy, and decision-support rather than visual density alone.',
      'Carried those lessons into later product and platform architecture work.',
    ],
    tags: ['React', 'TypeScript', 'UI/UX', 'Performance'],
    image: '/project-financial-analytics-visualization.png',
  },
];

export const usesSections: UsesSection[] = [
  {
    title: 'Frontend platform engineering',
    items: [
      'React, TypeScript, Next.js, Redux, and micro-frontends for modular front-end systems',
      'Vite and Webpack depending on product maturity and migration constraints',
      'Component libraries and design systems built for team-scale delivery',
    ],
  },
  {
    title: 'Architecture and collaboration',
    items: [
      'Figma as a practical bridge between design intent and implementation',
      'A strong preference for working demos over abstract requirement debates',
      'Architecture patterns that increase team autonomy without losing consistency',
    ],
  },
  {
    title: 'AI-assisted workflows',
    items: [
      'Sapient Slingshot, GitHub Copilot, Codex, and structured prompt workflows',
      'Figma and Jira MCP servers as accelerators in the design-to-delivery loop',
      'Reusable AI patterns and conventions to turn repeatable workflows into team leverage',
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
