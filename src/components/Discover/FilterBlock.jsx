import React from 'react';
import DropDown from 'components/UI/DropDown';
import RangeSlider from 'components/UI/RangeSlider';
import { CONDITIONS, priceSortOptions } from 'constants/index';
import { useDiscover } from 'context/DiscoverContext';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { setChosenCondition, setChosenPriceSorter } from 'redux/slices/discoverSlice';
const FilterBlock = () => {
  const {
    chosenDateOption,
    chosenCondition,
    chosenPriceSorter,
    discoverConditions,
    isFilterShown,
  } = useAppSelector((state) => state.discover);

  const dispatch = useAppDispatch();
  const {
    setChosenPricSorter,

    chosenCreatorSorter,

    creatorSortOptions,
  } = useDiscover();

  return isFilterShown ? (
    <div
      className="grid grid-cols-1 xs:grid-cols-2 place-items-center gap-y-4 tab:grid-cols-4 
    my-8 transition-all  h-fit x text-[12px] text-gray font-bold">
      <div className="max-w-[192px]">
        <p className="mb-3">PRICE</p>
        <DropDown
          chosenOption={chosenPriceSorter}
          options={priceSortOptions}
          pickOption={(obj) => dispatch(setChosenPriceSorter(obj))}></DropDown>
      </div>
      <div className="max-w-[192px]">
        <p className="mb-3">CONDITION</p>
        <DropDown
          chosenOption={chosenCondition}
          options={discoverConditions}
          pickOption={(obj) => dispatch(setChosenCondition(obj))}></DropDown>
      </div>
      <div className="max-w-[192px]">
        <p className="mb-3">CREATOR</p>
        <DropDown
          chosenOption={chosenCreatorSorter}
          options={creatorSortOptions}
          pickOption={(obj) => setChosenCreatorSorter(obj)}></DropDown>
      </div>
      <div className="max-w-[192px] ">
        <RangeSlider
          className="pb-2   "
          min={2}
          max={10}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </div>
    </div>
  ) : null;
};

export default FilterBlock;
