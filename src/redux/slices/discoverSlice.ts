import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SortOption, DiscoverOption, Option } from 'types/models/FilterOptions';
import { conditions, priceSortOptions } from 'constants/index';
export interface DiscoverState {
  chosenPriceSorter: SortOption;
  chosenDateOption: SortOption;
  chosenCondition: Option;
  discoverSorter: string;
  chosenCategory: DiscoverOption;
  creatorSortOptions: string[];
  discoverSortOptions: string[];
  likesSortOptions: string[];
  isFilterShown: boolean;
}

const discoverCategories: DiscoverOption[] = [
  { title: 'All items', category: 'any' },
  { title: 'Completes', type: 'completes' },
  { title: 'Decks', type: 'decks' },
  { title: 'Trucks', type: 'trucks' },
  { title: 'Wheels', type: 'wheels' },
  { title: 'Other', type: 'other' },
  { title: 'Shoes', category: 'shoes' },
];

const initialState: DiscoverState = {
  chosenPriceSorter: priceSortOptions[0],
  chosenDateOption: {} as SortOption,
  chosenCondition: conditions[0],
  discoverSorter: 'Recently added',
  chosenCategory: discoverCategories[0],
  creatorSortOptions: ['Verified only', 'Any verification'],
  discoverSortOptions: ['Recently added', 'Asnything'],
  likesSortOptions: ['Most liked', 'Least liked'],
  isFilterShown: false,
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
    setIsFilterShown: (state, action: PayloadAction<boolean>) => {
      state.isFilterShown = action.payload;
    },
  },
});

export const { setChosenPriceSorter, setDiscoverSorter, setChosenCategory, setIsFilterShown } =
  discoverSlice.actions;

export default discoverSlice.reducer;
