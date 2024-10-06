
import React, { useEffect } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const BookingConfirmation = ({ userId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { movie, seatNumbers, date, time, totalPrice, bookingId } = location.state || {};

  useEffect(() => {
    if (userId) {
      // Get existing bookings for the specific user from localStorage
      const existingBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];

      // Create a new booking object
      const newBooking = {
        bookingId,
        movie,
        date,
        time,
        seats: seatNumbers,
        totalPrice,
      };

      // Add new booking to the array and store it in localStorage for the specific user
      const updatedBookings = [...existingBookings, newBooking];
      localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));
    } else {
      console.error("Error: User ID is not available");
    }
  }, [movie, seatNumbers, date, time, totalPrice, bookingId, userId]);

  const handleViewBookings = () => {
    navigate("/userProfile", {
      state: {
        movie,
        seatNumbers,
        date,
        time,
        totalPrice,
      },
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f2f5">
      <Paper elevation={4} sx={{ padding: 4, maxWidth: 600, width: "100%" }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Booking Confirmed!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Booking ID: {bookingId}
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
          sx={{ marginTop: 3, paddingY: 1.5 }}
          onClick={handleViewBookings}
        >
          View My Bookings
        </Button>
      </Paper>
    </Box>
  );
};

export default BookingConfirmation;
