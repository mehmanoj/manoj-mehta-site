import type { Route } from '../types/site';

export function getPath(pathname: string = window.location.pathname): Route {
  if (pathname === '/articles' || pathname === '/articles/') return '/articles/';
  if (pathname === '/projects' || pathname === '/projects/') return '/projects/';
  if (pathname === '/uses' || pathname === '/uses/') return '/uses/';
  if (pathname === '/' || pathname === '') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function shouldHandleRoute(href: string, target?: string | null): boolean {
  if (!href) return false;
  if (target === '_blank') return false;
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  return true;
}
