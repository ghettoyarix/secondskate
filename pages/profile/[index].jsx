import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import { useAuth } from '../../context/AuthContext';
import { getProfile } from '../../utils/getProfile';
import { createAccount } from '../../utils/createAccount';
import Bid from '../../components/UI/Bid';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EditBidModal from '../../components/modals/EditBidModal';
import RemoveBidModal from '../../components/modals/RemoveBidModal';
export const getServerSideProps = async (context) => {
  const { index } = context.query;

  const isYourOwnAccount = index === 'you';

  const anotherAccount = await getProfile(index);
  console.log(anotherAccount);

  if (anotherAccount === 'nothing' && index !== 'you') {
    return {
      notFound: true,
    };
  }
  return {
    props: { isYourOwnAccount, anotherAccount }, // will be passed to the page component as props
  };
};

const Profile = ({ check, isYourOwnAccount, anotherAccount }) => {
  const router = useRouter();
  const { index } = router.query;
  const { currentUser, profile } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (isYourOwnAccount) {
        setInfo(profile);
      } else {
        setInfo(anotherAccount);
      }
      if (info) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts?uploadedBy=${info?.uid}`,
        );
        const json = await res.json();
        setProducts(json);
      }
    };

    fetchProducts();
    setLoading(false);
  }, [anotherAccount, currentUser, isYourOwnAccount, profile, info]);
  return (
    <div className="wrapper  xs:items-start items-center first-letter:   xs:flex-row flex-col flex py-16">
      <div
        className="max-w-[256px] border  border-lightGray rounded-2xl
       shadow-xl items-center  py-8 px-9 xs:mr-10">
        <div className="flex flex-col gap-6 border-b-2 items-center border-lightGray">
          <Image
            className="rounded-full"
            width={160}
            height={160}
            alt="profilePic"
            src={info?.profilePhoto || '/svg/no-photo.svg'}></Image>
          <p className="text-mid font-semibold">@{info?.username}</p>
          <p className="text-small text-gray">
            {'loading loadinglo adingloadingloadingloadingloading loadingloading loadingloading'}
          </p>
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex gap-2">
              <Image
                className="rounded-full"
                alt="insta"
                width={20}
                height={20}
                src="/svg/insta.svg"></Image>
              <p>{info?.instagram || 'not specified'}</p>
            </div>
            <div className="flex gap-2">
              <Image
                className="rounded-full"
                alt="tg"
                width={20}
                height={20}
                src="/svg/telegram.svg"></Image>
              <p>{info?.telegram || 'not specified'}</p>
            </div>
          </div>

          {isYourOwnAccount && (
            <Link href="/profile/edit">
              <div>
                <Button className="mb-4">Edit profile</Button>
              </div>
            </Link>
          )}
          <button
            onClick={() => {
              handleOpen();
            }}>
            check
          </button>
        </div>
        <p onClick={() => console.log(info)} className="mt-4 text-gray text-small">
          Member since Mar 15, 2021
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid items-center  grid-cols-1 mob:mr-12  w-full mob:grid-cols-3 gap-4">
          {products?.map((obj) => (
            <Bid editable={isYourOwnAccount} obj={obj} still key={obj._id} {...obj}></Bid>
          ))}
        </div>
      </div>
      <EditBidModal></EditBidModal>
      <RemoveBidModal></RemoveBidModal>
    </div>
  );
};

export default Profile;
