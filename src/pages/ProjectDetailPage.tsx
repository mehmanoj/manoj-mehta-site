import { caseStudies } from '../data/resumeData';
import type { ProjectItem } from '../types/site';
import { DetailPageShell } from '../components/common/DetailPageShell';
import { TagList } from '../components/common/TagList';

type ProjectDetailPageProps = {
  item: ProjectItem;
};

export function ProjectDetailPage({ item }: ProjectDetailPageProps) {
  const matchingCaseStudy = caseStudies.find((study) =>
    item.title.toLowerCase().includes(study.title.split(' ')[0].toLowerCase()),
  );

  return (
    <DetailPageShell
      backHref="/projects/"
      backLabel="← Back to projects"
      kicker={item.subtitle}
      title={item.title}
      summary={item.summary}
      afterSummary={
        <section className="impact-banner">
          <strong>Impact</strong>
          <p>{item.impact}</p>
        </section>
      }
    >
      <div className="detail-media-card">
        <img src={item.image} alt={item.title} className="detail-media" />
      </div>
      <div className="detail-body">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="detail-section">
        <h2>Highlights</h2>
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
      <section className="detail-section">
        <h2>Stack / themes</h2>
        <TagList tags={item.tags} className="tag-row big-gap" />
      </section>
      {matchingCaseStudy ? (
        <section className="detail-section">
          <h2>Related case-study framing</h2>
          <p>{matchingCaseStudy.summary}</p>
          <ul>
            {matchingCaseStudy.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </DetailPageShell>
  );
}
