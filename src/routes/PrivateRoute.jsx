
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  console.log("private route", isUserLoggedIn, isAdminLoggedIn);
  // const isAdmin = JSON.parse(localStorage.getItem('admin'));
  // const isLoggedIn = JSON.parse(localStorage.getItem('admin'))?.isAdmin;

  return (isUserLoggedIn || isAdminLoggedIn ) ? children : isUserLoggedIn ?<Navigate to="/user"/>:  <Navigate to="/admin"/>;
};

export default PrivateRoute;
