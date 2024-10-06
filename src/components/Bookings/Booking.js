

// import React, { useState, useEffect, Fragment } from "react";
// import { Button, FormLabel, TextField, Typography, Box, MenuItem, Select, Paper } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMovieDetails } from "../../api/api";
// import SeatSelection from "./SeatSelection";

// const Booking = () => {
//   const [movie, setMovie] = useState({});
//   const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
//   const id = useParams().id;
//   const navigate = useNavigate();

//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res))
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   const handleSeatSelection = (selectedSeats) => {
//     setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalPrice = calculatePrice();

//     // Navigate to the payment or confirmation page with all details
//     navigate("/confirmation", {
//       state: {
//         movie,
//         seatNumbers: inputs.seatNumbers,
//         date: inputs.date,
//         time: inputs.time,
//         totalPrice,
//       },
//     });
//   };

//   const calculatePrice = () => {
//     const seatPrice = 190.0;
//     return inputs.seatNumbers.length * seatPrice;
//   };

//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
//             Book Tickets For Movie: {movie.Title}
//           </Typography>
//           <Box
//             display={"flex"}
//             justifyContent={"space-around"}
//             flexDirection={{ xs: "column", md: "row" }}
//             padding={3}
//             gap={4}
//           >
//             {/* Movie Details */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <img
//                 width="100%"
//                 height="300px"
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 style={{ borderRadius: "8px" }}
//               />
//               <Box marginTop={3} padding={2}>
//                 <Typography>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Actors: {movie.Actors}
//                 </Typography>
//                 <Typography marginTop={1}>
//                   <Typography fontWeight="bold">Description:</Typography> {movie.Plot}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {movie.Released}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Price per Seat: Rs. 190.00
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Category: {movie.Genre || "N/A"}
//                 </Typography>
//               </Box>
//             </Paper>

//             {/* Booking Form */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={3} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField
//                     name="date"
//                     type="date"
//                     margin="normal"
//                     variant="standard"
//                     value={inputs.date}
//                     onChange={handleChange}
//                     required
//                   />

//                   {/* Show Time Selection */}
//                   <FormLabel>Show Time</FormLabel>
//                   <Select
//                     name="time"
//                     value={inputs.time}
//                     onChange={handleChange}
//                     variant="standard"
//                     margin="normal"
//                     required
//                   >
//                     <MenuItem value="" disabled>
//                       Select Show Time
//                     </MenuItem>
//                     <MenuItem value="10:00 AM">10:00 AM</MenuItem>
//                     <MenuItem value="1:00 PM">1:00 PM</MenuItem>
//                     <MenuItem value="4:00 PM">4:00 PM</MenuItem>
//                     <MenuItem value="7:00 PM">7:00 PM</MenuItem>
//                   </Select>

//                   {/* Selected Seats and Total Price */}
//                   <Typography variant="h6" marginTop={2}>
//                     Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
//                   </Typography>
//                   <Typography variant="h6" marginTop={2}>
//                     Total Price: Rs. {calculatePrice()}
//                   </Typography>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}
//                   >
//                     Proceed to Confirmation
//                   </Button>
//                 </Box>
//               </form>

//               {/* Seat Selection Component */}
//               <SeatSelection onSeatSelect={handleSeatSelection} />
//               {/* Screen Indicator */}
//           <Box
//             sx={{
//               height: "40px",
//               width: "90%",
//               backgroundColor: "#666",
//               marginTop: 2,
//               borderRadius: 2,
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             <Typography variant="body1" fontWeight="bold" color="white">
//               Screen
//             </Typography>
//           </Box>
//             </Paper>
            
//           </Box>

          
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;




//=====================================



// import React, { useState, useEffect, Fragment } from "react";
// import { Button, FormLabel, TextField, Typography, Box, MenuItem, Select, Paper } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMovieDetails } from "../../api/api";
// import SeatSelection from "./SeatSelection";

// const Booking = () => {
//   const [movie, setMovie] = useState({});
//   const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const id = useParams().id;
//   const navigate = useNavigate();
//   const totalSeats = 50; // Assume total seats available is 50

//   // Fetch movie details and retrieve booked seats from localStorage on component mount
//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res))
//       .catch((err) => console.log(err));

//     // Retrieve booked seats from localStorage based on movie ID, date, and time
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//     );
    
//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]); // No seats booked for this show
//     }
//   }, [id, inputs.date, inputs.time]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

//     // On date/time change, update bookedSeats from localStorage
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//     );
//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]);
//     }
//   };

//   const handleSeatSelection = (selectedSeats) => {
//     setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalPrice = calculatePrice();

//     // Save the new booking in localStorage
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const updatedBookings = [
//       ...savedBookings,
//       { movieId: id, date: inputs.date, time: inputs.time, seatNumbers: inputs.seatNumbers },
//     ];
//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));

//     // Navigate to the payment or confirmation page with all details
//     navigate("/confirmation", {
//       state: {
//         movie,
//         seatNumbers: inputs.seatNumbers,
//         date: inputs.date,
//         time: inputs.time,
//         totalPrice,
//       },
//     });
//   };

//   const calculatePrice = () => {
//     const seatPrice = 190.0;
//     return inputs.seatNumbers.length * seatPrice;
//   };

//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
//             Book Tickets For Movie: {movie.Title}
//           </Typography>
//           <Box
//             display={"flex"}
//             justifyContent={"space-around"}
//             flexDirection={{ xs: "column", md: "row" }}
//             padding={3}
//             gap={4}
//           >
//             {/* Movie Details */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <img
//                 width="100%"
//                 height="300px"
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 style={{ borderRadius: "8px" }}
//               />
//               <Box marginTop={3} padding={2}>
//                 <Typography>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Actors: {movie.Actors}
//                 </Typography>
//                 <Typography marginTop={1}>
//                   <Typography fontWeight="bold">Description:</Typography> {movie.Plot}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {movie.Released}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Price per Seat: Rs. 190.00
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Category: {movie.Genre || "N/A"}
//                 </Typography>
//               </Box>
//             </Paper>

//             {/* Booking Form */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={3} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField
//                     name="date"
//                     type="date"
//                     margin="normal"
//                     variant="standard"
//                     value={inputs.date}
//                     onChange={handleChange}
//                     required
//                   />

//                   {/* Show Time Selection */}
//                   <FormLabel>Show Time</FormLabel>
//                   <Select
//                     name="time"
//                     value={inputs.time}
//                     onChange={handleChange}
//                     variant="standard"
//                     margin="normal"
//                     required
//                   >
//                     <MenuItem value="" disabled>
//                       Select Show Time
//                     </MenuItem>
//                     <MenuItem value="10:00 AM">10:00 AM</MenuItem>
//                     <MenuItem value="1:00 PM">1:00 PM</MenuItem>
//                     <MenuItem value="4:00 PM">4:00 PM</MenuItem>
//                     <MenuItem value="7:00 PM">7:00 PM</MenuItem>
//                   </Select>

//                   {/* Selected Seats and Total Price */}
//                   <Typography variant="h6" marginTop={2}>
//                     Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
//                   </Typography>
//                   <Typography variant="h6" marginTop={2}>
//                     Total Price: Rs. {calculatePrice()}
//                   </Typography>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}
//                   >
//                     Proceed to Confirmation
//                   </Button>
//                 </Box>
//               </form>

//               {/* Seat Selection Component */}
//               <SeatSelection
//                 onSeatSelect={handleSeatSelection}
//                 bookedSeats={bookedSeats}
//                 totalSeats={totalSeats}
//               />

//               {/* Screen Indicator */}
//               <Box
//                 sx={{
//                   height: "40px",
//                   width: "90%",
//                   backgroundColor: "#666",
//                   marginTop: 2,
//                   borderRadius: 2,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 <Typography variant="body1" fontWeight="bold" color="white">
//                   Screen
//                 </Typography>
//               </Box>
//             </Paper>
//           </Box>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;



//===========================



// import React, { useState, useEffect, Fragment } from "react";
// import { Button, FormLabel, TextField, Typography, Box, MenuItem, Select, Paper } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMovieDetails } from "../../api/api";
// import SeatSelection from "./SeatSelection";

// const Booking = () => {
//   const [movie, setMovie] = useState({});
//   const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const id = useParams().id;
//   const navigate = useNavigate();
//   const totalSeats = 50; // Assume total seats available is 50
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res))
//       .catch((err) => console.log(err));

