import { navItems } from '../../constants/navigation';
import { RouteLink } from '../common/RouteLink';
import { siteSettings } from '../../data/siteVersions';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-links-row">
        {navItems.map((item) => (
          <RouteLink key={item.href} href={item.href}>
            {item.label}
          </RouteLink>
        ))}
      </div>
      <p>{siteSettings.footerText}</p>
    </footer>
  );
}
