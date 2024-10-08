
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
        movie: {
          Title: movie?.Title,  // Ensure movie title is stored properly
        },
        date,
        time,
        seatNumbers,
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
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#f0f2f5"
      padding={2} // Adding padding for smaller screens
    >
      <Paper 
        elevation={4} 
        sx={{ 
          padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          maxWidth: 600, 
          width: "100%", 
          borderRadius: 2 
        }}
      >
        <Typography 
          variant="h4" 
          textAlign="center" 
          gutterBottom 
          color="#1976d2" // Changed to primary color
        >
          Booking Confirmed!
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          Booking ID: <strong>{bookingId}</strong>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Movie: <strong>{movie.Title}</strong>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Date: <strong>{date}</strong>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Time: <strong>{time}</strong>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Seats: <strong>{seatNumbers.join(", ")}</strong>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Price: <strong>Rs. {totalPrice}</strong>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ 
            marginTop: 3, 
            paddingY: 1.5,
            '&:hover': {
              backgroundColor: '#115293' // Darker color on hover
            }
          }}
          onClick={handleViewBookings}
        >
          View My Bookings
        </Button>
      </Paper>
    </Box>
  );
};

export default BookingConfirmation;
