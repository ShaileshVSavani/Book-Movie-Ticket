
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/api";
import MovieItem from "../Movies/MoviesItem";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for movies

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Start loading
        const data = await getAllMovies();
        setMovies(data.filter(movie => new Date(movie.Released) <= new Date())); // Current movies
        setUpcomingMovies(data.filter(movie => new Date(movie.Released) > new Date())); // Upcoming movies
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box width="100%" height="100%" margin="auto" marginTop={2}>
      {/* Hero Section */}
      <Box
        position="relative"
        width="100%"
        height={{ xs: "60vh", md: "80vh" }}
        margin="auto"
        sx={{
          backgroundImage:
            "url('https://rukminim2.flixcart.com/image/850/1000/kz5vwy80/poster/0/h/k/medium-titanic-movie-matte-finish-poster-butcute11852-original-imagb8cen3fmffau.jpeg?q=90&crop=false')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0.5)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              textAlign: "center",
              paddingX: { xs: 2, md: 4 },
            }}
          >
            Experience the Magic of Cinema
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginTop: 4,
              paddingX: { xs: 3, md: 4 }, // Responsive padding
              paddingY: 1.5,
              fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
              fontWeight: "bold",
            }}
            LinkComponent={Link}
            to="/movies"
          >
            Book Tickets Now
          </Button>
        </Box>
      </Box>

      {/* Latest Releases Section */}
      <Box padding={{ xs: 2, sm: 3, md: 5 }} margin="auto" textAlign="center">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="textPrimary"
          sx={{
            marginBottom: 3,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Latest Releases
        </Typography>
      </Box>

      {/* Movie Grid */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          margin="auto"
          display="flex"
          width="90%"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: 3 }}
        >
          {movies.slice(0, 4).map((movie, index) => (
            <MovieItem
              id={movie.id}
              Title={movie.Title}
              Poster={movie.Poster}
              Released={movie.Released}
              key={index}
              sx={{
                flex: "1 1 200px",
                maxWidth: { xs: "45%", sm: "30%", md: "20%" },
              }}
            />
          ))}
        </Box>
      )}

      {/* View All Movies Button */}
      <Box display="flex" padding={{ xs: 3, sm: 4, md: 5 }} margin="auto" justifyContent="center">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            color: "#900C3F",
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
            borderColor: "#900C3F",
            "&:hover": {
              backgroundColor: "#900C3F",
              color: "white",
              borderColor: "#900C3F",
            },
          }}
        >
          View All Movies
        </Button>
      </Box>

      {/* Upcoming Movies Section */}
      {upcomingMovies.length > 0 && (
        <>
          <Box padding={{ xs: 2, sm: 3, md: 5 }} margin="auto" textAlign="center">
            <Typography
              variant="h4"
              fontWeight="bold"
              color="textPrimary"
              sx={{
                marginBottom: 3,
                fontSize: { xs: "1.5rem", md: "2.5rem" },
              }}
            >
              Upcoming Movies
            </Typography>
          </Box>

          <Box
            margin="auto"
            display="flex"
            width="90%"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={{ gap: 3 }}
          >
            {upcomingMovies.slice(0, 4).map((movie, index) => (
              <MovieItem
                id={movie.id}
                Title={movie.Title}
                Poster={movie.Poster}
                Released={movie.Released}
                key={index}
                sx={{
                  flex: "1 1 200px",
                  maxWidth: { xs: "45%", sm: "30%", md: "20%" },
                }}
              />
            ))}
          </Box>
        </>
      )}

      {/* Featured Promotions Section */}
<Box
  marginTop={5} // Reduced top margin
  padding={{ xs: 1, sm: 2, md: 3 }} // Reduced responsive padding
  bgcolor="#f5f5f5"
  textAlign="center"
  width="100%"
  maxWidth="600px" // Max width to keep it centered
  margin="0 auto" // Center the box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2, // Optional: for aesthetics
    boxShadow: 1, // Optional: for depth
  }}
>
  <Typography
    variant="h4"
    fontWeight="bold"
    color="textPrimary"
    sx={{ 
      marginBottom: 1, 
      fontSize: { xs: "1.25rem", sm: "1.75rem" }, // Responsive font size
      textAlign: "center",
      lineHeight: { xs: 1.2, sm: 1.4 }, // Better line spacing
    }} 
  >
    Special Offers
  </Typography>
  <Typography 
    variant="body1" 
    color="textSecondary" 
    sx={{ 
      fontSize: { xs: "0.85rem", md: "1rem" }, // Adjusted for mobile
      textAlign: "center", 
      marginBottom: 2 // Space below the text
    }} 
  >
    Get a 20% discount on movie tickets when you book through our app.
    <br /> Enjoy exclusive deals on snacks and drinks!
  </Typography>
  <Button
    variant="contained"
    color="secondary"
    sx={{
      marginTop: 1, // Reduced margin top
      paddingX: { xs: 2, sm: 3 }, // Adjusted responsive padding
      paddingY: { xs: 1, sm: 1.5 }, // Reduced vertical padding
      fontSize: { xs: "0.9rem", sm: "1rem" }, // Responsive font size
      fontWeight: "bold",
      width: { xs: "100%", sm: "auto" }, // Full width on mobile
    }}
  >
    Learn More
  </Button>
</Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#2b2d42",
          color: "white",
          padding: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Responsive padding
          textAlign: "center",
          marginTop: 5,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Movie Booking App © 2024
        </Typography>
        <Typography variant="body2" color="grey.500">
          All rights reserved. Terms and Conditions | Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
