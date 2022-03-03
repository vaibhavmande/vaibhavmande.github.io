import constants from '../constants';

function Title({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-xl border-b pb-2 mb-4 border-neutral-500 border-opacity-50">
        {title}
      </h2>
    </>
  );
}

export default function Resume() {
  return (
    <main className="flex-1 max-w-2xl w-full mx-auto mb-8">
      <h1 className="font-bold text-3xl mb-2">Vaibhav Mande</h1>
      <h2 className="text-2xl text-gray-500 mb-6">
        Web developer in Pune, India
      </h2>
      <Title title="Summary" />
      <p className="mb-6 leading-7">
        Frontend engineer as well a skilled leader with more than nine years of
        experience developing web-based applications using React, Redux,
        TypeScript and CSS. Skilled in writing well-factored, fast and
        well-covered automation as well as unit tests. Committed to learning and
        utilizing emerging technologies to provide the best solutions.
      </p>
      <Title title="Recent Experience" />
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
    </main>
  );
}

type ExperienceHeaderType = {
  position: string;
  duration: string;
  company: string;
  location: string;
};

function ExperienceHeader({
  position,
  duration,
  company,
  location
}: ExperienceHeaderType) {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl">{position}</p>
        <p className="text-gray-500">{duration}</p>
      </div>
      <div className="flex gap-2 items-center mb-4">
        <p className="text-lg">{company}</p>-
        <p className="italic spa">{location}</p>
      </div>
    </>
  );
}

function ExperienceBlock({ children }: { children: React.ReactChild }) {
  return <div className="flex flex-col gap-4 leading-7 mb-6">{children}</div>;
}
