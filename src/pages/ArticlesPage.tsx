import { articleDetails } from '../data/siteContent';
import { ListingHero } from '../components/common/ListingHero';
import { RouteLink } from '../components/common/RouteLink';

export function ArticlesPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        title="Thoughts on AI product UI, analytics dashboards, and scalable frontend systems."
        description="A focused collection of article topics aligned to my work in enterprise frontend engineering, design-to-code execution, data visualization, and AI-assisted product delivery."
      />

      <div className="article-listing">
        {articleDetails.map((item) => (
          <article key={item.slug} className="listing-row">
            <div className="listing-date">{item.category}</div>
            <div className="listing-content">
              <h2>
                <RouteLink href={`/articles/${item.slug}/`}>{item.title}</RouteLink>
              </h2>
              <p>{item.summary}</p>
              <RouteLink className="inline-link" href={`/articles/${item.slug}/`}>
                Read article →
              </RouteLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
