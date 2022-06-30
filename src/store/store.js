import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Shopping-cart/cartSlice'
import cartUiSlice from './Shopping-cart/cartUiSlice';



export const store = configureStore({
    reducer: {
    cart: cartSlice.reducer,
      cartUi:cartUiSlice.reducer,
    },
});

export default store;

/* 
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;
 */