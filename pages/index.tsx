import UserCard from '../components/UserCard';
import RecentPosts from '../components/RecentPosts';

export default function Home() {
  return (
    <main className="flex-1 max-w-2xl w-full mx-auto">
      <UserCard />
      <RecentPosts number={3} />
    </main>
  );
}
