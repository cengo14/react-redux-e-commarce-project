import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../utils/api";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    const res = await api.get("/products/categories");
    return res.data;
  }
);
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await api.get("/products");

    return res.data;
  }
);
export const getCategoryProducts = createAsyncThunk(
  "detailProducts/getDetailProducts",
  async (category) => {
    const res = await api.get(`/products/category/${category}`);

    return res.data;
  }
);
export const getDetailProducts = createAsyncThunk(
  "categoryProducts/getCategoryProducts",
  async (id) => {
    const res = await api.get(`/products/${id}`);

    return res.data;
  }
);
