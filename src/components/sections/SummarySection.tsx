import { sectionLabelClass } from '../../styles/classes';

function SummarySection() {
  return (
    <div className="border-b border-slate-200 px-6 py-8 sm:px-8 lg:border-r lg:border-b-0 lg:px-10">
      <p className={sectionLabelClass}>Professional Summary</p>

      <p className="mt-4 text-[15px] leading-7 text-slate-700 sm:text-base">
        Senior Front-End Architect and platform engineering leader with ~20 years
        of experience designing and delivering enterprise-scale digital platforms
        across financial services, telecom, retail, and healthcare. Specialized in
        React/TypeScript ecosystems, micro-frontend architectures, GraphQL
        integrations, and developer platform engineering that enable large
        engineering organizations to build and ship faster.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-700 sm:text-base">
        Hands-on architect who enjoys solving complex UI architecture challenges
        while enabling strong developer experience through reusable platforms,
        component libraries, and scalable integration patterns. Looking to apply
        this experience in a senior architect or principal individual contributor
        role focused on building scalable front-end platforms and improving
        developer experience.
      </p>
    </div>
  );
}

export default SummarySection;
