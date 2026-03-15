import SectionCard from '../layout/SectionCard';
import { sectionLabelClass } from '../../styles/classes';

function OpenToSection() {
  return (
    <SectionCard id="contact">
      <p className={sectionLabelClass}>Open To</p>
      <p className="mt-4 text-sm leading-7 text-slate-700">
        Senior architect, principal individual contributor, front-end platform
        engineering, developer experience, and platform modernization opportunities.
      </p>
    </SectionCard>
  );
}

export default OpenToSection;
