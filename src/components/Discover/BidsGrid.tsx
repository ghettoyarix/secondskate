import React, { ReactNode, useEffect } from 'react';
import Bid from 'components/UI/Bid';
import BidLoader from 'components/UI/loaders/BidLoader';
import NothingFound from './NothingFound';
import Grid from './Grid';
type BidsGridProps = {
  productsLoading: boolean;
  filteredProducts: any[];
};
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { fetchProducts } from 'redux/actionCreators/fetchProducts';

const BidsGrid = ({}) => {
  const { error, isLoading, products, totalProducts } = useAppSelector((state) => state.products);
  if (!isLoading && totalProducts === 0) {
    return <NothingFound x={totalProducts} />;
  }

  if (isLoading) {
    return (
      <Grid>
        <BidLoader />
        <BidLoader />
        <BidLoader />
        <BidLoader />
      </Grid>
    );
  }

  return (
    <Grid>
      {products.map((obj) => (
        <Bid {...obj} key={obj._id}></Bid>
      ))}
    </Grid>
  );
};

export default BidsGrid;
