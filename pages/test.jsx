import React, { useEffect } from 'react';
import { UploadProvider } from '../context/UploadContext';
import BidEditor from '../components/BidEditor';
import Preview from '../components/Preview';
import deleteProduct from '../utils/deleteProduct';
import CheckmarkLoader from 'components/widgets/CheckmarkLoader';
const Test = () => {
  const click = async () => {
    await deleteProduct(3);
  };
  return (
    <div className="wrapper py-32">
      <button onClick={click}>xx</button>
      <CheckmarkLoader></CheckmarkLoader>
    </div>
  );
};

export default Test;
