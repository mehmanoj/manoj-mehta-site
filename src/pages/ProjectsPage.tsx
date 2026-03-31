import { ListingHero } from '../components/common/ListingHero';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectDetails } from '../data/siteContent';

export function ProjectsPage() {
  return (
    <div className="narrow-page">
      <ListingHero
        className="projects-hero"
        title="Selected projects, platform work, and representative case studies."
        description="A focused set of AI interface, analytics dashboard, design-to-code, and frontend architecture work shaped by my experience across enterprise platforms."
      />

      <div className="card-grid">
        {projectDetails.map((item) => (
          <ProjectCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
