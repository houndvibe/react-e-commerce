import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import productsApi from "../services/productsApi";

export interface productProps {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface productsState {
  products: productProps[];
  selectedProductId: number | null;
}

const initialState: productsState = {
  products: [],
  selectedProductId: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct(state, action) {
      state.selectedProductId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload);
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
export const selectSelectedProduct = (state: RootState) =>
  state.productsReducer.products.find(
    (item) => item.id == state.productsReducer.selectedProductId
  );

export const { setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
