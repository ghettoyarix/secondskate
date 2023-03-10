import React, { useEffect, useCallback } from 'react';
import Button from '../UI/Button';
import FilterBlock from './FilterBlock';
import BidsGrid from './BidsGrid';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { toggleFilter } from 'redux/slices/discoverSlice';
import CategoryPicker from './CategoryPicker';
import { useRouter } from 'next/router';
import useFetchProducts from 'hooks/useFetchProducts';
import { useClearProducts } from 'hooks/useClearProducts';
const Discover = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isFilterShown } = useAppSelector((state) => state.discover);
  const updatedPage = useAppSelector((state) => state.products.page);

  const { fetch, queryProps } = useClearProducts();
  useCallback(() => {
    fetch();
    console.log('Gec');
  }, [queryProps]);

  console.log('renders');
  const handleFilter = () => {
    dispatch(toggleFilter());
  };
  return (
    <div className="wrapper py-12 flex flex-col justify-center ">
      <h1 className="text-giant pb-10  font-bold">Discover</h1>
      <div className="flex items-center  justify-between border-b-2 pb-8 border-lightGray">
        <CategoryPicker></CategoryPicker>
        <div className="max-w-[180px]"></div>

        <Button onClick={handleFilter} primary className="text-mid  w-20">
          Filter {isFilterShown && <span className="font-thin">X</span>}
        </Button>
      </div>
      <FilterBlock></FilterBlock>
      <BidsGrid />
    </div>
  );
};

export default Discover;
