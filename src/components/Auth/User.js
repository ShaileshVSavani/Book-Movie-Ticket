


import AuthForm from "./AuthForm";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/store";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUpWithEmail, SignInWithEmail, GoogleAuth } from "../../config"; 
import { toast } from "react-toastify"; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from || "/"; // Redirect path after login

  const handleLoginSuccess = () => {
    toast.success("Login successful!", {
      autoClose: 1500,  // Show for 1.5 seconds
      onClose: () => navigate(from), // Navigate after the toast closes
    });
  };

  const handleSignupSuccess = () => {
    toast.success("Signup successful!", {
      autoClose: 1500,  // Show for 1.5 seconds
      onClose: () => navigate(from), // Navigate after the toast closes
    });
  };

  const onDataReceived = (data, signup) => {
    dispatch(userActions.login());
    localStorage.setItem("userId", data.user.uid); // Store Firebase UID
    
    
    if (signup) {
      handleSignupSuccess(); // Show signup success toast and navigate
    } else {
      handleLoginSuccess(); // Show login success toast and navigate
    }
  };

  const getData = (data) => {
    const { formData, signup, googleLogin } = data;

    if (googleLogin) {
      GoogleAuth()
        .then((result) => onDataReceived(result, false))
        .catch((err) => {
          toast.error(`Google Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
        });
    } else if (signup) {
      SignUpWithEmail(formData.email, formData.password)
        .then((result) => onDataReceived(result, true)) // Pass true for signup success
        .catch((err) => {
          toast.error(`Signup Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
        });
    } else {
      SignInWithEmail(formData.email, formData.password)
        .then((result) => onDataReceived(result, false)) // Pass false for login success
        .catch((err) => {
          toast.error(`Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration
        });
    }
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default User;
