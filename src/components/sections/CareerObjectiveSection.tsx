import { sectionLabelClass } from '../../styles/classes';

function CareerObjectiveSection() {
  return (
    <div className="px-6 py-8 sm:px-8 lg:px-8">
      <p className={sectionLabelClass}>Career Objective</p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Seeking senior architect or principal IC roles focused on front-end
        platforms, developer experience, scalable UI systems, and modern
        engineering delivery practices.
      </p>
    </div>
  );
}

export default CareerObjectiveSection;
