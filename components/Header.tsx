import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav className="mx-auto max-w-2xl w-full flex flex-row justify-between py-4">
        <ul className="flex gap-8 items-center content-between">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <button>Theme</button>
      </nav>
    </header>
  );
}
