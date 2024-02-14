import { createSlice } from "@reduxjs/toolkit";

const read = () => {
  const data = JSON.parse(localStorage.getItem("cart"));
  console.log("from localStorage:", data);
  return data;
};

const write = (state) => {
  console.log("to localStorage:", state.list);
  localStorage.setItem("cart", JSON.stringify(state.list));
};

const initialState = { list: read() ?? [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target) {
        target.count++;
      } else {
        state.list.push({ id: payload, count: 1 });
      }
      write(state);
    },
    incrAmount(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      target.count++;
      write(state);
    },
    decrAmount(state, { payload }) {
      const target = state.list.find(({ id }) => id === payload);
      if (target.count === 1) {
        state.list = state.list.filter(({ id }) => id !== payload);
      } else {
        target.count--;
      }
      write(state);
    },
    removeItem(state, { payload }) {
      state.list = state.list.filter(({ id }) => id !== payload);
      write(state);
    },
    cleanCart(state) {
      state.list = [];
      write(state);
    },
  },
});

export const { addToCart, incrAmount, decrAmount, removeItem, cleanCart } =
  cartSlice.actions;
export default cartSlice.reducer;
