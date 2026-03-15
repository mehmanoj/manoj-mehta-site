import SectionCard from '../layout/SectionCard';
import SectionHeader from '../layout/SectionHeader';
import BulletList from '../ui/BulletList';
import { experienceBullets } from '../../data/resumeData';

function ExperienceSection() {
  return (
    <SectionCard id="experience">
      <SectionHeader label="Professional Experience" title="Publicis Sapient" />

      <div className="mt-2 flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-900">
          Senior Front-End Technical Architect
        </p>
        <p className="text-slate-500">Aug 2011 – Present</p>
      </div>

      <BulletList items={experienceBullets} bulletClassName="bg-slate-400" />
    </SectionCard>
  );
}

export default ExperienceSection;
