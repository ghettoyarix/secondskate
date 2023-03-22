import React, { FC, ReactNode } from 'react';
import { Title } from 'types/models/FilterOptions';
type DropDownBlockProps = {
  children: ReactNode;
  title: Title;
};
const DropDownBlock = ({ children, title }: DropDownBlockProps) => {
  return (
    <div className="max-w-[192px]">
      <p className="mb-3 ml-2 uppercase">{title as string}</p>
      {children}
    </div>
  );
};

export default DropDownBlock;
