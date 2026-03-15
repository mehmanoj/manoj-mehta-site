import type { ContactLink } from '../../data/resumeData';

type ContactLinksProps = {
  items: ContactLink[];
  className?: string;
};

function ContactLinks({ items, className = '' }: ContactLinksProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="flex items-center gap-2 hover:text-blue-600"
          {...(item.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <i className={`${item.icon} text-blue-600`} aria-hidden="true" />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}

export default ContactLinks;
