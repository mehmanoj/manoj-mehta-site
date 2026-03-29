import type { PropsWithChildren, ReactNode } from 'react';
import { RouteLink } from './RouteLink';

type DetailPageShellProps = PropsWithChildren<{
  backHref: string;
  backLabel: string;
  kicker: string;
  title: string;
  summary: string;
  afterSummary?: ReactNode;
}>;

export function DetailPageShell({
  backHref,
  backLabel,
  kicker,
  title,
  summary,
  afterSummary,
  children,
}: DetailPageShellProps) {
  return (
    <div className="detail-page">
      <RouteLink className="back-link" href={backHref}>
        {backLabel}
      </RouteLink>
      <p className="detail-kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="detail-summary">{summary}</p>
      {afterSummary}
      {children}
    </div>
  );
}
