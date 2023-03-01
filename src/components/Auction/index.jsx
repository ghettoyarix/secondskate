import React from 'react';

const index = ({ currentBid, estimateUSD, timeToEnd }) => {
  !timeToEnd && (timeToEnd = { hours: '--', mins: '--', seconds: '--' });
  !estimateUSD && (estimateUSD = '--');
  return (
    <div>
      <div className=" flex flex-col justify-between   items-center rounded-3xl my-8 py-8 outline outline-2 h-[296px] w-[352px] outline-lightGray">
        <p className="text-reg font-[500] mb-[-10px] ">Current Bid</p>
        <h1 className="text-giant  mb-[-10px] ">{currentBid || '--'} ETH</h1>
        <h2 className="text-gray text-mid   font-semibold">${estimateUSD}</h2>
        <p className=" text-[16px] ">Auction ending in</p>
        <div className="flex gap-5">
          <div>
            <h1 className="text-[32px]">{timeToEnd.hours}</h1>
            <p className="text-gray text-[16px]">Hrs</p>
          </div>
          <div>
            <h1 className="text-[32px]">{timeToEnd.mins}</h1>
            <p className="text-gray text-[16px]">mins</p>
          </div>
          <div>
            <h1 className="text-[32px]">{timeToEnd.seconds}</h1>
            <p className="text-gray text-[16px]">secs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
