import { createSlice } from "@reduxjs/toolkit";

import { getCategories } from "./../actions";

const initialState = {
  categories: [],
};
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
export default categorySlice.reducer;
