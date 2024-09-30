import React from "react";
import AuthForm from "./AuthForm";
import { sendUserAuthRequest } from "../../api/api";
import { useDispatch } from "react-redux";
import {  userActions } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch()
  const { navigate } = useNavigate();
  const onResReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
    navigate("/");
  };

  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuthRequest(data.formData, data.signup)
      // .then((res) => console.log("Auth", res))
      .then(onResReceived)
    .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default User;
