import { useRouter } from 'next/router';
import React, { ReactNode, FC, useLayoutEffect, useState } from 'react';

interface GridProps {
  children: ReactNode[];
}

const Grid: FC<GridProps> = ({ children }) => {
  const [isProfilePage, setIsProfilePage] = useState(false);
  const router = useRouter();
  useLayoutEffect(() => {
    const route = router.asPath;
    if (route.includes('profile')) {
      setIsProfilePage(true);
    }
  }, []);
  return (
    <div className="flex justify-center">
      <div
        className={`grid grid-cols-1 place-items-center gap-8 xs:grid-cols-2 mob:grid-cols-3 ${
          isProfilePage ? 'tab:grid-cols-3' : 'tab:grid-cols-4'
        } mt-6`}>
        {children}
      </div>
    </div>
  );
};

export default Grid;
