import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import { useAuth } from '../../context/AuthContext';
import { getProfile } from '../../utils/getProfile';
import { createAccount } from '../../utils/createAccount';
import Bid from '../../components/UI/Bid';
import { useState } from 'react';
import Link from 'next/link';

const index = () => {
  const { currentUser, setUsername, profile } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `http://${process.env.NEXT_PUBLIC_API_URL}/api/getProducts/?limit=10&owner=${currentUser?.uid}&condition=New`,
      );
      const json = await res.json();
      setProducts(json);
    };
    if (currentUser) {
      fetchProducts();
    }
  }, [currentUser]);

  return (
    <div className="wrapper flex   py-16">
      <div
        className="max-w-[256px] border  border-lightGray rounded-2xl
       shadow-xl items-center  py-8 px-9 mr-10">
        <div className="flex flex-col gap-6 border-b-2 items-center border-lightGray">
          <Image className="rounded-full" width={160} height={160} src="/profile.png"></Image>
          <p className="text-mid font-semibold">@{profile?.username}</p>
          <p className="text-small text-gray">
            A wholesome farm owner in Montana. Upcoming gallery solo show in
          </p>
          <div className="flex gap-2">
            <Image
              className="rounded-full"
              alt="insta"
              width={20}
              height={20}
              src="/svg/insta.svg"></Image>
            <p>{profile?.instagram || 'not specified'}</p>
          </div>
          <div className="flex gap-2">
            <Image
              className="rounded-full"
              alt="tg"
              width={20}
              height={20}
              src="/svg/telegram.svg"></Image>
            <p>{profile?.telegram || 'not specified'}</p>
          </div>

          <Link href="/profile/edit">
            <div>
              <Button className="mb-4">Edit profile</Button>
            </div>
          </Link>
          <button
            onClick={() => {
              setUsername('sukaccc');
            }}>
            check
          </button>
        </div>
        <p className="mt-4 text-gray text-small">Member since Mar 15, 2021</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products?.map((obj) => (
          <Bid key={obj._id} {...obj}></Bid>
        ))}
        {products?.map((obj) => (
          <Bid key={obj._id} {...obj}></Bid>
        ))}
      </div>
    </div>
  );
};

export default index;
