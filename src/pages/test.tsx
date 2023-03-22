import React, { useEffect, FC } from 'react';

import CheckmarkLoader from 'components/widgets/CheckmarkLoader';

import { useAppDispatch } from 'hooks/redux';
import { fetchProducts } from 'redux/actionCreators/products';
import { useAppSelector } from 'hooks/redux';
import { log } from 'console';
import DropDownBlock from 'components/Discover/DropDownBlock';
import DropDown from 'components/UI/DropDown';
import { setChosenSorter } from 'redux/slices/discoverSlice';
import { Option, SortOption } from 'types/models/FilterOptions';
import { SORT_OPTIONS } from '../constants/index';
type TestProps = { children: JSX.Element | JSX.Element[] };
const Test = (props: TestProps) => {
  const { chosenSorter } = useAppSelector((state) => state.discover);
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
  useEffect(() => {
    console.log('x');
  }, [chosenSorter]);
  return (
    <div className="flex">
      <DropDownBlock title="sort by :">
        <DropDown
          chosenOption={chosenSorter}
          options={SORT_OPTIONS}
          pickOption={(obj) => dispatch(setChosenSorter(obj as SortOption))}></DropDown>
      </DropDownBlock>
    </div>
  );
};

export default Test;
