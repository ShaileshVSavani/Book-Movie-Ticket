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
//   const [user, setUser] = useState(null); // State to store user details
//   const [bookings, setBookings] = useState([]);
//   const [canceledBookings, setCanceledBookings] = useState([]); // History of canceled bookings

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser); // Set user information (name, email)
//       }

//       // Fetch active bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       const uniqueBookings = removeDuplicateBookings(storedBookings);
//       setBookings(uniqueBookings);

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       const uniqueCanceledBookings = removeDuplicateBookings(storedCanceledBookings);
//       setCanceledBookings(uniqueCanceledBookings);
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
//     const updatedBookings = bookings.filter(
//       (booking) => booking.movie.Title !== movieTitle
//     );

//     // Move canceled bookings to history
//     const canceled = bookings.filter(
//       (booking) => booking.movie.Title === movieTitle
//     );
//     setCanceledBookings([...canceledBookings, ...canceled]); // Append to canceled bookings

//     // Update the state with the filtered bookings
//     setBookings(updatedBookings);

//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       // Update localStorage for active bookings
//       localStorage.setItem(
//         `bookings_${userId}`,
//         JSON.stringify(updatedBookings)
//       );

//       // Update localStorage for canceled bookings (history)
//       localStorage.setItem(
//         `canceledBookings_${userId}`,
//         JSON.stringify([...canceledBookings, ...canceled])
//       );
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" padding={3}>
//       <Grid container spacing={3}>
//         {/* User Details (Left Side) */}
//         <Grid item xs={12} md={4}>
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             padding={3}
//           >
//             {/* Display Logo or Profile Image */}
//             {/* <img
//               src="/path-to-your-logo/logo.png" // Replace with the path to your profile or logo image
//               alt="User Profile"
//               style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "16px" }}
//             /> */}
//             <PersonRoundedIcon sx={{ fontSize: "13rem" }} />
//             {user ? (
//               <>
//                 <Typography variant="h5" gutterBottom>
//                   {user.name}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   {user.email}
//                 </Typography>
//               </>
//             ) : (
//               <Typography variant="h5" gutterBottom>
//                 User Profile
//               </Typography>
//             )}
//           </Box>
//         </Grid>

//         {/* Booking Details in Table Format (Right Side) */}
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

//==========

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

//   // useEffect(() => {
//   //   const userId = localStorage.getItem("userId");

//   //   if (userId) {
//   //     const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//   //     if (storedUser) {
//   //       setUser(storedUser);
//   //     }

//   //     const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//   //     const uniqueBookings = removeDuplicateBookings(storedBookings);
//   //     setBookings(uniqueBookings);

//   //     const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//   //     const uniqueCanceledBookings = removeDuplicateBookings(storedCanceledBookings);
//   //     setCanceledBookings(uniqueCanceledBookings);
//   //   }
//   // }, []);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");

//     if (userId) {
//       // Retrieve user email from localStorage
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser); // Set user information (email)
//       }

//       // Fetch active bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       const uniqueBookings = removeDuplicateBookings(storedBookings);
//       setBookings(uniqueBookings);

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings = JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       const uniqueCanceledBookings = removeDuplicateBookings(storedCanceledBookings);
//       setCanceledBookings(uniqueCanceledBookings);
//     }
//   }, []);

//   const removeDuplicateBookings = (bookingsArray) => {
//     const uniqueBookingsMap = new Map();
//     bookingsArray.forEach((booking) => {
//       if (!uniqueBookingsMap.has(booking.bookingId)) {
//         uniqueBookingsMap.set(booking.bookingId, booking);
//       }
//     });
//     return Array.from(uniqueBookingsMap.values());
//   };

//   const cancelBooking = (movieTitle) => {
//     const updatedBookings = bookings.filter(
//       (booking) => booking.movie.Title !== movieTitle
//     );

//     const canceled = bookings.filter(
//       (booking) => booking.movie.Title === movieTitle
//     );
//     setCanceledBookings([...canceledBookings, ...canceled]);
//     setBookings(updatedBookings);

//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));
//       localStorage.setItem(`canceledBookings_${userId}`, JSON.stringify([...canceledBookings, ...canceled]));
//       const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
//       if (storedUser) {
//         setUser(storedUser); // This will include email and name
//       }
//     }
//   };

