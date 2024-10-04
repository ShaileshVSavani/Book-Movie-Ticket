

import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config"; // Use GoogleAuth

const User = () => {
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the "from" state from location to determine the page to redirect to after login
  const from = location.state?.from || "/"; // Default to home page if "from" is not provided

  const handleLoginSuccess = () => {
    // After successful login, navigate to the intended page or home if not provided
    navigate(from); 
  };

  const onDataReceived = (data) => {
    console.log("User data:", data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
    handleLoginSuccess(); // Call this to redirect after login
  };

  const getData = (data) => {
    const { formData, signup, googleLogin } = data;

    if (googleLogin) {
      // Handle Google Login
      GoogleAuth() // Use the correct method for Google login
        .then(onDataReceived)  // Ensure we handle successful login and redirect
        .catch((err) => setErrorMessage(err.message)); // Capture and display error message
    } else if (signup) {
      // Handle Signup with Firebase (email/password)
      SignUpWithEmail(formData.email, formData.password)
        .then(onDataReceived)
        .catch((err) => setErrorMessage(err.message)); // Capture and display error message
    } else {
      // Handle Login with Firebase (email/password)
      SignInWithEmail(formData.email, formData.password)
        .then((res) => {
          if (res.error) {
            setErrorMessage(res.error); // Display error if any
          } else {
            onDataReceived(res); // Handle successful login and redirect
          }
        })
        .catch((err) => setErrorMessage(err.message)); // Capture and display error message
    }
  };

  return (
    <div>
      {/* Pass the error message to the AuthForm */}
      <AuthForm onSubmit={getData} isAdmin={false} errorMessage={errorMessage} />
    </div>
  );
};

export default User;
