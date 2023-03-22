/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Label from 'components/UI/Label';
import cn from 'classnames';
import HyperLink from 'components/widgets/HyperLink';
import { parseBidTitle } from 'helpers/parseTittle';
import { useRouter } from 'next/router';
import getProfile from 'lib/firebase/utils/getProfile';
import { GetServerSidePropsContext } from 'next';
import Product from 'types/models/Product';
import type Profile from 'types/models/Profile';
import moveToStart from 'helpers/moveToStart';
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { productId } = context.query;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getProducts/${productId}`);
  const product: Product = await res.json();
  if (!product) {
    return {
      notFound: true,
    };
  }
  const info = await getProfile(product.username);
  return { props: { product, info } };
}

type ProductPageProps = {
  product: Product;
  info: Profile;
};

const productPage = ({ product, info }: ProductPageProps) => {
  const { price, description, condition, title, size, brand, photoURLs, username } = product;

  const router = useRouter();
  const shareItem = () => {};
  const addToFav = () => {};
  const exit = () => {};
  const [photos, setPhotos] = useState<string[]>(photoURLs);

  const pickPhoto = (elem: string) => {
    const newArray = moveToStart(photoURLs, elem);
    console.log(elem);
    setPhotos(newArray);
  };
  const actions = [
    { action: exit, icon: 'exit.svg' },
    { action: shareItem, icon: 'share.svg' },
    { action: addToFav, icon: 'love.svg' },
    { action: null, icon: 'others.svg' },
  ];

  const menu = ['Info', 'Owners', 'History', 'Bids'];
  const [chosenMenu, setChosenMenu] = useState(menu[0]);

  return (
    <div className="flex justify-center gap-3">
      <div className="flex flex-col tab:flex-row w-[1120px] items-center tab:items-start py-24 product:wrapper justify-start   tab:justify-between">
        <div className="relative aspect-auto h-[478px] z-1  w-[311px] xs:w-[496px] tab:mr-4 tab:w-[640px] xs:h-[568px]">
          <Image className=" rounded-xl object-cover" fill alt="1" src={photos[0]}></Image>
        </div>
        <div className="w-[375px]  items-stretch h-fit	tab:h-full flex flex-col justify-between  ">
          <div>
            <p className=" text-[40px] text-center mb-6  font-bold">{title}</p>
            <div className="flex  justify-between mx-3 mb-12">
              <Label>{price} UAH</Label>

              <p className="text-lable text-gray font-bold">{parseBidTitle(condition)}</p>
            </div>
            <div className="flex  justify-between mx-3 mb-12">
              <div className="flex gap-2">
                <p className="text-mid text-gray">Size:</p>
                <Label secondary>{size}</Label>
              </div>

              <p className="text-lable text-gray font-bold">{brand}</p>
            </div>
            <p onClick={() => console.log(photoURLs)} className="text-gray">
              {description}
            </p>
            <div className="flex">
              {photoURLs.map((photo) => (
                <div
                  onClick={() => {
                    pickPhoto(photo);
                  }}
                  key={photo}
                  className=" cursor-pointer relative object-fill h-20 w-20">
                  <Image className="rounded-xl" fill alt="creator" src={photo}></Image>
                </div>
              ))}
            </div>
            <div className=" hidden flex gap-3 justify-center p-1 rounded-full border-lightGray border-2 my-8">
              {menu.map((obj, index) => (
                <p
                  key={obj}
                  onClick={() => setChosenMenu(obj)}
                  className={cn(
                    'text-reg text-gray cursor-pointer font-bold px-3 py-[6px] rounded-full',
                    {
                      ' bg-dark text-white': obj === chosenMenu,
                    },
                  )}>
                  {obj}
                </p>
              ))}
            </div>
            <div>
              <div className="flex gap-4 border-y-2 mt-2  border-lightGray py-4">
                <div className=" relative">
                  <Image
                    className="rounded-full aspect-square "
                    height={50}
                    width={50}
                    alt="creator"
                    src={
                      info?.profilePhoto ? info.profilePhoto : '/svg/no-profile-picture.svg'
                    }></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-gray">Owner</p>
                  <HyperLink path={`/profile/${username}`}>{username}</HyperLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" product:flex hidden flex-col gap-3 pr-12 pt-24  ">
        {actions.map((obj) => (
          <div key={obj.icon} className="w-12 cursor-pointer hover:scale-90 h-12">
            <Image
              className="object-fill"
              width={48}
              height={48}
              alt={obj.icon}
              key={obj.icon}
              src={`/svg/${obj.icon}`}></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productPage;
