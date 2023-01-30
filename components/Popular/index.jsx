import React, { useState } from 'react';
import Sellers from './Sellers';
import DropDown from '../UI/DropDown/d2';
const Popular = () => {
  return (
    <div className="    bg-backGray py-28">
      <div className="wrapper">
        <div className="flex items-center  justify-between">
          <div>
            <p className="text-gray text-mid">Popular</p>
            <div className="flex cursor-pointer items-center gap-2">
              <p className="text-hero font-bold">Sellers</p>
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0118 1.32149C14.361 0.670614 13.3057 0.670614 12.6548 1.32149L8 5.97631L3.34518 1.32149C2.6943 0.670614 1.63903 0.670614 0.988157 1.32149C0.337282 1.97236 0.337282 3.02764 0.988157 3.67851L6.82149 9.51184C7.47236 10.1627 8.52764 10.1627 9.17851 9.51184L15.0118 3.67851C15.6627 3.02764 15.6627 1.97236 15.0118 1.32149Z"
                  fill="#23262F"
                />
              </svg>
            </div>
          </div>

          <div className="  relative w-fit">
            <DropDown></DropDown>
          </div>
        </div>
        <Sellers />
      </div>
    </div>
  );
};

export default Popular;
