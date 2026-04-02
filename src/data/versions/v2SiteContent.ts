import type { SiteVersionConfig } from '../contentTypes';
import { v2ResumeData } from './v2ResumeData';

export const v2SiteContent: SiteVersionConfig = {
  key: 'v2',
  label: 'V2',
  profileTitle: 'Senior UX Engineer and hands-on frontend architect',
  heroHeading: 'I prototype and build AI-assisted product experiences for enterprise teams.',
  heroIntro: [
    'I’m a senior UX engineer and hands-on frontend architect focused on rapidly translating product ideas into credible digital experiences.',
    'My work sits at the intersection of design, engineering, and intelligent workflows — from Figma-to-code implementation to AI-assisted support concepts and prototype-led product validation.',
    'I use modern frontend architecture, reusable systems, and AI-driven delivery workflows to help teams move faster, reduce friction, and explore new product directions with working software.',
  ],
  articlesHeading: 'Thoughts on web development, digital experiences, and AI-assisted product work.',
  articlesIntro: 'A focused collection of article topics aligned to UX engineering, frontend architecture, intelligent interfaces, and design-to-code execution.',
  projectsHeading: 'Projects, initiatives, and representative case-study work.',
  projectsIntro: 'A selection of architecture, prototyping, intelligent-interface, and delivery work shaped by the experience on my résumé.',
  usesHeading: 'What I use to design, prototype, build, and ship.',
  usesIntro: 'This page mirrors the reference-site structure, with content tailored to UX engineering, AI-assisted product work, and modern front-end delivery.',
  workExperience: [
    {
      date: '2018 — Present',
      role: 'Front-End Architect',
      company: 'Publicis Sapient',
      body: 'Lead technical architecture and hands-on frontend delivery for enterprise platforms while exploring AI-assisted UX workflows and prototype-led product execution.',
      bullets: [
        'Reduced UI development effort through AI-assisted workflows, automated code generation, and reusable engineering patterns.',
        'Built working demos and prototype systems that helped teams validate product ideas faster.',
        'Combined front-end architecture, design-to-code execution, and intelligent-interface exploration across enterprise delivery contexts.',
      ],
    },
    {
      date: '2011 — 2018',
      role: 'Senior UI Engineer',
      company: 'Publicis Sapient',
      body: 'Led frontend development for enterprise platforms with focus on usability, accessibility, and strong engineering execution.',
      bullets: [
        'Delivered scalable single-page applications for data-rich business workflows.',
        'Built accessible component patterns and reusable UI foundations.',
        'Improved release quality through testing, CI/CD, and stronger implementation discipline.',
      ],
    },
    {
      date: '2005 — 2011',
      role: 'Consultant',
      company: 'Fidelity International',
      body: 'Built dashboards and visualization tools that helped stakeholders understand business data more clearly and act with confidence.',
      bullets: [
        'Designed data-rich user experiences with strong emphasis on clarity.',
        'Translated business requirements into scalable technical solutions.',
        'Built a strong foundation in finance, Java, SQL, and enterprise product delivery.',
      ],
    },
  ],
  articleDetails: [
    {
      slug: 'ai-first-ux-engineering',
      title: 'How AI-first UX engineering changes the prototype-to-product loop',
      category: 'AI + Product Delivery',
      summary: 'A practical framework for reducing ambiguity with working demos, prompt systems, and AI-assisted implementation.',
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
      summary: 'Why fidelity, interaction quality, and implementation realism matter when prototypes are used to shape decisions.',
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
      summary: 'Patterns for AI-assisted troubleshooting and guidance that reduce friction without creating robotic experiences.',
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
  ],
  projectDetails: [
    {
      slug: 'ai-first-ux-engineering-initiative',
      title: 'AI-First UX Engineering Initiative',
      subtitle: 'Publicis Sapient · Current focus',
      summary: 'Leading an AI-first approach to prototyping and UX delivery using Slingshot, Figma-to-code workflows, and reusable implementation patterns.',
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
    },
    {
      slug: 'enterprise-support-copilot-concepts',
      title: 'Enterprise Support Copilot Concepts',
      subtitle: 'AI-assisted user workflows',
      summary: 'Prototyped copilot-style support experiences and automated troubleshooting flows for enterprise users.',
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
    },
    {
      slug: 'modular-web-platforms',
      title: 'Modular Web Platforms',
      subtitle: 'Architecture across industries',
      summary: 'Architected scalable front-end systems and modular web applications for large, high-traffic environments.',
      impact: 'Improved maintainability, consistency, and performance across multi-team delivery.',
      body: [
        'Across enterprise engagements, the work centered on building front-end foundations that scale. That included modular architecture, shared patterns, and implementation discipline that supported multiple teams working on the same platform.',
        'These systems had to balance speed and quality. Reusable components, stronger testing practices, and performance-minded engineering helped teams move faster without increasing inconsistency or regressions.',
        'The result was a stronger delivery platform for UX execution: more reliable interfaces, faster iteration, and better alignment between design intent and production behavior.',
      ],
      bullets: [
        'Built reusable design systems and shared UI patterns.',
        'Improved performance and delivery quality in production environments.',
        'Enabled scalable front-end execution across complex enterprise teams.',
      ],
      tags: ['React', 'TypeScript', 'Design systems', 'Performance'],
    },
    {
      slug: 'financial-analytics-visualization',
      title: 'Financial Analytics & Visualization',
      subtitle: 'Consulting and data-rich product work',
      summary: 'Built dashboards and visualization experiences that made complex data easier to interpret and act on.',
      impact: 'Supported clearer decision-making for stakeholders working with dense financial information.',
      body: [
        'This work focused on clarity. Financial interfaces often suffer when data density overwhelms usability, so the goal was to shape experiences that helped users interpret complex information more effectively.',
        'The solutions blended technical implementation with information design. Visualization patterns, application structure, and business context had to work together so that dashboards were useful rather than merely data-heavy.',
        'That foundation continues to inform later work on data-rich enterprise UX, especially in products where workflow efficiency and comprehension matter as much as visual polish.',
      ],
      bullets: [
        'Designed interfaces that improved data visibility and usability.',
        'Translated business requirements into scalable application behavior.',
        'Built a strong base in decision-support and data-rich UX.',
      ],
      tags: ['Dashboards', 'Visualization', 'Finance', 'Usability'],
    },
  ],
  usesSections: [
    {
      title: 'Building',
      items: [
        'React and TypeScript for production interfaces and architecture work',
        'Next.js and Vite for rapid prototyping and modern front-end delivery',
        'Micro-frontends, design systems, and component libraries for scalable UI platforms',
      ],
    },
    {
      title: 'AI-assisted workflow',
      items: [
        'Sapient Slingshot for AI-first development and prototype acceleration',
        'GitHub Copilot for implementation support and faster iteration',
        'Prompt engineering patterns to turn repeatable workflows into team leverage',
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
  ],
  resumePdf: '/versioned-assets/v2/Manoj_Mehta_Resume.pdf',
  resumeDocx: '/versioned-assets/v2/Manoj_Mehta_Resume.docx',
  data: v2ResumeData,
};
