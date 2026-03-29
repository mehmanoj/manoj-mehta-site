import type { ProjectItem } from '../../types/site';
import { RouteLink } from '../common/RouteLink';
import { TagList } from '../common/TagList';

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="project-tile">
      <div className="project-image-shell">
        <img className="tile-image" src={item.image} alt={item.title} />
        <div className="tile-image-overlay" />
      </div>
      <h2>
        <RouteLink href={`/projects/${item.slug}/`}>{item.title}</RouteLink>
      </h2>
      <p className="tile-kicker">{item.subtitle}</p>
      <p>{item.summary}</p>
      <TagList tags={item.tags} />
      <RouteLink className="inline-link" href={`/projects/${item.slug}/`}>
        Open project →
      </RouteLink>
    </article>
  );
}
