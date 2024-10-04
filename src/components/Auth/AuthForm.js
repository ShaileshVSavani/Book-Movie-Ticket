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
//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>)}
//         { !isAdmin && <Button  onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
//             Switch To {isSignup ? "Login" : "Signup"}
//           </Button>}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//==================

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// // import { GoogleAuth, SignUpWithEmail, SingInWithEmail } from "../config"; // Import the Firebase methods
// // import { login } from "../redux/UserSlice";
// // import { login } from "../../redux/store/userActions.login";
// import { useNavigate } from "react-router-dom";
// import { GoogleAuth, SignUpWithEmail, SingInWithEmail } from "../../config";
// import { userActions } from "../../redux/store";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ isAdmin }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isSignup) {
//         // Signup logic
//         let res = await SignUpWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       } else {
//         // Login logic
//         let res = await SingInWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       }
//       navigate("/"); // Redirect to home page after successful login/signup
//     } catch (error) {
//       console.error(error);
//       alert("Error during authentication. Please try again.");
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
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
//           {isSignup && (
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? "Signup" : "Login"}
//           </Button>
//           <Button
//             type="button"
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//             onClick={loginWithGoogle}
//           >
//             Login with Google
//           </Button>
//           {!isAdmin && (
//             <Button
//               onClick={() => setIsSignup(!isSignup)}
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//             >
//               Switch to {isSignup ? "Login" : "Signup"}
//             </Button>
//           )}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//------


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// // import { GoogleAuth, SignUpWithEmail, SignInWithEmail } from "../../config"; // Corrected SignInWithEmail
// import { GoogleAuth, SignInWithEmail, SignUpWithEmail,} from "../../config";
// import { userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ isAdmin }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     if (isSignup) {
//   //       // Signup logic
//   //       let res = await SignUpWithEmail(formData.email, formData.password);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     } else {
//   //       // Login logic
//   //       let res = await SignInWithEmail(formData.email, formData.password);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     }
//   //     navigate("/"); // Redirect to home page after successful login/signup
//   //   } catch (error) {
//   //     console.error(error);
//   //     alert("Error during authentication. Please try again.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       if (isSignup) {
//         // Call SignUpWithEmail with email, password, and name
//         let res = await SignUpWithEmail(formData.email, formData.password, formData.name);
//         dispatch(userActions.login({ email: res.user.email }));
//       } else {
//         // Call SingInWithEmail with email and password for login
//         let res = await SignInWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       }
//       navigate("/"); // Redirect to home page after successful login/signup
//     } catch (error) {
//       console.error("Authentication Error:", error);
//       alert("Error during authentication. Please try again.");
//     }
//   };
  

//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
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
//           {isSignup && (
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? "Signup" : "Login"}
//           </Button>
//           {!isSignup &&    (<Button
//             type="button"
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//             onClick={loginWithGoogle}
//           >
//             Login with Google
//           </Button>) }
       
//           {!isAdmin && (
//             <Button
//               onClick={() => setIsSignup(!isSignup)}
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//             >
//               Switch to {isSignup ? "Login" : "Signup"}
//             </Button>
//           )}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//-----


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GoogleAuth, SignInWithEmail, SignUpWithEmail } from "../../config"; // Corrected SignInWithEmail
// import { userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ isAdmin = false }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
  
//   //   try {
//   //     if (isSignup) {
//   //       // Call SignUpWithEmail with email, password, name, and isAdmin flag
//   //       let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     } else {
//   //       // Call SignInWithEmail with email and password for login
//   //       let res = await SignInWithEmail(formData.email, formData.password);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     }
//   //     navigate("/"); // Redirect to home page after successful login/signup
//   //   } catch (error) {
//   //     console.error("Authentication Error:", error);
//   //     alert("Error during authentication. Please try again.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       if (isSignup) {
//         // Call SignUpWithEmail with email, password, name, and isAdmin flag
//         let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//         dispatch(userActions.login({ email: res.user.email }));
//       } else {
//         // Call SignInWithEmail with email and password for login
//         let res = await SignInWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       }
//       navigate("/"); // Redirect to home page after successful login/signup
//     } catch (error) {
//       if (error.message === "User already signed up") {
//         alert("User with this email is already signed up.");
//       } else {
//         console.error("Authentication Error:", error);
//         alert("Error during authentication. Please try again.");
//       }
//     }
//   };
  


