import constants from '../constants';

function FooterLink({ href, title, children }) {
  return (
    <a href={href} title={title} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="m-auto max-w-2xl pb-4 text-base">
      <section className="grid grid-rows-2 gap-4 text-gray-500">
        <div>
          Made by Vaibhav Mande using <a href="#">Next.js</a>
        </div>
        <nav>
          <ul className="m-auto flex gap-4 justify-center">
            <li className="hover:text-gray-800">
              <FooterLink
                href={constants.linkedin}
                title="link to vaibhav's linkedin profile"
              >
                LinkedIn
              </FooterLink>
            </li>
            <li>
              <FooterLink
                href={constants.stackoverflow}
                title="link to vaibhav's stackoverflow profile"
              >
                StackOverflow
              </FooterLink>
            </li>
            <li>
              <FooterLink
                href={constants.github}
                title="link to vaibhav's github profile"
              >
                GitHub
              </FooterLink>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
