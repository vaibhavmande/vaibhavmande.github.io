import type { AppProps } from 'next/app';
import AppHead from '../components/AppHead';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
