import React, { useRef, useState, useEffect } from 'react';
import SearchWindow from './SearchWindow';
import { useHeader } from 'context/HeaderContext';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { setSearchedValue, setOpenFlag, forceLoading } from 'redux/slices/headerSlice';
import { debounce } from 'lodash';
import { clearProducts } from 'redux/slices/productsSlice';
const SearchBar = () => {
  const [innerSearchValue, setInnerSearchValue] = useState('');
  const { searchedValue } = useAppSelector((state) => state.header);
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const changeSearchedValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchedValue(value));
    }, 500),
    [],
  );
  const handleChange = () => {
    if (searchRef.current) {
      const value = searchRef.current.value.trim();
      setInnerSearchValue(value);
      changeSearchedValue(value);
      dispatch(setOpenFlag(true));
    } else {
      dispatch(setOpenFlag(false));
      dispatch(clearProducts());
    }
  };

  return (
    <div
      className=" flex items-center justify-between z-20 px-2 font-[400] text-[12px] outline
    outline-lightGray outilne-1 outkub rounded-sm h-10 w-[256px] ">
      <input
        ref={searchRef}
        onChange={handleChange}
        className="w-full focus:outline-none"
        type="text"
        placeholder="Search"></input>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.4212 12.6002C10.2923 13.4778 8.87376 14.0003 7.33317 14.0003C3.65127
           14.0003 0.666504 11.0156 0.666504 7.33366C0.666504 3.65176 3.65127 0.666992 
           7.33317 0.666992C11.0151 0.666992 13.9998 3.65176 13.9998 7.33366C13.9998 
           8.87425 13.4773 10.2928 12.5997 11.4217L17.0891 15.9111C17.4145 16.2365 17.4145 
           16.7641 17.0891 17.0896C16.7637 17.415 16.236 17.415 15.9106 17.0896L11.4212 12.6002ZM12.3332 
           7.33366C12.3332 10.0951 10.0946 12.3337 7.33317 12.3337C4.57175 12.3337 2.33317 10.0951 2.33317
            7.33366C2.33317 4.57224 4.57175 2.33366 7.33317 2.33366C10.0946 2.33366 12.3332 4.57224 12.3332
             7.33366Z"
          fill="#777E91"
        />
      </svg>
      <SearchWindow searched={innerSearchValue}></SearchWindow>
    </div>
  );
};

export default SearchBar;
