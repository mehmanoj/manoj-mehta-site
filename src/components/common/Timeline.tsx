import type { WorkExperienceItem } from '../../types/site';

type TimelineProps = {
  items: WorkExperienceItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline-list">
      {items.map((item) => (
        <article key={`${item.company}-${item.role}`} className="timeline-row">
          <div className="timeline-rail" aria-hidden="true" />
          <div className="timeline-content">
            <p className="timeline-date">{item.date}</p>
            <h3>{item.role}</h3>
            <p className="company-name">{item.company}</p>
            <p>{item.body}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
