import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DiscoverState {
  categories: {
    title: string;
    category?: string;
    type?: string;
  }[];
  priceSortOptions: {
    title: string;
    value: number;
  }[];
  chosenPriceSorter: {
    title: string;
    value: number;
  };
  chosenLikesSorter: string;
  chosenCreatorSorter: string;
  discoverSorter: string;
  chosenCategory: {
    title: string;
    category?: string;
    type?: string;
  };
  creatorSortOptions: string[];
  discoverSortOptions: string[];
  likesSortOptions: string[];
  isFilterShown: boolean;
}

const initialState: DiscoverState = {
  categories: [
    { title: 'All items', category: 'any' },
    { title: 'Completes', type: 'completes' },
    { title: 'Decks', type: 'decks' },
    { title: 'Trucks', type: 'trucks' },
    { title: 'Wheels', type: 'wheels' },
    { title: 'Other', type: 'other' },
    { title: 'Shoes', category: 'shoes' },
  ],
  priceSortOptions: [
    { title: 'Highest price', value: -1 },
    { title: 'Lowest price', value: 1 },
  ],
  chosenPriceSorter: { title: 'Highest price', value: -1 },
  chosenLikesSorter: 'Most liked',
  chosenCreatorSorter: 'Verified only',
  discoverSorter: 'Recently added',
  chosenCategory: { title: 'All items', category: 'any' },
  creatorSortOptions: ['Verified only', 'Any verification'],
  discoverSortOptions: ['Recently added', 'Asnything'],
  likesSortOptions: ['Most liked', 'Least liked'],
  isFilterShown: false,
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    setChosenPriceSorter: (state, action: PayloadAction<{ title: string; value: number }>) => {
      state.chosenPriceSorter = action.payload;
    },
    setChosenLikesSorter: (state, action: PayloadAction<string>) => {
      state.chosenLikesSorter = action.payload;
    },
    setChosenCreatorSorter: (state, action: PayloadAction<string>) => {
      state.chosenCreatorSorter = action.payload;
    },
    setDiscoverSorter: (state, action: PayloadAction<string>) => {
      state.discoverSorter = action.payload;
    },
    setChosenCategory: (
      state,
      action: PayloadAction<{ title: string; category?: string; type?: string }>,
    ) => {
      state.chosenCategory = action.payload;
    },
    setIsFilterShown: (state, action: PayloadAction<boolean>) => {
      state.isFilterShown = action.payload;
    },
  },
});

export const {
  setChosenPriceSorter,
  setChosenLikesSorter,
  setChosenCreatorSorter,
  setDiscoverSorter,
  setChosenCategory,
  setIsFilterShown,
} = discoverSlice.actions;

export default discoverSlice.reducer;
