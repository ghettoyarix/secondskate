import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortOption, DiscoverOption, Option } from 'types/models/FilterOptions';
import { PRICE_SORT_OPTIONS, DISCOVER_CONDITIONS, DATE_SORT_OPTIONS } from 'constants/index';
import { discoverCategories } from 'constants/options';

export interface DiscoverState {
  chosenPriceSorter: SortOption;
  chosenDateSorter: SortOption;
  chosenCondition: Option;
  chosenCategory: DiscoverOption;
  isFilterShown: boolean;
  minPrice: number | null;
  maxPrice: number | null;
}

const initialState: DiscoverState = {
  chosenPriceSorter: PRICE_SORT_OPTIONS[0],
  chosenDateSorter: DATE_SORT_OPTIONS[0],
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
    setChosenPriceSorter: (state, action: PayloadAction<SortOption>) => {
      state.chosenPriceSorter = action.payload;
    },
    setChosenDateSorter: (state, action: PayloadAction<SortOption>) => {
      state.chosenDateSorter = action.payload;
    },

    setChosenCondition: (state, action: PayloadAction<Option>) => {
      state.chosenCondition = action.payload;
    },

    setChosenCategory: (state, action: PayloadAction<DiscoverOption>) => {
      state.chosenCategory = action.payload;
    },
    toggleFilter: (state) => {
      state.isFilterShown = !state.isFilterShown;
    },
  },
});

export const {
  setChosenPriceSorter,
  setChosenCategory,
  toggleFilter,
  setChosenCondition,
  setChosenDateSorter,
} = discoverSlice.actions;
export const ACTION_TYPE = 'prod/fetchAll';
export default discoverSlice.reducer;
