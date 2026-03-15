import SectionCard from '../layout/SectionCard';
import SectionHeader from '../layout/SectionHeader';
import { platforms } from '../../data/resumeData';

function PlatformsSection() {
  return (
    <SectionCard>
      <SectionHeader label="Platforms Built" title="Platform leadership" />

      <div className="mt-6 space-y-5">
        {platforms.map((platform) => (
          <div key={platform.title}>
            <h3 className="text-sm font-semibold text-slate-900">
              {platform.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {platform.body}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default PlatformsSection;
