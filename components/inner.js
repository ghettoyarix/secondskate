import React from 'react';
import { useUpload } from '../context/UploadContext';
const Inner = () => {
  const { test, change } = useUpload();
  return (
    <div>
      Inner{test} <button onClick={change}>312312</button>{' '}
    </div>
  );
};

export default Inner;
