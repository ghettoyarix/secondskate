import React, { useState, useEffect, forwardRef, ForwardedRef } from 'react';
import Label from '../Label';
import Image from 'next/image';
import cn from 'classnames';
import NoPhoto from '../NoPhoto';
import HyperLink from '../../widgets/HyperLink';
import { parseBidTitle } from 'helpers/parseTittle';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { editBid, removeBid } from '../../../redux/slices/modalSlice';
import Product from 'types/models/Product';
interface BidsProps extends Product {
  obj?: Product;
  still?: boolean;
  previewImage?: string;
  editable?: boolean;
}
const Bid = forwardRef((props: BidsProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    obj,
    username,
    productId,
    title,
    still,
    category,
    type,
    price,
    size,
    condition,
    brand,
    previewImage,
    photoURLs,
    editable,
  } = props;
  const dispatch = useDispatch();

  const editCall = () => {
    dispatch(editBid(obj));
  };
  const removeCall = () => {
    dispatch(removeBid(obj));
  };
  const handleClick = (e: MouseEvent) => {
    if (editable || still) {
      e.preventDefault();
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        ' duration-150 outline-1 outline h-[433px] flex flex-col justify-between rounded-[12px] outline-lightGray   bg-white w-[256px] mb-1	',
        {
          'hover:scale-[1.07]': !still,
        },
      )}>
      <Link onClick={handleClick} href={`/product/${productId}`}>
        <div className={`h-[256px]  w-[256px]	     mb-3 relative `}>
          {previewImage || (photoURLs && photoURLs[0]) ? (
            <Image
              className={` 0 rounded-[12px] object-cover ${
                !editable ? 'cursor-pointer' : 'cursor-default'
              } `}
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
              className="absolute rounded-full bg-white border-2 border-white cursor-pointer top-3 left-3"
              width={34}
              height={34}
              alt={'pencil'}
              src={'/svg/pencil.svg'}></Image>
          )}
          {editable && (
            <Image
              onClick={removeCall}
              className="absolute rounded-full bg-white border-2 border-white 
            cursor-pointer top-3 left-[210px]  "
              width={34}
              height={34}
              alt={'trash'}
              src={'/svg/trash.svg'}></Image>
          )}
        </div>
      </Link>
      <div className="px-2">
        <div className="flex justify-between w-full mb-3">
          <HyperLink path={`/product/${productId}`}>{title}</HyperLink>
          <Label>{price || '--'} UAH</Label>
        </div>

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
            src={`/svg/no-profile-picture.svg`}></Image>

          <HyperLink path={`/profile/${username}`}>{username}</HyperLink>
        </div>
      </div>
    </div>
  );
});
Bid.displayName = 'Bid';
export default Bid;
