import SectionCard from '../layout/SectionCard';
import SectionHeader from '../layout/SectionHeader';
import { projects } from '../../data/resumeData';

function ProjectsSection() {
  return (
    <SectionCard id="projects">
      <SectionHeader label="Selected Projects" title="Representative client work" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {project.body}
            </p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

export default ProjectsSection;
