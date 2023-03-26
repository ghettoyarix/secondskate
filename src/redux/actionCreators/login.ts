import { createAsyncThunk } from '@reduxjs/toolkit';
import { doesUsernameExist } from 'lib/firebase/utils/doesUsernameExist';
import doesEmailExist from 'lib/firebase/utils/doesEmailExist';

const createCheckExistenceAsync = (doesExist: (value: string) => Promise<boolean>) => {
  return async (value: string, thunkAPI: any) => {
    try {
      const res = await doesExist(value);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error occurred' as string);
    }
  };
};

const usernameExistAsync = createCheckExistenceAsync(doesUsernameExist);
const emailExistsAsync = createCheckExistenceAsync(doesEmailExist);

const checkUsername = createAsyncThunk('checkUsername', usernameExistAsync);
const checkEmail = createAsyncThunk('checkEmail', emailExistsAsync);

export { checkUsername, checkEmail };
