// import React from "react";
// import AuthForm from "./AuthForm";
// import { sendUserAuthRequest } from "../../api/api";
// import { useDispatch } from "react-redux";
// import {  userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";

// const User = () => {
//   const dispatch = useDispatch()
//   const { navigate } = useNavigate();
//   const onResReceived = (data) => {
//     console.log(data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.id);
//     navigate("/");
//   };

//   const getData = (data) => {
//     console.log("User", data);
//     sendUserAuthRequest(data.formData, data.signup)
//       // .then((res) => console.log("Auth", res))
//       .then(onResReceived)
//     .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} />
//     </div>
//   );
// };

// export default User;



//====


// import React from "react";
// import AuthForm from "./AuthForm";
// // import { SignUpWithEmail, SingInWithEmail } from "../../config/firebase"; // Import Firebase methods
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SingInWithEmail } from "../../config";

// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Correct usage for navigate

//   // Function to handle response from Firebase and dispatch actions
//   const onResReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     navigate("/"); // Navigate to home
//   };

//   // Function to handle login/signup form submission
//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       // Handle Signup with Firebase
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onResReceived) // Process successful response
//         .catch((err) => console.log("Signup Error:", err));
//     } else {
//       // Handle Login with Firebase
//       SingInWithEmail(formData.email, formData.password)
//         .then(onResReceived) // Process successful response
//         .catch((err) => console.log("Login Error:", err));
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} />
//     </div>
//   );
// };

// export default User;



//----


import React from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Corrected SignInWithEmail

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResReceived = (data) => {
    console.log("User data:", data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
    navigate("/"); // Navigate to home
  };

  const getData = (data) => {
    const { formData, signup } = data;

    if (signup) {
      // Handle Signup with Firebase
      SignUpWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => console.log("Signup Error:", err));
    } else {
      // Handle Login with Firebase
      SignInWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => console.log("Login Error:", err));
    }
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default User;
