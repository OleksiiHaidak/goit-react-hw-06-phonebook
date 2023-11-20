import { createSlice } from "@reduxjs/toolkit";

const contactFilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
      setFilter(state, { payload }) {
      return payload;
    },
  },
});

export const {setFilter} = contactFilterSlice.actions;

export const filterReducer = contactFilterSlice.reducer;