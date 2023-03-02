import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice';
import modalSlice from './slices/modalSlice';

import uploadSlice from './slices/uploadSlice';

const rootReducer = combineReducers({
  header: headerSlice,
  upload: uploadSlice,
  modal: modalSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