//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
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
//           {isSignup && (
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>
          
//           {/* Only show Google login if it's not admin mode */}
//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>
//           )}

         
//             <Button
//               onClick={() => setIsSignup(!isSignup)}
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//             >
//               Switch to {isSignup ? "Login" : "Signup"}
//             </Button>
         
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//-------

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GoogleAuth, SignInWithEmail, SignUpWithEmail } from "../../config";
// import { userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ isAdmin = false }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState(""); // State for error messages
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Reset error message before attempting signup/login

//     try {
//       if (isSignup) {
//         // Call SignUpWithEmail with email, password, name, and isAdmin flag
//         let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//         dispatch(userActions.login({ email: res.user.email }));
//       } else {
//         // Call SignInWithEmail with email and password for login
//         let res = await SignInWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       }
//       navigate("/"); // Redirect to home page after successful login/signup
//     } catch (error) {
//       console.error("Authentication Error:", error);
//       setErrorMessage(error.message); // Set error message to display
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       setErrorMessage("Google login failed. Please try again."); // Set error message
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//       </Typography>
      
//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )}

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
//           {isSignup && (
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>

//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>
//           )}

//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//           >
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//====



// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GoogleAuth, SignInWithEmail, SignUpWithEmail } from "../../config";
// import { userActions } from "../../redux/store";
// import { useNavigate } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ isAdmin = false }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState(""); // State for error messages
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Reset error message before attempting signup/login

//     try {
//       if (isSignup) {
//         // Call SignUpWithEmail with email, password, name, and isAdmin flag
//         let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//         dispatch(userActions.login({ email: res.user.email }));
//       } else {
//         // Call SignInWithEmail with email and password for login
//         let res = await SignInWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       }
//       navigate("/"); // Redirect to home page after successful login/signup
//     } catch (error) {
//       console.error("Authentication Error:", error);
//       let customErrorMessage = ""; // Initialize custom error message
//       // Determine the error message based on error code
//       switch (error.code) {
//         case 'auth/wrong-password':
//           customErrorMessage = "Incorrect password. Please try again.";
//           break;
//         case 'auth/user-not-found':
//           customErrorMessage = "No user found with this email. Please sign up.";
//           break;
//         case 'auth/invalid-email':
//           customErrorMessage = "The email address is not valid.";
//           break;
//         case 'auth/user-disabled':
//           customErrorMessage = "This user account has been disabled. Please contact support.";
//           break;
//         case 'auth/operation-not-allowed':
//           customErrorMessage = "Email/password accounts are not enabled. Please contact support.";
//           break;
//         default:
//           customErrorMessage = "An error occurred during login. Please try again.";
//       }
//       setErrorMessage(customErrorMessage); // Set the error message to display
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       setErrorMessage("Google login failed. Please try again."); // Set error message
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//       </Typography>
      
//       {/* {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )} */}

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
//           {isSignup && (
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>

//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>
//           )}

//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//           >
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//---


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GoogleAuth, SignInWithEmail, SignUpWithEmail } from "../../config";
// import { userActions } from "../../redux/store";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ isAdmin = false }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState(""); // State for error messages
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setErrorMessage(""); // Reset error message before attempting signup/login

//   //   try {
//   //     if (isSignup) {
//   //       // Call SignUpWithEmail with email, password, name, and isAdmin flag
//   //       let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     } else {
//   //       // Call SignInWithEmail with email and password for login
//   //       let res = await SignInWithEmail(formData.email, formData.password);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     }
//   //     navigate("/"); // Redirect to home page after successful login/signup
//   //   } catch (error) {
//   //     console.error("Authentication Error:", error);
//   //     setErrorMessage(error.message); // Set the error message to display
//   //     alert(errorMessage)
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Reset error message before attempting signup/login
  
