import React from 'react';

const ToggleBlock = ({ title, description, isToggleg, onToggle }) => {
  return (
    <div className="w-full flex justify-between">
      <div>
        <p className=" text-lable font-bold mb-1">{title}</p>
        <p className=" text-lable  text-gray">{description}</p>
      </div>
      <div className="py-3">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            onChange={onToggle}
            type="checkbox"
            checked={isToggleg}
            value=""
            className="sr-only peer"
          />
          <div
            className="w-11 h-6 bg-lightGray  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>
    </div>
  );
};
ToggleBlock.defaultProps = {
  isToggleg: false,
};
export default ToggleBlock;
