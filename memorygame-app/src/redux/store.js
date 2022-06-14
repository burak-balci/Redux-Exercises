import { configureStore } from "@reduxjs/toolkit";
import memoryGameSlice from "./memoryGameSlice";

export const store = configureStore({
  reducer: {
    framework: memoryGameSlice,
  },
});