//   return (
//     <Box display="flex" justifyContent="center" padding={3}>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={4}>
//           <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
//             <PersonRoundedIcon sx={{ fontSize: "13rem" }} />
//             {user ? (
//               <>
//                 <Typography variant="h5" gutterBottom>
//                   {user.name} {/* Display user's name */}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   {user.email} {/* Display user's email */}
//                 </Typography>
//               </>
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
//                       <TableCell>Booking ID</TableCell>
//                       <TableCell>Movie</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Seats</TableCell>
//                       <TableCell>Total Price</TableCell>
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

//----

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

//       // Fetch active bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//       const userBookings = storedBookings.filter(
//         (booking) => booking.userId === userId
//       );
//       setBookings(userBookings);

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings =
//         JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       setCanceledBookings(storedCanceledBookings);
//     }
//   }, []);

//   const cancelBooking = (movieTitle) => {
//     const updatedBookings = bookings.filter(
//       (booking) => booking.movie.Title !== movieTitle
//     );

//     const canceled = bookings.filter(
//       (booking) => booking.movie.Title === movieTitle
//     );
//     setCanceledBookings([...canceledBookings, ...canceled]);
//     setBookings(updatedBookings);

//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       localStorage.setItem("bookings", JSON.stringify(updatedBookings));
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
//               <>
//                 <Typography variant="h5" gutterBottom>
//                   {user.email} {/* Display user's email */}
//                 </Typography>
//               </>
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
//                         <TableCell>{booking.movie.Title}</TableCell>{" "}
//                         {/* Update this line */}
//                         <TableCell>{booking.date}</TableCell>
//                         <TableCell>{booking.time}</TableCell>
//                         <TableCell>{booking.seatNumbers.join(", ")}</TableCell>
//                         <TableCell>Rs. {booking.totalPrice}</TableCell>
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

//           <Box marginTop={4}>
//             <Typography variant="h6" gutterBottom>
//               Canceled Bookings History
//             </Typography>
//             {canceledBookings.length > 0 ? (
//               <TableContainer component={Paper}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Movie</TableCell>
//                       <TableCell>Date</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Seats</TableCell>
//                       <TableCell>Total Price</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {bookings.map((booking, index) => (
//                       <TableRow key={index}>
//                         <TableCell>
//                           {booking.movie ? booking.movie.Title : "N/A"}
//                         </TableCell>
//                         <TableCell>{booking.date}</TableCell>
//                         <TableCell>{booking.time}</TableCell>
//                         <TableCell>{booking.seatNumbers.join(", ")}</TableCell>
//                         <TableCell>Rs. {booking.totalPrice}</TableCell>
//                         <TableCell>
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={() =>
//                               cancelBooking(
//                                 booking.movie
//                                   ? booking.movie.Title
//                                   : "Unknown Movie"
//                               )
//                             }
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
//               <Typography>No canceled bookings</Typography>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default UserProfile;



//=======================



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

//       // Fetch active bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       setBookings(storedBookings);

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings =
//         JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       setCanceledBookings(storedCanceledBookings);
//     }
//   }, []);

//   const cancelBooking = (movieTitle) => {
//     const updatedBookings = bookings.filter(
//       (booking) => booking.movie.Title !== movieTitle
//     );

//     const canceled = bookings.filter(
//       (booking) => booking.movie.Title === movieTitle
//     );
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
//                         <TableCell>{booking.movie?.Title || "N/A"}</TableCell> {/* Handle movie title */}
//                         <TableCell>{booking.date || "N/A"}</TableCell>
//                         <TableCell>{booking.time || "N/A"}</TableCell>
//                         <TableCell>
//                           {Array.isArray(booking.seatNumbers) ? booking.seatNumbers.join(", ") : "N/A"} {/* Fix here */}
//                         </TableCell>
//                         <TableCell>Rs. {booking.totalPrice || "N/A"}</TableCell>
//                         <TableCell>
//                           <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={() => cancelBooking(booking.movie?.Title)}
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
//                         <TableCell>{booking.movie?.Title || "N/A"}</TableCell> {/* Handle movie title */}
//                         <TableCell>{booking.date || "N/A"}</TableCell>
//                         <TableCell>{booking.time || "N/A"}</TableCell>
//                         <TableCell>
//                           {Array.isArray(booking.seatNumbers) ? booking.seatNumbers.join(", ") : "N/A"} {/* Fix here */}
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


//======================



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

//       // Fetch active bookings for the specific user
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
//       setBookings(storedBookings); // Avoid fetching from `bookings` to prevent duplication

//       // Fetch canceled bookings (history)
//       const storedCanceledBookings =
//         JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       setCanceledBookings(storedCanceledBookings);
//     }
//   }, []);

//   const cancelBooking = (bookingId) => {
//     const updatedBookings = bookings.filter(
//       (booking) => booking.bookingId !== bookingId
//     );

//     const canceled = bookings.filter(
//       (booking) => booking.bookingId === bookingId
//     );
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



//=======================




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

//       // Fetch active bookings for the specific user from `bookings_<userId>`
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];

