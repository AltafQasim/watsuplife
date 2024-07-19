import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "city",
  initialState: {
    value: "",
  },
  reducers: {
    onChangeCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { onChangeCity } = citySlice.actions;

export default citySlice.reducer;
