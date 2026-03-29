type TagListProps = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className = 'tag-row' }: TagListProps) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}
