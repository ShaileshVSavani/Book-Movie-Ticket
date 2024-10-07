
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { addMovie } from "../../api/api";

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

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const isValidForm = () => {
//     const { Title, Plot, Poster, Released } = inputs;
//     if (!Title || !Plot || !Poster || !Released || actors.length === 0) {
//       toast.error("Please fill in all required fields.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isValidForm()) return;

//     const newMovie = { ...inputs, actors };

//     // Get adminId from localStorage or define a hardcoded one
//     const adminId = localStorage.getItem('adminId') || '2lSaN4RY74aG5KmE63Oe9D7EpzW2';

//     if (!adminId) {
//       toast.error("Admin ID is undefined. Cannot store movie.");
//       return;
//     }

//     // Store added movie in localStorage for the specific admin
//     const storageKey = `addedMovies_${adminId}`;
//     const existingMovies = JSON.parse(localStorage.getItem(storageKey)) || [];
//     existingMovies.push(newMovie);
//     localStorage.setItem(storageKey, JSON.stringify(existingMovies));

//     // Call the API to add the movie
//     addMovie(newMovie)
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
//         setActors([]); // Clear actors list
//         setActor(""); // Clear the actor input field
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Failed to add movie"); // Show error message on failure
//       });
//   };

//   return (
//     <div>
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
//             required
//           />
//           <FormLabel sx={labelProps}>Description</FormLabel>
//           <TextField
//             value={inputs.Plot}
//             onChange={handleChange}
//             name="Plot"
//             variant="standard"
//             margin="normal"
//             required
//           />
//           <FormLabel sx={labelProps}>Poster URL</FormLabel>
//           <TextField
//             value={inputs.Poster}
//             onChange={handleChange}
//             name="Poster"
//             variant="standard"
//             margin="normal"
//             required
//           />
//           <FormLabel sx={labelProps}>Release Date</FormLabel>
//           <TextField
//             type={"date"}
//             value={inputs.Released}
//             onChange={handleChange}
//             name="Released"
//             variant="standard"
//             margin="normal"
//             required
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
//             onChange={(e) =>
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


//=====================



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
import { addMovie } from "../../api/api";

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

    // Call the API to add the movie
    addMovie(newMovie)
      .then((res) => {
        console.log(res);
        // Show success message
        toast.success("Movie added successfully!");

        // Clear inputs after successful submission
        setInputs({
          Title: "",
          Plot: "",
          Poster: "",
          Released: "",
          featured: false,
        });
        setActors([]); // Clear actors list
        setActor(""); // Clear the actor input field
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add movie"); // Show error message on failure
      });
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <form onSubmit={handleSubmit}>
        <Box
          width={{ xs: "90%", sm: "70%", md: "50%" }}
          padding={3}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"0 4px 20px rgba(0, 0, 0, 0.2)"}
          borderRadius={2}
          bgcolor="#ffffff"
        >
          <Typography textAlign={"center"} variant="h5" fontFamily={"Verdana"}>
            Add New Movie
          </Typography>
          <FormLabel sx={labelProps}>Title</FormLabel>
          <TextField
            value={inputs.Title}
            onChange={handleChange}
            name="Title"
            variant="outlined"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Description</FormLabel>
          <TextField
            value={inputs.Plot}
            onChange={handleChange}
            name="Plot"
            variant="outlined"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Poster URL</FormLabel>
          <TextField
            value={inputs.Poster}
            onChange={handleChange}
            name="Poster"
            variant="outlined"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Release Date</FormLabel>
          <TextField
            type={"date"}
            value={inputs.Released}
            onChange={handleChange}
            name="Released"
            variant="outlined"
            margin="normal"
            required
          />
          <FormLabel sx={labelProps}>Actor</FormLabel>
          <Box display={"flex"} alignItems="center">
            <TextField
              value={actor}
              name="actor"
              onChange={(e) => setActor(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (actor.trim()) {
                  setActors([...actors, actor]);
                  setActor(""); // Clear actor input field
                } else {
                  toast.error("Please enter an actor name.");
                }
              }}
              sx={{ marginLeft: 1 }}
            >
              Add
            </Button>
          </Box>
          <FormLabel sx={labelProps}>Featured</FormLabel>
          <Checkbox
            name="featured"
            checked={inputs.featured}
            onChange={(e) =>
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
              width: "50%",
              margin: "20px auto 0",
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