//     // Retrieve booked seats from localStorage based on movie ID, date, and time
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//     );

//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]); // No seats booked for this show
//     }
//   }, [id, inputs.date, inputs.time]);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

//     // On date/time change, update bookedSeats from localStorage
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//     );
//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]);
//     }
//   };

//   const handleSeatSelection = (selectedSeats) => {
//     setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalPrice = calculatePrice();

//     // Get all saved bookings
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

//     // Check if the same movie, date, and time are already booked by any user
//     const existingBooking = savedBookings.find(
//       (booking) =>
//         booking.movieId === id &&
//         booking.date === inputs.date &&
//         booking.time === inputs.time
//     );

//     if (existingBooking) {
//       setErrorMessage("This show is already fully booked.");
//       return;
//     }

//     // Save the new booking in localStorage
//     const updatedBookings = [
//       ...savedBookings,
//       {
//         userId: userId,
//         movieId: id,
//         date: inputs.date,
//         time: inputs.time,
//         seatNumbers: inputs.seatNumbers,
//         totalPrice,
//       },
//     ];
//     localStorage.setItem("bookings", JSON.stringify(updatedBookings));

//     // Navigate to the payment or confirmation page with all details
//     navigate("/confirmation", {
//       state: {
//         movie,
//         seatNumbers: inputs.seatNumbers,
//         date: inputs.date,
//         time: inputs.time,
//         totalPrice,
//       },
//     });
//   };

