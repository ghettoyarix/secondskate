import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type Product from 'types/models/Product';
interface Account {
  username: string;
  title: string;
  photoURL: string;
}

interface HeaderState {
  searchedValue: string | null;
  accountsFound: Account[];
  productsFound: Product[];
}

const initialState: HeaderState = {
  searchedValue: '',
  accountsFound: [],
  productsFound: [],
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSearchedValue(state, action: PayloadAction<string>) {
      state.searchedValue = action.payload;
    },
    setAccountsFound(state, action: PayloadAction<Account[]>) {
      state.accountsFound = action.payload;
    },
    setProductsFound(state, action: PayloadAction<Product[]>) {
      state.productsFound = action.payload;
    },
  },
});

export const { setSearchedValue, setAccountsFound, setProductsFound } = headerSlice.actions;

export default headerSlice.reducer;
