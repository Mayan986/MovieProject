import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  movies: {},
};
const movieSlice = createSlice({
  name: "movies",
  initialstate,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
