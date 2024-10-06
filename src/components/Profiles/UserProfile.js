// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { DeleteForeverOutlined } from "@mui/icons-material";

// import {
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { deleteBooking, getUserBooking } from "../../api/api";
// const UserProfile = () => {
//   const navigate = useNavigate();
//   const [bookings, setBookings] = useState([]);
//   const onResReceived = (res) => {
//     setBookings(res.bookings);
//   };
//   useEffect(() => {
//     getUserBooking()
//       .then(onResReceived)
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(bookings);
//   const handleDelete = (id) => {
//     deleteBooking(id)
//       .then(() => navigate("/"))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <Box width="100%" display={"flex"}>
//       <Box
//         display="flex"
//         flexDirection={"column"}
//         justifyContent="center"
//         alignItems={"center"}
//         width="30%"
//       >
//         <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
//         <Typography
//           padding={1}
//           width="100px"
//           textAlign={"center"}
//           border="1px solid #ccc"
//           borderRadius={10}
//         >
//           Name: {bookings.length > 1 && bookings[0].user.name}
//         </Typography>
//       </Box>
//       <Box width="70%" display="flex" flexDirection={"column"}>
//         <Typography
//           variant="h3"
//           fontFamily={"verdana"}
//           textAlign="center"
//           padding={2}
//         >
//           Bookings
//         </Typography>

//         <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
//           <List>
//             {bookings &&
//               bookings.map((booking, index) => (
//                 <ListItem
//                   sx={{
//                     bgcolor: "#00d386",
//                     color: "white",
//                     textAlign: "center",
//                     margin: 1,
//                   }}
//                   key={index}
//                 >
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Movie: {booking.movie.title}
//                   </ListItemText>
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Seat: {booking.seatNumber}
//                   </ListItemText>
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Date: {new Date(booking.date).toDateString()}
//                   </ListItemText>
//                   <IconButton
//                     onClick={() => handleDelete(booking._id)}
//                     color="error"
//                   >
//                     <DeleteForeverOutlined />
//                   </IconButton>
//                 </ListItem>
//               ))}
//           </List>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default UserProfile;

//---

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Paper } from "@mui/material";

// const UserProfile = () => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch bookings from localStorage
//     const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     setBookings(storedBookings);
//   }, []);

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
//       <Typography variant="h4" gutterBottom>
//         My Bookings
//       </Typography>
//       {bookings.length > 0 ? (
//         bookings.map((booking) => (
//           <Paper key={booking.bookingId} elevation={3} sx={{ padding: 2, marginY: 2, width: "100%", maxWidth: 600 }}>
//             <Typography variant="h6">Booking ID: {booking.bookingId}</Typography>
//             <Typography>Movie: {booking.movie.Title}</Typography>
//             <Typography>Date: {booking.date}</Typography>
//             <Typography>Time: {booking.time}</Typography>
//             <Typography>Seats: {booking.seats.join(", ")}</Typography>
//             <Typography>Total Price: {booking.totalPrice}</Typography>
//           </Paper>
//         ))
//       ) : (
//         <Typography>No bookings found</Typography>
//       )}
//     </Box>
//   );
// };

// export default UserProfile;

//-----

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Paper } from "@mui/material";

// const UserProfile = ({ userId }) => {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch bookings from localStorage for the specific user
//     const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//     setBookings(storedBookings);
//   }, [userId]);

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
//       <Typography variant="h4" gutterBottom>
//         My Bookings
//       </Typography>
//       {bookings.length > 0 ? (
//         bookings.map((booking) => (
//           <Paper key={booking.bookingId} elevation={3} sx={{ padding: 2, marginY: 2, width: "100%", maxWidth: 600 }}>
//             <Typography variant="h6">Booking ID: {booking.bookingId}</Typography>
//             <Typography>Movie: {booking.movie.Title}</Typography>
//             <Typography>Date: {booking.date}</Typography>
//             <Typography>Time: {booking.time}</Typography>
//             <Typography>Seats: {booking.seats.join(", ")}</Typography>
//             <Typography>Total Price: {booking.totalPrice}</Typography>
//           </Paper>
//         ))
//       ) : (
//         <Typography>No bookings found</Typography>
//       )}
//     </Box>
//   );
// };

