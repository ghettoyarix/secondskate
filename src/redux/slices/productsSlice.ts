import Product, { ProductsResponse } from "types/models/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../actionCreators/fetchProducts";

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string;
  totalProducts: number;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: "",
  totalProducts: 0,
};

export const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled.type]: (
      state,
      action: PayloadAction<ProductsResponse>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.products = action.payload.products;
      state.totalProducts = action.payload.totalProducts;
    },
    [fetchProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productslice.reducer;
