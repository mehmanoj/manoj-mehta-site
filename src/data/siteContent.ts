import type { DetailItem, ProjectItem, UsesSection, WorkExperienceItem } from '../types/site';

export const workExperience: WorkExperienceItem[] = [
  {
    date: '2018 — Present',
    role: 'Frontend Architect',
    company: 'Publicis Sapient',
    body:
      'Lead frontend architecture and hands-on delivery for enterprise platforms, with recent focus on AI-powered interfaces, configurable dashboards, and analytics-heavy workflows.',
    bullets: [
      'Current project: AI Product UI Engineering for GMR Platform, focused on chat-driven workflows, copilot-style experiences, and Recharts/D3.js dashboards.',
      'Partner with stakeholders, product teams, and engineers to translate business needs into scalable frontend and platform solutions.',
      'Delivered data-intensive UI solutions for Capital Group, Franklin Templeton, Empower, and Citigroup using reusable visualization patterns and modern frontend architecture.',
    ],
  },
  {
    date: '2011 — 2018',
    role: 'Senior UI Engineer',
    company: 'Publicis Sapient',
    body:
      'Built scalable single-page applications for financial services and enterprise systems with strong attention to usability, accessibility, integration quality, and maintainability.',
    bullets: [
      'Integrated frontend applications with backend services and enterprise systems supporting business-critical functionality.',
      'Introduced testing and CI/CD practices that improved release quality and reduced regression risk.',
      'Translated product and UX designs into production-ready interfaces and reusable UI patterns.',
    ],
  },
  {
    date: '2005 — 2011',
    role: 'Consultant',
    company: 'Fidelity International',
    body:
      'Built financial applications, dashboards, and data-visualization tools that helped stakeholders interpret investment data and make better business decisions.',
    bullets: [
      'Developed financial dashboards and reporting interfaces using D3.js and other charting libraries.',
      'Translated business requirements into scalable technical solutions aligned with financial workflows.',
      'Built a strong foundation in analytics-heavy product delivery, Java, SQL, and consulting collaboration.',
    ],
  },
];

export const articleDetails: DetailItem[] = [
  {
    slug: 'building-ai-powered-enterprise-interfaces',
    title: 'Building AI-powered enterprise interfaces that people actually want to use',
    category: 'AI + Product Delivery',
    summary:
      'What makes chat-driven workflows and assistive UX useful in enterprise products instead of just novel.',
    body: [
      'Enterprise users do not need AI for its own sake. They need interfaces that reduce friction, clarify next actions, and speed up decision-making. The best AI-powered interfaces succeed because they improve the workflow, not because they simply add a chat box.',
      'That usually means grounding the experience in real product constraints: the structure of the data, the steps users are trying to complete, and the level of confidence they need before acting. Chat-driven workflows work best when they connect cleanly to the surrounding UI rather than replacing it.',
      'From a frontend perspective, the challenge is balancing interaction design, system behavior, and implementation discipline. The goal is to make intelligent UX feel practical, reliable, and aligned with the business problem it is meant to solve.',
    ],
    bullets: [
      'Design AI around workflow friction and decision points.',
      'Use chat and assistive UX as part of a broader product surface, not a gimmick.',
      'Prioritize clarity, confidence, and speed over novelty.',
    ],
  },
  {
    slug: 'designing-financial-dashboards-for-decision-making',
    title: 'Designing financial dashboards for faster decision-making',
    category: 'Analytics UX',
    summary:
      'Why good dashboard work is less about adding more charts and more about structuring insight clearly.',
    body: [
      'Analytics-heavy products succeed when they help users see what matters quickly. That means designing for hierarchy, comparisons, workflow context, and the decisions a user is trying to make, not simply filling the screen with metrics.',
      'The frontend layer matters because interaction and visual structure often determine whether complex data feels understandable or overwhelming. Reusable visualization patterns, sensible defaults, and configurable views all contribute to a better product experience.',
      'In financial and enterprise contexts, the bar is even higher. Users need interfaces that are trustworthy, performant, and easy to navigate under real work pressure. Clear dashboards support that by making dense information easier to interpret and act on.',
    ],
    bullets: [
      'Design around business questions, not just visualization density.',
      'Use configurable views and reusable patterns to support varied workflows.',
      'Treat clarity and speed-to-insight as core product requirements.',
    ],
  },
  {
    slug: 'turning-business-requirements-into-scalable-frontend-systems',
    title: 'Turning business requirements into scalable frontend systems',
    category: 'Frontend Architecture',
    summary:
      'A practical view on bridging stakeholders, design, and engineering in large enterprise products.',
    body: [
      'Strong frontend architecture is not just technical structure. It is a way of helping teams move from business requirements and product designs to maintainable, production-quality systems. That means making good choices about component boundaries, shared patterns, delivery workflows, and implementation standards.',
      'In large enterprise environments, architecture also has a communication role. The frontend system needs to be understandable to engineers, believable to stakeholders, and flexible enough to support evolving product needs without constant rework.',
      'The most valuable architecture work tends to be practical. It should improve delivery speed, consistency, and confidence while staying grounded in what the product and the business actually need.',
    ],
    bullets: [
      'Translate requirements into frontend and platform patterns that scale.',
      'Use design systems and component libraries to improve consistency and maintainability.',
      'Align architecture decisions with product workflows and delivery realities.',
    ],
  },
];

