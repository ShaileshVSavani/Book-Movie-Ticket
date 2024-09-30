// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { getMovieDetails } from '../../api/api';

// const Booking = () => {

//     const [movie, setMovie] = useState()
//     const id = useParams().id;
//     console.log("Booking Id:", id);

//     useEffect(() => {
//         getMovieDetails(id).then((res) => setMovie(res)).catch((err) =>console.log(err));
//     }, [id]);
//     console.log("Movie", movie)

//   return (
//     <div>Booking</div>
//   )
// }

// export default Booking

//======

import { Button, FormLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, newBooking } from "../../api/api";

const Booking = () => {
  const [movie, setMovie] = useState([]);
  const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
  const id = useParams().id;
  console.log(id);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    newBooking({ ...inputs, movie: movie.imdbID })
      .then((res) => console.log(res))
          .catch((err) => console.log(err));
      
      console.log("Movie", movie)
  };
  return (
      <div >
      {movie && (
        <Fragment >
          <Typography
            padding={3}
            fontFamily="fantasy"
            variant="h4"
            textAlign={"center"}
          >
            Book Tickets Of Movie: {movie.Title}
          </Typography>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              display={"flex"}
              justifyContent={"column"}
              flexDirection="column"
              padding={4}
              width="50%"
            //   marginRight={""}
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
                  Actors:
                  {/* {movie.actors.map((actor) => " " + actor + " ")} */}
                  {movie.Actors}
                </Typography>
                <Typography fontWeight={"normal"} marginTop={1}>
                  <Typography fontWeight={"bold"}>Description:</Typography> {movie.Plot}
                </Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  {/* Release Date: {new Date(movie.releaseDate).toDateString()} */}
                  Release Date: {movie.Released}
                </Typography>
              </Box>
            </Box>
            <Box width={"50%"} paddingTop={3}>
              <form onSubmit={handleSubmit}>
                <Box
                  padding={5}
                  margin={"auto"}
                  display="flex"
                  flexDirection={"column"}
                >
                  <FormLabel>Seat Number</FormLabel>
                  <TextField
                    name="seatNumber"
                    value={inputs.seatNumber}
                    onChange={handleChange}
                    type={"number"}
                    margin="normal"
                    variant="standard"
                  />
                  <FormLabel>Booking Date</FormLabel>
                  <TextField
                    name="date"
                    type={"date"}
                    margin="normal"
                    variant="standard"
                    value={inputs.date}
                    onChange={handleChange}
                  />
                  <Button type="submit" sx={{ mt: 3 }}>
                    Book Now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
