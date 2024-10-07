
// import React, { useState, useEffect, Fragment } from "react";
// import { Button, Typography, Box, Paper } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { getMovieDetails } from "../../api/api";
// import SeatSelection from "./SeatSelection";
// import dayjs from "dayjs";

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
//     if (inputs.date && inputs.time) {
//       // Retrieve all bookings for the specific movie, date, and time
//       const allBookings = JSON.parse(localStorage.getItem(`bookings`)) || [];
//       const movieBooking = allBookings.filter(
//         (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
//       );

//       const allBookedSeats = movieBooking.reduce((acc, booking) => {
//         return [...acc, ...booking.seatNumbers];
//       }, []);

//       setBookedSeats(allBookedSeats);
//     } else {
//       setBookedSeats([]);
//     }
//   }, [id, inputs.date, inputs.time]);

//   const handleDateClick = (selectedDate) => {
//     setInputs((prevState) => ({ ...prevState, date: selectedDate }));
//   };

//   const handleTimeChange = (e) => {
//     const { value } = e.target;
//     setInputs((prevState) => ({ ...prevState, time: value }));
//   };

//   const handleSeatSelection = (selectedSeats) => {
//     setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
//   };

//   const calculatePrice = () => {
//     const seatPrice = 190.0;
//     return inputs.seatNumbers.length * seatPrice;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const totalPrice = calculatePrice();

//     if (!userId) {
//       setErrorMessage("User not logged in");
//       return;
//     }

//     const savedBookings = JSON.parse(localStorage.getItem(`bookings`)) || [];
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

//     // Update existing booking if found, or create a new booking
//     if (existingBooking) {
//       existingBooking.seatNumbers = [...new Set([...existingBooking.seatNumbers, ...inputs.seatNumbers])];
//     } else {
//       const newBooking = {
//         bookingId: new Date().getTime(), // Unique booking ID based on timestamp
//         userId: userId,
//         movieId: id,
//         movieTitle: movie.Title,
//         date: inputs.date,
//         time: inputs.time,
//         seatNumbers: inputs.seatNumbers,
//         totalPrice,
//       };
//       savedBookings.push(newBooking);
//     }

//     // Save the updated bookings back to localStorage under the global key
//     localStorage.setItem(`bookings`, JSON.stringify(savedBookings));

//     // Clear the error message and navigate to confirmation page
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

//   const getNext7Days = () => {
//     const daysArray = [];
//     for (let i = 0; i < 7; i++) {
//       const dateObj = dayjs().add(i, 'day');
//       const formattedDate = dateObj.format('ddd, D MMM');
//       const dateValue = dateObj.format('YYYY-MM-DD');
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
//                   <Typography variant="h6" marginBottom={2}>
//                     Select Booking Date
//                   </Typography>

//                   <Box display="flex" gap={2} flexWrap="wrap">
//                     {getNext7Days().map((date) => (
//                       <Button
//                         key={date.value}
//                         onClick={() => handleDateClick(date.value)}
//                         variant={inputs.date === date.value ? "contained" : "outlined"}
//                         sx={{
//                           backgroundColor: inputs.date === date.value ? "#1976d2" : "",
//                           color: inputs.date === date.value ? "white" : "black",
//                           width: "123px",
//                         }}
//                       >
//                         {date.label}
//                       </Button>
//                     ))}
//                   </Box>

//                   <Typography variant="h6" marginTop={2}>
//                     Select Show Time
//                   </Typography>
//                   <Box display="flex" justifyContent="space-between">
//                     {["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"].map((time) => (
//                       <Button
//                         key={time}
//                         onClick={() => handleTimeChange({ target: { value: time } })}
//                         variant={inputs.time === time ? "contained" : "outlined"}
//                       >
//                         {time}
//                       </Button>
//                     ))}
//                   </Box>

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
//                 <Typography color={"white"}>Available Seats</Typography>
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



import React, { useState, useEffect, Fragment } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import SeatSelection from "./SeatSelection";
import dayjs from "dayjs";

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
    if (inputs.date && inputs.time) {
      const allBookings = JSON.parse(localStorage.getItem(`bookings`)) || [];
      const movieBooking = allBookings.filter(
        (booking) => booking.movieId === id && booking.date === inputs.date && booking.time === inputs.time
      );

      const allBookedSeats = movieBooking.reduce((acc, booking) => {
        return [...acc, ...booking.seatNumbers];
      }, []);

      setBookedSeats(allBookedSeats);
    } else {
      setBookedSeats([]);
    }
  }, [id, inputs.date, inputs.time]);

  const handleDateClick = (selectedDate) => {
    setInputs((prevState) => ({ ...prevState, date: selectedDate }));
  };

  const handleTimeChange = (e) => {
    const { value } = e.target;
    setInputs((prevState) => ({ ...prevState, time: value }));
  };

  const handleSeatSelection = (selectedSeats) => {
    setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
  };

  const calculatePrice = () => {
    const seatPrice = 190.0;
    return inputs.seatNumbers.length * seatPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculatePrice();

    if (!userId) {
      setErrorMessage("User not logged in");
      return;
    }

    const savedBookings = JSON.parse(localStorage.getItem(`bookings`)) || [];
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
      existingBooking.seatNumbers = [...new Set([...existingBooking.seatNumbers, ...inputs.seatNumbers])];
    } else {
      const newBooking = {
        bookingId: new Date().getTime(),
        userId: userId,
        movieId: id,
        movieTitle: movie.Title,
        date: inputs.date,
        time: inputs.time,
        seatNumbers: inputs.seatNumbers,
        totalPrice,
      };
      savedBookings.push(newBooking);
    }

    localStorage.setItem(`bookings`, JSON.stringify(savedBookings));
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

  const getNext7Days = () => {
    const daysArray = [];
    for (let i = 0; i < 7; i++) {
      const dateObj = dayjs().add(i, 'day');
      const formattedDate = dateObj.format('ddd, D MMM');
      const dateValue = dateObj.format('YYYY-MM-DD');
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
                height="auto"
                src={movie.Poster}
                alt={movie.Title}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
              <Box marginTop={3} padding={2}>
                <Typography variant="body1" fontWeight="bold">Description:</Typography>
                <Typography>{movie.description}</Typography>
                <Typography fontWeight="bold" marginTop={1}>
                  Actors: {movie.Actors}
                </Typography>
                <Typography marginTop={1}>
                  <Typography fontWeight="bold">Plot:</Typography> {movie.Plot}
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
                          width: { xs: "100px", sm: "123px" },
                          flexGrow: 1,
                        }}
                      >
                        {date.label}
                      </Button>
                    ))}
                  </Box>

                  <Typography variant="h6" marginTop={2}>
                    Select Show Time
                  </Typography>
                  <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                    {["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"].map((time) => (
                      <Button
                        key={time}
                        onClick={() => handleTimeChange({ target: { value: time } })}
                        variant={inputs.time === time ? "contained" : "outlined"}
                        sx={{ flexGrow: 1, margin: "5px" }}
                      >
                        {time}
                      </Button>
                    ))}
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
                <Typography color={"white"}>Available Seats</Typography>
              </Box>
            </Paper>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
