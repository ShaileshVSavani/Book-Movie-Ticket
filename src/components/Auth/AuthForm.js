
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link, useNavigate } from "react-router-dom";
// import { GoogleAuth } from "../../config";
// import { userActions } from "../../redux/store";
// import { useDispatch } from "react-redux";

// const labelStyle = { mt: 1, mb: 1 };
// const AuthForm = ({onSubmit, isAdmin}) => {
//   const [isSignup, setIsSignup] = useState(false);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//     const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     let { name, value } = e.target
//     setFormData({...formData, [name]: value });
  
//   };
//   // const handleChange = (e) => {
//   //   setFormData((prevState) => ({
//   //     ...prevState,
//   //     [e.target.name]: e.target.value,
//   //   }));
//   // };
//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // onSubmit(formData);
//     onSubmit({ formData, signup: isAdmin ? false : isSignup });
   
//     setFormData({ name: "", email: "", password: "" });
//   }

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton LinkComponent={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//       {isSignup ? "Signup" : "Login"}
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box
//           display={"flex"}
//           justifyContent={"center"}
//           flexDirection="column"
//                   width={300}
                 
//           margin="auto"
//           alignContent={"center"}
//           padding={4}
//         >
//          { !isAdmin && isSignup && (<><FormLabel sx={labelStyle}>Name</FormLabel>
//           <TextField
//             name="name"
//             type="text"
//             margin="normal"
//               variant="standard"
//               onChange={handleChange}
//           /></>)}
//           <FormLabel sx={labelStyle}>Email</FormLabel>
//           <TextField
//             name="email"
//             type="email"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//           />
//           <FormLabel sx={labelStyle}>Passwordl</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//              {isSignup ? "Signup" : "Login"}
//           </Button>
//           {/* {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>)} */}
//         { !isAdmin && <Button  onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
//             Switch To {isSignup ? "Login" : "Signup"}
//           </Button>}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//-------



// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, isAdmin, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ formData, signup: isAdmin ? false : isSignup });
//     setFormData({ name: "", email: "", password: "" });
//   };

//   const ResetForm = () => {
//     if (isSignup) {
//       setFormData({ name: "", email: "", password: "" });
//       setIsSignup(false);
//     }
//     else {
//       setFormData({ email: "", password: "" });
//       setIsSignup(true);
//     }
//    }

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton LinkComponent={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? "Signup" : "Login"}
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box
//           display={"flex"}
//           justifyContent={"center"}
//           flexDirection="column"
//           width={300}
//           margin="auto"
//           alignContent={"center"}
//           padding={4}
//         >
//           {/* Conditionally render the name field for signup */}
//           {!isAdmin && isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//               />
//             </>
//           )}
//           <FormLabel sx={labelStyle}>Email</FormLabel>
//           <TextField
//             name="email"
//             type="email"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? "Signup" : "Login"}
//           </Button>

//           {/* Switch between Signup and Login */}
//           {!isAdmin && (
//             <Button
//               onClick={() => setIsSignup(!isSignup)}
//               onClick={ResetForm}
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//             >
//               Switch To {isSignup ? "Login" : "Signup"}
//             </Button>
//           )}

//           {/* Display error message if it exists */}
//           {errorMessage && (
//             <Typography
//               color="error"
//               variant="body2"
//               sx={{ mt: 2, textAlign: "center" }}
//             >
//               {errorMessage}
//             </Typography>
//           )}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//=================


// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, isAdmin, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ formData, signup: isAdmin ? false : isSignup });
//     setFormData({ name: "", email: "", password: "" });
//   };

//   const handleToggleSignup = () => {
//     setIsSignup(!isSignup);
//     // if (isSignup) {
//     //   // If switching to login, reset form data for login
//     //   setFormData({ email: "", password: "" });
//     // } else {
//     //   // If switching to signup, reset form data for signup
//     //   setFormData({ name: "", email: "", password: "" });
//     // }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton LinkComponent={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? "Signup" : "Login"}
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box
//           display={"flex"}
//           justifyContent={"center"}
//           flexDirection="column"
//           width={300}
//           margin="auto"
//           alignContent={"center"}
//           padding={4}
//         >
//           {/* Conditionally render the name field for signup */}
//           {!isAdmin && isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 value={formData.name}
//               />
//             </>
//           )}
//           <FormLabel sx={labelStyle}>Email</FormLabel>
//           <TextField
//             name="email"
//             type="email"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             value={formData.email}
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             value={formData.password}
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? "Signup" : "Login"}
//           </Button>

