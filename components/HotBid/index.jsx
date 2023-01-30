import React from 'react';
import NavArrows from '../UI/NavArrows';
import Image from 'next/image';
import Label from '../UI/Label';
import cn from 'classnames';
import Bid from '../UI/Bid';
const index = () => {
  return (
    <div className="wrapper py-32">
      <div className="flex mb-16 items-center justify-between">
        <h1 className="text-giant font-bold">Hot bid</h1>
        <NavArrows></NavArrows>
      </div>
      <div className="flex  gap-8">
        {[...new Array(4)].map((_, i) => (
          <Bid i={i}></Bid>
        ))}
      </div>
    </div>
  );
};

export default index;
