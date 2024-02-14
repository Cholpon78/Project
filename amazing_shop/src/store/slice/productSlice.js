import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  productId: "",
  singleProduct: {},
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3333/products/all");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ message: "error fetch all products" });
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3333/products/${productId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ message: "error fetch single product" });
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductId(state, { payload }) {
      state.productId = payload;
    },
    priceFilter(state, { payload }) {
      state.list = state.list.map((elem) => ({
        ...elem,
        show: {
          ...elem.show,
          price:
            (elem.discont_price &&
              elem.discont_price >= payload.min &&
              elem.discont_price <= payload.max) ||
            (!elem.discont_price &&
              elem.price >= payload.min &&
              elem.price <= payload.max),
        },
      }));
    },
    discountHandler(state, { payload }) {
      state.list = state.list.map((elem) => ({
        ...elem,
        show: {
          ...elem.show,
          checked: payload ? !!elem.discont_price : true,
        },
      }));
    },
    sort(state, { payload }) {
      if (payload === 1) {
        state.productsList.sort(
          (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
        );
      } else if (payload === 2) {
        state.productsList.sort(
          (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
        );
      } else if (payload === 3) {
        state.productsList.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      } else {
        state.productsList.sort((a, b) => a.id - b.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "ready";
        const show = { price: true, checked: true };
        state.list = payload.map((elem) => ({ ...elem, show }));
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      });
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, actions) => {
        state.status = "ready";
        state.singleProduct = actions.payload[0];
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
export const { getProductId } = productSlice.actions;
export const { priceFilter, sort, discountHandler } = productSlice.actions;
