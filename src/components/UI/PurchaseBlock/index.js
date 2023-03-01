import React from 'react';
import Button from '../Button';
import Image from 'next/image';
const index = () => {
  return (
    <div className="p-6 mt-8   border-2 rounded-xl   shadow-2xl  border-lightGray">
      <div className="flex gap-4 mb-8">
        <Image
          className="object-contain rounded-full aspect-square"
          height={50}
          width={50}
          alt="profile"
          src={info?.profilePhoto}></Image>

        <div>
          <p className="text-gray">
            Highest bid by <span className="text-black">Kohaku Tora</span>
          </p>
          <div className="flex gap-3 text-mid font-bold">
            <p>1.46 ETH</p>
            <p className="text-gray">$2,764.89</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mb-8">
        <Button onClick={() => null} expansive primary>
          Purchase now
        </Button>
        <Button onClick={() => null} expansive>
          Place a bid
        </Button>
      </div>
      <p className="text-reg text-gray">
        Service fee <span className="text-black">1.5%</span> 2.563 ETH $4,540.62
      </p>
    </div>
  );
};

export default index;