//   const calculatePrice = () => {
//     const seatPrice = 190.0;
//     return inputs.seatNumbers.length * seatPrice;
//   };

//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
//             Book Tickets For Movie: {movie.Title}
//           </Typography>
//           <Box
//             display={"flex"}
//             justifyContent={"space-around"}
//             flexDirection={{ xs: "column", md: "row" }}
//             padding={3}
//             gap={4}
//           >
//             {/* Movie Details */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <img
//                 width="100%"
//                 height="300px"
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 style={{ borderRadius: "8px" }}
//               />
//               <Box marginTop={3} padding={2}>
//                 <Typography>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Actors: {movie.Actors}
//                 </Typography>
//                 <Typography marginTop={1}>
//                   <Typography fontWeight="bold">Description:</Typography> {movie.Plot}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {movie.Released}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Price per Seat: Rs. 190.00
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Category: {movie.Genre || "N/A"}
//                 </Typography>
//               </Box>
//             </Paper>

//             {/* Booking Form */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={3} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField
//                     name="date"
//                     type="date"
//                     margin="normal"
//                     variant="standard"
//                     value={inputs.date}
//                     onChange={handleChange}
//                     required
//                   />

//                   {/* Show Time Selection */}
//                   <FormLabel>Show Time</FormLabel>
//                   <Select
//                     name="time"
//                     value={inputs.time}
//                     onChange={handleChange}
//                     variant="standard"
//                     margin="normal"
//                     required
//                   >
//                     <MenuItem value="" disabled>
//                       Select Show Time
//                     </MenuItem>
//                     <MenuItem value="10:00 AM">10:00 AM</MenuItem>
//                     <MenuItem value="1:00 PM">1:00 PM</MenuItem>
//                     <MenuItem value="4:00 PM">4:00 PM</MenuItem>
//                     <MenuItem value="7:00 PM">7:00 PM</MenuItem>
//                   </Select>

//                   {/* Error Message for Duplicate Booking */}
//                   {errorMessage && (
//                     <Typography variant="body2" color="red" marginTop={1}>
//                       {errorMessage}
//                     </Typography>
//                   )}

