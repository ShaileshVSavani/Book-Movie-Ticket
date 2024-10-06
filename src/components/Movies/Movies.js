import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


import { getAllMovies } from "../../api/api";
import MovieItem from "./MoviesItem";

const Movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        margin={"auto"}
        variant="h4"
        padding={1}
        width="40%"
        bgcolor={"#900C3F"}
        color="white"
        textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="center"
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie, index) => (
            <MovieItem
              key={index}
              id={movie.id}
              Poster={movie.Poster}
              Released={movie.Released}
              Title={movie.Title}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Movies;