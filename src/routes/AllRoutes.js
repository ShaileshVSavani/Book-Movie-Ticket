import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Admin from "../components/Auth/Admin";

import Movies from "../components/Movies/Movies";
import Booking from "../components/Bookings/Booking";
import UserProfile from "../components/Profiles/UserProfile";
import AddMovie from "../components/Movies/AddMovie";
import AdminProfile from "../components/Profiles/AdminProfile";
import User from "../components/Auth/User";

const AllRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<User />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/addMovie" element={<AddMovie />} />
      <Route path="/user-admin" element={<AdminProfile />} />
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
  );
};

export default AllRoutes;
