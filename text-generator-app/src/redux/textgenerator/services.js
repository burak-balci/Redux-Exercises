import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTextGenerator = createAsyncThunk(
  "text/getTextAsync",
  async (paragraphs, textType) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}?type=all-meat&paras=${paragraphs}&format=${textType}`
    );
    return res.data;
  }
);
