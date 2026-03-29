import { navItems } from '../../constants/navigation';
import type { Route } from '../../types/site';
import { RouteLink } from '../common/RouteLink';

type SiteHeaderProps = {
  path: Route;
};

export function SiteHeader({ path }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <RouteLink className="avatar-link" href="/" aria-label="Go to About page">
        <img src="/profile.png" alt="Manoj Mehta" />
      </RouteLink>

      <nav className="nav-pill" aria-label="Primary">
        {navItems.map((item) => {
          const isActive = path === item.href || (item.href !== '/' && path.startsWith(item.href));
          return (
            <RouteLink key={item.href} href={item.href} className={isActive ? 'active' : ''}>
              {item.label}
            </RouteLink>
          );
        })}
      </nav>
    </header>
  );
}
