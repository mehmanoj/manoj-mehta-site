import type { SiteVersionConfig } from '../contentTypes';
import { masterResumeData } from './masterResumeData';

export const masterSiteContent: SiteVersionConfig = {
  key: 'master',
  label: 'Master',
  profileTitle: 'Senior Frontend Engineer and hands-on architect',
  heroHeading: 'I build scalable, user-centric web platforms and modern frontend systems.',
  heroIntro: [
    'I’m a senior frontend engineer and hands-on architect based in Irvine, with 20+ years of experience building scalable, user-centric web platforms and modern frontend systems.',
    'My core strength is combining React, TypeScript, and micro-frontend architecture with strong prototyping instincts, design-system thinking, and performance-minded implementation.',
    'More recently, I’ve focused on AI-assisted development and intelligent user experience prototyping, including copilot-style interfaces, workflow automation, and prototype-led product exploration using LLMs.',
  ],
  articlesHeading: 'Thoughts on frontend systems, prototyping, AI-assisted delivery, and enterprise product engineering.',
  articlesIntro: 'A focused collection of article topics shaped by modern frontend architecture, user-centric delivery, design-to-code execution, and intelligent workflow experimentation.',
  projectsHeading: 'Selected work across architecture, prototyping, intelligent interfaces, and enterprise delivery.',
  projectsIntro: 'A structured view of representative work pulled from my master resume: scalable frontend systems, AI-assisted concepts, and user-centered product engineering.',
  usesHeading: 'What I use to design, prototype, build, and ship.',
  usesIntro: 'This page reflects the tools, frameworks, and systems I use across frontend architecture, UX prototyping, AI-assisted workflows, performance, and delivery.',
  workExperience: [
    {
      date: '2018 — Present',
      role: 'Frontend Architect',
      company: 'Publicis Sapient',
      body: 'Lead architecture and hands-on frontend delivery for enterprise platforms, with recent focus on AI product UI engineering, intelligent workflows, and prototype-led product execution.',
      bullets: [
        'Drive adoption of AI-assisted development workflows to accelerate frontend delivery and user experience prototyping.',
        'Use Sapient Slingshot to prototype intelligent workflows, automate UI generation tasks, and explore new interaction patterns.',
        'Lead broader modular web application delivery for Fortune 500 clients, balancing scalability, usability, and high-performance execution.',
      ],
    },
    {
      date: '2011 — 2018',
      role: 'Senior UI Engineer',
      company: 'Publicis Sapient',
      body: 'Led frontend engineering for financial services and enterprise platforms, with emphasis on scalable SPAs, design fidelity, usability, and accessibility.',
      bullets: [
        'Built scalable SPA applications that improved performance and usability.',
        'Partnered with designers to translate Figma concepts into high-quality interactive interfaces.',
        'Introduced CI/CD and testing practices that improved release quality and reduced regressions.',
      ],
    },
    {
      date: '2005 — 2011',
      role: 'Consultant',
      company: 'Fidelity International',
      body: 'Developed financial applications, dashboards, and data visualization tools that made complex information more usable for stakeholders.',
      bullets: [
        'Built visualization tools with a focus on usability and clarity.',
        'Translated business requirements into scalable technical solutions.',
        'Developed financial dashboards and applications that supported decision-making.',
      ],
    },
  ],
  articleDetails: [
    {
      slug: 'ai-assisted-frontend-prototyping',
      title: 'How AI-assisted development changes the way frontend teams prototype',
      category: 'AI-Assisted Development',
      summary: 'A practical look at using LLM workflows, design-to-code patterns, and rapid demos without losing engineering quality.',
      body: [
        'AI-assisted development is most useful when it reduces the time between idea and interaction. For frontend teams, that means faster prototyping, quicker UI generation, and more concrete conversations with product and design stakeholders.',
        'The value is not only speed. The better outcome is clarity. Working prototypes help teams evaluate flow, behavior, and tradeoffs earlier, before a concept becomes expensive to change.',
        'The real discipline is keeping those accelerated workflows grounded in sound implementation practices so that prototypes can evolve into maintainable product paths instead of throwaway experiments.',
      ],
      bullets: [
        'Use AI to shorten the path from concept to working interface.',
        'Prototype-led delivery creates faster and clearer feedback loops.',
        'Acceleration matters most when it still respects engineering quality.',
      ],
    },
    {
      slug: 'bridging-design-and-engineering',
      title: 'Bridging design and engineering in modern frontend systems',
      category: 'Frontend Systems',
      summary: 'Why product quality improves when prototyping, interaction design, and implementation live closer together.',
      body: [
        'Frontend quality improves when design and engineering are not treated as separate downstream phases. The best interfaces emerge when interaction intent, technical feasibility, and implementation detail are shaped together.',
        'That is where high-fidelity prototyping becomes powerful. It helps teams evaluate not just visuals, but behavior, constraints, and usability in a shared frame of reference.',
        'In practice, bridging design and engineering is less about process language and more about creating workflows where good ideas can be tested quickly and implemented well.',
      ],
      bullets: [
        'Design-to-code workflows improve fidelity and reduce ambiguity.',
        'Shared prototypes help teams align faster on interaction quality.',
        'Strong frontend systems create a better bridge between concept and execution.',
      ],
    },
    {
      slug: 'enterprise-ui-architecture-at-scale',
      title: 'What makes enterprise UI architecture actually scalable',
      category: 'Architecture',
      summary: 'A grounded view of modular systems, design systems, performance, and team workflows in large products.',
      body: [
        'Scalable UI architecture is not about complexity for its own sake. It is about making large product systems easier to build, change, and reason about across multiple teams and evolving requirements.',
        'That usually means modular front-end structures, reusable component systems, shared conventions, and performance-aware implementation that holds up under real delivery pressure.',
        'The strongest architectures create room for both autonomy and consistency. They let teams move faster because the system underneath is stable, understandable, and designed for change.',
      ],
      bullets: [
        'Scalable systems reduce coordination drag across teams.',
        'Reusable components and conventions create long-term leverage.',
        'Performance, usability, and maintainability should all be part of architectural thinking.',
      ],
    },
  ],
  projectDetails: [
    {
      slug: 'ai-first-ux-engineering-initiative',
      title: 'AI Product UI Engineering',
      subtitle: 'Publicis Sapient · Current project',
      summary: 'Lead AI-assisted frontend workflows and intelligent product prototyping on the GMR platform.',
      impact: 'Reduced UI development effort by roughly 30% and accelerated concept validation through AI-assisted workflows.',
      body: [
        'This work centers on using AI-assisted development to accelerate frontend delivery and make new interaction concepts easier to prototype, discuss, and refine.',
        'Using Sapient Slingshot and structured workflow experimentation, the goal has been to automate portions of UI generation, explore intelligent interaction patterns, and reduce friction in product development.',
        'The most important outcome has been faster, more credible prototype-led conversations with stakeholders, alongside repeatable team patterns that improve delivery speed.',
      ],
      bullets: [
        'Used AI-assisted workflows to accelerate frontend implementation and prototyping.',
        'Applied intelligent workflow concepts to support-oriented and enterprise product scenarios.',
        'Created reusable patterns that improved experimentation speed and stakeholder clarity.',
      ],
      tags: ['AI workflows', 'UX prototyping', 'Slingshot', 'Figma to code'],
    },
    {
      slug: 'enterprise-support-copilot-concepts',
      title: 'Enterprise Support Copilot Concepts',
      subtitle: 'AI-assisted user workflows',
      summary: 'Prototyped copilot-style interfaces and assistive flows that reduced support friction for enterprise users.',
      impact: 'Improved self-service direction and reduced dependency on documentation-heavy support flows.',
      body: [
        'The challenge was improving user efficiency in support-heavy journeys where documentation and manual troubleshooting created too much friction.',
        'By reframing support as an interactive guided experience, the work explored copilot-style interfaces that could provide more contextual help and more efficient self-service behavior.',
        'These prototypes helped communicate how intelligent assistance could improve enterprise UX without waiting for a fully built production system.',
      ],
      bullets: [
        'Identified friction in support workflows and translated it into assistive product concepts.',
        'Built believable prototypes to simulate automated troubleshooting and guided help.',
        'Used working interactions to influence product direction and stakeholder understanding.',
      ],
      tags: ['Copilot UX', 'Support flows', 'LLMs', 'Enterprise UX'],
    },
    {
      slug: 'modular-web-platforms',
      title: 'Modular Frontend Platforms',
      subtitle: 'Architecture across large-scale delivery',
      summary: 'Built scalable modular applications and reusable frontend systems for enterprise products and Fortune 500 teams.',
      impact: 'Improved maintainability, usability, and delivery quality across large, high-traffic environments.',
      body: [
        'A major throughline of my work has been building modular frontend systems that scale across teams, products, and changing business needs.',
        'That includes architecture decisions around component systems, design systems, performance, delivery workflows, and implementation standards that make large product surfaces easier to evolve.',
        'The outcome is not just cleaner code. It is a stronger product foundation that supports faster iteration, better consistency, and more predictable delivery.',
      ],
      bullets: [
        'Led architecture and development of modular web applications for enterprise clients.',
        'Built reusable design systems and component libraries that improved consistency and speed.',
        'Optimized frontend performance and implementation quality in production environments.',
      ],
      tags: ['React', 'TypeScript', 'Micro-frontends', 'Design systems'],
    },
    {
      slug: 'financial-analytics-visualization',
      title: 'Financial Analytics & Visualization',
      subtitle: 'Data-rich application work',
      summary: 'Created dashboards and data visualization experiences that made dense financial information easier to interpret and act on.',
      impact: 'Supported clearer stakeholder decision-making through more usable financial interfaces and dashboards.',
      body: [
        'Financial and analytics interfaces are only valuable when users can interpret dense information quickly and correctly. That made clarity a central design and engineering goal in this work.',
        'The solutions combined application structure, visualization patterns, and business context so that dashboards were not just information-dense, but genuinely usable.',
        'That early work built a strong foundation for later enterprise product thinking where comprehension, workflow efficiency, and technical implementation all need to work together.',
      ],
      bullets: [
        'Built dashboards and visualization tools focused on clarity and decision support.',
        'Translated complex business requirements into scalable application behavior.',
        'Developed strong instincts for data-rich UX and stakeholder usability.',
      ],
      tags: ['Dashboards', 'Visualization', 'Finance', 'Usability'],
    },
  ],
  usesSections: [
    {
      title: 'Frontend systems',
      items: [
        'React, TypeScript, Next.js, Redux, and micro-frontends for scalable product interfaces',
        'Design systems and component libraries for consistency and faster delivery',
        'Vite and Next.js for modern frontend development and rapid prototyping',
      ],
    },
    {
      title: 'AI-assisted workflow',
      items: [
        'Sapient Slingshot for AI-assisted development and workflow experimentation',
        'GitHub Copilot for implementation acceleration and iteration support',
        'Prompt engineering and copilot-style concepts for intelligent UX prototyping',
      ],
    },
    {
      title: 'Quality and performance',
      items: [
        'Jest, RTL, and Cypress for confidence in product delivery',
        'WAVE and AudioEye for accessibility validation',
        'Lighthouse, SpeedCurve, and Core Web Vitals for performance optimization',
      ],
    },
    {
      title: 'Cloud and integration context',
      items: [
        'AWS, Azure, and GCP across enterprise delivery environments',
        'GitHub Actions and Jenkins for CI/CD',
        'REST, GraphQL, Java, and SQL for deeper product and integration context',
      ],
    },
  ],
  resumePdf: '/versioned-assets/master/Manoj_Mehta_Resume.pdf',
  resumeDocx: '/versioned-assets/master/Manoj_Mehta_Resume.docx',
  data: masterResumeData,
};
