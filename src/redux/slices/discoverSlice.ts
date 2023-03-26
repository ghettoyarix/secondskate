import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortOption, DiscoverOption, Option } from 'types/models/FilterOptions';
import { SORT_OPTIONS, DISCOVER_CONDITIONS } from 'constants/index';
import { discoverCategories } from 'constants/options';
type PriceRange = {
  min: number | null;
  max: number | null;
};
export interface DiscoverState {
  chosenSorter: SortOption;
  chosenCondition: Option;
  chosenCategory: DiscoverOption;
  isFilterShown: boolean;
  priceRange: PriceRange;
  uploadedBy: string | null;
}

const initialState: DiscoverState = {
  chosenSorter: SORT_OPTIONS[0],
  chosenCondition: DISCOVER_CONDITIONS[0],
  chosenCategory: discoverCategories[0],
  isFilterShown: false,
  priceRange: { max: null, min: null },
  uploadedBy: null,
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
    setPriceRange: (state, action: PayloadAction<PriceRange>) => {
      state.priceRange = action.payload;
    },
    setUploader: (state, action: PayloadAction<string>) => {
      state.uploadedBy = action.payload;
    },
  },
});

export const {
  setChosenCategory,
  toggleFilter,
  setChosenCondition,
  setChosenSorter,
  setPriceRange,
  setUploader,
} = discoverSlice.actions;

export const ACTION_TYPE = 'prod/fetchAll';
export default discoverSlice.reducer;
