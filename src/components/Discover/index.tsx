import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { useAuth } from 'context/AuthContext';
import Button from '../UI/Button';
import FilterBlock from './FilterBlock';
import { useDiscover } from 'context/DiscoverContext';
import BidsGrid from './BidsGrid';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { discoverSlice, toggleFilter } from 'redux/slices/discoverSlice';
import { fetchProducts } from 'redux/actionCreators/fetchProducts';
import { queryProps } from 'types/models/Query';
import CategoryPicker from './CategoryPicker';
const Discover = () => {
  const {} = discoverSlice.actions;
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const { chosenCategory } = useAppSelector((state) => state.discover);

  const { chosenCondition } = useAppSelector((state) => state.discover);

  const { loading, currentUser } = useAuth();

  const { chosenPriceSorter, isFilterShown, setIsFilterShown } = useDiscover();

  const queryProps: queryProps = {
    type: chosenCategory.type,
    category: chosenCategory.category,
    priceSorter: chosenPriceSorter.value,
    condition: chosenCondition.value,
  };
  useEffect(() => {
    dispatch(fetchProducts(queryProps));
  }, [chosenCategory, chosenPriceSorter, chosenCondition]);
  const handleFilter = () => {
    dispatch(toggleFilter());
  };
  return (
    <div className="wrapper py-12 flex flex-col justify-center ">
      <h1 className="text-giant pb-10  font-bold">Discover {}</h1>
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
