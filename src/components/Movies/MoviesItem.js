// import {
//     Button,
//     Card,
//     CardActions,
//     CardContent,
//     Typography,
//   } from "@mui/material";
//   import React from "react";
//   import { Link } from "react-router-dom";
  
//   const MovieItem = ({ Title, Released, Poster, id }) => {
//     return (
//       <Card
//         sx={{
//           margin: 2,
//           width: 250,
//           height: 340,
//           borderRadius: 5,
//           ":hover": {
//             boxShadow: "10px 10px 20px #ccc",
//           },
//         }}
//       >
//         <img height={"50%"} width="100%" src={Poster} alt={Title} />
//         <CardContent>
//           <Typography gutterBottom variant="h8" component="div">
//             {Title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {/* {year} */}
//             {new Date(Released).toDateString()}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button
//             variant="contained"
//             fullWidth
//             LinkComponent={Link}
//             to={`/booking/${id}`}
//             sx={{
//               margin: "auto",
//               bgcolor: "#2b2d42",
//               ":hover": {
//                 bgcolor: "#121217",
//               },
//             }}
//             size="small"
//           >
//             Book
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   };
  
//   export default MovieItem;



//====


// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const MovieItem = ({ Title, Released, Poster, id, isAdmin = false }) => {
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

//   // Determine the link based on user login status and role
//   let linkTo = "/user"; // Default link

//   if (isAdminLoggedIn && isUserLoggedIn) {
//     linkTo = `/booking/${id}`;
//   } else if (isAdmin) {
//     linkTo = "/admin";
//   }

//   return (
//     <Card
//       sx={{
//         margin: 2,
//         width: 250,
//         height: 340,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width="100%" src={Poster} alt={Title} />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {Title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(Released).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           component={Link}
//           to={linkTo} // Use the dynamic link
//           sx={{
//             margin: "auto",
//             bgcolor: "#2b2d42",
//             ":hover": {
//               bgcolor: "#121217",
//             },
//           }}
//           size="small"
//         >
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MovieItem;




//----------------


// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// const MovieItem = ({ Title, Released, Poster, id, isAdmin = false }) => {
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   const navigate = useNavigate();

//   const handleBook = () => {
//     if (!isAdminLoggedIn && !isUserLoggedIn) {
//       // If not logged in, navigate to the login page
//       navigate("/user", { state: { from: `/booking/${id}` } });
//     } else if (isAdminLoggedIn || isUserLoggedIn) {
//       // If both admin and user are logged in, navigate to booking
//       navigate(`/booking/${id}`);
//     } else {
//       // If only admin or only user is logged in, navigate accordingly
//       navigate(isAdmin ? "/admin" : "/user");
//     }
//   };

//   return (
//     <Card
//       sx={{
//         margin: 2,
//         width: 250,
//         height: 340,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width="100%" src={Poster} alt={Title} />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {Title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(Released).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleBook} // Trigger handleBook on click
//           sx={{
//             margin: "auto",
//             bgcolor: "#2b2d42",
//             ":hover": {
//               bgcolor: "#121217",
//             },
//           }}
//           size="small"
//         >
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MovieItem;


//----


// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const MovieItem = ({ Title, Released, Poster, id, isAdmin = false }) => {
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   const navigate = useNavigate();

//   const handleBook = () => {
//     if (!isAdminLoggedIn && !isUserLoggedIn) {
//       // If not logged in, navigate to the login page
//       navigate("/user", { state: { from: `/booking/${id}` } });
//     } else {
//       // If logged in, navigate to the booking page
//       navigate(`/booking/${id}`);
//     }
//   };

//   return (
//     <Card
//       sx={{
//         margin: 2,
//         width: 250,
//         height: 340,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width="100%" src={Poster} alt={Title} />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {Title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(Released).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleBook} // Trigger handleBook on click
//           sx={{
//             margin: "auto",
//             bgcolor: "#2b2d42",
//             ":hover": {
//               bgcolor: "#121217",
//             },
//           }}
//           size="small"
//         >
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MovieItem;



//----


// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// const MovieItem = ({ Title, Released, Poster, id, isAdmin = false }) => {
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   const navigate = useNavigate();

//   const handleBook = () => {
//     if (!isAdminLoggedIn && !isUserLoggedIn) {
//       // If not logged in, navigate to the login page
//       navigate("/user", { state: { from: `/booking/${id}` } });
//     } else if (isAdminLoggedIn && isUserLoggedIn) {
//       // If both admin and user are logged in, navigate to booking
//       navigate(`/booking/${id}`);
//     } else {
//       // If only admin or only user is logged in, navigate accordingly
//       navigate(isAdmin ? "/admin" : "/user");
//     }
//   };

//   return (
//     <Card
//       sx={{
//         margin: 2,
//         width: 250,
//         height: 340,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width="100%" src={Poster} alt={Title} />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {Title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(Released).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleBook} // Trigger handleBook on click
//           sx={{
//             margin: "auto",
//             bgcolor: "#2b2d42",
//             ":hover": {
//               bgcolor: "#121217",
//             },
//           }}
//           size="small"
//         >
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MovieItem;




//----



// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// const MovieItem = ({ Title, Released, Poster, id, isAdmin = false }) => {
//   const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
//   const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
//   const navigate = useNavigate();

//   const handleBook = () => {
//     if (!isAdminLoggedIn && !isUserLoggedIn) {
//       // If neither admin nor user is logged in, redirect to login page
//       navigate("/user", { state: { from: `/booking/${id}` } });
//     } else if (isUserLoggedIn) {
//       // If user is logged in, go to booking page
//       navigate(`/booking/${id}`);
//     } else if (isAdminLoggedIn) {
//       // If admin is logged in, admins should not book; navigate to admin dashboard (example)
//       navigate("/admin");
//     }
//   };

//   return (
//     <Card
//       sx={{
//         margin: 2,
//         width: 250,
//         height: 340,
//         borderRadius: 5,
//         ":hover": {
//           boxShadow: "10px 10px 20px #ccc",
//         },
//       }}
//     >
//       <img height={"50%"} width="100%" src={Poster} alt={Title} />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {Title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {new Date(Released).toDateString()}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={handleBook} // Trigger handleBook on click
//           sx={{
//             margin: "auto",
//             bgcolor: "#2b2d42",
//             ":hover": {
//               bgcolor: "#121217",
//             },
//           }}
//           size="small"
//         >
//           Book
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default MovieItem;


//---

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ Title, Released, Poster, id }) => {
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const handleBook = () => {
    if (!isAdminLoggedIn && !isUserLoggedIn) {
      // If neither admin nor user is logged in, redirect to user login page
      navigate("/user", { state: { from: `/booking/${id}` } });
    } else {
      // If either user or admin is logged in, go to booking page
      navigate(`/booking/${id}`);
    }
  };

  return (
    <Card
      sx={{
        margin: 2,
        width: 250,
        height: 340,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <img height={"50%"} width="100%" src={Poster} alt={Title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(Released).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={handleBook} // Trigger handleBook on click
          sx={{
            margin: "auto",
            bgcolor: "#2b2d42",
            ":hover": {
              bgcolor: "#121217",
            },
          }}
          size="small"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieItem;
