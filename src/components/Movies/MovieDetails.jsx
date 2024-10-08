

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "../../redux/store";
import { toast } from "react-toastify";

const MovieDetails = ({ isAdmin = false }) => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await getMovieDetails(id);
        setMovie(res);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const handleBook = () => {
    if (isAdminLoggedIn) {
      toast.info("Please log out as Admin and log in as a User to book a movie.", {
        position: "top-right",
        autoClose: 3000,
      });

      setTimeout(() => {
        dispatch(adminActions.logout());
        navigate("/user", { state: { from: `/booking/${id}` } });
      }, 3000);
    } else if (!isUserLoggedIn) {
      toast.warning("Please log in as a user to proceed with booking.", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/user", { state: { from: `/booking/${id}` } });
    } else {
      navigate(`/booking/${id}`);
    }
  };

  if (loading) {
    return <CircularProgress style={{ display: "block", margin: "auto", marginTop: "50px" }} />;
  }

  if (error) {
    return <Typography variant="h6" color="error" style={{ textAlign: "center", marginTop: "50px" }}>{error}</Typography>;
  }

  const {
    Title,
    Year,
    Genre,
    Director,
    Actors,
    Plot,
    Awards,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Poster,
  } = movie;

  return (
    <div>
      <Card sx={{ margin: "auto", mt: 5, p: 2, width: { xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '60%' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <CardMedia
              component="img"
              alt={Title}
              sx={{
                maxHeight: 400,
                width: "100%",
                objectFit: "contain",
              }}
              image={Poster}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' } }}>
                {Title} ({Year})
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Genre:</strong> {Genre}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Director:</strong> {Director}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Actors:</strong> {Actors}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Plot:</strong> {Plot}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Awards:</strong> {Awards}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>IMDb Rating:</strong> {imdbRating} ({imdbVotes} votes)
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <strong>Box Office:</strong> {BoxOffice}
              </Typography>
              <Button
                type="submit"
                sx={{
                  mt: 3,
                  fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
                  padding: "10px 20px",
                  backgroundColor: "#1976d2",
                  color: "white",
                  borderRadius: "5px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    transform: "scale(1.05)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
                onClick={handleBook}
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