//                   {/* Selected Seats and Total Price */}
//                   <Typography variant="h6" marginTop={2}>
//                     Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
//                   </Typography>
//                   <Typography variant="h6" marginTop={2}>
//                     Total Price: Rs. {calculatePrice()}
//                   </Typography>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}
//                   >
//                     Proceed to Confirmation
//                   </Button>
//                 </Box>
//               </form>

//               {/* Seat Selection Component */}
//               <SeatSelection
//                 onSeatSelect={handleSeatSelection}
//                 bookedSeats={bookedSeats}
//                 totalSeats={totalSeats}
//               />

//               {/* Screen Indicator */}
//               <Box
//                 sx={{
//                   height: "40px",
//                   width: "90%",
//                   backgroundColor: "#666",
//                   marginTop: 2,
//                   borderRadius: 2,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 <Typography variant="body1" fontWeight="bold" color="white">
//                   Screen
//                 </Typography>
//               </Box>
//             </Paper>
//           </Box>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;





//=======================================



// import React, { useState, useEffect, Fragment } from "react";
// import { Button, FormLabel, TextField, Typography, Box, MenuItem, Select, Paper } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMovieDetails } from "../../api/api";
// import SeatSelection from "./SeatSelection";

// const Booking = () => {
//   const [movie, setMovie] = useState({});
//   const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const id = useParams().id;
//   const navigate = useNavigate();
//   const totalSeats = 50; // Assume total seats available is 50
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res))
//       .catch((err) => console.log(err));
//   }, [id]);

//   useEffect(() => {
//     // Retrieve booked seats from localStorage based on movie ID, date, and time
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//     );

//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]); // No seats booked for this show
//     }
//   }, [id, inputs.date, inputs.time]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({ ...prevState, [name]: value }));

//     // On date/time change, update bookedSeats from localStorage
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === value && booking.time === inputs.time
//     );
//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]);
//     }
//   };

//   const handleSeatSelection = (selectedSeats) => {
//     setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalPrice = calculatePrice();
  
//     // Retrieve all saved bookings from localStorage
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  
//     // Find the current booking by movie, date, and time
//     const existingBooking = savedBookings.find(
//       (booking) =>
//         booking.movieId === id &&
//         booking.date === inputs.date &&
//         booking.time === inputs.time
//     );
  
//     // If there are existing bookings, check if any seats are available
//     const totalBookedSeats = existingBooking ? existingBooking.seatNumbers.length : 0;
//     const remainingSeats = totalSeats - totalBookedSeats;
  
//     // Check if the selected seats exceed the available seats
//     if (inputs.seatNumbers.length > remainingSeats) {
//       setErrorMessage(`Only ${remainingSeats} seats are available for this show.`);
//       return;
//     }
  
//     // If there is an existing booking for this movie, date, and time, append the selected seats
//     if (existingBooking) {
//       existingBooking.seatNumbers = [...existingBooking.seatNumbers, ...inputs.seatNumbers];
//     } else {
//       // Otherwise, create a new booking
//       savedBookings.push({
//         userId: userId,
//         movieId: id,
//         date: inputs.date,
//         time: inputs.time,
//         seatNumbers: inputs.seatNumbers,
//         totalPrice,
//       });
//     }
  
//     // Save updated bookings back to localStorage
//     localStorage.setItem("bookings", JSON.stringify(savedBookings));
  
//     // Clear error message and proceed to confirmation
//     setErrorMessage("");
  
//     // Redirect to the confirmation page with booking details
//     navigate("/confirmation", {
//       state: {
//         movie,
//         seatNumbers: inputs.seatNumbers,
//         date: inputs.date,
//         time: inputs.time,
//         totalPrice,
//       },
//     });
//   };
  

//   const calculatePrice = () => {
//     const seatPrice = 190.0;
//     return inputs.seatNumbers.length * seatPrice;
//   };