export const projectDetails: ProjectItem[] = [
  {
    slug: 'ai-product-ui-engineering',
    title: 'AI Product UI Engineering',
    subtitle: 'Publicis Sapient · Current project',
    summary:
      'Designed and built AI-powered user interfaces, chat-driven workflows, and analytics dashboards for enterprise support use cases.',
    impact: 'Reduced UI development effort by about 30% and improved workflow efficiency through AI-assisted delivery patterns.',
    body: [
      'This work centers on shaping AI-driven frontend experiences for enterprise support scenarios where users need faster, clearer paths to resolution. The product direction focuses on reducing workflow friction through chat-driven interactions, copilot-style assistance, and practical analytics surfaces.',
      'A key part of the project has been turning business needs into working interfaces that stakeholders can react to. That includes interactive demos, AI-powered UI concepts, and dashboard experiences that make system behavior easier to understand and evaluate.',
      'The delivery approach also emphasizes AI-assisted engineering. By combining Sapient Slingshot, reusable implementation patterns, and automated code-generation approaches, the work reduced manual UI effort and accelerated iteration cycles.',
    ],
    bullets: [
      'Designed chat-driven and copilot-style experiences for enterprise support workflows.',
      'Built Recharts and D3.js visualization layers to support faster, data-driven decisions.',
      'Used AI-assisted workflows to speed up delivery while keeping the implementation grounded in product needs.',
    ],
    tags: ['AI interfaces', 'Chat workflows', 'Recharts', 'D3.js', 'Enterprise UX'],
    image: '/project-ai-first-ux-engineering-initiative.png',
  },
  {
    slug: 'enterprise-frontend-architecture',
    title: 'Enterprise Frontend Architecture',
    subtitle: 'Fortune 500 delivery across large-scale platforms',
    summary:
      'Led architecture and delivery for modular web applications, component systems, and scalable frontend foundations across enterprise teams.',
    impact: 'Improved maintainability, consistency, and delivery quality across high-traffic platforms and distributed teams.',
    body: [
      'This work spans modular application architecture, reusable component patterns, design systems, and delivery structures that help enterprise teams move faster without sacrificing quality.',
      'The value of frontend architecture at this scale is practical: it should reduce duplication, support team autonomy, and make it easier to ship confidently across multiple products and channels.',
      'The role combines system thinking with hands-on implementation, including requirements translation, design-to-code execution, and maintainable frontend patterns that hold up under real delivery pressure.',
    ],
    bullets: [
      'Led modular frontend architecture for enterprise platforms and multi-team environments.',
      'Built component libraries and scalable design systems to improve consistency and speed.',
      'Translated Figma and product designs into production-ready interfaces aligned with business requirements.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Design systems', 'Platform architecture'],
    image: '/project-modular-web-platforms.png',
  },
  {
    slug: 'financial-analytics-visualization',
    title: 'Financial Analytics & Visualization',
    subtitle: 'Capital Group, Franklin Templeton, Empower, Citigroup',
    summary:
      'Delivered scalable dashboards and analytics interfaces for financial-services clients using Recharts, D3.js, and reusable visualization patterns.',
    impact: 'Made complex financial data easier to interpret, compare, and act on within enterprise workflows.',
    body: [
      'Financial products often require users to interpret dense information quickly and confidently. This work focused on designing and building dashboard experiences that improved clarity without oversimplifying the underlying business logic.',
      'The implementation approach emphasized reusable visualization patterns, configurable interfaces, and interaction design that supported real reporting and decision-making workflows.',
      'That combination of domain context and frontend craft helped create analytics experiences that were both technically maintainable and useful to the people working with them every day.',
    ],
    bullets: [
      'Built Recharts and D3.js dashboards for analytics-heavy financial products.',
      'Supported varied business workflows through configurable dashboard patterns.',
      'Applied lessons from finance-domain UX to later enterprise product and platform work.',
    ],
    tags: ['Financial services', 'Dashboards', 'Analytics UX', 'Recharts', 'D3.js'],
    image: '/project-financial-analytics-visualization.png',
  },
  {
    slug: 'design-to-code-delivery',
    title: 'Design-to-Code Delivery',
    subtitle: 'From Figma to production-ready UI',
    summary:
      'Translated product and UX designs into scalable interfaces aligned with accessibility, performance, and business requirements.',
    impact: 'Helped teams move from design intent to implementation with higher fidelity and less ambiguity.',
    body: [
      'Design handoff is only effective when the implemented experience preserves the intent of the product while still respecting engineering constraints. This work focuses on that bridge: making design systems, component structures, and frontend implementation work together cleanly.',
      'The result is more credible delivery. Stakeholders see interfaces that behave the way the product is meant to work, and engineering teams inherit code that is maintainable rather than purely presentational.',
      'That bridge between Figma, requirements, and production-ready frontend systems has been a recurring strength across enterprise projects.',
    ],
    bullets: [
      'Translated Figma and product designs into scalable, accessible interfaces.',
      'Balanced interaction quality with maintainable component and system design.',
      'Used implementation realism to improve product alignment and delivery confidence.',
    ],
    tags: ['Figma', 'UI systems', 'Accessibility', 'Frontend delivery'],
    image: '/project-enterprise-support-copilot-concepts.png',
  },
];

