import Head from 'next/head';

export default function AppHead() {
  const meta = {
    title: 'Vaibhav Mande | Front end developer',
    description:
      'React developer based in Pune, India. JavaScript, TypeScript, Webdriver',
    type: 'website'
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        name="keyword"
        content="javascript, developer, react, web, Pune, Frontend Developer"
      />
      <meta
        property="og:title"
        content="Vaibhav Mande | Front End Web Developer, React"
      />
      <meta property="og:url" content="https://vaibhavmande.com" />
      <meta property="og:type" content={meta.type} />
    </Head>
  );
}
