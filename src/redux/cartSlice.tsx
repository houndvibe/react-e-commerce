import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

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
      state.cartProducts.push(action.payload);
    },
    deleteFromCart(state, action) {
      console.log(action.payload);
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export const selectCartProducts = (state: RootState) =>
  state.cartReducer.cartProducts;

export default cartSlice.reducer;
