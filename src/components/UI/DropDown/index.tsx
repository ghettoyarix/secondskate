import React, { useState, useRef, useEffect, FC } from 'react';
import { Option, SortOption } from 'types/models/FilterOptions';
import { chosenLanguage } from 'helpers/parseTittle';
import getTitle from 'helpers/getTitle';
import useOutsideHandler from 'helpers/useOutsideHandler';
type DropDownOption = Option[] | SortOption[] | string[];
type DropDownProps = {
  options: any;
  chosenOption: Option | SortOption;
  pickOption: (option: Option | string | SortOption) => void;
  searchable?: boolean;
};
const DropDown: FC<DropDownProps> = ({ options, pickOption, chosenOption, searchable }) => {
  const [openFlag, setOpenFlag] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [searchedValue, setSearchedValue] = useState<Option | string>();

  const onOptionClick = (obj: Option) => {
    pickOption(obj);
    setSearchedValue(obj);
    setOpenFlag(false);
  };
  useOutsideHandler(wrapperRef, () => setOpenFlag(false));

  return (
    <div ref={wrapperRef} className="relative min-w-[160px] w-full h-full inline-block text-left">
      <div className="inline-flex  w-full justify-center">
        <button
          onClick={(e) => {
            if (e.target !== inputRef.current) {
              setOpenFlag(!openFlag);
            } else if (!openFlag) {
              setOpenFlag(true);
            }
          }}
          type="button"
          className="inline-flex w-full  h-12  justify-center rounded-xl outline-gray 
          outline-2 outline  bg-whie px-4 items-center  text-sm font-medium text-gray-700 shadow-sm 
          hover:bg-gray-50 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500     focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true">
          <input
            disabled={!searchable}
            ref={inputRef}
            defaultValue={
              typeof chosenOption?.title === 'string'
                ? chosenOption.title
                : chosenOption?.title?.[chosenLanguage]
            }
            value={getTitle(searchedValue, chosenLanguage) || searchedValue}
            onChange={(e) => {
              setSearchedValue(e.target.value);
              pickOption(e.target.value);
            }}
            className="max-w-[140px] focus:outline-none bg-white"
            type="text"
          />
          <div className="ml-auto h-5 min-w-[20px] border rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>

      {openFlag && (
        <div
          className="absolute right-0 z-10 max-h-[200px] overflow-auto	   w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button">
          <div className=" " role="none">
            {options
              .filter((obj: DropDownOption) =>
                searchable && searchedValue
                  ? obj.toString().toLowerCase().includes(searchedValue?.toString().toLowerCase())
                  : obj,
              )
              .map((obj: Option, i: number) => (
                <p
                  key={i}
                  onClick={() => onOptionClick(obj)}
                  className="w-full  text-center py-2   text-reg overflow-hidden text-black hover:bg-lightGray">
                  {getTitle(obj, chosenLanguage)}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
