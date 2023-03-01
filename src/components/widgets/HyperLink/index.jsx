import React from 'react';
import Link from 'next/link';
const HyperLink = ({ children, path }) => {
  return (
    <Link href={path}>
      <p className="hover:underline cursor-pointer hover:text-primary">{children}</p>
    </Link>
  );
};

export default HyperLink;
