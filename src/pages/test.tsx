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
  const click = async () => {};

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