//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
//             Book Tickets For Movie: {movie.Title}
//           </Typography>
//           <Box
//             display={"flex"}
//             justifyContent={"space-around"}
//             flexDirection={{ xs: "column", md: "row" }}
//             padding={3}
//             gap={4}
//           >
//             {/* Movie Details */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <img
//                 width="100%"
//                 height="300px"
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 style={{ borderRadius: "8px" }}
//               />
//               <Box marginTop={3} padding={2}>
//                 <Typography>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Actors: {movie.Actors}
//                 </Typography>
//                 <Typography marginTop={1}>
//                   <Typography fontWeight="bold">Description:</Typography> {movie.Plot}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {movie.Released}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Price per Seat: Rs. 190.00
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Category: {movie.Genre || "N/A"}
//                 </Typography>
//               </Box>
//             </Paper>

//             {/* Booking Form */}
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={3} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Booking Date</FormLabel>
//                   <TextField
//                     name="date"
//                     type="date"
//                     margin="normal"
//                     variant="standard"
//                     value={inputs.date}
//                     onChange={handleChange}
//                     required
//                   />

//                   {/* Show Time Selection */}
//                   <FormLabel>Show Time</FormLabel>
//                   <Select
//                     name="time"
//                     value={inputs.time}
//                     onChange={handleChange}
//                     variant="standard"
//                     margin="normal"
//                     required
//                   >
//                     <MenuItem value="" disabled>
//                       Select Show Time
//                     </MenuItem>
//                     <MenuItem value="10:00 AM">10:00 AM</MenuItem>
//                     <MenuItem value="1:00 PM">1:00 PM</MenuItem>
//                     <MenuItem value="4:00 PM">4:00 PM</MenuItem>
//                     <MenuItem value="7:00 PM">7:00 PM</MenuItem>
//                   </Select>

//                   {/* Error Message for Duplicate Booking */}
//                   {errorMessage && (
//                     <Typography variant="body2" color="red" marginTop={1}>
//                       {errorMessage}
//                     </Typography>
//                   )}

//                   {/* Selected Seats and Total Price */}
//                   <Typography variant="h6" marginTop={2}>
//                     Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
//                   </Typography>
//                   <Typography variant="h6" marginTop={2}>
//                     Total Price: Rs. {calculatePrice()}
//                   </Typography>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}
//                   >
//                     Proceed to Confirmation
//                   </Button>
//                 </Box>
//               </form>

//               {/* Seat Selection Component */}
//               <SeatSelection
//                 onSeatSelect={handleSeatSelection}
//                 bookedSeats={bookedSeats}
//                 totalSeats={totalSeats}
//               />

//               {/* Screen Indicator */}
//               <Box
//                 sx={{
//                   height: "40px",
//                   width: "90%",
//                   backgroundColor: "#666",
//                   marginTop: 2,
//                   borderRadius: 2,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 <Typography variant="body1" fontWeight="bold" color="white">
//                   Screen
//                 </Typography>
//               </Box>
//             </Paper>
//           </Box>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;



//====



// import React, { useState, useEffect, Fragment } from "react";
// import { Button, FormLabel, TextField, Typography, Box, MenuItem, Select, Paper } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMovieDetails } from "../../api/api";
// import SeatSelection from "./SeatSelection";
// import dayjs from "dayjs";  // Install if not already

// const Booking = () => {
//   const [movie, setMovie] = useState({});
//   const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const id = useParams().id;
//   const navigate = useNavigate();
//   const totalSeats = 50;
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     getMovieDetails(id)
//       .then((res) => setMovie(res))
//       .catch((err) => console.log(err));
//   }, [id]);

//   useEffect(() => {
//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//     );

//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]);
//     }
//   }, [id, inputs.date, inputs.time]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({ ...prevState, [name]: value }));

//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     const movieBooking = savedBookings.find(
//       (booking) => booking.movieId === id && booking.date === value && booking.time === inputs.time
//     );
//     if (movieBooking) {
//       setBookedSeats(movieBooking.seatNumbers);
//     } else {
//       setBookedSeats([]);
//     }
//   };

