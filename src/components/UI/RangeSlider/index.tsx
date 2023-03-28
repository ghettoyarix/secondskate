import React from 'react';
import { debounce } from 'lodash';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { setPriceRange } from 'redux/slices/discoverSlice';
const PriceRangeInput = () => {
  const { priceRange } = useAppSelector((state) => state.discover);
  const dispatch = useAppDispatch();
  const setPriceRangeHandler = React.useCallback(
    debounce((priceRange) => {
      dispatch(setPriceRange(priceRange));
    }, 1000),
    [],
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const priceRangeUnit = { [e.target.name]: e.target.value };
    console.log(priceRangeUnit);
    setPriceRangeHandler({ ...priceRange, ...priceRangeUnit });
  };
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="flex flex-col h-full justify-between">
        <label className="text-gray-600 mb-3 uppercase">Min Price:</label>
        <input
          name="min"
          onChange={handleChange}
          placeholder={'0'}
          className="inline-flex w-full  h-12  justify-center rounded-xl outline-gray 
          outline-2 outline  bg-whie px-4 items-center  text-sm font-medium text-indigo-500 shadow-sm 
          hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        />
      </div>
      <div className="flex flex-col h-full justify-between">
        <label className="text-gray-600 mb-3 uppercase">Max Price:</label>
        <input
          name="max"
          onChange={handleChange}
          placeholder={'99999'}
          className="inline-flex w-full  h-12  justify-center rounded-xl outline-gray 
          outline-2 outline  bg-whie px-4 items-center  text-sm font-medium text-indigo-500  shadow-sm 
          hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500     focus:ring-offset-2 focus:ring-offset-gray-100"
        />
      </div>
    </div>
  );
};

export default PriceRangeInput;
