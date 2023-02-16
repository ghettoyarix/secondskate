import React, { useEffect } from 'react';
import { UploadProvider } from '../../context/UploadContext';
import BidEditor from '../../components/BidEditor';
import Preview from '../../components/Preview';

const UploadPage = () => {
  return (
    <div className="wrapper py-32">
      <UploadProvider>
        <div className="flex justify-between">
          <BidEditor></BidEditor>
          <Preview></Preview>
        </div>
      </UploadProvider>
    </div>
  );
};

export default UploadPage;
