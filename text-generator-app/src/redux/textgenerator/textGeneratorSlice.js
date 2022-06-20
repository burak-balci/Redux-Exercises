import { createSlice } from "@reduxjs/toolkit";
import { fetchTextGenerator } from "./services";

export const textGeneratorSlice = createSlice({
  name: "text",
  initialState: {
    text: [],
    textType: "html",
    paragraphs: 4,
    isLoading: false,
  },
  reducers: {
    setParagraphs: (state, action) => {
      state.paragraphs = action.payload;
    },
    setType: (state, action) => {
      state.textType = action.payload;
    },
  },
  extraReducers: {
    [fetchTextGenerator.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTextGenerator.fulfilled]: (state, action) => {
      state.text = action.payload;
      state.isLoading = false;
    },
    [fetchTextGenerator.rejected]: (state, action) => {
      state.isLoading = false;
      state.text = action.error.message;
    },
  },
});

export default textGeneratorSlice.reducer;
export const { setParagraphs, setType, clearText, CopyToClipboard } =
  textGeneratorSlice.actions;
