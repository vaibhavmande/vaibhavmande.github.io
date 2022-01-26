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
          <p className="leading-7">
            I am a frontend developer who loves to build interfaces using React
            and Next. I get facinated by unit tests, I love to write what I
            learnt at my blog at Medium. I love to teach and I am grateful to
            have got opportunities to mentor most wonderful minds. I am also
            passionate about web accessiblity and strongly believe in inclusive
            design.
          </p>
        </TitledContent>
      </section>
      <RecentPosts number={3} />
      <section className="mb-8"></section>
    </main>
  );
}
