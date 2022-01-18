import type { AppProps } from 'next/app';
import AppHead from '../components/AppHead';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
}

export default App;
