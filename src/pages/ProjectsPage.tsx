import { ListingHero } from '../components/common/ListingHero';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectDetails } from '../data/siteContent';
import { siteSettings } from '../data/siteVersions';

export function ProjectsPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        className="projects-hero"
        title={siteSettings.listingHeroes.projects.title}
        description={siteSettings.listingHeroes.projects.description}
      />

      <div className="card-grid">
        {projectDetails.map((item) => (
          <ProjectCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