//     try {
//       if (isSignup) {
//         // Call SignUpWithEmail with email, password, name, and isAdmin flag
//         let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//         dispatch(userActions.login({ email: res.user.email }));
//       } else {
//         // Call SignInWithEmail with email and password for login
//         let res = await SignInWithEmail(formData.email, formData.password);
//         dispatch(userActions.login({ email: res.user.email }));
//       }
//       navigate("/"); // Redirect to home page after successful login/signup
//     } catch (error) {
//       console.error("Authentication Error:", error);
  
//       // Customize the error message based on error code
//       let message = "An error occurred. Please try again.";
//       if (error.code === "auth/email-already-in-use") {
//         message = "User already exists. Please use a different email.";
//       } else if (error.code === "auth/invalid-email") {
//         message = "Invalid email format. Please enter a valid email.";
//       } else if (error.code === "auth/weak-password") {
//         message = "Password is too weak. Please use a stronger password.";
//       } else if (error.code === "auth/user-not-found") {
//         message = "No user found with this email.";
//       } else if (error.code === "auth/wrong-password") {
//         message = "Incorrect password. Please try again.";
//       }
  
//       setErrorMessage(message); // Set the error message to display
//       alert(message); // Display alert with the error message
//       console.error("Authentication Error:", error);

//     }
//   };
  
  
//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       setErrorMessage("Google login failed. Please try again."); // Set error message
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "User Signup") : (isAdmin ? "Admin Login" : "User Login")}
//       </Typography>

//       {/* {errorMessage && ( // Display error message if it exists
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )} */}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>

//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>
//           )}

//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//           >
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//----




// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { GoogleAuth, SignInWithEmail, SignUpWithEmail } from "../../config";
// import { userActions } from "../../redux/store";

// const labelStyle = { mt: 1, mb: 1 };


// const AuthForm = ({ isAdmin = false }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState(""); // State for error messages
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setErrorMessage(""); // Reset error message before attempting signup/login
  
//   //   try {
//   //     if (isSignup) {
//   //       // Call SignUpWithEmail with email, password, name, and isAdmin flag
//   //       let res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     } else {
//   //       // Call SignInWithEmail with email and password for login
//   //       let res = await SignInWithEmail(formData.email, formData.password);
//   //       dispatch(userActions.login({ email: res.user.email }));
//   //     }
//   //     navigate("/"); // Redirect to home page after successful login/signup
//   //   } catch (error) {
//   //     console.error("Authentication Error:", error);

//   //     // Use the error message from the caught error
//   //     setErrorMessage(error.message); // Set the error message to display

//   //     // Optionally, you can show an alert for the error as well
//   //     alert(error.message); // Display alert with the error message
//   //   }
//   // };




// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setErrorMessage(""); // Reset error message before attempting login

//   try {
//       let res; // Declare res here to reuse in both signup and login

//       if (isSignup) {
//           // Call SignUpWithEmail for signup
//           res = await SignUpWithEmail(formData.email, formData.password, formData.name, isAdmin);
//       } else {
//           // Call SignInWithEmail for login
//           res = await SignInWithEmail(formData.email, formData.password);
//       }

//       if (res.error) {
//           // If there is an error, set the custom error message
//           setErrorMessage(res.error);
//       } else {
//           // Successful signup or login
//           dispatch(userActions.login({ email: res.user.email }));
//           navigate("/"); // Redirect after successful login/signup
//       }
//   } catch (error) {
//       console.error("Authentication Error:", error);
//       setErrorMessage("An unexpected error occurred. Please try again.");
//   }
// };




//   const loginWithGoogle = async () => {
//     try {
//       const res = await GoogleAuth();
//       dispatch(userActions.login({ email: res.user.email }));
//       navigate("/");
//     } catch (error) {
//       console.error("Google Login Error:", error);
//       setErrorMessage("Google login failed. Please try again."); // Set error message
//     }
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "User Signup") : (isAdmin ? "Admin Login" : "User Login")}
//       </Typography>

