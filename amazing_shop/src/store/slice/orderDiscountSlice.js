import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  userPhoneNumber: "",
};

export const fetchDiscount = createAsyncThunk(
  "discount/fetchDiscount",
  async (data, { rejectWithValue }) => {
    try {
      const resp = await fetch(`http://localhost:3333/sale/send`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const result = await resp.json();
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ message: "error fetch discount" });
    }
  }
);

export const fetchOrder = createAsyncThunk(
  "discount/fetchOrder",
  async (data, { rejectWithValue }) => {
    try {
      const resp = await fetch(`http://localhost:3333/order/send`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const result = await resp.json();
      return result;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ message: "error fetch order" });
    }
  }
);

export const orderDiscountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    getPhoneNumber(state, { payload }) {
      state.userPhoneNumber = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDiscount.fulfilled, (state, { payload }) => {
        state.status = "ready";
        if (payload.status === "OK") {
          console.log("Your discount code is sent on this phone number");
        }
      })
      .addCase(fetchDiscount.rejected, (state) => {
        state.status = "error";
      });
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrder.fulfilled, (state, { payload }) => {
        state.status = "ready";
        if (payload.status === "OK") {
          console.log("Your cart is cleaned");
        }
      })
      .addCase(fetchOrder.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default orderDiscountSlice.reducer;
export const { getPhoneNumber } = orderDiscountSlice.actions;
