import React from 'react'
import AuthForm from './AuthForm'
import { useActionData, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendAdminAuthRequest } from '../../api/api'
import { adminActions } from '../../redux/store'

const Admin = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onResReceived = (data) => {
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    // localStorage.setItem("token", data.token);
    navigate("/");
  };

  const getData = (data) => {
    console.log("Admin", data)
    sendAdminAuthRequest(data.formData)
      .then(onResReceived)
      // .then(() => dispatch(adminActions.login()))
    .catch((err) => console.log(err));
  }
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin