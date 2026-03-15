import ResumeShell from './components/layout/ResumeShell';
import HeroSection from './components/sections/HeroSection';
import SummarySection from './components/sections/SummarySection';
import CareerObjectiveSection from './components/sections/CareerObjectiveSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import PlatformsSection from './components/sections/PlatformsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import OpenToSection from './components/sections/OpenToSection';

function App() {
  return (
    <ResumeShell>
      <HeroSection />

      <section className="overflow-hidden rounded-b-3xl border-x border-b border-slate-200 bg-white">
        <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
          <SummarySection />
          <CareerObjectiveSection />
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-8">
          <AchievementsSection />
          <ExperienceSection />
          <ProjectsSection />
        </div>

        <aside className="space-y-8">
          <PlatformsSection />
          <SkillsSection />
          <EducationSection />
          <OpenToSection />
        </aside>
      </section>
    </ResumeShell>
  );
}

export default App;