// export default UserProfile;

//================

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Paper, Button } from "@mui/material";

// const UserProfile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     // Fetch userId from localStorage (which is stored as Firebase UID)
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       // Fetch user details (if necessary)
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser);
//       }

//       // Fetch bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       setBookings(storedBookings);
//     } else {
//       console.error("No userId found in localStorage");
//     }
//   }, []);

//   // Function to cancel a booking
//   const cancelBooking = (bookingId) => {
//     const updatedBookings = bookings.filter((booking) => booking.bookingId !== bookingId);
//     setBookings(updatedBookings); // Update the state with the filtered bookings
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings)); // Update localStorage
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
//       {user ? (
//         <Typography variant="h5" gutterBottom>
//           Welcome, {user.name}
//         </Typography>
//       ) : (
//         <Typography variant="h5" gutterBottom>
//           User Profile
//         </Typography>
//       )}

//       <Typography variant="h6" gutterBottom>
//         My Bookings
//       </Typography>

//       {bookings.length > 0 ? (
//         bookings.map((booking) => (
//           <Paper
//             key={booking.bookingId}
//             elevation={3}
//             sx={{ padding: 2, marginY: 2, width: "100%", maxWidth: 600 }}
//           >
//             <Typography variant="h6">Booking ID: {booking.bookingId}</Typography>
//             <Typography>Movie: {booking.movie.Title}</Typography>
//             <img src={booking.movie.Poster} alt={booking.movie.Title} style={{ width: "100%", maxHeight: "300px" }} />
//             <Typography>Date: {booking.date}</Typography>
//             <Typography>Time: {booking.time}</Typography>
//             <Typography>Seats: {booking.seats.join(", ")}</Typography>
//             <Typography>Total Price: {booking.totalPrice}</Typography>
//             <Button
//               variant="contained"
//               color="secondary"
//               sx={{ marginTop: 2 }}
//               onClick={() => cancelBooking(booking.bookingId)} // Call cancelBooking function
//             >
//               Cancel Booking
//             </Button>
//           </Paper>
//         ))
//       ) : (
//         <Typography>No bookings found</Typography>
//       )}
//     </Box>
//   );
// };

// export default UserProfile;

//----------------------

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Paper, Button, Grid } from "@mui/material";

// const UserProfile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [bookings, setBookings] = useState([]);
//   const [canceledBookings, setCanceledBookings] = useState([]); // History of canceled bookings

//   useEffect(() => {
//     // Fetch userId from localStorage (stored as Firebase UID)
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       // Fetch user details (if necessary)
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser);
//       }

//       // Fetch active bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       setBookings(storedBookings);

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       setCanceledBookings(storedCanceledBookings);
//     } else {
//       console.error("No userId found in localStorage");
//     }
//   }, []);

//   // Function to cancel a booking by its movie title
//   const cancelBooking = (movieTitle) => {
//     const updatedBookings = bookings.filter((booking) => booking.movie.Title !== movieTitle);

//     // Move canceled bookings to history
//     const canceled = bookings.filter((booking) => booking.movie.Title === movieTitle);
//     setCanceledBookings([...canceledBookings, ...canceled]); // Append to canceled bookings

//     // Update the state with the filtered bookings
//     setBookings(updatedBookings);

//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       // Update localStorage for active bookings
//       localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));

//       // Update localStorage for canceled bookings (history)
//       localStorage.setItem(`canceledBookings_${userId}`, JSON.stringify([...canceledBookings, ...canceled]));
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" padding={3}>
//       <Grid container spacing={3}>
//         {/* User Details */}
//         <Grid item xs={12} md={4}>
//           <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
//             {user ? (
//               <>
//                 <Typography variant="h5" gutterBottom>
//                   Welcome, {user.name}
//                 </Typography>
//                 <Typography>Email: {user.email}</Typography>
//                 <Typography>Phone: {user.phone}</Typography>
//               </>
//             ) : (
//               <Typography variant="h5" gutterBottom>
//                 User Profile
//               </Typography>
//             )}
//           </Box>
//         </Grid>

