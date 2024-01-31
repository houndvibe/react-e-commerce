import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    productsReducer: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
