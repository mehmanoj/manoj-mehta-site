import { sectionLabelClass } from '../../styles/classes';

function SummarySection() {
  return (
    <div className="border-b border-slate-200 px-6 py-8 sm:px-8 lg:border-r lg:border-b-0 lg:px-10">
      <p className={sectionLabelClass}>Professional Summary</p>

      <p className="mt-4 text-[15px] leading-7 text-slate-700 sm:text-base">
        Senior frontend engineer and hands-on architect with 20+ years of experience building
        scalable enterprise web applications, AI-powered interfaces, and data-intensive dashboards
        across financial services and other large-scale industries.
      </p>

      <p className="mt-4 text-[15px] leading-7 text-slate-700 sm:text-base">
        Specialized in React, Next.js, and TypeScript, with strong experience across configurable
        analytics interfaces, chat-driven workflows, design-to-code execution, component systems,
        performance optimization, accessibility, and AI-assisted delivery workflows.
      </p>
    </div>
  );
}

export default SummarySection;
