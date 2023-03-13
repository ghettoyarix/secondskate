import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={1}
    width={290}
    height={90}
    viewBox="0 0 290 90"
    backgroundColor="#e3dede"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="10" ry="10" width="290" height="90" />
  </ContentLoader>
);

export default MyLoader;
