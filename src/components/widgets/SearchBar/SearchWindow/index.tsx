import React, { FC } from 'react';
import { useHeader } from 'context/HeaderContext';
import Image from 'next/image';
import { useAppSelector } from 'hooks/redux';
const SearchWindow = ({ searched }: { searched: string | null }) => {
  const { searchedValue, accountsFound } = useAppSelector((state) => state.header);

  return searched ? (
    <div
      className=" bg-white rounded-xl border-2 z-20 border-gray text-center 
        absolute  top-[15%] max-w-[600px] right-0 left-0 mx-auto     ">
      <div className="flex justify-center flex-col items-center">
        <p className="text-mid break-words  w-[80%]">Searching for a &quot;{searched}&quot;</p>
        <div>
          <p className="text-[18px] text-left px-8">Accounts found:</p>
          {accountsFound.map((account) => (
            <div key={account.title} className="flex gap-4 border-b-2    border-lightGray py-4">
              <div className=" relative">
                <Image
                  className="rounded-full"
                  height={50}
                  width={50}
                  alt="profile"
                  src={account.photoURL}></Image>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-gray">{account.username}</p>
                <p className="font-[500]">{account.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchWindow;
