import React, { useEffect, useState } from 'react';
import { UploadProvider, useUpload } from '../context/UploadContext';
import BidEditor from '../components/BidEditor';
import Inner from '../components/inner';
import Preview from '../components/Preview';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Test = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  useEffect(() => {
    setsecond((prev) => prev + 2);
  }, [first]);

  const check = async () => {
    setfirst((prev) => prev + 2);
  };
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

export default Test;
