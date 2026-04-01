import type { DetailItem, ProjectItem, UsesSection, WorkExperienceItem } from '../../types/site';

export const workExperience: WorkExperienceItem[] = [
  {
    date: '2018 — Present',
    role: 'Frontend Architect',
    company: 'Publicis Sapient',
    body:
      'Lead architecture and frontend delivery for enterprise platforms, with current work focused on AI-powered interfaces, analytics dashboards, and stakeholder-driven product experiences.',
    bullets: [
      'Current project: AI Product UI Engineering for the GMR Platform — built AI-powered user interfaces, chat-driven workflows, and analytics dashboards for enterprise support use cases.',
      'Delivered data-intensive UI solutions for Capital Group, Franklin Templeton, Empower, and Citigroup using Recharts and D3.js.',
      'Partnered with business stakeholders, product teams, and engineers to gather requirements, translate workflows into technical specifications, and define scalable frontend and platform solutions.',
    ],
  },
  {
    date: '2011 — 2018',
    role: 'Senior UI Engineer',
    company: 'Publicis Sapient',
    body:
      'Built scalable single-page applications and enterprise frontends for financial services platforms with strong emphasis on usability, accessibility, and maintainability.',
    bullets: [
      'Integrated frontend applications with backend services and enterprise systems supporting business-critical workflows.',
      'Introduced testing and CI/CD practices that improved release quality and reduced regression issues.',
      'Partnered with design teams to translate product and UX designs into high-quality, production-ready interfaces.',
    ],
  },
  {
    date: '2005 — 2011',
    role: 'Consultant',
    company: 'Fidelity International',
    body:
      'Developed financial dashboards, reporting interfaces, and data-visualization tools that helped stakeholders interpret investment data and make informed decisions.',
    bullets: [
      'Built financial applications and reporting experiences aligned with business decision-making workflows.',
      'Translated business requirements into scalable technical solutions in a financial-services environment.',
      'Developed strong foundations in data visualization, Java, SQL, and enterprise delivery.',
    ],
  },
];

export const articleDetails: DetailItem[] = [
  {
    slug: 'designing-chat-driven-workflows',
    title: 'Designing chat-driven workflows for enterprise products',
    category: 'AI + Product Delivery',
    summary:
      'How to use chat-based interaction patterns to reduce friction, guide users through complex tasks, and still preserve product clarity.',
    body: [
      'Chat-driven workflows become valuable when they reduce the effort required to understand what to do next. In enterprise settings, that often means combining conversation with structure: clear next actions, context, and links back to the underlying workflow.',
      'The most effective interfaces are not just conversational shells. They integrate task state, supporting data, and decision context so users can move faster without losing confidence in what the system is doing.',
      'For product teams, the key is to design chat interactions as one part of a broader UI system rather than as a replacement for every other interface pattern.',
    ],
    bullets: [
      'Use conversation where it simplifies decisions, not where it adds overhead.',
      'Blend chat with data views, workflow state, and clear next actions.',
      'Treat conversational UX as a product system, not a novelty layer.',
    ],
  },
  {
    slug: 'what-makes-a-dashboard-useful',
    title: 'What makes a dashboard useful in financial services',
    category: 'Data Visualization',
    summary:
      'Dashboards become valuable when they support interpretation, prioritization, and action — not when they simply display more charts.',
    body: [
      'The real challenge in financial dashboards is deciding which information deserves attention and how interaction design should support decision-making under time pressure. Hierarchy, grouping, and defaults matter as much as the charts themselves.',
      'Reusable visualization patterns help teams move faster, but they only work when paired with an understanding of the workflow around the data: what users are comparing, what they are trying to explain, and what next steps the product should support.',
      'Good dashboard work combines technical implementation with product judgment, especially in enterprise settings where multiple stakeholders care about the same information in different ways.',
    ],
    bullets: [
      'Prioritize interpretation and next actions over visual density.',
      'Use reusable chart patterns without losing workflow-specific clarity.',
      'Design dashboards for business decisions, not only for reporting.',
    ],
  },
  {
    slug: 'from-figma-to-production-enterprise-ui',
    title: 'From Figma to production-ready enterprise UI',
    category: 'Design to Code',
    summary:
      'Bridging design and engineering requires more than visual fidelity; it requires scalable systems, implementation realism, and strong collaboration.',
    body: [
      'Production-ready interfaces come from translating design intent into components, states, data behaviors, and accessibility requirements that can hold up under real product constraints. The work is as much about systems thinking as visual implementation.',
      'When teams treat design handoff as a shared product conversation rather than a one-way spec, it becomes easier to resolve ambiguity earlier and build interfaces that are both more polished and more maintainable.',
      'That is especially true for configurable dashboards, analytics-heavy interfaces, and AI-powered experiences where the interaction model is often as important as the visual language.',
    ],
    bullets: [
      'Preserve design intent while building for scale and maintainability.',
      'Use handoff to resolve ambiguity early, not after implementation.',
      'Build UI systems that support configurability, quality, and reuse.',
    ],
  },
];

