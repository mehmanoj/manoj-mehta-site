import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type RouteLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function RouteLink({ children, ...rest }: RouteLinkProps) {
  return (
    <a data-route="true" {...rest}>
      {children}
    </a>
  );
}
