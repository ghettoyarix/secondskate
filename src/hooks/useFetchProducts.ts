import { useEffect, useMemo } from 'react';

import { clearProducts, nextPage } from 'redux/slices/productsSlice';
import { fetchProducts } from 'redux/actionCreators/fetchProducts';

import type { queryProps } from 'types/models/Query';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from './redux';

const useFetchProducts = () => {
  const { chosenCategory, chosenCondition, chosenPriceSorter } = useAppSelector(
    (state) => state.discover,
  );
  const { page } = useAppSelector((state) => state.products);

  const queryProps: queryProps = useMemo(() => {
    return {
      type: chosenCategory.type,
      category: chosenCategory.category,
      priceSorter: chosenPriceSorter.value,
      condition: chosenCondition.value,
    };
  }, [chosenCategory, chosenPriceSorter, chosenCondition]);

  const dispatch = useAppDispatch();

  const intitalFetch = () => {
    dispatch(clearProducts());
    dispatch(fetchProducts({ queryProps, page }));
  };
  const fetchMore = (currentPage: number) => {
    dispatch(nextPage());
    console.log(currentPage);
    dispatch(fetchProducts({ queryProps, page: currentPage + 1 }));
  };
  return { queryProps, intitalFetch, fetchMore };
};

export default useFetchProducts;
