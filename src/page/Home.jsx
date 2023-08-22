/* eslint-disable react/prop-types */
import React from "react";
import { Image, Result } from "../style/movies.style";
import { Container } from "../common/style/Container.style";
import { AddFavoriteBtn, Card, CardText } from "./style/Home.style";
import { Star } from "../icons/Star";
import { movieAppState } from "../context/MoviesContext";

export const Home = ({ movies }) => {
  const { movie, handleAddMovie } = movieAppState();

  const handleAddFavorite = (id) => {
    handleAddMovie(id);
  };

  return (
    <>
      <Container>
        <Result>
          {movies?.map((result) => (
            <Card to={`/${result.id}`} key={result.id}>
              <Image
                src={result.thumbnail.path + "." + result.thumbnail.extension}
              />
              <AddFavoriteBtn
                onClick={() => handleAddFavorite(result.id)}
              >
                <Star findStar={movie.includes(result.id) ? "white" : "none"} />
              </AddFavoriteBtn>
              <CardText>{result.name}</CardText>
            </Card>
          ))}
        </Result>
      </Container>
    </>
  );
};
