import React, { ReactNode, useEffect } from 'react';
import Bid from 'components/UI/Bid';
import BidLoader from 'components/UI/loaders/BidLoader';
import NothingFound from './NothingFound';
type BidsGridProps = {
  children: ReactNode;
  productsLoading: boolean;
  filteredProducts: any[];
};
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { fetchProducts } from 'redux/actionCreators/fetchProducts';

const BidsGrid = ({ children, productsLoading, filteredProducts }: BidsGridProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { error, isLoading, products, totalProducts } = useAppSelector((state) => state.products);
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 mob:grid-cols-3 tab:grid-cols-4">
        <BidLoader />
        <BidLoader />
        <BidLoader />
        <BidLoader />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 mob:grid-cols-3 tab:grid-cols-4">
      {totalProducts !== 0 ? children : <NothingFound />}
    </div>
  );
};

export default BidsGrid;
