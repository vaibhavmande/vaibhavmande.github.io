import UserCard from '../components/UserCard';
import PostShowcase from '../components/PostShowcase';
import TitledContent from '../components/TitledContent';

export default function Home() {
  return (
    // w-full mx-auto
    <main className="flex-1 max-w-2xl mx-2">
      <UserCard />
      <section className="mb-8">
        <TitledContent title="About" secondaryUrl="/about" hasSecondary>
          <>
            <p className="leading-7 mb-4">
              I am a frontend developer who loves to build interfaces using
              React and Next. I love to teach and I am grateful to have got
              opportunities to mentor most wonderful minds. I am also passionate
              about web accessiblity and strongly believe in inclusive design.
            </p>
            <p className="leading-7 mb-4">
              I like minimal designs which are easy to use. This website is a
              reflection of me and a collection of items I learnt and created.
              Check my React and web-accessibility certificates.
            </p>
            <p className="leading-7">
              Send me a connection request or just say Hi 👋. I like meeting new
              people. You can contact me at Twitter, Github and LinkedIn
            </p>
          </>
        </TitledContent>
      </section>
      <PostShowcase />
    </main>
  );
}
