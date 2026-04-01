import * as masterResume from './versions/masterResumeData';
import * as masterSite from './versions/masterSiteContent';
import * as v2Resume from './versions/v2ResumeData';
import * as v2Site from './versions/v2SiteContent';

export const SUPPORTED_SITE_VERSIONS = ['master', 'v2'] as const;
export type SiteVersionKey = (typeof SUPPORTED_SITE_VERSIONS)[number];
const FALLBACK_SITE_VERSION: SiteVersionKey = 'v2';

type SiteSettings = {
  personName: string;
  footerText: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  listingHeroes: {
    articles: { title: string; description: string };
    projects: { title: string; description: string };
    uses: { title: string; description: string };
  };
  resumeFiles: {
    pdf: string;
    docx: string;
  };
};

const settingsByVersion: Record<SiteVersionKey, SiteSettings> = {
  master: {
    personName: 'Manoj Mehta',
    footerText: '© 2026 Manoj Mehta. All rights reserved.',
    aboutTitle:
      'I build scalable UI platforms and front-end architecture that help enterprise teams move faster.',
    aboutParagraphs: [
      'I’m a senior software engineer and hands-on frontend architect based in Irvine, with 20+ years of experience building scalable web platforms across telecommunications, financial services, retail, and Fortune 500 environments.',
      'My work centers on platform engineering: modernizing front-end stacks, shaping reusable UI systems, improving developer productivity, and building architecture that supports faster delivery without sacrificing performance, accessibility, or maintainability.',
      'Across my recent work, that has included React and TypeScript micro-frontend platforms, digital commerce systems, AI-powered collaboration experiences, stronger CI/CD pipelines, and testing and component-library foundations that make large teams more effective.',
    ],
    listingHeroes: {
      articles: {
        title: 'Thoughts on web development, digital experiences, and AI-assisted product work.',
        description:
          'A focused collection of article topics aligned to my work in UX engineering, frontend architecture, intelligent interfaces, and design-to-code execution.',
      },
      projects: {
        title: 'Projects, initiatives, and representative case-study work.',
        description:
          'A selection of architecture, prototyping, intelligent-interface, and delivery work shaped by my experience across enterprise platforms.',
      },
      uses: {
        title: 'What I use to design, prototype, build, and ship.',
        description:
          'This page mirrors the structure of the reference site, but the content is tailored to my current frontend, UX engineering, AI, and delivery stack.',
      },
    },
    resumeFiles: {
      pdf: '/Manoj_Mehta_Resume.pdf',
      docx: '/Manoj_Mehta_Resume.docx',
    },
  },
  v2: {
    personName: 'Manoj Mehta',
    footerText: '© 2026 Manoj Mehta. All rights reserved.',
    aboutTitle:
      'I build AI-powered interfaces, data-intensive dashboards, and scalable frontend systems for enterprise products.',
    aboutParagraphs: [
      'I’m a senior frontend engineer and hands-on architect with 20+ years of experience building scalable enterprise web applications across financial services and other large-scale industries.',
      'My recent work focuses on AI-powered user interfaces, chat-driven workflows, interactive analytics, and production-grade frontend systems built with React, Next.js, and TypeScript.',
      'I work closely with business stakeholders, product teams, and engineers to translate requirements into scalable frontend and platform solutions, with strong emphasis on usability, accessibility, performance, and reusable design systems.',
    ],
    listingHeroes: {
      articles: {
        title: 'Notes on AI-powered UI, analytics experiences, and enterprise frontend delivery.',
        description:
          'A set of practical topics drawn from building chat-driven workflows, configurable dashboards, and production-ready interfaces for business-critical products.',
      },
      projects: {
        title: 'Representative work across AI product UI, financial analytics, and enterprise platform engineering.',
        description:
          'Selected project stories centered on AI-powered experiences, interactive dashboards, configurable interfaces, and scalable frontend architecture.',
      },
      uses: {
        title: 'What I use to design, prototype, build, and scale modern frontend systems.',
        description:
          'The stack, tools, and delivery patterns I rely on for React/Next.js applications, data visualization, AI-assisted workflows, and enterprise-grade product development.',
      },
    },
    resumeFiles: {
      pdf: '/Manoj_Mehta_Resume.pdf',
      docx: '/Manoj_Mehta_Resume.docx',
    },
  },
};

const contentByVersion = {
  master: {
    resume: masterResume,
    site: masterSite,
  },
  v2: {
    resume: v2Resume,
    site: v2Site,
  },
} as const;

const envVersion = (
  (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env
    ?.VITE_SITE_VERSION
);

export const DEFAULT_SITE_VERSION = resolveSiteVersion(envVersion);

export function resolveSiteVersion(explicitVersion?: string | null): SiteVersionKey {
  const normalized = explicitVersion?.trim().toLowerCase();
  return SUPPORTED_SITE_VERSIONS.includes(normalized as SiteVersionKey)
    ? (normalized as SiteVersionKey)
    : FALLBACK_SITE_VERSION;
}

export const activeSiteVersion = DEFAULT_SITE_VERSION;
export const siteSettings = settingsByVersion[activeSiteVersion];
export const siteResumeData = contentByVersion[activeSiteVersion].resume;
export const sitePageData = contentByVersion[activeSiteVersion].site;
