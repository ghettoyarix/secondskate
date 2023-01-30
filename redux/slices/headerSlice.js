import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHovered: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    show: (state) => {
      state.isHovered = true;
    },
    hide: (state) => {
      state.isHovered = false;
    },
  },
});

export const { show, hide } = headerSlice.actions;

export default headerSlice.reducer;
