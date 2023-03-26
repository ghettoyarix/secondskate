import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkEmail, checkUsername } from 'redux/actionCreators/login';
interface ILogin {
  doesUsernameExist: boolean | null;
  doesEmaiExist: boolean | null;
  usernameIsChecking: boolean | null;
  emailIsChecking: boolean | null;
  error: string;
}

const initialState: ILogin = {
  doesUsernameExist: null,
  doesEmaiExist: null,
  emailIsChecking: false,
  usernameIsChecking: false,
  error: '',
};

export const rangeSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUsername.fulfilled, (state, action) => {
        state.doesUsernameExist = action.payload;
        state.usernameIsChecking = false;
      })
      .addCase(checkUsername.pending, (state) => {
        state.usernameIsChecking = true;
      })
      .addCase(checkUsername.rejected, (state, action) => {
        state.error = action.payload as string;
        state.usernameIsChecking = false;
      })
      .addCase(checkEmail.fulfilled, (state, action) => {
        state.doesEmaiExist = action.payload;
        state.emailIsChecking = false;
      })
      .addCase(checkEmail.pending, (state) => {
        state.emailIsChecking = true;
      })
      .addCase(checkEmail.rejected, (state, action) => {
        state.error = action.payload as string;
        state.emailIsChecking = false;
      });
  },
});
export const {} = rangeSlice.actions;
export default rangeSlice.reducer;
