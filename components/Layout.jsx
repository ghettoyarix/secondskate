import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
