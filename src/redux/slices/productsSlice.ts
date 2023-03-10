import Product, { ProductsResponse } from 'types/models/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../actionCreators/products';

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string;
  totalProducts: number;
  page: number;
  productsFetched: number;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
  totalProducts: 0,
  page: 1,
  productsFetched: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    clearProducts: (state) => {
      state.products = [];
      state.page = 1;
      state.productsFetched = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.products = [...state.products, ...action.payload.products];
        state.productsFetched += action.payload.products.length;
        state.totalProducts = action.payload.totalProducts;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});
export const { nextPage, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