//           {/* Switch between Signup and Login */}
//           {!isAdmin && (
//             <Button
//               onClick={handleToggleSignup}
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//             >
//               Switch To {isSignup ? "Login" : "Signup"}
//             </Button>
//           )}

//           {/* Display error message if it exists */}
//           {errorMessage && (
//             <Typography
//               color="error"
//               variant="body2"
//               sx={{ mt: 2, textAlign: "center" }}
//             >
//               {errorMessage}
//             </Typography>
//           )}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//--------


// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify"; // Import Toastify for notifications
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// // toast.configure(); // Initialize Toastify

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, isAdmin, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Form validation: Check if required fields are filled
//     if (isSignup && !formData.name) {
//       toast.error("Name is required for signup!");
//       return;
//     }
//     if (!formData.email) {
//       toast.error("Email is required!");
//       return;
//     }
//     if (!formData.password) {
//       toast.error("Password is required!");
//       return;
//     }

//     // If validation passes, call the onSubmit function
//     onSubmit({ formData, signup: isAdmin ? false : isSignup });

//     // Reset form after submission
//     setFormData({ name: "", email: "", password: "" });
//   };

//   const handleToggleSignup = () => {
//     setIsSignup(!isSignup);
//     if (isSignup) {
//       // If switching to login, reset form data for login
//       setFormData({ email: "", password: "" });
//     } else {
//       // If switching to signup, reset form data for signup
//       setFormData({ name: "", email: "", password: "" });
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton LinkComponent={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? "Signup" : "Login"}
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box
//           display={"flex"}
//           justifyContent={"center"}
//           flexDirection="column"
//           width={300}
//           margin="auto"
//           alignContent={"center"}
//           padding={4}
//         >
//           {/* Conditionally render the name field for signup */}
//           {!isAdmin && isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 value={formData.name}
//               />
//             </>
//           )}
//           <FormLabel sx={labelStyle}>Email</FormLabel>
//           <TextField
//             name="email"
//             type="email"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             value={formData.email}
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             value={formData.password}
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? "Signup" : "Login"}
//           </Button>

//           {/* Switch between Signup and Login */}
//           {!isAdmin && (
//             <Button
//               onClick={handleToggleSignup}
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//             >
//               Switch To {isSignup ? "Login" : "Signup"}
//             </Button>
//           )}

//           {/* Display error message if it exists */}
//           {errorMessage && (
//             <Typography
//               color="error"
//               variant="body2"
//               sx={{ mt: 2, textAlign: "center" }}
//             >
//               {errorMessage}
//             </Typography>
//           )}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//=======================


import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import Toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const labelStyle = { mt: 1, mb: 1 };

