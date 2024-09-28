import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import {
  getCategoryProducts,
  getDetailProducts,
  getProducts,
} from "../actions";
const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.productStatus = STATUS.ERROR;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });

    builder.addCase(getDetailProducts.pending, (state, action) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getDetailProducts.rejected, (state, action) => {
      state.productDetailStatus = STATUS.ERROR;
    });
    builder.addCase(getDetailProducts.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = action.payload;
    });

    builder.addCase(getCategoryProducts.pending, (state) => {
      state.productStatus = STATUS.LOADING;
    });
    builder.addCase(getCategoryProducts.rejected, (state) => {
      state.productStatus = STATUS.ERROR;
    });
    builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
      state.productStatus = STATUS.SUCCESS;
      state.products = action.payload;
    });
  },
});
export default productSlice.reducer;
