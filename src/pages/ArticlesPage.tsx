import { articleDetails } from '../data/siteContent';
import { ListingHero } from '../components/common/ListingHero';
import { RouteLink } from '../components/common/RouteLink';

export function ArticlesPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        title="Thoughts on web development, digital experiences, and AI-assisted product work."
        description="A focused collection of article topics aligned to my work in UX engineering, frontend architecture, intelligent interfaces, and design-to-code execution."
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