//       {/* Display error message if it exists */}
//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>

//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>
//           )}

//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//           >
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//----


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, isAdmin = false, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ formData, signup: isSignup }); // Call onSubmit with form data
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "User Signup") : (isAdmin ? "Admin Login" : "User Login")}
//       </Typography>

//       {/* Display error message if it exists */}
//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
          
//         </Alert>
//       )}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>

//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//           >
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;



//----



// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, isAdmin = false, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ formData, signup: isSignup, isAdmin }); // Pass isAdmin when calling onSubmit
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (isAdmin ? "Admin Signup" : "User Signup") : (isAdmin ? "Admin Login" : "User Login")}
//       </Typography>

//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <Button
//             type="submit"
//             sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
//             fullWidth
//             variant="contained"
//           >
//             {isSignup ? (isAdmin ? "Admin Signup" : "Signup") : (isAdmin ? "Admin Login" : "Login")}
//           </Button>

//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2, borderRadius: 10 }}
//             fullWidth
//           >
//             Switch to {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//-----------


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [role, setRole] = useState("user"); // Default role is user

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ formData, signup: isSignup, role }); // Pass selected role
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? (role === "admin" ? "Admin Signup" : "User Signup") : (role === "admin" ? "Admin Login" : "User Login")}
//       </Typography>

//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
//               />

//               <FormLabel sx={labelStyle}>Role</FormLabel>
//               <RadioGroup
//                 row
//                 value={role}
//                 onChange={handleRoleChange}
//                 sx={{ mb: 2 }}
//               >
//                 <FormControlLabel value="user" control={<Radio />} label="User" />
//                 <FormControlLabel value="admin" control={<Radio />} label="Admin" />
//               </RadioGroup>
//             </>
//           )}

//           <FormLabel sx={labelStyle}>Email</FormLabel>
//           <TextField
//             name="email"
//             type="email"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />

//           <Button
//             variant="contained"
//             type="submit"
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             {isSignup ? "Sign Up" : "Log In"}
//           </Button>

//           <Button
//             variant="outlined"
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             {isSignup ? "Already have an account? Log In" : "Create a new account"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//-----


// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [role, setRole] = useState("user"); // Default role is user

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Pass the formData along with the signup status and role to the onSubmit handler
//     onSubmit({ formData, signup: isSignup, role });
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup
//           ? role === "admin"
//             ? "Admin Signup"
//             : "User Signup"
//           : role === "admin"
//           ? "Admin Login"
//           : "User Login"}
//       </Typography>

//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
//               />

//               <FormLabel sx={labelStyle}>Role</FormLabel>
//               <RadioGroup
//                 row
//                 value={role}
//                 onChange={handleRoleChange}
//                 sx={{ mb: 2 }}
//               >
//                 <FormControlLabel value="user" control={<Radio />} label="User" />
//                 <FormControlLabel value="admin" control={<Radio />} label="Admin" />
//               </RadioGroup>
//             </>
//           )}

//           <FormLabel sx={labelStyle}>Email</FormLabel>
//           <TextField
//             name="email"
//             type="email"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />

//           <Button
//             variant="contained"
//             type="submit"
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             {isSignup ? "Sign Up" : "Log In"}
//           </Button>

//           <Button
//             variant="outlined"
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             {isSignup
//               ? "Already have an account? Log In"
//               : "Create a new account"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//---



// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   FormLabel,
//   IconButton,
//   TextField,
//   Typography,
//   Alert,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
// } from "@mui/material";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import { Link } from "react-router-dom";

// const labelStyle = { mt: 1, mb: 1 };

// const AuthForm = ({ onSubmit, errorMessage }) => {
//   const [isSignup, setIsSignup] = useState(false); // Set to false since we don't need admin signup
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [role, setRole] = useState("user"); // Default role is user

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ formData, signup: isSignup, role }); // Pass selected role
//   };

