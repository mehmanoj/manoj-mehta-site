import { RouteLink } from '../components/common/RouteLink';

export function NotFoundPage() {
  return (
    <div className="detail-page">
      <p className="detail-kicker">404</p>
      <h1>Page not found.</h1>
      <p className="detail-summary">The route you opened does not exist in this portfolio build.</p>
      <RouteLink className="inline-link" href="/">
        Return to About →
      </RouteLink>
    </div>
  );
}
