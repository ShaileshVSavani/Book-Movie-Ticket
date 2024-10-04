
import React from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Firebase methods
import { adminActions } from "../../redux/store";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResReceived = (data) => {
    console.log("Admin data:", data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.user.uid); // Store Firebase UID as adminId
    navigate("/"); // Navigate to the home page
  };

  const getData = (data) => {
    console.log("Admin", data);
    const { formData, signup } = data;

    if (signup) {
      // Admin Signup
      SignUpWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => console.log("Signup Error:", err));
    } else {
      // Admin Login
      SignInWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => console.log("Login Error:", err));
    }
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;