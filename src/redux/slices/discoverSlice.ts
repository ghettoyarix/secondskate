import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortOption, DiscoverOption, Option } from 'types/models/FilterOptions';
import { SORT_OPTIONS, DISCOVER_CONDITIONS } from 'constants/index';
import { discoverCategories } from 'constants/options';

export interface DiscoverState {
  chosenSorter: SortOption;
  chosenCondition: Option;
  chosenCategory: DiscoverOption;
  isFilterShown: boolean;
  minPrice: number | null;
  maxPrice: number | null;
}

const initialState: DiscoverState = {
  chosenSorter: SORT_OPTIONS[0],
  chosenCondition: DISCOVER_CONDITIONS[0],
  chosenCategory: discoverCategories[0],
  isFilterShown: false,
  minPrice: 0,
  maxPrice: 99999,
};

export const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    setChosenCondition: (state, action: PayloadAction<Option>) => {
      state.chosenCondition = action.payload;
    },

    setChosenCategory: (state, action: PayloadAction<DiscoverOption>) => {
      state.chosenCategory = action.payload;
    },
    toggleFilter: (state) => {
      state.isFilterShown = !state.isFilterShown;
    },
    setChosenSorter: (state, action: PayloadAction<SortOption>) => {
      state.chosenSorter = action.payload;
    },
  },
});

export const { setChosenCategory, toggleFilter, setChosenCondition, setChosenSorter } =
  discoverSlice.actions;

export const ACTION_TYPE = 'prod/fetchAll';
export default discoverSlice.reducer;
