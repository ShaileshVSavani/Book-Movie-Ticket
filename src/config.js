// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth, provider)
}
 
export const SingInWithEmail = async (email, password) => { 
    return await signInWithEmailAndPassword(email, password)
}

export const SignUpWithEmail = async (email, password) => { 
    return await createUserWithEmailAndPassword(email, password) 
}