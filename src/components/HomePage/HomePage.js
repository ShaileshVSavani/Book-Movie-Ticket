
// import { Box, Button, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";



// import { getAllMovies } from "../../api/api";
// import MovieItem from "../Movies/MoviesItem";

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     getAllMovies()
//       .then((data) => setMovies(data))
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
//       <Box margin={"auto"} width="80%" height={"80vh"} padding={2}>
//         <img
//           // src="https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg"
//           src="https://rukminim2.flixcart.com/image/850/1000/kz5vwy80/poster/0/h/k/medium-titanic-movie-matte-finish-poster-butcute11852-original-imagb8cen3fmffau.jpeg?q=90&crop=false"
//           alt="Brahmastra"
//           width={"100%"}
//           height={"100%"}
//         />
//       </Box>
//       <Box padding={5} margin="auto">
//         <Typography variant="h4" textAlign={"center"}>
//           Latest Releases
//         </Typography>
//       </Box>
//       <Box
//         margin={"auto"}
//         display="flex"
//         width="90%"
//         justifyContent={"center"}
//         alignItems="center"
//         flexWrap="wrap"
//       >
//         {movies &&
//           movies
//             .slice(0, 4)
//             .map((movie, index) => (
//               <MovieItem
//                 id={movie.id}
//                 Title={movie.Title}
//                 Poster={movie.Poster}
//                 Released={movie.Released}
//                 key={index}
//               />
//             ))}
//       </Box>
//       <Box display="flex" padding={5} margin="auto">
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           variant="outlined"
//           sx={{ margin: "auto", color: "#2b2d42" }}
//         >
//           View All Movies
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;


//======



