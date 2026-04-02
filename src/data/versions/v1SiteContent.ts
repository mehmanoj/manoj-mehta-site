import type { SiteVersionConfig } from '../contentTypes';
import { v1ResumeData } from './v1ResumeData';

export const v1SiteContent: SiteVersionConfig = {
  key: 'v1',
  label: 'V1',
  profileTitle: 'Senior Frontend Architect / Platform Engineer',
  heroHeading: 'I build scalable React platforms, shared frontend infrastructure, and developer tooling for enterprise teams.',
  heroIntro: [
    'I’m a senior frontend architect and platform engineer based in Irvine, with 20+ years of experience building scalable React platforms, shared frontend infrastructure, and developer tooling for enterprise applications.',
    'My work focuses on frontend standards, reusable libraries, design systems, platform capabilities, and engineering workflows that help distributed teams deliver faster with stronger consistency and maintainability.',
    'I also apply AI-assisted engineering workflows to reduce repetitive work, accelerate prototyping, and bring practical intelligent capabilities into modern frontend delivery.',
  ],
  articlesHeading: 'Thoughts on frontend platform engineering, delivery systems, React architecture, and AI-assisted workflows.',
  articlesIntro: 'A focused collection of article topics shaped by platform engineering, shared frontend infrastructure, quality systems, and practical AI-assisted delivery.',
  projectsHeading: 'Selected platform work, reusable systems, AI-assisted initiatives, and enterprise frontend delivery.',
  projectsIntro: 'A representative view of the architecture, platform, performance, and developer-experience work reflected in this version of my resume.',
  usesHeading: 'What I use to architect, ship, optimize, and scale frontend systems.',
  usesIntro: 'This page reflects the tools, workflows, and engineering systems I use across React platforms, design systems, performance, accessibility, testing, and delivery automation.',
  workExperience: [
    {
      date: '2018 — Present',
      role: 'Frontend Architect',
      company: 'Publicis Sapient',
      body: 'Lead architecture and evolution of scalable frontend platforms for Fortune 500 clients, with strong emphasis on shared infrastructure, delivery consistency, performance, and long-term maintainability.',
      bullets: [
        'Define frontend architectural patterns, shared conventions, and engineering standards across distributed teams.',
        'Architect reusable shared libraries and modular capabilities that reduce duplication and support multi-team development.',
        'Improve CI/CD, testing discipline, and performance with stronger workflows, automation, and platform-level thinking.',
      ],
    },
    {
      date: 'Current initiative',
      role: 'AI-Assisted Development & Frontend Platform Innovation',
      company: 'Publicis Sapient',
      body: 'Lead adoption of AI-assisted development workflows to accelerate frontend delivery, reduce repetitive engineering work, and define practical patterns for intelligent UI capabilities.',
      bullets: [
        'Reduce UI development effort by roughly 30% through AI-assisted workflows and automation.',
        'Use Sapient Slingshot and GitHub Copilot to accelerate prototyping and engineering throughput.',
        'Introduce practical patterns for copilot-style experiences and workflow automation in frontend products.',
      ],
    },
    {
      date: '2011 — 2018',
      role: 'Senior UI Engineer',
      company: 'Publicis Sapient',
      body: 'Led frontend development for enterprise financial-services platforms, delivering scalable SPAs with strong usability, performance, and reliability.',
      bullets: [
        'Partnered with designers and backend engineers to translate business and UX requirements into production applications.',
        'Improved accessibility and consistency through reusable UI patterns and stronger implementation standards.',
        'Introduced stronger testing and CI/CD practices that improved release reliability and engineering discipline.',
      ],
    },
    {
      date: '2005 — 2011',
      role: 'Consultant',
      company: 'Fidelity International',
      body: 'Developed financial applications, dashboards, and data-visualization tools that improved reporting efficiency and decision-making for enterprise users.',
      bullets: [
        'Built tools and reporting interfaces that improved operational efficiency and data visibility.',
        'Translated business requirements into scalable technical solutions for enterprise users.',
        'Developed strong instincts in financial systems, dashboards, and data-rich interfaces.',
      ],
    },
  ],
  articleDetails: [
    {
      slug: 'frontend-platform-engineering-at-scale',
      title: 'What frontend platform engineering looks like at scale',
      category: 'Platform Engineering',
      summary: 'A practical view of reusable libraries, standards, CI/CD, and system health in large React organizations.',
      body: [
        'Frontend platform engineering is about creating leverage for multiple teams, not just writing shared code. The real value comes from standards, conventions, reusable capabilities, and workflows that make large systems easier to build and evolve.',
        'In enterprise environments, platform work improves delivery consistency, reduces duplicated implementation effort, and raises long-term maintainability. Shared libraries matter, but so do review discipline, architecture guardrails, testing expectations, and data-integration patterns.',
        'The best platform work stays close to product delivery. It should reduce friction for real teams while making performance, accessibility, and quality easier to sustain over time.',
      ],
      bullets: [
        'Platform engineering creates leverage across multiple teams.',
        'Shared standards matter as much as shared components.',
        'System health improves when platform work stays close to delivery reality.',
      ],
    },
    {
      slug: 'scaling-react-with-shared-conventions',
      title: 'Scaling React teams with shared conventions, not just shared components',
      category: 'Frontend Architecture',
      summary: 'Why architecture patterns, data contracts, and testing discipline are essential to multi-team React development.',
      body: [
        'Reusable components are useful, but they are only one part of scalable React delivery. Teams also need conventions around state, data access, testing, performance, and boundaries between product surfaces.',
        'The more teams contribute to a system, the more important shared conventions become. They reduce coordination drag, lower onboarding cost, and make architectural intent easier to preserve through change.',
        'A healthy React platform combines shared assets with clear expectations, so product teams can move quickly without fragmenting the overall system.',
      ],
      bullets: [
        'Shared conventions reduce coordination overhead in large teams.',
        'Architecture scale depends on boundaries, contracts, and review discipline.',
        'React systems stay healthier when speed and consistency are designed together.',
      ],
    },
    {
      slug: 'practical-ai-for-frontend-engineering',
      title: 'Where AI-assisted development helps frontend teams most',
      category: 'AI-Assisted Development',
      summary: 'A grounded look at using AI to reduce repetitive work, accelerate prototyping, and improve engineering throughput.',
      body: [
        'AI-assisted development works best when it removes repetitive work and shortens the feedback loop around implementation. For frontend teams, that often means faster prototyping, quicker drafting of repetitive UI logic, and faster exploration of architecture options.',
        'The strongest gains come when teams turn individual usage into repeatable workflows. Shared prompt patterns, review expectations, and prototype conventions make AI more reliable and more useful across a broader engineering group.',
        'Used well, AI does not replace engineering judgment. It gives experienced teams a faster way to iterate while keeping quality, maintainability, and delivery discipline intact.',
      ],
      bullets: [
        'Use AI to reduce repetitive effort, not to bypass architecture thinking.',
        'Team-level patterns matter more than isolated experimentation.',
        'The best gains come when AI fits into real engineering workflows.',
      ],
    },
  ],
  projectDetails: [
    {
      slug: 'frontend-platform-evolution',
      title: 'Frontend Platform Evolution',
      subtitle: 'Publicis Sapient · Enterprise architecture',
      summary: 'Led the evolution of scalable frontend platforms, shared capabilities, and reusable architecture patterns for Fortune 500 delivery teams.',
      impact: 'Improved consistency, maintainability, and multi-team delivery speed through shared platform systems.',
      body: [
        'This work focused on creating shared frontend foundations that multiple teams could build against confidently. That included reusable libraries, architectural conventions, common implementation patterns, and platform capabilities that reduced duplicated work.',
        'The biggest benefit of this kind of work is leverage. Teams move faster because they are not solving the same problems independently, and the overall product surface becomes easier to evolve over time.',
        'The result is stronger consistency, better maintainability, and a frontend system that can support change without becoming fragmented.',
      ],
      bullets: [
        'Defined architectural patterns and standards for distributed frontend teams.',
        'Built reusable shared libraries and modular capabilities for enterprise delivery.',
        'Improved long-term platform health through consistency, maintainability, and reuse.',
      ],
      tags: ['React', 'TypeScript', 'Platform', 'Shared systems'],
    },
    {
      slug: 'ai-assisted-development-platform-innovation',
      title: 'AI-Assisted Development & Platform Innovation',
      subtitle: 'Current initiative',
      summary: 'Led adoption of AI-assisted development workflows to accelerate frontend delivery and define practical patterns for intelligent product capabilities.',
      impact: 'Reduced UI development effort by approximately 30% while improving engineering throughput.',
      body: [
        'The goal of this initiative was to make AI useful in real engineering workflows instead of treating it as isolated experimentation. That meant reducing repetitive work, accelerating prototyping, and finding practical ways to improve throughput.',
        'Sapient Slingshot and GitHub Copilot were used to support faster drafting, quicker iteration, and better delivery momentum in frontend implementation. The work also explored patterns for bringing AI-driven capability into user-facing products.',
        'This became both a productivity initiative and a product-thinking initiative, connecting engineering efficiency with new interface possibilities.',
      ],
      bullets: [
        'Introduced AI-assisted workflows into practical frontend delivery patterns.',
        'Used Copilot and Slingshot to reduce repetitive engineering work and speed up prototyping.',
        'Connected internal productivity gains with exploration of intelligent UI capabilities.',
      ],
      tags: ['AI workflows', 'Copilot', 'DX', 'Frontend innovation'],
    },
    {
      slug: 'reusable-ui-systems-design-infrastructure',
      title: 'Reusable UI Systems & Design Infrastructure',
      subtitle: 'Shared components and platform capability',
      summary: 'Built component libraries and design-system foundations that improved UI consistency, accessibility, and implementation speed.',
      impact: 'Accelerated implementation and reduced inconsistency across products and teams.',
      body: [
        'Shared UI systems create leverage when they are treated as product assets instead of one-off component collections. This work emphasized consistency, accessibility, implementation speed, and maintainability.',
        'Component libraries and design-system foundations made it easier for teams to deliver interfaces that looked and behaved more consistently, while also reducing duplication in day-to-day implementation.',
        'That work supported better engineering quality and better user experience at the same time.',
      ],
      bullets: [
        'Built shared component systems that improved delivery consistency.',
        'Improved accessibility and implementation speed through reusable UI patterns.',
        'Supported scalable design-system adoption across enterprise products.',
      ],
      tags: ['Design systems', 'Components', 'Accessibility', 'Reuse'],
    },
    {
      slug: 'financial-platforms-and-data-rich-interfaces',
      title: 'Financial Platforms & Data-Rich Interfaces',
      subtitle: 'Enterprise reporting and dashboards',
      summary: 'Developed financial applications, dashboards, and reporting tools that improved data visibility and decision-making.',
      impact: 'Made complex business information easier to interpret through clearer data-rich interfaces.',
      body: [
        'Early platform and application work in finance built a strong foundation in data-rich product thinking. These interfaces had to communicate dense information clearly while supporting real business decisions.',
        'That meant balancing technical implementation with usability, workflow design, and clarity of presentation. Dashboards and reporting interfaces were valuable only if users could interpret them quickly and confidently.',
        'The lessons from this work still influence how later enterprise products are structured and delivered.',
      ],
      bullets: [
        'Built dashboards and financial interfaces focused on visibility and clarity.',
        'Translated complex business requirements into scalable enterprise solutions.',
        'Developed strong instincts for data-rich UX and decision-support interfaces.',
      ],
      tags: ['Finance', 'Dashboards', 'Visualization', 'Enterprise UX'],
    },
  ],
  usesSections: [
    {
      title: 'Frontend platform stack',
      items: [
        'React, TypeScript, Next.js, Redux, micro-frontends, and Module Federation for scalable frontend systems',
        'Component libraries and design systems for shared UI capability and delivery consistency',
        'GraphQL and REST integration patterns shaped for maintainability and performant data access',
      ],
    },
    {
      title: 'Delivery and developer experience',
      items: [
        'GitHub Actions and Jenkins for CI/CD, release automation, and faster feedback cycles',
        'Build optimization and shared engineering workflows to reduce friction in day-to-day development',
        'Testing systems using Jest, React Testing Library, Cypress, and Playwright',
      ],
    },
    {
      title: 'Performance and accessibility',
      items: [
        'Code splitting, lazy loading, and Core Web Vitals optimization for faster applications',
        'Lighthouse and SpeedCurve for performance measurement and improvement',
        'WCAG, WAVE, and AudioEye for accessibility standards and validation',
      ],
    },
    {
      title: 'AI-assisted engineering',
      items: [
        'GitHub Copilot and Sapient Slingshot for AI-assisted development workflows',
        'LLM-driven prototyping, prompt engineering, and practical workflow automation',
        'Applied AI patterns for copilot-style experiences and productivity improvements',
      ],
    },
  ],
  resumePdf: '/versioned-assets/v1/Manoj_Mehta_Resume.pdf',
  data: v1ResumeData,
};
