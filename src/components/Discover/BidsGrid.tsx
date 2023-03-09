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
import { useInView } from 'react-intersection-observer';
import { nextPage } from 'redux/slices/productsSlice';
import useFetchProducts from 'hooks/useFetchProducts';
const BidsGrid = ({}) => {
  const { fetchMore } = useFetchProducts();
  const dispatch = useAppDispatch();
  const { ref, inView, entry } = useInView();
  const { error, isLoading, products, totalProducts, page, productsFetched } = useAppSelector(
    (state) => state.products,
  );
  const lastProduct = products[products.length - 1];

  useEffect(() => {
    if (inView && productsFetched < totalProducts) {
      fetchMore(page);
    }
  }, [inView]);

  const productList =
    products && products.map((obj) => <Bid ref={lastProduct && ref} {...obj} key={obj._id}></Bid>);

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
