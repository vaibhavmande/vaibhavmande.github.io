import Link from 'next/link';

function HighlightedNavLink({ conditional, label, href }) {
  return (
    <Link href={href}>
      <a className={conditional ? 'border-b-4 border-indigo-500 pb-1' : ''}>
        {label}
      </a>
    </Link>
  );
}

export default HighlightedNavLink;
