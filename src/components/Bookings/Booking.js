
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

  // Assuming this function is called to save a booking
const saveBooking = (movieTitle, date, time, seatNumbers, totalPrice) => {
  // Get existing bookings from localStorage or initialize an empty array
  const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

  // Create a new booking object
  const newBooking = {
    Title: movieTitle,
    date: date,
    time: time,
    seatNumbers: seatNumbers,
    totalPrice: totalPrice
  };

  // Add the new booking to the existing bookings array
  existingBookings.push(newBooking);

  // Save the updated bookings array back to localStorage
  localStorage.setItem('bookings', JSON.stringify(existingBookings));
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
