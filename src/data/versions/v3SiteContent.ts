import type { SiteVersionConfig } from '../contentTypes';
import { v3ResumeData } from './v3ResumeData';

export const v3SiteContent: SiteVersionConfig = {
  key: 'v3',
  label: 'V3',
  profileTitle: 'Senior Frontend Architect and platform engineer',
  heroHeading: 'I build scalable design systems and frontend platforms that enterprise teams can actually adopt.',
  heroIntro: [
    'I\'m a senior frontend architect and platform engineer with 20+ years of experience building scalable React component libraries, design systems, and enterprise web platforms.',
    'My focus is shared UI foundations: TypeScript, modern JavaScript, CSS architecture, accessibility, performance optimization, and developer experience for engineers building against reusable systems.',
    'Recent work spans Verizon Design System, Lowe\'s Backyard, Capital Group Global Design System, and Albertsons UDS, alongside AI-assisted engineering workflows using Sapient Slingshot and GitHub Copilot.',
  ],
  articlesHeading: 'Thoughts on frontend platforms, design-system adoption, and AI-assisted engineering.',
  articlesIntro: 'A focused collection of article topics shaped by shared UI foundations, component-library adoption, accessibility, and modern frontend delivery workflows.',
  projectsHeading: 'Selected design-system and frontend platform work.',
  projectsIntro: 'A version of the site shaped directly around the newest resume, with emphasis on shared UI foundations, component systems, and enterprise-scale frontend delivery.',
  usesHeading: 'What I use to design, build, scale, and ship frontend platforms.',
  usesIntro: 'This version highlights the tools and patterns I rely on across design systems, shared React foundations, accessibility, quality, and AI-assisted engineering.',
  workExperience: [
    {
      date: '2018 — Present',
      role: 'Frontend Architect',
      company: 'Publicis Sapient',
      body: 'Lead architecture and evolution of React and TypeScript frontend platforms for Fortune 500 clients, defining shared standards and reusable, composable UI patterns that improve scalability, consistency, and long-term maintainability.',
      bullets: [
        'Build production-quality applications, shared component libraries, and modular frontend capabilities that reduce duplication and improve multi-team adoption of shared UI foundations.',
        'Turn design-system foundations and Figma patterns into pixel-perfect, accessible React components, shared interaction standards, and reusable implementation patterns.',
        'Improve developer experience, release readiness, and technical quality through reusable abstractions, documentation, code reviews, and mentoring.',
      ],
    },
    {
      date: '2011 — 2018',
      role: 'Senior UI Engineer',
      company: 'Publicis Sapient',
      body: 'Delivered scalable single-page applications, reusable UI patterns, and shared interaction foundations for enterprise clients in telecom and financial services.',
      bullets: [
        'Partnered closely with designers to translate product systems and UX specifications into production-ready, pixel-perfect interfaces.',
        'Strengthened testing and CI/CD practices to improve release reliability, maintainability, and engineering discipline.',
        'Contributed to end-to-end delivery with Java and SQL integrations supporting business-critical workflows.',
      ],
    },
    {
      date: '2005 — 2011',
      role: 'Consultant',
      company: 'Fidelity International',
      body: 'Built financial applications, dashboards, and data-visualization tools that improved data visibility and decision-making for enterprise users.',
      bullets: [
        'Translated business requirements into scalable technical solutions.',
        'Built data-rich tools with a strong focus on clarity and usability.',
        'Established a foundation in finance, Java, SQL, and enterprise delivery.',
      ],
    },
  ],
  articleDetails: [
    {
      slug: 'design-systems-need-developer-experience',
      title: 'Why design systems fail without developer experience',
      category: 'Frontend Platforms',
      summary: 'Shared UI foundations only scale when engineers get a clear implementation path, not just a visual language.',
      body: [
        'A design system is not successful because it looks organized in Figma. It becomes successful when engineers can adopt it quickly, understand how to use it, and trust it in production.',
        'That is why developer experience matters so much. Reusable abstractions, clear documentation, sensible APIs, and release discipline are what turn shared UI foundations into something product teams actually rely on.',
        'The strongest systems reduce ambiguity for both design and engineering. They make consistency easier to achieve while still giving teams room to move quickly.',
      ],
      bullets: [
        'Treat documentation and component APIs as product work, not afterthoughts.',
        'Make the implementation path obvious for engineers building against shared foundations.',
        'Adoption improves when systems are easy to extend, test, and trust.',
      ],
    },
    {
      slug: 'react-component-libraries-at-enterprise-scale',
      title: 'What makes a React component library adoptable at enterprise scale',
      category: 'Design Systems',
      summary: 'A component library earns adoption when it balances composability, accessibility, documentation, and implementation realism.',
      body: [
        'Enterprise teams do not adopt component libraries because they are told to. They adopt them when the components are flexible enough for real product work and structured enough to improve consistency.',
        'That means more than shipping UI primitives. It means thoughtful props, accessible defaults, strong interaction patterns, clear examples, and guidance that connects design intent to coded implementation.',
        'The goal is not only reuse. The goal is reliable reuse that lowers delivery friction and helps multiple teams build with confidence.',
      ],
      bullets: [
        'Composable APIs matter as much as visual consistency.',
        'Accessibility and interaction quality should be built into shared components from the start.',
        'Documentation has to explain how the system behaves in real product scenarios.',
      ],
    },
    {
      slug: 'ai-assisted-engineering-for-ui-platform-teams',
      title: 'Using AI-assisted engineering to accelerate UI platform work',
      category: 'AI-Assisted Delivery',
      summary: 'AI tools are most valuable when they speed prototyping and implementation while preserving engineering standards.',
      body: [
        'AI-assisted engineering becomes useful for UI platform teams when it helps shorten the path from idea to working implementation without compromising quality.',
        'That can mean faster prototyping, quicker exploration of component variants, more efficient documentation drafting, or acceleration of repetitive implementation tasks. The key is keeping those gains grounded in sound architecture and review discipline.',
        'Used well, tools like Sapient Slingshot and GitHub Copilot become delivery multipliers. They help teams move faster while still producing maintainable, production-ready frontend systems.',
      ],
      bullets: [
        'Use AI to compress prototyping and implementation loops, not to bypass standards.',
        'Turn successful prompts and workflows into repeatable team practices.',
        'Pair acceleration with code reviews, testing, and accessibility discipline.',
      ],
    },
  ],
  projectDetails: [
    {
      slug: 'capital-group-global-design-system',
      title: 'Capital Group Global Design System',
      subtitle: 'Accessibility, tokens, and maintainability',
      summary: 'Helped strengthen a design-system modernization effort centered on accessibility, documentation, design-token foundations, and long-term maintainability.',
      impact: 'Supported a broader initiative that delivered 30% higher site performance, up to 75% less authoring and design time, and AA WCAG compliance.',
      body: [
        'This work was rooted in strengthening the underlying quality of a large enterprise design system. Accessibility, documentation, and maintainability were treated as core system qualities rather than side concerns.',
        'The contribution focused on helping move shared UI foundations toward more reliable, scalable implementation patterns. Design-token foundations and documentation quality were important because they improved both consistency and adoption.',
        'The broader modernization effort created measurable product and authoring improvements, showing how platform-minded frontend work can create downstream impact well beyond individual components.',
      ],
      bullets: [
        'Strengthened accessibility and documentation foundations within a major design-system modernization effort.',
        'Supported token-based system evolution that improved maintainability and shared consistency.',
        'Contributed within a broader initiative associated with 30% better site performance and major authoring-time savings.',
      ],
      tags: ['Design systems', 'Accessibility', 'Design tokens', 'Documentation'],
    },
    {
      slug: 'verizon-design-system-vds',
      title: 'VDS (Verizon Design System)',
      subtitle: 'Reusable coded components and shared truth',
      summary: 'Helped scale reusable coded components and documentation patterns that aligned design and code around a shared source of truth.',
      impact: 'Improved consistency across multiple Verizon digital product teams and experiences.',
      body: [
        'The central challenge here was scale. Multiple teams needed shared coded foundations that were reusable enough to promote consistency without slowing delivery.',
        'The work focused on reusable components and documentation patterns that made the design system easier to understand and apply. That bridge between design and code is what makes a system operational instead of aspirational.',
        'When teams share the same coded source of truth, alignment improves. Product experiences become more consistent, and engineers can build faster with less reinvention.',
      ],
      bullets: [
        'Scaled reusable coded components that helped teams build against a common system.',
        'Strengthened documentation patterns that aligned design intent with production implementation.',
        'Improved cross-team consistency through a clearer shared source of truth.',
      ],
      tags: ['React', 'Component libraries', 'Documentation', 'Shared standards'],
    },
    {
      slug: 'lowes-backyard-design-system',
      title: 'Backyard (Lowe\'s)',
      subtitle: 'Open-source ecosystem and token-based React components',
      summary: 'Helped strengthen Lowe\'s Backyard design-system ecosystem through token-based React components, accessibility standards, and modular implementation patterns.',
      impact: 'Supported broad internal adoption of shared UI foundations across a large retail organization.',
      body: [
        'Backyard stood out because it operated as an ecosystem, not just a component set. The work supported modular React patterns that could be reused broadly across internal teams.',
        'Token-based implementation and accessibility standards mattered because they made the system more robust and easier to scale. The goal was not only consistency, but durable consistency that could support many teams over time.',
        'This kind of work reinforces how design systems succeed: reusable foundations, practical standards, and implementation patterns that fit real delivery environments.',
      ],
      bullets: [
        'Worked on token-based React component patterns designed for broad internal adoption.',
        'Embedded accessibility and modularity into shared UI building blocks.',
        'Strengthened an open-source design-system ecosystem used across multiple teams.',
      ],
      tags: ['Open source', 'React', 'Accessibility', 'Modular patterns'],
    },
    {
      slug: 'albertsons-uds-component-foundation',
      title: 'UDS (Albertsons)',
      subtitle: 'Shared grid, spacing, typography, and accessibility foundations',
      summary: 'Helped strengthen a scalable, documented component foundation centered on shared layout, typography, and accessibility patterns.',
      impact: 'Improved consistency, onboarding, and collaboration across multiple digital products and teams.',
      body: [
        'This work focused on the fundamentals that many product teams depend on: grid, spacing, typography, and accessibility patterns. Those basics are often what make a shared system feel coherent in day-to-day product delivery.',
        'A documented component foundation helps teams onboard faster because it reduces ambiguity. Engineers and designers can make decisions within a system that is already defined, tested, and easier to communicate.',
        'The outcome was a stronger base for collaboration and reuse across multiple digital products, which is where frontend platform work creates lasting value.',
      ],
      bullets: [
        'Strengthened documented component foundations used across several digital products.',
        'Improved onboarding by making shared layout and typography patterns clearer and more reusable.',
        'Reinforced accessibility as a built-in platform quality rather than a separate checklist.',
      ],
      tags: ['Grid systems', 'Typography', 'Accessibility', 'Onboarding'],
    },
  ],
  usesSections: [
    {
      title: 'Platform engineering',
      items: [
        'React and TypeScript for production UI foundations and shared component systems',
        'Next.js, Redux, micro-frontends, and modular architecture patterns for scalable enterprise delivery',
        'Composable components and reusable implementation standards that reduce duplication across teams',
      ],
    },
    {
      title: 'Design-system implementation',
      items: [
        'Design tokens, CSS architecture, responsive UI patterns, and accessibility-aware component APIs',
        'Documentation and coded examples that make shared systems easier for engineers to adopt',
        'Pixel-perfect translation of Figma patterns into reusable React components and interaction standards',
      ],
    },
    {
      title: 'Quality and accessibility',
      items: [
        'Jest, React Testing Library, Cypress, and Playwright for confidence in shared UI behavior',
        'WCAG, ARIA, WAVE, and AudioEye for accessibility validation and implementation discipline',
        'Core Web Vitals, code splitting, and lazy loading for frontend performance improvements',
      ],
    },
    {
      title: 'Delivery and AI-assisted engineering',
      items: [
        'GitHub Actions and Jenkins for CI/CD and release-readiness workflows',
        'Sapient Slingshot, GitHub Copilot, LLMs, and prompt engineering for faster UI delivery',
        'REST, GraphQL, Java, and SQL when frontend work needs deeper integration context',
      ],
    },
  ],
  resumePdf: '/Manoj_Mehta_Resume.pdf',
  resumeDocx: '/Manoj_Mehta_Resume.docx',
  data: v3ResumeData,
};
