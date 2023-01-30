import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  type: null,
  test: 'good',
};

export const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
  },
});

export const { setCategory, setType } = uploadSlice.actions;

export default uploadSlice.reducer;
