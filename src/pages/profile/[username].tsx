import React, { useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import Button from 'components/UI/Button';
import { useAuth } from 'context/AuthContext';
import getProfile from 'lib/firebase/utils/getProfile';
import Bid from 'components/UI/Bid';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EditBidModal from 'components/modals/EditBidModal';
import RemoveBidModal from 'components/modals/RemoveBidModal';
import { NextPageContext } from 'next';
import Profile from 'types/models/Profile';
import Product from 'types/models/Product';
import BidsGrid from 'components/Discover/BidsGrid';
import useFetchProducts from 'hooks/useFetchProducts';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setUploader } from 'redux/slices/discoverSlice';
type ProfilePageProps = {
  isYourOwnAccount: boolean;
  anotherAccount: Profile;
};
export const getServerSideProps = async (context: NextPageContext) => {
  const { username } = context.query;

  const isYourOwnAccount = username === 'you';
  let anotherAccount;

  try {
    if (username) {
      anotherAccount = await getProfile(username as string);
    }
  } catch (error) {
    console.error(`Error getting profile for username ${username}: ${error}`);
    return {
      notFound: true,
    };
  }

  if (anotherAccount === 'nothing' && username !== 'you') {
    return {
      notFound: true,
    };
  }

  return {
    props: { isYourOwnAccount, anotherAccount },
  };
};

const Profile = ({ isYourOwnAccount, anotherAccount }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const { intitalFetch, queryProps } = useFetchProducts();
  const router = useRouter();
  const { currentUser, profile } = useAuth();
  const [info, setInfo] = useState<Profile>({} as Profile);
  useLayoutEffect(() => {
    setInfo(anotherAccount);
    dispatch(setUploader(anotherAccount.uid));
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      if (info?.uid) {
        intitalFetch({ ...queryProps });
      }
    };

    fetchProducts();
  }, [info]);
  return (
    <div className="wrapper  xs:items-start items-center first-letter:   xs:flex-row flex-col flex py-16">
      <div
        className="max-w-[256px] border  border-lightGray rounded-2xl
       shadow-xl items-center  py-8 px-9 xs:mr-10">
        <div className="flex flex-col gap-6 border-b-2 items-center border-lightGray">
          <Image
            className="rounded-full aspect-square"
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
              <p>{info.instagram || 'not specified'}</p>
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
                <Button onClick={() => {}} className="mb-4">
                  Edit profile
                </Button>
              </div>
            </Link>
          )}
        </div>
        <p onClick={() => console.log(info)} className="mt-4 text-gray text-small">
          Member since Mar 15, 2021
        </p>
      </div>
      <div className="flex justify-center">
        <BidsGrid></BidsGrid>
      </div>
      <EditBidModal></EditBidModal>
      <RemoveBidModal></RemoveBidModal>
    </div>
  );
};

export default Profile;
