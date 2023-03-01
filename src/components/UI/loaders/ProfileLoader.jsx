import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={770}
    viewBox="0 0 320 770"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="160" cy="141" r="101" />
    <rect x="84" y="280" rx="0" ry="0" width="164" height="47" />
    <rect x="25" y="350" rx="0" ry="0" width="276" height="70" />
    <rect x="102" y="489" rx="0" ry="0" width="111" height="32" />
    <rect x="46" y="712" rx="0" ry="0" width="220" height="20" />
    <rect x="102" y="445" rx="0" ry="0" width="111" height="32" />
  </ContentLoader>
);

export default MyLoader;
