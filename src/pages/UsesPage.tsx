import { skills, testimonialThemes } from '../data/resumeData';
import { ListingHero } from '../components/common/ListingHero';
import { usesSections } from '../data/siteContent';

export function UsesPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        title="What I use to design, build, test, and ship modern frontend systems."
        description="This page reflects the stack, workflows, and engineering patterns behind my recent work in AI-powered interfaces, analytics dashboards, and scalable enterprise frontend delivery."
      />

      <div className="uses-list">
        {usesSections.map((section) => (
          <section key={section.title} className="uses-card">
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item) => (
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
