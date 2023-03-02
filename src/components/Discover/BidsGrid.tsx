import React, { ReactNode } from 'react';
import Bid from 'components/UI/Bid';
import BidLoader from 'components/UI/loaders/BidLoader';
import NothingFound from './NothingFound';
type BidsGridProps = {
  children: ReactNode;
  productsLoading: boolean;
  filteredProducts: any[];
};

const BidsGrid = ({ children, productsLoading, filteredProducts }: BidsGridProps) => {
  if (productsLoading) {
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
      {filteredProducts.length !== 0 ? children : <NothingFound />}
    </div>
  );
};

export default BidsGrid;
