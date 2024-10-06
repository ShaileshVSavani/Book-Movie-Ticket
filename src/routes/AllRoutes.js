// import React from "react";
// import { Route, Routes, useParams } from "react-router-dom";
// import HomePage from "../components/HomePage/HomePage";
// import Admin from "../components/Auth/Admin";

// import Movies from "../components/Movies/Movies";
// import Booking from "../components/Bookings/Booking";
// import UserProfile from "../components/Profiles/UserProfile";
// import AddMovie from "../components/Movies/AddMovie";
// import AdminProfile from "../components/Profiles/AdminProfile";
// import User from "../components/Auth/User";
// import MovieDetails from "../components/Movies/MovieDetails";
// import Payment from "../components/Bookings/Payment";

// const AllRoutes = () => {

//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/movies" element={<Movies />} />
//       <Route path="/admin" element={<Admin />} />
//       <Route path="/user" element={<User />} />
//       <Route path="/userProfile" element={<UserProfile />} />
//       <Route path="/addMovie" element={<AddMovie />} />
//       <Route path="/payment" element={<Payment />} />
//       <Route path="/user-admin" element={<AdminProfile />} />
//       <Route path="/movieDetail/:id" element={<MovieDetails />} />
//       <Route path="/booking/:id" element={<Booking />} />
//     </Routes>
//   );
// };

// export default AllRoutes;


//---


// import React, { createContext, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "../components/HomePage/HomePage";
// import Admin from "../components/Auth/Admin";
// import Movies from "../components/Movies/Movies";
// import Booking from "../components/Bookings/Booking";
// import UserProfile from "../components/Profiles/UserProfile";
// import AddMovie from "../components/Movies/AddMovie";
// import AdminProfile from "../components/Profiles/AdminProfile";
// import User from "../components/Auth/User";
// import MovieDetails from "../components/Movies/MovieDetails";
// import Payment from "../components/Bookings/Payment";
// import PrivateRoute from "./PrivateRoute"; // Importing PrivateRoute component
// import Confirmation from "../components/Bookings/Confirmation";
// import BookingConfirmation from "../components/Bookings/BookingConfirmation";


//   // Create a context to hold user data
//   const UserContext = createContext();

// const AllRoutes = () => {
//   const [userId, setUserId] = useState("user123"); // Replace with real userId from login

//   return (
//     <UserContext.Provider value={{ userId }}>
//       <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/movies" element={<Movies />} />
//       <Route path="/movieDetail/:id" element={<MovieDetails />} />
//       {/* <Route path="/booking/:id" element={<Booking />} /> */}

//       {/* Public routes */}
//       <Route path="/user" element={<User />} />
//       <Route path="/admin" element={<Admin />} />

//       {/* Private routes */}
//       <Route
//         path="/userProfile"
//         element={
//           <PrivateRoute>
//             <UserProfile />
//           </PrivateRoute>
//         }
//       />
//         <Route
//         path="/payment"
//         element={
//           <PrivateRoute>
//             <Payment />
//           </PrivateRoute>
//         }
//       />
//           <Route
//         path="/confirmation"
//         element={
//           <PrivateRoute>
//             <Confirmation />
//           </PrivateRoute>
//         }
//       />    <Route
//       path="/bookingConfirmation"
//       element={
//         <PrivateRoute>
//           <BookingConfirmation userId={userId}/>
//         </PrivateRoute>
//       }
//     />
//          <Route
//         path="/booking/:id"
//         element={
//           <PrivateRoute>
//             <Booking />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/addMovie"
//         element={
//           <PrivateRoute>
//             <AddMovie />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/admin"
//         element={
//           <PrivateRoute>
//             <Admin />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/user-admin"
//         element={
//           <PrivateRoute>
//             <AdminProfile />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//     </UserContext.Provider>
//   );
// };

// export default AllRoutes;




//--------------------



