import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../UI/Button';
import NavArrows from '../UI/NavArrows';
import Auction from '../Auction';
const Trending = () => {
  const [item, setItem] = useState(1);

  const nextItem = () => {
    setItem((prev) => prev + 1);
  };
  const prevItem = () => {
    setItem((prev) => prev - 1);
  };
  return (
    <div className=" wrapper   py-20 flex items-center flex-col justify-center tab:justify-between  tab:flex-row">
      <Image
        className="rounded-[16px] mb-8"
        height={800}
        width={640}
        src={`/items/${item}.png`}></Image>

      <div className="mt-[-10px] flex  flex-col max-w-[352px] justify-between ">
        <div className="   items-center">
          <h1 className=" text-main     leading-[0.9] mb-8 font-bold">
            the creator network<sup className="text-[30px] ">®</sup>
          </h1>
          <div className="flex justify-between w-full   ">
            <div className="flex  gap-2">
              <Image height={40} width={40} src="/profile.png"></Image>
              <div>
                <p className="text-reg text-gray">Creator</p>
                <p className="text-reg font-[500]">Enrico Cole</p>
              </div>
            </div>
            <div className="flex  gap-2">
              <Image height={40} width={40} src="/instant.png"></Image>
              <div>
                <p className="text-reg text-gray">Instant price</p>
                <p className="text-reg font-[700]">3.5 ETH</p>
              </div>
            </div>
          </div>
          <Auction />
          <div className=" w-full mb-8">
            <Button expansive title="Place a bid" primary></Button>
            <Button expansive title="View item"></Button>
          </div>
        </div>
        <div className=" flex justify-center tab:justify-start">
          <NavArrows leftArrowClick={prevItem} rightArrowClick={nextItem}></NavArrows>
        </div>
      </div>
    </div>
  );
};

export default Trending;
