import Head from 'next/head';
import Image from 'next/image';

import Discover from '../components/Discover';
import Earn from '../components/Earn';
import type { NextPage, GetServerSideProps } from 'next';

interface IProduct {}
interface IProducts {
  products: IProduct[];
}
export async function getServerSideProps() {
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/getProducts`);
  const products: IProducts = await res.json();
  return {
    props: { products }, // will be passed to the page component as props
  };
}

const Home: NextPage = ({ products }) => {
  return (
    <div className=" ">
      <Head>
        <title>secondskate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Trending></Trending>
      <Latest></Latest>
      <Popular></Popular>
      <HotBid></HotBid>
      <HotCollections></HotCollections> */}
      <Discover products={products}></Discover>
      <Earn></Earn>
    </div>
  );
};
export default Home;
