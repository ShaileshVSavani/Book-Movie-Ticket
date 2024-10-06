

import React, { useState, useEffect, Fragment } from "react";
import { Button, FormLabel, TextField, Typography, Box, MenuItem, Select, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api/api";
import SeatSelection from "./SeatSelection";

const Booking = () => {
  const [movie, setMovie] = useState({});
  const [inputs, setInputs] = useState({ seatNumbers: [], date: "", time: "" });
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSeatSelection = (selectedSeats) => {
    setInputs((prevState) => ({ ...prevState, seatNumbers: selectedSeats }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = calculatePrice();

    // Navigate to the payment or confirmation page with all details
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
            {/* Movie Details */}
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

            {/* Booking Form */}
            <Paper elevation={3} sx={{ padding: 3, width: { xs: "100%", md: "45%" }, borderRadius: 2 }}>
              <form onSubmit={handleSubmit}>
                <Box padding={3} margin="auto" display="flex" flexDirection="column">
                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    name="date"
                    type="date"
                    margin="normal"
                    variant="standard"
                    value={inputs.date}
                    onChange={handleChange}
                    required
                  />

                  {/* Show Time Selection */}
                  <FormLabel>Show Time</FormLabel>
                  <Select
                    name="time"
                    value={inputs.time}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                    required
                  >
                    <MenuItem value="" disabled>
                      Select Show Time
                    </MenuItem>
                    <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                    <MenuItem value="1:00 PM">1:00 PM</MenuItem>
                    <MenuItem value="4:00 PM">4:00 PM</MenuItem>
                    <MenuItem value="7:00 PM">7:00 PM</MenuItem>
                  </Select>

                  {/* Selected Seats and Total Price */}
                  <Typography variant="h6" marginTop={2}>
                    Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
                  </Typography>
                  <Typography variant="h6" marginTop={2}>
                    Total Price: Rs. {calculatePrice()}
                  </Typography>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    sx={{ mt: 3, backgroundColor: "#1976d2", color: "white" }}
                  >
                    Proceed to Confirmation
                  </Button>
                </Box>
              </form>

              {/* Seat Selection Component */}
              <SeatSelection onSeatSelect={handleSeatSelection} />
              {/* Screen Indicator */}
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

