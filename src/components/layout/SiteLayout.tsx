import type { PropsWithChildren } from 'react';
import type { Route } from '../../types/site';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type SiteLayoutProps = PropsWithChildren<{
  path: Route;
}>;

export function SiteLayout({ path, children }: SiteLayoutProps) {
  return (
    <div className="site-chrome">
      <div className="site-frame">
        <SiteHeader path={path} />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
