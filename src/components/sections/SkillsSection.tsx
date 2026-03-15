import SectionCard from '../layout/SectionCard';
import SectionHeader from '../layout/SectionHeader';
import { skills } from '../../data/resumeData';

function SkillsSection() {
  return (
    <SectionCard id="skills">
      <SectionHeader label="Technical Skills" title="Core strengths" />

      <div className="mt-6 space-y-5">
        {skills.map((skill) => (
          <div key={skill.title}>
            <h3 className="text-sm font-semibold text-slate-900">
              {skill.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {skill.body}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default SkillsSection;
