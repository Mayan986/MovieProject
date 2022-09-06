import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getAllMovies } from "../features/movie/movieSlice";
import { Card } from "./Card";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, id) => <Card key={id} data={movie} />)
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div>
      <MoviesList>
        <h2>Movies</h2>
        <MovieContainer>{renderMovies}</MovieContainer>
      </MoviesList>
    </div>
  );
};
const MoviesList = styled.div`
  margin: 2rem 0;
  h2 {
    color: ${({ theme }) => theme.color.fontSecondary};
    margin-bottom: 1rem;
    font-weight: 400;
  }
`;
const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  grid-gap: 15rem;
`;
