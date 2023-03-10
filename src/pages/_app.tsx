import '../../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import { AuthProvider } from 'context/AuthContext';
import { setupStore } from 'redux/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>secondskate</title>
      </Head>
      <Provider store={setupStore()}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  );
}
