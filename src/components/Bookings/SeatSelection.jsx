


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
//             sx={{
//               margin: 0.5,
//               backgroundColor: selectedSeats.includes(seatNumber) ? "#4caf50" : "#f0f0f0",
//               color: selectedSeats.includes(seatNumber) ? "white" : "black",
//               fontSize: "0.8rem", // Make the seat buttons smaller
//               minWidth: "35px", // Set a minimum width for better visibility
//               height: "35px", // Set a fixed height for the buttons
//             }}
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
//       <Typography variant="h6">Choose Your Seats:</Typography>
//       <Box marginTop={2}>{renderSeats()}</Box>
//       <Typography marginTop={2} color="text.secondary">
//         Selected Seats: {selectedSeats.join(", ")}
//       </Typography>
//     </Box>
//   );
// };

// export default SeatSelection;



//=======================



// import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";

// const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
//   const totalRows = 5; // Number of rows
//   const seatsPerRow = 10; // Seats per row
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     if (!bookedSeats.includes(seatNumber)) {
//       const updatedSeats = selectedSeats.includes(seatNumber)
//         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//         : [...selectedSeats, seatNumber]; // Select seat

//       setSelectedSeats(updatedSeats);
//       onSeatSelect(updatedSeats); // Update parent component with selected seats
//     }
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = row * seatsPerRow + seat;

//         seatRow.push(
//           <Button
//             key={seatNumber}
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{
//               margin: 0.5,
//               backgroundColor: selectedSeats.includes(seatNumber)
//                 ? "green"
//                 : bookedSeats.includes(seatNumber)
//                 ? "red"
//                 : "gray",
//               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
//               color: "white",
//             }}
//             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
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
//     <Box>
//       <Typography variant="h6" textAlign="center" mb={2}>
//         Select Your Seats
//       </Typography>
//       {bookedSeats.length === totalSeats ? (
//         <Typography variant="h6" color="red" textAlign="center">
//           All seats for this show are booked. Please select a different time or date.
//         </Typography>
//       ) : (
//         renderSeats()
//       )}
//     </Box>
//   );
// };

// export default SeatSelection;



//========================



// import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";

// const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
//   const totalRows = 5; // Number of rows
//   const seatsPerRow = 10; // Seats per row
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     if (!bookedSeats.includes(seatNumber)) {
//       const updatedSeats = selectedSeats.includes(seatNumber)
//         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//         : [...selectedSeats, seatNumber]; // Select seat

//       setSelectedSeats(updatedSeats);
//       onSeatSelect(updatedSeats); // Update parent component with selected seats
//     }
//   };

//   const clearSelection = () => {
//     setSelectedSeats([]);
//     onSeatSelect([]); // Notify parent component about cleared selection
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = row * seatsPerRow + seat;

//         seatRow.push(
//           <Button
//             key={seatNumber}
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{
//               margin: 0.5,
//               backgroundColor: selectedSeats.includes(seatNumber)
//                 ? "green"
//                 : bookedSeats.includes(seatNumber)
//                 ? "red"
//                 : "gray",
//               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
//               color: "white",
//               '&:hover': {
//                 backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
//               },
//             }}
//             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
//             aria-label={`Seat ${seatNumber} ${bookedSeats.includes(seatNumber) ? 'Booked' : selectedSeats.includes(seatNumber) ? 'Selected' : 'Available'}`}
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
//     <Box>
//       <Typography variant="h6" textAlign="center" mb={2}>
//         Select Your Seats
//       </Typography>
//       {bookedSeats.length === totalSeats ? (
//         <Typography variant="h6" color="red" textAlign="center">
//           All seats for this show are booked. Please select a different time or date.
//         </Typography>
//       ) : (
//         renderSeats()
//       )}
//       {selectedSeats.length > 0 && (
//         <Box textAlign="center" mt={2}>
//           <Typography variant="body1">Selected Seats: {selectedSeats.join(", ")}</Typography>
//           <Button onClick={clearSelection} variant="outlined" color="secondary" sx={{ mt: 1 }}>
//             Clear Selection
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default SeatSelection;




//==========================


// import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";

// // const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
// //   const totalRows = 5; // Number of rows
// //   const seatsPerRow = 10; // Seats per row
// //   const [selectedSeats, setSelectedSeats] = useState([]);

// //   const handleSeatClick = (seatNumber) => {
// //     if (!bookedSeats.includes(seatNumber)) {
// //       const updatedSeats = selectedSeats.includes(seatNumber)
// //         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
// //         : [...selectedSeats, seatNumber]; // Select seat

// //       setSelectedSeats(updatedSeats);
// //       onSeatSelect(updatedSeats); // Update parent component with selected seats
// //     }
// //   };

// //   const clearSelection = () => {
// //     setSelectedSeats([]);
// //     onSeatSelect([]); // Notify parent component about cleared selection
// //   };

// //   const renderSeats = () => {
// //     const seats = [];
// //     for (let row = 0; row < totalRows; row++) {
// //       const seatRow = [];
// //       for (let seat = 1; seat <= seatsPerRow; seat++) {
// //         const seatNumber = row * seatsPerRow + seat;

// //         seatRow.push(
// //           <Button
// //             key={seatNumber}
// //             onClick={() => handleSeatClick(seatNumber)}
// //             sx={{
// //               margin: 0.5,
// //               backgroundColor: selectedSeats.includes(seatNumber)
// //                 ? "green"
// //                 : bookedSeats.includes(seatNumber)
// //                 ? "red"
// //                 : "gray",
// //               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
// //               color: "white",
// //               '&:hover': {
// //                 backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
// //               },
// //             }}
// //             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
// //             aria-label={`Seat ${seatNumber} ${bookedSeats.includes(seatNumber) ? 'Booked' : selectedSeats.includes(seatNumber) ? 'Selected' : 'Available'}`}
// //           >
// //             {seatNumber}
// //           </Button>
// //         );
// //       }
// //       seats.push(
// //         <Box key={row} display="flex" justifyContent="center">
// //           {seatRow}
// //         </Box>
// //       );
// //     }
// //     return seats;
// //   };

// //   return (
// //     <Box>
// //       <Typography variant="h6" textAlign="center" mb={2}>
// //         Select Your Seats
// //       </Typography>
// //       {bookedSeats.length === totalSeats ? (
// //         <Typography variant="h6" color="red" textAlign="center">
// //           All seats for this show are booked. Please select a different time or date.
// //         </Typography>
// //       ) : (
// //         renderSeats()
// //       )}
// //       {selectedSeats.length > 0 && (
// //         <Box textAlign="center" mt={2}>
// //           <Typography variant="body1">Selected Seats: {selectedSeats.join(", ")}</Typography>
// //           <Button onClick={clearSelection} variant="outlined" color="secondary" sx={{ mt: 1 }}>
// //             Clear Selection
// //           </Button>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
//   const totalRows = 5; // Number of rows
//   const seatsPerRow = 10; // Seats per row
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     if (!bookedSeats.includes(seatNumber)) {
//       const updatedSeats = selectedSeats.includes(seatNumber)
//         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//         : [...selectedSeats, seatNumber]; // Select seat

//       setSelectedSeats(updatedSeats);
//       onSeatSelect(updatedSeats); // Update parent component with selected seats
//     }
//   };

//   const clearSelection = () => {
//     setSelectedSeats([]);
//     onSeatSelect([]); // Notify parent component about cleared selection
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = row * seatsPerRow + seat;

//         seatRow.push(
//           <Button
//             key={seatNumber}
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{
//               margin: 0.5,
//               backgroundColor: selectedSeats.includes(seatNumber)
//                 ? "green"
//                 : bookedSeats.includes(seatNumber)
//                 ? "red"
//                 : "gray",
//               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
//               color: "white",
//               '&:hover': {
//                 backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
//               },
//             }}
//             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
//             aria-label={`Seat ${seatNumber} ${bookedSeats.includes(seatNumber) ? 'Booked' : selectedSeats.includes(seatNumber) ? 'Selected' : 'Available'}`}
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

//   const availableSeats = totalSeats - bookedSeats.length;

//   return (
//     <Box>
//       <Typography variant="h6" textAlign="center" mb={2}>
//         Select Your Seats
//       </Typography>

//       {/* Show full booked message when no seats are available */}
//       {availableSeats === 0 ? (
//         <Typography variant="h6" color="red" textAlign="center">
//           This show is already fully booked. Please select a different time or date.
//         </Typography>
//       ) : (
//         renderSeats()
//       )}

//       {selectedSeats.length > 0 && (
//         <Box textAlign="center" mt={2}>
//           <Typography variant="body1">Selected Seats: {selectedSeats.join(", ")}</Typography>
//           <Button onClick={clearSelection} variant="outlined" color="secondary" sx={{ mt: 1 }}>
//             Clear Selection
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };


// export default SeatSelection;



//========================



// import React, { useState, useEffect } from "react";
// import { Button, Box, Typography } from "@mui/material";

// // const SeatSelection = ({ onSeatSelect, movieId, date, time, totalSeats = 50 }) => {
// //   const totalRows = 5; // Number of rows
// //   const seatsPerRow = 10; // Seats per row
// //   const [selectedSeats, setSelectedSeats] = useState([]);
// //   const [bookedSeats, setBookedSeats] = useState([]);

// //   // Fetch booked seats from localStorage based on movieId, date, and time
// //   useEffect(() => {
// //     const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
// //     const movieBooking = savedBookings.find(
// //       (booking) => booking.movieId === movieId && booking.date === date && booking.time === time
// //     );
// //     setBookedSeats(movieBooking ? movieBooking.seatNumbers : []);
// //   }, [movieId, date, time]);

// //   const handleSeatClick = (seatNumber) => {
// //     if (!bookedSeats.includes(seatNumber)) {
// //       const updatedSeats = selectedSeats.includes(seatNumber)
// //         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
// //         : [...selectedSeats, seatNumber]; // Select seat

// //       setSelectedSeats(updatedSeats);
// //       onSeatSelect(updatedSeats); // Update parent component with selected seats
// //     }
// //   };

// //   const clearSelection = () => {
// //     setSelectedSeats([]);
// //     onSeatSelect([]); // Notify parent component about cleared selection
// //   };

// //   const renderSeats = () => {
// //     const seats = [];
// //     for (let row = 0; row < totalRows; row++) {
// //       const seatRow = [];
// //       for (let seat = 1; seat <= seatsPerRow; seat++) {
// //         const seatNumber = row * seatsPerRow + seat;

// //         seatRow.push(
// //           <Button
// //             key={seatNumber}
// //             onClick={() => handleSeatClick(seatNumber)}
// //             sx={{
// //               margin: 0.5,
// //               backgroundColor: selectedSeats.includes(seatNumber)
// //                 ? "green"
// //                 : bookedSeats.includes(seatNumber)
// //                 ? "red"
// //                 : "gray",
// //               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
// //               color: "white",
// //               '&:hover': {
// //                 backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
// //               },
// //             }}
// //             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
// //             aria-label={`Seat ${seatNumber} ${bookedSeats.includes(seatNumber) ? 'Booked' : selectedSeats.includes(seatNumber) ? 'Selected' : 'Available'}`}
// //           >
// //             {seatNumber}
// //           </Button>
// //         );
// //       }
// //       seats.push(
// //         <Box key={row} display="flex" justifyContent="center">
// //           {seatRow}
// //         </Box>
// //       );
// //     }
// //     return seats;
// //   };

// //   const availableSeats = totalSeats - bookedSeats.length;

// //   return (
// //     <Box>
// //       <Typography variant="h6" textAlign="center" mb={2}>
// //         Select Your Seats
// //       </Typography>

// //       {/* Show fully booked message when no seats are available */}
// //       {availableSeats === 0 ? (
// //         <Typography variant="h6" color="red" textAlign="center">
// //           This show is already fully booked. Please select a different time or date.
// //         </Typography>
// //       ) : (
// //         renderSeats()
// //       )}

// //       {selectedSeats.length > 0 && (
// //         <Box textAlign="center" mt={2}>
// //           <Typography variant="body1">Selected Seats: {selectedSeats.join(", ")}</Typography>
// //           <Button onClick={clearSelection} variant="outlined" color="secondary" sx={{ mt: 1 }}>
// //             Clear Selection
// //           </Button>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
//   const totalRows = 5; // Number of rows
//   const seatsPerRow = 10; // Seats per row
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {
//     if (!bookedSeats.includes(seatNumber)) {
//       const updatedSeats = selectedSeats.includes(seatNumber)
//         ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
//         : [...selectedSeats, seatNumber]; // Select seat

//       setSelectedSeats(updatedSeats);
//       onSeatSelect(updatedSeats); // Update parent component with selected seats
//     }
//   };

//   const renderSeats = () => {
//     const seats = [];
//     for (let row = 0; row < totalRows; row++) {
//       const seatRow = [];
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatNumber = row * seatsPerRow + seat;

//         seatRow.push(
//           <Button
//             key={seatNumber}
//             onClick={() => handleSeatClick(seatNumber)}
//             sx={{
//               margin: 0.5,
//               backgroundColor: selectedSeats.includes(seatNumber)
//                 ? "green"
//                 : bookedSeats.includes(seatNumber)
//                 ? "red"
//                 : "gray",
//               pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
//               color: "white",
//               '&:hover': {
//                 backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
//               },
//             }}
//             disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
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
//     <Box>
//       <Typography variant="h6" textAlign="center" mb={2}>
//         Select Your Seats
//       </Typography>
//       {bookedSeats.length === totalSeats ? (
//         <Typography variant="h6" color="red" textAlign="center">
//           All seats for this show are booked. Please select a different time or date.
//         </Typography>
//       ) : (
//         renderSeats()
//       )}
//     </Box>
//   );
// };


// export default SeatSelection;




//=================


import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";

const SeatSelection = ({ onSeatSelect, bookedSeats, totalSeats = 50 }) => {
  const totalRows = 5; // Number of rows
  const seatsPerRow = 10; // Seats per row
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Letters for row labeling (e.g., A, B, C, ...)
  const rowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").slice(0, totalRows);

  const handleSeatClick = (seatNumber) => {
    if (!bookedSeats.includes(seatNumber)) {
      const updatedSeats = selectedSeats.includes(seatNumber)
        ? selectedSeats.filter((seat) => seat !== seatNumber) // Deselect seat
        : [...selectedSeats, seatNumber]; // Select seat

      setSelectedSeats(updatedSeats);
      onSeatSelect(updatedSeats); // Update parent component with selected seats
    }
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < totalRows; row++) {
      const seatRow = [];
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${rowLetters[row]}${seat}`; // Format seat number (e.g., A1, B3)

        seatRow.push(
          <Button
            key={seatNumber}
            onClick={() => handleSeatClick(seatNumber)}
            sx={{
              margin: "2px",
              width: "40px", // Smaller width
              height: "40px", // Smaller height
              minWidth: "unset", // Remove extra padding
              backgroundColor: selectedSeats.includes(seatNumber)
                ? "green"
                : bookedSeats.includes(seatNumber)
                ? "red"
                : "gray",
              pointerEvents: bookedSeats.includes(seatNumber) ? "none" : "auto",
              color: "white",
              '&:hover': {
                backgroundColor: bookedSeats.includes(seatNumber) ? "red" : selectedSeats.includes(seatNumber) ? "darkgreen" : "lightgray"
              },
            }}
            disabled={bookedSeats.includes(seatNumber)} // Disable booked seats
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
    <Box>
      <Typography variant="h6" textAlign="center" mb={2}>
        Select Your Seats
      </Typography>
      {/* Status Indicator */}
      <Box display="flex" justifyContent="center" mb={2}>
        <Box display="flex" alignItems="center" mr={2}>
          <Button disabled sx={{ backgroundColor: "green", width: "20px", height: "20px", marginRight: "4px" }} />
          <Typography variant="body2">Selected</Typography>
        </Box>
        <Box display="flex" alignItems="center" mr={2}>
          <Button disabled sx={{ backgroundColor: "red", width: "20px", height: "20px", marginRight: "4px" }} />
          <Typography variant="body2">Booked</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Button disabled sx={{ backgroundColor: "gray", width: "20px", height: "20px", marginRight: "4px" }} />
          <Typography variant="body2">Available</Typography>
        </Box>
      </Box>
      {bookedSeats.length === totalSeats ? (
        <Typography variant="h6" color="red" textAlign="center">
          All seats for this show are booked. Please select a different time or date.
        </Typography>
      ) : (
        renderSeats()
      )}
    </Box>
  );
};

export default SeatSelection;