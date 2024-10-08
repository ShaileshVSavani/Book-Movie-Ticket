
import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api/api";
import MovieItem from "./MoviesItem";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setMovies(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Even on error, stop loading
      });
  }, []);

  return (
    <Box 
      margin={"auto"} 
      marginTop={4} 
      paddingX={{ xs: 2, sm: 4, md: 6 }}  // Adjust padding for different screens
    >
      <Typography
        margin={"auto"}
        variant="h4"
        padding={2}
        color="white"
        textAlign={"center"}
        sx={{
          width: {
            xs: "90%", // 90% width on extra small screens (mobile)
            sm: "80%", // 80% on small screens (tablets)
            md: "60%", // 60% on medium screens (laptops)
            lg: "50%", // 50% on large screens (desktops)
          },
          background: "linear-gradient(135deg, #ff416c, #ff4b2b)", // Gradient background
          borderRadius: "8px", // Rounded corners for a modern look
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Shadow for depth
          fontFamily: "'Roboto', sans-serif", // Modern font
          letterSpacing: "0.05em", // Slight spacing between letters
          textTransform: "uppercase", // Uppercase for impact
          padding: "12px 16px", // Consistent padding
          marginTop: { xs: 2, sm: 3 }, // Adjusted margin-top for small screens
        }}
      >
        All Movies
      </Typography>

      {/* Display loading spinner if movies are still being fetched */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh" // Adjust height to center the loader vertically
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={3} // Adds space between each movie card
          marginTop={5}
          justifyContent="center"  // Center the items on the grid
        >
          {movies &&
            movies.map((movie, index) => (
              <Grid
                item
                xs={12}       // Full width on extra-small screens
                sm={6}        // 2 items per row on small screens (tablets)
                md={4}        // 3 items per row on medium screens (laptops)
                lg={3}        // 4 items per row on large screens (desktops)
                xl={3}        // 4 items per row on extra-large screens
                key={index}
                display="flex"  // Flexbox display to align center
                justifyContent="center"  // Center individual movie items
              >
                <MovieItem
                  id={movie.id}
                  Poster={movie.Poster}
                  Released={movie.Released}
                  Title={movie.Title}
                />
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
};

export default Movies;
