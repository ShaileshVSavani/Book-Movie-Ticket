

// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config"; // Use GoogleAuth

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Get the "from" state from location to determine the page to redirect to after login
//   const from = location.state?.from || "/"; // Default to home page if "from" is not provided

//   const handleLoginSuccess = () => {
//     // After successful login, navigate to the intended page or home if not provided
//     navigate(from);
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     handleLoginSuccess(); // Call this to redirect after login
//   };

//   const getData = (data) => {
//     const { formData, signup, googleLogin } = data;

//     if (googleLogin) {
//       // Handle Google Login
//       GoogleAuth() // Use the correct method for Google login
//         .then(onDataReceived)  // Ensure we handle successful login and redirect
//         .catch((err) => setErrorMessage(err.message)); // Capture and display error message
//     } else if (signup) {
//       // Handle Signup with Firebase (email/password)
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Capture and display error message
//     } else {
//       // Handle Login with Firebase (email/password)
//       SignInWithEmail(formData.email, formData.password)
//         .then((res) => {
//           if (res.error) {
//             setErrorMessage(res.error); // Display error if any
//           } else {
//             onDataReceived(res); // Handle successful login and redirect
//           }
//         })
//         .catch((err) => setErrorMessage(err.message)); // Capture and display error message
//     }
//   };

//   return (
//     <div>
//       {/* Pass the error message to the AuthForm */}
//       <AuthForm onSubmit={getData} isAdmin={false} errorMessage={errorMessage} />
//     </div>
//   );
// };

// export default User;





//--------------------



// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config"; // Use GoogleAuth

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   const from = location.state?.from || "/"; // Default to home page if "from" is not provided

//   const handleLoginSuccess = () => {
//     navigate(from);
//   };

//   const onDataReceived = (data) => {
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     handleLoginSuccess(); // Call this to redirect after login
//   };

//   const getData = (data) => {
//     const { formData, signup, googleLogin } = data;

//     if (googleLogin) {
//       GoogleAuth() // Handle Google Login
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Set error message on failure
//     } else if (signup) {
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Set error message on failure
//     } else {
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Set error message on failure
//     }
//   };

//   return (
//     <div>
//       <AuthForm
//         onSubmit={getData}
//         isAdmin={false}
//         errorMessage={errorMessage} // Pass errorMessage to AuthForm
//       />
//     </div>
//   );
// };

// export default User;



//---------------------------


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config";
// import { toast } from "react-toastify"; // Import toast

// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   const from = location.state?.from || "/";

//   const handleLoginSuccess = () => {
//     navigate(from);
//   };

//   const onDataReceived = (data) => {
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Store Firebase UID
//     handleLoginSuccess();
//   };

//   const getData = (data) => {
//     const { formData, signup, googleLogin } = data;

//     if (googleLogin) {
//       GoogleAuth()
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Google Login Error: ${err.message}`); // Show error with Toastify
//         });
//     } else if (signup) {
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Signup Error: ${err.message}`); // Show error with Toastify
//         });
//     } else {
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Login Error: ${err.message}`); // Show error with Toastify
//         });
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} />
//     </div>
//   );
// };

// export default User;



//================


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config";
// import { toast } from "react-toastify"; // Import toast
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   const from = location.state?.from || "/"; // Redirect path after login

//   const handleLoginSuccess = () => {
//     toast.success("Login successful!", { autoClose: 1500 }); // Show success notification
//     setTimeout(() => {
//       navigate(from); // Navigate after a short delay (1.5 seconds)
//     }, 2000); // Delay to allow notification to show before navigation
//   };

//   const onDataReceived = (data) => {
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Store Firebase UID
//     handleLoginSuccess(); // Show success and navigate
//   };

//   const getData = (data) => {
//     const { formData, signup, googleLogin } = data;

//     if (googleLogin) {
//       GoogleAuth()
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Google Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
//         });
//     } else if (signup) {
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Signup Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
//         });
//     } else {
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
//         });
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} />
//     </div>
//   );
// };

// export default User;



//======



// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config";
// import { toast } from "react-toastify"; // Import toast
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   const from = location.state?.from || "/"; // Redirect path after login

//   const handleLoginSuccess = () => {
//     toast.success("Login successful!", {
//       autoClose: 1500,  // Show for 1.5 seconds
//       onClose: () => navigate(from), // Navigate after the toast closes
//     });
//   };

//   const onDataReceived = (data) => {
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Store Firebase UID
//     handleLoginSuccess(); // Show success and navigate after toast
//   };

//   const getData = (data) => {
//     const { formData, signup, googleLogin } = data;

//     if (googleLogin) {
//       GoogleAuth()
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Google Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
//         });
//     } else if (signup) {
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Signup Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
//         });
//     } else {
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           toast.error(`Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
//         });
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} />
//     </div>
//   );
// };

// export default User;



//===================


import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config"; 
import { toast } from "react-toastify"; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from || "/"; // Redirect path after login

  const handleLoginSuccess = () => {
    toast.success("Login successful!", {
      autoClose: 1500,  // Show for 1.5 seconds
      onClose: () => navigate(from), // Navigate after the toast closes
    });
  };

  const handleSignupSuccess = () => {
    toast.success("Signup successful!", {
      autoClose: 1500,  // Show for 1.5 seconds
      onClose: () => navigate(from), // Navigate after the toast closes
    });
  };

  const onDataReceived = (data, signup) => {
    dispatch(userActions.login());
    localStorage.setItem("userId", data.user.uid); // Store Firebase UID
    
    if (signup) {
      handleSignupSuccess(); // Show signup success toast and navigate
    } else {
      handleLoginSuccess(); // Show login success toast and navigate
    }
  };

  const getData = (data) => {
    const { formData, signup, googleLogin } = data;

    if (googleLogin) {
      GoogleAuth()
        .then((result) => onDataReceived(result, false))
        .catch((err) => {
          toast.error(`Google Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
        });
    } else if (signup) {
      SignUpWithEmail(formData.email, formData.password)
        .then((result) => onDataReceived(result, true)) // Pass true for signup success
        .catch((err) => {
          toast.error(`Signup Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
        });
    } else {
      SignInWithEmail(formData.email, formData.password)
        .then((result) => onDataReceived(result, false)) // Pass false for login success
        .catch((err) => {
          toast.error(`Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
        });
    }
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default User;
