import React from 'react';
import Image from 'next/image';
import Button from '../UI/Button';
const Earn = () => {
  return (
    <div className="flex justify-between wrapper ">
      <div className="flex flex-col  justify-center text-left max-w-[480px]">
        <p className="text-lable font-bold text-left text-gray uppercase">
          Save your time with Stacks
        </p>
        <p className="text-[60px] mb-5 leading-[64px] font-bold">
          Earn free crypto with secondskate
        </p>
        <p className="text-lable  text-left text-gray mb-10 ">
          A creative agency that lead and inspire
        </p>
        <div className="flex gap-3 ">
          <Button primary>Earn now</Button> <Button>Discover more</Button>
        </div>
      </div>
      <div>
        <Image
          className="aspect-square"
          alt="earn"
          width={640}
          height={640}
          src="/coins.png"></Image>
      </div>
    </div>
  );
};

export default Earn;
