

// import React, { useState } from "react";
// import { Button, TextField, Typography, Box, Paper } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// const Payment = () => {
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     nameOnCard: "",
//   });

//   const navigate = useNavigate();
//   const location = useLocation();
//   const { movie, seatNumbers, date, time, totalPrice } = location.state || {};

//   const handleChange = (e) => {
//     setCardDetails((prevDetails) => ({
//       ...prevDetails,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Check if required booking details are missing
//     if (!movie || !seatNumbers || !date || !time || !totalPrice) {
//       toast.error("Required booking details are missing. Please go back and try again." ,{ autoClose: 3000 });
//       console.log("Missing booking details."); // Debugging log
//       return;
//     }

//     // Mocking the payment process
//     toast.success("Payment Successful!", { autoClose: 3000 });
//     console.log("Payment process initiated."); // Debugging log

//     // Navigate to the booking confirmation page after successful payment
//     setTimeout(() => {
//       navigate("/bookingConfirmation", {
//         state: {
//           movie,
//           seatNumbers,
//           date,
//           time,
//           totalPrice,
//           bookingId: Math.floor(Math.random() * 1000000),
//         },
//       });
//      },3000)
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick={false} pauseOnFocusLoss draggable pauseOnHover />
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f2f5">
//         <Paper elevation={4} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
//           <Typography variant="h4" marginBottom={3} textAlign="center" fontWeight="bold">
//             Payment Details
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               name="cardNumber"
//               label="Card Number"
//               type="text"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={cardDetails.cardNumber}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               name="expiryDate"
//               label="Expiry Date (MM/YY)"
//               type="text"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={cardDetails.expiryDate}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               name="cvv"
//               label="CVV"
//               type="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={cardDetails.cvv}
//               onChange={handleChange}
//               required
//             />
//             <TextField
//               name="nameOnCard"
//               label="Name on Card"
//               type="text"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={cardDetails.nameOnCard}
//               onChange={handleChange}
//               required
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ marginTop: 3, paddingY: 1.5, fontSize: "1.2rem", fontWeight: "bold" }}
//             >
//               Pay Now
//             </Button>
//           </form>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default Payment;



//==================


import React, { useState } from "react";
import { Button, TextField, Typography, Box, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { movie, seatNumbers, date, time, totalPrice } = location.state || {}; 

  const handleChange = (e) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if required booking details are missing
    if (!movie || !seatNumbers || !date || !time || !totalPrice) {
      toast.error("Required booking details are missing. Please go back and try again.", { autoClose: 3000 });
      console.log("Missing booking details."); // Debugging log
      return;
    }

    // Mocking the payment process
    toast.success("Payment Successful!", { autoClose: 3000 });
    console.log("Payment process initiated."); // Debugging log

    // Navigate to the booking confirmation page after successful payment
    setTimeout(() => {
      navigate("/bookingConfirmation", {
        state: {
          movie,
          seatNumbers,
          date,
          time,
          totalPrice,
          bookingId: Math.floor(Math.random() * 1000000), 
        },
      });
    }, 3000);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick={false} pauseOnFocusLoss draggable pauseOnHover />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f2f5" padding={2}>
        <Paper elevation={4} sx={{ padding: { xs: 3, sm: 4 }, maxWidth: 400, width: "100%", borderRadius: 2 }}>
          <Typography variant="h4" marginBottom={3} textAlign="center" fontWeight="bold" color="#1976d2">
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
              type="password"
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
                '&:hover': {
                  backgroundColor: '#115293', // Darker shade on hover
                },
              }}
            >
              Pay Now
            </Button>
          </form>
        </Paper>
      </Box>
    </>
  );
};

export default Payment;
