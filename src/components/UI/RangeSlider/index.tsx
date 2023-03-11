import React from 'react';
import { debounce } from 'lodash';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { setMaxPrice, setMinPrice } from 'redux/slices/rangeSlice';
const PriceRangeInput = () => {
  const { maxPrice, minPrice } = useAppSelector((state) => state.range);
  const dispatch = useAppDispatch();
  const setMin = React.useCallback(
    debounce((min) => {
      dispatch(setMinPrice(min));
    }, 1000),
    [],
  );
  const setMax = React.useCallback(
    debounce((max) => {
      dispatch(setMaxPrice(max));
    }, 1000),
    [],
  );
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="flex flex-col h-full justify-between">
        <label className="text-gray-600 mb-3 uppercase">Min Price:</label>
        <input
          onChange={(e) => setMin(e.target.value)}
          placeholder={'0'}
          className="inline-flex w-full  h-12  justify-center rounded-xl outline-gray 
          outline-2 outline  bg-whie px-4 items-center  text-sm font-medium text-indigo-500 shadow-sm 
          hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          type="number"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <label className="text-gray-600 mb-3 uppercase">Max Price:</label>
        <input
          onChange={(e) => setMax(e.target.value)}
          placeholder={'99999'}
          className="inline-flex w-full  h-12  justify-center rounded-xl outline-gray 
          outline-2 outline  bg-whie px-4 items-center  text-sm font-medium text-indigo-500  shadow-sm 
          hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500     focus:ring-offset-2 focus:ring-offset-gray-100"
          type="number"
        />
      </div>
    </div>
  );
};

export default PriceRangeInput;
