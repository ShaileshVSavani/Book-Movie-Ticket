

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ Title, Released, Poster, id }) => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const handleBook = () => {
    if (!isAdminLoggedIn && !isUserLoggedIn) {
      // If neither admin nor user is logged in, redirect to user login page
      navigate("/user", { state: { from: `/booking/${id}` } });
    } else {
      // If either user or admin is logged in, go to booking page
      navigate(`/booking/${id}`);
    }
  };

  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        height: 340,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width="100%" src={Poster} alt={Title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(Released).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={handleBook} // Trigger handleBook on click
          sx={{
            margin: "auto",
            bgcolor: "#2b2d42",
            ":hover": {
              bgcolor: "#121217",
            },
          }}
          size="small"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
