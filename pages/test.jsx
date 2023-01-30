import React from 'react';
import addURL from '../utils/addURL';
const test = () => {
  return (
    <div className="wrapper">
      <button onClick={() => addURL('okxz', 6)}>x</button>
      {process.env.NEXT_PUBLIC_FIREBASE_API_KEY}
    </div>
  );
};

export default test;
