import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
const Footer = () => {
  const menu = [
    [
      { title: 'Crypter.' },
      { title: 'Disover', href: 'discover' },
      { title: 'Connect Wallet', href: 'discover' },
      { title: 'Create item', href: 'createItem' },
    ],
    [
      { title: 'Info ' },
      { title: 'Download', href: 'download' },
      { title: 'Demos', href: 'demos' },
      { title: 'Support', href: 'support' },
    ],
  ];
  return (
    <div className="border-t-2 border-lightGray">
      <div className="wrapper mt-20 mb-12 items-center gap-6  flex-col mob:flex-row flex justify-between">
        <div className="flex flex-col  justify-center">
          <div className="flex justify-start mob:justify-center gap-2 mb-8">
            <Image alt="logo" src="/logo.png" height={32} width={32}></Image>
            <p className="text-mid font-bold">crypter</p>
          </div>
          <p className="text-mid">
            The New Creative <br /> Economy.
          </p>
        </div>
        {menu.map((obj, i) => (
          <div key={i} className="flex items-start text-reg text-left  flex-col gap-6">
            {obj.map((obj) => (
              <p
                key={obj.title}
                className={cn('cursor-pointer ', {
                  ' text-lable font-[500] cursor-default': !obj.href,
                })}>
                {obj.title}
              </p>
            ))}
          </div>
        ))}
        <div className="w-[352px] flex flex-col justify-between">
          <p className="font-[500]">Join Newsletter</p>
          <p className="text-reg">
            Subscribe our newsletter to get more free design course and resource
          </p>
          <div className="flex justify-between border rounded-full border-lightGray h-12 items-center px-3">
            <input placeholder="Enter your email" className=" text-reg w-full focus:outline-none" />
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="16" fill="#3772FF" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0909 11.2652C18.4968 10.8906 19.1294 10.9159 19.504 11.3217L22.7348 14.8217C23.0884 15.2047 23.0884 15.7952 22.7348 16.1782L19.504 19.6783C19.1294 20.0841 18.4968 20.1094 18.091 19.7348C17.6851 19.3602 17.6598 18.7276 18.0344 18.3217L19.716 16.5L10 16.5C9.44771 16.5 9 16.0523 9 15.5C9 14.9477 9.44771 14.5 10 14.5L19.716 14.5L18.0344 12.6783C17.6598 12.2725 17.6851 11.6398 18.0909 11.2652Z"
                fill="#FCFCFD"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
