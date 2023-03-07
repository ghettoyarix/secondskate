import React, { ReactNode, FC } from 'react';

interface GridProps {
  children: ReactNode[];
}

const Grid: FC<GridProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 mob:grid-cols-3 tab:grid-cols-4 mt-6">
        {children}
      </div>
    </div>
  );
};

export default Grid;
