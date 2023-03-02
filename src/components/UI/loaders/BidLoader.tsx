import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={256}
    height={413}
    viewBox="0 0 256 413"
    backgroundColor="#e6e5e5"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="-4" y="-16" rx="0" ry="0" width="371" height="486" />
  </ContentLoader>
);

export default MyLoader;
