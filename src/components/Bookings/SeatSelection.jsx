// import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";

// const SeatSelection = ({ onSeatSelect }) => {
//   const totalRows = 5;
//   const seatsPerRow = 10;

//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     const updatedSeats = selectedSeats.includes(seatNumber)
//       ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//       : [...selectedSeats, seatNumber]; // Select seat

//     setSelectedSeats(updatedSeats);
//     onSeatSelect(updatedSeats); // Update parent component with selected seats
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = `${String.fromCharCode(65 + row)}${seat}`; // Row label (A, B, C...) + seat number (1, 2, 3...)
//         seatRow.push(
//           <Button
//             key={seatNumber}
//             variant={selectedSeats.includes(seatNumber) ? "contained" : "outlined"}
//             color="primary"
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{ margin: 0.5 }}
//           >
//             {seatNumber}
//           </Button>
//         );
//       }
//       seats.push(
//         <Box key={row} display="flex" justifyContent="center">
//           {seatRow}
//         </Box>
//       );
//     }
//     return seats;
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" marginTop={2}>
//       <Typography>Choose Your Seats:</Typography>
//       <Box marginTop={2}>{renderSeats()}</Box>
//       <Typography marginTop={2} color="text.secondary">
//         Selected Seats: {selectedSeats.join(", ")}
//       </Typography>
//     </Box>
//   );
// };

// export default SeatSelection;



//-----

// import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";

// const SeatSelection = ({ onSeatSelect }) => {
//   const totalRows = 5; // Number of rows
//   const seatsPerRow = 10; // Seats per row

//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     const updatedSeats = selectedSeats.includes(seatNumber)
//       ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//       : [...selectedSeats, seatNumber]; // Select seat

//     setSelectedSeats(updatedSeats);
//     onSeatSelect(updatedSeats); // Update parent component with selected seats
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = `${String.fromCharCode(65 + row)}${seat}`; // Row label (A, B, C...) + seat number (1, 2, 3...)
//         seatRow.push(
//           <Button
//             key={seatNumber}
//             variant={selectedSeats.includes(seatNumber) ? "contained" : "outlined"}
//             color="primary"
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{ margin: 0.5 }}
//           >
//             {seatNumber}
//           </Button>
//         );
//       }
//       seats.push(
//         <Box key={row} display="flex" justifyContent="center">
//           {seatRow}
//         </Box>
//       );
//     }
//     return seats;
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" marginTop={3}>
//       <Typography>Choose Your Seats:</Typography>
//       <Box marginTop={2}>{renderSeats()}</Box>
//       <Typography marginTop={2} color="text.secondary">
//         Selected Seats: {selectedSeats.join(", ")}
//       </Typography>
//     </Box>
//   );
// };

// export default SeatSelection;


//----


import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const SeatSelection = ({ onSeatSelect }) => {
  const totalRows = 5; // Number of rows
  const seatsPerRow = 10; // Seats per row
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    const updatedSeats = selectedSeats.includes(seatNumber)
      ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
      : [...selectedSeats, seatNumber]; // Select seat

    setSelectedSeats(updatedSeats);
    onSeatSelect(updatedSeats); // Update parent component with selected seats
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < totalRows; row++) {
      const seatRow = [];
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${String.fromCharCode(65 + row)}${seat}`; // Row label (A, B, C...) + seat number (1, 2, 3...)
        seatRow.push(
          <Button
            key={seatNumber}
            variant={selectedSeats.includes(seatNumber) ? "contained" : "outlined"}
            color="primary"
            onClick={() => handleSeatClick(seatNumber)}
            sx={{
              margin: 0.5,
              backgroundColor: selectedSeats.includes(seatNumber) ? "#4caf50" : "#f0f0f0",
              color: selectedSeats.includes(seatNumber) ? "white" : "black",
              fontSize: "0.8rem", // Make the seat buttons smaller
              minWidth: "35px", // Set a minimum width for better visibility
              height: "35px", // Set a fixed height for the buttons
            }}
          >
            {seatNumber}
          </Button>
        );
      }
      seats.push(
        <Box key={row} display="flex" justifyContent="center">
          {seatRow}
        </Box>
      );
    }
    return seats;
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={3}>
      <Typography variant="h6">Choose Your Seats:</Typography>
      <Box marginTop={2}>{renderSeats()}</Box>
      <Typography marginTop={2} color="text.secondary">
        Selected Seats: {selectedSeats.join(", ")}
      </Typography>
    </Box>
  );
};

export default SeatSelection;
