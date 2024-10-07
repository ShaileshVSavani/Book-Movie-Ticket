

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"; // Import Toastify for notifications
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, isAdmin, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // Check if user or admin is already logged in and redirect if so
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     const adminId = localStorage.getItem("adminId");

//     if (userId || adminId) {
//       navigate("/"); // Redirect to homepage if logged in
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Form validation
//     if (isSignup && !formData.name) {
//       toast.error("Name is required for signup!", { autoClose: 2000 });
//       return;
//     }
//     if (!formData.email) {
//       toast.error("Email is required!", { autoClose: 2000 });
//       return;
//     }
//     if (!formData.password) {
//       toast.error("Password is required!", { autoClose: 2000 });
//       return;
//     }
  
//     try {
//       // Call onSubmit (Firebase auth method)
//       const result = await onSubmit({ formData, signup: isSignup });
  
//       if (result) {
//         const { user } = result; // User object from Firebase
//         const userId = user.uid;  // Firebase UID for the user
        
//         // Ensure the name is either from Firebase's displayName or the form
//         const userData = {
//           name: user.displayName || formData.name,  // fallback to formData.name if displayName is not set
//           email: user.email,
//         };
  
//         // Save userId and user data in localStorage
//         localStorage.setItem("userId", userId);
//         localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
  
//         // Show success message
//         toast.success("Logged in successfully!", { autoClose: 2000 });
//       }
//     } catch (error) {
//       toast.error("Login failed. Please try again.", { autoClose: 2000 });
//     }
  
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
//         {isSignup ? "Signup" : isAdmin ? " Admin Login"  :" User Login"}
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
//             {isSignup ? "Signup" : isAdmin ? " Admin Login"  :" User Login"}
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


//====


import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const labelStyle = { mt: 1, mb: 1 };

const AuthForm = ({ onSubmit, isAdmin, errorMessage }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Responsive breakpoint

  // Check if user or admin is already logged in and redirect if so
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const adminId = localStorage.getItem("adminId");

    if (userId || adminId) {
      navigate("/"); // Redirect to homepage if logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    // Form validation
    if (isSignup && !formData.name) {
      toast.error("Name is required for signup!", { autoClose: 2000 });
      setLoading(false); // Reset loading state
      return;
    }
    if (!formData.email) {
      toast.error("Email is required!", { autoClose: 2000 });
      setLoading(false); // Reset loading state
      return;
    }
    if (!formData.password) {
      toast.error("Password is required!", { autoClose: 2000 });
      setLoading(false); // Reset loading state
      return;
    }

    try {
      // Call onSubmit (Firebase auth method)
      const result = await onSubmit({ formData, signup: isSignup });

      if (result) {
        const { user } = result; // User object from Firebase
        const userId = user.uid; // Firebase UID for the user

        // Ensure the name is either from Firebase's displayName or the form
        const userData = {
          name: user.displayName || formData.name, // Fallback to formData.name if displayName is not set
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
    setLoading(false); // Reset loading state
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
        {isSignup ? "Signup" : isAdmin ? "Admin Login" : "User Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection="column"
          width={isMobile ? '90%' : '400px'} // Responsive width
          margin="auto"
          padding={isMobile ? 2 : 4} // Responsive padding
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
                fullWidth // Make the input full width
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
            fullWidth // Make the input full width
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            name="password"
            type="password"
            margin="normal"
            variant="standard"
            onChange={handleChange}
            value={formData.password}
            fullWidth // Make the input full width
          />
          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            fullWidth
            variant="contained"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : isSignup ? "Signup" : isAdmin ? "Admin Login" : "User Login"}
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
