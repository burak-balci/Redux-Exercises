import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";

export const store = configureStore({
  reducer: {
    items: itemSlice,
  },
});
