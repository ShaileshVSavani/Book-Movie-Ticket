


// import {
//   Box,
//   Button,
//   Checkbox,
//   FormLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import { addMovie } from "../../api/api";
// import { toast, ToastContainer } from "react-toastify"; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// const labelProps = {
//   mt: 1,
//   mb: 1,
// };

// const AddMovie = () => {
//   const [inputs, setInputs] = useState({
//     Title: "",
//     Plot: "",
//     Poster: "",
//     Released: "",
//     featured: false,
//   });
//   const [actors, setActors] = useState([]);
//   const [actor, setActor] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // Validate that required fields are filled
//   const isValidForm = () => {
//     const { Title, Plot, Poster, Released } = inputs;
//     if (!Title || !Plot || !Poster || !Released || actors.length === 0) {
//       toast.error("Please fill in all required fields.");
//       return false;
//     }
//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form before submitting
//     if (!isValidForm()) return;

//     addMovie({ ...inputs, actors })
//       .then((res) => {
//         console.log(res);
//         // Show success message
//         toast.success("Movie added successfully!");

//         // Clear inputs after successful submission
//         setInputs({
//           Title: "",
//           Plot: "",
//           Poster: "",
//           Released: "",
//           featured: false,
//         });
//         setActors([]);  // Clear actors list
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Failed to add movie");  // Show error message on failure
//       });
//   };

//   return (
//     <div>
//       {/* Toastify Container to show messages */}
//       <ToastContainer position="top-center" autoClose={3000} />
      
//       <form onSubmit={handleSubmit}>
//         <Box
//           width={"50%"}
//           padding={10}
//           margin="auto"
//           display={"flex"}
//           flexDirection="column"
//           boxShadow={"10px 10px 20px #ccc"}
//         >
//           <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
//             Add New Movie
//           </Typography>

//           <FormLabel sx={labelProps}>Title</FormLabel>
//           <TextField
//             value={inputs.Title}
//             onChange={handleChange}
//             name="Title"
//             variant="standard"
//             margin="normal"
//             required // Field is required
//           />

//           <FormLabel sx={labelProps}>Description</FormLabel>
//           <TextField
//             value={inputs.Plot}
//             onChange={handleChange}
//             name="Plot"
//             variant="standard"
//             margin="normal"
//             required // Field is required
//           />

//           <FormLabel sx={labelProps}>Poster URL</FormLabel>
//           <TextField
//             value={inputs.Poster}
//             onChange={handleChange}
//             name="Poster"
//             variant="standard"
//             margin="normal"
//             required // Field is required
//           />

//           <FormLabel sx={labelProps}>Release Date</FormLabel>
//           <TextField
//             type={"date"}
//             value={inputs.Released}
//             onChange={handleChange}
//             name="Released"
//             variant="standard"
//             margin="normal"
//             required // Field is required
//           />

//           <FormLabel sx={labelProps}>Actor</FormLabel>
//           <Box display={"flex"}>
//             <TextField
//               value={actor}
//               name="actor"
//               onChange={(e) => setActor(e.target.value)}
//               variant="standard"
//               margin="normal"
//             />
//             <Button
//               onClick={() => {
//                 if (actor.trim()) {
//                   setActors([...actors, actor]);
//                   setActor(""); // Clear actor input field
//                 } else {
//                   toast.error("Please enter an actor name.");
//                 }
//               }}
//             >
//               Add
//             </Button>
//           </Box>

//           <FormLabel sx={labelProps}>Featured</FormLabel>
//           <Checkbox
//             name="featured"
//             checked={inputs.featured}
//             onClick={(e) =>
//               setInputs((prevState) => ({
//                 ...prevState,
//                 featured: e.target.checked,
//               }))
//             }
//             sx={{ mr: "auto" }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             sx={{
//               width: "30%",
//               margin: "auto",
//               bgcolor: "#2b2d42",
//               ":hover": {
//                 bgcolor: "#121217",
//               },
//             }}
//           >
//             Add New Movie
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddMovie;



//-------------------


// AddMovie.js
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

const labelProps = {
  mt: 1,
  mb: 1,
};

const AddMovie = () => {
  const [inputs, setInputs] = useState({
    Title: "",
    Plot: "",
    Poster: "",
    Released: "",
    featured: false,
  });
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidForm = () => {
    const { Title, Plot, Poster, Released } = inputs;
    if (!Title || !Plot || !Poster || !Released || actors.length === 0) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm()) return;

    const newMovie = { ...inputs, actors };

    // Get adminId from localStorage or define a hardcoded one
    const adminId = localStorage.getItem('adminId') || '2lSaN4RY74aG5KmE63Oe9D7EpzW2';

    if (!adminId) {
      toast.error("Admin ID is undefined. Cannot store movie.");
      return;
    }

    // Store added movie in localStorage for the specific admin
    const storageKey = `addedMovies_${adminId}`;
    const existingMovies = JSON.parse(localStorage.getItem(storageKey)) || [];
    existingMovies.push(newMovie);
    localStorage.setItem(storageKey, JSON.stringify(existingMovies));

    toast.success("Movie added successfully!");
    
    // Clear inputs
    setInputs({
      Title: "",
      Plot: "",
      Poster: "",
      Released: "",
      featured: false,
    });
    setActors([]);
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px #ccc"}
        >
          <Typography textAlign={"center"} variant="h5" fontFamily={"verdana"}>
            Add New Movie
          </Typography>
          <FormLabel sx={labelProps}>Title</FormLabel>
          <TextField
            value={inputs.Title}
            onChange={handleChange}
            name="Title"
            variant="standard"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Description</FormLabel>
          <TextField
            value={inputs.Plot}
            onChange={handleChange}
            name="Plot"
            variant="standard"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Poster URL</FormLabel>
          <TextField
            value={inputs.Poster}
            onChange={handleChange}
            name="Poster"
            variant="standard"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Release Date</FormLabel>
          <TextField
            type={"date"}
            value={inputs.Released}
            onChange={handleChange}
            name="Released"
            variant="standard"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField
              value={actor}
              name="actor"
              onChange={(e) => setActor(e.target.value)}
              variant="standard"
              margin="normal"
            />
            <Button
              onClick={() => {
                if (actor.trim()) {
                  setActors([...actors, actor]);
                  setActor(""); 
                } else {
                  toast.error("Please enter an actor name.");
                }
              }}
            >
              Add
            </Button>
          </Box>
          <FormLabel sx={labelProps}>Featured</FormLabel>
          <Checkbox
            name="featured"
            checked={inputs.featured}
            onClick={(e) =>
              setInputs((prevState) => ({
                ...prevState,
                featured: e.target.checked,
              }))
            }
            sx={{ mr: "auto" }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddMovie;
