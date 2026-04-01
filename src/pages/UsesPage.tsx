import { skills, testimonialThemes } from '../data/resumeData';
import { ListingHero } from '../components/common/ListingHero';
import { usesSections } from '../data/siteContent';
import { siteSettings } from '../data/siteVersions';

export function UsesPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        title={siteSettings.listingHeroes.uses.title}
        description={siteSettings.listingHeroes.uses.description}
      />

      <div className="uses-list">
        {usesSections.map((section) => (
          <section key={section.title} className="uses-card">
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <section className="uses-card">
          <h2>Representative feedback themes</h2>
          <ul>
            {testimonialThemes.map((item) => (
              <li key={item.quote}>
                <strong>{item.role}:</strong> {item.quote}
              </li>
            ))}
          </ul>
        </section>

        <section className="uses-card">
          <h2>Selected capabilities</h2>
          <ul>
            {skills.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
