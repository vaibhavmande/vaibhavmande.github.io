import {
  ExperienceHeader,
  ExperienceBlock,
  ResumeTitle
} from '../components/resume';
import constants from '../constants';

export default function Resume() {
  return (
    <>
      <h1 className="font-bold text-3xl mb-2">Vaibhav Mande</h1>
      <h2 className="text-2xl text-gray-500 mb-6">
        Web developer in Pune, India
      </h2>
      <ResumeTitle title="Summary" />
      <p className="mb-6 leading-7">
        Frontend engineer as well a skilled leader with more than nine years of
        experience developing web-based applications using React, Redux,
        TypeScript and CSS. Skilled in writing well-factored, fast and
        well-covered automation as well as unit tests. Committed to learning and
        utilizing emerging technologies to provide the best solutions.
      </p>
      <ResumeTitle title="Recent Experience" />
      <ExperienceHeader
        position="Software Designer"
        duration="Jul 2020 - Sep 2021"
        company="Globant India Pvt. Ltd."
        location="Pune, India"
      />
      <ExperienceBlock>
        <>
          <p>
            My role was to write and style scalable and reusable front-end
            components that meet the requirements of mocks from Figma and
            technical stories. Also responsible for maintaining Unit testing as
            well as Automation testing repositories. Being a lead for three
            juniors responsible for their personal as well as technical growth
            in the organization.
          </p>
          <p>
            Technologies used: React, Next.js, MobX, JavaScript, TypeScript,
            Jest, WebDriver.IO
          </p>
          <p className="underline capitalize text-lg">Accomplishments</p>
          <ul className="list-disc pl-4 flex flex-col gap-1">
            <li>
              Setup the entire unit testing and automation testing system to
              increase the stability of the product.
            </li>
            <li>
              Added and improved existing unit tests which lead to doubling the
              coverage to 60%.
            </li>
            <li>
              Wrote automation test cases using WebdriverIO and increased
              coverage by 30%.
            </li>
            <li>
              Collaborated with multiple teams in a micro frontend application
              architecture.
            </li>
            <li>Reduced bundle size by 50% by removing all global imports.</li>
            <li>
              Using Axe analyzed and created tasks for accessibility issues
              which helped teams to improve the accessibility.
            </li>
          </ul>
        </>
      </ExperienceBlock>
      <a
        href={constants.resume}
        target="_blank"
        rel="noopener"
        role="button"
        tabIndex={0}
        className="text-white inline-block mt-2 py-2 px-5 rounded-md text-base bg-blue-500 hover:bg-blue-400 hover:ring-0 hover:cursor-pointer"
      >
        Download Full Resume
      </a>
    </>
  );
}
