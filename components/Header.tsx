import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <nav className="mx-auto max-w-2xl w-full flex flex-row justify-between py-4">
        <ul className="flex gap-8 items-center content-between w-full">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </li>
          <li className="ml-auto">
            <Link href="/contact">
              <a>Twitter</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
