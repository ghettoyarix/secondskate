import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../../components/UI/Button';
import InputBlock from '../../components/UI/InputBlock';
import { updateProfile } from '../../utils/updateProfile';
import { useAuth } from '../../context/AuthContext';
const update = ({}) => {
  const { profile } = useAuth();

  const usernameRef = useRef();
  const titleRef = useRef();
  const instaRef = useRef();
  const telegramRef = useRef();

  const accountInfoInputs = [
    {
      title: 'Username',
      placeholder: 'The name ',
      ref: usernameRef,
      defaultValue: profile?.username,
    },
    {
      title: 'Accout title',
      placeholder: 'e.g. OG shop',
      ref: titleRef,
      defaultValue: profile?.title,
    },
  ];
  const socialsInfoInputs = [
    {
      title: 'Instagram',
      placeholder: 'Your instagram',
      ref: instaRef,
      defaultValue: profile?.instagram,
    },
    {
      title: 'Telegram',
      placeholder: 'Your telegram',
      ref: telegramRef,
      defaultValue: profile?.telegram,
    },
  ];
  const callUpdate = () => {
    const data = {
      username: usernameRef.current.value,
      instagram: instaRef.current.value,
      telegram: telegramRef.current.value,
      title: titleRef.current.value,
    };
    updateProfile(data);
  };

  return (
    <div className="wrapper flex flex-col gap-[76px]">
      <div className="">
        <button onClick={() => updateProfile(data)}>cec</button>
        <h1 className="text-giant font-bold">Edit profile</h1>
        <p className="text-reg max-w-[376px] text-gray">
          You can set preferred display name, create your profile URL and manage other personal
          settings.
        </p>
      </div>
      <div className="flex gap-12">
        <Image height={128} width={128} className="rounded-full" src="/profile.png"></Image>
        <div className="text-lable max-w-[256px] flex flex-col justify-between  ">
          <p>Profile photo</p>
          <p className="text-gray  text-small">
            We recommend an image of at least 400x400. Gifs work too 🙌
          </p>
          <div onClick={() => alert(profile)}>
            <Button>Upload</Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b-2 pb-8 border-lightGray mb-8">
        <div className="max-w-[412px]">
          <p className="mb-4">Account info</p>
          <div className="flex flex-col gap-4">
            {accountInfoInputs.map((obj) => (
              <InputBlock
                defaultValue={obj.defaultValue}
                placeholder={obj.placeholder}
                forwardedRef={obj.ref}
                title={obj.title}></InputBlock>
            ))}
            <p className=" text-small z text-gray uppercase font-bold ">Bio</p>
            <textarea
              defaultValue={profile?.bio}
              onResize={null}
              placeholder="Write something about yourself in 100 characters."
              className="input-profile resize-none"
              maxlength="100 "
              cols="30"
              rows="4"></textarea>
          </div>
        </div>

        <div>
          <p className="mb-4">Social</p>
          <div className="flex flex-col gap-4">
            {socialsInfoInputs.map((obj) => (
              <InputBlock
                defaultValue={obj.defaultValue}
                placeholder={obj.placeholder}
                forwardedRef={obj.ref}
                title={obj.title}></InputBlock>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[-70px] flex gap-4">
        <Button onClick={callUpdate} primary>
          Update Profile
        </Button>
        <Button>Clear all</Button>
      </div>
    </div>
  );
};

export default update;
