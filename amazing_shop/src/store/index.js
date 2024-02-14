import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categoriesSlice";
import productsReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import orderDiscountSlice from "./slice/orderDiscountSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    discount: orderDiscountSlice,
  },
});
