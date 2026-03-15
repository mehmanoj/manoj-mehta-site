import type { Metric } from '../../data/resumeData';

type MetricGridProps = {
  items: Metric[];
};

function MetricGrid({ items }: MetricGridProps) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
        >
          <div className="text-2xl font-bold tracking-tight text-[#0F9F6E]">
            {item.value}
          </div>
          <div className="mt-1 text-sm leading-6 text-slate-600">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MetricGrid;
