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



//--------------


// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile,  fetchSignInMethodsForEmail } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; // Firestore imports
// import { db } from "./firebase"; // Ensure your Firestore db is initialized
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
// import { auth, db } from "./firebase"; // Assuming you're using Firebase auth and Firestore

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
// const db = getFirestore(app); // Initialize Firestore

// export const GoogleAuth = async () => {
//     const provider = new GoogleAuthProvider();
//     return await signInWithPopup(auth, provider);
// }

// export const SignInWithEmail = async (email, password) => {
//     return await signInWithEmailAndPassword(auth, email, password);
// }



// export const SignInWithEmail = async (email, password) => {
//   try {
//     // Attempt to sign in the user
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential; // Return the user data if successful
//   } catch (error) {
//     let customErrorMessage;

//     // Handle specific Firebase error codes
//     switch (error.code) {
//       case 'auth/wrong-password':
//         customErrorMessage = "Incorrect password. Please try again.";
//         break;
//       case 'auth/user-not-found':
//         customErrorMessage = "No user found with this email. Please sign up.";
//         break;
//       case 'auth/invalid-email':
//         customErrorMessage = "The email address is not valid.";
//         break;
//       case 'auth/user-disabled':
//         customErrorMessage = "This user account has been disabled. Please contact support.";
//         break;
//       case 'auth/operation-not-allowed':
//         customErrorMessage = "Email/password accounts are not enabled. Please contact support.";
//         break;
//       default:
//         customErrorMessage = "An error occurred during login. Please try again.";
//     }

//     console.error("Login Error:", customErrorMessage);
//     throw new Error(customErrorMessage); // Throw the custom error for UI handling
//   }
// };

// export const SignInWithEmail = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     return userCredential;
//   } catch (error) {
//     let customErrorMessage;
//     switch (error.code) {
//       case 'auth/wrong-password':
//         customErrorMessage = "Incorrect password. Please try again.";
//         break;
//       case 'auth/user-not-found':
//         customErrorMessage = "No user found with this email. Please sign up.";
//         break;
//       case 'auth/invalid-email':
//         customErrorMessage = "The email address is not valid.";
//         break;
//       case 'auth/user-disabled':
//         customErrorMessage = "This user account has been disabled. Please contact support.";
//         break;
//       case 'auth/operation-not-allowed':
//         customErrorMessage = "Email/password accounts are not enabled. Please contact support.";
//         break;
//       default:
//         customErrorMessage = "An error occurred during login. Please try again.";
//     }

//     console.error("Login Error:", customErrorMessage);
//     throw new Error(customErrorMessage);
//   }
// };



// Modify SignUpWithEmail to store user role
// export const SignUpWithEmail = async (email, password, name, isAdmin = false) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Update the user's profile with the name
//     await updateProfile(userCredential.user, {
//       displayName: name,
//     });

//     // Save user role (isAdmin) in Firestore
//     await setDoc(doc(db, "users", userCredential.user.uid), {
//       name: name,
//       email: email,
//       isAdmin: isAdmin, // Store admin status
//     });

//     return userCredential; // Return the user data
//   } catch (error) {
//     console.error("Signup Error:", error);
//     throw error;
//   }
// };


//----

// export const SignUpWithEmail = async (email, password, name, isAdmin = false) => {
//   try {
//     // Check if the user already exists in Firestore
//     const userDoc = await getDoc(doc(db, "users", email)); // Using email as the Firestore document id
    
//     if (userDoc.exists()) {
//       // User exists, check if they need to be updated as admin
//       const userData = userDoc.data();
//       if (!userData.isAdmin && isAdmin) {
//         // If user is not admin but this request is for admin, update their role
//         await updateDoc(doc(db, "users", email), { isAdmin: true });
//         console.log("User role updated to admin");
//       } else {
//         throw new Error("User already signed up with this email.");
//       }
//     } else {
//       // If user doesn't exist, create a new user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
//       // Update the user's profile with their name
//       await updateProfile(userCredential.user, { displayName: name });
  
//       // Save user data (including the role) in Firestore
//       await setDoc(doc(db, "users", userCredential.user.uid), {
//         name: name,
//         email: email,
//         isAdmin: isAdmin, // Store admin status
//       });
  
//       return userCredential; // Return the new user data
//     }
//   } catch (error) {
//     console.error("Signup Error:", error);
//     throw error; // Propagate the error to the caller
//   }
// };

// Get user role from Firestore
// export const getUserRole = async (userId) => {
//   const userDoc = await getDoc(doc(db, "users", userId));
//   if (userDoc.exists()) {
//     return userDoc.data().isAdmin;
//   } else {
//     throw new Error("User not found!");
//   }
// };

