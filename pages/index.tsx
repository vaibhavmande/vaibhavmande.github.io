import UserCard from '../components/UserCard';
import RecentPosts from '../components/PostShowcase';
import TitledContent from '../components/TitledContent';
import constants from '../constants';

export default function Home() {
  return (
    <main className="flex-1 max-w-2xl w-full mx-auto">
      <UserCard />
      <section className="mb-8">
        <TitledContent
          title="About"
          secondary="more"
          secondaryUrl="/about"
          hasSecondary
        >
          <>
            <p className="leading-7 mb-4">
              I am a frontend developer who loves to build interfaces using
              React and Next. I get facinated by unit tests, I love to write
              what I learnt at my blog at Medium. I love to teach and I am
              grateful to have got opportunities to mentor most wonderful minds.
              I am also passionate about web accessiblity and strongly believe
              in inclusive design.
            </p>
            <p className="leading-7 mb-4">
              I am currently learning Node.js and databases to be a full stack
              developer. I love minimal and clean designs. I write answers at
              stackoverflow in free time to help comunity.
            </p>
            <p className="leading-7">
              Check my Github, Twitter and LinkedIn profile. Send me a
              connection request or just say Hi 👋 I like minimal designs which
              are easy to use and this website is a reflection of me and a
              collection of items I learnt and created. If you have any question
              regarding content of this site or you just want to say hi send me
              a message at vaibhavrmande [at] gmail [dot] com I like meeting new
              people. - Twitter - Github
            </p>
          </>
        </TitledContent>
      </section>
      <RecentPosts number={3} />
      <section className="mb-8"></section>
    </main>
  );
}
