import React from 'react';
import Image from 'next/image';
const NavArrows = ({ leftArrowClick, rightArrowClick }) => {
  return (
    <div className="flex  max-h-[40px]  gap-4">
      <div
        onClick={leftArrowClick}
        className=" px-3 py-4 rounded-full cursor-pointer hover:outline-2 hover:outline  outline-lightGray">
        <Image className="  " width={14} height={9} src="/svg/leftArrow.svg"></Image>
      </div>
      <div
        onClick={rightArrowClick}
        className=" px-3 py-4  rounded-full cursor-pointer hover:outline-2 hover:outline  outline-lightGray">
        <Image className="  " width={14} height={9} src="/svg/rightArrow.svg"></Image>
      </div>
    </div>
  );
};

export default NavArrows;
