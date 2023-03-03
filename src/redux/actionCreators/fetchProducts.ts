import {AppDispatch} from "../store";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import Product , {ProductsResponse} from "types/models/Product";

export const fetchProducts = createAsyncThunk(
    'prod/fetchAll',
    async (_, thunkAPI) => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/api/getProducts`
            const response = await axios.get<ProductsResponse[]>(url)
            const data =  response.data;
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Error accured")
        }
    }
)