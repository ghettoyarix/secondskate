import React, { useState, useEffect } from 'react';
import Label from '../Label';
import Image from 'next/image';
import cn from 'classnames';
import NoPhoto from '../NoPhoto';
import HyperLink from '../../widgets/HyperLink';
import { parseBidTitle } from '../../../utils/parseTittle';
import Router, { useRouter } from 'next/router';
const Bid = (props) => {
  const {
    username,
    productId,
    title,
    still,
    owner,
    category,
    type,
    price,
    size,
    condition,
    description,
    brand,
    fileNames,
    previewImage,
    photoURLs,
  } = props;
  const langParser = {
    shoes: { eng: 'Shoes', ukr: 'Взуття' },
    seude: { eng: 'Seude', ukr: 'Замша' },
  };
  const router = useRouter();

  const goToProduct = () => {
    router.push(`/product/${productId}`);
  };
  const goToUser = () => {
    router.push(`/profile/${username}`);
  };
  return (
    <div
      className={cn(
        ' duration-150 outline-1 outline  rounded-[12px] outline-lightGray   bg-white w-[256px] mb-8	',
        {
          'hover:scale-[1.1]': !still,
        },
      )}>
      <div onClick={goToProduct} className="h-[256px]  w-[256px]	 cursor-pointer    mb-3 relative ">
        {previewImage || (photoURLs && photoURLs[0]) ? (
          <Image
            className="rounded-[12px] object-cover"
            alt="mainpic"
            fill
            sizes="(max-width: 256px) 100vw,50vw,
            33vw"
            src={previewImage || (photoURLs && photoURLs[0])}></Image>
        ) : (
          <NoPhoto still={still}></NoPhoto>
        )}
      </div>
      <div className="px-2">
        <div className="flex justify-between  w-full mb-3">
          <p onClick={() => console.log(categoryTitle('shoes'))} className="text-title font-bold">
            {title || 'Your title'}
          </p>
          <Label>{price || '--'} UAH</Label>
        </div>

        <p className="text-gray text-lable truncate   ">{description}</p>

        <div className="flex justify-between mt-3">
          <div className="flex text-[12px] gap-2">
            <p className="text-gray ">{parseBidTitle(category) || '--'}</p>
            <p className="font-semibold">{parseBidTitle(type) || '--'}</p>
          </div>
          <p className="text-reg font-medium">{parseBidTitle(condition)}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-gray ">{brand || '--'}</p>
          <p className="font-semibold">{size}</p>
        </div>
        <div className="flex justify-center  my-3  gap-2">
          <Image
            className={cn('rounded-full    border-white border-4  ')}
            alt="1"
            height={24}
            width={24}
            src={`/profile.png`}></Image>

          <HyperLink path={`/profile/${username}`}>{username}</HyperLink>
        </div>
      </div>
    </div>
  );
};

export default Bid;
