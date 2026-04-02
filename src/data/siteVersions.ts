import type { SiteVersionConfig } from './contentTypes';
import { masterSiteContent } from './versions/masterSiteContent';
import { v2SiteContent } from './versions/v2SiteContent';

export const siteVersions: Record<'master' | 'v2', SiteVersionConfig> = {
  master: masterSiteContent,
  v2: v2SiteContent,
};

export function getActiveSiteVersion(): SiteVersionConfig {
  const raw = (((import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_SITE_VERSION) || 'master').toLowerCase();
  if (raw === 'v2') return siteVersions.v2;
  return siteVersions.master;
}