//       // Filter for unique bookings based on `bookingId` to avoid duplicates
//       const uniqueBookings = storedBookings.filter(
//         (booking, index, self) =>
//           index === self.findIndex((b) => b.bookingId === booking.bookingId)
//       );

//       setBookings(uniqueBookings);

//       // Fetch canceled bookings (history)
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


//=========================



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

//       // Fetch active bookings for the specific user from `bookings_<userId>`
//       const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];

//       // Check if the user has bookings stored in localStorage
//       if (storedBookings.length > 0) {
//         setBookings(storedBookings);
//       } else {
//         console.log("No bookings found for this user.");
//       }

//       // Fetch canceled bookings (history) for the specific user
//       const storedCanceledBookings =
//         JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
//       setCanceledBookings(storedCanceledBookings);
//     } else {
//       console.log("No user ID found in localStorage.");
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



//=================================




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
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [canceledBookings, setCanceledBookings] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Retrieve user email from localStorage
      const storedUser = JSON.parse(localStorage.getItem(`user_${userId}`));
      if (storedUser) {
        setUser(storedUser); // Set user information (email)
      }

      // Fetch bookings only for this specific user from localStorage (`bookings_<userId>`)
      const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];

      // Ensure no duplicates are fetched, and only valid bookings are set
      const uniqueBookings = storedBookings.filter((booking, index, self) => 
        index === self.findIndex(b => b.bookingId === booking.bookingId)
      );

      setBookings(uniqueBookings);

      // Fetch canceled bookings (history) for the specific user
      const storedCanceledBookings =
        JSON.parse(localStorage.getItem(`canceledBookings_${userId}`)) || [];
      setCanceledBookings(storedCanceledBookings);
    }
  }, []);

  const cancelBooking = (bookingId) => {
    // Filter the bookings, excluding the one being canceled
    const updatedBookings = bookings.filter(
      (booking) => booking.bookingId !== bookingId
    );

    // Find the booking that is being canceled
    const canceled = bookings.filter(
      (booking) => booking.bookingId === bookingId
    );

    // Update the canceled bookings list
    setCanceledBookings([...canceledBookings, ...canceled]);
    setBookings(updatedBookings);

    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.setItem(`bookings_${userId}`, JSON.stringify(updatedBookings));
      localStorage.setItem(
        `canceledBookings_${userId}`,
        JSON.stringify([...canceledBookings, ...canceled])
      );
    }
  };

  return (
    <Box display="flex" justifyContent="center" padding={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding={3}
          >
            <PersonRoundedIcon sx={{ fontSize: "13rem" }} />
            {user ? (
              <Typography variant="h5" gutterBottom>
                {user.email} {/* Display user's email */}
              </Typography>
            ) : (
              <Typography variant="h5" gutterBottom>
                User Profile
              </Typography>
            )}
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
                      <TableCell>Booking ID</TableCell> {/* New Booking ID Column */}
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
                        <TableCell>{booking.bookingId}</TableCell> {/* Show booking ID */}
                        <TableCell>{booking.movie?.Title || "N/A"}</TableCell> {/* Handle movie title */}
                        <TableCell>{booking.date || "N/A"}</TableCell>
                        <TableCell>{booking.time || "N/A"}</TableCell>
                        <TableCell>
                          {Array.isArray(booking.seatNumbers)
                            ? booking.seatNumbers.join(", ")
                            : Array.isArray(booking.seats)
                            ? booking.seats.join(", ")
                            : "N/A"} {/* Check for both seatNumbers and seats */}
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
                      <TableCell>Booking ID</TableCell> {/* New Booking ID Column */}
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
                        <TableCell>{booking.bookingId}</TableCell> {/* Show booking ID */}
                        <TableCell>{booking.movie?.Title || "N/A"}</TableCell> {/* Handle movie title */}
                        <TableCell>{booking.date || "N/A"}</TableCell>
                        <TableCell>{booking.time || "N/A"}</TableCell>
                        <TableCell>
                          {Array.isArray(booking.seatNumbers)
                            ? booking.seatNumbers.join(", ")
                            : Array.isArray(booking.seats)
                            ? booking.seats.join(", ")
                            : "N/A"} {/* Check for both seatNumbers and seats */}
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
