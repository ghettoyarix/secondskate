import React, { useEffect, FC } from 'react';

import CheckmarkLoader from 'components/widgets/CheckmarkLoader';

import { useAppDispatch } from 'hooks/redux';
import { fetchProducts } from 'redux/actionCreators/products';
import { useAppSelector } from 'hooks/redux';
import { log } from 'console';

type TestProps = { children: JSX.Element | JSX.Element[] };
const Test = (props: TestProps) => {
  const { products, isLoading, error } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const click = async () => {
    try {
      let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploadProduct`, {
        method: 'POST',
        body: JSON.stringify({ x: 22 }),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
      console.log('posted');
    } catch (errorMessage) {
      console.log(errorMessage);
    }
  };

  return (
    <div className="wrapper py-32">
      <button onClick={click}>xx</button>
      len : {products?.[0]?.title}
      <br />
      {isLoading ? 'load' : 'no'}
      <br />
      err : {error}
    </div>
  );
};

export default Test;
