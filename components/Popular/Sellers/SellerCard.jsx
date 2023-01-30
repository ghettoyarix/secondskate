import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
const labels = [
  { pic: 'champ', color: '#3772F' },
  { pic: 'pro', color: '#9757D7' },
  { pic: 'lightning', color: '#45B36B' },
  { pic: 'top', color: '#3772F' },
  { pic: 'top', color: '#777E91' },
];

const SellerCard = ({ place, imageURL }) => {
  return (
    <div
      className="bg-white  hover:scale-[1.1] hover:drop-shadow-xl

    rounded-2xl flex flex-col items-center min-w-[200px] h-[248px] p-6">
      <div className="flex w-full   justify-between border-b-2 border-lightGray ">
        <div
          className={cn('flex items-center  gap-1 rounded-2xl py-1 px-2 mb-7 ', {
            'bg-primary ': place === 1,
            'bg-purple': place === 2,
            'bg-green': place === 3,
            'bg-black': place === 4,
            'bg-gray': place === 5,
          })}>
          <Image width={16} height={16} src="/svg/champ.svg"></Image>
          <p className=" text-[12px] font-semibold text-white"> #{place}</p>
        </div>
        <div className="flex mt-[-25px]   gap-2 ">
          <Image width={24} height={24} src="/svg/plus.svg"></Image>
          <Image width={14} height={9} src="/svg/upArrow.svg"></Image>
        </div>
      </div>
      <div className="mt-7 font-bold">
        <Image className="mb-2" width={64} height={64} src="/profile.png"></Image>
        <p className="text-reg">Edd Harris</p>
        <p className="text-reg">
          2.456 <span className="text-gray font-normal">ETH</span>
        </p>
      </div>
    </div>
  );
};

export default SellerCard;
