import { createSlice } from '@reduxjs/toolkit';
interface IState {
  editModalFlag: boolean;
}
const initialState: IState = {
  editModalFlag: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    editBid: (state) => {
      state.editModalFlag = true;
    },
    hide: (state) => {
      state.editModalFlag = false;
    },
  },
});

export const { editBid, hide } = modalSlice.actions;

export default modalSlice.reducer;
