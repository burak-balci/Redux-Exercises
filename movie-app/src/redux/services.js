import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies,getNowPlayingMovies",
  async (page) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=6f97b23c516fad2e44c06d229e25efbf&language=en-US&page=${page}`
    );
    return res.data;
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies,getPopularMovies",
  async (page) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=6f97b23c516fad2e44c06d229e25efbf&language=en-US&page=${page}`
    );
    return res.data;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  "movies,getPopularMovies",
  async (page) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=6f97b23c516fad2e44c06d229e25efbf&language=en-US&page=${page}`
    );
    return res.data;
  }
);

export const fetchUpComingMovies = createAsyncThunk(
  "movies,getUpcomingMovies",
  async (page) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=6f97b23c516fad2e44c06d229e25efbf&language=en-US&page=${page}`
    );
    return res.data;
  }
);

export const fetchMoviesSlider = createAsyncThunk(
  "movieSlider,getMoviesSliderAsync",
  async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=6f97b23c516fad2e44c06d229e25efbf&language=en-US&page=5`
    );
    return res.data;
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies,getMovieDetails",
  async (id) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6f97b23c516fad2e44c06d229e25efbf`
    );
    return res.data;
  }
);
