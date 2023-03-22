import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import Bid from 'components/UI/Bid';
import BidLoader from 'components/UI/loaders/BidLoader';
import NothingFound from './NothingFound';
import Grid from './Grid';

type BidsGridProps = {
  productsLoading: boolean;
  filteredProducts: any[];
};
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { fetchProducts } from 'redux/actionCreators/products';
import { useInView } from 'react-intersection-observer';
import { nextPage } from 'redux/slices/productsSlice';
import useFetchProducts from 'hooks/useFetchProducts';
import useClock from 'helpers/useClock';
import { after } from 'node:test';
import { PAGE_LIMIT } from 'constants/products';
const BidsGrid = ({}) => {
  const { fetchMore, queryProps } = useFetchProducts();
  const dispatch = useAppDispatch();
  const { ref, inView, entry } = useInView();
  const [nothingFound, setNothingFound] = useState(false);
  const intervalPassed = useClock();
  const { error, isLoading, products, totalProducts, page, productsFetched } = useAppSelector(
    (state) => state.products,
  );
  const lastProduct = products[products.length - 1];

  useEffect(() => {
    if (inView && totalProducts > productsFetched) {
      console.log(inView);
      fetchMore(queryProps, page);
    }
  }, [inView, intervalPassed]);

  const productList =
    products && products.map((obj, i) => <Bid ref={lastProduct && ref} {...obj} key={i}></Bid>);

  const countLoaders = (productsFetched: number) => {
    if (productsFetched < PAGE_LIMIT) {
      return PAGE_LIMIT - productsFetched;
    }
    return PAGE_LIMIT - (productsFetched % PAGE_LIMIT);
  };
  const loaderAmount = countLoaders(productsFetched);

  useEffect(() => {
    setNothingFound(!isLoading && totalProducts === 0);
    console.log('nothingFound :', totalProducts);
  }, [isLoading, totalProducts]);

  if (nothingFound) {
    return <NothingFound />;
  }
  return (
    <>
      <Grid>
        {productList}
        {isLoading && [...new Array(loaderAmount)].map((_, i) => <BidLoader key={i} />)}
      </Grid>

      {}
    </>
  );
};

export default BidsGrid;
