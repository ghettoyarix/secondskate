import React from 'react';
import Image from 'next/image';
const index = () => {
  return (
    <div className="bg-backGray">
      <div className="wrapper py-32">
        <h1 className="text-giant mb-16 font-bold">Hot collections</h1>
        <div className="flex justify-between ">
          {[...new Array(3)].map(() => (
            <div className="">
              <Image
                className="mb-2 rounded-xl"
                width={352}
                height={240}
                src="/items/1.png"></Image>
              <div className="flex justify-between ">
                {[...new Array(3)].map(() => (
                  <Image
                    className="mb-2 rounded-xl"
                    width={112}
                    height={80}
                    src="/items/1.png"></Image>
                ))}
              </div>
              <div>
                <p className="text-mid font-bold"> Awesome collection </p>
                <div className="flex items center justify-between">
                  <div className="flex gap-2">
                    <Image width={24} height={24} src="/profile.png"></Image>
                    <p className="ml-2 text-reg">By Kennith Olson</p>{' '}
                  </div>
                  <p className="text-[12px] font-bold my-auto px-[4px] p-[2px] rounded-md border-gray border">
                    28 items
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
