import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AllRoutes from './routes/AllRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { adminActions, userActions } from './redux/store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

function App() {
let dispatch = useDispatch()

  let isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  let isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) { 
      dispatch(userActions.login())
    }
    else if (localStorage.getItem("adminId")) { 
      dispatch(adminActions.login())
    }
   },[])

  return (
    <div className="">
       <ToastContainer />
      <Header />
      <AllRoutes/>
    </div>
  );
}

export default App;
