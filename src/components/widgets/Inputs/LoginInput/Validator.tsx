import CircleLoader from 'components/widgets/CircleLoader';
import React from 'react';
import Image from 'next/image';
type ValidatorProps = {
  isChecking?: boolean | null;
  isValidated?: boolean | null;
};
const Validator = ({ isChecking, isValidated }: ValidatorProps) => {
  if (isChecking) {
    return <CircleLoader></CircleLoader>;
  }
  if (isValidated === false) {
    return (
      <Image
        onClick={() => {
          console.log(isValidated);
        }}
        src="/svg/checkmark.svg"
        alt="could be used"
        height={15}
        width={15}
      />
    );
  } else if (isValidated === true) {
    return <p className="text-primary">is already used</p>;
  }
  return null;
};

export default Validator;
