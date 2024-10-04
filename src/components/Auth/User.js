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


// import React from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Corrected SignInWithEmail

// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     navigate("/"); // Navigate to home
//   };

//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       // Handle Signup with Firebase
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => console.log("Signup Error:", err));
//     } else {
//       // Handle Login with Firebase
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
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



//-----


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Corrected SignInWithEmail

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const location = useLocation();
//   const from = location.state?.from || "/"; // Default to home if not provided

//   const handleLoginSuccess = () => {
//     // After successful login
//     navigate(from); // Redirect to the intended booking page
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     navigate("/"); // Navigate to home
//   };

 

//   const getData = (data) => {
//     const { formData, signup } = data;
  
//     if (signup) {
//       // Admin Signup
//       if (isAdmin) {
//         SignUpWithEmail(formData.email, formData.password, formData.name, true) // Pass isAdmin as true
//           .then(onDataReceived)
//           .catch((err) => console.log("Signup Error:", err));
//       } else {
//         // User Signup
//         SignUpWithEmail(formData.email, formData.password, formData.name, false) // Pass isAdmin as false
//           .then(onDataReceived)
//           .catch((err) => console.log("Signup Error:", err));
//       }
//     } else {
//       // Admin Login or User Login
//       SignInWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => console.log("Login Error:", err));
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



//---


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config";

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from || "/";

//   const handleLoginSuccess = () => {
//     navigate(from);
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid);
//     navigate("/");
//   };

//   const getData = (data) => {
//     const { formData, signup, isAdmin } = data;

//     if (signup) {
//       // Unified Signup Logic
//       SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin)
//         .then(onDataReceived)
//         .catch((err) => {
//           console.log("Signup Error:", err);
//           setErrorMessage(err.message || "An error occurred during signup.");
//         });
//     } else {
//       // Login Logic
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           console.log("Login Error:", err);
//           setErrorMessage(err.message || "An error occurred during login.");
//         });
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} errorMessage={errorMessage} />
//     </div>
//   );
// };

// export default User;



//-----



// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config";

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from || "/";

//   const handleLoginSuccess = () => {
//     navigate(from);
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid);
//     navigate("/");
//   };

//   const getData = (data) => {
//     const { formData, signup, isAdmin } = data;

//     if (signup) {
//       // Unified Signup Logic
//       SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin ? 'admin' : 'user')
//         .then(onDataReceived)
//         .catch((err) => {
//           console.log("Signup Error:", err);
//           setErrorMessage(err.message || "An error occurred during signup.");
//         });
//     } else {
//       // Login Logic
//       SignInWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => {
//           console.log("Login Error:", err);
//           setErrorMessage(err.message || "An error occurred during login.");
//         });
//     }
//   };

//   return (
//     <div>
//       <AuthForm onSubmit={getData} isAdmin={false} errorMessage={errorMessage} />
//     </div>
//   );
// };

// export default User;



//-----


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, checkUserByEmail } from "../../config";

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from || "/";

//   const handleLoginSuccess = () => {
//     navigate(from);
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid);
//     navigate("/");
//   };

//   const getData = async (data) => {
//     const { formData, signup, role } = data;
  
//     try {
//       if (signup) {
//         const existingUsers = await checkUserByEmail(formData.email);
//         if (existingUsers.length > 0) {
//           setErrorMessage("Email already in use. Please use a different email.");
//           return;
//         }
//         const userResponse = await SignUpWithEmail(formData.email, formData.password, formData.name, role);
//         onDataReceived(userResponse);
//       } else {
//         const userResponse = await SignInWithEmail(formData.email, formData.password, role);
//         if (!userResponse) return; // Handle login failure
//         onDataReceived(userResponse);
//       }
//     } catch (err) {
//       setErrorMessage(err.message || "An error occurred.");
//     }
//   };
  
  

//   return (
//     <div>
//       <AuthForm onSubmit={getData} errorMessage={errorMessage} />
//     </div>
//   );
// };

// export default User;


//-------------------


// import React from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config"; // Corrected SignInWithEmail

// const User = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const location = useLocation();

//   const from = location.state?.from || "/"; // Default to home if not provided

