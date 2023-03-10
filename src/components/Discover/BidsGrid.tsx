import React, { ReactNode, useCallback, useEffect } from 'react';
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
import { useInView } from 'react-intersection-observer';
import { nextPage } from 'redux/slices/productsSlice';
import useFetchProducts from 'hooks/useFetchProducts';
import { useClearProducts } from 'hooks/useClearProducts';
const BidsGrid = ({}) => {
  const dispatch = useAppDispatch();
  const { ref, inView, entry } = useInView();
  const { error, isLoading, products, totalProducts, page, productsFetched } = useAppSelector(
    (state) => state.products,
  );
  const lastProduct = products[products.length - 1];
  useClearProducts();
  useEffect(() => {
    if (inView) {
      dispatch(nextPage());
    }
  }, [inView]);

  const productList =
    products && products.map((obj, i) => <Bid ref={lastProduct && ref} {...obj} key={i}></Bid>);

  return (
    <>
      {!isLoading && totalProducts === 0 && <NothingFound />}
      <Grid>{productList}</Grid>
      {isLoading && (
        <Grid>
          <BidLoader />
          <BidLoader />
          <BidLoader />
          <BidLoader />
        </Grid>
      )}
      {}
    </>
  );
};

export default BidsGrid;
