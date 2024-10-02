// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
//     const provider = new GoogleAuthProvider()
//     return await signInWithPopup(auth, provider)
// }
 
// export const SignInWithEmail = async (email, password) => {
//     return await signInWithEmailAndPassword(email, password)
// }

// // export const SignUpWithEmail = async (email, password) => {
// //     return await createUserWithEmailAndPassword(email, password)
// // }

// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth } from "./firebase"; // Ensure you're importing the correct Firebase auth instance

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


//---


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPgW_qwwCvBGAS21ycnjqzNIlILXI5A-M",
  authDomain: "movie-booking-project.firebaseapp.com",
  projectId: "movie-booking-project",
  storageBucket: "movie-booking-project.appspot.com",
  messagingSenderId: "509038481088",
  appId: "1:509038481088:web:fe18ba95f539713b126725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const GoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
}

export const SignInWithEmail = async (email, password) => { 
    return await signInWithEmailAndPassword(auth, email, password);
}

export const SignUpWithEmail = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user's profile with the name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    return userCredential; // Return the user data
  } catch (error) {
    console.error("Signup Error:", error);
    throw error;
  }
};
