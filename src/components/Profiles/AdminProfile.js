
// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";
// import { getAdminById } from "../../api/api";
// // import { getAdmidData } from "../../helpers/api-helpers";
// const AdminProfile = () => {
//   const [admin, setAdmim] = useState();
//   const onResReceived = (res) => {
//     setAdmim(res.admin);
//   };
//   useEffect(() => {
//     getAdminById()
//       .then(onResReceived)
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(admin);
//   return (
//     <Box width="100%" display={"flex"}>
//       <Box
//         display="flex"
//         flexDirection={"column"}
//         justifyContent="center"
//         alignItems={"center"}
//         width="30%"
//       >
//         <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
//         <Typography
//           padding={1}
//           width="200px"
//           textAlign={"center"}
//           border="1px solid #ccc"
//           borderRadius={10}
//         >
//           Email: {admin && admin.email}
//         </Typography>
//       </Box>
//       <Box width="70%" display="flex" flexDirection={"column"}>
//         <Typography
//           variant="h3"
//           fontFamily={"verdana"}
//           textAlign="center"
//           padding={2}
//         >
//           Added Movies
//         </Typography>

//         <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
//           <List>
//             {admin &&
//               admin.addedMovies.map((movie, index) => (
//                 <ListItem
//                   sx={{
//                     bgcolor: "#00d386",
//                     color: "white",
//                     textAlign: "center",
//                     margin: 1,
//                   }}
//                   key={index}
//                 >
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Movie: {movie.title}
//                   </ListItemText>
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Releasing: {new Date(movie.releaseDate).toDateString()}
//                   </ListItemText>
//                 </ListItem>
//               ))}
//           </List>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminProfile;


//---------------------


// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";
// import { getAdminById } from "../../api/api";

// const AdminProfile = () => {
//   const [admin, setAdmin] = useState();

//   const onResReceived = (res) => {
//     setAdmin(res.admin);
//     storeMoviesInLocalStorage(res.admin.addedMovies);
//   };

//   const storeMoviesInLocalStorage = (movies) => {
//     if (movies && movies.length > 0) {
//       // Get existing movies from localStorage
//       const existingMovies = JSON.parse(localStorage.getItem("addedMovies")) || [];

//       // Merge new movies with existing ones
//       const updatedMovies = [...existingMovies, ...movies].reduce((acc, movie) => {
//         const existingMovie = acc.find(item => item.title === movie.title);
//         if (!existingMovie) {
//           acc.push(movie);
//         }
//         return acc;
//       }, []);

//       // Save the updated movies array to localStorage
//       localStorage.setItem("addedMovies", JSON.stringify(updatedMovies));
//     }
//   };

//   useEffect(() => {
//     getAdminById()
//       .then(onResReceived)
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width="100%" display={"flex"}>
//       <Box
//         display="flex"
//         flexDirection={"column"}
//         justifyContent="center"
//         alignItems={"center"}
//         width="30%"
//       >
//         <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
//         <Typography
//           padding={1}
//           width="200px"
//           textAlign={"center"}
//           border="1px solid #ccc"
//           borderRadius={10}
//         >
//           Email: {admin && admin.email}
//         </Typography>
//       </Box>
//       <Box width="70%" display="flex" flexDirection={"column"}>
//         <Typography
//           variant="h3"
//           fontFamily={"verdana"}
//           textAlign="center"
//           padding={2}
//         >
//           Added Movies
//         </Typography>

//         <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
//           <List>
//             {admin &&
//               admin.addedMovies.map((movie, index) => (
//                 <ListItem
//                   sx={{
//                     bgcolor: "#00d386",
//                     color: "white",
//                     textAlign: "center",
//                     margin: 1,
//                   }}
//                   key={index}
//                 >
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Movie: {movie.title}
//                   </ListItemText>
//                   <ListItemText
//                     sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                   >
//                     Releasing: {new Date(movie.releaseDate).toDateString()}
//                   </ListItemText>
//                 </ListItem>
//               ))}
//           </List>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminProfile;



//--------------


// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";

// const AdminProfile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [addedMovies, setAddedMovies] = useState([]);

//   useEffect(() => {
//     // Simulating fetching admin data
//     const fetchAdminData = async () => {
//       // Replace this with actual API call
//       const adminData = {
//         email: "admin@example.com",
//         addedMovies: [
//           { title: "Inception", releaseDate: "2010-07-16" },
//           { title: "The Dark Knight", releaseDate: "2008-07-18" },
//         ],
//       };
//       setAdmin(adminData);
//       setAddedMovies(adminData.addedMovies);

//       // Store added movies in localStorage
//       localStorage.setItem("addedMovies", JSON.stringify(adminData.addedMovies));
//     };

//     fetchAdminData().catch((err) => console.log(err));
//   }, []);

//   console.log(admin);

//   return (
//     <Box width="100%" display={"flex"}>
//       <Box
//         display="flex"
//         flexDirection={"column"}
//         justifyContent="center"
//         alignItems={"center"}
//         width="30%"
//       >
//         <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
//         <Typography
//           padding={1}
//           width="200px"
//           textAlign={"center"}
//           border="1px solid #ccc"
//           borderRadius={10}
//         >
//           Email: {admin && admin.email}
//         </Typography>
//       </Box>
//       <Box width="70%" display="flex" flexDirection={"column"}>
//         <Typography
//           variant="h3"
//           fontFamily={"verdana"}
//           textAlign="center"
//           padding={2}
//         >
//           Added Movies
//         </Typography>

