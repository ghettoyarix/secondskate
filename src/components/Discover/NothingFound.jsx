import React, { useEffect } from 'react';

const NothingFound = ({ x }) => {
  useEffect(() => {
    console.log(x);
  }, []);
  return (
    <div className="h-[417px] mx-auto max-w-[50%] text-center items-center text-big">
      Unfortunately, there is nothing found with such properties
    </div>
  );
};

export default NothingFound;