//   const handleSeatSelection = (selectedSeats) => {
//     setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalPrice = calculatePrice();

//     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

//     const existingBooking = savedBookings.find(
//       (booking) =>
//         booking.movieId === id &&
//         booking.date === inputs.date &&
//         booking.time === inputs.time
//     );

//     const totalBookedSeats = existingBooking ? existingBooking.seatNumbers.length : 0;
//     const remainingSeats = totalSeats - totalBookedSeats;

//     if (inputs.seatNumbers.length > remainingSeats) {
//       setErrorMessage(`Only ${remainingSeats} seats are available for this show.`);
//       return;
//     }

//     if (existingBooking) {
//       existingBooking.seatNumbers = [...existingBooking.seatNumbers, ...inputs.seatNumbers];
//     } else {
//       savedBookings.push({
//         userId: userId,
//         movieId: id,
//         date: inputs.date,
//         time: inputs.time,
//         seatNumbers: inputs.seatNumbers,
//         totalPrice,
//       });
//     }

//     localStorage.setItem("bookings", JSON.stringify(savedBookings));
//     setErrorMessage("");

//     navigate("/confirmation", {
//       state: {
//         movie,
//         seatNumbers: inputs.seatNumbers,
//         date: inputs.date,
//         time: inputs.time,
//         totalPrice,
//       },
//     });
//   };

//   const calculatePrice = () => {
//     const seatPrice = 190.0;
//     return inputs.seatNumbers.length * seatPrice;
//   };

//   // Format the date to display as: "Day, Date Month" (e.g., "Fri, 6 Oct")
//   const getNext7Days = () => {
//     const daysArray = [];
//     for (let i = 0; i < 7; i++) {
//       const dateObj = dayjs().add(i, 'day');
//       const formattedDate = dateObj.format('ddd, D MMM');  // Example: "Fri, 6 Oct"
//       const dateValue = dateObj.format('YYYY-MM-DD');  // Value for the date input
//       daysArray.push({ label: formattedDate, value: dateValue });
//     }
//     return daysArray;
//   };

//   return (
//     <div>
//       {movie && (
//         <Fragment>
//           <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
//             Book Tickets For Movie: {movie.Title}
//           </Typography>
//           <Box
//             display={"flex"}
//             justifyContent={"space-around"}
//             flexDirection={{ xs: "column", md: "row" }}
//             padding={3}
//             gap={4}
//           >
//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <img
//                 width="100%"
//                 height="300px"
//                 src={movie.Poster}
//                 alt={movie.Title}
//                 style={{ borderRadius: "8px" }}
//               />
//               <Box marginTop={3} padding={2}>
//                 <Typography>{movie.description}</Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Actors: {movie.Actors}
//                 </Typography>
//                 <Typography marginTop={1}>
//                   <Typography fontWeight="bold">Description:</Typography> {movie.Plot}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Release Date: {movie.Released}
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Price per Seat: Rs. 190.00
//                 </Typography>
//                 <Typography fontWeight="bold" marginTop={1}>
//                   Category: {movie.Genre || "N/A"}
//                 </Typography>
//               </Box>
//             </Paper>

//             <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
//               <form onSubmit={handleSubmit}>
//                 <Box padding={3} margin="auto" display="flex" flexDirection="column">
//                   <FormLabel>Booking Date</FormLabel>
//                   <Select
//                     name="date"
//                     value={inputs.date}
//                     onChange={handleChange}
//                     variant="standard"
//                     margin="normal"
//                     required
//                   >
//                     <MenuItem value="" disabled>
//                       Select Booking Date
//                     </MenuItem>
//                     {getNext7Days().map((date) => (
//                       <MenuItem key={date.value} value={date.value}>
//                         {date.label}
//                       </MenuItem>
//                     ))}
//                   </Select>

