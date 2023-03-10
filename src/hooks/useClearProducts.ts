import { useEffect, useCallback, useMemo } from 'react';
import useFetchProducts from './useFetchProducts';
import { useAppDispatch, useAppSelector } from './redux';
import { clearProducts } from 'redux/slices/productsSlice';
import { useRouter } from 'next/router';
import { fetchProducts } from 'redux/actionCreators/fetchProducts';
import type { queryProps } from 'types/models/Query';
export const useClearProducts = () => {
  const { chosenCategory, chosenCondition, chosenPriceSorter } = useAppSelector(
    (state) => state.discover,
  );
  const {} = useAppSelector((state) => state.products);

  const queryProps: queryProps = useMemo(() => {
    return {
      type: chosenCategory.type,
      category: chosenCategory.category,
      priceSorter: chosenPriceSorter.value,
      condition: chosenCondition.value,
    };
  }, [chosenCategory, chosenPriceSorter, chosenCondition]);
  const { page } = useAppSelector((state) => state.products);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const clear = useCallback(() => {
    dispatch(clearProducts());
  }, [queryProps]);

  useEffect(() => {
    clear();
  }, [clear]);

  const fetch = useCallback(() => {
    dispatch(fetchProducts({ queryProps, page }));
  }, [page, queryProps]);

  return { fetch, queryProps };
};
