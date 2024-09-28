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
import { Link } from "react-router-dom";

const labelStyle = { mt: 1, mb: 1 };
const AuthForm = ({onSubmit, isAdmin}) => {
  const [isSignup, setIsSignup] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
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
        { !isAdmin && <Button  onClick={() => setIsSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth>
            Switch To {isSignup ? "Login" : "Signup"}
          </Button>}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