const AuthForm = ({ onSubmit, isAdmin, errorMessage }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Check if user or admin is already logged in and redirect if so
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const adminId = localStorage.getItem("adminId");

    if (userId || adminId) {
      navigate("/"); // Redirect to homepage if logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Form validation: Check if required fields are filled
  //   if (isSignup && !formData.name) {
  //     toast.error("Name is required for signup!", { autoClose: 2000 });
  //     return;
  //   }
  //   if (!formData.email) {
  //     toast.error("Email is required!" ,{ autoClose: 2000 });
  //     return;
  //   }
  //   if (!formData.password) {
  //     toast.error("Password is required!",{ autoClose: 2000 });
  //     return;
  //   }

  //   // If validation passes, call the onSubmit function
  //   onSubmit({ formData, signup: isAdmin ? false : isSignup });

  //   // Reset form after submission
  //   setFormData({ name: "", email: "", password: "" });
  // };

  //-----

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Form validation: Check if required fields are filled
  //   if (isSignup && !formData.name) {
  //     toast.error("Name is required for signup!", { autoClose: 2000 });
  //     return;
  //   }
  //   if (!formData.email) {
  //     toast.error("Email is required!", { autoClose: 2000 });
  //     return;
  //   }
  //   if (!formData.password) {
  //     toast.error("Password is required!", { autoClose: 2000 });
  //     return;
  //   }
  
  //   try {
  //     // If validation passes, call the onSubmit function
  //     const result = await onSubmit({ formData, signup: isSignup });
  
  //     if (result) {
  //       // Store user details in localStorage
  //       const { user } = result;
  //       const userId = user.uid;
  //       const userData = {
  //         name: user.displayName || formData.name,
  //         email: user.email,
  //       };
  //       localStorage.setItem("userId", userId);
  //       localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  
  //       toast.success("Logged in successfully!", { autoClose: 2000 });
  //     }
  //   } catch (error) {
  //     toast.error("Login failed. Please try again.", { autoClose: 2000 });
  //   }
  
  //   // Reset form after submission
  //   setFormData({ name: "", email: "", password: "" });
  // };
  


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Form validation
  //   if (isSignup && !formData.name) {
  //     toast.error("Name is required for signup!", { autoClose: 2000 });
  //     return;
  //   }
  //   if (!formData.email) {
  //     toast.error("Email is required!", { autoClose: 2000 });
  //     return;
  //   }
  //   if (!formData.password) {
  //     toast.error("Password is required!", { autoClose: 2000 });
  //     return;
  //   }
  
  //   try {
  //     const result = await onSubmit({ formData, signup: isSignup });
  
  //     if (result) {
  //       const { user } = result;
  //       const userId = user.uid;
  //       const userData = {
  //         name: user.displayName || formData.name, // Make sure name is available
  //         email: user.email,
  //       };
  //       localStorage.setItem("userId", userId);
  //       localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  
  //       toast.success("Signed up successfully!", { autoClose: 2000 });
  //     }
  //   } catch (error) {
  //     toast.error("Sign up failed. Please try again.", { autoClose: 2000 });
  //   }
  
  //   // Reset form after submission
  //   setFormData({ name: "", email: "", password: "" });
  // };
  

  //777777777777777777

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Form validation
    if (isSignup && !formData.name) {
      toast.error("Name is required for signup!", { autoClose: 2000 });
      return;
    }
    if (!formData.email) {
      toast.error("Email is required!", { autoClose: 2000 });
      return;
    }
    if (!formData.password) {
      toast.error("Password is required!", { autoClose: 2000 });
      return;
    }
  
    try {
      // Call onSubmit (Firebase auth method)
      const result = await onSubmit({ formData, signup: isSignup });
  
      if (result) {
        const { user } = result; // User object from Firebase
        const userId = user.uid;  // Firebase UID for the user
        
        // Ensure the name is either from Firebase's displayName or the form
        const userData = {
          name: user.displayName || formData.name,  // fallback to formData.name if displayName is not set
          email: user.email,
        };
  
        // Save userId and user data in localStorage
        localStorage.setItem("userId", userId);
        localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  
        // Show success message
        toast.success("Logged in successfully!", { autoClose: 2000 });
      }
    } catch (error) {
      toast.error("Login failed. Please try again.", { autoClose: 2000 });
    }
  
    // Reset form after submission
    setFormData({ name: "", email: "", password: "" });
  };
  

  const handleToggleSignup = () => {
    setIsSignup(!isSignup);
    if (isSignup) {
      // If switching to login, reset form data for login
      setFormData({ email: "", password: "" });
    } else {
      // If switching to signup, reset form data for signup
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignup ? "Signup" : isAdmin ? " Admin Login"  :" User Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection="column"
          width={300}
          margin="auto"
          alignContent={"center"}
          padding={4}
        >
          {/* Conditionally render the name field for signup */}
          {!isAdmin && isSignup && (
            <>
              <FormLabel sx={labelStyle}>Name</FormLabel>
              <TextField
                name="name"
                type="text"
                margin="normal"
                variant="standard"
                onChange={handleChange}
                value={formData.name}
              />
            </>
          )}
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField
            name="email"
            type="email"
            margin="normal"
            variant="standard"
            onChange={handleChange}
            value={formData.email}
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            name="password"
            type="password"
            margin="normal"
            variant="standard"
            onChange={handleChange}
            value={formData.password}
          />
          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            fullWidth
            variant="contained"
          >
            {isSignup ? "Signup" : isAdmin ? " Admin Login"  :" User Login"}
          </Button>

          {/* Switch between Signup and Login */}
          {!isAdmin && (
            <Button
              onClick={handleToggleSignup}
              sx={{ mt: 2, borderRadius: 10 }}
              fullWidth
            >
              Switch To {isSignup ? "Login" : "Signup"}
            </Button>
          )}

          {/* Display error message if it exists */}
          {errorMessage && (
            <Typography
              color="error"
              variant="body2"
              sx={{ mt: 2, textAlign: "center" }}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
