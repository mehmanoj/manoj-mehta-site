export type Metric = { value: string; label: string };
export type TextItem = { title: string; body: string };
export type ProjectCard = { title: string; subtitle: string; body: string };
export type CaseStudy = { title: string; outcome: string; summary: string; bullets: string[] };
export type BlogPost = { title: string; category: string; summary: string };
export type TestimonialTheme = { quote: string; role: string };
export type ContactLink = { href: string; label: string; icon: string; external?: boolean };
export type WorkExperience = { date: string; role: string; company: string; body: string; bullets: string[] };
export type DetailItem = { slug: string; title: string; category: string; summary: string; body: string[]; bullets: string[] };
export type ProjectItem = { slug: string; title: string; subtitle: string; summary: string; impact: string; body: string[]; bullets: string[]; tags: string[] };
export type UsesSection = { title: string; items: string[] };

export type SiteVersionKey = 'master' | 'v2' | 'v3';

export type VersionedResumeData = {
  impactMetrics: Metric[];
  achievements: string[];
  experienceBullets: string[];
  platforms: TextItem[];
  projects: ProjectCard[];
  caseStudies: CaseStudy[];
  testimonialThemes: TestimonialTheme[];
  blogPosts: BlogPost[];
  skills: TextItem[];
  contactLinks: ContactLink[];
};

export type SiteVersionConfig = {
  key: SiteVersionKey;
  label: string;
  profileTitle: string;
  heroHeading: string;
  heroIntro: string[];
  articlesHeading: string;
  articlesIntro: string;
  projectsHeading: string;
  projectsIntro: string;
  usesHeading: string;
  usesIntro: string;
  workExperience: WorkExperience[];
  articleDetails: DetailItem[];
  projectDetails: ProjectItem[];
  usesSections: UsesSection[];
  resumePdf: string;
  resumeDocx: string;
  data: VersionedResumeData;
};
