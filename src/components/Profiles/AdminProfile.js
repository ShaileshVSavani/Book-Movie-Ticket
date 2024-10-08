

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { toast } from "react-toastify";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [addedMovies, setAddedMovies] = useState([]);

  useEffect(() => {
    const adminId = localStorage.getItem("adminId");

    if (adminId) {
      // Simulating fetching admin data based on adminId
      const adminData = {
        email: "admin@example.com", // This can be replaced with an actual API call
      };
      setAdmin(adminData);

      // Fetching added movies for the specific admin
      const storedMovies = JSON.parse(localStorage.getItem(`addedMovies_${adminId}`)) || [];
      const uniqueMovies = removeDuplicateMovies(storedMovies);
      setAddedMovies(uniqueMovies);
    } else {
      toast.error("Admin ID is undefined. Cannot fetch movies.");
    }
  }, []);

  return (
    <Box width="100%" display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        width={{ xs: '100%', md: '30%' }} // Responsive width for smaller screens
      >
        <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
        <Typography
          padding={1}
          width="200px"
          textAlign={"center"}
          border="1px solid #ccc"
          borderRadius={10}
        >
          Email: {admin && admin.email}
        </Typography>
      </Box>
      <Box 
        width={{ xs: '100%', md: '70%' }} // Responsive width for smaller screens
        display="flex" 
        flexDirection={"column"}
      >
        <Typography
          variant="h3"
          fontFamily={"verdana"}
          textAlign="center"
          padding={2}
          fontSize={{ xs: '2rem', md: '2.5rem' }} // Responsive font size
        >
          Added Movies
        </Typography>

        <Box margin="auto" display="flex" flexDirection={"column"} width={{ xs: '90%', md: '80%' }}>
          <List>
            {addedMovies.map((movie, index) => (
              <ListItem
                sx={{
                  bgcolor: "#00d386",
                  color: "white",
                  textAlign: "center",
                  margin: 1,
                }}
                key={index}
              >
                <ListItemText
                  sx={{ margin: 1, width: "100px", textAlign: "left" }}
                >
                  Movie: {movie.Title}
                </ListItemText>
                <ListItemText
                  sx={{ margin: 1, width: "100px", textAlign: "left" }}
                >
                  Releasing: {new Date(movie.Released).toDateString()}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

// Helper function to remove duplicate movies based on title (or any other criteria you prefer)
const removeDuplicateMovies = (movies) => {
  const uniqueMovies = Array.from(new Map(movies.map(movie => [movie.Title, movie])).values());
  return uniqueMovies;
};

export default AdminProfile;
