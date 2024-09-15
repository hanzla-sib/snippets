import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  // If user is not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If user is logged in, allow access to the component
  return element;
};
export default ProtectedRoute;
