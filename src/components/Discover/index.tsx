import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import DropDown from '../UI/DropDown/';
import Bid from '../UI/Bid';
import RangeSlider from '../UI/RangeSlider/';
import { useAuth } from 'context/AuthContext';
import Button from '../UI/Button';
import FilterBlock from './FilterBlock';
import NothingFound from './NothingFound';
import { useDiscover } from 'context/DiscoverContext';
import useUpdateEffect from 'hooks/useUpdateEffect';
import BidsGrid from './BidsGrid';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';

import { discoverSlice } from 'redux/slices/discoverSlice';
import { fetchProducts } from 'redux/actionCreators/fetchProducts';
const Discover = () => {
  const { } = discoverSlice.actions;
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  const { loading, currentUser } = useAuth();

  const {
    categories,
    chosenPriceSorter,
    chosenLikesSorter,
    discoverSorter,
    setDiscoverSorter,
    chosenCategory,
    setChosenCategory,
    discoverSortOptions,
    isFilterShown,
    setIsFilterShown,
  } = useDiscover();

  const queryProps = {
    type: chosenCategory.type,
    category: chosenCategory.category,
    priceSorter: chosenPriceSorter.value,
    chosenLikesSorter,
  };
  useEffect(() => {
    dispatch(fetchProducts(queryProps));
  }, [chosenCategory, chosenPriceSorter]);
  const handleFilter = () => {
    setIsFilterShown((prev) => !prev);
  };
  return (
    <div className="wrapper py-12 ">
      <h1 className="text-giant pb-10  font-bold">
        Discover { }
      </h1>
      <div className="flex items-center  justify-between border-b-2 pb-8 border-lightGray">
        <div className="flex gap-3 content-center  items-center">
          {categories.map((obj) => (
            <p
              key={obj.title}
              onClick={() => setChosenCategory(obj)}
              className={cn(
                '  rounded-2xl cursor-pointer  py-[6px] px-3  my-auto   font-bold text-reg ',
                {
                  'bg-black text-white': obj.title === chosenCategory.title,
                },
              )}>
              {obj.title}
            </p>
          ))}
          <br />
        </div>
        <div className="max-w-[180px]">
          <DropDown
            chosenOption={discoverSorter}
            options={discoverSortOptions}
            pickOption={(obj) => setDiscoverSorter(obj)}></DropDown>
        </div>

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
