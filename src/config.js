

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAPgW_qwwCvBGAS21ycnjqzNIlILXI5A-M",
//   authDomain: "movie-booking-project.firebaseapp.com",
//   projectId: "movie-booking-project",
//   storageBucket: "movie-booking-project.appspot.com",
//   messagingSenderId: "509038481088",
//   appId: "1:509038481088:web:fe18ba95f539713b126725"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export const GoogleAuth = async () => {
//     const provider = new GoogleAuthProvider();
//     return await signInWithPopup(auth, provider);
// }

// export const SignInWithEmail = async (email, password) => {
//     return await signInWithEmailAndPassword(auth, email, password);
// }

// export const SignUpWithEmail = async (email, password, name) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
//     // Update the user's profile with the name
//     await updateProfile(userCredential.user, {
//       displayName: name,
//     });

//     return userCredential; // Return the user data
//   } catch (error) {
//     console.error("Signup Error:", error);
//     throw error;
//   }
// };



//------




import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPgW_qwwCvBGAS21ycnjqzNIlILXI5A-M",
  authDomain: "movie-booking-project.firebaseapp.com",
  projectId: "movie-booking-project",
  storageBucket: "movie-booking-project.appspot.com",
  messagingSenderId: "509038481088",
  appId: "1:509038481088:web:fe18ba95f539713b126725",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

// Sign in with Email -  work
export const SignInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential; // Return the user data if successful
  } catch (error) {
    const customError = handleCustomError(error); // Handle and return a custom error
    throw customError;
  }
};

// // Sign up with Email - work
// export const SignUpWithEmail = async (email, password, name) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Update the user's profile with the name
//     await updateProfile(userCredential.user, {
//       displayName: name,
//     });

//     return userCredential; // Return the user data if successful
//   } catch (error) {
//     const customError = handleCustomError(error); // Handle and return a custom error
//     throw customError;
//   }
// };


// Sign up with Email (already updated profile with name)
// export const SignUpWithEmail = async (email, password, name) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Update the user's profile with the name
//     await updateProfile(userCredential.user, {
//       displayName: name,
//     });

//     // Save user details in localStorage
//     const userId = userCredential.user.uid;
//     const userData = {
//       name: userCredential.user.displayName || name,
//       email: userCredential.user.email,
//     };
//     localStorage.setItem('userId', userId);
//     localStorage.setItem(`user_${userId}`, JSON.stringify(userData));

//     return userCredential; // Return the user data if successful
//   } catch (error) {
//     const customError = handleCustomError(error); // Handle and return a custom error
//     throw customError;
//   }
// };


// Sign up with Email
// export const SignUpWithEmail = async (email, password, name) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Update the user's profile with the name
//     await updateProfile(userCredential.user, {
//       displayName: name,
//     });

//     // Refetch user to ensure the displayName is updated
//     const user = getAuth().currentUser; // Fetch the updated user

//     // Save user details in localStorage
//     const userId = user.uid;
//     const userData = {
//       name: user.displayName || name, // Ensure name is set properly
//       email: user.email,
//     };
//     localStorage.setItem('userId', userId);
//     localStorage.setItem(`user_${userId}`, JSON.stringify(userData));

//     return userCredential; // Return the user data if successful
//   } catch (error) {
//     const customError = handleCustomError(error); // Handle and return a custom error
//     throw customError;
//   }
// };



// Sign up with Email
export const SignUpWithEmail = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Update the user's profile with the name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    // Refetch user to ensure the displayName is updated
    const user = getAuth().currentUser;

    // Ensure displayName is updated
    if (user.displayName === null) {
      await updateProfile(user, { displayName: name });
    }

    // Save user details in localStorage
    const userId = user.uid;
    const userData = {
      name: user.displayName || name, // Use the form name if displayName is not set
      email: user.email,
    };
    localStorage.setItem("userId", userId);
    localStorage.setItem(`user_${userId}`, JSON.stringify(userData));

    return userCredential; // Return the user data if successful
  } catch (error) {
    const customError = handleCustomError(error); // Handle and return a custom error
    throw customError;
  }
};



// Sign in with Email
// export const SignInWithEmail = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);

//     // Save user details in localStorage
//     const userId = userCredential.user.uid;
//     const userData = {
//       name: userCredential.user.displayName,
//       email: userCredential.user.email,
//     };
//     localStorage.setItem('userId', userId);
//     localStorage.setItem(`user_${userId}`, JSON.stringify(userData));

//     return userCredential; // Return the user data if successful
//   } catch (error) {
//     const customError = handleCustomError(error); // Handle and return a custom error
//     throw customError;
//   }
// };




// Helper function to handle and return custom errors
const handleCustomError = (error) => {
  let customError = { code: error.code, message: '' };

  // Customize error messages based on Firebase error codes
  switch (error.code) {
    case "auth/email-already-in-use":
      customError.message = "This email is already in use. Please try logging in.";
      break;
    case "auth/weak-password":
      customError.message = "Password should be at least 6 characters long.";
      break;
    case "auth/wrong-password":
      customError.message = "Incorrect password. Please try again.";
      break;
    case "auth/user-not-found":
      customError.message = "No user found with this email. Please sign up.";
      break;
    case "auth/invalid-email":
      customError.message = "Invalid email address. Please enter a valid email.";
      break;
    default:
      customError.message = "An error occurred. Please try again.";
  }

  return customError;
};
