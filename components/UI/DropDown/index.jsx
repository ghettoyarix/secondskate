import React, { useState, useRef, useEffect } from 'react';

const d2 = ({ options, pickOption, chosenOption, searchable }) => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenFlag(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  const [openFlag, setOpenFlag] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [searchedValue, setSearchedValue] = useState();

  const onOptionClick = (obj) => {
    pickOption(obj);
    setSearchedValue(obj);
    setOpenFlag(false);
  };
  useOutsideAlerter(wrapperRef);

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
            defaultValue={chosenOption}
            value={searchedValue}
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
          aria-labelledby="menu-button"
          tabindex="-1">
          <div className=" " role="none">
            {options
              .filter((obj) =>
                searchable && searchedValue
                  ? obj.toLowerCase().includes(searchedValue?.toLowerCase())
                  : obj,
              )
              .map((obj) => (
                <p
                  onClick={() => onOptionClick(obj)}
                  className="w-full  text-center py-2   text-reg overflow-hidden text-black hover:bg-lightGray">
                  {obj}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
d2.defaultProps = {
  options: ['Today2', 'Last week', 'Last month', 'Last year'],
};
export default d2;
