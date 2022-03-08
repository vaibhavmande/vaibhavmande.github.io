import { useRouter } from 'next/router';
import HighlightedNavLink from './HighlightedNavLink';
import constants from '../constants';
import TargetLink from './atoms/TargetLink';

export default function Header() {
  const { asPath } = useRouter();

  return (
    <header className="mx-2 sm:mx-0">
      <nav className="mx-auto max-w-2xl w-full flex flex-row justify-between py-4">
        <ul className="flex gap-8 items-center content-between w-full">
          <li>
            <HighlightedNavLink
              conditional={asPath == constants.home}
              label="Home"
              href={constants.home}
            />
          </li>
          <li>
            <HighlightedNavLink
              conditional={asPath == constants.resume}
              label="Resume"
              href={constants.resume}
            />
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
