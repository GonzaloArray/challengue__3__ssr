import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "../common/style/Container.style";
import { Grid } from "../common/style/Grid.style";
import { Image } from "../style/movies.style";
import { Comics } from "../common/style/Common.style";

export const Details = () => {
  const { detail } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetailsCharacters = async () => {
      const native__url =
        "https://gateway.marvel.com:443/v1/public/characters/";
      const apiKey = "91c4e42e95f2ecd9a9b79af46d9338f5";

      const url = `${native__url}${detail}?apikey=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        const mockResponse = {
          comics: data.data.results[0].comics,
          description: data.data.results[0].description,
          name: data.data.results[0].name,
          thumbnail: data.data.results[0].thumbnail,
        };

        setDetails(mockResponse);
      } catch (error) {
        console.error(error);
      }
    };

    return () => getDetailsCharacters();
  }, []);

  return (
    <Container>
      <Grid columns="2">
        <Image
          src={details?.thumbnail?.path + "." + details?.thumbnail?.extension}
          alt={details?.name}
        />
        <div>
          <h2>{details?.name}</h2>
          <p>{details?.description}</p>
          <Comics>
            {details?.comics?.items?.map(comic => (
              <h2 key={comic.resourceURI}>{comic.resourceURI}</h2>
            ))}
          </Comics>
        </div>
      </Grid>
    </Container>
  );
};