//                   <FormLabel>Show Time</FormLabel>
//                   <Select
//                     name="time"
//                     value={inputs.time}
//                     onChange={handleChange}
//                     variant="standard"
//                     margin="normal"
//                     required
//                   >
//                     <MenuItem value="" disabled>
//                       Select Show Time
//                     </MenuItem>
//                     <MenuItem value="10:00 AM">10:00 AM</MenuItem>
//                     <MenuItem value="1:00 PM">1:00 PM</MenuItem>
//                     <MenuItem value="4:00 PM">4:00 PM</MenuItem>
//                     <MenuItem value="7:00 PM">7:00 PM</MenuItem>
//                   </Select>

//                   {errorMessage && (
//                     <Typography variant="body2" color="red" marginTop={1}>
//                       {errorMessage}
//                     </Typography>
//                   )}

//                   <Typography variant="h6" marginTop={2}>
//                     Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
//                   </Typography>
//                   <Typography variant="h6" marginTop={2}>
//                     Total Price: Rs. {calculatePrice()}
//                   </Typography>

//                   <Button type="submit" sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}>
//                     Proceed to Confirmation
//                   </Button>
//                 </Box>
//               </form>

//               <SeatSelection
//                 onSeatSelect={handleSeatSelection}
//                 bookedSeats={bookedSeats}
//                 totalSeats={totalSeats}
//               />

//               <Box
//                 sx={{
//                   height: "40px",
//                   width: "90%",
//                   backgroundColor: "#666",
//                   marginTop: 2,
//                   borderRadius: 2,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 <Typography variant="body1" fontWeight="bold" color="white">
//                   Screen
//                 </Typography>
//               </Box>
//             </Paper>
//           </Box>
//         </Fragment>
//       )}
//     </div>
//   );
// };

// export default Booking;


//=======



import React, { useState, useEffect, Fragment } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import SeatSelection from "./SeatSelection";
import dayjs from "dayjs";  // Install if not already

