

import {
  AppBar,
  Autocomplete,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import { getAllMovies } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "../redux/store";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };

  const handleSearch = (e, val) => {
    if (!val) return;
    const movie = movies.find((m) => m.Title === val);

    if (movie) {
      navigate(`/movieDetail/${movie.id}`);
    } else {
      console.log("Movie not found");
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        {/* Use Grid to handle responsiveness */}
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo Section */}
          <Grid item xs={12} sm={2} display="flex" justifyContent={isMobile ? "left" : "flex-start"}>
            <IconButton LinkComponent={Link} to="/">
              <MovieIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>

          {/* Search Bar */}
          <Grid item xs={12} sm={4} display="flex" justifyContent="center" mt={isMobile ? 1 : 0}>
            <Autocomplete
              onChange={handleSearch}
              sx={{
                width: isMobile ? "100%" : "70%",
                input: { color: "white" },
                "& .MuiAutocomplete-endAdornment": { color: "white" },
                "& .MuiSvgIcon-root": { color: "white" },
              }}
              options={movies && movies.map((movie) => movie.Title)}
              renderInput={(params) => (
                <TextField
                  variant="standard"
                  {...params}
                  placeholder="Search Movies"
                  sx={{ width: "100%" }}
                />
              )}
            />
          </Grid>

          {/* Tabs Section */}
          <Grid item xs={12} sm={6} display="flex" justifyContent={isMobile ? "center" : "flex-end"}>
            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : "off"}
            >
              <Tab LinkComponent={Link} to="/movies" label="Movies" />
              {!isAdminLoggedIn && !isUserLoggedIn && (
                <>
                  <Tab label="Admin" LinkComponent={Link} to="/admin" />
                  <Tab label="User" LinkComponent={Link} to="/user" />
                </>
              )}
              {isUserLoggedIn && (
                <>
                  <Tab label="Profile" LinkComponent={Link} to="/userProfile" />
                  <Tab
                    label="Logout"
                    onClick={() => logout(false)}
                    LinkComponent={Link}
                    to="/"
                  />
                </>
              )}
              {isAdminLoggedIn && (
                <>
                  <Tab label="Add Movie" LinkComponent={Link} to="/addMovie" />
                  <Tab label="Profile" LinkComponent={Link} to="/user-admin" />
                  <Tab
                    label="Logout"
                    onClick={() => logout(true)}
                    LinkComponent={Link}
                    to="/"
                  />
                </>
              )}
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
