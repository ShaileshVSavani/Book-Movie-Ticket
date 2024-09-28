import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Admin from "../components/Admin/Admin";
import Auth from "../components/Auth/Auth";
import Movies from "../components/Movies/Movies";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
