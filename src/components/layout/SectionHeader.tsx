import { sectionLabelClass, sectionTitleClass } from '../../styles/classes';

type SectionHeaderProps = {
  label: string;
  title?: string;
};

function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <>
      <p className={sectionLabelClass}>{label}</p>
      {title ? <h2 className={sectionTitleClass}>{title}</h2> : null}
    </>
  );
}

export default SectionHeader;
