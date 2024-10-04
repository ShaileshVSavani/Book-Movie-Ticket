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


import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";

const UserProfile = ({ userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from localStorage for the specific user
    const storedBookings = JSON.parse(localStorage.getItem(`bookings_${userId}`)) || [];
    setBookings(storedBookings);
  }, [userId]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={3}>
      <Typography variant="h4" gutterBottom>
        My Bookings
      </Typography>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <Paper key={booking.bookingId} elevation={3} sx={{ padding: 2, marginY: 2, width: "100%", maxWidth: 600 }}>
            <Typography variant="h6">Booking ID: {booking.bookingId}</Typography>
            <Typography>Movie: {booking.movie.Title}</Typography>
            <Typography>Date: {booking.date}</Typography>
            <Typography>Time: {booking.time}</Typography>
            <Typography>Seats: {booking.seats.join(", ")}</Typography>
            <Typography>Total Price: {booking.totalPrice}</Typography>
          </Paper>
        ))
      ) : (
        <Typography>No bookings found</Typography>
      )}
    </Box>
  );
};

export default UserProfile;
