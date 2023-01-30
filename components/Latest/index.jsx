import React from 'react';
import Image from 'next/image';
import Label from '../UI/Label';
import Button from '../UI/Button';
const Latest = () => {
  return (
    <div className="flex wrapper py-32  gap-6 flex-wrap  justify-center  tab:justify-between    ">
      <div className="flex flex-col justify-between   h-[512px]  ">
        <div className="   h-full ">
          <div className=" relative w-full rounded-[12px] overflow-hidden h-full xs:min-w-[460px] min-w-[320px]">
            <Image className="object-cover" fill src="/items/2.png"></Image>
          </div>
        </div>
        <div className="flex mt-3   justify-between   ">
          <div className="flex">
            <Image className="rounded-full mr-4 " width={48} height={48} src="/profile.png"></Image>
            <div>
              <h1 className="font-semibold text-base">The future of ETH®</h1>
              <p className="text-reg">18 in stock</p>
            </div>
          </div>
          <div>
            <p className="text-[12px] text-gray mb-1">Highest bid</p>
            <Label>1.125 ETH</Label>
          </div>
        </div>
      </div>
      <div className="  hidden mob:flex flex-col border-lightGray gap-8 pr-8 tab:border-r-2">
        {[1, 2, 3].map((obj) => (
          <div className="flex gap-6 min-w-[351 px] justify-between">
            <div className="contain relative  w-[150px]  h-[150px]">
              <Image className="rounded-[12px]" fill src="/items/1.png"></Image>
            </div>
            <div className="flex flex-col text-left content-left justify-around max-h-[150px]">
              <p className="text-[16px] font-bold ">ETH never die</p>
              <div className="flex gap-6 text-start items-start ">
                <Image height={24} width={24} src="/profile.png"></Image>
                <Label>0.27 ETH</Label>
                <p className="text-reg  text-gray">1 of 12</p>
              </div>
              <div>
                <Button className=" py-2 outline-gray text-[14px]" title="Place a bid"></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" ">
        <p className="text-[12px] w-full mb-2 mob:font-bold text-gray font-bold">
          Latest upload from creators 🔥
        </p>
        <div className=" flex  gap-3 justify-start overflow-x  tab:overflow-x-visible  overflow-x-scroll  overflow-hidden tab:justify-between tab:flex-col">
          {[1, 2, 3, 4].map((obj) => (
            <div className="flex gap-4 min-w-[224px]    items-center   ">
              <Image height={56} width={56} src="/profile.png"></Image>
              <div className="text-reg my-6 font-bold">
                <p>Payton Harris</p>
                <p>
                  2.456 <span className="font-[300] text-gray">ETH</span>
                </p>
              </div>
            </div>
          ))}
          <Button className="hidden tab:flex" title="Discover more" arrow></Button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
