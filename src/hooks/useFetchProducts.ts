import { useEffect, useMemo, useCallback } from 'react';

import { clearProducts, nextPage } from 'redux/slices/productsSlice';
import { fetchProducts } from 'redux/actionCreators/products';

import type { queryProps } from 'types/models/Query';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from './redux';
import useClock from 'helpers/useClock';
const useFetchProducts = () => {
  const { chosenCategory, chosenCondition, chosenSorter } = useAppSelector(
    (state) => state.discover,
  );
  const { maxPrice, minPrice } = useAppSelector((state) => state.range);

  const { page } = useAppSelector((state) => state.products);

  const queryProps: queryProps = useMemo(() => {
    return {
      type: chosenCategory.type,
      category: chosenCategory.category,
      condition: chosenCondition.value,
      maxPrice,
      minPrice,
      sortBy: chosenSorter.prop,
      sortDirection: chosenSorter.direction,
    };
  }, [chosenCategory, chosenCondition, maxPrice, minPrice, chosenSorter]);

  const dispatch = useAppDispatch();

  const intitalFetch = useCallback(
    (queryProps: queryProps) => {
      dispatch(clearProducts());

      dispatch(fetchProducts({ queryProps, page: 1 }));
    },
    [dispatch, page], // include page here
  );

  const fetchMore = useCallback(
    (queryProps: queryProps, page: number) => {
      dispatch(nextPage());
      dispatch(fetchProducts({ queryProps, page: page + 1 }));
    },
    [dispatch, queryProps], // include page here
  );

  return { queryProps, intitalFetch, fetchMore };
};

export default useFetchProducts;
