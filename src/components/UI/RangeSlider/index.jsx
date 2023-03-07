import React from 'react';

const PriceRangeInput = ({ min, max }) => {
  return (
    <div className="flex justify-center    items-center space-x-4">
      <div className=" flex flex-col h-full justify-between ">
        <label className="text-gray-600 mb-3 uppercase ">Min Price:</label>
        <input
          placeholder={min}
          className="  border-gray-300 border-2 h-12  w-20 rounded-md py-2 px-4"
          type="number"
          min={min}
        />
      </div>
      <div className=" flex flex-col h-full justify-between ">
        <label className="text-gray-600 mb-3  uppercase">Max Price:</label>
        <input
          placeholder={max}
          className="  border-2 border-gray-300 h-12  w-20 rounded-md py-2 px-4"
          type="number"
          min={max}
        />
      </div>
    </div>
  );
};

export default PriceRangeInput;
