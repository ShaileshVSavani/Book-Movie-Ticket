import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ userId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear bookings and user-related data from localStorage
    localStorage.removeItem(`bookings_${userId}`);
    
    // Clear other user-related information if needed, e.g., session tokens
    localStorage.removeItem('userSession');

    // Redirect to login or homepage
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
