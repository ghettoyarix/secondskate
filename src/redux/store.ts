import { combineReducers, configureStore } from '@reduxjs/toolkit';
import headerSlice from './slices/headerSlice';
import modalSlice from './slices/modalSlice';
import discoverSlice from './slices/discoverSlice';
import uploadSlice from './slices/uploadSlice';
import productsSlice from './slices/productsSlice';
import rangeSlice from './slices/rangeSlice';
const rootReducer = combineReducers({
  products: productsSlice,
  header: headerSlice,
  upload: uploadSlice,
  modal: modalSlice,
  discover: discoverSlice,
  range: rangeSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
