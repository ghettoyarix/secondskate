/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Label from 'components/UI/Label';
import cn from 'classnames';
import Button from 'components/UI/Button';
import HyperLink from 'components/widgets/HyperLink';
import { parseBidTitle } from 'utils/parseTittle';
import { useRouter } from 'next/router';
export async function getServerSideProps(context) {
  const { productId } = context.query;
  const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/api/getProducts/${productId}`);
  const product = await res.json();
  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product } };
}
const productPage = ({ product }) => {
  const { price, description, condition, title, fileNames, size, brand, photoURLs, username } =
    product;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const shareItem = () => {};
  const addToFav = () => {};
  const exit = () => {};

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
          <Image className=" rounded-xl object-cover" fill alt="1" src={photoURLs[0]}></Image>
        </div>
        <div className="w-[375px]  items-stretch h-fit	tab:h-full flex flex-col justify-between  ">
          <div>
            <p className=" text-[40px] text-center mb-6  font-bold">{title}</p>
            <div className="flex  justify-between mx-3 mb-12">
              <Label big>{price} UAH</Label>

              <p className="text-lable text-gray font-bold">{parseBidTitle(condition)}</p>
            </div>
            <div className="flex  justify-between mx-3 mb-12">
              <div className="flex gap-2">
                <p className="text-mid text-gray">Size:</p>
                <Label secondary big>
                  {size}
                </Label>
              </div>

              <p className="text-lable text-gray font-bold">{brand}</p>
            </div>
            <p className="text-gray">{description}</p>
            <div className=" flex gap-3 justify-center p-1 rounded-full border-lightGray border-2 my-8">
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
              <div className="flex gap-4 border-b-2  border-lightGray py-4">
                <div className=" relative">
                  <Image
                    className="rounded-full"
                    height={50}
                    width={50}
                    alt="creator"
                    src="/creator.png"></Image>
                  <Image
                    className="absolute left-[30px] top-[30px]"
                    height={24}
                    width={24}
                    alt={'/svg/creator.svg'}
                    src="/svg/creator.svg"></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-gray">Owner</p>
                  <HyperLink path={`/profile/${username}`}>{username}</HyperLink>
                </div>
              </div>
              <div className="flex gap-4 border-b-2    border-lightGray py-4">
                <div className=" relative">
                  <Image
                    className="rounded-full"
                    height={50}
                    width={50}
                    alt="profile"
                    src={'/profile.png'}></Image>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-gray">Creator</p>
                  <p className="font-[500]">Selina Mayert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 mt-8   border-2 rounded-xl   shadow-2xl  border-lightGray">
            <div className="flex gap-4 mb-8">
              <Image
                className="object-contain rounded-full"
                height={50}
                width={50}
                alt="profile"
                src="/profile.png"></Image>

              <div>
                <p className="text-gray">
                  Highest bid by <span className="text-black">Kohaku Tora</span>
                </p>
                <div className="flex gap-3 text-mid font-bold">
                  <p>1.46 ETH</p>
                  <p className="text-gray">$2,764.89</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mb-8">
              <Button expansive primary>
                Purchase now
              </Button>
              <Button expansive>Place a bid</Button>
            </div>
            <p className="text-reg text-gray">
              Service fee <span className="text-black">1.5%</span> 2.563 ETH $4,540.62
            </p>
          </div>
        </div>
      </div>
      <div className=" product:flex hidden flex-col gap-3 pr-12 pt-24  ">
        {actions.map((obj) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-12 cursor-pointer hover:scale-90 h-12">
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
