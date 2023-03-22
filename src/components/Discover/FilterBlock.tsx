import React from 'react';
import DropDown from 'components/UI/DropDown';
import RangeSlider from 'components/UI/RangeSlider';
import DropDownBlock from './DropDownBlock';
import { DISCOVER_CONDITIONS, SORT_OPTIONS } from 'constants/index';
import { useAppDispatch } from 'hooks/redux';
import { useAppSelector } from 'hooks/redux';
import { setChosenSorter, setChosenCondition } from 'redux/slices/discoverSlice';
import { Option, SortOption } from 'types/models/FilterOptions';
const FilterBlock = () => {
  const { chosenSorter, chosenCondition, isFilterShown } = useAppSelector(
    (state) => state.discover,
  );

  const dispatch = useAppDispatch();

  return isFilterShown ? (
    <div
      className="grid grid-cols-1 xs:grid-cols-2 place-items-center gap-y-4 tab:grid-cols-3 
    my-8 transition-all  h-fit x text-[12px] text-gray font-bold">
      <DropDownBlock title="sort by :">
        <DropDown
          chosenOption={chosenSorter}
          options={SORT_OPTIONS}
          pickOption={(obj) => dispatch(setChosenSorter(obj as SortOption))}></DropDown>
      </DropDownBlock>
      <DropDownBlock title="condition">
        <DropDown
          chosenOption={chosenCondition}
          options={DISCOVER_CONDITIONS}
          pickOption={(obj) => dispatch(setChosenCondition(obj as Option))}></DropDown>
      </DropDownBlock>
      <div className="max-w-[192px] ">
        <RangeSlider />
      </div>
    </div>
  ) : null;
};

export default FilterBlock;
