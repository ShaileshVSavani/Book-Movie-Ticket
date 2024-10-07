

import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignUpWithEmail, SignInWithEmail } from "../../config"; 
import { adminActions } from "../../redux/store";
import { toast } from "react-toastify"; // Import toast

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResReceived = (data) => {
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.user.uid); // Store Firebase UID as adminId
    toast.success("Login successful!", { autoClose: 1500 }); // Show success notification with custom duration (3 seconds)
    setTimeout(() => {
      navigate("/"); // Navigate to the home page
     }, 2500)
  };

  const getData = (data) => {
    const { formData, signup } = data;

    if (signup) {
      SignUpWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => {
          toast.error(`Signup Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration (5 seconds)
        });
    } else {
      SignInWithEmail(formData.email, formData.password)
        .then(onResReceived)
        .catch((err) => {
          toast.error(`Login Error: ${err.message}`, { autoClose: 3000 }); // Show error with custom duration (5 seconds)
        });
    }
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  );
};

export default Admin;
