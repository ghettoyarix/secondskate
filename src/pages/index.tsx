import Head from 'next/head';
import Image from 'next/image';

import Discover from 'components/Discover';

import { DiscoverProvider } from 'context/DiscoverContext';
import type { NextPage, GetServerSideProps } from 'next';

interface IProduct {}
interface IProducts {
  products: IProduct[];
}
export async function getServerSideProps() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts`;

  const res = await fetch(url);

  const json = await res.json();
  const products = json.products;
  return {
    props: { products }, // will be passed to the page component as props
  };
}

const Home: NextPage<IProducts> = ({ products }) => {
  return (
    <div className=" ">
      {/* <Trending></Trending>
      <Latest></Latest>
      <Popular></Popular>
      <HotBid></HotBid>
      <HotCollections></HotCollections> */}
      <DiscoverProvider>
        <Discover products={products}></Discover>
      </DiscoverProvider>
    </div>
  );
};
export default Home;
