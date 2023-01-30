import '../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  );
}
