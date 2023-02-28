import React, { useEffect } from 'react';
import { UploadProvider } from '../context/UploadContext';
import BidEditor from '../components/BidEditor';
import Preview from '../components/Preview';
import deleteProduct from '../utils/deleteProduct';
import CheckmarkLoader from 'components/widgets/CheckmarkLoader';
import getDate from '../helpers/getDate';
import { updateDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
const Test = () => {
  const click = async () => {
    const docRef = doc(db, 'objects', 'some-id');

    // Update the timestamp field with the value from the server
    const updateTimestamp = await setDoc(docRef, {
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="wrapper py-32">
      <button onClick={click}>xx</button>
      <CheckmarkLoader></CheckmarkLoader>
    </div>
  );
};

export default Test;