// import { Box, Button, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllMovies } from "../../api/api";
// import MovieItem from "../Movies/MoviesItem";

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     getAllMovies()
//       .then((data) => setMovies(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width="100%" height="100%" margin="auto" marginTop={2}>
//       {/* Hero Section */}
//       <Box
//         position="relative"
//         width="100%"
//         height={{ xs: "60vh", md: "80vh" }} // Responsive height
//         margin="auto"
//         sx={{
//           backgroundImage:
//             "url('https://rukminim2.flixcart.com/image/850/1000/kz5vwy80/poster/0/h/k/medium-titanic-movie-matte-finish-poster-butcute11852-original-imagb8cen3fmffau.jpeg?q=90&crop=false')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           borderRadius: "10px",
//         }}
//       >
//         <Box
//           position="absolute"
//           top={0}
//           left={0}
//           width="100%"
//           height="100%"
//           bgcolor="rgba(0, 0, 0, 0.5)" // Dark overlay
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Typography
//             variant="h2"
//             color="white"
//             fontWeight="bold"
//             sx={{
//               fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
//               textAlign: "center",
//               paddingX: { xs: 2, md: 4 },
//             }}
//           >
//             Experience the Magic of Cinema
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             sx={{
//               marginTop: 4,
//               paddingX: 4,
//               paddingY: 1.5,
//               fontSize: "1.2rem",
//               fontWeight: "bold",
//             }}
//             LinkComponent={Link}
//             to="/movies"
//           >
//             Book Tickets Now
//           </Button>
//         </Box>
//       </Box>

//       {/* Latest Releases Section */}
//       <Box padding={5} margin="auto" textAlign="center">
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           color="textPrimary"
//           sx={{
//             marginBottom: 3,
//             fontSize: { xs: "1.5rem", md: "2.5rem" }, // Responsive typography
//           }}
//         >
//           Latest Releases
//         </Typography>
//       </Box>

//       {/* Movie Grid */}
//       <Box
//         margin="auto"
//         display="flex"
//         width="90%"
//         justifyContent="center"
//         alignItems="center"
//         flexWrap="wrap"
//         sx={{ gap: 3 }}
//       >
//         {movies &&
//           movies.slice(0, 4).map((movie, index) => (
//             <MovieItem
//               id={movie.id}
//               Title={movie.Title}
//               Poster={movie.Poster}
//               Released={movie.Released}
//               key={index}
//               sx={{
//                 flex: "1 1 200px", // Flex items for responsiveness
//                 maxWidth: { xs: "45%", sm: "30%", md: "20%" }, // Control size per screen size
//               }}
//             />
//           ))}
//       </Box>

//       {/* View All Movies Button */}
//       <Box display="flex" padding={5} margin="auto" justifyContent="center">
//         <Button
//           LinkComponent={Link}
//           to="/movies"
//           variant="outlined"
//           sx={{
//             paddingX: 4,
//             paddingY: 1.5,
//             color: "#900C3F",
//             fontWeight: "bold",
//             fontSize: "1.2rem",
//             borderColor: "#900C3F",
//             "&:hover": {
//               backgroundColor: "#900C3F",
//               color: "white",
//               borderColor: "#900C3F",
//             },
//           }}
//         >
//           View All Movies
//         </Button>
//       </Box>

//       {/* Footer Section (Optional) */}
//       <Box
//         sx={{
//           backgroundColor: "#2b2d42",
//           color: "white",
//           padding: "2rem 0",
//           textAlign: "center",
//           marginTop: 5,
//         }}
//       >
//         <Typography variant="h6" gutterBottom>
//           Movie Booking App © 2024
//         </Typography>
//         <Typography variant="body2" color="grey.500">
//           All rights reserved. Terms and Conditions | Privacy Policy
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;


///=======================


import { Box, Button, Typography, CircularProgress, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/api";
import MovieItem from "../Movies/MoviesItem";
import { useTheme } from "@emotion/react";

const HomePage = () => {



  const [movies, setMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for movies

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is small

  useEffect(() => {



    const fetchMovies = async () => {
      try {
        setLoading(true); // Start loading
        const data = await getAllMovies();
        setMovies(data.filter(movie => new Date(movie.Released) <= new Date())); // Current movies
        setUpcomingMovies(data.filter(movie => new Date(movie.Released) > new Date())); // Upcoming movies
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box width="100%" height="100%" margin="auto" marginTop={2}>
      {/* Hero Section */}
      <Box
        position="relative"
        width="100%"
        height={{ xs: "60vh", md: "80vh" }}
        margin="auto"
        sx={{
          backgroundImage:
            "url('https://rukminim2.flixcart.com/image/850/1000/kz5vwy80/poster/0/h/k/medium-titanic-movie-matte-finish-poster-butcute11852-original-imagb8cen3fmffau.jpeg?q=90&crop=false')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="rgba(0, 0, 0, 0.5)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              textAlign: "center",
              paddingX: { xs: 2, md: 4 },
            }}
          >
            Experience the Magic of Cinema
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginTop: 4,
              paddingX: 4,
              paddingY: 1.5,
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            LinkComponent={Link}
            to="/movies"
          >
            Book Tickets Now
          </Button>
        </Box>
      </Box>

      {/* Latest Releases Section */}
      <Box padding={5} margin="auto" textAlign="center">
        <Typography
          variant="h4"
          fontWeight="bold"
          color="textPrimary"
          sx={{
            marginBottom: 3,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Latest Releases
        </Typography>
      </Box>

      {/* Movie Grid */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          margin="auto"
          display="flex"
          width="90%"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: 3 }}
        >
          {movies.slice(0, 4).map((movie, index) => (
            <MovieItem
              id={movie.id}
              Title={movie.Title}
              Poster={movie.Poster}
              Released={movie.Released}
              key={index}
              sx={{
                flex: "1 1 200px",
                maxWidth: { xs: "45%", sm: "30%", md: "20%" },
              }}
            />
          ))}
        </Box>
      )}

      {/* View All Movies Button */}
      <Box display="flex" padding={5} margin="auto" justifyContent="center">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            color: "#900C3F",
            fontWeight: "bold",
            fontSize: "1.2rem",
            borderColor: "#900C3F",
            "&:hover": {
              backgroundColor: "#900C3F",
              color: "white",
              borderColor: "#900C3F",
            },
          }}
        >
          View All Movies
        </Button>
      </Box>

      {/* Upcoming Movies Section */}
      {upcomingMovies.length > 0 && (
        <>
          <Box padding={5} margin="auto" textAlign="center">
            <Typography
              variant="h4"
              fontWeight="bold"
              color="textPrimary"
              sx={{
                marginBottom: 3,
                fontSize: { xs: "1.5rem", md: "2.5rem" },
              }}
            >
              Upcoming Movies
            </Typography>
          </Box>

          <Box
            margin="auto"
            display="flex"
            width="90%"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={{ gap: 3 }}
          >
            {upcomingMovies.slice(0, 4).map((movie, index) => (
              <MovieItem
                id={movie.id}
                Title={movie.Title}
                Poster={movie.Poster}
                Released={movie.Released}
                key={index}
                sx={{
                  flex: "1 1 200px",
                  maxWidth: { xs: "45%", sm: "30%", md: "20%" },
                }}
              />
            ))}
          </Box>
        </>
      )}

    {/* Featured Promotions Section */}
    <Box
        marginTop={10}
        padding={isMobile ? 3 : 5} // Adjust padding for mobile
        bgcolor="#f5f5f5"
        textAlign="center"
        width="100%"
      >
        <Typography
          variant={isMobile ? "h5" : "h4"} // Change font size for mobile
          fontWeight="bold"
          color="textPrimary"
          sx={{ marginBottom: 2 }}
        >
          Special Offers
        </Typography>
        <Typography
          variant={isMobile ? "body2" : "body1"} // Change font size for mobile
          color="textSecondary"
        >
          Get a 20% discount on movie tickets when you book through our app.
          <br /> Enjoy exclusive deals on snacks and drinks!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            marginTop: 3,
            paddingX: 4,
            paddingY: 1.5,
            fontSize: isMobile ? "1rem" : "1.2rem", // Adjust button font size for mobile
            fontWeight: "bold",
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#2b2d42",
          color: "white",
          padding: isMobile ? "1rem 0" : "2rem 0", // Adjust padding for mobile
          textAlign: "center",
          marginTop: 5,
        }}
      >
        <Typography variant={isMobile ? "subtitle1" : "h6"} gutterBottom>
          Movie Booking App © 2024
        </Typography>
        <Typography variant={isMobile ? "body2" : "body2"} color="grey.500">
          All rights reserved. Terms and Conditions | Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
