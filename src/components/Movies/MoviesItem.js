import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const MovieItem = ({ Title, Released, Poster, id }) => {
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
          <Typography gutterBottom variant="h8" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {year} */}
            {new Date(Released).toDateString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            fullWidth
            LinkComponent={Link}
            to={`/booking/${id}`}
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