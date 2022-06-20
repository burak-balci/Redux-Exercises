import { configureStore } from "@reduxjs/toolkit";
import textGeneratorReducer from "../redux/textgenerator/textGeneratorSlice";

export const store = configureStore({
  reducer: {
    text: textGeneratorReducer,
  },
});
