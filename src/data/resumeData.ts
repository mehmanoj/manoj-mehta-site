export type Metric = {
  value: string;
  label: string;
};

export type TextItem = {
  title: string;
  body: string;
};

export type Project = {
  title: string;
  subtitle: string;
  body: string;
};

export type CaseStudy = {
  title: string;
  outcome: string;
  summary: string;
  bullets: string[];
};

export type BlogPost = {
  title: string;
  category: string;
  summary: string;
};

export type TestimonialTheme = {
  quote: string;
  role: string;
};

export type ContactLink = {
  href: string;
  label: string;
  icon: string;
  external?: boolean;
};

import { siteResumeData } from './siteVersions';

export const impactMetrics = siteResumeData.impactMetrics;
export const achievements = siteResumeData.achievements;
export const experienceBullets = siteResumeData.experienceBullets;
export const platforms = siteResumeData.platforms;
export const projects = siteResumeData.projects;
export const caseStudies = siteResumeData.caseStudies;
export const testimonialThemes = siteResumeData.testimonialThemes;
export const blogPosts = siteResumeData.blogPosts;
export const skills = siteResumeData.skills;
export const contactLinks = siteResumeData.contactLinks;
