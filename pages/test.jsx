import React from 'react';
import checkEmail from '../utils/checkEmail';
import { getProfile } from '../utils/getProfile';
import ProfileLoader from '../components/UI/loaders/ProfileLoader';
const test = () => {
  const check = async () => {
    const x = await getProfile('fucker222');
    console.log(x);
  };
  return (
    <div className="wrapper">
      <button onClick={check}>x</button>
      <div className="border rounded-2 border-gray">
        <ProfileLoader></ProfileLoader>
      </div>
    </div>
  );
};

export default test;