//   return (
//     <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
//       <Box sx={{ ml: "auto", padding: 1 }}>
//         <IconButton component={Link} to="/">
//           <CloseRoundedIcon />
//         </IconButton>
//       </Box>
//       <Typography variant="h4" textAlign={"center"}>
//         {isSignup ? "User Signup" : (role === "admin" ? "Admin Login" : "User Login")}
//       </Typography>

//       {errorMessage && (
//         <Alert severity="error" sx={{ marginBottom: 2 }}>
//           {errorMessage}
//         </Alert>
//       )}

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
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Name</FormLabel>
//               <TextField
//                 name="name"
//                 type="text"
//                 margin="normal"
//                 variant="standard"
//                 onChange={handleChange}
//                 required
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
//             required
//           />
//           <FormLabel sx={labelStyle}>Password</FormLabel>
//           <TextField
//             name="password"
//             type="password"
//             margin="normal"
//             variant="standard"
//             onChange={handleChange}
//             required
//           />

//           {/* Only show role selection if the user is signing up */}
//           {isSignup && (
//             <>
//               <FormLabel sx={labelStyle}>Role</FormLabel>
//               <RadioGroup
//                 row
//                 value={role}
//                 onChange={handleRoleChange}
//                 sx={{ mb: 2 }}
//               >
//                 <FormControlLabel value="user" control={<Radio />} label="User" />
//                 <FormControlLabel value="admin" control={<Radio />} label="Admin" />
//               </RadioGroup>
//             </>
//           )}

//           <Button
//             variant="contained"
//             type="submit"
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             {isSignup ? "Sign Up" : (role === "admin" ? "Log In as Admin" : "Log In as User")}
//           </Button>

//           <Button
//             variant="outlined"
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ mt: 2 }}
//             fullWidth
//           >
//             {isSignup ? "Already have an account? Log In" : "Create a new account"}
//           </Button>
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//---


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
//           {!isSignup && !isAdmin && (
//             <Button
//               type="button"
//               sx={{ mt: 2, borderRadius: 10 }}
//               fullWidth
//               onClick={loginWithGoogle}
//             >
//               Login with Google
//             </Button>)}
//         { !isAdmin && <Button  onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
//             Switch To {isSignup ? "Login" : "Signup"}
//           </Button>}
//         </Box>
//       </form>
//     </Dialog>
//   );
// };

// export default AuthForm;


//-----


import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuth } from "../../config";
import { userActions } from "../../redux/store";
import { useDispatch } from "react-redux";

const labelStyle = { mt: 1, mb: 1 };
const AuthForm = ({onSubmit, isAdmin}) => {
  const [isSignup, setIsSignup] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target
    setFormData({...formData, [name]: value });
  
  };
  // const handleChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  const loginWithGoogle = async () => {
    try {
      const res = await GoogleAuth();
      dispatch(userActions.login({ email: res.user.email }));
      navigate("/");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);
    onSubmit({ formData, signup: isAdmin ? false : isSignup });
   
    setFormData({ name: "", email: "", password: "" });
  }

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
      {isSignup ? "Signup" : "Login"}
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
         { !isAdmin && isSignup && (<><FormLabel sx={labelStyle}>Name</FormLabel>
          <TextField
            name="name"
            type="text"
            margin="normal"
              variant="standard"
              onChange={handleChange}
          /></>)}
          <FormLabel sx={labelStyle}>Email</FormLabel>
          <TextField
            name="email"
            type="email"
            margin="normal"
            variant="standard"
            onChange={handleChange}
          />
          <FormLabel sx={labelStyle}>Passwordl</FormLabel>
          <TextField
            name="password"
            type="password"
            margin="normal"
            variant="standard"
            onChange={handleChange}
          />
          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            fullWidth
            variant="contained"
          >
             {isSignup ? "Signup" : "Login"}
          </Button>
          {/* {!isSignup && !isAdmin && (
            <Button
              type="button"
              sx={{ mt: 2, borderRadius: 10 }}
              fullWidth
              onClick={loginWithGoogle}
            >
              Login with Google
            </Button>)} */}
        { !isAdmin && <Button  onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
            Switch To {isSignup ? "Login" : "Signup"}
          </Button>}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