export const projectDetails: ProjectItem[] = [
  {
    slug: 'ai-product-ui-engineering',
    title: 'AI Product UI Engineering',
    subtitle: 'Publicis Sapient · Current GMR Platform work',
    summary:
      'Designed and built AI-powered interfaces, chat-driven workflows, and analytics dashboards for enterprise support experiences.',
    impact: 'Reduced UI development effort by about 30% while improving clarity and speed across delivery conversations.',
    body: [
      'This work focused on shaping AI-powered frontend experiences around real workflow friction. Rather than treating AI as a separate layer, the interface design centered on where users needed guidance, decisions, and faster access to context.',
      'The resulting product concepts combined chat-driven interactions, supporting analytics views, and reusable frontend patterns that could scale across broader enterprise use cases.',
      'A parallel goal was improving the delivery process itself through AI-assisted development, making it easier to move from concept to implementation with less manual effort.',
    ],
    bullets: [
      'Partnered with stakeholders and platform teams to translate business needs into technical solutions.',
      'Built chat-based and copilot-style experiences that improved user efficiency.',
      'Used Slingshot and automated code-generation approaches to accelerate UI delivery.',
    ],
    tags: ['AI product UI', 'Chat workflows', 'Slingshot', 'Stakeholder collaboration'],
    image: '/project-ai-first-ux-engineering-initiative.png',
  },
  {
    slug: 'financial-analytics-dashboards',
    title: 'Financial Analytics Dashboards',
    subtitle: 'Capital Group, Franklin Templeton, Empower, Citigroup',
    summary:
      'Built scalable analytics interfaces and reusable visualization layers for financial-services clients working with complex data and reporting needs.',
    impact: 'Improved how business users interpreted data and moved from reporting to action.',
    body: [
      'Financial analytics work requires more than rendering charts. It depends on understanding which comparisons matter, how workflows differ across users, and how interaction patterns can make dense information easier to navigate.',
      'Across multiple financial-services clients, the dashboard work centered on reusable visualization layers built with Recharts and D3.js, combined with frontend systems that could support evolving reporting needs.',
      'The strongest results came from balancing technical reuse with business-specific clarity so teams could move quickly without producing generic interfaces.',
    ],
    bullets: [
      'Delivered dashboard and analytics interfaces using Recharts and D3.js.',
      'Supported multiple business workflows with configurable visualization patterns.',
      'Focused on clarity, hierarchy, and decision-support in data-rich experiences.',
    ],
    tags: ['Recharts', 'D3.js', 'Financial services', 'Dashboards'],
    image: '/project-financial-analytics-visualization.png',
  },
  {
    slug: 'configurable-enterprise-ui-systems',
    title: 'Configurable Enterprise UI Systems',
    subtitle: 'Reusable architecture across business workflows',
    summary:
      'Created modular frontend patterns, reusable component libraries, and configurable dashboard frameworks that supported scalable delivery.',
    impact: 'Improved maintainability, consistency, and cross-team delivery across enterprise platforms.',
    body: [
      'In large enterprise products, configurable UI patterns often matter as much as any single feature. They reduce duplication, support multiple workflows, and create more resilient frontend systems as teams and requirements grow.',
      'This work combined design systems, reusable visualization layers, and platform-aware frontend architecture so teams could maintain product quality while delivering faster.',
      'The value was practical: a stronger base for design handoff, implementation, documentation, and ongoing product evolution.',
    ],
    bullets: [
      'Built reusable component libraries and design systems for maintainable delivery.',
      'Created configurable dashboard patterns to support different reporting contexts.',
      'Aligned architecture decisions with business workflows and team needs.',
    ],
    tags: ['Configurable UI', 'Design systems', 'Component libraries', 'Architecture'],
    image: '/project-modular-web-platforms.png',
  },
];

export const usesSections: UsesSection[] = [
  {
    title: 'Frontend application stack',
    items: [
      'React, Next.js, TypeScript, JavaScript, and modular frontend patterns for scalable product interfaces',
      'Tailwind CSS, CSS Modules, Mantine, Chakra UI, Ant Design, and Shadcn/UI depending on product constraints',
      'Component libraries and design systems built for maintainability and cross-team consistency',
    ],
  },
  {
    title: 'Analytics and visualization',
    items: [
      'Recharts, D3.js, and Chart.js for interactive dashboards and configurable reporting interfaces',
      'Reusable visualization patterns to support multiple business workflows and data contexts',
      'A practical focus on hierarchy, readability, and decision support in analytics-heavy experiences',
    ],
  },
  {
    title: 'AI-assisted product delivery',
    items: [
      'Sapient Slingshot, GitHub Copilot, and structured prompt workflows to accelerate design-to-code execution',
      'Chat-driven workflows and copilot-style experiences shaped around real user friction and task flows',
      'Figma-to-code and design handoff patterns that shorten the path from concept to production UI',
    ],
  },
  {
    title: 'Quality, accessibility, and performance',
    items: [
      'Jest, React Testing Library, and Cypress for confidence in frontend delivery',
      'WAVE, AudioEye, responsive design, and usability standards for accessible interfaces',
      'Lighthouse, Core Web Vitals, and performance-focused implementation for production-ready applications',
    ],
  },
  {
    title: 'Delivery and integration context',
    items: [
      'REST, GraphQL, Java, and SQL for collaboration with backend systems and platform services',
      'AWS, Azure, GCP, GitHub Actions, and Jenkins across enterprise delivery environments',
      'Internal documentation, knowledge sharing, and reusable patterns to support distributed teams',
    ],
  },
];
