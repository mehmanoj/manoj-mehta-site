import type { ReactNode } from 'react';
import { cardClass } from '../../styles/classes';

type SectionCardProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

function SectionCard({ id, children, className = '' }: SectionCardProps) {
  return (
    <section id={id} className={`${cardClass} ${className}`.trim()}>
      {children}
    </section>
  );
}

export default SectionCard;
