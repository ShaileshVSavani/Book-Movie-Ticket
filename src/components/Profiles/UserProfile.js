
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,

  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { toast } from "react-toastify";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  // const [canceledBookings, setCanceledBookings] = useState([]);
  // const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
      if (storedUser) {
        setUser(storedUser);
      }

      const storedBookings = JSON.parse(localStorage.getItem(`booking_${userId}`)) || [];
      setBookings(storedBookings);

      // const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
      // setCanceledBookings(storedCanceledBookings);

      // Fetch booked seats from localStorage
      // const storedBookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
      // setBookedSeats(storedBookedSeats);
    }
  }, []);

  // const cancelBooking = (bookingId) => {
  //   const updatedBookings = bookings.filter(
  //     (booking) => booking.bookingId !== bookingId
  //   );

  //   const canceled = bookings.find(
  //     (booking) => booking.bookingId === bookingId
  //   );

  //   if (canceled) {
  //     setCanceledBookings([...canceledBookings, canceled]);
  //     setBookings(updatedBookings);

  //     const userId = localStorage.getItem("userId");
  //     if (userId) {
  //       localStorage.setItem(`booking_${userId}`, JSON.stringify(updatedBookings));
  //       localStorage.setItem(
  //         `canceledBookings_${userId}`,
  //         JSON.stringify([...canceledBookings, canceled])
  //       );
  //     }

  //     // Remove canceled seats from bookedSeats
  //     const updatedBookedSeats = bookedSeats.filter(
  //       (seat) => !canceled.seatNumbers.includes(seat)
  //     );
  //     setBookedSeats(updatedBookedSeats);
  //     localStorage.setItem("bookedSeats", JSON.stringify(updatedBookedSeats));

  //     toast.success("Booking canceled successfully! Seats are now available.");
  //   }
  // };

  return (
    <Box display="flex" justifyContent="center" padding={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
            <PersonRoundedIcon sx={{ fontSize: "13rem" }} />
            <Typography variant="h5" gutterBottom>
              {user ? user.email : "User Profile"}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h6" gutterBottom>
              My Bookings
            </Typography>
            {bookings.length > 0 ? (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Booking ID</TableCell>
                      <TableCell>Movie</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Seats</TableCell>
                      <TableCell>Total Price</TableCell>
                      {/* <TableCell>Actions</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings.map((booking, index) => (
                      <TableRow key={index}>
                        <TableCell>{booking.bookingId}</TableCell>
                        <TableCell>{booking.movieTitle || "N/A"}</TableCell>
                        <TableCell>{booking.date || "N/A"}</TableCell>
                        <TableCell>{booking.time || "N/A"}</TableCell>
                        <TableCell>
                          {Array.isArray(booking.seatNumbers)
                            ? booking.seatNumbers.join(", ")
                            : "N/A"}
                        </TableCell>
                        <TableCell>Rs. {booking.totalPrice || "N/A"}</TableCell>
                        {/* <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => cancelBooking(booking.bookingId)}
                          >
                            Cancel Booking
                          </Button>
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography>No bookings found</Typography>
            )}
          </Box>

          {/* <Box marginTop={4}>
            <Typography variant="h6" gutterBottom>
              Canceled Bookings History
            </Typography>
            {canceledBookings.length > 0 ? (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Booking ID</TableCell>
                      <TableCell>Movie</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Seats</TableCell>
                      <TableCell>Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {canceledBookings.map((booking, index) => (
                      <TableRow key={index}>
                        <TableCell>{booking.bookingId}</TableCell>
                        <TableCell>{booking.movieTitle || "N/A"}</TableCell>
                        <TableCell>{booking.date || "N/A"}</TableCell>
                        <TableCell>{booking.time || "N/A"}</TableCell>
                        <TableCell>
                          {Array.isArray(booking.seatNumbers)
                            ? booking.seatNumbers.join(", ")
                            : "N/A"}
                        </TableCell>
                        <TableCell>Rs. {booking.totalPrice || "N/A"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography>No canceled bookings</Typography>
            )}
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