export const usesSections: UsesSection[] = [
  {
    title: 'Frontend engineering stack',
    items: [
      'React, Next.js, TypeScript, JavaScript, Redux, and micro-frontends for enterprise-scale UI systems',
      'Tailwind CSS, CSS Modules, Mantine, Chakra UI, Ant Design, and Shadcn/UI for scalable interface delivery',
      'Component libraries and design systems built for consistency, reuse, and team velocity',
    ],
  },
  {
    title: 'Analytics and data visualization',
    items: [
      'Recharts, D3.js, and Chart.js for dashboards, visualization layers, and interactive reporting experiences',
      'Reusable visualization patterns and configurable dashboards tailored to different business workflows',
      'A product mindset that treats clarity and speed-to-insight as core frontend requirements',
    ],
  },
  {
    title: 'AI-assisted development and intelligent UX',
    items: [
      'Sapient Slingshot, GitHub Copilot, and structured prompt workflows as practical delivery accelerators',
      'Chat-driven workflows, copilot-style interfaces, and AI-powered user experiences grounded in real product needs',
      'A preference for working solutions and interactive demos over abstract requirement debates',
    ],
  },
  {
    title: 'Quality, accessibility, and performance',
    items: [
      'Jest, React Testing Library, and Cypress for confidence in production code',
      'WAVE, AudioEye, Lighthouse, SpeedCurve, and Core Web Vitals as part of accessibility and performance work',
      'End-to-end attention to usability, responsiveness, and maintainable frontend standards',
    ],
  },
  {
    title: 'Integration and delivery environment',
    items: [
      'REST, GraphQL, Java, and SQL when frontend work needs deeper backend and system context',
      'AWS, Azure, GCP, GitHub Actions, and Jenkins across enterprise delivery environments',
      'Strong collaboration with business stakeholders, product teams, design, and engineering across distributed teams',
    ],
  },
];
