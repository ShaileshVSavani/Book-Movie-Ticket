import React, { useState } from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleChange = (e) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    console.log("Payment Details:", cardDetails);
    alert("Payment Successful!"); // Temporary alert for success
    // Redirect to confirmation page or any other action
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
    >
      <Paper elevation={4} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Typography
          variant="h4"
          marginBottom={3}
          textAlign="center"
          fontWeight="bold"
        >
          Payment Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="cardNumber"
            label="Card Number"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            required
          />
          <TextField
            name="expiryDate"
            label="Expiry Date (MM/YY)"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardDetails.expiryDate}
            onChange={handleChange}
            required
          />
          <TextField
            name="cvv"
            label="CVV"
            type="password" // Masking CVV input
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardDetails.cvv}
            onChange={handleChange}
            required
          />
          <TextField
            name="nameOnCard"
            label="Name on Card"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={cardDetails.nameOnCard}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 3,
              paddingY: 1.5,
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Pay Now
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Payment;
