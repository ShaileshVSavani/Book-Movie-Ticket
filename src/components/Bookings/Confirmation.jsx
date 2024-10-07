import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Booking details are passed from the Payment or Booking component
  const { movie, seatNumbers, date, time, totalPrice } = location.state || {};

  const handleConfirm = () => {
    // Handle final confirmation logic here, such as saving booking to the database
    // After confirmation, redirect to a success page or home page
    console.log("Booking confirmed!");
    navigate("/payment", {
        state: {
          movie,
          seatNumbers,
          date,
          time,
          totalPrice,
        },
      }); // Redirect to homepage after confirmation
  };

  if (!movie || !seatNumbers || !date || !time || !totalPrice) {
    return <Typography variant="h5">No booking details available.</Typography>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
    >
      <Paper elevation={4} sx={{ padding: 4, maxWidth: 500, width: "100%" }}>
        <Typography variant="h4" marginBottom={3} textAlign="center">
          Booking Confirmation
        </Typography>
        <Typography variant="h6" gutterBottom>
          Movie: {movie.Title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Date: {date}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Time: {time}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Seats: {seatNumbers.join(", ")}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Price: Rs. {totalPrice}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleConfirm}
          sx={{
            marginTop: 3,
            paddingY: 1.5,
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Confirm Booking
        </Button>
      </Paper>
    </Box>
  );
};

export default Confirmation;
