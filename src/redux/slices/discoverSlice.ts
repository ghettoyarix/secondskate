import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortOption, DiscoverOption, Option } from 'types/models/FilterOptions';
import { CONDITIONS, priceSortOptions } from 'constants/index';
import { discoverCategories } from 'constants/options';
const discoverConditions: Option[] = [
  { title: { eng: 'Any', ua: 'Будь-який' }, value: 'any' },
  ...CONDITIONS,
];
export interface DiscoverState {
  discoverConditions: Option[];
  chosenPriceSorter: SortOption;
  chosenDateOption: SortOption;
  chosenCondition: Option;
  discoverSorter: string;
  chosenCategory: DiscoverOption;
  creatorSortOptions: string[];
  discoverSortOptions: string[];
  likesSortOptions: string[];
  isFilterShown: boolean;
  minPrice: number | null;
  maxPrice: number | null;
}

const initialState: DiscoverState = {
  discoverConditions,
  chosenPriceSorter: priceSortOptions[0],
  chosenDateOption: {} as SortOption,
  chosenCondition: discoverConditions[0],
  discoverSorter: 'Recently added',
  chosenCategory: discoverCategories[0],
  creatorSortOptions: ['Verified only', 'Any verification'],
  discoverSortOptions: ['Recently added', 'Asnything'],
  likesSortOptions: ['Most liked', 'Least liked'],
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

    setChosenCondition: (state, action: PayloadAction<Option>) => {
      state.chosenCondition = action.payload;
    },
    setDiscoverSorter: (state, action: PayloadAction<string>) => {
      state.discoverSorter = action.payload;
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
  setDiscoverSorter,
  setChosenCategory,
  toggleFilter,
  setChosenCondition,
} = discoverSlice.actions;

export default discoverSlice.reducer;
