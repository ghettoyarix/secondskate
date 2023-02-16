import { createSlice } from '@reduxjs/toolkit';
interface IState {
  editModalFlag: boolean;
  defaultValues: Partial<IDefaultValues>;
  removeModalFlag: boolean;
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
  removeModalFlag: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    removeBid: (state, action) => {
      state.removeModalFlag = true;
      state.defaultValues = action.payload;
    },
    editBid: (state, action) => {
      state.editModalFlag = true;
      console.log(action.payload);
      state.defaultValues = action.payload;
    },
    hide: (state) => {
      state.editModalFlag = false;
      state.removeModalFlag = false;
    },
  },
});

export const { editBid, hide, removeBid } = modalSlice.actions;

export default modalSlice.reducer;
