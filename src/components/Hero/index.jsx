import React from 'react';
import Button from '../UI/Button';
const Hero = () => {
  return (
    <div className="wrapper min-h-[268px] flex flex-col justify-end items-center mb-10">
      <p className="text-gray uppercase font-bold text-[12px]  ">
        Create, explore, & collect digital art NFTs.
      </p>
      <p className="text-hero  font-bold mb-6 text-center "> The new creative economy.</p>
      <Button title="Start your search"></Button>{' '}
    </div>
  );
};

export default Hero;
