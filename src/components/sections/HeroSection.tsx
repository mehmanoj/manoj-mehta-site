import ContactLinks from '../ui/ContactLinks';
import DownloadButtons from '../ui/DownloadButtons';
import MetricGrid from '../ui/MetricGrid';
import { contactLinks, impactMetrics } from '../../data/resumeData';

function HeroSection() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="border-b border-slate-200 px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600">
              Senior Frontend Engineer · Frontend Architect · AI Product UI Engineering
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Manoj Mehta
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Building scalable enterprise web applications, AI-powered interfaces, and data-intensive dashboards with React, Next.js, and TypeScript.
            </p>

            <ContactLinks
              items={contactLinks}
              className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-slate-700"
            />

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                Irvine, California
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                Available for U.S. remote and hybrid roles
              </span>
            </div>
          </div>

          <DownloadButtons />
        </div>

        <MetricGrid items={impactMetrics} />
      </div>
    </section>
  );
}

export default HeroSection;
