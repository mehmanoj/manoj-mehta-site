import { articleDetails } from '../data/siteContent';
import { siteSettings } from '../data/siteVersions';
import { ListingHero } from '../components/common/ListingHero';
import { RouteLink } from '../components/common/RouteLink';

export function ArticlesPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        title={siteSettings.listingHeroes.articles.title}
        description={siteSettings.listingHeroes.articles.description}
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
