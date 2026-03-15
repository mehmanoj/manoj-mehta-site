import SectionCard from '../layout/SectionCard';
import SectionHeader from '../layout/SectionHeader';
import BulletList from '../ui/BulletList';
import { achievements } from '../../data/resumeData';

function AchievementsSection() {
  return (
    <SectionCard>
      <SectionHeader label="Selected Achievements" title="Architecture impact" />
      <BulletList items={achievements} bulletClassName="bg-blue-600" />
    </SectionCard>
  );
}

export default AchievementsSection;
