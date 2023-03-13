import { AppDispatch } from '../store';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Product, { ProductsResponse } from 'types/models/Product';
import type { queryProps } from 'types/models/Query';
interface IFetchProducts {
  queryProps: queryProps;
  page: number;
}

const fetchProductsAsync = async ({ queryProps, page }: IFetchProducts, thunkAPI: any) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts`;
    const response = await axios.get<ProductsResponse>(url, {
      params: { ...queryProps, page },
    });

    const data = response.data;
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Error occurred' as string);
  }
};
export const fetchProducts = createAsyncThunk('prod/fetch', fetchProductsAsync);
export const searchProducts = createAsyncThunk('prod/search', fetchProductsAsync);