//         <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
//           <List>
//             {addedMovies.map((movie, index) => (
//               <ListItem
//                 sx={{
//                   bgcolor: "#00d386",
//                   color: "white",
//                   textAlign: "center",
//                   margin: 1,
//                 }}
//                 key={index}
//               >
//                 <ListItemText
//                   sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                 >
//                   Movie: {movie.title}
//                 </ListItemText>
//                 <ListItemText
//                   sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                 >
//                   Releasing: {new Date(movie.releaseDate).toDateString()}
//                 </ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminProfile;




//-----------------------------





// // AdminProfile.js
// import { Box } from "@mui/system";
// import React, { useEffect, useState } from "react";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
// import { List, ListItem, ListItemText, Typography } from "@mui/material";
// import { toast } from "react-toastify";

// const AdminProfile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [addedMovies, setAddedMovies] = useState([]);

//   useEffect(() => {
//     // Simulate fetching admin data
//     const fetchAdminData = async () => {
//       const adminData = {
//         email: "admin@example.com",
//       };
//       setAdmin(adminData);

//       // Get adminId from localStorage or define a hardcoded one
//       const adminId = localStorage.getItem('adminId') || '2lSaN4RY74aG5KmE63Oe9D7EpzW2';
      
//       if (!adminId) {
//         toast.error("Admin ID is undefined. Cannot fetch movies.");
//         return;
//       }

//       const storedMovies = JSON.parse(localStorage.getItem(`addedMovies_${adminId}`)) || [];
//       setAddedMovies(storedMovies);
//     };

//     fetchAdminData().catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box width="100%" display={"flex"}>
//       <Box
//         display="flex"
//         flexDirection={"column"}
//         justifyContent="center"
//         alignItems={"center"}
//         width="30%"
//       >
//         <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
//         <Typography
//           padding={1}
//           width="200px"
//           textAlign={"center"}
//           border="1px solid #ccc"
//           borderRadius={10}
//         >
//           Email: {admin && admin.email}
//         </Typography>
//       </Box>
//       <Box width="70%" display="flex" flexDirection={"column"}>
//         <Typography
//           variant="h3"
//           fontFamily={"verdana"}
//           textAlign="center"
//           padding={2}
//         >
//           Added Movies
//         </Typography>

//         <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
//           <List>
//             {addedMovies.map((movie, index) => (
//               <ListItem
//                 sx={{
//                   bgcolor: "#00d386",
//                   color: "white",
//                   textAlign: "center",
//                   margin: 1,
//                 }}
//                 key={index}
//               >
//                 <ListItemText
//                   sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                 >
//                   Movie: {movie.Title}
//                 </ListItemText>
//                 <ListItemText
//                   sx={{ margin: 1, width: "100px", textAlign: "left" }}
//                 >
//                   Releasing: {new Date(movie.Released).toDateString()}
//                 </ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminProfile;



//------------------------



import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { toast } from "react-toastify";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [addedMovies, setAddedMovies] = useState([]);

  useEffect(() => {
    const adminId = localStorage.getItem("adminId");

    if (adminId) {
      // Simulating fetching admin data based on adminId
      const adminData = {
        email: "admin@example.com", // This can be replaced with an actual API call
      };
      setAdmin(adminData);

      // Fetching added movies for the specific admin
      const storedMovies = JSON.parse(localStorage.getItem(`addedMovies_${adminId}`)) || [];
      const uniqueMovies = removeDuplicateMovies(storedMovies); // Assume this function is defined elsewhere
      setAddedMovies(uniqueMovies);
    } else {
      toast.error("Admin ID is undefined. Cannot fetch movies.");
    }
  }, []);

  return (
    <Box width="100%" display={"flex"}>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        width="30%"
      >
        <PersonRoundedIcon sx={{ fontSize: "20rem" }} />
        <Typography
          padding={1}
          width="200px"
          textAlign={"center"}
          border="1px solid #ccc"
          borderRadius={10}
        >
          Email: {admin && admin.email}
        </Typography>
      </Box>
      <Box width="70%" display="flex" flexDirection={"column"}>
        <Typography
          variant="h3"
          fontFamily={"verdana"}
          textAlign="center"
          padding={2}
        >
          Added Movies
        </Typography>

        <Box margin="auto" display="flex" flexDirection={"column"} width="80%">
          <List>
            {addedMovies.map((movie, index) => (
              <ListItem
                sx={{
                  bgcolor: "#00d386",
                  color: "white",
                  textAlign: "center",
                  margin: 1,
                }}
                key={index}
              >
                <ListItemText
                  sx={{ margin: 1, width: "100px", textAlign: "left" }}
                >
                  Movie: {movie.Title}
                </ListItemText>
                <ListItemText
                  sx={{ margin: 1, width: "100px", textAlign: "left" }}
                >
                  Releasing: {new Date(movie.Released).toDateString()}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

// Helper function to remove duplicate movies based on title (or any other criteria you prefer)
const removeDuplicateMovies = (movies) => {
  const uniqueMovies = Array.from(new Map(movies.map(movie => [movie.Title, movie])).values());
  return uniqueMovies;
};

export default AdminProfile;
