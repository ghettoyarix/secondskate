import React from 'react';
import checkEmail from '../utils/checkEmail';
const test = () => {
  const check = async () => {
    const x = await checkEmail('kappa322@test.test');
    console.log(x);
  };
  return (
    <div className="wrapper">
      <button onClick={check}>x</button>
    </div>
  );
};

export default test;
