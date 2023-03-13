import { useAppSelector } from 'hooks/redux';
import React from 'react';
import Loader from 'components/widgets/SearchBar/SearchWindow/Loader';
import Image from 'next/image';
import Label from 'components/UI/Label';
const ProductsBlock = () => {
  const { productsFound, isLoading, totalProducts, searchedValue } = useAppSelector(
    (state) => state.header,
  );
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (!isLoading && totalProducts === 0 && searchedValue) {
    return <p>Unfortunately, there is nothing found.</p>;
  }
  if (productsFound) {
    return (
      <div className="flex flex-col  gap-3 ">
        {productsFound.map(({ title, photoURLs, username, _id, price }) => (
          <div
            key={_id}
            className="flex gap-4 justify-between cursor-pointer hover:bg-lightGray
             border-2 rounded-xl w-[290px] bg-white px-4 border-lightGray py-4">
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
        ))}{' '}
        {totalProducts > 3 && (
          <div
            className="flex gap-4 justify-center cursor-pointer hover:bg-lightGray
             border-2 rounded-xl w-[290px] bg-white px-4 border-lightGray py-4">
            <p className="text-lable">Find more</p>
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default ProductsBlock;