const Booking = () => {
  const [movie, setMovie] = useState({});
  const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
  const [bookedSeats, setBookedSeats] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const id = useParams().id;
  const navigate = useNavigate();
  const totalSeats = 50;
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const movieBooking = savedBookings.find(
      (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
    );

    if (movieBooking) {
      setBookedSeats(movieBooking.seatNumbers);
    } else {
      setBookedSeats([]);
    }
  }, [id, inputs.date, inputs.time]);

  const handleDateClick = (selectedDate) => {
    setInputs((prevState) => ({ ...prevState, date: selectedDate }));

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const movieBooking = savedBookings.find(
      (booking) => booking.movieId === id && booking.date === selectedDate && booking.time === inputs.time
    );
    if (movieBooking) {
      setBookedSeats(movieBooking.seatNumbers);
    } else {
      setBookedSeats([]);
    }
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setInputs((prevState) => ({ ...prevState, time: value }));
  };

  const handleSeatSelection = (selectedSeats) => {
    setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculatePrice();

    const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const existingBooking = savedBookings.find(
      (booking) =>
        booking.movieId === id &&
        booking.date === inputs.date &&
        booking.time === inputs.time
    );

    const totalBookedSeats = existingBooking ? existingBooking.seatNumbers.length : 0;
    const remainingSeats = totalSeats - totalBookedSeats;

    if (inputs.seatNumbers.length > remainingSeats) {
      setErrorMessage(`Only ${remainingSeats} seats are available for this show.`);
      return;
    }

    if (existingBooking) {
      existingBooking.seatNumbers = [...existingBooking.seatNumbers, ...inputs.seatNumbers];
    } else {
      savedBookings.push({
        userId: userId,
        movieId: id,
        date: inputs.date,
        time: inputs.time,
        seatNumbers: inputs.seatNumbers,
        totalPrice,
      });
    }

    localStorage.setItem("bookings", JSON.stringify(savedBookings));
    setErrorMessage("");

    navigate("/confirmation", {
      state: {
        movie,
        seatNumbers: inputs.seatNumbers,
        date: inputs.date,
        time: inputs.time,
        totalPrice,
      },
    });
  };

  const calculatePrice = () => {
    const seatPrice = 190.0;
    return inputs.seatNumbers.length * seatPrice;
  };

  // Format the date to display as: "Day, Date Month" (e.g., "Fri, 6 Oct")
  const getNext7Days = () => {
    const daysArray = [];
    for (let i = 0; i < 7; i++) {
      const dateObj = dayjs().add(i, 'day');
      const formattedDate = dateObj.format('ddd, D MMM');  // Example: "Fri, 6 Oct"
      const dateValue = dateObj.format('YYYY-MM-DD');  // Value for the date input
      daysArray.push({ label: formattedDate, value: dateValue });
    }
    return daysArray;
  };

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography padding={3} fontFamily="fantasy" variant="h4" textAlign={"center"}>
            Book Tickets For Movie: {movie.Title}
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            flexDirection={{ xs: "column", md: "row" }}
            padding={3}
            gap={4}
          >
            <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
              <img
                width="100%"
                height="300px"
                src={movie.Poster}
                alt={movie.Title}
                style={{ borderRadius: "8px" }}
              />
              <Box marginTop={3} padding={2}>
                <Typography>{movie.description}</Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Actors: {movie.Actors}
                </Typography>
                <Typography marginTop={1}>
                  <Typography fontWeight="bold">Description:</Typography> {movie.Plot}
                </Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Release Date: {movie.Released}
                </Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Price per Seat: Rs. 190.00
                </Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Category: {movie.Genre || "N/A"}
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
              <form onSubmit={handleSubmit}>
                <Box padding={3} margin="auto" display="flex" flexDirection="column">
                  <Typography variant="h6" marginBottom={2}>
                    Select Booking Date
                  </Typography>

                  <Box display="flex" gap={2} flexWrap="wrap">
                    {getNext7Days().map((date) => (
                      <Button
                        key={date.value}
                        onClick={() => handleDateClick(date.value)}
                        variant={inputs.date === date.value ? "contained" : "outlined"}
                        sx={{
                          backgroundColor: inputs.date === date.value ? "#1976d2" : "",
                          color: inputs.date === date.value ? "white" : "black",
                          width: "123px",
                        }}
                      >
                        {date.label}
                      </Button>
                    ))}
                  </Box>

                  <Typography variant="h6" marginTop={2}>
                    Select Show Time
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Button onClick={() => handleTimeChange({ target: { value: "10:00 AM" } })} variant={inputs.time === "10:00 AM" ? "contained" : "outlined"}>
                      10:00 AM
                    </Button>
                    <Button onClick={() => handleTimeChange({ target: { value: "1:00 PM" } })} variant={inputs.time === "1:00 PM" ? "contained" : "outlined"}>
                      1:00 PM
                    </Button>
                    <Button onClick={() => handleTimeChange({ target: { value: "4:00 PM" } })} variant={inputs.time === "4:00 PM" ? "contained" : "outlined"}>
                      4:00 PM
                    </Button>
                    <Button onClick={() => handleTimeChange({ target: { value: "7:00 PM" } })} variant={inputs.time === "7:00 PM" ? "contained" : "outlined"}>
                      7:00 PM
                    </Button>
                  </Box>

                  {errorMessage && (
                    <Typography variant="body2" color="red" marginTop={1}>
                      {errorMessage}
                    </Typography>
                  )}

                  <Typography variant="h6" marginTop={2}>
                    Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
                  </Typography>
                  <Typography variant="h6" marginTop={2}>
                    Total Price: Rs. {calculatePrice()}
                  </Typography>

                  <Button type="submit" sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}>
                    Proceed to Confirmation
                  </Button>
                </Box>
              </form>

              <SeatSelection
                onSeatSelect={handleSeatSelection}
                bookedSeats={bookedSeats}
                totalSeats={totalSeats}
              />

              <Box
                sx={{
                  height: "40px",
                  width: "90%",
                  backgroundColor: "#666",
                  marginTop: 2,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Typography variant="body1" fontWeight="bold" color="white">
                  Screen
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
