
// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Button,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);
//   const [canceledBookings, setCanceledBookings] = useState([]);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       // Retrieve user email from localStorage
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser); // Set user information (email)
//       }

//       // Fetch bookings only for this specific user from localStorage (`bookings_<userId>`)
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];

//       // Ensure no duplicates are fetched, and only valid bookings are set
//       const uniqueBookings = storedBookings.filter((booking, index, self) =>
//         index === self.findIndex(b => b.bookingId === booking.bookingId)
//       );

//       setBookings(uniqueBookings);

//       // Fetch canceled bookings (history) for the specific user
//       const storedCanceledBookings =
//         JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       setCanceledBookings(storedCanceledBookings);
//     }
//   }, []);

//   const cancelBooking = (bookingId) => {
//     // Filter the bookings, excluding the one being canceled
//     const updatedBookings = bookings.filter(
//       (booking) => booking.bookingId !== bookingId
//     );

//     // Find the booking that is being canceled
//     const canceled = bookings.filter(
//       (booking) => booking.bookingId === bookingId
//     );

//     // Update the canceled bookings list
//     setCanceledBookings([...canceledBookings, ...canceled]);
//     setBookings(updatedBookings);

//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));
//       localStorage.setItem(
//         `canceledBookings_${userId}`,
//         JSON.stringify([...canceledBookings, ...canceled])
//       );
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" padding={3}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             padding={3}
//           >
//             <PersonRoundedIcon sx={{ fontSize: "13rem" }} />
//             {user ? (
//               <Typography variant="h5" gutterBottom>
//                 {user.email} {/* Display user's email */}
//               </Typography>
//             ) : (
//               <Typography variant="h5" gutterBottom>
//                 User Profile
//               </Typography>
//             )}
//           </Box>
//         </Grid>

//         <Grid item xs={12} md={8}>
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               My Bookings
//             </Typography>
//             {bookings.length > 0 ? (
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Booking ID</TableCell> {/* New Booking ID Column */}
//                       <TableCell>Movie</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Seats</TableCell>
//                       <TableCell>Total Price</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {bookings.map((booking, index) => (
//                       <TableRow key={index}>
//                         <TableCell>{booking.bookingId}</TableCell> {/* Show booking ID */}
//                         <TableCell>{booking.movie?.Title || "N/A"}</TableCell> {/* Handle movie title */}
//                         <TableCell>{booking.date || "N/A"}</TableCell>
//                         <TableCell>{booking.time || "N/A"}</TableCell>
//                         <TableCell>
//                           {Array.isArray(booking.seatNumbers)
//                             ? booking.seatNumbers.join(", ")
//                             : Array.isArray(booking.seats)
//                             ? booking.seats.join(", ")
//                             : "N/A"} {/* Check for both seatNumbers and seats */}
//                         </TableCell>
//                         <TableCell>Rs. {booking.totalPrice || "N/A"}</TableCell>
//                         <TableCell>
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={() => cancelBooking(booking.bookingId)}
//                           >
//                             Cancel Booking
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Typography>No bookings found</Typography>
//             )}
//           </Box>

//           <Box marginTop={4}>
//             <Typography variant="h6" gutterBottom>
//               Canceled Bookings History
//             </Typography>
//             {canceledBookings.length > 0 ? (
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Booking ID</TableCell> {/* New Booking ID Column */}
//                       <TableCell>Movie</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Seats</TableCell>
//                       <TableCell>Total Price</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {canceledBookings.map((booking, index) => (
//                       <TableRow key={index}>
//                         <TableCell>{booking.bookingId}</TableCell> {/* Show booking ID */}
//                         <TableCell>{booking.movie?.Title || "N/A"}</TableCell> {/* Handle movie title */}
//                         <TableCell>{booking.date || "N/A"}</TableCell>
//                         <TableCell>{booking.time || "N/A"}</TableCell>
//                         <TableCell>
//                           {Array.isArray(booking.seatNumbers)
//                             ? booking.seatNumbers.join(", ")
//                             : Array.isArray(booking.seats)
//                             ? booking.seats.join(", ")
//                             : "N/A"} {/* Check for both seatNumbers and seats */}
//                         </TableCell>
//                         <TableCell>Rs. {booking.totalPrice || "N/A"}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             ) : (
//               <Typography>No canceled bookings</Typography>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default UserProfile;


//=================




import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { toast } from "react-toastify"; // Make sure to have this installed

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [canceledBookings, setCanceledBookings] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
      if (storedUser) {
        setUser(storedUser);
      }

      const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
      const uniqueBookings = storedBookings.filter((booking, index, self) =>
        index === self.findIndex(b => b.bookingId === booking.bookingId)
      );

      setBookings(uniqueBookings);

      const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
      setCanceledBookings(storedCanceledBookings);
    }
  }, []);

  const cancelBooking = (bookingId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.bookingId !== bookingId
    );

    const canceled = bookings.find(
      (booking) => booking.bookingId === bookingId
    );

    if (canceled) {
      setCanceledBookings([...canceledBookings, canceled]);
      setBookings(updatedBookings);

      const userId = localStorage.getItem("userId");
      if (userId) {
        localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));
        localStorage.setItem(
          `canceledBookings_${userId}`,
          JSON.stringify([...canceledBookings, canceled])
        );
      }

      toast.success("Booking canceled successfully!");
    }
  };

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
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings.map((booking, index) => (
                      <TableRow key={index}>
                        <TableCell>{booking.bookingId}</TableCell>
                        <TableCell>{booking.movie?.Title || "N/A"}</TableCell>
                        <TableCell>{booking.date || "N/A"}</TableCell>
                        <TableCell>{booking.time || "N/A"}</TableCell>
                        <TableCell>
                          {Array.isArray(booking.seatNumbers)
                            ? booking.seatNumbers.join(", ")
                            : Array.isArray(booking.seats)
                            ? booking.seats.join(", ")
                            : "N/A"}
                        </TableCell>
                        <TableCell>Rs. {booking.totalPrice || "N/A"}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => cancelBooking(booking.bookingId)}
                          >
                            Cancel Booking
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography>No bookings found</Typography>
            )}
          </Box>

          <Box marginTop={4}>
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
                        <TableCell>{booking.movie?.Title || "N/A"}</TableCell>
                        <TableCell>{booking.date || "N/A"}</TableCell>
                        <TableCell>{booking.time || "N/A"}</TableCell>
                        <TableCell>
                          {Array.isArray(booking.seatNumbers)
                            ? booking.seatNumbers.join(", ")
                            : Array.isArray(booking.seats)
                            ? booking.seats.join(", ")
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
