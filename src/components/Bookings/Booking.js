

import { Button, FormLabel, TextField, Typography, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, newBooking } from "../../api/api";
import SeatSelection from "./SeatSelection";

const Booking = () => {
  const [movie, setMovie] = useState([]);
  const [inputs, setInputs] = useState({
    seatNumbers: [],
    date: "",
    time: "", // Added time field
  });
  const id = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => setMovie(res))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSeatSelection = (selectedSeats) => {
    setInputs((prevState) => ({
      ...prevState,
      seatNumbers: selectedSeats,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   newBooking({ ...inputs, movie: movie.imdbID })
  //     .then((res) => {
  //       console.log(res);
  //       navigate("/payment"); // Redirect to payment page after successful booking
  //     })
  //     .catch((err) => console.log(err));
  // };

    const handleSubmit = (e) => {
    e.preventDefault();
   
        navigate("/payment"); // Redirect to payment page after successful booking
     ;
  };

  const calculatePrice = () => {
    const seatPrice = 190.00; // Assume each seat costs Rs. 190.00
    return inputs.seatNumbers.length * seatPrice;
  };

  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets For Movie: {movie.Title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"} flexDirection={{ xs: 'column', sm: 'row' }}>
            <Box
              display={"flex"}
              justifyContent={"column"}
              flexDirection="column"
              padding={4}
              width={{ xs: "90%", sm: "50%" }}
            >
              <img
                width="80%"
                height={"300px"}
                src={movie.Poster}
                alt={movie.Title}
              />
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Actors: {movie.Actors}
                </Typography>
                <Typography fontWeight={"normal"} marginTop={1}>
                  <Typography fontWeight={"bold"}>Description:</Typography> {movie.Plot}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Release Date: {movie.Released}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Price per Seat: Rs. 190.00
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  Category: {movie.Category || "N/A"}
                </Typography>
              </Box>
            </Box>
            <Box width={{ xs: "90%", sm: "50%" }} paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  margin={"auto"}
                  display="flex"
                  flexDirection={"column"}
                >
                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    name="date"
                    type={"date"}
                    margin="normal"
                    variant="standard"
                    value={inputs.date}
                    onChange={handleChange}
                    required
                  />

                  {/* Time Selection */}
                  <FormLabel>Show Time</FormLabel>
                  <Select
                    name="time"
                    value={inputs.time}
                    onChange={handleChange}
                    variant="standard"
                    margin="normal"
                    required
                  >
                    <MenuItem value="" disabled>Select Show Time</MenuItem>
                    <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                    <MenuItem value="1:00 PM">1:00 PM</MenuItem>
                    <MenuItem value="4:00 PM">4:00 PM</MenuItem>
                    <MenuItem value="7:00 PM">7:00 PM</MenuItem>
                  </Select>

                  <Typography variant="h6" marginTop={2}>
                    Selected Seats: {inputs.seatNumbers.join(", ") || "None"}
                  </Typography>
                  <Typography variant="h6" marginTop={2}>
                    Total Price: Rs. {calculatePrice()}
                  </Typography>
                  <Button type="submit" sx={{ mt: 3 }}>
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
          <Box
            sx={{
              height: "40px",
              width: "50%",
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
            <Typography variant="body1" fontWeight="bold" color="white">Screen</Typography>
          </Box>
          {/* Seat Selection */}
          <SeatSelection onSeatSelect={handleSeatSelection} />
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
