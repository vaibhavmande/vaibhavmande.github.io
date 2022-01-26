export type Props = {
  title: string;
  secondary?: string;
  hasSecondary?: boolean;
  secondaryUrl?: string;
};

export default function SectionTitle({
  title,
  secondary = '',
  secondaryUrl = '#',
  hasSecondary = true
}: Props) {
  return (
    <h2 className="text-2xl flex justify-between items-baseline border-b border-neutral-500 border-opacity-50 pb-2 mb-4">
      <span>{title}</span>
      {hasSecondary && (
        <a
          href={secondaryUrl}
          className="text-base border-b-2 border-transparent hover:border-b-2 hover:border-zinc-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          {secondary}
        </a>
      )}
    </h2>
  );
}
