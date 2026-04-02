export type { Metric, ContactLink } from './contentTypes';
import { getActiveSiteVersion } from './siteVersions';

export const {
  data: {
    impactMetrics,
    achievements,
    experienceBullets,
    platforms,
    projects,
    caseStudies,
    testimonialThemes,
    blogPosts,
    skills,
    contactLinks,
  },
} = getActiveSiteVersion();
