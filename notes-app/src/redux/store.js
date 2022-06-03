import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./notesSlice";

export const store = configureStore({
  reducer: {
    notes: noteSlice,
  },
});
