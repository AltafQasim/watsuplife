import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./features/citySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      city: citySlice,
    },
  });
};
