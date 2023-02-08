import React, { useState, useEffect } from 'react';
import Label from '../Label';
import Image from 'next/image';
import cn from 'classnames';
import NoPhoto from '../NoPhoto';
import HyperLink from '../../widgets/HyperLink';
import { parseBidTitle } from '../../../utils/parseTittle';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { editBid } from '../../../redux/slices/modalSlice';
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
    editable,
  } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const editCall = () => {
    dispatch(editBid());
  };
  const goToProduct = () => {
    if (!editable) {
      router.push(`/product/${productId}`);
    }
  };
  const goToUser = () => {
    router.push(`/profile/${username}`);
  };
  return (
    <div
      className={cn(
        ' duration-150 outline-1 outline  rounded-[12px] outline-lightGray   bg-white w-[256px] mb-1	',
        {
          'hover:scale-[1.1]': !still,
        },
      )}>
      <div
        onClick={goToProduct}
        className={`h-[256px]  w-[256px]	 ${!editable && 'cursor-pointer'}    mb-3 relative `}>
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
        {editable && (
          <Image
            onClick={editCall}
            className="absolute cursor-pointer top-3 left-3"
            width={34}
            height={34}
            alt={'pencil'}
            src={'/svg/pencil.svg'}></Image>
        )}
      </div>
      <div className="px-2">
        <div className="flex justify-between  w-full mb-3">
          <HyperLink path={`/product/${productId}`}>{title}</HyperLink>
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
