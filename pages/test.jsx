import React, { useEffect } from 'react';
import { UploadProvider } from '../context/UploadContext';
import BidEditor from '../components/BidEditor';
import Preview from '../components/Preview';
import deleteProduct from '../utils/deleteProduct';
const Test = () => {
  const click = async () => {
    await deleteProduct(6);
  };
  return (
    <div className="wrapper py-32">
      <button onClick={click}>xx</button>
    </div>
  );
};

export default Test;
