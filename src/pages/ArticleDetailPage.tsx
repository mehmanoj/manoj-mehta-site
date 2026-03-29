import type { DetailItem } from '../types/site';
import { DetailPageShell } from '../components/common/DetailPageShell';

type ArticleDetailPageProps = {
  item: DetailItem;
};

export function ArticleDetailPage({ item }: ArticleDetailPageProps) {
  return (
    <DetailPageShell
      backHref="/articles/"
      backLabel="← Back to articles"
      kicker={item.category}
      title={item.title}
      summary={item.summary}
    >
      <div className="detail-body">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <section className="detail-section">
        <h2>Key ideas</h2>
        <ul>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>
    </DetailPageShell>
  );
}
