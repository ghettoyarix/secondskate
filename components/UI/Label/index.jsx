import React from 'react';
import cn from 'classnames';

const Label = ({ children, secondary }) => {
  return (
    <p
      className={cn(
        'text-lable my-auto align-middle content-center font-bold  outline outline-2 p-[2px] px-1 rounded-[4px] ',
        {
          'outline-gray text-gray': secondary,
        },
        { 'outline-green text-green': !secondary },
      )}>
      <span>{children}</span>
    </p>
  );
};

export default Label;