//         {/* Booking Details */}
//         <Grid item xs={12} md={8}>
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               My Bookings
//             </Typography>
//             {bookings.length > 0 ? (
//               bookings.map((booking) => (
//                 <Paper
//                   key={booking.bookingId}
//                   elevation={3}
//                   sx={{ padding: 2, marginY: 2, width: "100%", maxWidth: 600 }}
//                 >
//                   <Typography variant="h6">Booking ID: {booking.bookingId}</Typography>
//                   <Typography>Movie: {booking.movie.Title}</Typography>
//                   <img
//                     src={booking.movie.Poster}
//                     alt={booking.movie.Title}
//                     style={{ width: "100%", maxHeight: "300px" }}
//                   />
//                   <Typography>Date: {booking.date}</Typography>
//                   <Typography>Time: {booking.time}</Typography>
//                   <Typography>Seats: {booking.seats.join(", ")}</Typography>
//                   <Typography>Total Price: {booking.totalPrice}</Typography>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     sx={{ marginTop: 2 }}
//                     onClick={() => cancelBooking(booking.movie.Title)} // Cancel all bookings for the movie
//                   >
//                     Cancel Booking
//                   </Button>
//                 </Paper>
//               ))
//             ) : (
//               <Typography>No bookings found</Typography>
//             )}
//           </Box>

//           {/* Canceled Booking History */}
//           <Box marginTop={4}>
//             <Typography variant="h6" gutterBottom>
//               Canceled Bookings History
//             </Typography>
//             {canceledBookings.length > 0 ? (
//               canceledBookings.map((booking) => (
//                 <Paper
//                   key={booking.bookingId}
//                   elevation={2}
//                   sx={{ padding: 2, marginY: 2, width: "100%", maxWidth: 600 }}
//                 >
//                   <Typography variant="h6">Canceled Booking ID: {booking.bookingId}</Typography>
//                   <Typography>Movie: {booking.movie.Title}</Typography>
//                   <Typography>Date: {booking.date}</Typography>
//                   <Typography>Time: {booking.time}</Typography>
//                   <Typography>Seats: {booking.seats.join(", ")}</Typography>
//                   <Typography>Total Price: {booking.totalPrice}</Typography>
//                 </Paper>
//               ))
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

//======================

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Paper, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// const UserProfile = () => {
//   const [user, setUser] = useState(null); // State to store user details
//   const [bookings, setBookings] = useState([]);
//   const [canceledBookings, setCanceledBookings] = useState([]); // History of canceled bookings

//   useEffect(() => {
//     // Fetch userId from localStorage (stored as Firebase UID)
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       // Fetch user details (if necessary)
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser);
//       }

//       // Fetch active bookings for the specific user and ensure no duplicate booking IDs
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       const uniqueBookings = removeDuplicateBookings(storedBookings);
//       setBookings(uniqueBookings);

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       const uniqueCanceledBookings = removeDuplicateBookings(storedCanceledBookings);
//       setCanceledBookings(uniqueCanceledBookings);
//     } else {
//       console.error("No userId found in localStorage");
//     }
//   }, []);

//   // Function to remove duplicate bookings based on bookingId
//   const removeDuplicateBookings = (bookingsArray) => {
//     const uniqueBookingsMap = new Map();
//     bookingsArray.forEach((booking) => {
//       if (!uniqueBookingsMap.has(booking.bookingId)) {
//         uniqueBookingsMap.set(booking.bookingId, booking);
//       }
//     });
//     return Array.from(uniqueBookingsMap.values());
//   };

//   // Function to cancel a booking by its movie title
//   const cancelBooking = (movieTitle) => {
//     const updatedBookings = bookings.filter((booking) => booking.movie.Title !== movieTitle);

//     // Move canceled bookings to history
//     const canceled = bookings.filter((booking) => booking.movie.Title === movieTitle);
//     setCanceledBookings([...canceledBookings, ...canceled]); // Append to canceled bookings

