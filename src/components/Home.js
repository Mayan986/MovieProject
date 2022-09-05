import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import MovieApi from "../api/MovieApi";
import { Apikey } from "../api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/movie/movieSlice";

export const Home = () => {
  const text = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await MovieApi.get(
        `?apikey=${Apikey}&s=${text}&type=movie`
      ).catch((err) => {
        console.log(err);
      });
      dispatch(addMovie(response.data));
    };
    fetchMovie();
  }, []);
  return (
    <>
      <div>Home</div>
      <MovieListing />
    </>
  );
};
