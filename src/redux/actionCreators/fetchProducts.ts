import { AppDispatch } from '../store';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Product, { ProductsResponse } from 'types/models/Product';
import type { queryProps } from 'types/models/Query';
export const fetchProducts = createAsyncThunk(
  'prod/fetchAll',

  async (queryProps: queryProps, thunkAPI) => {
    try {
      const url =
        `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts?` +
        new URLSearchParams({ ...queryProps });
      const response = await axios.get<ProductsResponse[]>(url);
      const data = response.data;
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error accured');
    }
  },
);
