
import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminActions } from "../../redux/store";
import { toast } from "react-toastify"; // No need to import ToastContainer

const MovieItem = ({ Title, Released, Poster, id }) => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
