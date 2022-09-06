import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../api/MovieApi";
import { Apikey } from "../../api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const text = "Harry";
    const response = await MovieApi.get(
      `?apikey=${Apikey}&s=${text}&type=movie`
    ).catch((err) => {
      console.log(err);
    });
    return response.data;
  }
);
const initialState = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
