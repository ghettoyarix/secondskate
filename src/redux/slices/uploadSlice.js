import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  type: null,
  test: 'good',
  title: '',
  description: '',
  price: 'price',
  files: [],
  size: '',
};

export const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setSize(state, action) {
      state.type = action.payload;
    },
    setFiles(state, action) {
      state.files = action.payload;
    },
  },
});

export const { setCategory, setType, setFiles, setSize, setPrice, setDescription, setTitle } =
  uploadSlice.actions;

export default uploadSlice.reducer;
