import React from 'react';
import Image from 'next/image';
const index = () => {
  return (
    <>
      {true ? (
        <Image alt="heartOff" className="m-auto" height={33} width={29} src="/heartOff.svg"></Image>
      ) : (
        <Image alt="heartOn" className="m-auto" height={33} width={29} src="/heartOn.svg"></Image>
      )}
    </>
  );
};

export default index;
