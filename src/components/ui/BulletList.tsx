type BulletListProps = {
  items: string[];
  bulletClassName: string;
};

function BulletList({ items, bulletClassName }: BulletListProps) {
  return (
    <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700 sm:text-[15px]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className={`mt-2 h-2 w-2 flex-none rounded-full ${bulletClassName}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default BulletList;
