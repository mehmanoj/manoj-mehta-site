export type Route = '/' | '/articles/' | '/projects/' | '/uses/' | string;

export type NavItem = {
  href: '/' | '/articles/' | '/projects/' | '/uses/';
  label: string;
};

export type DetailItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
  bullets: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  impact: string;
  body: string[];
  bullets: string[];
  tags: string[];
  image: string;
};

export type WorkExperienceItem = {
  date: string;
  role: string;
  company: string;
  body: string;
  bullets: string[];
};

export type UsesSection = {
  title: string;
  items: string[];
};
