import cn from 'classnames';
import React, { useState, useEffect } from 'react';
type ButtonProps = {
  onClick: () => void;
  primary?: boolean;
  title?: string;
  expansive?: boolean;
  className?: string;
  fontSize?: number;
  children: React.ReactNode;
  arrow?: boolean;
};
const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, primary, title, expansive, className, fontSize, children, arrow } = props;
  const [baseFontSize, setBaseFontSize] = useState('text-[14px]');

  const checkText = () => {
    fontSize && setBaseFontSize('text-[' + fontSize + 'px]');
  };

  useEffect(() => {
    checkText();
  });

  return (
    <button
      onClick={onClick}
      className={cn(
        'my-1 flex rounded-[90px] border-2 border-lightGray hover:border-primary items-center gap-2 justify-center  hover:drop-shadow-2xl text-14px    hover:outline-primary py-3 px-4 text-center font-bold self-center   ',
        {
          'bg-primary  border-primary hover:bg-white  hover:outline-black hover:text-black text-white ':
            primary,
        },
        { 'w-full': expansive },
        { className: className },
        { [baseFontSize]: true },
      )}>
      {title}
      {children}
      {arrow && (
        <svg
          className=""
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.39413 0.843309C6.66467 0.593571 7.08644 0.61044 7.33618 0.880985L9.49003 3.21429C9.72576 3.46967 9.72576 3.86329 9.49003 4.11867L7.33619 6.45203C7.08645 6.72257 6.66468 6.73945 6.39413 6.48971C6.12358 6.23998 6.10671 5.81821 6.35644 5.54766L7.47752 4.33315L1.00016 4.33315C0.631972 4.33315 0.333496 4.03467 0.333496 3.66648C0.333496 3.29829 0.631972 2.99982 1.00016 2.99982L7.47749 2.99982L6.35645 1.78536C6.10671 1.51482 6.12358 1.09305 6.39413 0.843309Z"
            fill="#23262F"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;