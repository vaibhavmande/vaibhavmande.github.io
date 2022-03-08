import type { AppProps } from 'next/app';
import AppHead from '../components/AppHead';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Layout>
        {/* w-full mx-auto */}
        <main className="flex-1 max-w-2xl mx-2">
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default App;