//   const handleLoginSuccess = () => {
//     // After successful login
//     navigate(from); // Redirect to the intended booking page
//   };

//   const onResReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     navigate("/"); // Navigate to home
//   };

//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       // Handle Signup with Firebase
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onResReceived)
//         .catch((err) => console.log("Signup Error:", err));
//     } else {
//       // Handle Login with Firebase
//       SignInWithEmail(formData.email, formData.password)
//         .then(onResReceived)
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



//-------


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config";

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const location = useLocation();
//   const from = location.state?.from || "/"; // Default to home if not provided

//   const handleLoginSuccess = () => {
//     // After successful login
//     navigate(from); // Redirect to the intended booking page
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     handleLoginSuccess(); // Call handleLoginSuccess instead of navigating to home directly
//   };

//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       // Handle Signup with Firebase
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Capture error message on failure
//     } else {
//       // Handle Login with Firebase
//       SignInWithEmail(formData.email, formData.password)
//         .then((res) => {
//           if (res.error) {
//             setErrorMessage(res.error); // Set error message from Firebase
//           } else {
//             onDataReceived(res); // Call onDataReceived to handle successful login
//           }
//         })
//         .catch((err) => setErrorMessage(err.message)); // Capture error message on failure
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


//----------------

// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail } from "../../config";

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const location = useLocation();
//   const from = location.state?.from || "/"; // Default to home if not provided

//   const handleLoginSuccess = () => {
//     // After successful login
//     navigate(from); // Redirect to the intended booking page
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     handleLoginSuccess(); // Call handleLoginSuccess instead of navigating to home directly
//   };

//   const getData = (data) => {
//     const { formData, signup } = data;

//     if (signup) {
//       // Handle Signup with Firebase
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Capture error message on failure
//     } else {
//       // Handle Login with Firebase
//       SignInWithEmail(formData.email, formData.password)
//         .then((res) => {
//           if (res.error) {
//             setErrorMessage(res.error); // Set error message from Firebase
//           } else {
//             onDataReceived(res); // Call onDataReceived to handle successful login
//           }
//         })
//         .catch((err) => setErrorMessage(err.message)); // Capture error message on failure
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



//-------


// import React, { useState } from "react";
// import AuthForm from "./AuthForm";
// import { useDispatch } from "react-redux";
// import { userActions } from "../../redux/store";
// import { useLocation, useNavigate } from "react-router-dom";
// import { SignUpWithEmail, SignInWithEmail, SignInWithGoogle } from "../../config"; // Assuming Google login method is imported

// const User = () => {
//   const [errorMessage, setErrorMessage] = useState(""); // State to store error message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from || "/"; // Default to home if not provided

//   const handleLoginSuccess = () => {
//     // After successful login
//     navigate(from); // Redirect to the intended booking page or home if not provided
//   };

//   const onDataReceived = (data) => {
//     console.log("User data:", data);
//     dispatch(userActions.login());
//     localStorage.setItem("userId", data.user.uid); // Storing the Firebase UID
//     handleLoginSuccess(); // Redirect after login
//   };

//   const getData = (data) => {
//     const { formData, signup, googleLogin } = data;

//     if (googleLogin) {
//       // Handle Google Login
//       SignInWithGoogle()
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Capture error message
//     } else if (signup) {
//       // Handle Signup with Firebase
//       SignUpWithEmail(formData.email, formData.password)
//         .then(onDataReceived)
//         .catch((err) => setErrorMessage(err.message)); // Capture error message
//     } else {
//       // Handle Login with Firebase
//       SignInWithEmail(formData.email, formData.password)
//         .then((res) => {
//           if (res.error) {
//             setErrorMessage(res.error); // Set error message from Firebase
//           } else {
//             onDataReceived(res); // Redirect on successful login
//           }
//         })
//         .catch((err) => setErrorMessage(err.message)); // Capture error message
//     }
//   };

//   return (
//     <div>
//       {/* Pass error message to AuthForm */}
//       <AuthForm onSubmit={getData} isAdmin={false} errorMessage={errorMessage} />
//     </div>
//   );
// };

// export default User;


//---

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
