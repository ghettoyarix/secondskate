import React, { useEffect, FC } from 'react';

import CheckmarkLoader from 'components/widgets/CheckmarkLoader';
import LoginInput from 'components/widgets/Inputs/LoginInput';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';

type TestProps = { children: JSX.Element | JSX.Element[] };
const Test = (props: TestProps) => {
  const dispatch = useAppDispatch();
  const click = async () => {};
  useEffect(() => {
    console.log('x');
  }, []);

  return (
    <div className="flex wrapper items-center justify-center">
      <button onClick={click}>x</button>
      <LoginInput name="username" value></LoginInput>
    </div>
  );
};

export default Test;
