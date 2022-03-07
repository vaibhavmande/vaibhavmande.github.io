import constants from '../constants';
import TargetLink from './atoms/TargetLink';

export default function Footer() {
  return (
    <footer className="m-auto max-w-2xl pb-4 text-base">
      <section className="grid grid-rows-2 gap-4 text-gray-500">
        <div>
          Made by Vaibhav Mande using{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener"
            className="hover:text-gray-800"
          >
            Next.js
          </a>
        </div>
        <nav>
          <ul className="m-auto flex gap-4 justify-center">
            <li className="hover:text-gray-800">
              <TargetLink
                href={constants.linkedin}
                title="link to vaibhav's linkedin profile"
              >
                LinkedIn
              </TargetLink>
            </li>
            <li className="hover:text-gray-800">
              <TargetLink
                href={constants.stackoverflow}
                title="link to vaibhav's stackoverflow profile"
              >
                StackOverflow
              </TargetLink>
            </li>
            <li className="hover:text-gray-800">
              <TargetLink
                href={constants.github}
                title="link to vaibhav's github profile"
              >
                GitHub
              </TargetLink>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
