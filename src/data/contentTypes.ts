import type { DetailItem, ProjectItem, UsesSection, WorkExperienceItem } from '../types/site';
import type { BlogPost, CaseStudy, ContactLink, Metric, Project, TestimonialTheme, TextItem } from './resumeData';

export type SiteVersionKey = 'master' | 'v2';

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  badges: string[];
};

export type AboutContent = {
  title: string;
  paragraphs: string[];
};

export type ListingHeroContent = {
  title: string;
  description: string;
};

export type ResumeFiles = {
  pdf: string;
  docx: string;
};

export type SiteSettings = {
  personName: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github?: string;
  footerText: string;
  hero: HeroContent;
  about: AboutContent;
  listingHeroes: {
    articles: ListingHeroContent;
    projects: ListingHeroContent;
    uses: ListingHeroContent;
  };
  resumeFiles: ResumeFiles;
};

export type SiteContentBundle = {
  settings: SiteSettings;
  impactMetrics: Metric[];
  achievements: string[];
  experienceBullets: string[];
  platforms: TextItem[];
  projects: Project[];
  caseStudies: CaseStudy[];
  testimonialThemes: TestimonialTheme[];
  blogPosts: BlogPost[];
  skills: TextItem[];
  contactLinks: ContactLink[];
  workExperience: WorkExperienceItem[];
  articleDetails: DetailItem[];
  projectDetails: ProjectItem[];
  usesSections: UsesSection[];
};
