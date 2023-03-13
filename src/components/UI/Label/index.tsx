import React, { ReactNode, ReactElement } from 'react';
import cn from 'classnames';

type LabelProps = {
  children: ReactNode;
  secondary?: boolean;
};

const Label = ({ children, secondary }: LabelProps): ReactElement => {
  return (
    <p
      className={cn(
        'text-lable my-auto align-middle bg-white content-center whitespace-nowrap	 font-bold  outline outline-2 p-[2px] px-1 rounded-[4px] ',
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
