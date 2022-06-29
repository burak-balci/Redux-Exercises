import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNowPlayingMovies,
  fetchMoviesSlider,
  fetchPopularMovies,
  fetchUpComingMovies,
  fetchMovieDetails,
} from "./services";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    search: "",
    sliderMovies: [],
    movieDetail: "",
    page: 1,
    genre: "popular",
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchNowPlayingMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    },
    [fetchNowPlayingMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNowPlayingMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.movies = action.error.message;
    },
    [fetchMoviesSlider.fulfilled]: (state, action) => {
      state.sliderMovies = action.payload;
    },
    [fetchMoviesSlider.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPopularMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [fetchPopularMovies.pending]: (state) => {
      state.isLoading = true;
      state.movies = [];
    },
    [fetchPopularMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.movies = action.error.message;
    },
    [fetchUpComingMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [fetchMovieDetails.fulfilled]: (state, action) => {
      state.movieDetail = action.payload;
    },
  },
});

export default moviesSlice.reducer;
