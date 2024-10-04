

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = ({isAdmin = false}) => {


  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);


  const [movie, setMovie] = useState(null); // Initialize as null for better condition checking
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { id } = useParams(); // Destructure id from useParams
  console.log(id);

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res)) // Assuming res is the movie object
      .catch((err) => console.log(err));
  }, [id]);


  const handleBookNow = () => {
    if (isAdminLoggedIn || isUserLoggedIn) {
      navigate(`/booking/${movie.id}`);
    }
    else {
      if (!isAdmin) {
        navigate("/user")
      }
      else {
        navigate("/admin")
      }
    }
   
  }

  if (!movie) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div>
      <Card sx={{ maxWidth: 900, margin: "auto", mt: 5, p: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt={movie.Title}
              sx={{
                maxHeight: 400, // Set a max height for the image
                width: "100%", // Adjust width to fit the grid
                objectFit: "contain", // Keep the original aspect ratio
              }}
              image={movie.Poster}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardContent>
              <Typography variant="h5" component="div">
                {movie.Title} ({movie.Year})
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Genre:</strong> {movie.Genre}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Director:</strong> {movie.Director}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Actors:</strong> {movie.Actors}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Plot:</strong> {movie.Plot}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Awards:</strong> {movie.Awards}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>IMDb Rating:</strong> {movie.imdbRating} (
                {movie.imdbVotes} votes)
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Box Office:</strong> {movie.BoxOffice}
              </Typography>
              <Button
                type="submit"
                sx={{
                  mt: 3, // Margin top
                  fontSize: "1.2rem", // Increase font size
                  padding: "10px 20px", // Adjust padding (top/bottom and left/right)
                  backgroundColor: "#1976d2", // Custom background color (primary color)
                  color: "white", // Text color
                  borderRadius: "5px", // Rounded corners
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow for depth
                  transition: "background-color 0.3s, transform 0.3s", // Smooth transition for hover effects
                  "&:hover": {
                    backgroundColor: "#1565c0", // Darker shade on hover
                    transform: "scale(1.05)", // Slightly enlarge on hover
                  },
                  "&:active": {
                    transform: "scale(0.95)", // Slightly shrink on click
                  },
                }}
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default MovieDetails;
