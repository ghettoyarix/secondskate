import Discover from 'components/Discover';

import { DiscoverProvider } from 'context/DiscoverContext';
import type { NextPage, GetServerSideProps } from 'next';

interface IProduct {}
interface IProducts {
  products: IProduct[];
}

const Home: NextPage<IProducts> = ({ products }) => {
  return (

    <div className=" ">
      <DiscoverProvider>
        <Discover></Discover>
      </DiscoverProvider>
    </div>
  );
};
export default Home;