//----


// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   getAuth,
//   fetchSignInMethodsForEmail,
// } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "./firebase"; // Ensure correct import for Firestore

// export const SignUpWithEmail = async (email, password, name, isAdmin = false) => {
//   try {
//     const auth = getAuth(); // Get the auth instance

//     // Check if user already exists in Firebase Authentication
//     const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    
//     if (signInMethods.length) {
//       // If user already exists, throw an error
//       throw new Error("User already exists. Please log in.");
//     }

//     // Proceed to create a new user
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);

//     // Update the user's profile with the name
//     await updateProfile(userCredential.user, {
//       displayName: name,
//     });

//     // Save user data (including the role) in Firestore
//     await setDoc(doc(db, "users", userCredential.user.uid), {
//       name: name,
//       email: email,
//       isAdmin: isAdmin, // Store admin status
//     });

//     return userCredential; // Return the new user data
//   } catch (error) {
//     // console.error("Signup Error:", error.message);
//     // throw error; // Propagate the error to the caller

//     let customErrorMessage;

//     // Handle specific Firebase error codes
//     if (error.code === 'auth/email-already-in-use') {
//       customErrorMessage = "User already exists. Please use a different email.";
//     } else {
//       customErrorMessage = "An error occurred during signup. Please try again.";
//     }

//     console.error("Signup Error:", customErrorMessage);
//     throw new Error(customErrorMessage); // Throw the custom error
//   }
// };



//-----------------



// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile,  fetchSignInMethodsForEmail } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; // Firestore imports



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
// const db = getFirestore(app); // Initialize Firestore

// export const GoogleAuth = async () => {
//     const provider = new GoogleAuthProvider();
//     return await signInWithPopup(auth, provider);
// }



// export const SignInWithEmail = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const userId = userCredential.user.uid;

//     // Fetch user role from Firestore
//     const userDoc = await getDoc(doc(db, "users", userId));
//     if (userDoc.exists()) {
//       return { user: { ...userDoc.data(), uid: userId } }; // Return user data along with role
//     } else {
//       throw new Error("User not found!");
//     }
//   } catch (error) {
//     let customErrorMessage;

//     switch (error.code) {
//       case 'auth/wrong-password':
//         customErrorMessage = "Incorrect password. Please try again.";
//         break;
//       case 'auth/user-not-found':
//         customErrorMessage = "No user found with this email. Please sign up.";
//         break;
//       case 'auth/invalid-email':
//         customErrorMessage = "The email address is not valid.";
//         break;
//       case 'auth/user-disabled':
//         customErrorMessage = "This user account has been disabled. Please contact support.";
//         break;
//       case 'auth/operation-not-allowed':
//         customErrorMessage = "Email/password accounts are not enabled. Please contact support.";
//         break;
//       default:
//         customErrorMessage = "An error occurred during login. Please try again.";
//     }

//     console.error("Login Error:", customErrorMessage);
//     throw new Error(customErrorMessage);
//   }
// };



// export const getUserRole = async (userId) => {
//   const userDoc = await getDoc(doc(db, "users", userId));
//   if (userDoc.exists()) {
//     return userDoc.data().isAdmin;
//   } else {
//     throw new Error("User not found!");
//   }
// };



// export const SignUpWithEmail = async (email, password, name, isAdmin) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Store user info in Firestore with role
//     await setDoc(doc(db, "users", user.uid), {
//       email: email,
//       name: name,
//       role: isAdmin ? 'admin' : 'user', // Set role based on isAdmin
//       createdAt: new Date(),
//     });

//     return { user };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };




//-----



// import { initializeApp } from "firebase/app";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Firestore imports

// const firebaseConfig = {
//   apiKey: "AIzaSyAPgW_qwwCvBGAS21ycnjqzNIlILXI5A-M",
//   authDomain: "movie-booking-project.firebaseapp.com",
//   projectId: "movie-booking-project",
//   storageBucket: "movie-booking-project.appspot.com",
//   messagingSenderId: "509038481088",
//   appId: "1:509038481088:web:fe18ba95f539713b126725",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app); // Initialize Firestore

// export const GoogleAuth = async () => {
//   const provider = new GoogleAuthProvider();
//   return await signInWithPopup(auth, provider);
// };

// export const SignInWithEmail = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const userId = userCredential.user.uid;

//     // Fetch user role from Firestore
//     const userDoc = await getDoc(doc(db, "users", userId));
//     if (userDoc.exists()) {
//       return { user: { ...userDoc.data(), uid: userId } }; // Return user data along with role
//     } else {
//       throw new Error("User not found!");
//     }
//   } catch (error) {
//     let customErrorMessage;

