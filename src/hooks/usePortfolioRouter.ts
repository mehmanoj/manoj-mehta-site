import { useEffect, useMemo, useState } from 'react';
import { articleDetails, projectDetails } from '../data/siteContent';
import type { DetailItem, ProjectItem, Route } from '../types/site';
import { getPath, shouldHandleRoute } from '../utils/router';

export type PortfolioRouterState = {
  path: Route;
  activeArticle?: DetailItem;
  activeProject?: ProjectItem;
};

export function usePortfolioRouter(): PortfolioRouterState {
  const [path, setPath] = useState<Route>(() => getPath());

  useEffect(() => {
    const onPopState = () => setPath(getPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[data-route="true"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      if (!shouldHandleRoute(href, anchor.target)) return;

      event.preventDefault();
      if (window.location.pathname !== href) {
        window.history.pushState({}, '', href);
        setPath(getPath());
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const activeArticle = useMemo(
    () => articleDetails.find((item) => path === `/articles/${item.slug}/`),
    [path],
  );

  const activeProject = useMemo(
    () => projectDetails.find((item) => path === `/projects/${item.slug}/`),
    [path],
  );

  return { path, activeArticle, activeProject };
}
