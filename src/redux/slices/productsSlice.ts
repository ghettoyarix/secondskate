import Product, { ProductsResponse } from 'types/models/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../actionCreators/fetchProducts';

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string;
  totalProducts: number;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
  totalProducts: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.products = action.payload.products;
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

export default productsSlice.reducer;