//     switch (error.code) {
//       case 'auth/wrong-password':
//         customErrorMessage = "Incorrect password. Please try again.";
//         break;
//       case 'auth/user-not-found':
//         customErrorMessage = "No user found with this email. Please sign up.";
//         break;
//       case 'auth/invalid-email':
//         customErrorMessage = "The email address is not valid.";
//         break;
//       case 'auth/user-disabled':
//         customErrorMessage = "This user account has been disabled. Please contact support.";
//         break;
//       case 'auth/operation-not-allowed':
//         customErrorMessage = "Email/password accounts are not enabled. Please contact support.";
//         break;
//       default:
//         customErrorMessage = "An error occurred during login. Please try again.";
//     }

//     console.error("Login Error:", customErrorMessage);
//     throw new Error(customErrorMessage);
//   }
// };

// // export const SignUpWithEmail = async (email, password, name, role) => {
// //   try {
// //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //     const user = userCredential.user;

// //     // Store user info in Firestore with role
// //     await setDoc(doc(db, "users", user.uid), {
// //       email: email,
// //       name: name,
// //       role: role, // Store the role directly
// //       createdAt: new Date(),
// //     });

// //     return { user };
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };


// export const SignUpWithEmail = async (email, password, name, isAdmin) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Store user info in Firestore with role
//     await setDoc(doc(db, "users", user.uid), {
//       email: email,
//       name: name,
//       role: isAdmin ? 'admin' : 'user', // Set role based on isAdmin
//       createdAt: new Date(),
//     });

//     return { user };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


//----


// import { initializeApp } from "firebase/app";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc, query, where, getDocs, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPgW_qwwCvBGAS21ycnjqzNIlILXI5A-M",
//   authDomain: "movie-booking-project.firebaseapp.com",
//   projectId: "movie-booking-project",
//   storageBucket: "movie-booking-project.appspot.com",
//   messagingSenderId: "509038481088",
//   appId: "1:509038481088:web:fe18ba95f539713b126725",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// export const GoogleAuth = async () => {
//   const provider = new GoogleAuthProvider();
//   return await signInWithPopup(auth, provider);
// };

// // export const SignInWithEmail = async (email, password) => {
// //   try {
// //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //     const userId = userCredential.user.uid;

// //     // Fetch user role from Firestore
// //     const userDoc = await getDoc(doc(db, "users", userId));
// //     if (userDoc.exists()) {
// //       const userData = { ...userDoc.data(), uid: userId };
// //       return { user: userData };
// //     } else {
// //       throw new Error("User not found!");
// //     }
// //   } catch (error) {
// //     let customErrorMessage;

// //     switch (error.code) {
// //       case 'auth/wrong-password':
// //         customErrorMessage = "Incorrect password. Please try again.";
// //         break;
// //       case 'auth/user-not-found':
// //         customErrorMessage = "No user found with this email. Please sign up.";
// //         break;
// //       case 'auth/invalid-email':
// //         customErrorMessage = "The email address is not valid.";
// //         break;
// //       case 'auth/user-disabled':
// //         customErrorMessage = "This user account has been disabled. Please contact support.";
// //         break;
// //       case 'auth/operation-not-allowed':
// //         customErrorMessage = "Email/password accounts are not enabled. Please contact support.";
// //         break;
// //       default:
// //         customErrorMessage = "An error occurred during login. Please try again.";
// //     }

// //     console.error("Login Error:", customErrorMessage);
// //     throw new Error(customErrorMessage);
// //   }
// // };

// export const SignInWithEmail = async (email, password, role) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     const userId = userCredential.user.uid;

//     // Fetch user role from Firestore
//     const userDoc = await getDoc(doc(db, "users", userId));
//     if (userDoc.exists()) {
//       const userData = { ...userDoc.data(), uid: userId };

//       // Check role validity
//       if (role === "admin" && userData.role !== "admin") {
//         throw new Error("This account does not have admin access.");
//       }

//       return { user: userData }; // Return user data along with role
//     } else {
//       throw new Error("User not found!");
//     }
//   } catch (error) {
//     // Handle errors as previously defined
//   }
// };

// export const SignUpWithEmail = async (email, password, name, role) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Store user info in Firestore with their role
//     await setDoc(doc(db, "users", user.uid), {
//       email: email,
//       name: name,
//       role: role,
//       createdAt: new Date(),
//     });

//     return { user };
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// // Function to check if the email is already used by another user or admin
// export const checkUserByEmail = async (email) => {
//   const userQuery = query(collection(db, "users"), where("email", "==", email));
//   const querySnapshot = await getDocs(userQuery);
//   return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// };


//-----



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
