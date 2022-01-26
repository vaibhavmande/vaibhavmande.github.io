/**
 * This showcase which show posts.
 * @param number The number of posts to be displayed
 * @returns JSX
 */

import SectionTitle from './atoms/SectionTitle';

type Props = {
  number: number;
};

type Post = {
  id: number;
  title: string;
  link: string;
  date: string;
};

const blogUrl = 'https://vaibhavmande.medium.com/';
const content: Post[] = [
  {
    id: 1,
    title: 'Collapsing Margin between parent and child',
    link: 'https://vaibhavmande.medium.com/collapsing-margin-between-parent-and-child-923daece3cef',
    date: 'Nov 23, 2021'
  },
  {
    id: 2,
    title: 'Mixins with Styled Components',
    link: 'https://vaibhavmande.medium.com/mixins-with-styled-components-85c8fafa758c',
    date: 'May 4, 2021'
  },
  {
    id: 3,
    title: 'How I created a blog using Next.js and MDX',
    link: 'https://vaibhavmande.medium.com/how-i-created-a-blog-using-next-js-and-mdx-6684ecf0785d',
    date: 'Apr 25, 2021'
  }
];

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className="flex flex-col gap-2">
      {posts.map((post) => (
        <li key={post.id}>
          <a
            href={post.link}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={post.title}
            className="flex justify-between items-baseline p-2 px-4 -mx-4 rounded-lg hover:bg-slate-100"
          >
            <h2>{post.title}</h2>
            <span className="text-sm">{post.date}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

/* The content should ne passed as Prop @todo */
export default function PostShowcase({ number = 3 }: Props) {
  return (
    <section className="mb-8">
      <SectionTitle
        title="Recent Posts"
        hasSecondary
        secondary="Show all"
        secondaryUrl={blogUrl}
      />
      <Posts posts={content} />
    </section>
  );
}
