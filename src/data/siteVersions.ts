import type { SiteVersionConfig, SiteVersionKey } from './contentTypes';
import { masterSiteContent } from './versions/masterSiteContent';
import { v2SiteContent } from './versions/v2SiteContent';
import { v3SiteContent } from './versions/v3SiteContent';

export const siteVersions: Record<SiteVersionKey, SiteVersionConfig> = {
  master: masterSiteContent,
  v2: v2SiteContent,
  v3: v3SiteContent,
};

export function getActiveSiteVersion(): SiteVersionConfig {
  const raw = (((import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_SITE_VERSION) || 'master').toLowerCase();

  if (raw in siteVersions) {
    return siteVersions[raw as SiteVersionKey];
  }

  return siteVersions.master;
}
