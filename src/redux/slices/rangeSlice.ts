import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRange {
  minPrice: number | null;
  maxPrice: number | null;
}

const initialState: IRange = {
  maxPrice: null,
  minPrice: null,
};

export const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
  },
});
export const { setMinPrice, setMaxPrice } = rangeSlice.actions;
export default rangeSlice.reducer;
