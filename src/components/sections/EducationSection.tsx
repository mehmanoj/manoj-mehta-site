import SectionCard from '../layout/SectionCard';
import { sectionLabelClass } from '../../styles/classes';

function EducationSection() {
  return (
    <SectionCard>
      <p className={sectionLabelClass}>Education</p>

      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
        <p>MCA — Computer Applications — IGNOU</p>
        <p>B.Sc. Mathematics &amp; Economics — Kurukshetra University</p>
      </div>
    </SectionCard>
  );
}

export default EducationSection;
