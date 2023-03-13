import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type Product from 'types/models/Product';
import { searchProducts } from 'redux/actionCreators/products';
import { ProductsResponse } from 'types/models/Product';

interface HeaderState {
  searchedValue: string | null;
  productsFound: Product[];
  isLoading: boolean;
  error: string;
  openFlag: boolean;
  totalProducts: number;
}

const initialState: HeaderState = {
  searchedValue: '',
  productsFound: [],
  isLoading: false,
  error: '',
  openFlag: false,
  totalProducts: 0,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSearchedValue(state, action: PayloadAction<string>) {
      state.searchedValue = action.payload;
    },
    setOpenFlag(state, action: PayloadAction<boolean>) {
      state.openFlag = action.payload;
    },
    clearProducts(state) {
      state.productsFound = [];
    },
    forceLoading(state) {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<ProductsResponse>) => {
        state.isLoading = false;
        state.error = '';
        state.productsFound = action.payload.products;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
        state.totalProducts = 0;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchedValue, setOpenFlag, forceLoading, clearProducts } = headerSlice.actions;

export default headerSlice.reducer;