//     // Update the state with the filtered bookings
//     setBookings(updatedBookings);

//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       // Update localStorage for active bookings
//       localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));

//       // Update localStorage for canceled bookings (history)
//       localStorage.setItem(`canceledBookings_${userId}`, JSON.stringify([...canceledBookings, ...canceled]));
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" padding={3}>
//       <Grid container spacing={3}>
//         {/* User Details */}
//         <Grid item xs={12} md={4}>
//           <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
//             {user ? (
//               <>
//                 <Typography variant="h5" gutterBottom>
//                   Welcome, {user.name}
//                 </Typography>
//                 <Typography>Email: {user.email}</Typography>
//                 <Typography>Phone: {user.phone}</Typography>
//               </>
//             ) : (
//               <Typography variant="h5" gutterBottom>
//                 User Profile
//               </Typography>
//             )}
//           </Box>
//         </Grid>

//         {/* Booking Details in Table Format */}
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
//                       <TableCell>Booking ID</TableCell>
//                       <TableCell>Movie</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Seats</TableCell>
//                       <TableCell>Total Price</TableCell>
//                       <TableCell>User Name</TableCell>
//                       <TableCell>Email</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {bookings.map((booking) => (
//                       <TableRow key={booking.bookingId}>
//                         <TableCell>{booking.bookingId}</TableCell>
//                         <TableCell>{booking.movie.Title}</TableCell>
//                         <TableCell>{booking.date}</TableCell>
//                         <TableCell>{booking.time}</TableCell>
//                         <TableCell>{booking.seats.join(", ")}</TableCell>
//                         <TableCell>Rs. {booking.totalPrice}</TableCell>
//                         <TableCell>{user?.name || "N/A"}</TableCell>
//                         <TableCell>{user?.email || "N/A"}</TableCell>
//                         <TableCell>
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={() => cancelBooking(booking.movie.Title)}
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

//           {/* Canceled Booking History in Table Format */}
//           <Box marginTop={4}>
//             <Typography variant="h6" gutterBottom>
//               Canceled Bookings History
//             </Typography>
//             {canceledBookings.length > 0 ? (
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Booking ID</TableCell>
//                       <TableCell>Movie</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Seats</TableCell>
//                       <TableCell>Total Price</TableCell>
//                       <TableCell>User Name</TableCell>
//                       <TableCell>Email</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {canceledBookings.map((booking) => (
//                       <TableRow key={booking.bookingId}>
//                         <TableCell>{booking.bookingId}</TableCell>
//                         <TableCell>{booking.movie.Title}</TableCell>
//                         <TableCell>{booking.date}</TableCell>
//                         <TableCell>{booking.time}</TableCell>
//                         <TableCell>{booking.seats.join(", ")}</TableCell>
//                         <TableCell>Rs. {booking.totalPrice}</TableCell>
//                         <TableCell>{user?.name || "N/A"}</TableCell>
//                         <TableCell>{user?.email || "N/A"}</TableCell>
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

