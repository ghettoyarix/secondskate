import { configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice';
import modalSlice from './slices/modalSlice';

import uploadSlice from './slices/uploadSlice';
export const store = configureStore({
  reducer: {
    header: headerSlice,
    upload: uploadSlice,
    modal: modalSlice,
  },
});
