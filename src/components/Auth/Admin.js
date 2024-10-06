
// import React from "react";
// import AuthForm from "./AuthForm";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Firebase methods
// import { adminActions } from "../../redux/store";

// const Admin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onResReceived = (data) => {
//     console.log("Admin data:", data);
//     dispatch(adminActions.login());
//     localStorage.setItem("adminId", data.user.uid); // Store Firebase UID as adminId
//     navigate("/"); // Navigate to the home page
//   };

//   const getData = (data) => {
//     console.log("Admin", data);
//     const { formData, signup } = data;

//     if (signup) {
//       // Admin Signup
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => console.log("Signup Error:", err));
//     } else {
//       // Admin Login
//       SignInWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => console.log("Login Error:", err));
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={true} />
//     </div>
//   );
// };

// export default Admin;



//----------------------



// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Firebase methods
// import { adminActions } from "../../redux/store";

// const Admin = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onResReceived = (data) => {
//     dispatch(adminActions.login());
//     localStorage.setItem("adminId", data.user.uid); // Store Firebase UID as adminId
//     navigate("/"); // Navigate to the home page
//   };

//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       // Admin Signup
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => setErrorMessage(err.message)); // Set error message on failure
//     } else {
//       // Admin Login
//       SignInWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => setErrorMessage(err.message)); // Set error message on failure
//     }
//   };

//   return (
//     <div>
//       <AuthForm
//         onSubmit={getData}
//         isAdmin={true}
//         errorMessage={errorMessage} // Pass errorMessage to AuthForm
//       />
//     </div>
//   );
// };

// export default Admin;



//---------------



// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { SignUpWithEmail, SignInWithEmail } from "../../config";
// import { adminActions } from "../../redux/store";
// import { toast } from "react-toastify"; // Import toast

// const Admin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onResReceived = (data) => {
//     dispatch(adminActions.login());
//     localStorage.setItem("adminId", data.user.uid); // Store Firebase UID as adminId
//     navigate("/"); // Navigate to the home page
//   };

//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => {
//           toast.error(`Signup Error: ${err.message}`); // Show error with Toastify
//         });
//     } else {
//       SignInWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => {
//           toast.error(`Login Error: ${err.message}`); // Show error with Toastify
//         });
//     }
//   };

//   return (
//     <div>

//       <AuthForm onSubmit={getData} isAdmin={true} />
//     </div>
//   );
// };

// export default Admin;



///=====


import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUpWithEmail, SignInWithEmail } from "../../config"; 
import { adminActions } from "../../redux/store";
import { toast } from "react-toastify"; // Import toast

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResReceived = (data) => {
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.user.uid); // Store Firebase UID as adminId
    toast.success("Login successful!", { autoClose: 1500 }); // Show success notification with custom duration (3 seconds)
    setTimeout(() => {
      navigate("/"); // Navigate to the home page
     }, 2500)
  };

  const getData = (data) => {
    const { formData, signup } = data;

    if (signup) {
      SignUpWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => {
          toast.error(`Signup Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration (5 seconds)
        });
    } else {
      SignInWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => {
          toast.error(`Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration (5 seconds)
        });
    }
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;
