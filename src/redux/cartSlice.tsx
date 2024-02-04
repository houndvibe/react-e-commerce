import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import productsApi, { OrderItem } from "../services/productsApi";

interface cartState {
  cartProducts: { id: number; count: number }[];
}

const initialState: cartState = {
  cartProducts: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const same = state.cartProducts.find(
        (product) => product.id == action.payload.id
      );
      if (same) {
        state.cartProducts = state.cartProducts.map((product) => {
          if (product.id == action.payload.id) {
            console.log(+action.payload.count + +product.count);
            return {
              id: product.id,
              count: +product.count + +action.payload.count,
            };
          } else {
            return product;
          }
        });
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    changeCountBy(state, action) {
      state.cartProducts = state.cartProducts.map((product) => {
        if (product.id == action.payload.id) {
          return { id: product.id, count: action.payload.count };
        } else {
          return product;
        }
      });
    },
    deleteFromCart(state, action) {
      console.log(action.payload);
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order: OrderItem[]) => {
    return await productsApi.postOrder(order);
  }
);

export const { addToCart, deleteFromCart, changeCountBy } = cartSlice.actions;

export const selectCartProducts = (state: RootState) =>
  state.cartReducer.cartProducts;

export default cartSlice.reducer;
