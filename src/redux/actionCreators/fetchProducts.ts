import { AppDispatch } from '../store';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Product, { ProductsResponse } from 'types/models/Product';
import type { queryProps } from 'types/models/Query';
interface IFetchProducts {
  queryProps: queryProps;
  page: number;
}
export const fetchProducts = createAsyncThunk(
  'prod/fetchAll',

  async ({ queryProps, page }: IFetchProducts, thunkAPI) => {
    console.log(page + ' in action');

    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts`;
      const response = await axios.get<ProductsResponse>(url, {
        params: { ...queryProps, page },
      });

      const data = response.data;
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error accured' as string);
    }
  },
);
