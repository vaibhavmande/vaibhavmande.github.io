import Link from 'next/link';
import constants from '../constants';
import TargetLink from './atoms/TargetLink';

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
            <TargetLink
              href={constants.github}
              title="vaibhav's github profile"
            >
              <img
                src="/static/images/github.svg"
                alt="github icon"
                className="w-4 inline align-middle mr-1"
              />
              <span className="align-middle">GitHub</span>
            </TargetLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
