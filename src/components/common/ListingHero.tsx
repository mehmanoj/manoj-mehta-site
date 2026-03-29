type ListingHeroProps = {
  title: string;
  description: string;
  className?: string;
};

export function ListingHero({ title, description, className = '' }: ListingHeroProps) {
  return (
    <section className={`listing-hero ${className}`.trim()}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
