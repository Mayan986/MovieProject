import React, { useEffect } from "react";
import { MovieListing } from "./MovieListing";

import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../features/movie/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <>
      <div>Home</div>
      <MovieListing />
    </>
  );
};
