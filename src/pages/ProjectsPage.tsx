import { ListingHero } from '../components/common/ListingHero';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectDetails } from '../data/siteContent';

export function ProjectsPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        className="projects-hero"
        title="Projects, initiatives, and representative case-study work."
        description="A selection of architecture, prototyping, intelligent-interface, and delivery work shaped by my experience across enterprise platforms."
      />

      <div className="card-grid">
        {projectDetails.map((item) => (
          <ProjectCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
