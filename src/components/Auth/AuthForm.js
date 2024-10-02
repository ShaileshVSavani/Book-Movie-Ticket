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
// const AuthForm = ({onSubmit, isAdmin}) => {
//   const [isSignup, setIsSignup] = useState(false);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
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


import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { GoogleAuth, SignUpWithEmail, SignInWithEmail } from "../../config"; // Corrected SignInWithEmail
import { GoogleAuth, SignInWithEmail, SignUpWithEmail,} from "../../config";
import { userActions } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const labelStyle = { mt: 1, mb: 1 };

const AuthForm = ({ isAdmin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (isSignup) {
  //       // Signup logic
  //       let res = await SignUpWithEmail(formData.email, formData.password);
  //       dispatch(userActions.login({ email: res.user.email }));
  //     } else {
  //       // Login logic
  //       let res = await SignInWithEmail(formData.email, formData.password);
  //       dispatch(userActions.login({ email: res.user.email }));
  //     }
  //     navigate("/"); // Redirect to home page after successful login/signup
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error during authentication. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isSignup) {
        // Call SignUpWithEmail with email, password, and name
        let res = await SignUpWithEmail(formData.email, formData.password, formData.name);
        dispatch(userActions.login({ email: res.user.email }));
      } else {
        // Call SingInWithEmail with email and password for login
        let res = await SignInWithEmail(formData.email, formData.password);
        dispatch(userActions.login({ email: res.user.email }));
      }
      navigate("/"); // Redirect to home page after successful login/signup
    } catch (error) {
      console.error("Authentication Error:", error);
      alert("Error during authentication. Please try again.");
    }
  };
  

  const loginWithGoogle = async () => {
    try {
      const res = await GoogleAuth();
      dispatch(userActions.login({ email: res.user.email }));
      navigate("/");
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton component={Link} to="/">
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
          {isSignup && (
            <>
              <FormLabel sx={labelStyle}>Name</FormLabel>
              <TextField
                name="name"
                type="text"
                margin="normal"
                variant="standard"
                onChange={handleChange}
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
            required
          />
          <FormLabel sx={labelStyle}>Password</FormLabel>
          <TextField
            name="password"
            type="password"
            margin="normal"
            variant="standard"
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            fullWidth
            variant="contained"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            type="button"
            sx={{ mt: 2, borderRadius: 10 }}
            fullWidth
            onClick={loginWithGoogle}
          >
            Login with Google
          </Button>
          {!isAdmin && (
            <Button
              onClick={() => setIsSignup(!isSignup)}
              sx={{ mt: 2, borderRadius: 10 }}
              fullWidth
            >
              Switch to {isSignup ? "Login" : "Signup"}
            </Button>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