import React, { createContext, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Admin from "../components/Auth/Admin";
import Movies from "../components/Movies/Movies";
import Booking from "../components/Bookings/Booking";
import UserProfile from "../components/Profiles/UserProfile";
import AddMovie from "../components/Movies/AddMovie";
import AdminProfile from "../components/Profiles/AdminProfile";
import User from "../components/Auth/User";
import MovieDetails from "../components/Movies/MovieDetails";
import Payment from "../components/Bookings/Payment";
import PrivateRoute from "./PrivateRoute"; // Importing PrivateRoute component
import Confirmation from "../components/Bookings/Confirmation";
import BookingConfirmation from "../components/Bookings/BookingConfirmation";

// Create a context to hold user data
export const UserContext = createContext();

const AllRoutes = () => {
  const [userId, setUserId] = useState(null); // Initial state is null

  // Load userId from localStorage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId); // Set the userId from localStorage if it exists
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <UserContext.Provider value={{ userId }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movieDetail/:id" element={<MovieDetails />} />
        
        {/* Public routes */}
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />

        {/* Private routes */}
        <Route
          path="/userProfile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="/confirmation"
          element={
            <PrivateRoute>
              <Confirmation />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookingConfirmation"
          element={
            <PrivateRoute>
              <BookingConfirmation userId={userId} />
            </PrivateRoute>
          }
        />
        <Route
          path="/booking/:id"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route
          path="/addMovie"
          element={
            <PrivateRoute>
              <AddMovie />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-admin"
          element={
            <PrivateRoute>
              <AdminProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </UserContext.Provider>
  );
};

export default AllRoutes;




//===============


// import React, { createContext, useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "../components/HomePage/HomePage";
// import Admin from "../components/Auth/Admin";
// import Movies from "../components/Movies/Movies";
// import Booking from "../components/Bookings/Booking";
// import UserProfile from "../components/Profiles/UserProfile";
// import AddMovie from "../components/Movies/AddMovie";
// import AdminProfile from "../components/Profiles/AdminProfile";
// import User from "../components/Auth/User";
// import MovieDetails from "../components/Movies/MovieDetails";
// import Payment from "../components/Bookings/Payment";
// import PrivateRoute from "./PrivateRoute"; // Importing PrivateRoute component
// import Confirmation from "../components/Bookings/Confirmation";
// import BookingConfirmation from "../components/Bookings/BookingConfirmation";

// // Create a context to hold user data
// export const UserContext = createContext();

// const AllRoutes = () => {
//   const [userId, setUserId] = useState(null); // Initial state is null
//   const [isAdmin, setIsAdmin] = useState(false); // State to track if user is admin

//   // Load userId and isAdmin from localStorage on component mount
//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     const storedAdminId = localStorage.getItem('adminId');
//     if (storedUserId) {
//       setUserId(storedUserId); // Set the userId from localStorage if it exists
//     }
//     if (storedAdminId) {
//       setIsAdmin(true); // Set isAdmin to true if adminId exists in localStorage
//     }
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <UserContext.Provider value={{ userId, isAdmin }}>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movieDetail/:id" element={<MovieDetails />} />
        
//         {/* Public routes */}
//         <Route path="/user" element={<User />} />
//         <Route path="/admin" element={<Admin />} />

//         {/* Private routes */}
//         <Route
//           path="/userProfile"
//           element={
//             <PrivateRoute>
//               <UserProfile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/adminProfile"
//           element={
//             <PrivateRoute>
//               <AdminProfile />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/addMovie"
//           element={
//             <PrivateRoute>
//               <AddMovie />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/booking/:id"
//           element={
//             <PrivateRoute>
//               <Booking isAdmin={isAdmin} /> {/* Pass isAdmin prop */}
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/confirmation"
//           element={
//             <PrivateRoute>
//               <Confirmation />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/bookingConfirmation"
//           element={
//             <PrivateRoute>
//               <BookingConfirmation />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </UserContext.Provider>
//   );
// };

// export default AllRoutes;
