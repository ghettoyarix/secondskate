import React from 'react';
import SellerCard from './SellerCard';
const Sellers = () => {
  return (
    <div className="flex py-5  justify-start overflow-x  tab:overflow-x-visible  overflow-x-scroll  gap-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <SellerCard place={i} />
      ))}
    </div>
  );
};

export default Sellers;
