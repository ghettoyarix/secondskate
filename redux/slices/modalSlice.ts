import { createSlice } from '@reduxjs/toolkit';
interface IState {
  editModalFlag: boolean;
  defaultValues: Partial<IDefaultValues>;
}
interface IDefaultValues {
  title: string;
  price: number;
  description: string;
  size: string | number;
  condition: string;
  category: string;
  photoURLs: Array<string>;
  productId: number;
  type: string;
}
const initialState: IState = {
  editModalFlag: false,
  defaultValues: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    editBid: (state, action) => {
      state.editModalFlag = false;
      state.defaultValues = action.payload;
    },
    hide: (state) => {
      state.editModalFlag = false;
    },
  },
});

export const { editBid, hide } = modalSlice.actions;

export default modalSlice.reducer;
