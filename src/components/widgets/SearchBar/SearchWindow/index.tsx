import React, { FC, useEffect, useRef, useState } from 'react';
import { useHeader } from 'context/HeaderContext';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { searchProducts } from 'redux/actionCreators/products';
import useFetchProducts from 'hooks/useFetchProducts';
import Label from 'components/UI/Label';
import useOutsideHandler from 'helpers/useOutsideHandler';
import { setOpenFlag } from 'redux/slices/headerSlice';
import Loader from './Loader';
import NothingFound from 'components/Discover/NothingFound';
const SearchWindow = ({ searched }: { searched: string | null }) => {
  const searchRef = useRef(null);
  const dispatch = useAppDispatch();
  const { searchedValue, productsFound, openFlag, isLoading, totalProducts } = useAppSelector(
    (state) => state.header,
  );

  useEffect(() => {
    if (searchedValue) {
      dispatch(searchProducts({ queryProps: { title: searchedValue, limit: 3 }, page: 1 }));
    }
  }, [searchedValue]);

  useOutsideHandler(searchRef, () => dispatch(setOpenFlag(false)));

  return searched && openFlag ? (
    <div
      ref={searchRef}
      className=" bg-white rounded-xl border-2 z-20 border-gray text-center 
        absolute  top-[15%] max-w-[375px] right-0 left-0 mx-auto     ">
      <div className="flex justify-center flex-col items-center">
        <p className="text-mid break-words  w-[80%]">Searching for a &quot;{searched}&quot;</p>

        <div className="flex flex-col  gap-3 ">
          {isLoading && <Loader />}
          {productsFound &&
            productsFound.map(({ title, photoURLs, username, _id, price }) => (
              <div
                key={_id}
                className="flex gap-4 justify-between cursor-pointer hover:bg-lightGray border-2 rounded-xl w-[290px] bg-white px-4 border-lightGray py-4">
                <div className=" relative">
                  <Image
                    className="rounded-full aspect-square"
                    height={50}
                    width={50}
                    alt="profile"
                    src={photoURLs[0]}></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-[500]">{title}</p>

                  <p className="text-gray">{username}</p>
                </div>
                <Label>{price + ' UAH'}</Label>
              </div>
            ))}
          {!isLoading && totalProducts === 0 && 'Unfortunatey, nothing found'}
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchWindow;
