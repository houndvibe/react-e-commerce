import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import productsApi from "../services/productsApi";

export interface productProps {
  title: string;
  description: string;
  price: number;
}

interface productsState {
  products: productProps[];
}

const initialState: productsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await productsApi.getProducts();
  }
);

export const selectAllProducts = (state: RootState) =>
  state.productsReducer.products;

export default productsSlice.reducer;
