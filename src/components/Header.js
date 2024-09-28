import {
  AppBar,
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import { getAllMovies } from "../api/api";
import { Link } from "react-router-dom";

const dummyArray = ["Movie", "Movie1", "Movie2"];
const Header = () => {
  const [value, setValue] = useState(0);
  // const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <AppBar position="sticky"  sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
          <MovieIcon />
        </Box>
        <Box width={"20%"} margin={"auto"}>
          <Autocomplete
            sx={{ input: { color: "white" } }}
            id="free-solo-demo"
            freeSolo
            options={movies && movies.map((movie) => movie.Title)}
            renderInput={(params) => (
              <TextField
                variant="standard"
                {...params}
                placeholder="Search Across Movie"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            {/* <Tab label="" LinkComponent={Link} to="/"/> */}
            <Tab label="Movies" LinkComponent={Link} to="/movies"/>
            <Tab label="Admin" LinkComponent={Link} to="/admin" />
            <Tab label="Auth" LinkComponent={Link} to="/auth" />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
