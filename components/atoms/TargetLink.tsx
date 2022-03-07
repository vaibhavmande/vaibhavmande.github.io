export default function TargetLink({ href, title, children }) {
  return (
    <a href={href} title={title} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