///==================

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
const UserProfile = () => {
  const [user, setUser] = useState(null); // State to store user details
  const [bookings, setBookings] = useState([]);
  const [canceledBookings, setCanceledBookings] = useState([]); // History of canceled bookings

  // useEffect(() => {
  //   // Fetch userId from localStorage (stored as Firebase UID)
  //   const userId = localStorage.getItem("userId");

  //   if (userId) {
  //     // Fetch user details (from localStorage or API)
  //     const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
  //     if (storedUser) {
  //       setUser(storedUser); // Set user information
  //     }

  //     // Fetch active bookings for the specific user and ensure no duplicate booking IDs
  //     const storedBookings =
  //       JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
  //     const uniqueBookings = removeDuplicateBookings(storedBookings);
  //     setBookings(uniqueBookings);

  //     // Fetch canceled bookings (history)
  //     const storedCanceledBookings =
  //       JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
  //     const uniqueCanceledBookings = removeDuplicateBookings(
  //       storedCanceledBookings
  //     );
  //     setCanceledBookings(uniqueCanceledBookings);
  //   } else {
  //     console.error("No userId found in localStorage");
  //   }
  // }, []);

  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  
  //   if (userId) {
  //     const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
  //     if (storedUser) {
  //       setUser(storedUser); // Set user information (name, email)
  //     }
  
  //     // Fetch active bookings for the specific user
  //     const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
  //     const uniqueBookings = removeDuplicateBookings(storedBookings);
  //     setBookings(uniqueBookings);
  
  //     // Fetch canceled bookings (history)
  //     const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
  //     const uniqueCanceledBookings = removeDuplicateBookings(storedCanceledBookings);
  //     setCanceledBookings(uniqueCanceledBookings);
  //   }
  // }, []);
  


  useEffect(() => {
    const userId = localStorage.getItem("userId");
  
    if (userId) {
      const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
      if (storedUser) {
        setUser(storedUser); // Set user information (name, email)
      }
  
      // Fetch active bookings for the specific user
      const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
      const uniqueBookings = removeDuplicateBookings(storedBookings);
      setBookings(uniqueBookings);
  
      // Fetch canceled bookings (history)
      const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
      const uniqueCanceledBookings = removeDuplicateBookings(storedCanceledBookings);
      setCanceledBookings(uniqueCanceledBookings);
    }
  }, []);
  

  // Function to remove duplicate bookings based on bookingId
  const removeDuplicateBookings = (bookingsArray) => {
    const uniqueBookingsMap = new Map();
    bookingsArray.forEach((booking) => {
      if (!uniqueBookingsMap.has(booking.bookingId)) {
        uniqueBookingsMap.set(booking.bookingId, booking);
      }
    });
    return Array.from(uniqueBookingsMap.values());
  };

  // Function to cancel a booking by its movie title
  const cancelBooking = (movieTitle) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.movie.Title !== movieTitle
    );

    // Move canceled bookings to history
    const canceled = bookings.filter(
      (booking) => booking.movie.Title === movieTitle
    );
    setCanceledBookings([...canceledBookings, ...canceled]); // Append to canceled bookings

    // Update the state with the filtered bookings
    setBookings(updatedBookings);

    const userId = localStorage.getItem("userId");
    if (userId) {
      // Update localStorage for active bookings
      localStorage.setItem(
        `bookings_${userId}`,
        JSON.stringify(updatedBookings)
      );

      // Update localStorage for canceled bookings (history)
      localStorage.setItem(
        `canceledBookings_${userId}`,
        JSON.stringify([...canceledBookings, ...canceled])
      );
    }
  };

  return (
    <Box display="flex" justifyContent="center" padding={3}>
      <Grid container spacing={3}>
        {/* User Details (Left Side) */}
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={3}
          >
            {/* Display Logo or Profile Image */}
            {/* <img
              src="/path-to-your-logo/logo.png" // Replace with the path to your profile or logo image
              alt="User Profile"
              style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "16px" }}
            /> */}
            <PersonRoundedIcon sx={{ fontSize: "13rem" }} />
            {user ? (
              <>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {user.email}
                </Typography>
              </>
            ) : (
              <Typography variant="h5" gutterBottom>
                User Profile
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Booking Details in Table Format (Right Side) */}
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
                    {bookings.map((booking) => (
                      <TableRow key={booking.bookingId}>
                        <TableCell>{booking.bookingId}</TableCell>
                        <TableCell>{booking.movie.Title}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.time}</TableCell>
                        <TableCell>{booking.seats.join(", ")}</TableCell>
                        <TableCell>Rs. {booking.totalPrice}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => cancelBooking(booking.movie.Title)}
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

          {/* Canceled Booking History in Table Format */}
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
                    {canceledBookings.map((booking) => (
                      <TableRow key={booking.bookingId}>
                        <TableCell>{booking.bookingId}</TableCell>
                        <TableCell>{booking.movie.Title}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.time}</TableCell>
                        <TableCell>{booking.seats.join(", ")}</TableCell>
                        <TableCell>Rs. {booking.totalPrice}</TableCell>
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
